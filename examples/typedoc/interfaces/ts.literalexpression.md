# Interface LiteralExpression


### Extends
* [PrimaryExpression](ts.primaryexpression.md)

## Index

### Properties
* [_expressionBrand](ts.literalexpression.md#_expressionbrand)
* [_leftHandSideExpressionBrand](ts.literalexpression.md#_lefthandsideexpressionbrand)
* [_memberExpressionBrand](ts.literalexpression.md#_memberexpressionbrand)
* [_postfixExpressionBrand](ts.literalexpression.md#_postfixexpressionbrand)
* [_primaryExpressionBrand](ts.literalexpression.md#_primaryexpressionbrand)
* [_unaryExpressionBrand](ts.literalexpression.md#_unaryexpressionbrand)
* [contextualType](ts.literalexpression.md#contextualtype)
* [decorators](ts.literalexpression.md#decorators)
* [end](ts.literalexpression.md#end)
* [flags](ts.literalexpression.md#flags)
* [hasExtendedUnicodeEscape](ts.literalexpression.md#hasextendedunicodeescape)
* [id](ts.literalexpression.md#id)
* [isUnterminated](ts.literalexpression.md#isunterminated)
* [jsDocComment](ts.literalexpression.md#jsdoccomment)
* [kind](ts.literalexpression.md#kind)
* [localSymbol](ts.literalexpression.md#localsymbol)
* [locals](ts.literalexpression.md#locals)
* [modifiers](ts.literalexpression.md#modifiers)
* [nextContainer](ts.literalexpression.md#nextcontainer)
* [parent](ts.literalexpression.md#parent)
* [parserContextFlags](ts.literalexpression.md#parsercontextflags)
* [pos](ts.literalexpression.md#pos)
* [symbol](ts.literalexpression.md#symbol)
* [text](ts.literalexpression.md#text)

## Properties

### _expressionBrand: any

* Inherited from [Expression](ts.expression.md).[_expressionBrand](ts.expression.md#_expressionbrand)
* Defined in [lib/typescript/tsc.d.ts:529](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L529)


### _leftHandSideExpressionBrand: any

* Inherited from [LeftHandSideExpression](ts.lefthandsideexpression.md).[_leftHandSideExpressionBrand](ts.lefthandsideexpression.md#_lefthandsideexpressionbrand)
* Defined in [lib/typescript/tsc.d.ts:547](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L547)


### _memberExpressionBrand: any

* Inherited from [MemberExpression](ts.memberexpression.md).[_memberExpressionBrand](ts.memberexpression.md#_memberexpressionbrand)
* Defined in [lib/typescript/tsc.d.ts:550](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L550)


### _postfixExpressionBrand: any

* Inherited from [PostfixExpression](ts.postfixexpression.md).[_postfixExpressionBrand](ts.postfixexpression.md#_postfixexpressionbrand)
* Defined in [lib/typescript/tsc.d.ts:544](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L544)


### _primaryExpressionBrand: any

* Inherited from [PrimaryExpression](ts.primaryexpression.md).[_primaryExpressionBrand](ts.primaryexpression.md#_primaryexpressionbrand)
* Defined in [lib/typescript/tsc.d.ts:553](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L553)


### _unaryExpressionBrand: any

* Inherited from [UnaryExpression](ts.unaryexpression.md).[_unaryExpressionBrand](ts.unaryexpression.md#_unaryexpressionbrand)
* Defined in [lib/typescript/tsc.d.ts:533](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L533)


### Optional contextualType: [Type](ts.type.md)

* Inherited from [Expression](ts.expression.md).[contextualType](ts.expression.md#contextualtype)
* Defined in [lib/typescript/tsc.d.ts:530](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L530)


### Optional decorators: [NodeArray](ts.nodearray.md)<[Decorator](ts.decorator.md)>

* Inherited from [Node](ts.node.md).[decorators](ts.node.md#decorators)
* Defined in [lib/typescript/tsc.d.ts:365](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L365)


### end: number

* Inherited from [TextRange](ts.textrange.md).[end](ts.textrange.md#end)
* Defined in [lib/typescript/tsc.d.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L15)


### flags: [NodeFlags](../enums/ts.nodeflags.md)

* Inherited from [Node](ts.node.md).[flags](ts.node.md#flags)
* Defined in [lib/typescript/tsc.d.ts:363](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L363)


### Optional hasExtendedUnicodeEscape: boolean

* Defined in [lib/typescript/tsc.d.ts:593](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L593)


### Optional id: number

* Inherited from [Node](ts.node.md).[id](ts.node.md#id)
* Defined in [lib/typescript/tsc.d.ts:367](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L367)


### Optional isUnterminated: boolean

* Defined in [lib/typescript/tsc.d.ts:592](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L592)


### Optional jsDocComment: [JSDocComment](ts.jsdoccomment.md)

* Inherited from [Node](ts.node.md).[jsDocComment](ts.node.md#jsdoccomment)
* Defined in [lib/typescript/tsc.d.ts:369](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L369)


### kind: [SyntaxKind](../enums/ts.syntaxkind.md)

* Inherited from [Node](ts.node.md).[kind](ts.node.md#kind)
* Defined in [lib/typescript/tsc.d.ts:362](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L362)


### Optional localSymbol: [Symbol](ts.symbol.md)

* Inherited from [Node](ts.node.md).[localSymbol](ts.node.md#localsymbol)
* Defined in [lib/typescript/tsc.d.ts:373](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L373)


### Optional locals: [SymbolTable](ts.symboltable.md)

* Inherited from [Node](ts.node.md).[locals](ts.node.md#locals)
* Defined in [lib/typescript/tsc.d.ts:371](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L371)


### Optional modifiers: [ModifiersArray](ts.modifiersarray.md)

* Inherited from [Node](ts.node.md).[modifiers](ts.node.md#modifiers)
* Defined in [lib/typescript/tsc.d.ts:366](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L366)


### Optional nextContainer: [Node](ts.node.md)

* Inherited from [Node](ts.node.md).[nextContainer](ts.node.md#nextcontainer)
* Defined in [lib/typescript/tsc.d.ts:372](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L372)


### Optional parent: [Node](ts.node.md)

* Inherited from [Node](ts.node.md).[parent](ts.node.md#parent)
* Defined in [lib/typescript/tsc.d.ts:368](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L368)


### Optional parserContextFlags: [ParserContextFlags](../enums/ts.parsercontextflags.md)

* Inherited from [Node](ts.node.md).[parserContextFlags](ts.node.md#parsercontextflags)
* Defined in [lib/typescript/tsc.d.ts:364](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L364)


### pos: number

* Inherited from [TextRange](ts.textrange.md).[pos](ts.textrange.md#pos)
* Defined in [lib/typescript/tsc.d.ts:14](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L14)


### Optional symbol: [Symbol](ts.symbol.md)

* Inherited from [Node](ts.node.md).[symbol](ts.node.md#symbol)
* Defined in [lib/typescript/tsc.d.ts:370](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L370)


### text: string

* Defined in [lib/typescript/tsc.d.ts:591](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L591)



Generated using [TypeDoc](http://typedoc.io)
