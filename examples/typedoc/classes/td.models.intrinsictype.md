# Class IntrinsicType
Represents an intrinsic type like `string` or `boolean`.~~~var value:number;~~~

### Extends
* [Type](td.models.type.md)

## Index

### Constructors
* [constructor](td.models.intrinsictype.md#constructor)

### Properties
* [isArray](td.models.intrinsictype.md#isarray)
* [name](td.models.intrinsictype.md#name)

### Methods
* [clone](td.models.intrinsictype.md#clone)
* [equals](td.models.intrinsictype.md#equals)
* [toObject](td.models.intrinsictype.md#toobject)
* [toString](td.models.intrinsictype.md#tostring)
* [isTypeListEqual](td.models.intrinsictype.md#istypelistequal)
* [isTypeListSimiliar](td.models.intrinsictype.md#istypelistsimiliar)

## Constructors

### new IntrinsicType(name: string): [IntrinsicType](td.models.intrinsictype.md)
Create a new instance of IntrinsicType.  
* Defined in [td/models/types/IntrinsicType.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/IntrinsicType.ts#L15)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name of the intrinsic type like `string` or `boolean`. |

#### Returns: [IntrinsicType](td.models.intrinsictype.md)

## Properties

### isArray: boolean
Is this an array type?
* Inherited from [Type](td.models.type.md).[isArray](td.models.type.md#isarray)
* Defined in [td/models/Type.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L13)


### name: string
The name of the intrinsic type like `string` or `boolean`.
* Defined in [td/models/types/IntrinsicType.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/IntrinsicType.ts#L15)


## Methods

### clone(): [Type](td.models.type.md)
Clone this type.  
* Overwrites [Type](td.models.type.md).[clone](td.models.type.md#clone)
* Defined in [td/models/types/IntrinsicType.ts:35](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/IntrinsicType.ts#L35)

#### Returns: [Type](td.models.type.md)
A clone of this type.


### equals(type: [IntrinsicType](td.models.intrinsictype.md)): boolean
Test whether this type equals the given type.  
* Overwrites [Type](td.models.type.md).[equals](td.models.type.md#equals)
* Defined in [td/models/types/IntrinsicType.ts:48](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/IntrinsicType.ts#L48)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [IntrinsicType](td.models.intrinsictype.md)| The type that should be checked for equality. |

#### Returns: boolean
TRUE if the given type equals this type, FALSE otherwise.


### toObject(): any
Return a raw object representation of this type.  
* Overwrites [Type](td.models.type.md).[toObject](td.models.type.md#toobject)
* Defined in [td/models/types/IntrinsicType.ts:58](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/IntrinsicType.ts#L58)

#### Returns: any

### toString(): string
Return a string representation of this type.  
* Overwrites [Type](td.models.type.md).[toString](td.models.type.md#tostring)
* Defined in [td/models/types/IntrinsicType.ts:69](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/IntrinsicType.ts#L69)

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
