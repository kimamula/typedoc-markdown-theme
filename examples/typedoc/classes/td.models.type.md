# Class Type
Base class of all type definitions.Instances of this class are also used to represent the type `void`.

## Index

### Properties
* [isArray](td.models.type.md#isarray)

### Methods
* [clone](td.models.type.md#clone)
* [equals](td.models.type.md#equals)
* [toObject](td.models.type.md#toobject)
* [toString](td.models.type.md#tostring)
* [isTypeListEqual](td.models.type.md#istypelistequal)
* [isTypeListSimiliar](td.models.type.md#istypelistsimiliar)

## Properties

### isArray: boolean
Is this an array type?
* Defined in [td/models/Type.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L13)


## Methods

### clone(): [Type](td.models.type.md)
Clone this type.  
* Defined in [td/models/Type.ts:22](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L22)

#### Returns: [Type](td.models.type.md)
A clone of this type.


### equals(type: [Type](td.models.type.md)): boolean
Test whether this type equals the given type.  
* Defined in [td/models/Type.ts:35](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L35)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [Type](td.models.type.md)| The type that should be checked for equality. |

#### Returns: boolean
TRUE if the given type equals this type, FALSE otherwise.


### toObject(): any
Return a raw object representation of this type.  
* Defined in [td/models/Type.ts:43](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L43)

#### Returns: any

### toString(): string
Return a string representation of this type.  
* Defined in [td/models/Type.ts:58](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L58)

#### Returns: string

### Static isTypeListEqual(a: [Type](td.models.type.md)[], b: [Type](td.models.type.md)[]): boolean
Test whether the two given list of types are equal.  
* Defined in [td/models/Type.ts:90](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L90)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| a | [Type](td.models.type.md)[]|  |
| b | [Type](td.models.type.md)[]|  |

#### Returns: boolean

### Static isTypeListSimiliar(a: [Type](td.models.type.md)[], b: [Type](td.models.type.md)[]): boolean
Test whether the two given list of types contain equal types.  
* Defined in [td/models/Type.ts:69](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L69)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| a | [Type](td.models.type.md)[]|  |
| b | [Type](td.models.type.md)[]|  |

#### Returns: boolean


Generated using [TypeDoc](http://typedoc.io)
