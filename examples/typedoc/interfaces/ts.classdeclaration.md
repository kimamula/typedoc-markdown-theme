# Interface ClassDeclaration


### Extends
* [ClassLikeDeclaration](ts.classlikedeclaration.md)
* [Statement](ts.statement.md)

## Index

### Properties
* [_declarationBrand](ts.classdeclaration.md#_declarationbrand)
* [_statementBrand](ts.classdeclaration.md#_statementbrand)
* [decorators](ts.classdeclaration.md#decorators)
* [end](ts.classdeclaration.md#end)
* [flags](ts.classdeclaration.md#flags)
* [heritageClauses](ts.classdeclaration.md#heritageclauses)
* [id](ts.classdeclaration.md#id)
* [jsDocComment](ts.classdeclaration.md#jsdoccomment)
* [kind](ts.classdeclaration.md#kind)
* [localSymbol](ts.classdeclaration.md#localsymbol)
* [locals](ts.classdeclaration.md#locals)
* [members](ts.classdeclaration.md#members)
* [modifiers](ts.classdeclaration.md#modifiers)
* [name](ts.classdeclaration.md#name)
* [nextContainer](ts.classdeclaration.md#nextcontainer)
* [parent](ts.classdeclaration.md#parent)
* [parserContextFlags](ts.classdeclaration.md#parsercontextflags)
* [pos](ts.classdeclaration.md#pos)
* [symbol](ts.classdeclaration.md#symbol)
* [typeParameters](ts.classdeclaration.md#typeparameters)

## Properties

### _declarationBrand: any

* Inherited from [Declaration](ts.declaration.md).[_declarationBrand](ts.declaration.md#_declarationbrand)
* Defined in [lib/typescript/tsc.d.ts:392](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L392)


### _statementBrand: any

* Inherited from [Statement](ts.statement.md).[_statementBrand](ts.statement.md#_statementbrand)
* Defined in [lib/typescript/tsc.d.ts:681](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L681)


### Optional decorators: [NodeArray](ts.nodearray.md)<[Decorator](ts.decorator.md)>

* Inherited from [Node](ts.node.md).[decorators](ts.node.md#decorators)
* Overwrites [Node](ts.node.md).[decorators](ts.node.md#decorators)
* Defined in [lib/typescript/tsc.d.ts:365](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L365)


### end: number

* Inherited from [TextRange](ts.textrange.md).[end](ts.textrange.md#end)
* Overwrites [TextRange](ts.textrange.md).[end](ts.textrange.md#end)
* Defined in [lib/typescript/tsc.d.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L15)


### flags: [NodeFlags](../enums/ts.nodeflags.md)

* Inherited from [Node](ts.node.md).[flags](ts.node.md#flags)
* Overwrites [Node](ts.node.md).[flags](ts.node.md#flags)
* Defined in [lib/typescript/tsc.d.ts:363](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L363)


### Optional heritageClauses: [NodeArray](ts.nodearray.md)<[HeritageClause](ts.heritageclause.md)>

* Inherited from [ClassLikeDeclaration](ts.classlikedeclaration.md).[heritageClauses](ts.classlikedeclaration.md#heritageclauses)
* Defined in [lib/typescript/tsc.d.ts:763](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L763)


### Optional id: number

* Inherited from [Node](ts.node.md).[id](ts.node.md#id)
* Overwrites [Node](ts.node.md).[id](ts.node.md#id)
* Defined in [lib/typescript/tsc.d.ts:367](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L367)


### Optional jsDocComment: [JSDocComment](ts.jsdoccomment.md)

* Inherited from [Node](ts.node.md).[jsDocComment](ts.node.md#jsdoccomment)
* Overwrites [Node](ts.node.md).[jsDocComment](ts.node.md#jsdoccomment)
* Defined in [lib/typescript/tsc.d.ts:369](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L369)


### kind: [SyntaxKind](../enums/ts.syntaxkind.md)

* Inherited from [Node](ts.node.md).[kind](ts.node.md#kind)
* Overwrites [Node](ts.node.md).[kind](ts.node.md#kind)
* Defined in [lib/typescript/tsc.d.ts:362](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L362)


### Optional localSymbol: [Symbol](ts.symbol.md)

* Inherited from [Node](ts.node.md).[localSymbol](ts.node.md#localsymbol)
* Overwrites [Node](ts.node.md).[localSymbol](ts.node.md#localsymbol)
* Defined in [lib/typescript/tsc.d.ts:373](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L373)


### Optional locals: [SymbolTable](ts.symboltable.md)

* Inherited from [Node](ts.node.md).[locals](ts.node.md#locals)
* Overwrites [Node](ts.node.md).[locals](ts.node.md#locals)
* Defined in [lib/typescript/tsc.d.ts:371](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L371)


### members: [NodeArray](ts.nodearray.md)<[ClassElement](ts.classelement.md)>

* Inherited from [ClassLikeDeclaration](ts.classlikedeclaration.md).[members](ts.classlikedeclaration.md#members)
* Defined in [lib/typescript/tsc.d.ts:764](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L764)


### Optional modifiers: [ModifiersArray](ts.modifiersarray.md)

* Inherited from [Node](ts.node.md).[modifiers](ts.node.md#modifiers)
* Overwrites [Node](ts.node.md).[modifiers](ts.node.md#modifiers)
* Defined in [lib/typescript/tsc.d.ts:366](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L366)


### Optional name: [Identifier](ts.identifier.md)

* Inherited from [ClassLikeDeclaration](ts.classlikedeclaration.md).[name](ts.classlikedeclaration.md#name)
* Overwrites [Declaration](ts.declaration.md).[name](ts.declaration.md#name)
* Defined in [lib/typescript/tsc.d.ts:761](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L761)


### Optional nextContainer: [Node](ts.node.md)

* Inherited from [Node](ts.node.md).[nextContainer](ts.node.md#nextcontainer)
* Overwrites [Node](ts.node.md).[nextContainer](ts.node.md#nextcontainer)
* Defined in [lib/typescript/tsc.d.ts:372](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L372)


### Optional parent: [Node](ts.node.md)

* Inherited from [Node](ts.node.md).[parent](ts.node.md#parent)
* Overwrites [Node](ts.node.md).[parent](ts.node.md#parent)
* Defined in [lib/typescript/tsc.d.ts:368](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L368)


### Optional parserContextFlags: [ParserContextFlags](../enums/ts.parsercontextflags.md)

* Inherited from [Node](ts.node.md).[parserContextFlags](ts.node.md#parsercontextflags)
* Overwrites [Node](ts.node.md).[parserContextFlags](ts.node.md#parsercontextflags)
* Defined in [lib/typescript/tsc.d.ts:364](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L364)


### pos: number

* Inherited from [TextRange](ts.textrange.md).[pos](ts.textrange.md#pos)
* Overwrites [TextRange](ts.textrange.md).[pos](ts.textrange.md#pos)
* Defined in [lib/typescript/tsc.d.ts:14](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L14)


### Optional symbol: [Symbol](ts.symbol.md)

* Inherited from [Node](ts.node.md).[symbol](ts.node.md#symbol)
* Overwrites [Node](ts.node.md).[symbol](ts.node.md#symbol)
* Defined in [lib/typescript/tsc.d.ts:370](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L370)


### Optional typeParameters: [NodeArray](ts.nodearray.md)<[TypeParameterDeclaration](ts.typeparameterdeclaration.md)>

* Inherited from [ClassLikeDeclaration](ts.classlikedeclaration.md).[typeParameters](ts.classlikedeclaration.md#typeparameters)
* Defined in [lib/typescript/tsc.d.ts:762](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L762)



Generated using [TypeDoc](http://typedoc.io)
