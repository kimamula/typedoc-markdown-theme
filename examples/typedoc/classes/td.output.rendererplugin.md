# Class RendererPlugin
Base class of all plugins that can be attached to the [[Renderer]].

## Index

### Constructors
* [constructor](td.output.rendererplugin.md#constructor)

### Properties
* [renderer](td.output.rendererplugin.md#renderer)

### Methods
* [remove](td.output.rendererplugin.md#remove)

## Constructors

### new RendererPlugin(renderer: [Renderer](td.output.renderer.md)): [RendererPlugin](td.output.rendererplugin.md)
Create a new RendererPlugin instance.  
* Defined in [td/output/RendererPlugin.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L11)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| renderer | [Renderer](td.output.renderer.md)| The renderer this plugin should be attached to. |

#### Returns: [RendererPlugin](td.output.rendererplugin.md)

## Properties

### Protected renderer: [Renderer](td.output.renderer.md)
The renderer this plugin is attached to.
* Defined in [td/output/RendererPlugin.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L11)


## Methods

### remove(): void
Remove this plugin from the renderer.  
* Defined in [td/output/RendererPlugin.ts:28](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L28)

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
