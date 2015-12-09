# Interface VariableLikeDeclaration


### Extends
* [Declaration](ts.declaration.md)

## Index

### Properties
* [_declarationBrand](ts.variablelikedeclaration.md#_declarationbrand)
* [decorators](ts.variablelikedeclaration.md#decorators)
* [dotDotDotToken](ts.variablelikedeclaration.md#dotdotdottoken)
* [end](ts.variablelikedeclaration.md#end)
* [flags](ts.variablelikedeclaration.md#flags)
* [id](ts.variablelikedeclaration.md#id)
* [initializer](ts.variablelikedeclaration.md#initializer)
* [jsDocComment](ts.variablelikedeclaration.md#jsdoccomment)
* [kind](ts.variablelikedeclaration.md#kind)
* [localSymbol](ts.variablelikedeclaration.md#localsymbol)
* [locals](ts.variablelikedeclaration.md#locals)
* [modifiers](ts.variablelikedeclaration.md#modifiers)
* [name](ts.variablelikedeclaration.md#name)
* [nextContainer](ts.variablelikedeclaration.md#nextcontainer)
* [parent](ts.variablelikedeclaration.md#parent)
* [parserContextFlags](ts.variablelikedeclaration.md#parsercontextflags)
* [pos](ts.variablelikedeclaration.md#pos)
* [propertyName](ts.variablelikedeclaration.md#propertyname)
* [questionToken](ts.variablelikedeclaration.md#questiontoken)
* [symbol](ts.variablelikedeclaration.md#symbol)
* [type](ts.variablelikedeclaration.md#type)

## Properties

### _declarationBrand: any

* Inherited from [Declaration](ts.declaration.md).[_declarationBrand](ts.declaration.md#_declarationbrand)
* Defined in [lib/typescript/tsc.d.ts:392](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L392)


### Optional decorators: [NodeArray](ts.nodearray.md)<[Decorator](ts.decorator.md)>

* Inherited from [Node](ts.node.md).[decorators](ts.node.md#decorators)
* Defined in [lib/typescript/tsc.d.ts:365](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L365)


### Optional dotDotDotToken: [Node](ts.node.md)

* Defined in [lib/typescript/tsc.d.ts:454](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L454)


### end: number

* Inherited from [TextRange](ts.textrange.md).[end](ts.textrange.md#end)
* Defined in [lib/typescript/tsc.d.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L15)


### flags: [NodeFlags](../enums/ts.nodeflags.md)

* Inherited from [Node](ts.node.md).[flags](ts.node.md#flags)
* Defined in [lib/typescript/tsc.d.ts:363](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L363)


### Optional id: number

* Inherited from [Node](ts.node.md).[id](ts.node.md#id)
* Defined in [lib/typescript/tsc.d.ts:367](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L367)


### Optional initializer: [Expression](ts.expression.md)

* Defined in [lib/typescript/tsc.d.ts:458](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L458)


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


### name: [DeclarationName](../modules/ts.md#declarationname)

* Overwrites [Declaration](ts.declaration.md).[name](ts.declaration.md#name)
* Defined in [lib/typescript/tsc.d.ts:455](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L455)


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


### Optional propertyName: [Identifier](ts.identifier.md)

* Defined in [lib/typescript/tsc.d.ts:453](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L453)


### Optional questionToken: [Node](ts.node.md)

* Defined in [lib/typescript/tsc.d.ts:456](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L456)


### Optional symbol: [Symbol](ts.symbol.md)

* Inherited from [Node](ts.node.md).[symbol](ts.node.md#symbol)
* Defined in [lib/typescript/tsc.d.ts:370](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L370)


### Optional type: [TypeNode](ts.typenode.md)

* Defined in [lib/typescript/tsc.d.ts:457](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L457)



Generated using [TypeDoc](http://typedoc.io)
