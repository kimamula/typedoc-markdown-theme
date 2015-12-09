# Class GroupPlugin
A handler that sorts and groups the found reflections in the resolving phase.The handler sets the ´groups´ property of all reflections.

### Extends
* [ConverterPlugin](td.converter.converterplugin.md)

### Implements
* [IPluginInterface](../interfaces/td.iplugininterface.md)

## Index

### Constructors
* [constructor](td.converter.groupplugin.md#constructor)

### Properties
* [converter](td.converter.groupplugin.md#converter)
* [PLURALS](td.converter.groupplugin.md#plurals)
* [SINGULARS](td.converter.groupplugin.md#singulars)
* [WEIGHTS](td.converter.groupplugin.md#weights)

### Methods
* [onEndResolve](td.converter.groupplugin.md#onendresolve)
* [onResolve](td.converter.groupplugin.md#onresolve)
* [remove](td.converter.groupplugin.md#remove)
* [getKindPlural](td.converter.groupplugin.md#getkindplural)
* [getKindSingular](td.converter.groupplugin.md#getkindsingular)
* [getKindString](td.converter.groupplugin.md#getkindstring)
* [getReflectionGroups](td.converter.groupplugin.md#getreflectiongroups)
* [sortCallback](td.converter.groupplugin.md#sortcallback)

## Constructors

### new GroupPlugin(converter: [Converter](td.converter.converter.md)): [GroupPlugin](td.converter.groupplugin.md)
Create a new GroupPlugin instance.  
* Overwrites [ConverterPlugin](td.converter.converterplugin.md).[constructor](td.converter.converterplugin.md#constructor)
* Defined in [td/converter/plugins/GroupPlugin.ts:63](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GroupPlugin.ts#L63)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| converter | [Converter](td.converter.converter.md)| The converter this plugin should be attached to. |

#### Returns: [GroupPlugin](td.converter.groupplugin.md)

## Properties

### Protected converter: [Converter](td.converter.converter.md)
The converter this plugin is attached to.
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[converter](td.converter.converterplugin.md#converter)
* Defined in [td/converter/ConverterPlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L8)


### Static PLURALS: 
Define the plural name of individual reflection kinds.
* Defined in [td/converter/plugins/GroupPlugin.ts:55](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GroupPlugin.ts#L55)


### Static SINGULARS: 
Define the singular name of individual reflection kinds.
* Defined in [td/converter/plugins/GroupPlugin.ts:45](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GroupPlugin.ts#L45)


### Static WEIGHTS: Array<[ReflectionKind](../enums/td.models.reflectionkind.md)>
Define the sort order of reflections.
* Defined in [td/converter/plugins/GroupPlugin.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GroupPlugin.ts#L13)


## Methods

### Private onEndResolve(context: [Context](td.converter.context.md)): void
Triggered when the converter has finished resolving a project.  
* Defined in [td/converter/plugins/GroupPlugin.ts:104](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GroupPlugin.ts#L104)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |

#### Returns: void

### Private onResolve(context: [Context](td.converter.context.md), reflection: [Reflection](td.models.reflection.md)): void
Triggered when the converter resolves a reflection.  
* Defined in [td/converter/plugins/GroupPlugin.ts:85](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GroupPlugin.ts#L85)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |
| reflection | [Reflection](td.models.reflection.md)| The reflection that is currently resolved. |

#### Returns: void

### remove(): void
Removes this plugin.  
* Implementation of [IPluginInterface](../interfaces/td.iplugininterface.md).[remove](../interfaces/td.iplugininterface.md#remove)
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[remove](td.converter.converterplugin.md#remove)
* Defined in [td/converter/ConverterPlugin.ts:24](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L24)

#### Returns: void

### Static getKindPlural(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)): string
Return the plural name of a internal typescript kind identifier.  
* Defined in [td/converter/plugins/GroupPlugin.ts:208](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GroupPlugin.ts#L208)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The original internal typescript kind identifier. |

#### Returns: string
The plural name of the given internal typescript kind identifier


### Static getKindSingular(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)): string
Return the singular name of a internal typescript kind identifier.  
* Defined in [td/converter/plugins/GroupPlugin.ts:193](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GroupPlugin.ts#L193)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The original internal typescript kind identifier. |

#### Returns: string
The singular name of the given internal typescript kind identifier


### Static Private getKindString(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)): string
Transform the internal typescript kind identifier into a human readable version.  
* Defined in [td/converter/plugins/GroupPlugin.ts:180](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GroupPlugin.ts#L180)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The original typescript kind identifier. |

#### Returns: string
A human readable version of the given typescript kind identifier.


### Static getReflectionGroups(reflections: [DeclarationReflection](td.models.declarationreflection.md)[]): [ReflectionGroup](td.models.reflectiongroup.md)[]
Create a grouped representation of the given list of reflections.Reflections are grouped by kind and sorted by weight and name.  
* Defined in [td/converter/plugins/GroupPlugin.ts:135](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GroupPlugin.ts#L135)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| reflections | [DeclarationReflection](td.models.declarationreflection.md)[]| The reflections that should be grouped. |

#### Returns: [ReflectionGroup](td.models.reflectiongroup.md)[]
An array containing all children of the given reflection grouped by their kind.


### Static sortCallback(a: [Reflection](td.models.reflection.md), b: [Reflection](td.models.reflection.md)): number
Callback used to sort reflections by weight defined by ´GroupPlugin.WEIGHTS´ and name.  
* Defined in [td/converter/plugins/GroupPlugin.ts:224](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GroupPlugin.ts#L224)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| a | [Reflection](td.models.reflection.md)| The left reflection to sort. |
| b | [Reflection](td.models.reflection.md)| The right reflection to sort. |

#### Returns: number
The sorting weight.



Generated using [TypeDoc](http://typedoc.io)
