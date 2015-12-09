# Class SourcePlugin
A handler that attaches source file information to reflections.

### Extends
* [ConverterPlugin](td.converter.converterplugin.md)

### Implements
* [IPluginInterface](../interfaces/td.iplugininterface.md)

## Index

### Constructors
* [constructor](td.converter.sourceplugin.md#constructor)

### Properties
* [basePath](td.converter.sourceplugin.md#basepath)
* [converter](td.converter.sourceplugin.md#converter)
* [fileMappings](td.converter.sourceplugin.md#filemappings)

### Methods
* [getSourceFile](td.converter.sourceplugin.md#getsourcefile)
* [onBegin](td.converter.sourceplugin.md#onbegin)
* [onBeginDocument](td.converter.sourceplugin.md#onbegindocument)
* [onBeginResolve](td.converter.sourceplugin.md#onbeginresolve)
* [onDeclaration](td.converter.sourceplugin.md#ondeclaration)
* [onEndResolve](td.converter.sourceplugin.md#onendresolve)
* [onResolve](td.converter.sourceplugin.md#onresolve)
* [remove](td.converter.sourceplugin.md#remove)

## Constructors

### new SourcePlugin(converter: [Converter](td.converter.converter.md)): [SourcePlugin](td.converter.sourceplugin.md)
Create a new SourceHandler instance.  
* Overwrites [ConverterPlugin](td.converter.converterplugin.md).[constructor](td.converter.converterplugin.md#constructor)
* Defined in [td/converter/plugins/SourcePlugin.ts:16](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/SourcePlugin.ts#L16)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| converter | [Converter](td.converter.converter.md)| The converter this plugin should be attached to. |

#### Returns: [SourcePlugin](td.converter.sourceplugin.md)

## Properties

### Private basePath: [BasePath](td.converter.basepath.md)
Helper for resolving the base path of all source files.
* Defined in [td/converter/plugins/SourcePlugin.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/SourcePlugin.ts#L11)


### Protected converter: [Converter](td.converter.converter.md)
The converter this plugin is attached to.
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[converter](td.converter.converterplugin.md#converter)
* Defined in [td/converter/ConverterPlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L8)


### Private fileMappings: [name: string]: [SourceFile](td.models.sourcefile.md)
A map of all generated [[SourceFile]] instances.
* Defined in [td/converter/plugins/SourcePlugin.ts:16](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/SourcePlugin.ts#L16)


## Methods

### Private getSourceFile(fileName: string, project: [ProjectReflection](td.models.projectreflection.md)): [SourceFile](td.models.sourcefile.md)
  
* Defined in [td/converter/plugins/SourcePlugin.ts:36](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/SourcePlugin.ts#L36)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |
| project | [ProjectReflection](td.models.projectreflection.md)|  |

#### Returns: [SourceFile](td.models.sourcefile.md)

### Private onBegin(): void
Triggered once per project before the dispatcher invokes the compiler.  
* Defined in [td/converter/plugins/SourcePlugin.ts:52](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/SourcePlugin.ts#L52)

#### Returns: void

### Private onBeginDocument(context: [Context](td.converter.context.md), reflection: [Reflection](td.models.reflection.md), node?: [SourceFile](../interfaces/ts.sourcefile.md)): void
Triggered when the converter begins converting a source file.Create a new [[SourceFile]] instance for all TypeScript files.  
* Defined in [td/converter/plugins/SourcePlugin.ts:67](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/SourcePlugin.ts#L67)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |
| reflection | [Reflection](td.models.reflection.md)| The reflection that is currently processed. |
| node? | [SourceFile](../interfaces/ts.sourcefile.md)| The node that is currently processed if available. |

#### Returns: void

### Private onBeginResolve(context: [Context](td.converter.context.md)): void
Triggered when the converter begins resolving a project.  
* Defined in [td/converter/plugins/SourcePlugin.ts:116](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/SourcePlugin.ts#L116)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |

#### Returns: void

### Private onDeclaration(context: [Context](td.converter.context.md), reflection: [Reflection](td.models.reflection.md), node?: [Node](../interfaces/ts.node.md)): void
Triggered when the converter has created a declaration reflection.Attach the current source file to the [[DeclarationReflection.sources]] array.  
* Defined in [td/converter/plugins/SourcePlugin.ts:84](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/SourcePlugin.ts#L84)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |
| reflection | [Reflection](td.models.reflection.md)| The reflection that is currently processed. |
| node? | [Node](../interfaces/ts.node.md)| The node that is currently processed if available. |

#### Returns: void

### Private onEndResolve(context: [Context](td.converter.context.md)): void
Triggered when the converter has finished resolving a project.  
* Defined in [td/converter/plugins/SourcePlugin.ts:143](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/SourcePlugin.ts#L143)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |

#### Returns: void

### Private onResolve(context: [Context](td.converter.context.md), reflection: [Reflection](td.models.reflection.md)): void
Triggered when the converter resolves a reflection.  
* Defined in [td/converter/plugins/SourcePlugin.ts:130](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/SourcePlugin.ts#L130)


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


Generated using [TypeDoc](http://typedoc.io)
