# Class GitHubPlugin
A handler that watches for repositories with GitHub origin and linkstheir source files to the related GitHub pages.

### Extends
* [ConverterPlugin](td.converter.converterplugin.md)

### Implements
* [IPluginInterface](../interfaces/td.iplugininterface.md)

## Index

### Constructors
* [constructor](td.converter.githubplugin.md#constructor)

### Properties
* [converter](td.converter.githubplugin.md#converter)
* [ignoredPaths](td.converter.githubplugin.md#ignoredpaths)
* [repositories](td.converter.githubplugin.md#repositories)

### Methods
* [getRepository](td.converter.githubplugin.md#getrepository)
* [onEndResolve](td.converter.githubplugin.md#onendresolve)
* [remove](td.converter.githubplugin.md#remove)

## Constructors

### new GitHubPlugin(converter: [Converter](td.converter.converter.md)): [GitHubPlugin](td.converter.githubplugin.md)
Create a new GitHubHandler instance.  
* Overwrites [ConverterPlugin](td.converter.converterplugin.md).[constructor](td.converter.converterplugin.md#constructor)
* Defined in [td/converter/plugins/GitHubPlugin.ts:146](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GitHubPlugin.ts#L146)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| converter | [Converter](td.converter.converter.md)| The converter this plugin should be attached to. |

#### Returns: [GitHubPlugin](td.converter.githubplugin.md)

## Properties

### Protected converter: [Converter](td.converter.converter.md)
The converter this plugin is attached to.
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[converter](td.converter.converterplugin.md#converter)
* Defined in [td/converter/ConverterPlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L8)


### Private ignoredPaths: string[]
List of paths known to be not under git control.
* Defined in [td/converter/plugins/GitHubPlugin.ts:146](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GitHubPlugin.ts#L146)


### Private repositories: [path: string]: [Repository](td.converter.repository.md)
List of known repositories.
* Defined in [td/converter/plugins/GitHubPlugin.ts:141](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GitHubPlugin.ts#L141)


## Methods

### Private getRepository(fileName: string): [Repository](td.converter.repository.md)
Check whether the given file is placed inside a repository.  
* Defined in [td/converter/plugins/GitHubPlugin.ts:170](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GitHubPlugin.ts#L170)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string| The name of the file a repository should be looked for. |

#### Returns: [Repository](td.converter.repository.md)
The found repository info or NULL.


### Private onEndResolve(context: [Context](td.converter.context.md)): void
Triggered when the converter has finished resolving a project.  
* Defined in [td/converter/plugins/GitHubPlugin.ts:209](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GitHubPlugin.ts#L209)


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
