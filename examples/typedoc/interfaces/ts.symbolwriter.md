# Interface SymbolWriter


## Index

### Methods
* [clear](ts.symbolwriter.md#clear)
* [decreaseIndent](ts.symbolwriter.md#decreaseindent)
* [increaseIndent](ts.symbolwriter.md#increaseindent)
* [trackSymbol](ts.symbolwriter.md#tracksymbol)
* [writeKeyword](ts.symbolwriter.md#writekeyword)
* [writeLine](ts.symbolwriter.md#writeline)
* [writeOperator](ts.symbolwriter.md#writeoperator)
* [writeParameter](ts.symbolwriter.md#writeparameter)
* [writePunctuation](ts.symbolwriter.md#writepunctuation)
* [writeSpace](ts.symbolwriter.md#writespace)
* [writeStringLiteral](ts.symbolwriter.md#writestringliteral)
* [writeSymbol](ts.symbolwriter.md#writesymbol)

## Methods

### clear(): void
  
* Defined in [lib/typescript/tsc.d.ts:1084](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1084)

#### Returns: void

### decreaseIndent(): void
  
* Defined in [lib/typescript/tsc.d.ts:1083](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1083)

#### Returns: void

### increaseIndent(): void
  
* Defined in [lib/typescript/tsc.d.ts:1082](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1082)

#### Returns: void

### trackSymbol(symbol: [Symbol](ts.symbol.md), enclosingDeclaration?: [Node](ts.node.md), meaning?: [SymbolFlags](../enums/ts.symbolflags.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:1085](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1085)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| symbol | [Symbol](ts.symbol.md)|  |
| enclosingDeclaration? | [Node](ts.node.md)|  |
| meaning? | [SymbolFlags](../enums/ts.symbolflags.md)|  |

#### Returns: void

### writeKeyword(text: string): void
  
* Defined in [lib/typescript/tsc.d.ts:1074](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1074)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |

#### Returns: void

### writeLine(): void
  
* Defined in [lib/typescript/tsc.d.ts:1081](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1081)

#### Returns: void

### writeOperator(text: string): void
  
* Defined in [lib/typescript/tsc.d.ts:1075](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1075)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |

#### Returns: void

### writeParameter(text: string): void
  
* Defined in [lib/typescript/tsc.d.ts:1079](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1079)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |

#### Returns: void

### writePunctuation(text: string): void
  
* Defined in [lib/typescript/tsc.d.ts:1076](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1076)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |

#### Returns: void

### writeSpace(text: string): void
  
* Defined in [lib/typescript/tsc.d.ts:1077](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1077)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |

#### Returns: void

### writeStringLiteral(text: string): void
  
* Defined in [lib/typescript/tsc.d.ts:1078](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1078)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |

#### Returns: void

### writeSymbol(text: string, symbol: [Symbol](ts.symbol.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:1080](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1080)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |
| symbol | [Symbol](ts.symbol.md)|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
