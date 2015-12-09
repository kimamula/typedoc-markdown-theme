# Class DeepCommentPlugin
A handler that moves comments with dot syntax to their target.

### Extends
* [ConverterPlugin](td.converter.converterplugin.md)

### Implements
* [IPluginInterface](../interfaces/td.iplugininterface.md)

## Index

### Constructors
* [constructor](td.converter.deepcommentplugin.md#constructor)

### Properties
* [converter](td.converter.deepcommentplugin.md#converter)

### Methods
* [onBeginResolve](td.converter.deepcommentplugin.md#onbeginresolve)
* [remove](td.converter.deepcommentplugin.md#remove)

## Constructors

### new DeepCommentPlugin(converter: [Converter](td.converter.converter.md)): [DeepCommentPlugin](td.converter.deepcommentplugin.md)
Create a new CommentHandler instance.  
* Overwrites [ConverterPlugin](td.converter.converterplugin.md).[constructor](td.converter.converterplugin.md#constructor)
* Defined in [td/converter/plugins/DeepCommentPlugin.ts:7](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/DeepCommentPlugin.ts#L7)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| converter | [Converter](td.converter.converter.md)| The converter this plugin should be attached to. |

#### Returns: [DeepCommentPlugin](td.converter.deepcommentplugin.md)

## Properties

### Protected converter: [Converter](td.converter.converter.md)
The converter this plugin is attached to.
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[converter](td.converter.converterplugin.md#converter)
* Defined in [td/converter/ConverterPlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L8)


## Methods

### Private onBeginResolve(context: [Context](td.converter.context.md)): void
Triggered when the converter begins resolving a project.  
* Defined in [td/converter/plugins/DeepCommentPlugin.ts:25](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/DeepCommentPlugin.ts#L25)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |

#### Returns: void

### remove(): void
Removes this plugin.  
* Implementation of [IPluginInterface](../interfaces/td.iplugininterface.md).[remove](../interfaces/td.iplugininterface.md#remove)
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[remove](td.converter.converterplugin.md#remove)
* Defined in [td/converter/ConverterPlugin.ts:24](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L24)

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
