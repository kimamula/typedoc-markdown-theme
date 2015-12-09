# Class AssetsPlugin
A plugin that copies the subdirectory ´assets´ from the current themessource folder to the output directory.

### Extends
* [RendererPlugin](td.output.rendererplugin.md)

## Index

### Constructors
* [constructor](td.output.assetsplugin.md#constructor)

### Properties
* [copyDefaultAssets](td.output.assetsplugin.md#copydefaultassets)
* [renderer](td.output.assetsplugin.md#renderer)

### Methods
* [onRendererBegin](td.output.assetsplugin.md#onrendererbegin)
* [remove](td.output.assetsplugin.md#remove)

## Constructors

### new AssetsPlugin(renderer: [Renderer](td.output.renderer.md)): [AssetsPlugin](td.output.assetsplugin.md)
Create a new AssetsPlugin instance.  
* Overwrites [RendererPlugin](td.output.rendererplugin.md).[constructor](td.output.rendererplugin.md#constructor)
* Defined in [td/output/plugins/AssetsPlugin.ts:12](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/AssetsPlugin.ts#L12)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| renderer | [Renderer](td.output.renderer.md)| The renderer this plugin should be attached to. |

#### Returns: [AssetsPlugin](td.output.assetsplugin.md)

## Properties

### copyDefaultAssets: boolean
Should the default assets always be copied to the output directory?
* Defined in [td/output/plugins/AssetsPlugin.ts:12](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/AssetsPlugin.ts#L12)


### Protected renderer: [Renderer](td.output.renderer.md)
The renderer this plugin is attached to.
* Inherited from [RendererPlugin](td.output.rendererplugin.md).[renderer](td.output.rendererplugin.md#renderer)
* Defined in [td/output/RendererPlugin.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L11)


## Methods

### Private onRendererBegin(event: [OutputEvent](td.output.outputevent.md)): void
Triggered before the renderer starts rendering a project.  
* Defined in [td/output/plugins/AssetsPlugin.ts:31](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/AssetsPlugin.ts#L31)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | [OutputEvent](td.output.outputevent.md)| An event object describing the current render operation. |

#### Returns: void

### remove(): void
Remove this plugin from the renderer.  
* Inherited from [RendererPlugin](td.output.rendererplugin.md).[remove](td.output.rendererplugin.md#remove)
* Defined in [td/output/RendererPlugin.ts:28](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L28)

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
