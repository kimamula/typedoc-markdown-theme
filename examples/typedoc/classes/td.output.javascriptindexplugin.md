# Class JavascriptIndexPlugin
A plugin that exports an index of the project to a javascript file.The resulting javascript file can be used to build a simple search function.

### Extends
* [RendererPlugin](td.output.rendererplugin.md)

## Index

### Constructors
* [constructor](td.output.javascriptindexplugin.md#constructor)

### Properties
* [renderer](td.output.javascriptindexplugin.md#renderer)

### Methods
* [onRendererBegin](td.output.javascriptindexplugin.md#onrendererbegin)
* [remove](td.output.javascriptindexplugin.md#remove)

## Constructors

### new JavascriptIndexPlugin(renderer: [Renderer](td.output.renderer.md)): [JavascriptIndexPlugin](td.output.javascriptindexplugin.md)
Create a new JavascriptIndexPlugin instance.  
* Overwrites [RendererPlugin](td.output.rendererplugin.md).[constructor](td.output.rendererplugin.md#constructor)
* Defined in [td/output/plugins/JavascriptIndexPlugin.ts:9](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/JavascriptIndexPlugin.ts#L9)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| renderer | [Renderer](td.output.renderer.md)| The renderer this plugin should be attached to. |

#### Returns: [JavascriptIndexPlugin](td.output.javascriptindexplugin.md)

## Properties

### Protected renderer: [Renderer](td.output.renderer.md)
The renderer this plugin is attached to.
* Inherited from [RendererPlugin](td.output.rendererplugin.md).[renderer](td.output.rendererplugin.md#renderer)
* Defined in [td/output/RendererPlugin.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L11)


## Methods

### Private onRendererBegin(event: [OutputEvent](td.output.outputevent.md)): void
Triggered after a document has been rendered, just before it is written to disc.  
* Defined in [td/output/plugins/JavascriptIndexPlugin.ts:26](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/JavascriptIndexPlugin.ts#L26)


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
