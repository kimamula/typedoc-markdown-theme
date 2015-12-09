# Class MarkedPlugin
A plugin that exposes the markdown, compact and relativeURL helper to handlebars.Templates should parse all comments with the markdown handler so authors caneasily format their documentation. TypeDoc uses the Marked (https://github.com/chjj/marked)markdown parser and HighlightJS (https://github.com/isagalaev/highlight.js) to highlightcode blocks within markdown sections. Additionally this plugin allows to link to other symbolsusing double angle brackets.You can use the markdown helper anywhere in the templates to convert content to html:```handlebars{{#markdown}}{{{comment.text}}}{{/markdown}}```The compact helper removes all newlines of its content:```handlebars{{#compact}}Compactthis{{/compact}}```The relativeURL helper simply transforms an absolute url into a relative url:```handlebars{{#relativeURL url}}```

### Extends
* [ContextAwareRendererPlugin](td.output.contextawarerendererplugin.md)

### Implements
* [IParameterProvider](../interfaces/td.iparameterprovider.md)

## Index

### Constructors
* [constructor](td.output.markedplugin.md#constructor)

### Events
* [EVENT_PARSE_MARKDOWN](td.output.markedplugin.md#event_parse_markdown)

### Properties
* [includePattern](td.output.markedplugin.md#includepattern)
* [includes](td.output.markedplugin.md#includes)
* [mediaDirectory](td.output.markedplugin.md#mediadirectory)
* [mediaPattern](td.output.markedplugin.md#mediapattern)
* [project](td.output.markedplugin.md#project)
* [reflection](td.output.markedplugin.md#reflection)
* [renderer](td.output.markedplugin.md#renderer)

### Methods
* [getCompact](td.output.markedplugin.md#getcompact)
* [getHighlighted](td.output.markedplugin.md#gethighlighted)
* [getIfCond](td.output.markedplugin.md#getifcond)
* [getParameters](td.output.markedplugin.md#getparameters)
* [getRelativeUrl](td.output.markedplugin.md#getrelativeurl)
* [getWordBreaks](td.output.markedplugin.md#getwordbreaks)
* [onParseMarkdown](td.output.markedplugin.md#onparsemarkdown)
* [onRendererBegin](td.output.markedplugin.md#onrendererbegin)
* [onRendererBeginPage](td.output.markedplugin.md#onrendererbeginpage)
* [parseMarkdown](td.output.markedplugin.md#parsemarkdown)
* [remove](td.output.markedplugin.md#remove)

## Constructors

### new MarkedPlugin(renderer: [Renderer](td.output.renderer.md)): [MarkedPlugin](td.output.markedplugin.md)
Create a new MarkedPlugin instance.  
* Overwrites [ContextAwareRendererPlugin](td.output.contextawarerendererplugin.md).[constructor](td.output.contextawarerendererplugin.md#constructor)
* Defined in [td/output/plugins/MarkedPlugin.ts:76](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L76)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| renderer | [Renderer](td.output.renderer.md)| The renderer this plugin should be attached to. |

#### Returns: [MarkedPlugin](td.output.markedplugin.md)

## Events

### Static EVENT_PARSE_MARKDOWN: string
Triggered on the renderer when this plugin parses a markdown string.
* Defined in [td/output/plugins/MarkedPlugin.ts:76](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L76)


## Properties

### Private includePattern: RegExp
The pattern used to find references in markdown.
* Defined in [td/output/plugins/MarkedPlugin.ts:64](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L64)


### Private includes: string
The path referenced files are located in.
* Defined in [td/output/plugins/MarkedPlugin.ts:54](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L54)


### Private mediaDirectory: string
Path to the output media directory.
* Defined in [td/output/plugins/MarkedPlugin.ts:59](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L59)


### Private mediaPattern: RegExp
The pattern used to find media links.
* Defined in [td/output/plugins/MarkedPlugin.ts:69](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L69)


### Protected project: [ProjectReflection](td.models.projectreflection.md)
The project that is currently processed.
* Inherited from [ContextAwareRendererPlugin](td.output.contextawarerendererplugin.md).[project](td.output.contextawarerendererplugin.md#project)
* Defined in [td/output/RendererPlugin.ts:42](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L42)


### Protected reflection: [DeclarationReflection](td.models.declarationreflection.md)
The reflection that is currently processed.
* Inherited from [ContextAwareRendererPlugin](td.output.contextawarerendererplugin.md).[reflection](td.output.contextawarerendererplugin.md#reflection)
* Defined in [td/output/RendererPlugin.ts:47](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L47)


### Protected renderer: [Renderer](td.output.renderer.md)
The renderer this plugin is attached to.
* Inherited from [RendererPlugin](td.output.rendererplugin.md).[renderer](td.output.rendererplugin.md#renderer)
* Defined in [td/output/RendererPlugin.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L11)


## Methods

### getCompact(text: string): string
Compress the given string by removing all newlines.  
* Defined in [td/output/plugins/MarkedPlugin.ts:122](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L122)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The string that should be compressed. |

#### Returns: string
The string with all newlsines stripped.


### getHighlighted(text: string, lang?: string): string
Highlight the synatx of the given text using HighlightJS.  
* Defined in [td/output/plugins/MarkedPlugin.ts:153](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L153)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The text taht should be highlightes. |
| lang? | string| The language that should be used to highlight the string. |

#### Returns: string
A html string with syntax highlighting.


### getIfCond(v1: any, operator: any, v2: any, options: any, context: any): any
Handlebars if helper with condition.  
* Defined in [td/output/plugins/MarkedPlugin.ts:177](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L177)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| v1 | any| The first value to be compared. |
| operator | any| The operand to perform on the two given values. |
| v2 | any| The second value to be compared |
| options | any| The current handlebars object. |
| context | any| The current handlebars context. |

#### Returns: any



### getParameters(): [IParameter](../interfaces/td.iparameter.md)[]
  
* Implementation of [IParameterProvider](../interfaces/td.iparameterprovider.md).[getParameters](../interfaces/td.iparameterprovider.md#getparameters)
* Defined in [td/output/plugins/MarkedPlugin.ts:103](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L103)

#### Returns: [IParameter](../interfaces/td.iparameter.md)[]

### getRelativeUrl(absolute: string): string
Transform the given absolute path into a relative path.  
* Inherited from [ContextAwareRendererPlugin](td.output.contextawarerendererplugin.md).[getRelativeUrl](td.output.contextawarerendererplugin.md#getrelativeurl)
* Defined in [td/output/RendererPlugin.ts:74](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L74)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| absolute | string| The absolute path to transform. |

#### Returns: string
A path relative to the document currently processed.


### getWordBreaks(str: string): string
Insert word break tags ``<wbr>`` into the given string.Breaks the given string at ``_``, ``-`` and captial letters.  
* Defined in [td/output/plugins/MarkedPlugin.ts:139](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L139)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string| The string that should be split. |

#### Returns: string
The original string containing ``<wbr>`` tags where possible.


### onParseMarkdown(event: [MarkdownEvent](td.output.markdownevent.md)): void
Triggered when [[MarkedPlugin]] parses a markdown string.  
* Defined in [td/output/plugins/MarkedPlugin.ts:281](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L281)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | [MarkdownEvent](td.output.markdownevent.md)|  |

#### Returns: void

### Protected onRendererBegin(event: [OutputEvent](td.output.outputevent.md)): void
Triggered before the renderer starts rendering a project.  
* Overwrites [ContextAwareRendererPlugin](td.output.contextawarerendererplugin.md).[onRendererBegin](td.output.contextawarerendererplugin.md#onrendererbegin)
* Defined in [td/output/plugins/MarkedPlugin.ts:250](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L250)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | [OutputEvent](td.output.outputevent.md)| An event object describing the current render operation. |

#### Returns: void

### Protected onRendererBeginPage(page: [OutputPageEvent](td.output.outputpageevent.md)): void
Triggered before a document will be rendered.  
* Inherited from [ContextAwareRendererPlugin](td.output.contextawarerendererplugin.md).[onRendererBeginPage](td.output.contextawarerendererplugin.md#onrendererbeginpage)
* Defined in [td/output/RendererPlugin.ts:95](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L95)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| page | [OutputPageEvent](td.output.outputpageevent.md)| An event object describing the current render operation. |

#### Returns: void

### parseMarkdown(text: string, context: any): string
Parse the given markdown string and return the resulting html.  
* Defined in [td/output/plugins/MarkedPlugin.ts:208](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L208)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The markdown string that should be parsed. |
| context | any| The current handlebars context. |

#### Returns: string
The resulting html string.


### remove(): void
Remove this plugin from the renderer.  
* Inherited from [RendererPlugin](td.output.rendererplugin.md).[remove](td.output.rendererplugin.md#remove)
* Defined in [td/output/RendererPlugin.ts:28](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L28)

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
