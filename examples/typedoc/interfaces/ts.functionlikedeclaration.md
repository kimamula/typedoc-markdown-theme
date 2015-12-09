# Interface FunctionLikeDeclaration


### Extends
* [SignatureDeclaration](ts.signaturedeclaration.md)

## Index

### Properties
* [_declarationBrand](ts.functionlikedeclaration.md#_declarationbrand)
* [_functionLikeDeclarationBrand](ts.functionlikedeclaration.md#_functionlikedeclarationbrand)
* [asteriskToken](ts.functionlikedeclaration.md#asterisktoken)
* [body](ts.functionlikedeclaration.md#body)
* [decorators](ts.functionlikedeclaration.md#decorators)
* [end](ts.functionlikedeclaration.md#end)
* [flags](ts.functionlikedeclaration.md#flags)
* [id](ts.functionlikedeclaration.md#id)
* [jsDocComment](ts.functionlikedeclaration.md#jsdoccomment)
* [kind](ts.functionlikedeclaration.md#kind)
* [localSymbol](ts.functionlikedeclaration.md#localsymbol)
* [locals](ts.functionlikedeclaration.md#locals)
* [modifiers](ts.functionlikedeclaration.md#modifiers)
* [name](ts.functionlikedeclaration.md#name)
* [nextContainer](ts.functionlikedeclaration.md#nextcontainer)
* [parameters](ts.functionlikedeclaration.md#parameters)
* [parent](ts.functionlikedeclaration.md#parent)
* [parserContextFlags](ts.functionlikedeclaration.md#parsercontextflags)
* [pos](ts.functionlikedeclaration.md#pos)
* [questionToken](ts.functionlikedeclaration.md#questiontoken)
* [symbol](ts.functionlikedeclaration.md#symbol)
* [type](ts.functionlikedeclaration.md#type)
* [typeParameters](ts.functionlikedeclaration.md#typeparameters)

## Properties

### _declarationBrand: any

* Inherited from [Declaration](ts.declaration.md).[_declarationBrand](ts.declaration.md#_declarationbrand)
* Defined in [lib/typescript/tsc.d.ts:392](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L392)


### _functionLikeDeclarationBrand: any

* Defined in [lib/typescript/tsc.d.ts:464](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L464)


### Optional asteriskToken: [Node](ts.node.md)

* Defined in [lib/typescript/tsc.d.ts:465](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L465)


### Optional body: [Block](ts.block.md) | [Expression](ts.expression.md)

* Defined in [lib/typescript/tsc.d.ts:467](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L467)


### Optional decorators: [NodeArray](ts.nodearray.md)<[Decorator](ts.decorator.md)>

* Inherited from [Node](ts.node.md).[decorators](ts.node.md#decorators)
* Defined in [lib/typescript/tsc.d.ts:365](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L365)


### end: number

* Inherited from [TextRange](ts.textrange.md).[end](ts.textrange.md#end)
* Defined in [lib/typescript/tsc.d.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L15)


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


### Optional name: [DeclarationName](../modules/ts.md#declarationname)

* Inherited from [Declaration](ts.declaration.md).[name](ts.declaration.md#name)
* Defined in [lib/typescript/tsc.d.ts:393](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L393)


### Optional nextContainer: [Node](ts.node.md)

* Inherited from [Node](ts.node.md).[nextContainer](ts.node.md#nextcontainer)
* Defined in [lib/typescript/tsc.d.ts:372](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L372)


### parameters: [NodeArray](ts.nodearray.md)<[ParameterDeclaration](ts.parameterdeclaration.md)>

* Inherited from [SignatureDeclaration](ts.signaturedeclaration.md).[parameters](ts.signaturedeclaration.md#parameters)
* Defined in [lib/typescript/tsc.d.ts:408](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L408)


### Optional parent: [Node](ts.node.md)

* Inherited from [Node](ts.node.md).[parent](ts.node.md#parent)
* Defined in [lib/typescript/tsc.d.ts:368](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L368)


### Optional parserContextFlags: [ParserContextFlags](../enums/ts.parsercontextflags.md)

* Inherited from [Node](ts.node.md).[parserContextFlags](ts.node.md#parsercontextflags)
* Defined in [lib/typescript/tsc.d.ts:364](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L364)


### pos: number

* Inherited from [TextRange](ts.textrange.md).[pos](ts.textrange.md#pos)
* Defined in [lib/typescript/tsc.d.ts:14](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L14)


### Optional questionToken: [Node](ts.node.md)

* Defined in [lib/typescript/tsc.d.ts:466](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L466)


### Optional symbol: [Symbol](ts.symbol.md)

* Inherited from [Node](ts.node.md).[symbol](ts.node.md#symbol)
* Defined in [lib/typescript/tsc.d.ts:370](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L370)


### Optional type: [TypeNode](ts.typenode.md)

* Inherited from [SignatureDeclaration](ts.signaturedeclaration.md).[type](ts.signaturedeclaration.md#type)
* Defined in [lib/typescript/tsc.d.ts:409](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L409)


### Optional typeParameters: [NodeArray](ts.nodearray.md)<[TypeParameterDeclaration](ts.typeparameterdeclaration.md)>

* Inherited from [SignatureDeclaration](ts.signaturedeclaration.md).[typeParameters](ts.signaturedeclaration.md#typeparameters)
* Defined in [lib/typescript/tsc.d.ts:407](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L407)



Generated using [TypeDoc](http://typedoc.io)
