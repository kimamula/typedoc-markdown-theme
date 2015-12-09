# Class UnionType
Represents an union type.~~~var value:string | string[];~~~

### Extends
* [Type](td.models.type.md)

## Index

### Constructors
* [constructor](td.models.uniontype.md#constructor)

### Properties
* [isArray](td.models.uniontype.md#isarray)
* [types](td.models.uniontype.md#types)

### Methods
* [clone](td.models.uniontype.md#clone)
* [equals](td.models.uniontype.md#equals)
* [toObject](td.models.uniontype.md#toobject)
* [toString](td.models.uniontype.md#tostring)
* [isTypeListEqual](td.models.uniontype.md#istypelistequal)
* [isTypeListSimiliar](td.models.uniontype.md#istypelistsimiliar)

## Constructors

### new UnionType(types: [Type](td.models.type.md)[]): [UnionType](td.models.uniontype.md)
Create a new TupleType instance.  
* Defined in [td/models/types/UnionType.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/UnionType.ts#L15)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| types | [Type](td.models.type.md)[]| The types this union consists of. |

#### Returns: [UnionType](td.models.uniontype.md)

## Properties

### isArray: boolean
Is this an array type?
* Inherited from [Type](td.models.type.md).[isArray](td.models.type.md#isarray)
* Defined in [td/models/Type.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L13)


### types: [Type](td.models.type.md)[]
The types this union consists of.
* Defined in [td/models/types/UnionType.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/UnionType.ts#L15)


## Methods

### clone(): [Type](td.models.type.md)
Clone this type.  
* Overwrites [Type](td.models.type.md).[clone](td.models.type.md#clone)
* Defined in [td/models/types/UnionType.ts:34](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/UnionType.ts#L34)

#### Returns: [Type](td.models.type.md)
A clone of this type.


### equals(type: [UnionType](td.models.uniontype.md)): boolean
Test whether this type equals the given type.  
* Overwrites [Type](td.models.type.md).[equals](td.models.type.md#equals)
* Defined in [td/models/types/UnionType.ts:47](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/UnionType.ts#L47)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [UnionType](td.models.uniontype.md)| The type that should be checked for equality. |

#### Returns: boolean
TRUE if the given type equals this type, FALSE otherwise.


### toObject(): any
Return a raw object representation of this type.  
* Overwrites [Type](td.models.type.md).[toObject](td.models.type.md#toobject)
* Defined in [td/models/types/UnionType.ts:57](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/UnionType.ts#L57)

#### Returns: any

### toString(): string
Return a string representation of this type.  
* Overwrites [Type](td.models.type.md).[toString](td.models.type.md#tostring)
* Defined in [td/models/types/UnionType.ts:72](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/UnionType.ts#L72)

#### Returns: string

### Static isTypeListEqual(a: [Type](td.models.type.md)[], b: [Type](td.models.type.md)[]): boolean
Test whether the two given list of types are equal.  
* Inherited from [Type](td.models.type.md).[isTypeListEqual](td.models.type.md#istypelistequal)
* Defined in [td/models/Type.ts:90](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L90)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| a | [Type](td.models.type.md)[]|  |
| b | [Type](td.models.type.md)[]|  |

#### Returns: boolean

### Static isTypeListSimiliar(a: [Type](td.models.type.md)[], b: [Type](td.models.type.md)[]): boolean
Test whether the two given list of types contain equal types.  
* Inherited from [Type](td.models.type.md).[isTypeListSimiliar](td.models.type.md#istypelistsimiliar)
* Defined in [td/models/Type.ts:69](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L69)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| a | [Type](td.models.type.md)[]|  |
| b | [Type](td.models.type.md)[]|  |

#### Returns: boolean


Generated using [TypeDoc](http://typedoc.io)
