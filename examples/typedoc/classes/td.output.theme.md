# Class Theme
Base class of all themes.A theme defines the logical and graphical output of a documentation. Themes aredirectories containing a ```theme.js``` file defining a [[BaseTheme]] subclass and aseries of subdirectories containing templates and assets. You can select a themethrough the ```--theme <path/to/theme>``` commandline argument.The theme class controls which files will be created through the [[BaseTheme.getUrls]]function. It returns an array of [[UrlMapping]] instances defining the target files, modelsand templates to use. Additionally themes can subscribe to the events emitted by[[Renderer]] to control and manipulate the output process.The default file structure of a theme looks like this:- ```/assets/```<br>Contains static assets like stylesheets, images or javascript files used by the theme.The [[AssetsPlugin]] will deep copy this directory to the output directory.- ```/layouts/```<br>Contains layout templates that the [[LayoutPlugin]] wraps around the output of thepage template. Currently only one ```default.hbs``` layout is supported. Layout templatesreceive the current [[OutputPageEvent]] instance as their handlebars context. Place the```{{{contents}}}``` variable to render the actual body of the document within this template.- ```/partials/```<br>Contains partial templates that can be used by other templates using handlebars partialsyntax ```{{> partial-name}}```. The [[PartialsPlugin]] loads all files in this directoryand combines them with the partials of the default theme.- ```/templates/```<br>Contains the main templates of the theme. The theme maps models to these templates throughthe [[BaseTheme.getUrls]] function. If the [[Renderer.getTemplate]] function cannot find agiven template within this directory, it will try to find it in the default theme```/templates/``` directory. Templates receive the current [[OutputPageEvent]] instance astheir handlebars context. You can access the target model through the ```{{model}}``` variable.- ```/theme.js```<br>A javascript file that returns the definition of a [[BaseTheme]] subclass. This file willbe executed within the context of TypeDoc, one may directly access all classes and functionsof TypeDoc. If this file is not present, an instance of [[DefaultTheme]] will be used to renderthis theme.

## Index

### Constructors
* [constructor](td.output.theme.md#constructor)

### Properties
* [basePath](td.output.theme.md#basepath)
* [renderer](td.output.theme.md#renderer)

### Methods
* [getNavigation](td.output.theme.md#getnavigation)
* [getUrls](td.output.theme.md#geturls)
* [isOutputDirectory](td.output.theme.md#isoutputdirectory)

## Constructors

### new Theme(renderer: [Renderer](td.output.renderer.md), basePath: string): [Theme](td.output.theme.md)
Create a new BaseTheme instance.  
* Defined in [td/output/Theme.ts:56](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Theme.ts#L56)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| renderer | [Renderer](td.output.renderer.md)| The renderer this theme is attached to. |
| basePath | string| The base path of this theme. |

#### Returns: [Theme](td.output.theme.md)

## Properties

### basePath: string
The base path of this theme.
* Defined in [td/output/Theme.ts:56](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Theme.ts#L56)


### renderer: [Renderer](td.output.renderer.md)
The renderer this theme is attached to.
* Defined in [td/output/Theme.ts:51](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Theme.ts#L51)


## Methods

### getNavigation(project: [ProjectReflection](td.models.projectreflection.md)): [NavigationItem](td.output.navigationitem.md)
Create a navigation structure for the given project.A navigation is a tree structure consisting of [[NavigationItem]] nodes. Thisfunction should return the root node of the desired navigation tree.The [[NavigationPlugin]] will call this hook before a project will be rendered.The plugin will update the state of the navigation tree and pass it to thetemplates.  
* Defined in [td/output/Theme.ts:121](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Theme.ts#L121)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| project | [ProjectReflection](td.models.projectreflection.md)| The project whose navigation should be generated. |

#### Returns: [NavigationItem](td.output.navigationitem.md)
The root navigation item.


### getUrls(project: [ProjectReflection](td.models.projectreflection.md)): [UrlMapping](td.output.urlmapping.md)[]
Map the models of the given project to the desired output files.Every theme must have an own implementation of this function, the defaultimplementation always returns an empty array.  
* Defined in [td/output/Theme.ts:103](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Theme.ts#L103)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| project | [ProjectReflection](td.models.projectreflection.md)| The project whose urls should be generated. |

#### Returns: [UrlMapping](td.output.urlmapping.md)[]
A list of [[UrlMapping]] instances defining which models
                should be rendered to which files.


### isOutputDirectory(path: string): boolean
Test whether the given path contains a documentation generated by this theme.TypeDoc empties the output directory before rendering a project. This functionis used to ensure that only previously generated documentations are deleted.When this function returns FALSE, the documentation will not be created and anerror message will be displayed.Every theme must have an own implementation of this function, the defaultimplementation always returns FALSE. see [[Renderer.prepareOutputDirectory]]
  
* Defined in [td/output/Theme.ts:88](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Theme.ts#L88)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string| The path of the directory that should be tested. |

#### Returns: boolean
TRUE if the given path seems to be a previous output directory,
             otherwise FALSE.



Generated using [TypeDoc](http://typedoc.io)
