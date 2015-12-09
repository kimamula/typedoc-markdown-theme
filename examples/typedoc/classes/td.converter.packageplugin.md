# Class PackagePlugin
A handler that tries to find the package.json and readme.md files of thecurrent project.The handler traverses the file tree upwards for each file processed by the processorand records the nearest package info files it can find. Within the resolve files, thecontents of the found files will be read and appended to the ProjectReflection.

### Extends
* [ConverterPlugin](td.converter.converterplugin.md)

### Implements
* [IPluginInterface](../interfaces/td.iplugininterface.md)
* [IParameterProvider](../interfaces/td.iparameterprovider.md)

## Index

### Constructors
* [constructor](td.converter.packageplugin.md#constructor)

### Properties
* [converter](td.converter.packageplugin.md#converter)
* [noReadmeFile](td.converter.packageplugin.md#noreadmefile)
* [packageFile](td.converter.packageplugin.md#packagefile)
* [readmeFile](td.converter.packageplugin.md#readmefile)
* [visited](td.converter.packageplugin.md#visited)

### Methods
* [getParameters](td.converter.packageplugin.md#getparameters)
* [onBegin](td.converter.packageplugin.md#onbegin)
* [onBeginDocument](td.converter.packageplugin.md#onbegindocument)
* [onBeginResolve](td.converter.packageplugin.md#onbeginresolve)
* [remove](td.converter.packageplugin.md#remove)

## Constructors

### new PackagePlugin(converter: [Converter](td.converter.converter.md)): [PackagePlugin](td.converter.packageplugin.md)
Create a new PackageHandler instance.  
* Overwrites [ConverterPlugin](td.converter.converterplugin.md).[constructor](td.converter.converterplugin.md#constructor)
* Defined in [td/converter/plugins/PackagePlugin.ts:43](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/PackagePlugin.ts#L43)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| converter | [Converter](td.converter.converter.md)| The converter this plugin should be attached to. |

#### Returns: [PackagePlugin](td.converter.packageplugin.md)

## Properties

### Protected converter: [Converter](td.converter.converter.md)
The converter this plugin is attached to.
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[converter](td.converter.converterplugin.md#converter)
* Defined in [td/converter/ConverterPlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L8)


### Private noReadmeFile: boolean
Should the readme file be ignored?
* Defined in [td/converter/plugins/PackagePlugin.ts:43](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/PackagePlugin.ts#L43)


### Private packageFile: string
The file name of the found package.json file.
* Defined in [td/converter/plugins/PackagePlugin.ts:33](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/PackagePlugin.ts#L33)


### Private readmeFile: string
The file name of the found readme.md file.
* Defined in [td/converter/plugins/PackagePlugin.ts:28](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/PackagePlugin.ts#L28)


### Private visited: string[]
List of directories the handler already inspected.
* Defined in [td/converter/plugins/PackagePlugin.ts:38](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/PackagePlugin.ts#L38)


## Methods

### getParameters(): [IParameter](../interfaces/td.iparameter.md)[]
  
* Implementation of [IParameterProvider](../interfaces/td.iparameterprovider.md).[getParameters](../interfaces/td.iparameterprovider.md#getparameters)
* Defined in [td/converter/plugins/PackagePlugin.ts:59](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/PackagePlugin.ts#L59)

#### Returns: [IParameter](../interfaces/td.iparameter.md)[]

### Private onBegin(context: [Context](td.converter.context.md)): void
Triggered when the converter begins converting a project.  
* Defined in [td/converter/plugins/PackagePlugin.ts:72](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/PackagePlugin.ts#L72)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |

#### Returns: void

### Private onBeginDocument(context: [Context](td.converter.context.md), reflection: [Reflection](td.models.reflection.md), node?: [SourceFile](../interfaces/ts.sourcefile.md)): void
Triggered when the converter begins converting a source file.  
* Defined in [td/converter/plugins/PackagePlugin.ts:95](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/PackagePlugin.ts#L95)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |
| reflection | [Reflection](td.models.reflection.md)| The reflection that is currently processed. |
| node? | [SourceFile](../interfaces/ts.sourcefile.md)| The node that is currently processed if available. |

#### Returns: void

### Private onBeginResolve(context: [Context](td.converter.context.md)): void
Triggered when the converter begins resolving a project.  
* Defined in [td/converter/plugins/PackagePlugin.ts:131](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/PackagePlugin.ts#L131)


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
