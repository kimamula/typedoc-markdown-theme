# Interface InterfaceDeclaration


### Extends
* [Declaration](ts.declaration.md)
* [Statement](ts.statement.md)

## Index

### Properties
* [_declarationBrand](ts.interfacedeclaration.md#_declarationbrand)
* [_statementBrand](ts.interfacedeclaration.md#_statementbrand)
* [decorators](ts.interfacedeclaration.md#decorators)
* [end](ts.interfacedeclaration.md#end)
* [flags](ts.interfacedeclaration.md#flags)
* [heritageClauses](ts.interfacedeclaration.md#heritageclauses)
* [id](ts.interfacedeclaration.md#id)
* [jsDocComment](ts.interfacedeclaration.md#jsdoccomment)
* [kind](ts.interfacedeclaration.md#kind)
* [localSymbol](ts.interfacedeclaration.md#localsymbol)
* [locals](ts.interfacedeclaration.md#locals)
* [members](ts.interfacedeclaration.md#members)
* [modifiers](ts.interfacedeclaration.md#modifiers)
* [name](ts.interfacedeclaration.md#name)
* [nextContainer](ts.interfacedeclaration.md#nextcontainer)
* [parent](ts.interfacedeclaration.md#parent)
* [parserContextFlags](ts.interfacedeclaration.md#parsercontextflags)
* [pos](ts.interfacedeclaration.md#pos)
* [symbol](ts.interfacedeclaration.md#symbol)
* [typeParameters](ts.interfacedeclaration.md#typeparameters)

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

* Defined in [lib/typescript/tsc.d.ts:776](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L776)


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


### members: [NodeArray](ts.nodearray.md)<[Declaration](ts.declaration.md)>

* Defined in [lib/typescript/tsc.d.ts:777](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L777)


### Optional modifiers: [ModifiersArray](ts.modifiersarray.md)

* Inherited from [Node](ts.node.md).[modifiers](ts.node.md#modifiers)
* Overwrites [Node](ts.node.md).[modifiers](ts.node.md#modifiers)
* Defined in [lib/typescript/tsc.d.ts:366](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L366)


### name: [Identifier](ts.identifier.md)

* Overwrites [Declaration](ts.declaration.md).[name](ts.declaration.md#name)
* Defined in [lib/typescript/tsc.d.ts:774](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L774)


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

* Defined in [lib/typescript/tsc.d.ts:775](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L775)



Generated using [TypeDoc](http://typedoc.io)
