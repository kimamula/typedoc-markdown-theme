# Class PrettyPrintPlugin
A plugin that pretty prints the generated html.This not only aids in making the generated html source code more readable, by removingblank lines and unnecessary whitespaces the size of the documentation is reduced withoutvisual impact.At the point writing this the docs of TypeDoc took 97.8 MB  without and 66.4 MB with thisplugin enabled, so it reduced the size to 68% of the original output.

### Extends
* [RendererPlugin](td.output.rendererplugin.md)

## Index

### Constructors
* [constructor](td.output.prettyprintplugin.md#constructor)

### Properties
* [renderer](td.output.prettyprintplugin.md#renderer)

### Methods
* [onRendererEndPage](td.output.prettyprintplugin.md#onrendererendpage)
* [remove](td.output.prettyprintplugin.md#remove)

### Object literals
* [IGNORED_TAGS](td.output.prettyprintplugin.md#ignored_tags)
* [PRE_TAGS](td.output.prettyprintplugin.md#pre_tags)

## Constructors

### new PrettyPrintPlugin(renderer: [Renderer](td.output.renderer.md)): [PrettyPrintPlugin](td.output.prettyprintplugin.md)
Create a new PrettyPrintPlugin instance.  
* Overwrites [RendererPlugin](td.output.rendererplugin.md).[constructor](td.output.rendererplugin.md#constructor)
* Defined in [td/output/plugins/PrettyPrintPlugin.ts:65](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L65)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| renderer | [Renderer](td.output.renderer.md)| The renderer this plugin should be attached to. |

#### Returns: [PrettyPrintPlugin](td.output.prettyprintplugin.md)

## Properties

### Protected renderer: [Renderer](td.output.renderer.md)
The renderer this plugin is attached to.
* Inherited from [RendererPlugin](td.output.rendererplugin.md).[renderer](td.output.rendererplugin.md#renderer)
* Defined in [td/output/RendererPlugin.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L11)


## Methods

### onRendererEndPage(event: [OutputPageEvent](td.output.outputpageevent.md)): void
Triggered after a document has been rendered, just before it is written to disc.  
* Defined in [td/output/plugins/PrettyPrintPlugin.ts:84](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L84)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | [OutputPageEvent](td.output.outputpageevent.md)|  |

#### Returns: void

### remove(): void
Remove this plugin from the renderer.  
* Inherited from [RendererPlugin](td.output.rendererplugin.md).[remove](td.output.rendererplugin.md#remove)
* Defined in [td/output/RendererPlugin.ts:28](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L28)

#### Returns: void

## Object literals

### Static IGNORED_TAGS: object
Map of all tags that will be ignored.
* Defined in [td/output/plugins/PrettyPrintPlugin.ts:39](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L39)


### area: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:40](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L40)


### base: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:41](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L41)


### br: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:42](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L42)


### col: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:44](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L44)


### command: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:45](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L45)


### embed: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:46](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L46)


### hr: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:47](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L47)


### img: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:48](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L48)


### input: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:49](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L49)


### link: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:50](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L50)


### meta: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:51](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L51)


### param: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:52](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L52)


### source: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:53](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L53)


### wbr: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:43](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L43)


### Static PRE_TAGS: object
Map of all tags that prevent this plugin form modifying the following code.
* Defined in [td/output/plugins/PrettyPrintPlugin.ts:59](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L59)


### code: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:61](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L61)


### pre: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:60](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L60)


### script: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:63](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L63)


### style: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:64](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L64)


### textarea: boolean

* Defined in [td/output/plugins/PrettyPrintPlugin.ts:62](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L62)



Generated using [TypeDoc](http://typedoc.io)
