# Interface MarkedOptions


## Index

### Properties
* [breaks](markedoptions.md#breaks)
* [gfm](markedoptions.md#gfm)
* [langPrefix](markedoptions.md#langprefix)
* [pedantic](markedoptions.md#pedantic)
* [sanitize](markedoptions.md#sanitize)
* [silent](markedoptions.md#silent)
* [smartLists](markedoptions.md#smartlists)
* [smartypants](markedoptions.md#smartypants)
* [tables](markedoptions.md#tables)

### Methods
* [highlight](markedoptions.md#highlight)

## Properties

### Optional breaks: boolean
Enable GFM line breaks. This option requires the gfm option to be true.
* Defined in [lib/marked/marked.d.ts:79](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L79)


### Optional gfm: boolean
Enable GitHub flavored markdown.
* Defined in [lib/marked/marked.d.ts:69](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L69)


### Optional langPrefix: string
Set the prefix for code block classes.
* Defined in [lib/marked/marked.d.ts:109](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L109)


### Optional pedantic: boolean
Conform to obscure parts of markdown.pl as much as possible. Don't fix any of the original markdown bugs or poor behavior.
* Defined in [lib/marked/marked.d.ts:84](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L84)


### Optional sanitize: boolean
Sanitize the output. Ignore any HTML that has been input.
* Defined in [lib/marked/marked.d.ts:89](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L89)


### Optional silent: boolean
Shows an HTML error message when rendering fails.
* Defined in [lib/marked/marked.d.ts:99](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L99)


### Optional smartLists: boolean
Use smarter list behavior than the original markdown. May eventually be default with the old behavior moved into pedantic.
* Defined in [lib/marked/marked.d.ts:94](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L94)


### Optional smartypants: boolean
Use "smart" typograhic punctuation for things like quotes and dashes.
* Defined in [lib/marked/marked.d.ts:114](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L114)


### Optional tables: boolean
Enable GFM tables. This option requires the gfm option to be true.
* Defined in [lib/marked/marked.d.ts:74](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L74)


## Methods

### Optional highlight(code: string, lang: string, callback?: Function): string
A function to highlight code blocks. The function takes three arguments: code, lang, and callback.  
* Defined in [lib/marked/marked.d.ts:104](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L104)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| code | string|  |
| lang | string|  |
| callback? | Function|  |

#### Returns: string


Generated using [TypeDoc](http://typedoc.io)
