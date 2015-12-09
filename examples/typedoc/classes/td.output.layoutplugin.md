# Class LayoutPlugin
A plugin that wraps the generated output with a layout template.Currently only a default layout is supported. The layout must be storedas ´layouts/default.hbs´ in the theme directory.

### Extends
* [RendererPlugin](td.output.rendererplugin.md)

## Index

### Constructors
* [constructor](td.output.layoutplugin.md#constructor)

### Properties
* [renderer](td.output.layoutplugin.md#renderer)

### Methods
* [onRendererEndPage](td.output.layoutplugin.md#onrendererendpage)
* [remove](td.output.layoutplugin.md#remove)

## Constructors

### new LayoutPlugin(renderer: [Renderer](td.output.renderer.md)): [LayoutPlugin](td.output.layoutplugin.md)
Create a new LayoutPlugin instance.  
* Overwrites [RendererPlugin](td.output.rendererplugin.md).[constructor](td.output.rendererplugin.md#constructor)
* Defined in [td/output/plugins/LayoutPlugin.ts:10](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/LayoutPlugin.ts#L10)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| renderer | [Renderer](td.output.renderer.md)| The renderer this plugin should be attached to. |

#### Returns: [LayoutPlugin](td.output.layoutplugin.md)

## Properties

### Protected renderer: [Renderer](td.output.renderer.md)
The renderer this plugin is attached to.
* Inherited from [RendererPlugin](td.output.rendererplugin.md).[renderer](td.output.rendererplugin.md#renderer)
* Defined in [td/output/RendererPlugin.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L11)


## Methods

### Private onRendererEndPage(page: [OutputPageEvent](td.output.outputpageevent.md)): void
Triggered after a document has been rendered, just before it is written to disc.  
* Defined in [td/output/plugins/LayoutPlugin.ts:27](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/LayoutPlugin.ts#L27)


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


Generated using [TypeDoc](http://typedoc.io)
