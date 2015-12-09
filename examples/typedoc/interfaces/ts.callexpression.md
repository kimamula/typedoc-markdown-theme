# Interface CallExpression


### Extends
* [LeftHandSideExpression](ts.lefthandsideexpression.md)

## Index

### Properties
* [_expressionBrand](ts.callexpression.md#_expressionbrand)
* [_leftHandSideExpressionBrand](ts.callexpression.md#_lefthandsideexpressionbrand)
* [_postfixExpressionBrand](ts.callexpression.md#_postfixexpressionbrand)
* [_unaryExpressionBrand](ts.callexpression.md#_unaryexpressionbrand)
* [arguments](ts.callexpression.md#arguments)
* [contextualType](ts.callexpression.md#contextualtype)
* [decorators](ts.callexpression.md#decorators)
* [end](ts.callexpression.md#end)
* [expression](ts.callexpression.md#expression)
* [flags](ts.callexpression.md#flags)
* [id](ts.callexpression.md#id)
* [jsDocComment](ts.callexpression.md#jsdoccomment)
* [kind](ts.callexpression.md#kind)
* [localSymbol](ts.callexpression.md#localsymbol)
* [locals](ts.callexpression.md#locals)
* [modifiers](ts.callexpression.md#modifiers)
* [nextContainer](ts.callexpression.md#nextcontainer)
* [parent](ts.callexpression.md#parent)
* [parserContextFlags](ts.callexpression.md#parsercontextflags)
* [pos](ts.callexpression.md#pos)
* [symbol](ts.callexpression.md#symbol)
* [typeArguments](ts.callexpression.md#typearguments)

## Properties

### _expressionBrand: any

* Inherited from [Expression](ts.expression.md).[_expressionBrand](ts.expression.md#_expressionbrand)
* Defined in [lib/typescript/tsc.d.ts:529](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L529)


### _leftHandSideExpressionBrand: any

* Inherited from [LeftHandSideExpression](ts.lefthandsideexpression.md).[_leftHandSideExpressionBrand](ts.lefthandsideexpression.md#_lefthandsideexpressionbrand)
* Defined in [lib/typescript/tsc.d.ts:547](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L547)


### _postfixExpressionBrand: any

* Inherited from [PostfixExpression](ts.postfixexpression.md).[_postfixExpressionBrand](ts.postfixexpression.md#_postfixexpressionbrand)
* Defined in [lib/typescript/tsc.d.ts:544](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L544)


### _unaryExpressionBrand: any

* Inherited from [UnaryExpression](ts.unaryexpression.md).[_unaryExpressionBrand](ts.unaryexpression.md#_unaryexpressionbrand)
* Defined in [lib/typescript/tsc.d.ts:533](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L533)


### arguments: [NodeArray](ts.nodearray.md)<[Expression](ts.expression.md)>

* Defined in [lib/typescript/tsc.d.ts:627](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L627)


### Optional contextualType: [Type](ts.type.md)

* Inherited from [Expression](ts.expression.md).[contextualType](ts.expression.md#contextualtype)
* Defined in [lib/typescript/tsc.d.ts:530](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L530)


### Optional decorators: [NodeArray](ts.nodearray.md)<[Decorator](ts.decorator.md)>

* Inherited from [Node](ts.node.md).[decorators](ts.node.md#decorators)
* Defined in [lib/typescript/tsc.d.ts:365](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L365)


### end: number

* Inherited from [TextRange](ts.textrange.md).[end](ts.textrange.md#end)
* Defined in [lib/typescript/tsc.d.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L15)


### expression: [LeftHandSideExpression](ts.lefthandsideexpression.md)

* Defined in [lib/typescript/tsc.d.ts:625](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L625)


### flags: [NodeFlags](../enums/ts.nodeflags.md)

* Inherited from [Node](ts.node.md).[flags](ts.node.md#flags)
* Defined in [lib/typescript/tsc.d.ts:363](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L363)


### Optional id: number

* Inherited from [Node](ts.node.md).[id](ts.node.md#id)
* Defined in [lib/typescript/tsc.d.ts:367](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L367)


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


### Optional typeArguments: [NodeArray](ts.nodearray.md)<[TypeNode](ts.typenode.md)>

* Defined in [lib/typescript/tsc.d.ts:626](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L626)



Generated using [TypeDoc](http://typedoc.io)
