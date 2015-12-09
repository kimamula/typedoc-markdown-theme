# Interface MarkedStatic


### Callable
__call(src: string, callback: Function): string__call(src: string, options?: [MarkedOptions](markedoptions.md), callback?: Function): string
Compiles markdown to HTML.  
* Defined in [lib/marked/marked.d.ts:7](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L7)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| src | string| String of markdown source to be compiled |
| callback | Function| Function called when the markdownString has been fully parsed when using async highlighting |

#### Returns: string
String of compiled HTML

Compiles markdown to HTML.  
* Defined in [lib/marked/marked.d.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L15)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| src | string| String of markdown source to be compiled |
| options? | [MarkedOptions](markedoptions.md)| Hash of options |
| callback? | Function| Function called when the markdownString has been fully parsed when using async highlighting |

#### Returns: string
String of compiled HTML


## Index

### Methods
* [lexer](markedstatic.md#lexer)
* [parse](markedstatic.md#parse)
* [parser](markedstatic.md#parser)
* [setOptions](markedstatic.md#setoptions)

## Methods

### lexer(src: string, options?: [MarkedOptions](markedoptions.md)): any[]
  
* Defined in [lib/marked/marked.d.ts:31](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L31)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| src | string| String of markdown source to be compiled |
| options? | [MarkedOptions](markedoptions.md)| Hash of options |

#### Returns: any[]

### parse(src: string, callback: Function): stringparse(src: string, options?: [MarkedOptions](markedoptions.md), callback?: Function): string
Compiles markdown to HTML.  
* Defined in [lib/marked/marked.d.ts:40](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L40)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| src | string| String of markdown source to be compiled |
| callback | Function| Function called when the markdownString has been fully parsed when using async highlighting |

#### Returns: string
String of compiled HTML

Compiles markdown to HTML.  
* Defined in [lib/marked/marked.d.ts:50](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L50)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| src | string| String of markdown source to be compiled |
| options? | [MarkedOptions](markedoptions.md)| Hash of options |
| callback? | Function| Function called when the markdownString has been fully parsed when using async highlighting |

#### Returns: string
String of compiled HTML


### parser(src: any[], options?: [MarkedOptions](markedoptions.md)): string
  
* Defined in [lib/marked/marked.d.ts:55](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L55)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| src | any[]|  |
| options? | [MarkedOptions](markedoptions.md)| Hash of options |

#### Returns: string

### setOptions(options: [MarkedOptions](markedoptions.md)): void
Sets the default options.  
* Defined in [lib/marked/marked.d.ts:62](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L62)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [MarkedOptions](markedoptions.md)| Hash of options |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
