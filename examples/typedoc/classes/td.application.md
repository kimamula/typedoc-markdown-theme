# Class Application
The default TypeDoc main application class.This class holds the two main components of TypeDoc, the [[Dispatcher]] andthe [[Renderer]]. When running TypeDoc, first the [[Dispatcher]] is invoked whichgenerates a [[ProjectReflection]] from the passed in source files. The[[ProjectReflection]] is a hierarchical model representation of the TypeScriptproject. Afterwards the model is passed to the [[Renderer]] which uses an instanceof [[BaseTheme]] to generate the final documentation.Both the [[Dispatcher]] and the [[Renderer]] are subclasses of the [[EventDispatcher]]and emit a series of events while processing the project. Subscribe to these Eventsto control the application flow or alter the output.

### Extends
* [EventDispatcher](td.eventdispatcher.md)

### Implements
* [IApplication](../interfaces/td.iapplication.md)

## Index

### Constructors
* [constructor](td.application.md#constructor)

### Events
* [EVENT_COLLECT_PARAMETERS](td.application.md#event_collect_parameters)

### Properties
* [compilerOptions](td.application.md#compileroptions)
* [converter](td.application.md#converter)
* [logger](td.application.md#logger)
* [options](td.application.md#options)
* [renderer](td.application.md#renderer)
* [typeScriptVersion](td.application.md#typescriptversion)
* [VERSION](td.application.md#version)

### Methods
* [bootstrap](td.application.md#bootstrap)
* [bootstrapFromCommandline](td.application.md#bootstrapfromcommandline)
* [bootstrapWithOptions](td.application.md#bootstrapwithoptions)
* [collectParameters](td.application.md#collectparameters)
* [convert](td.application.md#convert)
* [discoverNpmPlugins](td.application.md#discovernpmplugins)
* [dispatch](td.application.md#dispatch)
* [expandInputFiles](td.application.md#expandinputfiles)
* [generateDocs](td.application.md#generatedocs)
* [generateJson](td.application.md#generatejson)
* [getTypeScriptVersion](td.application.md#gettypescriptversion)
* [loadNpmPlugins](td.application.md#loadnpmplugins)
* [off](td.application.md#off)
* [on](td.application.md#on)
* [toString](td.application.md#tostring)

## Constructors

### new Application(options?: IOptions): [Application](td.application.md)new Application(fromCommandLine: boolean): [Application](td.application.md)
Create a new TypeDoc application instance.Create a new TypeDoc application instance.  
* Defined in [td/Application.ts:94](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L94)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options? | IOptions| An object containing the options that should be used. |

#### Returns: [Application](td.application.md)
Create a new TypeDoc application instance.Create a new TypeDoc application instance.  
* Defined in [td/Application.ts:101](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L101)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fromCommandLine | boolean| TRUE if the application should execute in command line mode. |

#### Returns: [Application](td.application.md)

## Events

### Static EVENT_COLLECT_PARAMETERS: string

* Defined in [td/Application.ts:89](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L89)


## Properties

### compilerOptions: [CompilerOptions](../interfaces/ts.compileroptions.md)
The options used by the TypeScript compiler.
* Implementation of [IApplication](../interfaces/td.iapplication.md).[compilerOptions](../interfaces/td.iapplication.md#compileroptions)
* Defined in [td/Application.ts:62](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L62)


### converter: [Converter](td.converter.converter.md)
The converter used to create the declaration reflections.
* Defined in [td/Application.ts:67](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L67)


### logger: [Logger](td.logger.md)
The logger that should be used to output messages.
* Implementation of [IApplication](../interfaces/td.iapplication.md).[logger](../interfaces/td.iapplication.md#logger)
* Defined in [td/Application.ts:77](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L77)


### options: IOptions
The options used by the dispatcher and the renderer.
* Implementation of [IApplication](../interfaces/td.iapplication.md).[options](../interfaces/td.iapplication.md#options)
* Defined in [td/Application.ts:57](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L57)


### renderer: [Renderer](td.output.renderer.md)
The renderer used to generate the documentation output.
* Defined in [td/Application.ts:72](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L72)


### Private typeScriptVersion: string
The version number of the loaded TypeScript compiler.Cached return value of [[Application.getTypeScriptVersion]]
* Defined in [td/Application.ts:83](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L83)


### Static VERSION: string
The version number of TypeDoc.
* Defined in [td/Application.ts:94](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L94)


## Methods

### Private bootstrap(): boolean
Generic initialization logic.  
* Defined in [td/Application.ts:131](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L131)

#### Returns: boolean

### Private bootstrapFromCommandline(): void
Run TypeDoc from the command line.  
* Defined in [td/Application.ts:145](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L145)

#### Returns: void

### Private bootstrapWithOptions(options?: IOptions): void
Initialize TypeDoc with the given options object.  
* Defined in [td/Application.ts:190](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L190)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options? | IOptions| The desired options to set. |

#### Returns: void

### collectParameters(parser: [OptionsParser](td.optionsparser.md)): void
Allow [[Converter]] and [[Renderer]] to add parameters to the given [[OptionsParser]].  
* Defined in [td/Application.ts:325](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L325)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| parser | [OptionsParser](td.optionsparser.md)| The parser instance the found parameters should be added to. |

#### Returns: void

### convert(src: string[]): [ProjectReflection](td.models.projectreflection.md)
Run the converter for the given set of files and return the generated reflections.  
* Defined in [td/Application.ts:339](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L339)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| src | string[]| A list of source that should be compiled and converted. |

#### Returns: [ProjectReflection](td.models.projectreflection.md)
An instance of ProjectReflection on success, NULL otherwise.


### Private discoverNpmPlugins(): string[]
Discover all installed TypeDoc plugins.  
* Defined in [td/Application.ts:247](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L247)

#### Returns: string[]
A list of all npm module names that are qualified TypeDoc plugins.


### dispatch(event: string, ...args: any[]): void
Dispatch an event with the given event name.  
* Inherited from [EventDispatcher](td.eventdispatcher.md).[dispatch](td.eventdispatcher.md#dispatch)
* Defined in [td/EventDispatcher.ts:67](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L67)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string| The name of the event to dispatch. |
| ...args | any[]| Additional arguments to pass to the handlers. |

#### Returns: void

### expandInputFiles(inputFiles?: string[]): string[]
Expand a list of input files.Searches for directories in the input files list and replaces them with alisting of all TypeScript files within them. One may use the ```--exclude``` optionto filter out files with a pattern.  
* Defined in [td/Application.ts:427](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L427)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| inputFiles? | string[]| The list of files that should be expanded. |

#### Returns: string[]
The list of input files with expanded directories.


### generateDocs(src: string[], out: string): booleangenerateDocs(project: [ProjectReflection](td.models.projectreflection.md), out: string): boolean
Run the documentation generator for the given set of files.  
* Defined in [td/Application.ts:360](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L360)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| src | string[]| A list of source files whose documentation should be generated. |
| out | string| The path the documentation should be written to. |

#### Returns: boolean
TRUE if the documentation could be generated successfully, otherwise FALSE.

Run the documentation generator for the given set of files.  
* Defined in [td/Application.ts:365](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L365)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| project | [ProjectReflection](td.models.projectreflection.md)| The project the documentation should be generated for. |
| out | string| The path the documentation should be written to. |

#### Returns: boolean
TRUE if the documentation could be generated successfully, otherwise FALSE.


### generateJson(src: string[], out: string): booleangenerateJson(project: [ProjectReflection](td.models.projectreflection.md), out: string): boolean
Run the converter for the given set of files and write the reflections to a json file.  
* Defined in [td/Application.ts:392](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L392)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| src | string[]| A list of source that should be compiled and converted. |
| out | string| The path and file name of the target file. |

#### Returns: boolean
TRUE if the json file could be written successfully, otherwise FALSE.

Run the converter for the given set of files and write the reflections to a json file.  
* Defined in [td/Application.ts:397](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L397)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| project | [ProjectReflection](td.models.projectreflection.md)| The project that should be converted. |
| out | string| The path and file name of the target file. |

#### Returns: boolean
TRUE if the json file could be written successfully, otherwise FALSE.


### getTypeScriptVersion(): string
Return the version number of the loaded TypeScript compiler.  
* Defined in [td/Application.ts:466](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L466)

#### Returns: string
The version number of the loaded TypeScript package.


### Private loadNpmPlugins(plugins?: string[]): boolean
Load the given list of npm plugins.  
* Defined in [td/Application.ts:210](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L210)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| plugins? | string[]| A list of npm modules that should be loaded as plugins. When not specifiedthis function will invoke [[discoverNpmPlugins]] to find a list of all installed plugins. |

#### Returns: boolean
TRUE on success, otherwise FALSE.


### off(event =  null: string, handler =  null: Function, scope =  null: any): void
Remove an event handler.  
* Inherited from [EventDispatcher](td.eventdispatcher.md).[off](td.eventdispatcher.md#off)
* Defined in [td/EventDispatcher.ts:119](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L119)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event =  null | string| The name of the event whose handlers should be removed. |
| handler =  null | Function| The callback that should be removed. |
| scope =  null | any| The scope of the callback that should be removed. |

#### Returns: void

### on(event: string, handler: Function, scope =  null: any, priority = 0: number): void
Register an event handler for the given event name.  
* Inherited from [EventDispatcher](td.eventdispatcher.md).[on](td.eventdispatcher.md#on)
* Defined in [td/EventDispatcher.ts:97](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L97)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string| The name of the event the handler should be registered to. |
| handler | Function| The callback that should be invoked. |
| scope =  null | any| The scope the callback should be executed in. |
| priority = 0 | number| A numeric value describing the priority of the handler. Handlerswith higher priority will be executed earlier. |

#### Returns: void

### toString(): string
Print the version number.  
* Defined in [td/Application.ts:479](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Application.ts#L479)

#### Returns: string


Generated using [TypeDoc](http://typedoc.io)
