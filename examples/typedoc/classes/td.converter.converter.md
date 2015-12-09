# Class Converter
Compiles source files using TypeScript and converts compiler symbols to reflections.

### Extends
* [PluginHost](td.pluginhost.md)<[ConverterPlugin](td.converter.converterplugin.md)>

### Implements
* [IParameterProvider](../interfaces/td.iparameterprovider.md)
* [CompilerHost](../interfaces/ts.compilerhost.md)

## Index

### Constructors
* [constructor](td.converter.converter.md#constructor)

### Events
* [EVENT_BEGIN](td.converter.converter.md#event_begin)
* [EVENT_CREATE_DECLARATION](td.converter.converter.md#event_create_declaration)
* [EVENT_CREATE_PARAMETER](td.converter.converter.md#event_create_parameter)
* [EVENT_CREATE_SIGNATURE](td.converter.converter.md#event_create_signature)
* [EVENT_CREATE_TYPE_PARAMETER](td.converter.converter.md#event_create_type_parameter)
* [EVENT_END](td.converter.converter.md#event_end)
* [EVENT_FILE_BEGIN](td.converter.converter.md#event_file_begin)
* [EVENT_FUNCTION_IMPLEMENTATION](td.converter.converter.md#event_function_implementation)
* [EVENT_RESOLVE](td.converter.converter.md#event_resolve)
* [EVENT_RESOLVE_BEGIN](td.converter.converter.md#event_resolve_begin)
* [EVENT_RESOLVE_END](td.converter.converter.md#event_resolve_end)

### Properties
* [application](td.converter.converter.md#application)
* [currentDirectory](td.converter.converter.md#currentdirectory)
* [plugins](td.converter.converter.md#plugins)
* [ERROR_UNSUPPORTED_FILE_ENCODING](td.converter.converter.md#error_unsupported_file_encoding)
* [PLUGINS](td.converter.converter.md#plugins-1)

### Methods
* [addPlugin](td.converter.converter.md#addplugin)
* [compile](td.converter.converter.md#compile)
* [convert](td.converter.converter.md#convert)
* [dispatch](td.converter.converter.md#dispatch)
* [fileExists](td.converter.converter.md#fileexists)
* [getCanonicalFileName](td.converter.converter.md#getcanonicalfilename)
* [getCurrentDirectory](td.converter.converter.md#getcurrentdirectory)
* [getDefaultLib](td.converter.converter.md#getdefaultlib)
* [getDefaultLibFileName](td.converter.converter.md#getdefaultlibfilename)
* [getNewLine](td.converter.converter.md#getnewline)
* [getParameters](td.converter.converter.md#getparameters)
* [getPlugin](td.converter.converter.md#getplugin)
* [getSourceFile](td.converter.converter.md#getsourcefile)
* [off](td.converter.converter.md#off)
* [on](td.converter.converter.md#on)
* [readFile](td.converter.converter.md#readfile)
* [removeAllPlugins](td.converter.converter.md#removeallplugins)
* [removePlugin](td.converter.converter.md#removeplugin)
* [resolve](td.converter.converter.md#resolve)
* [useCaseSensitiveFileNames](td.converter.converter.md#usecasesensitivefilenames)
* [writeFile](td.converter.converter.md#writefile)
* [loadPlugins](td.converter.converter.md#loadplugins)
* [registerPlugin](td.converter.converter.md#registerplugin)

## Constructors

### new Converter(application: [IApplication](../interfaces/td.iapplication.md)): [Converter](td.converter.converter.md)
Create a new Converter instance.  
* Defined in [td/converter/Converter.ts:221](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L221)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| application | [IApplication](../interfaces/td.iapplication.md)| The application instance this converter relies on. The applicationmust expose the settings that should be used and serves as a global logging endpoint. |

#### Returns: [Converter](td.converter.converter.md)

## Events

### Static EVENT_BEGIN: string
Triggered when the converter begins converting a project.The listener should implement [[IConverterCallback]].
* Defined in [td/converter/Converter.ts:141](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L141)


### Static EVENT_CREATE_DECLARATION: string
Triggered when the converter has created a declaration reflection.The listener should implement [[IConverterNodeCallback]].
* Defined in [td/converter/Converter.ts:167](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L167)


### Static EVENT_CREATE_PARAMETER: string
Triggered when the converter has created a parameter reflection.The listener should implement [[IConverterNodeCallback]].
* Defined in [td/converter/Converter.ts:181](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L181)


### Static EVENT_CREATE_SIGNATURE: string
Triggered when the converter has created a signature reflection.The listener should implement [[IConverterNodeCallback]].
* Defined in [td/converter/Converter.ts:174](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L174)


### Static EVENT_CREATE_TYPE_PARAMETER: string
Triggered when the converter has created a type parameter reflection.The listener should implement [[IConverterNodeCallback]].
* Defined in [td/converter/Converter.ts:188](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L188)


### Static EVENT_END: string
Triggered when the converter has finished converting a project.The listener should implement [[IConverterCallback]].
* Defined in [td/converter/Converter.ts:148](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L148)


### Static EVENT_FILE_BEGIN: string
Triggered when the converter begins converting a source file.The listener should implement [[IConverterNodeCallback]].
* Defined in [td/converter/Converter.ts:160](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L160)


### Static EVENT_FUNCTION_IMPLEMENTATION: string
Triggered when the converter has found a function implementation.The listener should implement [[IConverterNodeCallback]].
* Defined in [td/converter/Converter.ts:195](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L195)


### Static EVENT_RESOLVE: string
Triggered when the converter resolves a reflection.The listener should implement [[IConverterResolveCallback]].
* Defined in [td/converter/Converter.ts:214](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L214)


### Static EVENT_RESOLVE_BEGIN: string
Triggered when the converter begins resolving a project.The listener should implement [[IConverterCallback]].
* Defined in [td/converter/Converter.ts:207](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L207)


### Static EVENT_RESOLVE_END: string
Triggered when the converter has finished resolving a project.The listener should implement [[IConverterCallback]].
* Defined in [td/converter/Converter.ts:221](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L221)


## Properties

### application: [IApplication](../interfaces/td.iapplication.md)
The host application of this converter instance.
* Defined in [td/converter/Converter.ts:119](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L119)


### Private currentDirectory: string
The full path of the current directory. Result cache of [[getCurrentDirectory]].
* Defined in [td/converter/Converter.ts:124](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L124)


### plugins: [name: string]: [ConverterPlugin](td.converter.converterplugin.md)
List of all plugins that are attached to this host.
* Inherited from [PluginHost](td.pluginhost.md).[plugins](td.pluginhost.md#plugins)
* Defined in [td/PluginHost.ts:17](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L17)


### Static ERROR_UNSUPPORTED_FILE_ENCODING: number
Return code of ts.sys.readFile when the file encoding is unsupported.
* Defined in [td/converter/Converter.ts:129](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L129)


### Static PLUGINS: [name: string]: [IPluginClass](../interfaces/td.ipluginclass.md)<[IPluginInterface](../interfaces/td.iplugininterface.md)>

* Inherited from [PluginHost](td.pluginhost.md).[PLUGINS](td.pluginhost.md#plugins-1)
* Defined in [td/PluginHost.ts:19](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L19)


## Methods

### addPlugin(name: string, pluginClass: [IPluginClass](../interfaces/td.ipluginclass.md)<[ConverterPlugin](td.converter.converterplugin.md)>): [ConverterPlugin](td.converter.converterplugin.md)
  
* Inherited from [PluginHost](td.pluginhost.md).[addPlugin](td.pluginhost.md#addplugin)
* Defined in [td/PluginHost.ts:50](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L50)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |
| pluginClass | [IPluginClass](../interfaces/td.ipluginclass.md)<[ConverterPlugin](td.converter.converterplugin.md)>|  |

#### Returns: [ConverterPlugin](td.converter.converterplugin.md)

### Private compile(context: [Context](td.converter.context.md)): [Diagnostic](../interfaces/ts.diagnostic.md)[]
Compile the files within the given context and convert the compiler symbols to reflections.  
* Defined in [td/converter/Converter.ts:322](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L322)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |

#### Returns: [Diagnostic](../interfaces/ts.diagnostic.md)[]
An array containing all errors generated by the TypeScript compiler.


### convert(fileNames: string[]): [IConverterResult](../interfaces/td.converter.iconverterresult.md)
Compile the given source files and create a project reflection for them.  
* Defined in [td/converter/Converter.ts:281](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L281)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileNames | string[]| Array of the file names that should be compiled. |

#### Returns: [IConverterResult](../interfaces/td.converter.iconverterresult.md)

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

### fileExists(fileName: string): boolean
Check whether the given file exists.Implementation of ts.CompilerHost.fileExists(fileName)  
* Implementation of [CompilerHost](../interfaces/ts.compilerhost.md).[fileExists](../interfaces/ts.compilerhost.md#fileexists)
* Defined in [td/converter/Converter.ts:455](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L455)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |

#### Returns: boolean



### getCanonicalFileName(fileName: string): string
Return the canonical file name of the given file.Implementation of ts.CompilerHost.getCanonicalFileName()  
* Implementation of [CompilerHost](../interfaces/ts.compilerhost.md).[getCanonicalFileName](../interfaces/ts.compilerhost.md#getcanonicalfilename)
* Defined in [td/converter/Converter.ts:481](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L481)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string| The file name whose canonical variant should be resolved. |

#### Returns: string
The canonical file name of the given file.


### getCurrentDirectory(): string
Return the full path of the current directory.Implementation of ts.CompilerHost.getCurrentDirectory()  
* Implementation of [CompilerHost](../interfaces/ts.compilerhost.md).[getCurrentDirectory](../interfaces/ts.compilerhost.md#getcurrentdirectory)
* Defined in [td/converter/Converter.ts:430](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L430)

#### Returns: string
The full path of the current directory.


### getDefaultLib(): string
Return the basename of the default library that should be used.  
* Defined in [td/converter/Converter.ts:373](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L373)

#### Returns: string
The basename of the default library.


### getDefaultLibFileName(options: [CompilerOptions](../interfaces/ts.compileroptions.md)): string
Return the full path of the default library that should be used.Implementation of ts.CompilerHost.getDefaultLibFilename()  
* Implementation of [CompilerHost](../interfaces/ts.compilerhost.md).[getDefaultLibFileName](../interfaces/ts.compilerhost.md#getdefaultlibfilename)
* Defined in [td/converter/Converter.ts:416](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L416)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [CompilerOptions](../interfaces/ts.compileroptions.md)|  |

#### Returns: string
The full path of the default library.


### getNewLine(): string
Return the new line char sequence of the current platform.Implementation of ts.CompilerHost.getNewLine()  
* Implementation of [CompilerHost](../interfaces/ts.compilerhost.md).[getNewLine](../interfaces/ts.compilerhost.md#getnewline)
* Defined in [td/converter/Converter.ts:493](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L493)

#### Returns: string
The new line char sequence of the current platform.


### getParameters(): [IParameter](../interfaces/td.iparameter.md)[]
Return a list of parameters introduced by this component.  
* Implementation of [IParameterProvider](../interfaces/td.iparameterprovider.md).[getParameters](../interfaces/td.iparameterprovider.md#getparameters)
* Overwrites [PluginHost](td.pluginhost.md).[getParameters](td.pluginhost.md#getparameters)
* Defined in [td/converter/Converter.ts:244](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L244)

#### Returns: [IParameter](../interfaces/td.iparameter.md)[]
A list of parameter definitions introduced by this component.


### getPlugin(name: string): [ConverterPlugin](td.converter.converterplugin.md)
Retrieve a plugin instance.  
* Inherited from [PluginHost](td.pluginhost.md).[getPlugin](td.pluginhost.md#getplugin)
* Defined in [td/PluginHost.ts:41](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L41)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: [ConverterPlugin](td.converter.converterplugin.md)
The instance of the plugin or NULL if no plugin with the given class is attached.


### getSourceFile(filename: string, languageVersion: [ScriptTarget](../enums/ts.scripttarget.md), onError?: (message: string)=> void): [SourceFile](../interfaces/ts.sourcefile.md)
Return an instance of ts.SourceFile representing the given file.Implementation of ts.CompilerHost.getSourceFile()  
* Defined in [td/converter/Converter.ts:395](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L395)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string| The path and name of the file that should be loaded. |
| languageVersion | [ScriptTarget](../enums/ts.scripttarget.md)| The script target the file should be interpreted with. |
| onError? | (message: string)=> void| A callback that will be invoked if an error occurs. |

#### Returns: [SourceFile](../interfaces/ts.sourcefile.md)
An instance of ts.SourceFile representing the given file.


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

### readFile(fileName: string): string
Return the contents of the given file.Implementation of ts.CompilerHost.readFile(fileName)  
* Implementation of [CompilerHost](../interfaces/ts.compilerhost.md).[readFile](../interfaces/ts.compilerhost.md#readfile)
* Defined in [td/converter/Converter.ts:468](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L468)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |

#### Returns: string



### removeAllPlugins(): void
  
* Inherited from [PluginHost](td.pluginhost.md).[removeAllPlugins](td.pluginhost.md#removeallplugins)
* Defined in [td/PluginHost.ts:71](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L71)

#### Returns: void

### removePlugin(name: string): boolean
  
* Inherited from [PluginHost](td.pluginhost.md).[removePlugin](td.pluginhost.md#removeplugin)
* Defined in [td/PluginHost.ts:60](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L60)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: boolean

### Private resolve(context: [Context](td.converter.context.md)): [ProjectReflection](td.models.projectreflection.md)
Resolve the project within the given context.  
* Defined in [td/converter/Converter.ts:350](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L350)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |

#### Returns: [ProjectReflection](td.models.projectreflection.md)
The final project reflection.


### useCaseSensitiveFileNames(): boolean
Return whether file names are case sensitive on the current platform or not.Implementation of ts.CompilerHost.useCaseSensitiveFileNames()  
* Implementation of [CompilerHost](../interfaces/ts.compilerhost.md).[useCaseSensitiveFileNames](../interfaces/ts.compilerhost.md#usecasesensitivefilenames)
* Defined in [td/converter/Converter.ts:442](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L442)

#### Returns: boolean
TRUE if file names are case sensitive on the current platform, FALSE otherwise.


### writeFile(fileName: string, data: string, writeByteOrderMark: boolean, onError?: (message: string)=> void): void
Write a compiled javascript file to disc.As TypeDoc will not emit compiled javascript files this is a null operation.Implementation of ts.CompilerHost.writeFile()  
* Defined in [td/converter/Converter.ts:510](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L510)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string| The name of the file that should be written. |
| data | string| The contents of the file. |
| writeByteOrderMark | boolean| Whether the UTF-8 BOM should be written or not. |
| onError? | (message: string)=> void| A callback that will be invoked if an error occurs. |

#### Returns: void

### Static loadPlugins<T>(instance: [PluginHost](td.pluginhost.md)<T>): void
  
* Inherited from [PluginHost](td.pluginhost.md).[loadPlugins](td.pluginhost.md#loadplugins)
* Defined in [td/PluginHost.ts:87](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L87)


#### Type parameters

* #### T [IPluginInterface](../interfaces/td.iplugininterface.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| instance | [PluginHost](td.pluginhost.md)<T>|  |

#### Returns: void

### Static registerPlugin<T>(name: string, pluginClass: [IPluginClass](../interfaces/td.ipluginclass.md)<T>): void
  
* Inherited from [PluginHost](td.pluginhost.md).[registerPlugin](td.pluginhost.md#registerplugin)
* Defined in [td/PluginHost.ts:81](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L81)


#### Type parameters

* #### T [IPluginInterface](../interfaces/td.iplugininterface.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |
| pluginClass | [IPluginClass](../interfaces/td.ipluginclass.md)<T>|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
