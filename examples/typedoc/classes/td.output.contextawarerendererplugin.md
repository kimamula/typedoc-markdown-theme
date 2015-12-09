# Class ContextAwareRendererPlugin
A plugin for the renderer that reads the current render context.

### Extends
* [RendererPlugin](td.output.rendererplugin.md)

## Index

### Constructors
* [constructor](td.output.contextawarerendererplugin.md#constructor)

### Properties
* [location](td.output.contextawarerendererplugin.md#location)
* [project](td.output.contextawarerendererplugin.md#project)
* [reflection](td.output.contextawarerendererplugin.md#reflection)
* [renderer](td.output.contextawarerendererplugin.md#renderer)

### Methods
* [getRelativeUrl](td.output.contextawarerendererplugin.md#getrelativeurl)
* [onRendererBegin](td.output.contextawarerendererplugin.md#onrendererbegin)
* [onRendererBeginPage](td.output.contextawarerendererplugin.md#onrendererbeginpage)
* [remove](td.output.contextawarerendererplugin.md#remove)

## Constructors

### new ContextAwareRendererPlugin(renderer: [Renderer](td.output.renderer.md)): [ContextAwareRendererPlugin](td.output.contextawarerendererplugin.md)
Create a new ContextAwareRendererPlugin instance.  
* Overwrites [RendererPlugin](td.output.rendererplugin.md).[constructor](td.output.rendererplugin.md#constructor)
* Defined in [td/output/RendererPlugin.ts:52](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L52)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| renderer | [Renderer](td.output.renderer.md)| The renderer this plugin should be attached to. |

#### Returns: [ContextAwareRendererPlugin](td.output.contextawarerendererplugin.md)

## Properties

### Private location: string
The url of the document that is being currently generated.
* Defined in [td/output/RendererPlugin.ts:52](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L52)


### Protected project: [ProjectReflection](td.models.projectreflection.md)
The project that is currently processed.
* Defined in [td/output/RendererPlugin.ts:42](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L42)


### Protected reflection: [DeclarationReflection](td.models.declarationreflection.md)
The reflection that is currently processed.
* Defined in [td/output/RendererPlugin.ts:47](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L47)


### Protected renderer: [Renderer](td.output.renderer.md)
The renderer this plugin is attached to.
* Inherited from [RendererPlugin](td.output.rendererplugin.md).[renderer](td.output.rendererplugin.md#renderer)
* Defined in [td/output/RendererPlugin.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L11)


## Methods

### getRelativeUrl(absolute: string): string
Transform the given absolute path into a relative path.  
* Defined in [td/output/RendererPlugin.ts:74](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L74)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| absolute | string| The absolute path to transform. |

#### Returns: string
A path relative to the document currently processed.


### Protected onRendererBegin(event: [OutputEvent](td.output.outputevent.md)): void
Triggered before the renderer starts rendering a project.  
* Defined in [td/output/RendererPlugin.ts:85](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L85)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | [OutputEvent](td.output.outputevent.md)| An event object describing the current render operation. |

#### Returns: void

### Protected onRendererBeginPage(page: [OutputPageEvent](td.output.outputpageevent.md)): void
Triggered before a document will be rendered.  
* Defined in [td/output/RendererPlugin.ts:95](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L95)


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
