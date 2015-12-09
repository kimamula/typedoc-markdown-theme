# Interface Program


### Extends
* [ScriptReferenceHost](ts.scriptreferencehost.md)

## Index

### Properties
* [structureIsReused](ts.program.md#structureisreused)

### Methods
* [emit](ts.program.md#emit)
* [getClassifiableNames](ts.program.md#getclassifiablenames)
* [getCommonSourceDirectory](ts.program.md#getcommonsourcedirectory)
* [getCompilerOptions](ts.program.md#getcompileroptions)
* [getCurrentDirectory](ts.program.md#getcurrentdirectory)
* [getDeclarationDiagnostics](ts.program.md#getdeclarationdiagnostics)
* [getDiagnosticsProducingTypeChecker](ts.program.md#getdiagnosticsproducingtypechecker)
* [getGlobalDiagnostics](ts.program.md#getglobaldiagnostics)
* [getIdentifierCount](ts.program.md#getidentifiercount)
* [getNodeCount](ts.program.md#getnodecount)
* [getOptionsDiagnostics](ts.program.md#getoptionsdiagnostics)
* [getRootFileNames](ts.program.md#getrootfilenames)
* [getSemanticDiagnostics](ts.program.md#getsemanticdiagnostics)
* [getSourceFile](ts.program.md#getsourcefile)
* [getSourceFiles](ts.program.md#getsourcefiles)
* [getSymbolCount](ts.program.md#getsymbolcount)
* [getSyntacticDiagnostics](ts.program.md#getsyntacticdiagnostics)
* [getTypeChecker](ts.program.md#gettypechecker)
* [getTypeCount](ts.program.md#gettypecount)

## Properties

### Optional structureIsReused: boolean

* Defined in [lib/typescript/tsc.d.ts:985](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L985)


## Methods

### emit(targetSourceFile?: [SourceFile](ts.sourcefile.md), writeFile?: [WriteFileCallback](ts.writefilecallback.md), cancellationToken?: [CancellationToken](ts.cancellationtoken.md)): [EmitResult](ts.emitresult.md)
  
* Defined in [lib/typescript/tsc.d.ts:971](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L971)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| targetSourceFile? | [SourceFile](ts.sourcefile.md)|  |
| writeFile? | [WriteFileCallback](ts.writefilecallback.md)|  |
| cancellationToken? | [CancellationToken](ts.cancellationtoken.md)|  |

#### Returns: [EmitResult](ts.emitresult.md)

### getClassifiableNames(): [Map](ts.map.md)<string>
  
* Defined in [lib/typescript/tsc.d.ts:980](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L980)

#### Returns: [Map](ts.map.md)<string>

### getCommonSourceDirectory(): string
  
* Defined in [lib/typescript/tsc.d.ts:978](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L978)

#### Returns: string

### getCompilerOptions(): [CompilerOptions](ts.compileroptions.md)
  
* Inherited from [ScriptReferenceHost](ts.scriptreferencehost.md).[getCompilerOptions](ts.scriptreferencehost.md#getcompileroptions)
* Defined in [lib/typescript/tsc.d.ts:952](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L952)

#### Returns: [CompilerOptions](ts.compileroptions.md)

### getCurrentDirectory(): string
  
* Inherited from [ScriptReferenceHost](ts.scriptreferencehost.md).[getCurrentDirectory](ts.scriptreferencehost.md#getcurrentdirectory)
* Defined in [lib/typescript/tsc.d.ts:954](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L954)

#### Returns: string

### getDeclarationDiagnostics(sourceFile?: [SourceFile](ts.sourcefile.md), cancellationToken?: [CancellationToken](ts.cancellationtoken.md)): [Diagnostic](ts.diagnostic.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:976](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L976)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| sourceFile? | [SourceFile](ts.sourcefile.md)|  |
| cancellationToken? | [CancellationToken](ts.cancellationtoken.md)|  |

#### Returns: [Diagnostic](ts.diagnostic.md)[]

### getDiagnosticsProducingTypeChecker(): [TypeChecker](ts.typechecker.md)
  
* Defined in [lib/typescript/tsc.d.ts:979](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L979)

#### Returns: [TypeChecker](ts.typechecker.md)

### getGlobalDiagnostics(cancellationToken?: [CancellationToken](ts.cancellationtoken.md)): [Diagnostic](ts.diagnostic.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:973](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L973)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| cancellationToken? | [CancellationToken](ts.cancellationtoken.md)|  |

#### Returns: [Diagnostic](ts.diagnostic.md)[]

### getIdentifierCount(): number
  
* Defined in [lib/typescript/tsc.d.ts:982](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L982)

#### Returns: number

### getNodeCount(): number
  
* Defined in [lib/typescript/tsc.d.ts:981](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L981)

#### Returns: number

### getOptionsDiagnostics(cancellationToken?: [CancellationToken](ts.cancellationtoken.md)): [Diagnostic](ts.diagnostic.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:972](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L972)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| cancellationToken? | [CancellationToken](ts.cancellationtoken.md)|  |

#### Returns: [Diagnostic](ts.diagnostic.md)[]

### getRootFileNames(): string[]
  
* Defined in [lib/typescript/tsc.d.ts:969](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L969)

#### Returns: string[]

### getSemanticDiagnostics(sourceFile?: [SourceFile](ts.sourcefile.md), cancellationToken?: [CancellationToken](ts.cancellationtoken.md)): [Diagnostic](ts.diagnostic.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:975](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L975)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| sourceFile? | [SourceFile](ts.sourcefile.md)|  |
| cancellationToken? | [CancellationToken](ts.cancellationtoken.md)|  |

#### Returns: [Diagnostic](ts.diagnostic.md)[]

### getSourceFile(fileName: string): [SourceFile](ts.sourcefile.md)
  
* Inherited from [ScriptReferenceHost](ts.scriptreferencehost.md).[getSourceFile](ts.scriptreferencehost.md#getsourcefile)
* Defined in [lib/typescript/tsc.d.ts:953](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L953)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |

#### Returns: [SourceFile](ts.sourcefile.md)

### getSourceFiles(): [SourceFile](ts.sourcefile.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:970](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L970)

#### Returns: [SourceFile](ts.sourcefile.md)[]

### getSymbolCount(): number
  
* Defined in [lib/typescript/tsc.d.ts:983](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L983)

#### Returns: number

### getSyntacticDiagnostics(sourceFile?: [SourceFile](ts.sourcefile.md), cancellationToken?: [CancellationToken](ts.cancellationtoken.md)): [Diagnostic](ts.diagnostic.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:974](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L974)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| sourceFile? | [SourceFile](ts.sourcefile.md)|  |
| cancellationToken? | [CancellationToken](ts.cancellationtoken.md)|  |

#### Returns: [Diagnostic](ts.diagnostic.md)[]

### getTypeChecker(): [TypeChecker](ts.typechecker.md)
  
* Defined in [lib/typescript/tsc.d.ts:977](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L977)

#### Returns: [TypeChecker](ts.typechecker.md)

### getTypeCount(): number
  
* Defined in [lib/typescript/tsc.d.ts:984](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L984)

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
