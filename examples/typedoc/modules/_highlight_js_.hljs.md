# Module hljs


## Index

### Interfaces
* [HLJSStatic](../interfaces/_highlight_js_.hljs.hljsstatic.md)
* [IAutoHighlightResult](../interfaces/_highlight_js_.hljs.iautohighlightresult.md)
* [ICompiledMode](../interfaces/_highlight_js_.hljs.icompiledmode.md)
* [IHighlightResult](../interfaces/_highlight_js_.hljs.ihighlightresult.md)
* [IHighlightResultBase](../interfaces/_highlight_js_.hljs.ihighlightresultbase.md)
* [IMode](../interfaces/_highlight_js_.hljs.imode.md)
* [IModeBase](../interfaces/_highlight_js_.hljs.imodebase.md)
* [IOptions](../interfaces/_highlight_js_.hljs.ioptions.md)

### Variables
* [APOS_STRING_MODE](_highlight_js_.hljs.md#apos_string_mode)
* [BACKSLASH_ESCAPE](_highlight_js_.hljs.md#backslash_escape)
* [BINARY_NUMBER_MODE](_highlight_js_.hljs.md#binary_number_mode)
* [BINARY_NUMBER_RE](_highlight_js_.hljs.md#binary_number_re)
* [CSS_NUMBER_MODE](_highlight_js_.hljs.md#css_number_mode)
* [C_BLOCK_COMMENT_MODE](_highlight_js_.hljs.md#c_block_comment_mode)
* [C_LINE_COMMENT_MODE](_highlight_js_.hljs.md#c_line_comment_mode)
* [C_NUMBER_MODE](_highlight_js_.hljs.md#c_number_mode)
* [C_NUMBER_RE](_highlight_js_.hljs.md#c_number_re)
* [HASH_COMMENT_MODE](_highlight_js_.hljs.md#hash_comment_mode)
* [IDENT_RE](_highlight_js_.hljs.md#ident_re)
* [NUMBER_MODE](_highlight_js_.hljs.md#number_mode)
* [NUMBER_RE](_highlight_js_.hljs.md#number_re)
* [PHRASAL_WORDS_MODE](_highlight_js_.hljs.md#phrasal_words_mode)
* [QUOTE_STRING_MODE](_highlight_js_.hljs.md#quote_string_mode)
* [REGEX_MODE](_highlight_js_.hljs.md#regex_mode)
* [RE_STARTERS_RE](_highlight_js_.hljs.md#re_starters_re)
* [TITLE_MODE](_highlight_js_.hljs.md#title_mode)
* [UNDERSCORE_IDENT_RE](_highlight_js_.hljs.md#underscore_ident_re)
* [UNDERSCORE_TITLE_MODE](_highlight_js_.hljs.md#underscore_title_mode)

### Functions
* [configure](_highlight_js_.hljs.md#configure)
* [fixMarkup](_highlight_js_.hljs.md#fixmarkup)
* [getLanguage](_highlight_js_.hljs.md#getlanguage)
* [highlight](_highlight_js_.hljs.md#highlight)
* [highlightAuto](_highlight_js_.hljs.md#highlightauto)
* [highlightBlock](_highlight_js_.hljs.md#highlightblock)
* [inherit](_highlight_js_.hljs.md#inherit)
* [initHighlighting](_highlight_js_.hljs.md#inithighlighting)
* [initHighlightingOnLoad](_highlight_js_.hljs.md#inithighlightingonload)
* [listLanguages](_highlight_js_.hljs.md#listlanguages)
* [registerLanguage](_highlight_js_.hljs.md#registerlanguage)

## Variables

### APOS_STRING_MODE: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

* Defined in [lib/highlightjs/highlightjs.d.ts:46](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L46)


### BACKSLASH_ESCAPE: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

* Defined in [lib/highlightjs/highlightjs.d.ts:45](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L45)


### BINARY_NUMBER_MODE: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

* Defined in [lib/highlightjs/highlightjs.d.ts:54](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L54)


### BINARY_NUMBER_RE: string

* Defined in [lib/highlightjs/highlightjs.d.ts:41](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L41)


### CSS_NUMBER_MODE: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

* Defined in [lib/highlightjs/highlightjs.d.ts:55](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L55)


### C_BLOCK_COMMENT_MODE: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

* Defined in [lib/highlightjs/highlightjs.d.ts:50](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L50)


### C_LINE_COMMENT_MODE: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

* Defined in [lib/highlightjs/highlightjs.d.ts:49](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L49)


### C_NUMBER_MODE: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

* Defined in [lib/highlightjs/highlightjs.d.ts:53](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L53)


### C_NUMBER_RE: string

* Defined in [lib/highlightjs/highlightjs.d.ts:40](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L40)


### HASH_COMMENT_MODE: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

* Defined in [lib/highlightjs/highlightjs.d.ts:51](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L51)


### IDENT_RE: string

* Defined in [lib/highlightjs/highlightjs.d.ts:37](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L37)


### NUMBER_MODE: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

* Defined in [lib/highlightjs/highlightjs.d.ts:52](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L52)


### NUMBER_RE: string

* Defined in [lib/highlightjs/highlightjs.d.ts:39](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L39)


### PHRASAL_WORDS_MODE: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

* Defined in [lib/highlightjs/highlightjs.d.ts:48](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L48)


### QUOTE_STRING_MODE: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

* Defined in [lib/highlightjs/highlightjs.d.ts:47](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L47)


### REGEX_MODE: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

* Defined in [lib/highlightjs/highlightjs.d.ts:56](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L56)


### RE_STARTERS_RE: string

* Defined in [lib/highlightjs/highlightjs.d.ts:42](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L42)


### TITLE_MODE: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

* Defined in [lib/highlightjs/highlightjs.d.ts:57](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L57)


### UNDERSCORE_IDENT_RE: string

* Defined in [lib/highlightjs/highlightjs.d.ts:38](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L38)


### UNDERSCORE_TITLE_MODE: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

* Defined in [lib/highlightjs/highlightjs.d.ts:58](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L58)


## Functions

### configure(options: [IOptions](../interfaces/_highlight_js_.hljs.ioptions.md)): void
  
* Defined in [lib/highlightjs/highlightjs.d.ts:23](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L23)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [IOptions](../interfaces/_highlight_js_.hljs.ioptions.md)|  |

#### Returns: void

### fixMarkup(value: string): string
  
* Defined in [lib/highlightjs/highlightjs.d.ts:19](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L19)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | string|  |

#### Returns: string

### getLanguage(name: string): [IMode](../interfaces/_highlight_js_.hljs.imode.md)
  
* Defined in [lib/highlightjs/highlightjs.d.ts:32](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L32)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: [IMode](../interfaces/_highlight_js_.hljs.imode.md)

### highlight(name: string, value: string, ignore_illegals?: boolean, continuation?: boolean): [IHighlightResult](../interfaces/_highlight_js_.hljs.ihighlightresult.md)
  
* Defined in [lib/highlightjs/highlightjs.d.ts:10](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L10)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |
| value | string|  |
| ignore_illegals? | boolean|  |
| continuation? | boolean|  |

#### Returns: [IHighlightResult](../interfaces/_highlight_js_.hljs.ihighlightresult.md)

### highlightAuto(value: string, languageSubset?: string[]): [IAutoHighlightResult](../interfaces/_highlight_js_.hljs.iautohighlightresult.md)
  
* Defined in [lib/highlightjs/highlightjs.d.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L15)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | string|  |
| languageSubset? | string[]|  |

#### Returns: [IAutoHighlightResult](../interfaces/_highlight_js_.hljs.iautohighlightresult.md)

### highlightBlock(block: Node): void
  
* Defined in [lib/highlightjs/highlightjs.d.ts:21](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L21)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| block | Node|  |

#### Returns: void

### inherit(parent: Object, obj: Object): Object
  
* Defined in [lib/highlightjs/highlightjs.d.ts:34](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L34)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| parent | Object|  |
| obj | Object|  |

#### Returns: Object

### initHighlighting(): void
  
* Defined in [lib/highlightjs/highlightjs.d.ts:25](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L25)

#### Returns: void

### initHighlightingOnLoad(): void
  
* Defined in [lib/highlightjs/highlightjs.d.ts:26](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L26)

#### Returns: void

### listLanguages(): string[]
  
* Defined in [lib/highlightjs/highlightjs.d.ts:31](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L31)

#### Returns: string[]

### registerLanguage(name: string, language: (hljs?: [HLJSStatic](../interfaces/_highlight_js_.hljs.hljsstatic.md))=> [IModeBase](../interfaces/_highlight_js_.hljs.imodebase.md)): void
  
* Defined in [lib/highlightjs/highlightjs.d.ts:28](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/highlightjs/highlightjs.d.ts#L28)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |
| language | (hljs?: [HLJSStatic](../interfaces/_highlight_js_.hljs.hljsstatic.md))=> [IModeBase](../interfaces/_highlight_js_.hljs.imodebase.md)|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
