# Module output
Holds all logic used render and output the final documentation.The [[Renderer]] class is the central controller within this namespace. When invoked it createsan instance of [[BaseTheme]] which defines the layout of the documentation and fires aseries of [[OutputEvent]] events. Instances of [[BasePlugin]] can listen to these events andalter the generated output.

## Index

### Enumerations
* [PrettyPrintState](../enums/td.output.prettyprintstate.md)

### Classes
* [AssetsPlugin](../classes/td.output.assetsplugin.md)
* [ContextAwareRendererPlugin](../classes/td.output.contextawarerendererplugin.md)
* [DefaultTheme](../classes/td.output.defaulttheme.md)
* [JavascriptIndexPlugin](../classes/td.output.javascriptindexplugin.md)
* [LayoutPlugin](../classes/td.output.layoutplugin.md)
* [MarkdownEvent](../classes/td.output.markdownevent.md)
* [MarkedLinksPlugin](../classes/td.output.markedlinksplugin.md)
* [MarkedPlugin](../classes/td.output.markedplugin.md)
* [MinimalTheme](../classes/td.output.minimaltheme.md)
* [NavigationItem](../classes/td.output.navigationitem.md)
* [NavigationPlugin](../classes/td.output.navigationplugin.md)
* [OutputEvent](../classes/td.output.outputevent.md)
* [OutputPageEvent](../classes/td.output.outputpageevent.md)
* [PartialsPlugin](../classes/td.output.partialsplugin.md)
* [PrettyPrintPlugin](../classes/td.output.prettyprintplugin.md)
* [Renderer](../classes/td.output.renderer.md)
* [RendererPlugin](../classes/td.output.rendererplugin.md)
* [Theme](../classes/td.output.theme.md)
* [TocPlugin](../classes/td.output.tocplugin.md)
* [UrlMapping](../classes/td.output.urlmapping.md)

### Interfaces
* [IHandlebarTemplate](../interfaces/td.output.ihandlebartemplate.md)
* [ITemplateMapping](../interfaces/td.output.itemplatemapping.md)


Generated using [TypeDoc](http://typedoc.io)
