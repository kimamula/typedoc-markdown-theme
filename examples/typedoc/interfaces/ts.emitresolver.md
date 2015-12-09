# Interface EmitResolver


## Index

### Methods
* [collectLinkedAliases](ts.emitresolver.md#collectlinkedaliases)
* [getBlockScopedVariableId](ts.emitresolver.md#getblockscopedvariableid)
* [getConstantValue](ts.emitresolver.md#getconstantvalue)
* [getNodeCheckFlags](ts.emitresolver.md#getnodecheckflags)
* [getReferencedExportContainer](ts.emitresolver.md#getreferencedexportcontainer)
* [getReferencedImportDeclaration](ts.emitresolver.md#getreferencedimportdeclaration)
* [getReferencedNestedRedeclaration](ts.emitresolver.md#getreferencednestedredeclaration)
* [getReferencedValueDeclaration](ts.emitresolver.md#getreferencedvaluedeclaration)
* [getTypeReferenceSerializationKind](ts.emitresolver.md#gettypereferenceserializationkind)
* [hasGlobalName](ts.emitresolver.md#hasglobalname)
* [isDeclarationVisible](ts.emitresolver.md#isdeclarationvisible)
* [isEntityNameVisible](ts.emitresolver.md#isentitynamevisible)
* [isImplementationOfOverload](ts.emitresolver.md#isimplementationofoverload)
* [isNestedRedeclaration](ts.emitresolver.md#isnestedredeclaration)
* [isOptionalParameter](ts.emitresolver.md#isoptionalparameter)
* [isReferencedAliasDeclaration](ts.emitresolver.md#isreferencedaliasdeclaration)
* [isSymbolAccessible](ts.emitresolver.md#issymbolaccessible)
* [isTopLevelValueImportEqualsWithEntityName](ts.emitresolver.md#istoplevelvalueimportequalswithentityname)
* [isValueAliasDeclaration](ts.emitresolver.md#isvaluealiasdeclaration)
* [writeReturnTypeOfSignatureDeclaration](ts.emitresolver.md#writereturntypeofsignaturedeclaration)
* [writeTypeOfDeclaration](ts.emitresolver.md#writetypeofdeclaration)
* [writeTypeOfExpression](ts.emitresolver.md#writetypeofexpression)

## Methods

### collectLinkedAliases(node: [Identifier](ts.identifier.md)): [Node](ts.node.md)[]
  
* Defined in [lib/typescript/tsc.d.ts:1146](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1146)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Identifier](ts.identifier.md)|  |

#### Returns: [Node](ts.node.md)[]

### getBlockScopedVariableId(node: [Identifier](ts.identifier.md)): number
  
* Defined in [lib/typescript/tsc.d.ts:1154](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1154)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Identifier](ts.identifier.md)|  |

#### Returns: number

### getConstantValue(node: [EnumMember](ts.enummember.md) | [PropertyAccessExpression](ts.propertyaccessexpression.md) | [ElementAccessExpression](ts.elementaccessexpression.md)): number
  
* Defined in [lib/typescript/tsc.d.ts:1153](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1153)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [EnumMember](ts.enummember.md) | [PropertyAccessExpression](ts.propertyaccessexpression.md) | [ElementAccessExpression](ts.elementaccessexpression.md)|  |

#### Returns: number

### getNodeCheckFlags(node: [Node](ts.node.md)): [NodeCheckFlags](../enums/ts.nodecheckflags.md)
  
* Defined in [lib/typescript/tsc.d.ts:1144](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1144)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Node](ts.node.md)|  |

#### Returns: [NodeCheckFlags](../enums/ts.nodecheckflags.md)

### getReferencedExportContainer(node: [Identifier](ts.identifier.md)): [SourceFile](ts.sourcefile.md) | [ModuleDeclaration](ts.moduledeclaration.md) | [EnumDeclaration](ts.enumdeclaration.md)
  
* Defined in [lib/typescript/tsc.d.ts:1137](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1137)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Identifier](ts.identifier.md)|  |

#### Returns: [SourceFile](ts.sourcefile.md) | [ModuleDeclaration](ts.moduledeclaration.md) | [EnumDeclaration](ts.enumdeclaration.md)

### getReferencedImportDeclaration(node: [Identifier](ts.identifier.md)): [Declaration](ts.declaration.md)
  
* Defined in [lib/typescript/tsc.d.ts:1138](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1138)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Identifier](ts.identifier.md)|  |

#### Returns: [Declaration](ts.declaration.md)

### getReferencedNestedRedeclaration(node: [Identifier](ts.identifier.md)): [Declaration](ts.declaration.md)
  
* Defined in [lib/typescript/tsc.d.ts:1139](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1139)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Identifier](ts.identifier.md)|  |

#### Returns: [Declaration](ts.declaration.md)

### getReferencedValueDeclaration(reference: [Identifier](ts.identifier.md)): [Declaration](ts.declaration.md)
  
* Defined in [lib/typescript/tsc.d.ts:1155](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1155)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| reference | [Identifier](ts.identifier.md)|  |

#### Returns: [Declaration](ts.declaration.md)

### getTypeReferenceSerializationKind(typeName: [EntityName](../modules/ts.md#entityname)): [TypeReferenceSerializationKind](../enums/ts.typereferenceserializationkind.md)
  
* Defined in [lib/typescript/tsc.d.ts:1156](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1156)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| typeName | [EntityName](../modules/ts.md#entityname)|  |

#### Returns: [TypeReferenceSerializationKind](../enums/ts.typereferenceserializationkind.md)

### hasGlobalName(name: string): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1136](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1136)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: boolean

### isDeclarationVisible(node: [Declaration](ts.declaration.md)): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1145](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1145)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Declaration](ts.declaration.md)|  |

#### Returns: boolean

### isEntityNameVisible(entityName: [EntityName](../modules/ts.md#entityname) | [Expression](ts.expression.md), enclosingDeclaration: [Node](ts.node.md)): [SymbolVisibilityResult](ts.symbolvisibilityresult.md)
  
* Defined in [lib/typescript/tsc.d.ts:1152](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1152)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| entityName | [EntityName](../modules/ts.md#entityname) | [Expression](ts.expression.md)|  |
| enclosingDeclaration | [Node](ts.node.md)|  |

#### Returns: [SymbolVisibilityResult](ts.symbolvisibilityresult.md)

### isImplementationOfOverload(node: [FunctionLikeDeclaration](ts.functionlikedeclaration.md)): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1147](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1147)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [FunctionLikeDeclaration](ts.functionlikedeclaration.md)|  |

#### Returns: boolean

### isNestedRedeclaration(node: [Declaration](ts.declaration.md)): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1140](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1140)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Declaration](ts.declaration.md)|  |

#### Returns: boolean

### isOptionalParameter(node: [ParameterDeclaration](ts.parameterdeclaration.md)): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1157](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1157)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [ParameterDeclaration](ts.parameterdeclaration.md)|  |

#### Returns: boolean

### isReferencedAliasDeclaration(node: [Node](ts.node.md), checkChildren?: boolean): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1142](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1142)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Node](ts.node.md)|  |
| checkChildren? | boolean|  |

#### Returns: boolean

### isSymbolAccessible(symbol: [Symbol](ts.symbol.md), enclosingDeclaration: [Node](ts.node.md), meaning: [SymbolFlags](../enums/ts.symbolflags.md)): [SymbolAccessiblityResult](ts.symbolaccessiblityresult.md)
  
* Defined in [lib/typescript/tsc.d.ts:1151](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1151)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| symbol | [Symbol](ts.symbol.md)|  |
| enclosingDeclaration | [Node](ts.node.md)|  |
| meaning | [SymbolFlags](../enums/ts.symbolflags.md)|  |

#### Returns: [SymbolAccessiblityResult](ts.symbolaccessiblityresult.md)

### isTopLevelValueImportEqualsWithEntityName(node: [ImportEqualsDeclaration](ts.importequalsdeclaration.md)): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1143](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1143)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [ImportEqualsDeclaration](ts.importequalsdeclaration.md)|  |

#### Returns: boolean

### isValueAliasDeclaration(node: [Node](ts.node.md)): boolean
  
* Defined in [lib/typescript/tsc.d.ts:1141](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1141)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Node](ts.node.md)|  |

#### Returns: boolean

### writeReturnTypeOfSignatureDeclaration(signatureDeclaration: [SignatureDeclaration](ts.signaturedeclaration.md), enclosingDeclaration: [Node](ts.node.md), flags: [TypeFormatFlags](../enums/ts.typeformatflags.md), writer: [SymbolWriter](ts.symbolwriter.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:1149](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1149)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| signatureDeclaration | [SignatureDeclaration](ts.signaturedeclaration.md)|  |
| enclosingDeclaration | [Node](ts.node.md)|  |
| flags | [TypeFormatFlags](../enums/ts.typeformatflags.md)|  |
| writer | [SymbolWriter](ts.symbolwriter.md)|  |

#### Returns: void

### writeTypeOfDeclaration(declaration: [AccessorDeclaration](ts.accessordeclaration.md) | [VariableLikeDeclaration](ts.variablelikedeclaration.md), enclosingDeclaration: [Node](ts.node.md), flags: [TypeFormatFlags](../enums/ts.typeformatflags.md), writer: [SymbolWriter](ts.symbolwriter.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:1148](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1148)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| declaration | [AccessorDeclaration](ts.accessordeclaration.md) | [VariableLikeDeclaration](ts.variablelikedeclaration.md)|  |
| enclosingDeclaration | [Node](ts.node.md)|  |
| flags | [TypeFormatFlags](../enums/ts.typeformatflags.md)|  |
| writer | [SymbolWriter](ts.symbolwriter.md)|  |

#### Returns: void

### writeTypeOfExpression(expr: [Expression](ts.expression.md), enclosingDeclaration: [Node](ts.node.md), flags: [TypeFormatFlags](../enums/ts.typeformatflags.md), writer: [SymbolWriter](ts.symbolwriter.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:1150](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1150)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| expr | [Expression](ts.expression.md)|  |
| enclosingDeclaration | [Node](ts.node.md)|  |
| flags | [TypeFormatFlags](../enums/ts.typeformatflags.md)|  |
| writer | [SymbolWriter](ts.symbolwriter.md)|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
