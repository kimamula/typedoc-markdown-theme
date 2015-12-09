# Interface VariableDeclaration


### Extends
* [Declaration](ts.declaration.md)

## Index

### Properties
* [_declarationBrand](ts.variabledeclaration.md#_declarationbrand)
* [decorators](ts.variabledeclaration.md#decorators)
* [end](ts.variabledeclaration.md#end)
* [flags](ts.variabledeclaration.md#flags)
* [id](ts.variabledeclaration.md#id)
* [initializer](ts.variabledeclaration.md#initializer)
* [jsDocComment](ts.variabledeclaration.md#jsdoccomment)
* [kind](ts.variabledeclaration.md#kind)
* [localSymbol](ts.variabledeclaration.md#localsymbol)
* [locals](ts.variabledeclaration.md#locals)
* [modifiers](ts.variabledeclaration.md#modifiers)
* [name](ts.variabledeclaration.md#name)
* [nextContainer](ts.variabledeclaration.md#nextcontainer)
* [parent](ts.variabledeclaration.md#parent)
* [parserContextFlags](ts.variabledeclaration.md#parsercontextflags)
* [pos](ts.variabledeclaration.md#pos)
* [symbol](ts.variabledeclaration.md#symbol)
* [type](ts.variabledeclaration.md#type)

## Properties

### _declarationBrand: any

* Inherited from [Declaration](ts.declaration.md).[_declarationBrand](ts.declaration.md#_declarationbrand)
* Defined in [lib/typescript/tsc.d.ts:392](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L392)


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


### Optional initializer: [Expression](ts.expression.md)

* Defined in [lib/typescript/tsc.d.ts:415](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L415)


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


### name: [Identifier](ts.identifier.md) | [BindingPattern](ts.bindingpattern.md)

* Overwrites [Declaration](ts.declaration.md).[name](ts.declaration.md#name)
* Defined in [lib/typescript/tsc.d.ts:413](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L413)


### Optional nextContainer: [Node](ts.node.md)

* Inherited from [Node](ts.node.md).[nextContainer](ts.node.md#nextcontainer)
* Defined in [lib/typescript/tsc.d.ts:372](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L372)


### Optional parent: [VariableDeclarationList](ts.variabledeclarationlist.md)

* Overwrites [Node](ts.node.md).[parent](ts.node.md#parent)
* Defined in [lib/typescript/tsc.d.ts:412](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L412)


### Optional parserContextFlags: [ParserContextFlags](../enums/ts.parsercontextflags.md)

* Inherited from [Node](ts.node.md).[parserContextFlags](ts.node.md#parsercontextflags)
* Defined in [lib/typescript/tsc.d.ts:364](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L364)


### pos: number

* Inherited from [TextRange](ts.textrange.md).[pos](ts.textrange.md#pos)
* Defined in [lib/typescript/tsc.d.ts:14](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L14)


### Optional symbol: [Symbol](ts.symbol.md)

* Inherited from [Node](ts.node.md).[symbol](ts.node.md#symbol)
* Defined in [lib/typescript/tsc.d.ts:370](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L370)


### Optional type: [TypeNode](ts.typenode.md)

* Defined in [lib/typescript/tsc.d.ts:414](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L414)



Generated using [TypeDoc](http://typedoc.io)
