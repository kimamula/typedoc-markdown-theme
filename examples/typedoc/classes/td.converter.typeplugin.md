# Class TypePlugin
A handler that converts all instances of [[LateResolvingType]] to their renderable equivalents.

### Extends
* [ConverterPlugin](td.converter.converterplugin.md)

### Implements
* [IPluginInterface](../interfaces/td.iplugininterface.md)

## Index

### Constructors
* [constructor](td.converter.typeplugin.md#constructor)

### Properties
* [converter](td.converter.typeplugin.md#converter)
* [reflections](td.converter.typeplugin.md#reflections)

### Methods
* [onResolve](td.converter.typeplugin.md#onresolve)
* [onResolveEnd](td.converter.typeplugin.md#onresolveend)
* [postpone](td.converter.typeplugin.md#postpone)
* [remove](td.converter.typeplugin.md#remove)

## Constructors

### new TypePlugin(converter: [Converter](td.converter.converter.md)): [TypePlugin](td.converter.typeplugin.md)
Create a new TypeHandler instance.  
* Overwrites [ConverterPlugin](td.converter.converterplugin.md).[constructor](td.converter.converterplugin.md#constructor)
* Defined in [td/converter/plugins/TypePlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/TypePlugin.ts#L8)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| converter | [Converter](td.converter.converter.md)| The converter this plugin should be attached to. |

#### Returns: [TypePlugin](td.converter.typeplugin.md)

## Properties

### Protected converter: [Converter](td.converter.converter.md)
The converter this plugin is attached to.
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[converter](td.converter.converterplugin.md#converter)
* Defined in [td/converter/ConverterPlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L8)


### reflections: [DeclarationReflection](td.models.declarationreflection.md)[]

* Defined in [td/converter/plugins/TypePlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/TypePlugin.ts#L8)


## Methods

### Private onResolve(context: [Context](td.converter.context.md), reflection: [DeclarationReflection](td.models.declarationreflection.md)): void
Triggered when the converter resolves a reflection.  
* Defined in [td/converter/plugins/TypePlugin.ts:29](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/TypePlugin.ts#L29)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |
| reflection | [DeclarationReflection](td.models.declarationreflection.md)| The reflection that is currently resolved. |

#### Returns: void

### Private onResolveEnd(context: [Context](td.converter.context.md)): void
Triggered when the converter has finished resolving a project.  
* Defined in [td/converter/plugins/TypePlugin.ts:118](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/TypePlugin.ts#L118)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |

#### Returns: void

### Private postpone(reflection: [DeclarationReflection](td.models.declarationreflection.md)): void
  
* Defined in [td/converter/plugins/TypePlugin.ts:106](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/TypePlugin.ts#L106)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| reflection | [DeclarationReflection](td.models.declarationreflection.md)|  |

#### Returns: void

### remove(): void
Removes this plugin.  
* Implementation of [IPluginInterface](../interfaces/td.iplugininterface.md).[remove](../interfaces/td.iplugininterface.md#remove)
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[remove](td.converter.converterplugin.md#remove)
* Defined in [td/converter/ConverterPlugin.ts:24](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L24)

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
