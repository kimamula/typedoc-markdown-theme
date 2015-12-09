# Interface EmitTextWriter


## Index

### Methods
* [decreaseIndent](ts.emittextwriter.md#decreaseindent)
* [getColumn](ts.emittextwriter.md#getcolumn)
* [getIndent](ts.emittextwriter.md#getindent)
* [getLine](ts.emittextwriter.md#getline)
* [getText](ts.emittextwriter.md#gettext)
* [getTextPos](ts.emittextwriter.md#gettextpos)
* [increaseIndent](ts.emittextwriter.md#increaseindent)
* [rawWrite](ts.emittextwriter.md#rawwrite)
* [write](ts.emittextwriter.md#write)
* [writeLine](ts.emittextwriter.md#writeline)
* [writeLiteral](ts.emittextwriter.md#writeliteral)
* [writeTextOfNode](ts.emittextwriter.md#writetextofnode)

## Methods

### decreaseIndent(): void
  
* Defined in [lib/typescript/tsc.d.ts:5079](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L5079)

#### Returns: void

### getColumn(): number
  
* Defined in [lib/typescript/tsc.d.ts:5085](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L5085)

#### Returns: number

### getIndent(): number
  
* Defined in [lib/typescript/tsc.d.ts:5086](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L5086)

#### Returns: number

### getLine(): number
  
* Defined in [lib/typescript/tsc.d.ts:5084](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L5084)

#### Returns: number

### getText(): string
  
* Defined in [lib/typescript/tsc.d.ts:5080](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L5080)

#### Returns: string

### getTextPos(): number
  
* Defined in [lib/typescript/tsc.d.ts:5083](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L5083)

#### Returns: number

### increaseIndent(): void
  
* Defined in [lib/typescript/tsc.d.ts:5078](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L5078)

#### Returns: void

### rawWrite(s: string): void
  
* Defined in [lib/typescript/tsc.d.ts:5081](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L5081)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| s | string|  |

#### Returns: void

### write(s: string): void
  
* Defined in [lib/typescript/tsc.d.ts:5075](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L5075)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| s | string|  |

#### Returns: void

### writeLine(): void
  
* Defined in [lib/typescript/tsc.d.ts:5077](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L5077)

#### Returns: void

### writeLiteral(s: string): void
  
* Defined in [lib/typescript/tsc.d.ts:5082](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L5082)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| s | string|  |

#### Returns: void

### writeTextOfNode(sourceFile: [SourceFile](ts.sourcefile.md), node: [Node](ts.node.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:5076](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L5076)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| sourceFile | [SourceFile](ts.sourcefile.md)|  |
| node | [Node](ts.node.md)|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
