# Class ImplementsPlugin
A plugin that detects interface implementations of functions andproperties on classes and links them.

### Extends
* [ConverterPlugin](td.converter.converterplugin.md)

### Implements
* [IPluginInterface](../interfaces/td.iplugininterface.md)

## Index

### Constructors
* [constructor](td.converter.implementsplugin.md#constructor)

### Properties
* [converter](td.converter.implementsplugin.md#converter)

### Methods
* [analyzeClass](td.converter.implementsplugin.md#analyzeclass)
* [copyComment](td.converter.implementsplugin.md#copycomment)
* [onResolve](td.converter.implementsplugin.md#onresolve)
* [remove](td.converter.implementsplugin.md#remove)

## Constructors

### new ImplementsPlugin(converter: [Converter](td.converter.converter.md)): [ImplementsPlugin](td.converter.implementsplugin.md)
Create a new ImplementsPlugin instance.  
* Overwrites [ConverterPlugin](td.converter.converterplugin.md).[constructor](td.converter.converterplugin.md#constructor)
* Defined in [td/converter/plugins/ImplementsPlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/ImplementsPlugin.ts#L8)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| converter | [Converter](td.converter.converter.md)| The converter this plugin should be attached to. |

#### Returns: [ImplementsPlugin](td.converter.implementsplugin.md)

## Properties

### Protected converter: [Converter](td.converter.converter.md)
The converter this plugin is attached to.
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[converter](td.converter.converterplugin.md#converter)
* Defined in [td/converter/ConverterPlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L8)


## Methods

### Private analyzeClass(context: [Context](td.converter.context.md), classReflection: [DeclarationReflection](td.models.declarationreflection.md), interfaceReflection: [DeclarationReflection](td.models.declarationreflection.md)): void
Mark all members of the given class to be the implementation of the matching interface member.  
* Defined in [td/converter/plugins/ImplementsPlugin.ts:27](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/ImplementsPlugin.ts#L27)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |
| classReflection | [DeclarationReflection](td.models.declarationreflection.md)| The reflection of the classReflection class. |
| interfaceReflection | [DeclarationReflection](td.models.declarationreflection.md)| The reflection of the interfaceReflection interface. |

#### Returns: void

### Private copyComment(target: [Reflection](td.models.reflection.md), source: [Reflection](td.models.reflection.md)): void
Copy the comment of the source reflection to the target reflection.  
* Defined in [td/converter/plugins/ImplementsPlugin.ts:76](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/ImplementsPlugin.ts#L76)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| target | [Reflection](td.models.reflection.md)|  |
| source | [Reflection](td.models.reflection.md)|  |

#### Returns: void

### Private onResolve(context: [Context](td.converter.context.md), reflection: [DeclarationReflection](td.models.declarationreflection.md)): void
Triggered when the converter resolves a reflection.  
* Defined in [td/converter/plugins/ImplementsPlugin.ts:98](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/ImplementsPlugin.ts#L98)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |
| reflection | [DeclarationReflection](td.models.declarationreflection.md)| The reflection that is currently resolved. |

#### Returns: void

### remove(): void
Removes this plugin.  
* Implementation of [IPluginInterface](../interfaces/td.iplugininterface.md).[remove](../interfaces/td.iplugininterface.md#remove)
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[remove](td.converter.converterplugin.md#remove)
* Defined in [td/converter/ConverterPlugin.ts:24](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L24)

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
