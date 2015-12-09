# Class Logger
A logger that will not produce any output.This logger also serves as the ase calls of other loggers as it implementsall the required utility functions.

## Index

### Properties
* [errorCount](td.logger.md#errorcount)

### Methods
* [diagnostic](td.logger.md#diagnostic)
* [diagnostics](td.logger.md#diagnostics)
* [error](td.logger.md#error)
* [hasErrors](td.logger.md#haserrors)
* [log](td.logger.md#log)
* [resetErrors](td.logger.md#reseterrors)
* [success](td.logger.md#success)
* [verbose](td.logger.md#verbose)
* [warn](td.logger.md#warn)
* [write](td.logger.md#write)
* [writeln](td.logger.md#writeln)

## Properties

### errorCount: number
How many error messages have been logged?
* Defined in [td/Logger.ts:32](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L32)


## Methods

### diagnostic(diagnostic: [Diagnostic](../interfaces/ts.diagnostic.md)): void
Print the given TypeScript log message.  
* Defined in [td/Logger.ts:149](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L149)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| diagnostic | [Diagnostic](../interfaces/ts.diagnostic.md)| The TypeScript message that should be logged. |

#### Returns: void

### diagnostics(diagnostics: [Diagnostic](../interfaces/ts.diagnostic.md)[]): void
Print the given TypeScript log messages.  
* Defined in [td/Logger.ts:137](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L137)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| diagnostics | [Diagnostic](../interfaces/ts.diagnostic.md)[]| The TypeScript messages that should be logged. |

#### Returns: void

### error(text: string, ...args: string[]): void
Log the given error.  
* Defined in [td/Logger.ts:113](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L113)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The error that should be logged. |
| ...args | string[]| The arguments that should be printed into the given error. |

#### Returns: void

### hasErrors(): boolean
Has an error been raised through the log method?  
* Defined in [td/Logger.ts:39](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L39)

#### Returns: boolean

### log(message: string, level =  LogLevel.Info: [LogLevel](../enums/td.loglevel.md), newLine?: boolean): void
Print a log message.  
* Defined in [td/Logger.ts:125](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L125)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| message | string| The message itself. |
| level =  LogLevel.Info | [LogLevel](../enums/td.loglevel.md)| The urgency of the log message. |
| newLine? | boolean| Should the logger print a trailing whitespace? |

#### Returns: void

### resetErrors(): void
Reset the error counter.  
* Defined in [td/Logger.ts:47](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L47)

#### Returns: void

### success(text: string, ...args: string[]): void
Log the given success message.  
* Defined in [td/Logger.ts:80](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L80)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The message that should be logged. |
| ...args | string[]| The arguments that should be printed into the given message. |

#### Returns: void

### verbose(text: string, ...args: string[]): void
Log the given verbose message.  
* Defined in [td/Logger.ts:91](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L91)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The message that should be logged. |
| ...args | string[]| The arguments that should be printed into the given message. |

#### Returns: void

### warn(text: string, ...args: string[]): void
Log the given warning.  
* Defined in [td/Logger.ts:102](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L102)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The warning that should be logged. |
| ...args | string[]| The arguments that should be printed into the given warning. |

#### Returns: void

### write(text: string, ...args: string[]): void
Log the given message.  
* Defined in [td/Logger.ts:58](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L58)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The message that should be logged. |
| ...args | string[]| The arguments that should be printed into the given message. |

#### Returns: void

### writeln(text: string, ...args: string[]): void
Log the given message with a trailing whitespace.  
* Defined in [td/Logger.ts:69](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L69)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The message that should be logged. |
| ...args | string[]| The arguments that should be printed into the given message. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
