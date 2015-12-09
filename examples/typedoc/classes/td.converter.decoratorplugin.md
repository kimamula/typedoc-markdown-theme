# Class DecoratorPlugin
A plugin that detects decorators.

### Extends
* [ConverterPlugin](td.converter.converterplugin.md)

### Implements
* [IPluginInterface](../interfaces/td.iplugininterface.md)

## Index

### Constructors
* [constructor](td.converter.decoratorplugin.md#constructor)

### Properties
* [converter](td.converter.decoratorplugin.md#converter)
* [usages](td.converter.decoratorplugin.md#usages)

### Methods
* [extractArguments](td.converter.decoratorplugin.md#extractarguments)
* [onBegin](td.converter.decoratorplugin.md#onbegin)
* [onBeginResolve](td.converter.decoratorplugin.md#onbeginresolve)
* [onDeclaration](td.converter.decoratorplugin.md#ondeclaration)
* [remove](td.converter.decoratorplugin.md#remove)

## Constructors

### new DecoratorPlugin(converter: [Converter](td.converter.converter.md)): [DecoratorPlugin](td.converter.decoratorplugin.md)
Create a new ImplementsPlugin instance.  
* Overwrites [ConverterPlugin](td.converter.converterplugin.md).[constructor](td.converter.converterplugin.md#constructor)
* Defined in [td/converter/plugins/DecoratorPlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/DecoratorPlugin.ts#L8)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| converter | [Converter](td.converter.converter.md)| The converter this plugin should be attached to. |

#### Returns: [DecoratorPlugin](td.converter.decoratorplugin.md)

## Properties

### Protected converter: [Converter](td.converter.converter.md)
The converter this plugin is attached to.
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[converter](td.converter.converterplugin.md#converter)
* Defined in [td/converter/ConverterPlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L8)


### Private usages: [symbolID: number]: [ReferenceType](td.models.referencetype.md)[]

* Defined in [td/converter/plugins/DecoratorPlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/DecoratorPlugin.ts#L8)


## Methods

### Private extractArguments(args: [NodeArray](../interfaces/ts.nodearray.md)<[Expression](../interfaces/ts.expression.md)>, signature: [Signature](../interfaces/ts.signature.md)): any
Create an object describing the arguments a decorator is set with.  
* Defined in [td/converter/plugins/DecoratorPlugin.ts:31](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/DecoratorPlugin.ts#L31)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| args | [NodeArray](../interfaces/ts.nodearray.md)<[Expression](../interfaces/ts.expression.md)>| The arguments resolved from the decorator's call expression. |
| signature | [Signature](../interfaces/ts.signature.md)| The signature definition of the decorator being used. |

#### Returns: any
An object describing the decorator parameters,


### Private onBegin(context: [Context](td.converter.context.md)): void
Triggered when the converter begins converting a project.  
* Defined in [td/converter/plugins/DecoratorPlugin.ts:52](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/DecoratorPlugin.ts#L52)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |

#### Returns: void

### Private onBeginResolve(context: [Context](td.converter.context.md)): void
Triggered when the converter resolves a reflection.  
* Defined in [td/converter/plugins/DecoratorPlugin.ts:114](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/DecoratorPlugin.ts#L114)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |

#### Returns: void

### Private onDeclaration(context: [Context](td.converter.context.md), reflection: [Reflection](td.models.reflection.md), node?: [Node](../interfaces/ts.node.md)): void
Triggered when the converter has created a declaration or signature reflection.  
* Defined in [td/converter/plugins/DecoratorPlugin.ts:64](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/DecoratorPlugin.ts#L64)


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
