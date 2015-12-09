# Class TypeParameterType
Represents a type parameter type.~~~var value:T;~~~

### Extends
* [Type](td.models.type.md)

## Index

### Properties
* [constraint](td.models.typeparametertype.md#constraint)
* [isArray](td.models.typeparametertype.md#isarray)
* [name](td.models.typeparametertype.md#name)

### Methods
* [clone](td.models.typeparametertype.md#clone)
* [equals](td.models.typeparametertype.md#equals)
* [toObject](td.models.typeparametertype.md#toobject)
* [toString](td.models.typeparametertype.md#tostring)
* [isTypeListEqual](td.models.typeparametertype.md#istypelistequal)
* [isTypeListSimiliar](td.models.typeparametertype.md#istypelistsimiliar)

## Properties

### constraint: [Type](td.models.type.md)

* Defined in [td/models/types/TypeParameterType.ts:17](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/TypeParameterType.ts#L17)


### isArray: boolean
Is this an array type?
* Inherited from [Type](td.models.type.md).[isArray](td.models.type.md#isarray)
* Defined in [td/models/Type.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L13)


### name: string

* Defined in [td/models/types/TypeParameterType.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/TypeParameterType.ts#L15)


## Methods

### clone(): [Type](td.models.type.md)
Clone this type.  
* Overwrites [Type](td.models.type.md).[clone](td.models.type.md#clone)
* Defined in [td/models/types/TypeParameterType.ts:26](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/TypeParameterType.ts#L26)

#### Returns: [Type](td.models.type.md)
A clone of this type.


### equals(type: [TypeParameterType](td.models.typeparametertype.md)): boolean
Test whether this type equals the given type.  
* Overwrites [Type](td.models.type.md).[equals](td.models.type.md#equals)
* Defined in [td/models/types/TypeParameterType.ts:41](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/TypeParameterType.ts#L41)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [TypeParameterType](td.models.typeparametertype.md)| The type that should be checked for equality. |

#### Returns: boolean
TRUE if the given type equals this type, FALSE otherwise.


### toObject(): any
Return a raw object representation of this type.  
* Overwrites [Type](td.models.type.md).[toObject](td.models.type.md#toobject)
* Defined in [td/models/types/TypeParameterType.ts:63](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/TypeParameterType.ts#L63)

#### Returns: any

### toString(): string
Return a string representation of this type.  
* Overwrites [Type](td.models.type.md).[toString](td.models.type.md#tostring)
* Defined in [td/models/types/TypeParameterType.ts:79](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/TypeParameterType.ts#L79)

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
