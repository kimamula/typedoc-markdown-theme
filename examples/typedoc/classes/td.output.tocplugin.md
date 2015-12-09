# Class TocPlugin
A plugin that generates a table of contents for the current page.The table of contents will start at the nearest module or dynamic module. This pluginsets the [[OutputPageEvent.toc]] property.

### Extends
* [RendererPlugin](td.output.rendererplugin.md)

## Index

### Constructors
* [constructor](td.output.tocplugin.md#constructor)

### Properties
* [renderer](td.output.tocplugin.md#renderer)

### Methods
* [onRendererBeginPage](td.output.tocplugin.md#onrendererbeginpage)
* [remove](td.output.tocplugin.md#remove)
* [buildToc](td.output.tocplugin.md#buildtoc)

## Constructors

### new TocPlugin(renderer: [Renderer](td.output.renderer.md)): [TocPlugin](td.output.tocplugin.md)
Create a new TocPlugin instance.  
* Overwrites [RendererPlugin](td.output.rendererplugin.md).[constructor](td.output.rendererplugin.md#constructor)
* Defined in [td/output/plugins/TocPlugin.ts:10](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/TocPlugin.ts#L10)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| renderer | [Renderer](td.output.renderer.md)| The renderer this plugin should be attached to. |

#### Returns: [TocPlugin](td.output.tocplugin.md)

## Properties

### Protected renderer: [Renderer](td.output.renderer.md)
The renderer this plugin is attached to.
* Inherited from [RendererPlugin](td.output.rendererplugin.md).[renderer](td.output.rendererplugin.md#renderer)
* Defined in [td/output/RendererPlugin.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L11)


## Methods

### Private onRendererBeginPage(page: [OutputPageEvent](td.output.outputpageevent.md)): void
Triggered before a document will be rendered.  
* Defined in [td/output/plugins/TocPlugin.ts:27](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/TocPlugin.ts#L27)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| page | [OutputPageEvent](td.output.outputpageevent.md)| An event object describing the current render operation. |

#### Returns: void

### remove(): void
Remove this plugin from the renderer.  
* Inherited from [RendererPlugin](td.output.rendererplugin.md).[remove](td.output.rendererplugin.md#remove)
* Defined in [td/output/RendererPlugin.ts:28](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L28)

#### Returns: void

### Static buildToc(model: [Reflection](td.models.reflection.md), trail: [Reflection](td.models.reflection.md)[], parent: [NavigationItem](td.output.navigationitem.md)): void
Create a toc navigation item structure.  
* Defined in [td/output/plugins/TocPlugin.ts:51](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/TocPlugin.ts#L51)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| model | [Reflection](td.models.reflection.md)| The models whose children should be written to the toc. |
| trail | [Reflection](td.models.reflection.md)[]| Defines the active trail of expanded toc entries. |
| parent | [NavigationItem](td.output.navigationitem.md)| The parent [[NavigationItem]] the toc should be appended to. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
