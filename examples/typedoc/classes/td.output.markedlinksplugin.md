# Class MarkedLinksPlugin
A plugin that builds links in markdown texts.

### Extends
* [ContextAwareRendererPlugin](td.output.contextawarerendererplugin.md)

## Index

### Constructors
* [constructor](td.output.markedlinksplugin.md#constructor)

### Properties
* [brackets](td.output.markedlinksplugin.md#brackets)
* [inlineTag](td.output.markedlinksplugin.md#inlinetag)
* [project](td.output.markedlinksplugin.md#project)
* [reflection](td.output.markedlinksplugin.md#reflection)
* [renderer](td.output.markedlinksplugin.md#renderer)
* [urlPrefix](td.output.markedlinksplugin.md#urlprefix)

### Methods
* [buildLink](td.output.markedlinksplugin.md#buildlink)
* [getRelativeUrl](td.output.markedlinksplugin.md#getrelativeurl)
* [onParseMarkdown](td.output.markedlinksplugin.md#onparsemarkdown)
* [onRendererBegin](td.output.markedlinksplugin.md#onrendererbegin)
* [onRendererBeginPage](td.output.markedlinksplugin.md#onrendererbeginpage)
* [remove](td.output.markedlinksplugin.md#remove)
* [replaceBrackets](td.output.markedlinksplugin.md#replacebrackets)
* [replaceInlineTags](td.output.markedlinksplugin.md#replaceinlinetags)
* [splitLinkText](td.output.markedlinksplugin.md#splitlinktext)

## Constructors

### new MarkedLinksPlugin(renderer: [Renderer](td.output.renderer.md)): [MarkedLinksPlugin](td.output.markedlinksplugin.md)
Create a new MarkedLinksPlugin instance.  
* Overwrites [ContextAwareRendererPlugin](td.output.contextawarerendererplugin.md).[constructor](td.output.contextawarerendererplugin.md#constructor)
* Defined in [td/output/plugins/MarkedLinksPlugin.ts:21](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedLinksPlugin.ts#L21)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| renderer | [Renderer](td.output.renderer.md)| The renderer this plugin should be attached to. |

#### Returns: [MarkedLinksPlugin](td.output.markedlinksplugin.md)

## Properties

### Private brackets: RegExp
Regular expression for detecting bracket links.
* Defined in [td/output/plugins/MarkedLinksPlugin.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedLinksPlugin.ts#L11)


### Private inlineTag: RegExp
Regular expression for detecting inline tags like {@link ...}.
* Defined in [td/output/plugins/MarkedLinksPlugin.ts:16](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedLinksPlugin.ts#L16)


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


### Private urlPrefix: RegExp
Regular expression to test if a string looks like an external url.
* Defined in [td/output/plugins/MarkedLinksPlugin.ts:21](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedLinksPlugin.ts#L21)


## Methods

### Private buildLink(original: string, target: string, caption: string, monospace?: boolean): string
Format a link with the given text and target.  
* Defined in [td/output/plugins/MarkedLinksPlugin.ts:85](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedLinksPlugin.ts#L85)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| original | string| The original link string, will be returned if the target cannot be resolved.. |
| target | string| The link target. |
| caption | string| The caption of the link. |
| monospace? | boolean| Whether to use monospace formatting or not. |

#### Returns: string
A html link tag.


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


### onParseMarkdown(event: [MarkdownEvent](td.output.markdownevent.md)): void
Triggered when [[MarkedPlugin]] parses a markdown string.  
* Defined in [td/output/plugins/MarkedLinksPlugin.ts:117](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedLinksPlugin.ts#L117)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | [MarkdownEvent](td.output.markdownevent.md)|  |

#### Returns: void

### Protected onRendererBegin(event: [OutputEvent](td.output.outputevent.md)): void
Triggered before the renderer starts rendering a project.  
* Inherited from [ContextAwareRendererPlugin](td.output.contextawarerendererplugin.md).[onRendererBegin](td.output.contextawarerendererplugin.md#onrendererbegin)
* Defined in [td/output/RendererPlugin.ts:85](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L85)


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

### remove(): void
Remove this plugin from the renderer.  
* Inherited from [RendererPlugin](td.output.rendererplugin.md).[remove](td.output.rendererplugin.md#remove)
* Defined in [td/output/RendererPlugin.ts:28](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/RendererPlugin.ts#L28)

#### Returns: void

### Private replaceBrackets(text: string): string
Find all references to symbols within the given text and transform them into a link.This function is aware of the current context and will try to find the symbol within thecurrent reflection. It will walk up the reflection chain till the symbol is found or theroot reflection is reached. As a last resort the function will search the entire projectfor the given symbol.  
* Defined in [td/output/plugins/MarkedLinksPlugin.ts:47](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedLinksPlugin.ts#L47)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The text that should be parsed. |

#### Returns: string
The text with symbol references replaced by links.


### Private replaceInlineTags(text: string): string
Find symbol {@link ...} strings in text and turn into html links  
* Defined in [td/output/plugins/MarkedLinksPlugin.ts:61](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedLinksPlugin.ts#L61)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The string in which to replace the inline tags. |

#### Returns: string
The updated string.


### Static splitLinkText(text: string): \{caption: string, target: string\}
Split the given link into text and target at first pipe or space.  
* Defined in [td/output/plugins/MarkedLinksPlugin.ts:128](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedLinksPlugin.ts#L128)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The source string that should be checked for a split character. |

#### Returns: \{caption: string, target: string\}
An object containing the link text and target.



Generated using [TypeDoc](http://typedoc.io)
