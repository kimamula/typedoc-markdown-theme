# Class PartialsPlugin
A plugin that loads all partials of the current theme.Partials must be placed in the ´partials´ subdirectory of the theme. The plugin firstloads the partials of the default theme and then the partials of the current theme.

### Extends
* [RendererPlugin](td.output.rendererplugin.md)

## Index

### Constructors
* [constructor](td.output.partialsplugin.md#constructor)

### Properties
* [renderer](td.output.partialsplugin.md#renderer)

### Methods
* [loadPartials](td.output.partialsplugin.md#loadpartials)
* [onRendererBegin](td.output.partialsplugin.md#onrendererbegin)
* [remove](td.output.partialsplugin.md#remove)

## Constructors

### new PartialsPlugin(renderer: [Renderer](td.output.renderer.md)): [PartialsPlugin](td.output.partialsplugin.md)
Create a new PartialsPlugin instance.  
* Overwrites [RendererPlugin](td.output.rendererplugin.md).[constructor](td.output.rendererplugin.md#constructor)
* Defined in [td/output/plugins/PartialsPlugin.ts:10](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PartialsPlugin.ts#L10)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| renderer | [Renderer](td.output.renderer.md)| The renderer this plugin should be attached to. |

#### Returns: [PartialsPlugin](td.output.partialsplugin.md)

## Properties

### Protected renderer: [Renderer](td.output.renderer.md)
The renderer this plugin is attached to.
* Inherited from [RendererPlugin](td.output.rendererplugin.md).[renderer](td.output.rendererplugin.md#renderer)
* Defined in [td/output/RendererPlugin.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L11)


## Methods

### Private loadPartials(path: string): void
Load all files in the given directory and registers them as partials.  
* Defined in [td/output/plugins/PartialsPlugin.ts:27](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PartialsPlugin.ts#L27)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string| The path of the directory that should be scanned. |

#### Returns: void

### Private onRendererBegin(event: DocumentEvent): void
Triggered before the renderer starts rendering a project.  
* Defined in [td/output/plugins/PartialsPlugin.ts:45](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PartialsPlugin.ts#L45)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | DocumentEvent| An event object describing the current render operation. |

#### Returns: void

### remove(): void
Remove this plugin from the renderer.  
* Inherited from [RendererPlugin](td.output.rendererplugin.md).[remove](td.output.rendererplugin.md#remove)
* Defined in [td/output/RendererPlugin.ts:28](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L28)

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
