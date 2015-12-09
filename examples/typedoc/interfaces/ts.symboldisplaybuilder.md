# Interface SymbolDisplayBuilder


## Index

### Methods
* [buildDisplayForParametersAndDelimiters](ts.symboldisplaybuilder.md#builddisplayforparametersanddelimiters)
* [buildDisplayForTypeParametersAndDelimiters](ts.symboldisplaybuilder.md#builddisplayfortypeparametersanddelimiters)
* [buildParameterDisplay](ts.symboldisplaybuilder.md#buildparameterdisplay)
* [buildReturnTypeDisplay](ts.symboldisplaybuilder.md#buildreturntypedisplay)
* [buildSignatureDisplay](ts.symboldisplaybuilder.md#buildsignaturedisplay)
* [buildSymbolDisplay](ts.symboldisplaybuilder.md#buildsymboldisplay)
* [buildTypeDisplay](ts.symboldisplaybuilder.md#buildtypedisplay)
* [buildTypeParameterDisplay](ts.symboldisplaybuilder.md#buildtypeparameterdisplay)
* [buildTypeParameterDisplayFromSymbol](ts.symboldisplaybuilder.md#buildtypeparameterdisplayfromsymbol)

## Methods

### buildDisplayForParametersAndDelimiters(parameters: [Symbol](ts.symbol.md)[], writer: [SymbolWriter](ts.symbolwriter.md), enclosingDeclaration?: [Node](ts.node.md), flags?: [TypeFormatFlags](../enums/ts.typeformatflags.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:1069](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1069)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| parameters | [Symbol](ts.symbol.md)[]|  |
| writer | [SymbolWriter](ts.symbolwriter.md)|  |
| enclosingDeclaration? | [Node](ts.node.md)|  |
| flags? | [TypeFormatFlags](../enums/ts.typeformatflags.md)|  |

#### Returns: void

### buildDisplayForTypeParametersAndDelimiters(typeParameters: [TypeParameter](ts.typeparameter.md)[], writer: [SymbolWriter](ts.symbolwriter.md), enclosingDeclaration?: [Node](ts.node.md), flags?: [TypeFormatFlags](../enums/ts.typeformatflags.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:1070](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1070)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| typeParameters | [TypeParameter](ts.typeparameter.md)[]|  |
| writer | [SymbolWriter](ts.symbolwriter.md)|  |
| enclosingDeclaration? | [Node](ts.node.md)|  |
| flags? | [TypeFormatFlags](../enums/ts.typeformatflags.md)|  |

#### Returns: void

### buildParameterDisplay(parameter: [Symbol](ts.symbol.md), writer: [SymbolWriter](ts.symbolwriter.md), enclosingDeclaration?: [Node](ts.node.md), flags?: [TypeFormatFlags](../enums/ts.typeformatflags.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:1066](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1066)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| parameter | [Symbol](ts.symbol.md)|  |
| writer | [SymbolWriter](ts.symbolwriter.md)|  |
| enclosingDeclaration? | [Node](ts.node.md)|  |
| flags? | [TypeFormatFlags](../enums/ts.typeformatflags.md)|  |

#### Returns: void

### buildReturnTypeDisplay(signature: [Signature](ts.signature.md), writer: [SymbolWriter](ts.symbolwriter.md), enclosingDeclaration?: [Node](ts.node.md), flags?: [TypeFormatFlags](../enums/ts.typeformatflags.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:1071](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1071)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| signature | [Signature](ts.signature.md)|  |
| writer | [SymbolWriter](ts.symbolwriter.md)|  |
| enclosingDeclaration? | [Node](ts.node.md)|  |
| flags? | [TypeFormatFlags](../enums/ts.typeformatflags.md)|  |

#### Returns: void

### buildSignatureDisplay(signatures: [Signature](ts.signature.md), writer: [SymbolWriter](ts.symbolwriter.md), enclosingDeclaration?: [Node](ts.node.md), flags?: [TypeFormatFlags](../enums/ts.typeformatflags.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:1065](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1065)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| signatures | [Signature](ts.signature.md)|  |
| writer | [SymbolWriter](ts.symbolwriter.md)|  |
| enclosingDeclaration? | [Node](ts.node.md)|  |
| flags? | [TypeFormatFlags](../enums/ts.typeformatflags.md)|  |

#### Returns: void

### buildSymbolDisplay(symbol: [Symbol](ts.symbol.md), writer: [SymbolWriter](ts.symbolwriter.md), enclosingDeclaration?: [Node](ts.node.md), meaning?: [SymbolFlags](../enums/ts.symbolflags.md), flags?: [SymbolFormatFlags](../enums/ts.symbolformatflags.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:1064](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1064)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| symbol | [Symbol](ts.symbol.md)|  |
| writer | [SymbolWriter](ts.symbolwriter.md)|  |
| enclosingDeclaration? | [Node](ts.node.md)|  |
| meaning? | [SymbolFlags](../enums/ts.symbolflags.md)|  |
| flags? | [SymbolFormatFlags](../enums/ts.symbolformatflags.md)|  |

#### Returns: void

### buildTypeDisplay(type: [Type](ts.type.md), writer: [SymbolWriter](ts.symbolwriter.md), enclosingDeclaration?: [Node](ts.node.md), flags?: [TypeFormatFlags](../enums/ts.typeformatflags.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:1063](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1063)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [Type](ts.type.md)|  |
| writer | [SymbolWriter](ts.symbolwriter.md)|  |
| enclosingDeclaration? | [Node](ts.node.md)|  |
| flags? | [TypeFormatFlags](../enums/ts.typeformatflags.md)|  |

#### Returns: void

### buildTypeParameterDisplay(tp: [TypeParameter](ts.typeparameter.md), writer: [SymbolWriter](ts.symbolwriter.md), enclosingDeclaration?: [Node](ts.node.md), flags?: [TypeFormatFlags](../enums/ts.typeformatflags.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:1067](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1067)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| tp | [TypeParameter](ts.typeparameter.md)|  |
| writer | [SymbolWriter](ts.symbolwriter.md)|  |
| enclosingDeclaration? | [Node](ts.node.md)|  |
| flags? | [TypeFormatFlags](../enums/ts.typeformatflags.md)|  |

#### Returns: void

### buildTypeParameterDisplayFromSymbol(symbol: [Symbol](ts.symbol.md), writer: [SymbolWriter](ts.symbolwriter.md), enclosingDeclaraiton?: [Node](ts.node.md), flags?: [TypeFormatFlags](../enums/ts.typeformatflags.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:1068](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1068)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| symbol | [Symbol](ts.symbol.md)|  |
| writer | [SymbolWriter](ts.symbolwriter.md)|  |
| enclosingDeclaraiton? | [Node](ts.node.md)|  |
| flags? | [TypeFormatFlags](../enums/ts.typeformatflags.md)|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
