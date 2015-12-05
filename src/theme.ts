import * as td from 'typedoc';
import * as Handlebars from 'handlebars';

/**
* Markdown theme implementation of TypeDoc.
*/
export default class MarkdownTheme extends td.output.DefaultTheme {
  prop: {
    str: string;
    num: number;
  };

  func(arg: {str: string; num: number;}, f: (arg: string) => number): {str: string, num: number;} {
    return arg;
  }

  /**
  * Create a new MarkdownTheme instance.
  *
  * @param renderer  The renderer this theme is attached to.
  * @param basePath  The base path of this theme.
  */
  constructor(renderer: td.output.Renderer, basePath: string) {
    super(renderer, basePath);
    renderer.removePlugin('assets'); // markdown doesn't need assets
    renderer.removePlugin('javascriptIndex'); // markdown doesn't need search.js
    renderer.removePlugin('prettyPrint'); // new lines and spaces have meaning in markdown, don't omit them automatically!
    Handlebars.registerHelper('newLine', () => '\n');
  }

  isOutputDirectory(path: string): boolean {
    return td.FS.existsSync(td.Path.join(path, 'index.md'));
  }

  getUrls(project: td.models.ProjectReflection): td.output.UrlMapping[] {
    /**
    * Replace the extensions of the given model and its descendants' url
    *
    * @param model
    */
    function replaceModelUrlExtention(model: any): void {
      if (!model) {
        return;
      }
      model.url = MarkdownTheme.replaceExtention(model.url);
      model.children && model.children.forEach(replaceModelUrlExtention);
    }

    return super.getUrls(project).map(urlMapping => {
      replaceModelUrlExtention(urlMapping.model);
      return new td.output.UrlMapping(
        MarkdownTheme.replaceExtention(urlMapping.url),
        urlMapping.model,
        urlMapping.template
      )
    });
  }

  getNavigation(project: td.models.ProjectReflection): td.output.NavigationItem {
    /**
    * Replace the extentions of paths held by the given navigation and its descendants.
    *
    * @param navigation The target navigation instance.
    */
    function replaceNavigationExtention(navigation: td.output.NavigationItem): void {
      navigation.url = MarkdownTheme.replaceExtention(navigation.url);
       if (navigation.dedicatedUrls) {
         navigation.dedicatedUrls = navigation.dedicatedUrls.map(MarkdownTheme.replaceExtention);
       }
      navigation.children && navigation.children.forEach(replaceNavigationExtention);
    }

    const navigation = super.getNavigation(project);
    replaceNavigationExtention(navigation);
    return navigation;
  }

  /**
  * Replace the extension of the path from html to md
  *
  * @param path The original path to be replaced.
  * @returns    The replaced path.
  * @private
  */
  private static replaceExtention(path: string): string {
    return path ? path.replace(/\.html($|#.*$)/, '.md$1') : path;
  }
}
