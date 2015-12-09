# Interface CompilerHost


### Extends
* [ModuleResolutionHost](ts.moduleresolutionhost.md)

### Implemented by
* [Converter](../classes/td.converter.converter.md)

## Index

### Properties
* [writeFile](ts.compilerhost.md#writefile)

### Methods
* [fileExists](ts.compilerhost.md#fileexists)
* [getCancellationToken](ts.compilerhost.md#getcancellationtoken)
* [getCanonicalFileName](ts.compilerhost.md#getcanonicalfilename)
* [getCurrentDirectory](ts.compilerhost.md#getcurrentdirectory)
* [getDefaultLibFileName](ts.compilerhost.md#getdefaultlibfilename)
* [getNewLine](ts.compilerhost.md#getnewline)
* [getSourceFile](ts.compilerhost.md#getsourcefile)
* [readFile](ts.compilerhost.md#readfile)
* [resolveModuleNames](ts.compilerhost.md#resolvemodulenames)
* [useCaseSensitiveFileNames](ts.compilerhost.md#usecasesensitivefilenames)

## Properties

### writeFile: [WriteFileCallback](ts.writefilecallback.md)

* Defined in [lib/typescript/tsc.d.ts:1693](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1693)


## Methods

### fileExists(fileName: string): boolean
  
* Inherited from [ModuleResolutionHost](ts.moduleresolutionhost.md).[fileExists](ts.moduleresolutionhost.md#fileexists)
* Defined in [lib/typescript/tsc.d.ts:1681](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1681)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |

#### Returns: boolean

### Optional getCancellationToken(): [CancellationToken](ts.cancellationtoken.md)
  
* Defined in [lib/typescript/tsc.d.ts:1691](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1691)

#### Returns: [CancellationToken](ts.cancellationtoken.md)

### getCanonicalFileName(fileName: string): string
  
* Defined in [lib/typescript/tsc.d.ts:1695](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1695)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |

#### Returns: string

### getCurrentDirectory(): string
  
* Defined in [lib/typescript/tsc.d.ts:1694](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1694)

#### Returns: string

### getDefaultLibFileName(options: [CompilerOptions](ts.compileroptions.md)): string
  
* Defined in [lib/typescript/tsc.d.ts:1692](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1692)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [CompilerOptions](ts.compileroptions.md)|  |

#### Returns: string

### getNewLine(): string
  
* Defined in [lib/typescript/tsc.d.ts:1697](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1697)

#### Returns: string

### getSourceFile(fileName: string, languageVersion: [ScriptTarget](../enums/ts.scripttarget.md), onError?: (message: string)=> void): [SourceFile](ts.sourcefile.md)
  
* Defined in [lib/typescript/tsc.d.ts:1690](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1690)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |
| languageVersion | [ScriptTarget](../enums/ts.scripttarget.md)|  |
| onError? | (message: string)=> void|  |

#### Returns: [SourceFile](ts.sourcefile.md)

### readFile(fileName: string): string
  
* Inherited from [ModuleResolutionHost](ts.moduleresolutionhost.md).[readFile](ts.moduleresolutionhost.md#readfile)
* Defined in [lib/typescript/tsc.d.ts:1682](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1682)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |

#### Returns: string

### Optional resolveModuleNames(moduleNames: string[], containingFile: string): string[]
  
* Defined in [lib/typescript/tsc.d.ts:1698](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1698)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| moduleNames | string[]|  |
| containingFile | string|  |

#### Returns: string[]

### useCaseSensitiveFileNames(): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1696](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1696)

#### Returns: boolean


Generated using [TypeDoc](http://typedoc.io)
