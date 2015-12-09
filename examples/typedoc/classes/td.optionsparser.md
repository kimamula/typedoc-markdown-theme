# Class OptionsParser
A parser that can read command line arguments, option files and javascript objects.

## Index

### Constructors
* [constructor](td.optionsparser.md#constructor)

### Properties
* [application](td.optionsparser.md#application)
* [arguments](td.optionsparser.md#arguments)
* [inputFiles](td.optionsparser.md#inputfiles)
* [shortNames](td.optionsparser.md#shortnames)
* [IGNORED_TS_PARAMS](td.optionsparser.md#ignored_ts_params)
* [OPTIONS_KEY](td.optionsparser.md#options_key)

### Methods
* [addCommandLineParameters](td.optionsparser.md#addcommandlineparameters)
* [addCompilerParameters](td.optionsparser.md#addcompilerparameters)
* [addDefaultParameters](td.optionsparser.md#adddefaultparameters)
* [addInputFile](td.optionsparser.md#addinputfile)
* [addParameter](td.optionsparser.md#addparameter)
* [getParameter](td.optionsparser.md#getparameter)
* [getParameterHelp](td.optionsparser.md#getparameterhelp)
* [getParametersByScope](td.optionsparser.md#getparametersbyscope)
* [loadOptionFile](td.optionsparser.md#loadoptionfile)
* [loadOptionFileFromArguments](td.optionsparser.md#loadoptionfilefromarguments)
* [loadOptionFileFromObject](td.optionsparser.md#loadoptionfilefromobject)
* [parseArguments](td.optionsparser.md#parsearguments)
* [parseObject](td.optionsparser.md#parseobject)
* [parseResponseFile](td.optionsparser.md#parseresponsefile)
* [setOption](td.optionsparser.md#setoption)
* [toString](td.optionsparser.md#tostring)
* [convert](td.optionsparser.md#convert)
* [createCompilerOptions](td.optionsparser.md#createcompileroptions)
* [createOptions](td.optionsparser.md#createoptions)

## Constructors

### new OptionsParser(application: [IApplication](../interfaces/td.iapplication.md)): [OptionsParser](td.optionsparser.md)
Create a new OptionsParser instance.  
* Defined in [td/Options.ts:174](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L174)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| application | [IApplication](../interfaces/td.iapplication.md)| The application that stores the parsed settings |

#### Returns: [OptionsParser](td.optionsparser.md)

## Properties

### Private application: [IApplication](../interfaces/td.iapplication.md)
The application that stores the parsed settings.
* Defined in [td/Options.ts:150](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L150)


### Private arguments: [Map](../interfaces/ts.map.md)<[IParameter](../interfaces/td.iparameter.md)>
Map of parameter names and their definitions.
* Defined in [td/Options.ts:155](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L155)


### inputFiles: string[]
The list of discovered input files.
* Defined in [td/Options.ts:145](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L145)


### Private shortNames: [Map](../interfaces/ts.map.md)<string>
Map of parameter short names and their full equivalent.
* Defined in [td/Options.ts:160](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L160)


### Static Private IGNORED_TS_PARAMS: string[]
A list of all TypeScript parameters that should be ignored.
* Defined in [td/Options.ts:165](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L165)


### Static Private OPTIONS_KEY: string
The name of the parameter that specifies the options file.
* Defined in [td/Options.ts:174](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L174)


## Methods

### addCommandLineParameters(): void
Register the command line parameters.  
* Defined in [td/Options.ts:233](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L233)

#### Returns: void

### Private addCompilerParameters(): void
Register all TypeScript related properties.  
* Defined in [td/Options.ts:313](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L313)

#### Returns: void

### Private addDefaultParameters(): void
Register the default parameters.  
* Defined in [td/Options.ts:259](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L259)

#### Returns: void

### addInputFile(fileName: string): void
Add an input/source file.The input files will be used as source files for the compiler. All command linearguments without parameter will be interpreted as being input files.  
* Defined in [td/Options.ts:366](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L366)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string| The path and filename of the input file. |

#### Returns: void

### addParameter(parameters: [IParameter](../interfaces/td.iparameter.md)[]): anyaddParameter(...rest: [IParameter](../interfaces/td.iparameter.md)[]): any
Register one or multiple parameter definitions.  
* Defined in [td/Options.ts:194](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L194)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| parameters | [IParameter](../interfaces/td.iparameter.md)[]| One or multiple parameter definitions that should be registered. |

#### Returns: any
Register one or multiple parameter definitions.  
* Defined in [td/Options.ts:199](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L199)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...rest | [IParameter](../interfaces/td.iparameter.md)[]| One or multiple parameter definitions that should be registered. |

#### Returns: any

### getParameter(name: string): [IParameter](../interfaces/td.iparameter.md)
Retrieve a parameter by its name.  
* Defined in [td/Options.ts:377](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L377)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name of the parameter to look for. |

#### Returns: [IParameter](../interfaces/td.iparameter.md)
The parameter definition or NULL when not found.


### Private getParameterHelp(scope: [ParameterScope](../enums/td.parameterscope.md)): [IParameterHelp](../interfaces/td.iparameterhelp.md)
Prepare parameter information for the [[toString]] method.  
* Defined in [td/Options.ts:675](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L675)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| scope | [ParameterScope](../enums/td.parameterscope.md)| The scope of the parameters whose help should be returned. |

#### Returns: [IParameterHelp](../interfaces/td.iparameterhelp.md)
The columns and lines for the help of the requested parameters.


### getParametersByScope(scope: [ParameterScope](../enums/td.parameterscope.md)): [IParameter](../interfaces/td.iparameter.md)[]
Return all parameters within the given scope.  
* Defined in [td/Options.ts:398](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L398)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| scope | [ParameterScope](../enums/td.parameterscope.md)| The scope the parameter list should be filtered for. |

#### Returns: [IParameter](../interfaces/td.iparameter.md)[]
All parameters within the given scope


### loadOptionFile(optionFile: string, ignoreUnknownArgs?: boolean): boolean
Load the specified option file.  
* Defined in [td/Options.ts:515](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L515)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| optionFile | string| The absolute path and file name of the option file. |
| ignoreUnknownArgs? | boolean| Should unknown arguments be ignored? If so the parserwill simply skip all unknown arguments. |

#### Returns: boolean
TRUE on success, otherwise FALSE.


### loadOptionFileFromArguments(args?: string[], ignoreUnknownArgs?: boolean): boolean
Try to find and load an option file from command line arguments.An option file can either be specified using the command line argument ``--option`` or mustbe a file named ``typedoc.js`` within the current directory.  
* Defined in [td/Options.ts:461](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L461)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| args? | string[]| The list of arguments that should be parsed. When omitted thecurrent command line arguments will be used. |
| ignoreUnknownArgs? | boolean| Should unknown arguments be ignored? If so the parserwill simply skip all unknown arguments. |

#### Returns: boolean
TRUE on success, otherwise FALSE.


### loadOptionFileFromObject(obj: any, ignoreUnknownArgs?: boolean): boolean
Try to load an option file from a settings object.  
* Defined in [td/Options.ts:497](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L497)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| obj | any| The object whose properties should be applied. |
| ignoreUnknownArgs? | boolean| Should unknown arguments be ignored? If so the parserwill simply skip all unknown arguments. |

#### Returns: boolean
TRUE on success, otherwise FALSE.


### parseArguments(args?: string[], ignoreUnknownArgs?: boolean): boolean
Read and store the given list of arguments.  
* Defined in [td/Options.ts:587](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L587)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| args? | string[]| The list of arguments that should be parsed. When omitted thecurrent command line arguments will be used. |
| ignoreUnknownArgs? | boolean| Should unknown arguments be ignored? If so the parserwill simply skip all unknown arguments. |

#### Returns: boolean
TRUE on success, otherwise FALSE.


### parseObject(obj: any, ignoreUnknownArgs?: boolean): boolean
Apply the values of the given options object.  
* Defined in [td/Options.ts:555](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L555)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| obj | any| The object whose properties should be applied. |
| ignoreUnknownArgs? | boolean| Should unknown arguments be ignored? If so the parserwill simply skip all unknown arguments. |

#### Returns: boolean
TRUE on success, otherwise FALSE.


### parseResponseFile(filename: string, ignoreUnknownArgs?: boolean): boolean
Read the arguments stored in the given file.  
* Defined in [td/Options.ts:633](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L633)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string| The path and filename that should be parsed. |
| ignoreUnknownArgs? | boolean| Should unknown arguments be ignored? |

#### Returns: boolean
TRUE on success, otherwise FALSE.


### setOption(param: [IParameter](../interfaces/td.iparameter.md), value?: any): boolean
Set the option described by the given parameter description to the given value.  
* Defined in [td/Options.ts:419](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L419)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| param | [IParameter](../interfaces/td.iparameter.md)| The parameter description of the option to set. |
| value? | any| The target value of the option. |

#### Returns: boolean
TRUE on success, otherwise FALSE.


### toString(): string
Print some usage information.Taken from TypeScript (src/compiler/tsc.ts)  
* Defined in [td/Options.ts:715](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L715)

#### Returns: string

### Static convert(param: [IParameter](../interfaces/td.iparameter.md), value?: any): any
Convert the given value according to the type setting of the given parameter.  
* Defined in [td/Options.ts:754](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L754)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| param | [IParameter](../interfaces/td.iparameter.md)| The parameter definition. |
| value? | any| The value that should be converted. |

#### Returns: any
The converted value.


### Static createCompilerOptions(): [CompilerOptions](../interfaces/ts.compileroptions.md)
Create the compiler options populated with the default values.  
* Defined in [td/Options.ts:799](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L799)

#### Returns: [CompilerOptions](../interfaces/ts.compileroptions.md)
A compiler options object populated with default values.


### Static createOptions(): IOptions
Create an options object populated with the default values.  
* Defined in [td/Options.ts:787](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L787)

#### Returns: IOptions
An options object populated with default values.



Generated using [TypeDoc](http://typedoc.io)
