# Interface System


## Index

### Properties
* [args](ts.system.md#args)
* [newLine](ts.system.md#newline)
* [useCaseSensitiveFileNames](ts.system.md#usecasesensitivefilenames)

### Methods
* [createDirectory](ts.system.md#createdirectory)
* [directoryExists](ts.system.md#directoryexists)
* [exit](ts.system.md#exit)
* [fileExists](ts.system.md#fileexists)
* [getCurrentDirectory](ts.system.md#getcurrentdirectory)
* [getExecutingFilePath](ts.system.md#getexecutingfilepath)
* [getMemoryUsage](ts.system.md#getmemoryusage)
* [readDirectory](ts.system.md#readdirectory)
* [readFile](ts.system.md#readfile)
* [resolvePath](ts.system.md#resolvepath)
* [watchFile](ts.system.md#watchfile)
* [write](ts.system.md#write)
* [writeFile](ts.system.md#writefile)

## Properties

### args: string[]

* Defined in [lib/typescript/tsc.d.ts:1804](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1804)


### newLine: string

* Defined in [lib/typescript/tsc.d.ts:1805](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1805)


### useCaseSensitiveFileNames: boolean

* Defined in [lib/typescript/tsc.d.ts:1806](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1806)


## Methods

### createDirectory(path: string): void
  
* Defined in [lib/typescript/tsc.d.ts:1814](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1814)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: void

### directoryExists(path: string): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1813](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1813)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: boolean

### exit(exitCode?: number): void
  
* Defined in [lib/typescript/tsc.d.ts:1819](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1819)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| exitCode? | number|  |

#### Returns: void

### fileExists(path: string): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1812](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1812)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: boolean

### getCurrentDirectory(): string
  
* Defined in [lib/typescript/tsc.d.ts:1816](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1816)

#### Returns: string

### getExecutingFilePath(): string
  
* Defined in [lib/typescript/tsc.d.ts:1815](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1815)

#### Returns: string

### Optional getMemoryUsage(): number
  
* Defined in [lib/typescript/tsc.d.ts:1818](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1818)

#### Returns: number

### readDirectory(path: string, extension?: string, exclude?: string[]): string[]
  
* Defined in [lib/typescript/tsc.d.ts:1817](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1817)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| extension? | string|  |
| exclude? | string[]|  |

#### Returns: string[]

### readFile(path: string, encoding?: string): string
  
* Defined in [lib/typescript/tsc.d.ts:1808](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1808)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| encoding? | string|  |

#### Returns: string

### resolvePath(path: string): string
  
* Defined in [lib/typescript/tsc.d.ts:1811](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1811)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: string

### Optional watchFile(path: string, callback: (path: string)=> void): [FileWatcher](ts.filewatcher.md)
  
* Defined in [lib/typescript/tsc.d.ts:1810](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1810)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback | (path: string)=> void|  |

#### Returns: [FileWatcher](ts.filewatcher.md)

### write(s: string): void
  
* Defined in [lib/typescript/tsc.d.ts:1807](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1807)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| s | string|  |

#### Returns: void

### writeFile(path: string, data: string, writeByteOrderMark?: boolean): void
  
* Defined in [lib/typescript/tsc.d.ts:1809](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1809)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| data | string|  |
| writeByteOrderMark? | boolean|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
