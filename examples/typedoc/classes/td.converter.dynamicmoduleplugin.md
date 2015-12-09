# Class DynamicModulePlugin
A handler that truncates the names of dynamic modules to not include theproject's base path.

### Extends
* [ConverterPlugin](td.converter.converterplugin.md)

### Implements
* [IPluginInterface](../interfaces/td.iplugininterface.md)

## Index

### Constructors
* [constructor](td.converter.dynamicmoduleplugin.md#constructor)

### Properties
* [basePath](td.converter.dynamicmoduleplugin.md#basepath)
* [converter](td.converter.dynamicmoduleplugin.md#converter)
* [reflections](td.converter.dynamicmoduleplugin.md#reflections)

### Methods
* [onBegin](td.converter.dynamicmoduleplugin.md#onbegin)
* [onBeginResolve](td.converter.dynamicmoduleplugin.md#onbeginresolve)
* [onDeclaration](td.converter.dynamicmoduleplugin.md#ondeclaration)
* [remove](td.converter.dynamicmoduleplugin.md#remove)

## Constructors

### new DynamicModulePlugin(converter: [Converter](td.converter.converter.md)): [DynamicModulePlugin](td.converter.dynamicmoduleplugin.md)
Create a new DynamicModuleHandler instance.  
* Overwrites [ConverterPlugin](td.converter.converterplugin.md).[constructor](td.converter.converterplugin.md#constructor)
* Defined in [td/converter/plugins/DynamicModulePlugin.ts:17](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/DynamicModulePlugin.ts#L17)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| converter | [Converter](td.converter.converter.md)| The converter this plugin should be attached to. |

#### Returns: [DynamicModulePlugin](td.converter.dynamicmoduleplugin.md)

## Properties

### Private basePath: [BasePath](td.converter.basepath.md)
Helper class for determining the base path.
* Defined in [td/converter/plugins/DynamicModulePlugin.ts:12](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/DynamicModulePlugin.ts#L12)


### Protected converter: [Converter](td.converter.converter.md)
The converter this plugin is attached to.
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[converter](td.converter.converterplugin.md#converter)
* Defined in [td/converter/ConverterPlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L8)


### Private reflections: [Reflection](td.models.reflection.md)[]
List of reflections whose name must be trimmed.
* Defined in [td/converter/plugins/DynamicModulePlugin.ts:17](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/DynamicModulePlugin.ts#L17)


## Methods

### Private onBegin(context: [Context](td.converter.context.md)): void
Triggered when the converter begins converting a project.  
* Defined in [td/converter/plugins/DynamicModulePlugin.ts:38](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/DynamicModulePlugin.ts#L38)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |

#### Returns: void

### Private onBeginResolve(context: [Context](td.converter.context.md)): void
Triggered when the converter begins resolving a project.  
* Defined in [td/converter/plugins/DynamicModulePlugin.ts:70](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/DynamicModulePlugin.ts#L70)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |

#### Returns: void

### Private onDeclaration(context: [Context](td.converter.context.md), reflection: [Reflection](td.models.reflection.md), node?: [Node](../interfaces/ts.node.md)): void
Triggered when the converter has created a declaration reflection.  
* Defined in [td/converter/plugins/DynamicModulePlugin.ts:51](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/DynamicModulePlugin.ts#L51)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |
| reflection | [Reflection](td.models.reflection.md)| The reflection that is currently processed. |
| node? | [Node](../interfaces/ts.node.md)| The node that is currently processed if available. |

#### Returns: void

### remove(): void
Removes this plugin.  
* Implementation of [IPluginInterface](../interfaces/td.iplugininterface.md).[remove](../interfaces/td.iplugininterface.md#remove)
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[remove](td.converter.converterplugin.md#remove)
* Defined in [td/converter/ConverterPlugin.ts:24](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L24)

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
