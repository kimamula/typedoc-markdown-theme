# Interface Scanner


## Index

### Methods
* [getStartPos](ts.scanner.md#getstartpos)
* [getTextPos](ts.scanner.md#gettextpos)
* [getToken](ts.scanner.md#gettoken)
* [getTokenPos](ts.scanner.md#gettokenpos)
* [getTokenText](ts.scanner.md#gettokentext)
* [getTokenValue](ts.scanner.md#gettokenvalue)
* [hasExtendedUnicodeEscape](ts.scanner.md#hasextendedunicodeescape)
* [hasPrecedingLineBreak](ts.scanner.md#hasprecedinglinebreak)
* [isIdentifier](ts.scanner.md#isidentifier)
* [isReservedWord](ts.scanner.md#isreservedword)
* [isUnterminated](ts.scanner.md#isunterminated)
* [lookAhead](ts.scanner.md#lookahead)
* [reScanGreaterToken](ts.scanner.md#rescangreatertoken)
* [reScanJsxToken](ts.scanner.md#rescanjsxtoken)
* [reScanSlashToken](ts.scanner.md#rescanslashtoken)
* [reScanTemplateToken](ts.scanner.md#rescantemplatetoken)
* [scan](ts.scanner.md#scan)
* [scanJsxIdentifier](ts.scanner.md#scanjsxidentifier)
* [scanJsxToken](ts.scanner.md#scanjsxtoken)
* [setLanguageVariant](ts.scanner.md#setlanguagevariant)
* [setOnError](ts.scanner.md#setonerror)
* [setScriptTarget](ts.scanner.md#setscripttarget)
* [setText](ts.scanner.md#settext)
* [setTextPos](ts.scanner.md#settextpos)
* [tryScan](ts.scanner.md#tryscan)

## Methods

### getStartPos(): number
  
* Defined in [lib/typescript/tsc.d.ts:4880](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4880)

#### Returns: number

### getTextPos(): number
  
* Defined in [lib/typescript/tsc.d.ts:4882](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4882)

#### Returns: number

### getToken(): [SyntaxKind](../enums/ts.syntaxkind.md)
  
* Defined in [lib/typescript/tsc.d.ts:4881](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4881)

#### Returns: [SyntaxKind](../enums/ts.syntaxkind.md)

### getTokenPos(): number
  
* Defined in [lib/typescript/tsc.d.ts:4883](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4883)

#### Returns: number

### getTokenText(): string
  
* Defined in [lib/typescript/tsc.d.ts:4884](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4884)

#### Returns: string

### getTokenValue(): string
  
* Defined in [lib/typescript/tsc.d.ts:4885](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4885)

#### Returns: string

### hasExtendedUnicodeEscape(): boolean
  
* Defined in [lib/typescript/tsc.d.ts:4886](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4886)

#### Returns: boolean

### hasPrecedingLineBreak(): boolean
  
* Defined in [lib/typescript/tsc.d.ts:4887](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4887)

#### Returns: boolean

### isIdentifier(): boolean
  
* Defined in [lib/typescript/tsc.d.ts:4888](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4888)

#### Returns: boolean

### isReservedWord(): boolean
  
* Defined in [lib/typescript/tsc.d.ts:4889](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4889)

#### Returns: boolean

### isUnterminated(): boolean
  
* Defined in [lib/typescript/tsc.d.ts:4890](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4890)

#### Returns: boolean

### lookAhead<T>(callback: ()=> T): T
  
* Defined in [lib/typescript/tsc.d.ts:4903](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4903)


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | ()=> T|  |

#### Returns: T

### reScanGreaterToken(): [SyntaxKind](../enums/ts.syntaxkind.md)
  
* Defined in [lib/typescript/tsc.d.ts:4891](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4891)

#### Returns: [SyntaxKind](../enums/ts.syntaxkind.md)

### reScanJsxToken(): [SyntaxKind](../enums/ts.syntaxkind.md)
  
* Defined in [lib/typescript/tsc.d.ts:4895](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4895)

#### Returns: [SyntaxKind](../enums/ts.syntaxkind.md)

### reScanSlashToken(): [SyntaxKind](../enums/ts.syntaxkind.md)
  
* Defined in [lib/typescript/tsc.d.ts:4892](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4892)

#### Returns: [SyntaxKind](../enums/ts.syntaxkind.md)

### reScanTemplateToken(): [SyntaxKind](../enums/ts.syntaxkind.md)
  
* Defined in [lib/typescript/tsc.d.ts:4893](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4893)

#### Returns: [SyntaxKind](../enums/ts.syntaxkind.md)

### scan(): [SyntaxKind](../enums/ts.syntaxkind.md)
  
* Defined in [lib/typescript/tsc.d.ts:4897](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4897)

#### Returns: [SyntaxKind](../enums/ts.syntaxkind.md)

### scanJsxIdentifier(): [SyntaxKind](../enums/ts.syntaxkind.md)
  
* Defined in [lib/typescript/tsc.d.ts:4894](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4894)

#### Returns: [SyntaxKind](../enums/ts.syntaxkind.md)

### scanJsxToken(): [SyntaxKind](../enums/ts.syntaxkind.md)
  
* Defined in [lib/typescript/tsc.d.ts:4896](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4896)

#### Returns: [SyntaxKind](../enums/ts.syntaxkind.md)

### setLanguageVariant(variant: [LanguageVariant](../enums/ts.languagevariant.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:4901](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4901)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| variant | [LanguageVariant](../enums/ts.languagevariant.md)|  |

#### Returns: void

### setOnError(onError: [ErrorCallback](ts.errorcallback.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:4899](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4899)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| onError | [ErrorCallback](ts.errorcallback.md)|  |

#### Returns: void

### setScriptTarget(scriptTarget: [ScriptTarget](../enums/ts.scripttarget.md)): void
  
* Defined in [lib/typescript/tsc.d.ts:4900](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4900)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| scriptTarget | [ScriptTarget](../enums/ts.scripttarget.md)|  |

#### Returns: void

### setText(text: string, start?: number, length?: number): void
  
* Defined in [lib/typescript/tsc.d.ts:4898](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4898)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string|  |
| start? | number|  |
| length? | number|  |

#### Returns: void

### setTextPos(textPos: number): void
  
* Defined in [lib/typescript/tsc.d.ts:4902](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4902)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| textPos | number|  |

#### Returns: void

### tryScan<T>(callback: ()=> T): T
  
* Defined in [lib/typescript/tsc.d.ts:4904](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L4904)


#### Type parameters

* #### T

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | ()=> T|  |

#### Returns: T


Generated using [TypeDoc](http://typedoc.io)
