# Interface JSDocRecordType


### Extends
* [JSDocType](ts.jsdoctype.md)
* [TypeLiteralNode](ts.typeliteralnode.md)

## Index

### Properties
* [_declarationBrand](ts.jsdocrecordtype.md#_declarationbrand)
* [_jsDocTypeBrand](ts.jsdocrecordtype.md#_jsdoctypebrand)
* [_typeNodeBrand](ts.jsdocrecordtype.md#_typenodebrand)
* [decorators](ts.jsdocrecordtype.md#decorators)
* [end](ts.jsdocrecordtype.md#end)
* [flags](ts.jsdocrecordtype.md#flags)
* [id](ts.jsdocrecordtype.md#id)
* [jsDocComment](ts.jsdocrecordtype.md#jsdoccomment)
* [kind](ts.jsdocrecordtype.md#kind)
* [localSymbol](ts.jsdocrecordtype.md#localsymbol)
* [locals](ts.jsdocrecordtype.md#locals)
* [members](ts.jsdocrecordtype.md#members)
* [modifiers](ts.jsdocrecordtype.md#modifiers)
* [name](ts.jsdocrecordtype.md#name)
* [nextContainer](ts.jsdocrecordtype.md#nextcontainer)
* [parent](ts.jsdocrecordtype.md#parent)
* [parserContextFlags](ts.jsdocrecordtype.md#parsercontextflags)
* [pos](ts.jsdocrecordtype.md#pos)
* [symbol](ts.jsdocrecordtype.md#symbol)

## Properties

### _declarationBrand: any

* Inherited from [Declaration](ts.declaration.md).[_declarationBrand](ts.declaration.md#_declarationbrand)
* Defined in [lib/typescript/tsc.d.ts:392](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L392)


### _jsDocTypeBrand: any

* Inherited from [JSDocType](ts.jsdoctype.md).[_jsDocTypeBrand](ts.jsdoctype.md#_jsdoctypebrand)
* Defined in [lib/typescript/tsc.d.ts:851](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L851)


### _typeNodeBrand: any

* Inherited from [TypeNode](ts.typenode.md).[_typeNodeBrand](ts.typenode.md#_typenodebrand)
* Overwrites [TypeNode](ts.typenode.md).[_typeNodeBrand](ts.typenode.md#_typenodebrand)
* Defined in [lib/typescript/tsc.d.ts:490](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L490)


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


### members: [NodeArray](ts.nodearray.md)<[JSDocRecordMember](ts.jsdocrecordmember.md)>

* Overwrites [TypeLiteralNode](ts.typeliteralnode.md).[members](ts.typeliteralnode.md#members)
* Defined in [lib/typescript/tsc.d.ts:875](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L875)


### Optional modifiers: [ModifiersArray](ts.modifiersarray.md)

* Inherited from [Node](ts.node.md).[modifiers](ts.node.md#modifiers)
* Overwrites [Node](ts.node.md).[modifiers](ts.node.md#modifiers)
* Defined in [lib/typescript/tsc.d.ts:366](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L366)


### Optional name: [DeclarationName](../modules/ts.md#declarationname)

* Inherited from [Declaration](ts.declaration.md).[name](ts.declaration.md#name)
* Defined in [lib/typescript/tsc.d.ts:393](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L393)


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



Generated using [TypeDoc](http://typedoc.io)
