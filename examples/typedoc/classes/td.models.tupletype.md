# Class TupleType
Represents a tuple type.~~~var value:[string,boolean];~~~

### Extends
* [Type](td.models.type.md)

## Index

### Constructors
* [constructor](td.models.tupletype.md#constructor)

### Properties
* [elements](td.models.tupletype.md#elements)
* [isArray](td.models.tupletype.md#isarray)

### Methods
* [clone](td.models.tupletype.md#clone)
* [equals](td.models.tupletype.md#equals)
* [toObject](td.models.tupletype.md#toobject)
* [toString](td.models.tupletype.md#tostring)
* [isTypeListEqual](td.models.tupletype.md#istypelistequal)
* [isTypeListSimiliar](td.models.tupletype.md#istypelistsimiliar)

## Constructors

### new TupleType(elements: [Type](td.models.type.md)[]): [TupleType](td.models.tupletype.md)
Create a new TupleType instance.  
* Defined in [td/models/types/TupleType.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/TupleType.ts#L15)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| elements | [Type](td.models.type.md)[]| The ordered type elements of the tuple type. |

#### Returns: [TupleType](td.models.tupletype.md)

## Properties

### elements: [Type](td.models.type.md)[]
The ordered type elements of the tuple type.
* Defined in [td/models/types/TupleType.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/TupleType.ts#L15)


### isArray: boolean
Is this an array type?
* Inherited from [Type](td.models.type.md).[isArray](td.models.type.md#isarray)
* Defined in [td/models/Type.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L13)


## Methods

### clone(): [Type](td.models.type.md)
Clone this type.  
* Overwrites [Type](td.models.type.md).[clone](td.models.type.md#clone)
* Defined in [td/models/types/TupleType.ts:34](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/TupleType.ts#L34)

#### Returns: [Type](td.models.type.md)
A clone of this type.


### equals(type: [TupleType](td.models.tupletype.md)): boolean
Test whether this type equals the given type.  
* Overwrites [Type](td.models.type.md).[equals](td.models.type.md#equals)
* Defined in [td/models/types/TupleType.ts:47](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/TupleType.ts#L47)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [TupleType](td.models.tupletype.md)| The type that should be checked for equality. |

#### Returns: boolean
TRUE if the given type equals this type, FALSE otherwise.


### toObject(): any
Return a raw object representation of this type.  
* Overwrites [Type](td.models.type.md).[toObject](td.models.type.md#toobject)
* Defined in [td/models/types/TupleType.ts:57](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/TupleType.ts#L57)

#### Returns: any

### toString(): string
Return a string representation of this type.  
* Overwrites [Type](td.models.type.md).[toString](td.models.type.md#tostring)
* Defined in [td/models/types/TupleType.ts:72](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/TupleType.ts#L72)

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
