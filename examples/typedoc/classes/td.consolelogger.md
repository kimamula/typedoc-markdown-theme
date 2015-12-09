# Class ConsoleLogger
A logger that outputs all messages to the console.

### Extends
* [Logger](td.logger.md)

## Index

### Properties
* [errorCount](td.consolelogger.md#errorcount)

### Methods
* [diagnostic](td.consolelogger.md#diagnostic)
* [diagnostics](td.consolelogger.md#diagnostics)
* [error](td.consolelogger.md#error)
* [hasErrors](td.consolelogger.md#haserrors)
* [log](td.consolelogger.md#log)
* [resetErrors](td.consolelogger.md#reseterrors)
* [success](td.consolelogger.md#success)
* [verbose](td.consolelogger.md#verbose)
* [warn](td.consolelogger.md#warn)
* [write](td.consolelogger.md#write)
* [writeln](td.consolelogger.md#writeln)

## Properties

### errorCount: number
How many error messages have been logged?
* Inherited from [Logger](td.logger.md).[errorCount](td.logger.md#errorcount)
* Defined in [td/Logger.ts:32](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L32)


## Methods

### diagnostic(diagnostic: [Diagnostic](../interfaces/ts.diagnostic.md)): void
Print the given TypeScript log message.  
* Inherited from [Logger](td.logger.md).[diagnostic](td.logger.md#diagnostic)
* Defined in [td/Logger.ts:149](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L149)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| diagnostic | [Diagnostic](../interfaces/ts.diagnostic.md)| The TypeScript message that should be logged. |

#### Returns: void

### diagnostics(diagnostics: [Diagnostic](../interfaces/ts.diagnostic.md)[]): void
Print the given TypeScript log messages.  
* Inherited from [Logger](td.logger.md).[diagnostics](td.logger.md#diagnostics)
* Defined in [td/Logger.ts:137](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L137)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| diagnostics | [Diagnostic](../interfaces/ts.diagnostic.md)[]| The TypeScript messages that should be logged. |

#### Returns: void

### error(text: string, ...args: string[]): void
Log the given error.  
* Inherited from [Logger](td.logger.md).[error](td.logger.md#error)
* Defined in [td/Logger.ts:113](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L113)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The error that should be logged. |
| ...args | string[]| The arguments that should be printed into the given error. |

#### Returns: void

### hasErrors(): boolean
Has an error been raised through the log method?  
* Inherited from [Logger](td.logger.md).[hasErrors](td.logger.md#haserrors)
* Defined in [td/Logger.ts:39](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L39)

#### Returns: boolean

### log(message: string, level =  LogLevel.Info: [LogLevel](../enums/td.loglevel.md), newLine?: boolean): void
Print a log message.  
* Overwrites [Logger](td.logger.md).[log](td.logger.md#log)
* Defined in [td/Logger.ts:186](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L186)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| message | string| The message itself. |
| level =  LogLevel.Info | [LogLevel](../enums/td.loglevel.md)| The urgency of the log message. |
| newLine? | boolean| Should the logger print a trailing whitespace? |

#### Returns: void

### resetErrors(): void
Reset the error counter.  
* Inherited from [Logger](td.logger.md).[resetErrors](td.logger.md#reseterrors)
* Defined in [td/Logger.ts:47](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L47)

#### Returns: void

### success(text: string, ...args: string[]): void
Log the given success message.  
* Inherited from [Logger](td.logger.md).[success](td.logger.md#success)
* Defined in [td/Logger.ts:80](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L80)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The message that should be logged. |
| ...args | string[]| The arguments that should be printed into the given message. |

#### Returns: void

### verbose(text: string, ...args: string[]): void
Log the given verbose message.  
* Inherited from [Logger](td.logger.md).[verbose](td.logger.md#verbose)
* Defined in [td/Logger.ts:91](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L91)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The message that should be logged. |
| ...args | string[]| The arguments that should be printed into the given message. |

#### Returns: void

### warn(text: string, ...args: string[]): void
Log the given warning.  
* Inherited from [Logger](td.logger.md).[warn](td.logger.md#warn)
* Defined in [td/Logger.ts:102](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L102)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The warning that should be logged. |
| ...args | string[]| The arguments that should be printed into the given warning. |

#### Returns: void

### write(text: string, ...args: string[]): void
Log the given message.  
* Inherited from [Logger](td.logger.md).[write](td.logger.md#write)
* Defined in [td/Logger.ts:58](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L58)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The message that should be logged. |
| ...args | string[]| The arguments that should be printed into the given message. |

#### Returns: void

### writeln(text: string, ...args: string[]): void
Log the given message with a trailing whitespace.  
* Inherited from [Logger](td.logger.md).[writeln](td.logger.md#writeln)
* Defined in [td/Logger.ts:69](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Logger.ts#L69)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The message that should be logged. |
| ...args | string[]| The arguments that should be printed into the given message. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
