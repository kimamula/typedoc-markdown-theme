# Class UnknownType
Represents all unknown types.

### Extends
* [Type](td.models.type.md)

## Index

### Constructors
* [constructor](td.models.unknowntype.md#constructor)

### Properties
* [isArray](td.models.unknowntype.md#isarray)
* [name](td.models.unknowntype.md#name)

### Methods
* [clone](td.models.unknowntype.md#clone)
* [equals](td.models.unknowntype.md#equals)
* [toObject](td.models.unknowntype.md#toobject)
* [toString](td.models.unknowntype.md#tostring)
* [isTypeListEqual](td.models.unknowntype.md#istypelistequal)
* [isTypeListSimiliar](td.models.unknowntype.md#istypelistsimiliar)

## Constructors

### new UnknownType(name: string): [UnknownType](td.models.unknowntype.md)
Create a new instance of UnknownType.  
* Defined in [td/models/types/UnknownType.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/UnknownType.ts#L11)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| A string representation of the type as returned from TypeScript compiler. |

#### Returns: [UnknownType](td.models.unknowntype.md)

## Properties

### isArray: boolean
Is this an array type?
* Inherited from [Type](td.models.type.md).[isArray](td.models.type.md#isarray)
* Defined in [td/models/Type.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L13)


### name: string
A string representation of the type as returned from TypeScript compiler.
* Defined in [td/models/types/UnknownType.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/UnknownType.ts#L11)


## Methods

### clone(): [Type](td.models.type.md)
Clone this type.  
* Overwrites [Type](td.models.type.md).[clone](td.models.type.md#clone)
* Defined in [td/models/types/UnknownType.ts:30](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/UnknownType.ts#L30)

#### Returns: [Type](td.models.type.md)
A clone of this type.


### equals(type: [UnknownType](td.models.unknowntype.md)): boolean
Test whether this type equals the given type.  
* Overwrites [Type](td.models.type.md).[equals](td.models.type.md#equals)
* Defined in [td/models/types/UnknownType.ts:43](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/UnknownType.ts#L43)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [UnknownType](td.models.unknowntype.md)| The type that should be checked for equality. |

#### Returns: boolean
TRUE if the given type equals this type, FALSE otherwise.


### toObject(): any
Return a raw object representation of this type.  
* Overwrites [Type](td.models.type.md).[toObject](td.models.type.md#toobject)
* Defined in [td/models/types/UnknownType.ts:53](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/UnknownType.ts#L53)

#### Returns: any

### toString(): string
Return a string representation of this type.  
* Overwrites [Type](td.models.type.md).[toString](td.models.type.md#tostring)
* Defined in [td/models/types/UnknownType.ts:64](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/UnknownType.ts#L64)

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
