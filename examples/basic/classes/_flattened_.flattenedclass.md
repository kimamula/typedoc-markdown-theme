# Class flattenedClass
A class that contains members with flattened properties.

## Index

### Constructors
* [constructor](_flattened_.flattenedclass.md#constructor)

### Properties
* [callback](_flattened_.flattenedclass.md#callback)
* [indexed](_flattened_.flattenedclass.md#indexed)
* [multipleCallSignatures](_flattened_.flattenedclass.md#multiplecallsignatures)
* [options](_flattened_.flattenedclass.md#options)

## Constructors

### new flattenedClass(options: \{Optional anotherValue?: string, Optional moreOptions?: \{moreValues: number\}, Optional value?: string\}): [flattenedClass](_flattened_.flattenedclass.md)
A constructor that accepts an option object defined inline.  
* Defined in [flattened.ts:57](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/flattened.ts#L57)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | \{Optional anotherValue?: string, Optional moreOptions?: \{moreValues: number\}, Optional value?: string\}| The inline typed options object. |

#### Returns: [flattenedClass](_flattened_.flattenedclass.md)

## Properties

### callback: (param: number, optionalParam?: string)=> string
A member that holds a callback that requires a typed function signature.
* Defined in [flattened.ts:28](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/flattened.ts#L28)


### indexed: [index: number]: \{name: string, Optional value?: number\}\{test: string\}
A member that holds an index signature.
* Defined in [flattened.ts:36](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/flattened.ts#L36)


### multipleCallSignatures: ()=> number; (value: number)=> [flattenedClass](_flattened_.flattenedclass.md)
An object with multiple call signatures. see https://github.com/sebastian-lenz/typedoc/issues/27

* Defined in [flattened.ts:45](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/flattened.ts#L45)


### options: \{Optional anotherValue?: string, Optional moreOptions?: \{moreValues: number\}, Optional value?: string\}
A member that accepts an option object defined inline.
* Defined in [flattened.ts:14](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/flattened.ts#L14)



Generated using [TypeDoc](http://typedoc.io)
