# Module td
The TypeDoc main module and namespace.The [[Application]] class holds the core logic of the cli application. All code relatedto resolving reflections is stored in [[TypeDoc.Factories]], the actual data models can be foundin [[TypeDoc.Models]] and the final rendering is defined in [[TypeDoc.Output]].

## Index

### Modules
* [converter](td.converter.md)
* [models](td.models.md)
* [output](td.output.md)

### Enumerations
* [LogLevel](../enums/td.loglevel.md)
* [LoggerType](../enums/td.loggertype.md)
* [ModuleKind](../enums/td.modulekind.md)
* [ParameterHint](../enums/td.parameterhint.md)
* [ParameterScope](../enums/td.parameterscope.md)
* [ParameterType](../enums/td.parametertype.md)
* [ScriptTarget](../enums/td.scripttarget.md)
* [SourceFileMode](../enums/td.sourcefilemode.md)

### Classes
* [Application](../classes/td.application.md)
* [CallbackLogger](../classes/td.callbacklogger.md)
* [ConsoleLogger](../classes/td.consolelogger.md)
* [Event](../classes/td.event.md)
* [EventDispatcher](../classes/td.eventdispatcher.md)
* [Logger](../classes/td.logger.md)
* [OptionsParser](../classes/td.optionsparser.md)
* [PluginHost](../classes/td.pluginhost.md)

### Interfaces
* [IApplication](../interfaces/td.iapplication.md)
* [IListener](../interfaces/td.ilistener.md)
* [IOptions](../interfaces/td.ioptions.md)
* [IParameter](../interfaces/td.iparameter.md)
* [IParameterHelp](../interfaces/td.iparameterhelp.md)
* [IParameterProvider](../interfaces/td.iparameterprovider.md)
* [IPluginClass](../interfaces/td.ipluginclass.md)
* [IPluginInterface](../interfaces/td.iplugininterface.md)

### Variables
* [FS](td.md#fs)
* [Handlebars](td.md#handlebars)
* [HighlightJS](td.md#highlightjs)
* [Marked](td.md#marked)
* [Minimatch](td.md#minimatch)
* [Path](td.md#path)
* [ProgressBar](td.md#progressbar)
* [ShellJS](td.md#shelljs)
* [Util](td.md#util)
* [VM](td.md#vm)
* [existingDirectories](td.md#existingdirectories)
* [tsPath](td.md#tspath)

### Functions
* [directoryExists](td.md#directoryexists)
* [ensureDirectoriesExist](td.md#ensuredirectoriesexist)
* [normalizePath](td.md#normalizepath)
* [writeFile](td.md#writefile)

## Variables

### FS: any

* Defined in [@init.ts:20](https://github.com/kimamula/typedoc/blob/HEAD/src/@init.ts#L20)


### Handlebars: [HandlebarsStatic](../interfaces/handlebarsstatic.md)

* Defined in [@init.ts:16](https://github.com/kimamula/typedoc/blob/HEAD/src/@init.ts#L16)


### HighlightJS: any

* Defined in [@init.ts:18](https://github.com/kimamula/typedoc/blob/HEAD/src/@init.ts#L18)


### Marked: [MarkedStatic](../interfaces/markedstatic.md)

* Defined in [@init.ts:17](https://github.com/kimamula/typedoc/blob/HEAD/src/@init.ts#L17)


### Minimatch: any

* Defined in [@init.ts:19](https://github.com/kimamula/typedoc/blob/HEAD/src/@init.ts#L19)


### Path: any

* Defined in [@init.ts:10](https://github.com/kimamula/typedoc/blob/HEAD/src/@init.ts#L10)


### ProgressBar: any

* Defined in [@init.ts:22](https://github.com/kimamula/typedoc/blob/HEAD/src/@init.ts#L22)


### ShellJS: any

* Defined in [@init.ts:21](https://github.com/kimamula/typedoc/blob/HEAD/src/@init.ts#L21)


### Util: any

* Defined in [@init.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/@init.ts#L8)


### VM: any

* Defined in [@init.ts:9](https://github.com/kimamula/typedoc/blob/HEAD/src/@init.ts#L9)


### existingDirectories: [Map](../interfaces/ts.map.md)<boolean>
List of known existent directories. Used to speed up [[directoryExists]].
* Defined in [td/Utils.ts:6](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Utils.ts#L6)


### tsPath: string

* Defined in [@init.ts:29](https://github.com/kimamula/typedoc/blob/HEAD/src/@init.ts#L29)


## Functions

### directoryExists(directoryPath: string): boolean
Test whether the given directory exists.  
* Defined in [td/Utils.ts:26](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Utils.ts#L26)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| directoryPath | string| The directory that should be tested. |

#### Returns: boolean
TRUE if the given directory exists, FALSE otherwise.


### ensureDirectoriesExist(directoryPath: string): void
Make sure that the given directory exists.  
* Defined in [td/Utils.ts:45](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Utils.ts#L45)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| directoryPath | string| The directory that should be validated. |

#### Returns: void

### normalizePath(path: string): string
Normalize the given path.  
* Defined in [td/Utils.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Utils.ts#L15)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string| The path that should be normalized. |

#### Returns: string
The normalized path.


### writeFile(fileName: string, data: string, writeByteOrderMark: boolean, onError?: (message: string)=> void): void
Write a file to disc.If the containing directory does not exist it will be created.  
* Defined in [td/Utils.ts:64](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Utils.ts#L64)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string| The name of the file that should be written. |
| data | string| The contents of the file. |
| writeByteOrderMark | boolean| Whether the UTF-8 BOM should be written or not. |
| onError? | (message: string)=> void| A callback that will be invoked if an error occurs. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
