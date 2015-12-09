# Interface EmitHost


### Extends
* [ScriptReferenceHost](ts.scriptreferencehost.md)

## Index

### Properties
* [writeFile](ts.emithost.md#writefile)

### Methods
* [getCanonicalFileName](ts.emithost.md#getcanonicalfilename)
* [getCommonSourceDirectory](ts.emithost.md#getcommonsourcedirectory)
* [getCompilerOptions](ts.emithost.md#getcompileroptions)
* [getCurrentDirectory](ts.emithost.md#getcurrentdirectory)
* [getNewLine](ts.emithost.md#getnewline)
* [getSourceFile](ts.emithost.md#getsourcefile)
* [getSourceFiles](ts.emithost.md#getsourcefiles)

## Properties

### writeFile: [WriteFileCallback](ts.writefilecallback.md)

* Defined in [lib/typescript/tsc.d.ts:4960](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4960)


## Methods

### getCanonicalFileName(fileName: string): string
  
* Defined in [lib/typescript/tsc.d.ts:4958](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4958)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |

#### Returns: string

### getCommonSourceDirectory(): string
  
* Defined in [lib/typescript/tsc.d.ts:4957](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4957)

#### Returns: string

### getCompilerOptions(): [CompilerOptions](ts.compileroptions.md)
  
* Inherited from [ScriptReferenceHost](ts.scriptreferencehost.md).[getCompilerOptions](ts.scriptreferencehost.md#getcompileroptions)
* Defined in [lib/typescript/tsc.d.ts:952](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L952)

#### Returns: [CompilerOptions](ts.compileroptions.md)

### getCurrentDirectory(): string
  
* Inherited from [ScriptReferenceHost](ts.scriptreferencehost.md).[getCurrentDirectory](ts.scriptreferencehost.md#getcurrentdirectory)
* Defined in [lib/typescript/tsc.d.ts:954](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L954)

#### Returns: string

### getNewLine(): string
  
* Defined in [lib/typescript/tsc.d.ts:4959](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4959)

#### Returns: string

### getSourceFile(fileName: string): [SourceFile](ts.sourcefile.md)
  
* Inherited from [ScriptReferenceHost](ts.scriptreferencehost.md).[getSourceFile](ts.scriptreferencehost.md#getsourcefile)
* Defined in [lib/typescript/tsc.d.ts:953](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L953)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |

#### Returns: [SourceFile](ts.sourcefile.md)

### getSourceFiles(): [SourceFile](ts.sourcefile.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:4956](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4956)

#### Returns: [SourceFile](ts.sourcefile.md)[]


Generated using [TypeDoc](http://typedoc.io)
