# External module "flattened"


## Index

### Classes
* [flattenedClass](../classes/_flattened_.flattenedclass.md)

### Functions
* [flattenedCallback](_flattened_.md#flattenedcallback)
* [flattenedIndexSignature](_flattened_.md#flattenedindexsignature)
* [flattenedParameter](_flattened_.md#flattenedparameter)

## Functions

### flattenedCallback(callback: (param: number, optionalParam?: string)=> string): void
A function that has a parameter that requires a typed function callback.  
* Defined in [flattened.ts:86](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/flattened.ts#L86)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | (param: number, optionalParam?: string)=> string| The typed function callback. |

#### Returns: void

### flattenedIndexSignature(indexed: [index: number]: \{name: string, Optional value?: number\}\{test: string\}): void
A function that accepts an index signature parameter.  
* Defined in [flattened.ts:115](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/flattened.ts#L115)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| indexed | [index: number]: \{name: string, Optional value?: number\}\{test: string\}| The index signature parameter. |

#### Returns: void

### flattenedParameter(options: [name: string]: any\{Optional anotherValue?: string, Optional moreOptions?: \{moreValues: number\}, Optional value?: string\}): void
A function that accepts an option object defined inline.  
* Defined in [flattened.ts:98](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/flattened.ts#L98)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [name: string]: any\{Optional anotherValue?: string, Optional moreOptions?: \{moreValues: number\}, Optional value?: string\}| The inline typed options object. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
