# Class ReflectionType
Represents a type which has it's own reflection like literal types.~~~var value:{subValueA;subValueB;subValueC;};~~~

### Extends
* [Type](td.models.type.md)

## Index

### Constructors
* [constructor](td.models.reflectiontype.md#constructor)

### Properties
* [declaration](td.models.reflectiontype.md#declaration)
* [isArray](td.models.reflectiontype.md#isarray)

### Methods
* [clone](td.models.reflectiontype.md#clone)
* [equals](td.models.reflectiontype.md#equals)
* [toObject](td.models.reflectiontype.md#toobject)
* [toString](td.models.reflectiontype.md#tostring)
* [isTypeListEqual](td.models.reflectiontype.md#istypelistequal)
* [isTypeListSimiliar](td.models.reflectiontype.md#istypelistsimiliar)

## Constructors

### new ReflectionType(declaration: [DeclarationReflection](td.models.declarationreflection.md)): [ReflectionType](td.models.reflectiontype.md)
Create a new instance of ReflectionType.  
* Defined in [td/models/types/ReflectionType.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReflectionType.ts#L15)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| declaration | [DeclarationReflection](td.models.declarationreflection.md)| The reflection of the type. |

#### Returns: [ReflectionType](td.models.reflectiontype.md)

## Properties

### declaration: [DeclarationReflection](td.models.declarationreflection.md)
The reflection of the type.
* Defined in [td/models/types/ReflectionType.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReflectionType.ts#L15)


### isArray: boolean
Is this an array type?
* Inherited from [Type](td.models.type.md).[isArray](td.models.type.md#isarray)
* Defined in [td/models/Type.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L13)


## Methods

### clone(): [Type](td.models.type.md)
Clone this type.  
* Overwrites [Type](td.models.type.md).[clone](td.models.type.md#clone)
* Defined in [td/models/types/ReflectionType.ts:35](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReflectionType.ts#L35)

#### Returns: [Type](td.models.type.md)
A clone of this type.


### equals(type: [ReflectionType](td.models.reflectiontype.md)): boolean
Test whether this type equals the given type.  
* Overwrites [Type](td.models.type.md).[equals](td.models.type.md#equals)
* Defined in [td/models/types/ReflectionType.ts:48](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReflectionType.ts#L48)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [ReflectionType](td.models.reflectiontype.md)| The type that should be checked for equality. |

#### Returns: boolean
TRUE if the given type equals this type, FALSE otherwise.


### toObject(): any
Return a raw object representation of this type.  
* Overwrites [Type](td.models.type.md).[toObject](td.models.type.md#toobject)
* Defined in [td/models/types/ReflectionType.ts:56](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReflectionType.ts#L56)

#### Returns: any

### toString(): string
Return a string representation of this type.  
* Overwrites [Type](td.models.type.md).[toString](td.models.type.md#tostring)
* Defined in [td/models/types/ReflectionType.ts:71](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReflectionType.ts#L71)

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
