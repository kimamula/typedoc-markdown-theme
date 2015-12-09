# Interface StringSymbolWriter


### Extends
* [SymbolWriter](ts.symbolwriter.md)

## Index

### Methods
* [clear](ts.stringsymbolwriter.md#clear)
* [decreaseIndent](ts.stringsymbolwriter.md#decreaseindent)
* [increaseIndent](ts.stringsymbolwriter.md#increaseindent)
* [string](ts.stringsymbolwriter.md#string)
* [trackSymbol](ts.stringsymbolwriter.md#tracksymbol)
* [writeKeyword](ts.stringsymbolwriter.md#writekeyword)
* [writeLine](ts.stringsymbolwriter.md#writeline)
* [writeOperator](ts.stringsymbolwriter.md#writeoperator)
* [writeParameter](ts.stringsymbolwriter.md#writeparameter)
* [writePunctuation](ts.stringsymbolwriter.md#writepunctuation)
* [writeSpace](ts.stringsymbolwriter.md#writespace)
* [writeStringLiteral](ts.stringsymbolwriter.md#writestringliteral)
* [writeSymbol](ts.stringsymbolwriter.md#writesymbol)

## Methods

### clear(): void
  
* Inherited from [SymbolWriter](ts.symbolwriter.md).[clear](ts.symbolwriter.md#clear)
* Defined in [lib/typescript/tsc.d.ts:1084](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1084)

#### Returns: void

### decreaseIndent(): void
  
* Inherited from [SymbolWriter](ts.symbolwriter.md).[decreaseIndent](ts.symbolwriter.md#decreaseindent)
* Defined in [lib/typescript/tsc.d.ts:1083](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1083)

#### Returns: void

### increaseIndent(): void
  
* Inherited from [SymbolWriter](ts.symbolwriter.md).[increaseIndent](ts.symbolwriter.md#increaseindent)
* Defined in [lib/typescript/tsc.d.ts:1082](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1082)

#### Returns: void

### string(): string
  
* Defined in [lib/typescript/tsc.d.ts:4953](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4953)

#### Returns: string

### trackSymbol(symbol: [Symbol](ts.symbol.md), enclosingDeclaration?: [Node](ts.node.md), meaning?: [SymbolFlags](../enums/ts.symbolflags.md)): void
  
* Inherited from [SymbolWriter](ts.symbolwriter.md).[trackSymbol](ts.symbolwriter.md#tracksymbol)
* Defined in [lib/typescript/tsc.d.ts:1085](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1085)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| symbol | [Symbol](ts.symbol.md)|  |
| enclosingDeclaration? | [Node](ts.node.md)|  |
| meaning? | [SymbolFlags](../enums/ts.symbolflags.md)|  |

#### Returns: void

### writeKeyword(text: string): void
  
* Inherited from [SymbolWriter](ts.symbolwriter.md).[writeKeyword](ts.symbolwriter.md#writekeyword)
* Defined in [lib/typescript/tsc.d.ts:1074](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1074)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |

#### Returns: void

### writeLine(): void
  
* Inherited from [SymbolWriter](ts.symbolwriter.md).[writeLine](ts.symbolwriter.md#writeline)
* Defined in [lib/typescript/tsc.d.ts:1081](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1081)

#### Returns: void

### writeOperator(text: string): void
  
* Inherited from [SymbolWriter](ts.symbolwriter.md).[writeOperator](ts.symbolwriter.md#writeoperator)
* Defined in [lib/typescript/tsc.d.ts:1075](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1075)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |

#### Returns: void

### writeParameter(text: string): void
  
* Inherited from [SymbolWriter](ts.symbolwriter.md).[writeParameter](ts.symbolwriter.md#writeparameter)
* Defined in [lib/typescript/tsc.d.ts:1079](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1079)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |

#### Returns: void

### writePunctuation(text: string): void
  
* Inherited from [SymbolWriter](ts.symbolwriter.md).[writePunctuation](ts.symbolwriter.md#writepunctuation)
* Defined in [lib/typescript/tsc.d.ts:1076](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1076)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |

#### Returns: void

### writeSpace(text: string): void
  
* Inherited from [SymbolWriter](ts.symbolwriter.md).[writeSpace](ts.symbolwriter.md#writespace)
* Defined in [lib/typescript/tsc.d.ts:1077](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1077)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |

#### Returns: void

### writeStringLiteral(text: string): void
  
* Inherited from [SymbolWriter](ts.symbolwriter.md).[writeStringLiteral](ts.symbolwriter.md#writestringliteral)
* Defined in [lib/typescript/tsc.d.ts:1078](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1078)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |

#### Returns: void

### writeSymbol(text: string, symbol: [Symbol](ts.symbol.md)): void
  
* Inherited from [SymbolWriter](ts.symbolwriter.md).[writeSymbol](ts.symbolwriter.md#writesymbol)
* Defined in [lib/typescript/tsc.d.ts:1080](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1080)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |
| symbol | [Symbol](ts.symbol.md)|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
