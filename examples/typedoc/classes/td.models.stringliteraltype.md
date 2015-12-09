# Class StringLiteralType
Represents a string literal type.~~~var value:"DIV";~~~

### Extends
* [Type](td.models.type.md)

## Index

### Constructors
* [constructor](td.models.stringliteraltype.md#constructor)

### Properties
* [isArray](td.models.stringliteraltype.md#isarray)
* [value](td.models.stringliteraltype.md#value)

### Methods
* [clone](td.models.stringliteraltype.md#clone)
* [equals](td.models.stringliteraltype.md#equals)
* [toObject](td.models.stringliteraltype.md#toobject)
* [toString](td.models.stringliteraltype.md#tostring)
* [isTypeListEqual](td.models.stringliteraltype.md#istypelistequal)
* [isTypeListSimiliar](td.models.stringliteraltype.md#istypelistsimiliar)

## Constructors

### new StringLiteralType(value: string): [StringLiteralType](td.models.stringliteraltype.md)
Create a new instance of StringLiteralType.  
* Defined in [td/models/types/StringLiteralType.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/StringLiteralType.ts#L15)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | string| The string literal value. |

#### Returns: [StringLiteralType](td.models.stringliteraltype.md)

## Properties

### isArray: boolean
Is this an array type?
* Inherited from [Type](td.models.type.md).[isArray](td.models.type.md#isarray)
* Defined in [td/models/Type.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L13)


### value: string
The string literal value.
* Defined in [td/models/types/StringLiteralType.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/StringLiteralType.ts#L15)


## Methods

### clone(): [Type](td.models.type.md)
Clone this type.  
* Overwrites [Type](td.models.type.md).[clone](td.models.type.md#clone)
* Defined in [td/models/types/StringLiteralType.ts:34](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/StringLiteralType.ts#L34)

#### Returns: [Type](td.models.type.md)
A clone of this type.


### equals(type: [StringLiteralType](td.models.stringliteraltype.md)): boolean
Test whether this type equals the given type.  
* Overwrites [Type](td.models.type.md).[equals](td.models.type.md#equals)
* Defined in [td/models/types/StringLiteralType.ts:47](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/StringLiteralType.ts#L47)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [StringLiteralType](td.models.stringliteraltype.md)| The type that should be checked for equality. |

#### Returns: boolean
TRUE if the given type equals this type, FALSE otherwise.


### toObject(): any
Return a raw object representation of this type.  
* Overwrites [Type](td.models.type.md).[toObject](td.models.type.md#toobject)
* Defined in [td/models/types/StringLiteralType.ts:57](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/StringLiteralType.ts#L57)

#### Returns: any

### toString(): string
Return a string representation of this type.  
* Overwrites [Type](td.models.type.md).[toString](td.models.type.md#tostring)
* Defined in [td/models/types/StringLiteralType.ts:68](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/StringLiteralType.ts#L68)

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
