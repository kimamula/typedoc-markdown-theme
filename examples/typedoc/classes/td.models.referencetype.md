# Class ReferenceType
Represents a type that refers to another reflection like a class, interface or enum.~~~var value:MyClass;~~~

### Extends
* [Type](td.models.type.md)

## Index

### Constructors
* [constructor](td.models.referencetype.md#constructor)

### Properties
* [isArray](td.models.referencetype.md#isarray)
* [name](td.models.referencetype.md#name)
* [reflection](td.models.referencetype.md#reflection)
* [symbolID](td.models.referencetype.md#symbolid)
* [typeArguments](td.models.referencetype.md#typearguments)
* [SYMBOL_ID_RESOLVED](td.models.referencetype.md#symbol_id_resolved)
* [SYMBOL_ID_RESOLVE_BY_NAME](td.models.referencetype.md#symbol_id_resolve_by_name)

### Methods
* [clone](td.models.referencetype.md#clone)
* [equals](td.models.referencetype.md#equals)
* [toObject](td.models.referencetype.md#toobject)
* [toString](td.models.referencetype.md#tostring)
* [isTypeListEqual](td.models.referencetype.md#istypelistequal)
* [isTypeListSimiliar](td.models.referencetype.md#istypelistsimiliar)

## Constructors

### new ReferenceType(name: string, symbolID: number, reflection?: [Reflection](td.models.reflection.md)): [ReferenceType](td.models.referencetype.md)
Create a new instance of ReferenceType.  
* Defined in [td/models/types/ReferenceType.ts:48](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReferenceType.ts#L48)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name of the referenced type. |
| symbolID | number| The symbol id of the referenced type as returned from the TypeScript compiler. |
| reflection? | [Reflection](td.models.reflection.md)| The resolved reflection if already known. |

#### Returns: [ReferenceType](td.models.referencetype.md)

## Properties

### isArray: boolean
Is this an array type?
* Inherited from [Type](td.models.type.md).[isArray](td.models.type.md#isarray)
* Defined in [td/models/Type.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Type.ts#L13)


### name: string
The name of the referenced type.If the symbol cannot be found cause it's not part of the documentation thiscan be used to represent the type.
* Defined in [td/models/types/ReferenceType.ts:18](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReferenceType.ts#L18)


### reflection: [Reflection](td.models.reflection.md)
The resolved reflection.The [[TypePlugin]] will try to set this property in the resolving phase.
* Defined in [td/models/types/ReferenceType.ts:38](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReferenceType.ts#L38)


### symbolID: number
The symbol id of the referenced type as returned from the TypeScript compiler.After the all reflections have been generated this is can be used to lookup therelevant reflection with [[ProjectReflection.symbolMapping]].
* Defined in [td/models/types/ReferenceType.ts:31](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReferenceType.ts#L31)


### typeArguments: [Type](td.models.type.md)[]
The type arguments of this reference.
* Defined in [td/models/types/ReferenceType.ts:23](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReferenceType.ts#L23)


### Static SYMBOL_ID_RESOLVED: number
Special symbol ID noting that the reference of a ReferenceType was known when creating the type.
* Defined in [td/models/types/ReferenceType.ts:43](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReferenceType.ts#L43)


### Static SYMBOL_ID_RESOLVE_BY_NAME: number
Special symbol ID noting that the reference should be resolved by the type name.
* Defined in [td/models/types/ReferenceType.ts:48](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReferenceType.ts#L48)


## Methods

### clone(): [Type](td.models.type.md)
Clone this type.  
* Overwrites [Type](td.models.type.md).[clone](td.models.type.md#clone)
* Defined in [td/models/types/ReferenceType.ts:71](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReferenceType.ts#L71)

#### Returns: [Type](td.models.type.md)
A clone of this type.


### equals(type: [ReferenceType](td.models.referencetype.md)): boolean
Test whether this type equals the given type.  
* Overwrites [Type](td.models.type.md).[equals](td.models.type.md#equals)
* Defined in [td/models/types/ReferenceType.ts:85](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReferenceType.ts#L85)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [ReferenceType](td.models.referencetype.md)| The type that should be checked for equality. |

#### Returns: boolean
TRUE if the given type equals this type, FALSE otherwise.


### toObject(): any
Return a raw object representation of this type.  
* Overwrites [Type](td.models.type.md).[toObject](td.models.type.md#toobject)
* Defined in [td/models/types/ReferenceType.ts:95](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReferenceType.ts#L95)

#### Returns: any

### toString(): string
Return a string representation of this type.  
* Overwrites [Type](td.models.type.md).[toString](td.models.type.md#tostring)
* Defined in [td/models/types/ReferenceType.ts:115](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/types/ReferenceType.ts#L115)

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
