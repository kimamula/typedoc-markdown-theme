# Interface TypeChecker


## Index

### Methods
* [getAliasedSymbol](ts.typechecker.md#getaliasedsymbol)
* [getAugmentedPropertiesOfType](ts.typechecker.md#getaugmentedpropertiesoftype)
* [getBaseTypes](ts.typechecker.md#getbasetypes)
* [getConstantValue](ts.typechecker.md#getconstantvalue)
* [getContextualType](ts.typechecker.md#getcontextualtype)
* [getDeclaredTypeOfSymbol](ts.typechecker.md#getdeclaredtypeofsymbol)
* [getDiagnostics](ts.typechecker.md#getdiagnostics)
* [getEmitResolver](ts.typechecker.md#getemitresolver)
* [getExportsOfModule](ts.typechecker.md#getexportsofmodule)
* [getFullyQualifiedName](ts.typechecker.md#getfullyqualifiedname)
* [getGlobalDiagnostics](ts.typechecker.md#getglobaldiagnostics)
* [getIdentifierCount](ts.typechecker.md#getidentifiercount)
* [getIndexTypeOfType](ts.typechecker.md#getindextypeoftype)
* [getJsxElementAttributesType](ts.typechecker.md#getjsxelementattributestype)
* [getJsxIntrinsicTagNames](ts.typechecker.md#getjsxintrinsictagnames)
* [getNodeCount](ts.typechecker.md#getnodecount)
* [getPropertiesOfType](ts.typechecker.md#getpropertiesoftype)
* [getPropertyOfType](ts.typechecker.md#getpropertyoftype)
* [getResolvedSignature](ts.typechecker.md#getresolvedsignature)
* [getReturnTypeOfSignature](ts.typechecker.md#getreturntypeofsignature)
* [getRootSymbols](ts.typechecker.md#getrootsymbols)
* [getShorthandAssignmentValueSymbol](ts.typechecker.md#getshorthandassignmentvaluesymbol)
* [getSignatureFromDeclaration](ts.typechecker.md#getsignaturefromdeclaration)
* [getSignaturesOfType](ts.typechecker.md#getsignaturesoftype)
* [getSymbolAtLocation](ts.typechecker.md#getsymbolatlocation)
* [getSymbolCount](ts.typechecker.md#getsymbolcount)
* [getSymbolDisplayBuilder](ts.typechecker.md#getsymboldisplaybuilder)
* [getSymbolsInScope](ts.typechecker.md#getsymbolsinscope)
* [getTypeAtLocation](ts.typechecker.md#gettypeatlocation)
* [getTypeCount](ts.typechecker.md#gettypecount)
* [getTypeOfSymbolAtLocation](ts.typechecker.md#gettypeofsymbolatlocation)
* [isArgumentsSymbol](ts.typechecker.md#isargumentssymbol)
* [isImplementationOfOverload](ts.typechecker.md#isimplementationofoverload)
* [isOptionalParameter](ts.typechecker.md#isoptionalparameter)
* [isUndefinedSymbol](ts.typechecker.md#isundefinedsymbol)
* [isValidPropertyAccess](ts.typechecker.md#isvalidpropertyaccess)
* [symbolToString](ts.typechecker.md#symboltostring)
* [typeToString](ts.typechecker.md#typetostring)

## Methods

### getAliasedSymbol(symbol: [Symbol](ts.symbol.md)): [Symbol](ts.symbol.md)
  
* Defined in [lib/typescript/tsc.d.ts:1049](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1049)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| symbol | [Symbol](ts.symbol.md)|  |

#### Returns: [Symbol](ts.symbol.md)

### getAugmentedPropertiesOfType(type: [Type](ts.type.md)): [Symbol](ts.symbol.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:1039](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1039)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [Type](ts.type.md)|  |

#### Returns: [Symbol](ts.symbol.md)[]

### getBaseTypes(type: [InterfaceType](ts.interfacetype.md)): [ObjectType](ts.objecttype.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:1029](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1029)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [InterfaceType](ts.interfacetype.md)|  |

#### Returns: [ObjectType](ts.objecttype.md)[]

### getConstantValue(node: [EnumMember](ts.enummember.md) | [PropertyAccessExpression](ts.propertyaccessexpression.md) | [ElementAccessExpression](ts.elementaccessexpression.md)): number
  
* Defined in [lib/typescript/tsc.d.ts:1047](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1047)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [EnumMember](ts.enummember.md) | [PropertyAccessExpression](ts.propertyaccessexpression.md) | [ElementAccessExpression](ts.elementaccessexpression.md)|  |

#### Returns: number

### getContextualType(node: [Expression](ts.expression.md)): [Type](ts.type.md)
  
* Defined in [lib/typescript/tsc.d.ts:1041](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1041)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Expression](ts.expression.md)|  |

#### Returns: [Type](ts.type.md)

### getDeclaredTypeOfSymbol(symbol: [Symbol](ts.symbol.md)): [Type](ts.type.md)
  
* Defined in [lib/typescript/tsc.d.ts:1024](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1024)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| symbol | [Symbol](ts.symbol.md)|  |

#### Returns: [Type](ts.type.md)

### getDiagnostics(sourceFile?: [SourceFile](ts.sourcefile.md), cancellationToken?: [CancellationToken](ts.cancellationtoken.md)): [Diagnostic](ts.diagnostic.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:1054](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1054)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| sourceFile? | [SourceFile](ts.sourcefile.md)|  |
| cancellationToken? | [CancellationToken](ts.cancellationtoken.md)|  |

#### Returns: [Diagnostic](ts.diagnostic.md)[]

### getEmitResolver(sourceFile?: [SourceFile](ts.sourcefile.md), cancellationToken?: [CancellationToken](ts.cancellationtoken.md)): [EmitResolver](ts.emitresolver.md)
  
* Defined in [lib/typescript/tsc.d.ts:1056](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1056)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| sourceFile? | [SourceFile](ts.sourcefile.md)|  |
| cancellationToken? | [CancellationToken](ts.cancellationtoken.md)|  |

#### Returns: [EmitResolver](ts.emitresolver.md)

### getExportsOfModule(moduleSymbol: [Symbol](ts.symbol.md)): [Symbol](ts.symbol.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:1050](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1050)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| moduleSymbol | [Symbol](ts.symbol.md)|  |

#### Returns: [Symbol](ts.symbol.md)[]

### getFullyQualifiedName(symbol: [Symbol](ts.symbol.md)): string
  
* Defined in [lib/typescript/tsc.d.ts:1038](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1038)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| symbol | [Symbol](ts.symbol.md)|  |

#### Returns: string

### getGlobalDiagnostics(): [Diagnostic](ts.diagnostic.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:1055](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1055)

#### Returns: [Diagnostic](ts.diagnostic.md)[]

### getIdentifierCount(): number
  
* Defined in [lib/typescript/tsc.d.ts:1058](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1058)

#### Returns: number

### getIndexTypeOfType(type: [Type](ts.type.md), kind: [IndexKind](../enums/ts.indexkind.md)): [Type](ts.type.md)
  
* Defined in [lib/typescript/tsc.d.ts:1028](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1028)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [Type](ts.type.md)|  |
| kind | [IndexKind](../enums/ts.indexkind.md)|  |

#### Returns: [Type](ts.type.md)

### getJsxElementAttributesType(elementNode: [JsxOpeningLikeElement](../modules/ts.md#jsxopeninglikeelement)): [Type](ts.type.md)
  
* Defined in [lib/typescript/tsc.d.ts:1051](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1051)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| elementNode | [JsxOpeningLikeElement](../modules/ts.md#jsxopeninglikeelement)|  |

#### Returns: [Type](ts.type.md)

### getJsxIntrinsicTagNames(): [Symbol](ts.symbol.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:1052](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1052)

#### Returns: [Symbol](ts.symbol.md)[]

### getNodeCount(): number
  
* Defined in [lib/typescript/tsc.d.ts:1057](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1057)

#### Returns: number

### getPropertiesOfType(type: [Type](ts.type.md)): [Symbol](ts.symbol.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:1025](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1025)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [Type](ts.type.md)|  |

#### Returns: [Symbol](ts.symbol.md)[]

### getPropertyOfType(type: [Type](ts.type.md), propertyName: string): [Symbol](ts.symbol.md)
  
* Defined in [lib/typescript/tsc.d.ts:1026](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1026)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [Type](ts.type.md)|  |
| propertyName | string|  |

#### Returns: [Symbol](ts.symbol.md)

### getResolvedSignature(node: [CallLikeExpression](../modules/ts.md#calllikeexpression), candidatesOutArray?: [Signature](ts.signature.md)[]): [Signature](ts.signature.md)
  
* Defined in [lib/typescript/tsc.d.ts:1042](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1042)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [CallLikeExpression](../modules/ts.md#calllikeexpression)|  |
| candidatesOutArray? | [Signature](ts.signature.md)[]|  |

#### Returns: [Signature](ts.signature.md)

### getReturnTypeOfSignature(signature: [Signature](ts.signature.md)): [Type](ts.type.md)
  
* Defined in [lib/typescript/tsc.d.ts:1030](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1030)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| signature | [Signature](ts.signature.md)|  |

#### Returns: [Type](ts.type.md)

### getRootSymbols(symbol: [Symbol](ts.symbol.md)): [Symbol](ts.symbol.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:1040](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1040)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| symbol | [Symbol](ts.symbol.md)|  |

#### Returns: [Symbol](ts.symbol.md)[]

### getShorthandAssignmentValueSymbol(location: [Node](ts.node.md)): [Symbol](ts.symbol.md)
  
* Defined in [lib/typescript/tsc.d.ts:1033](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1033)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| location | [Node](ts.node.md)|  |

#### Returns: [Symbol](ts.symbol.md)

### getSignatureFromDeclaration(declaration: [SignatureDeclaration](ts.signaturedeclaration.md)): [Signature](ts.signature.md)
  
* Defined in [lib/typescript/tsc.d.ts:1043](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1043)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| declaration | [SignatureDeclaration](ts.signaturedeclaration.md)|  |

#### Returns: [Signature](ts.signature.md)

### getSignaturesOfType(type: [Type](ts.type.md), kind: [SignatureKind](../enums/ts.signaturekind.md)): [Signature](ts.signature.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:1027](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1027)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [Type](ts.type.md)|  |
| kind | [SignatureKind](../enums/ts.signaturekind.md)|  |

#### Returns: [Signature](ts.signature.md)[]

### getSymbolAtLocation(node: [Node](ts.node.md)): [Symbol](ts.symbol.md)
  
* Defined in [lib/typescript/tsc.d.ts:1032](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1032)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Node](ts.node.md)|  |

#### Returns: [Symbol](ts.symbol.md)

### getSymbolCount(): number
  
* Defined in [lib/typescript/tsc.d.ts:1059](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1059)

#### Returns: number

### getSymbolDisplayBuilder(): [SymbolDisplayBuilder](ts.symboldisplaybuilder.md)
  
* Defined in [lib/typescript/tsc.d.ts:1037](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1037)

#### Returns: [SymbolDisplayBuilder](ts.symboldisplaybuilder.md)

### getSymbolsInScope(location: [Node](ts.node.md), meaning: [SymbolFlags](../enums/ts.symbolflags.md)): [Symbol](ts.symbol.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:1031](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1031)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| location | [Node](ts.node.md)|  |
| meaning | [SymbolFlags](../enums/ts.symbolflags.md)|  |

#### Returns: [Symbol](ts.symbol.md)[]

### getTypeAtLocation(node: [Node](ts.node.md)): [Type](ts.type.md)
  
* Defined in [lib/typescript/tsc.d.ts:1034](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1034)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Node](ts.node.md)|  |

#### Returns: [Type](ts.type.md)

### getTypeCount(): number
  
* Defined in [lib/typescript/tsc.d.ts:1060](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1060)

#### Returns: number

### getTypeOfSymbolAtLocation(symbol: [Symbol](ts.symbol.md), node: [Node](ts.node.md)): [Type](ts.type.md)
  
* Defined in [lib/typescript/tsc.d.ts:1023](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1023)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| symbol | [Symbol](ts.symbol.md)|  |
| node | [Node](ts.node.md)|  |

#### Returns: [Type](ts.type.md)

### isArgumentsSymbol(symbol: [Symbol](ts.symbol.md)): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1046](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1046)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| symbol | [Symbol](ts.symbol.md)|  |

#### Returns: boolean

### isImplementationOfOverload(node: [FunctionLikeDeclaration](ts.functionlikedeclaration.md)): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1044](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1044)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [FunctionLikeDeclaration](ts.functionlikedeclaration.md)|  |

#### Returns: boolean

### isOptionalParameter(node: [ParameterDeclaration](ts.parameterdeclaration.md)): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1053](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1053)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [ParameterDeclaration](ts.parameterdeclaration.md)|  |

#### Returns: boolean

### isUndefinedSymbol(symbol: [Symbol](ts.symbol.md)): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1045](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1045)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| symbol | [Symbol](ts.symbol.md)|  |

#### Returns: boolean

### isValidPropertyAccess(node: [PropertyAccessExpression](ts.propertyaccessexpression.md) | [QualifiedName](ts.qualifiedname.md), propertyName: string): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1048](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1048)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [PropertyAccessExpression](ts.propertyaccessexpression.md) | [QualifiedName](ts.qualifiedname.md)|  |
| propertyName | string|  |

#### Returns: boolean

### symbolToString(symbol: [Symbol](ts.symbol.md), enclosingDeclaration?: [Node](ts.node.md), meaning?: [SymbolFlags](../enums/ts.symbolflags.md)): string
  
* Defined in [lib/typescript/tsc.d.ts:1036](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1036)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| symbol | [Symbol](ts.symbol.md)|  |
| enclosingDeclaration? | [Node](ts.node.md)|  |
| meaning? | [SymbolFlags](../enums/ts.symbolflags.md)|  |

#### Returns: string

### typeToString(type: [Type](ts.type.md), enclosingDeclaration?: [Node](ts.node.md), flags?: [TypeFormatFlags](../enums/ts.typeformatflags.md)): string
  
* Defined in [lib/typescript/tsc.d.ts:1035](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1035)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [Type](ts.type.md)|  |
| enclosingDeclaration? | [Node](ts.node.md)|  |
| flags? | [TypeFormatFlags](../enums/ts.typeformatflags.md)|  |

#### Returns: string


Generated using [TypeDoc](http://typedoc.io)
