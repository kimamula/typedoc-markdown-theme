# Interface SourceFile


### Extends
* [Declaration](ts.declaration.md)

## Index

### Properties
* [_declarationBrand](ts.sourcefile.md#_declarationbrand)
* [amdDependencies](ts.sourcefile.md#amddependencies)
* [bindDiagnostics](ts.sourcefile.md#binddiagnostics)
* [classifiableNames](ts.sourcefile.md#classifiablenames)
* [decorators](ts.sourcefile.md#decorators)
* [end](ts.sourcefile.md#end)
* [endOfFileToken](ts.sourcefile.md#endoffiletoken)
* [externalModuleIndicator](ts.sourcefile.md#externalmoduleindicator)
* [fileName](ts.sourcefile.md#filename)
* [fileWatcher](ts.sourcefile.md#filewatcher)
* [flags](ts.sourcefile.md#flags)
* [hasNoDefaultLib](ts.sourcefile.md#hasnodefaultlib)
* [id](ts.sourcefile.md#id)
* [identifierCount](ts.sourcefile.md#identifiercount)
* [identifiers](ts.sourcefile.md#identifiers)
* [imports](ts.sourcefile.md#imports)
* [isDefaultLib](ts.sourcefile.md#isdefaultlib)
* [jsDocComment](ts.sourcefile.md#jsdoccomment)
* [kind](ts.sourcefile.md#kind)
* [languageVariant](ts.sourcefile.md#languagevariant)
* [languageVersion](ts.sourcefile.md#languageversion)
* [lineMap](ts.sourcefile.md#linemap)
* [localSymbol](ts.sourcefile.md#localsymbol)
* [locals](ts.sourcefile.md#locals)
* [modifiers](ts.sourcefile.md#modifiers)
* [moduleName](ts.sourcefile.md#modulename)
* [name](ts.sourcefile.md#name-1)
* [nextContainer](ts.sourcefile.md#nextcontainer)
* [nodeCount](ts.sourcefile.md#nodecount)
* [parent](ts.sourcefile.md#parent)
* [parseDiagnostics](ts.sourcefile.md#parsediagnostics)
* [parserContextFlags](ts.sourcefile.md#parsercontextflags)
* [pos](ts.sourcefile.md#pos)
* [referencedFiles](ts.sourcefile.md#referencedfiles)
* [renamedDependencies](ts.sourcefile.md#renameddependencies)
* [resolvedModules](ts.sourcefile.md#resolvedmodules)
* [statements](ts.sourcefile.md#statements)
* [symbol](ts.sourcefile.md#symbol)
* [symbolCount](ts.sourcefile.md#symbolcount)
* [text](ts.sourcefile.md#text)

## Properties

### _declarationBrand: any

* Inherited from [Declaration](ts.declaration.md).[_declarationBrand](ts.declaration.md#_declarationbrand)
* Defined in [lib/typescript/tsc.d.ts:392](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L392)


### amdDependencies: \{name: string, path: string\}[]

* Defined in [lib/typescript/tsc.d.ts:928](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L928)


### bindDiagnostics: [Diagnostic](ts.diagnostic.md)[]

* Defined in [lib/typescript/tsc.d.ts:945](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L945)


### Optional classifiableNames: [Map](ts.map.md)<string>

* Defined in [lib/typescript/tsc.d.ts:947](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L947)


### Optional decorators: [NodeArray](ts.nodearray.md)<[Decorator](ts.decorator.md)>

* Inherited from [Node](ts.node.md).[decorators](ts.node.md#decorators)
* Defined in [lib/typescript/tsc.d.ts:365](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L365)


### end: number

* Inherited from [TextRange](ts.textrange.md).[end](ts.textrange.md#end)
* Defined in [lib/typescript/tsc.d.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L15)


### endOfFileToken: [Node](ts.node.md)

* Defined in [lib/typescript/tsc.d.ts:925](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L925)


### externalModuleIndicator: [Node](ts.node.md)

* Defined in [lib/typescript/tsc.d.ts:938](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L938)


### fileName: string

* Defined in [lib/typescript/tsc.d.ts:926](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L926)


### Optional fileWatcher: [FileWatcher](ts.filewatcher.md)

* Defined in [lib/typescript/tsc.d.ts:5210](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L5210)


### flags: [NodeFlags](../enums/ts.nodeflags.md)

* Inherited from [Node](ts.node.md).[flags](ts.node.md#flags)
* Defined in [lib/typescript/tsc.d.ts:363](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L363)


### hasNoDefaultLib: boolean

* Defined in [lib/typescript/tsc.d.ts:936](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L936)


### Optional id: number

* Inherited from [Node](ts.node.md).[id](ts.node.md#id)
* Defined in [lib/typescript/tsc.d.ts:367](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L367)


### identifierCount: number

* Defined in [lib/typescript/tsc.d.ts:942](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L942)


### identifiers: [Map](ts.map.md)<string>

* Defined in [lib/typescript/tsc.d.ts:940](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L940)


### imports: [LiteralExpression](ts.literalexpression.md)[]

* Defined in [lib/typescript/tsc.d.ts:949](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L949)


### isDefaultLib: boolean

* Defined in [lib/typescript/tsc.d.ts:939](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L939)


### Optional jsDocComment: [JSDocComment](ts.jsdoccomment.md)

* Inherited from [Node](ts.node.md).[jsDocComment](ts.node.md#jsdoccomment)
* Defined in [lib/typescript/tsc.d.ts:369](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L369)


### kind: [SyntaxKind](../enums/ts.syntaxkind.md)

* Inherited from [Node](ts.node.md).[kind](ts.node.md#kind)
* Defined in [lib/typescript/tsc.d.ts:362](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L362)


### languageVariant: [LanguageVariant](../enums/ts.languagevariant.md)

* Defined in [lib/typescript/tsc.d.ts:934](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L934)


### languageVersion: [ScriptTarget](../enums/ts.scripttarget.md)

* Defined in [lib/typescript/tsc.d.ts:937](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L937)


### lineMap: number[]

* Defined in [lib/typescript/tsc.d.ts:946](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L946)


### Optional localSymbol: [Symbol](ts.symbol.md)

* Inherited from [Node](ts.node.md).[localSymbol](ts.node.md#localsymbol)
* Defined in [lib/typescript/tsc.d.ts:373](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L373)


### Optional locals: [SymbolTable](ts.symboltable.md)

* Inherited from [Node](ts.node.md).[locals](ts.node.md#locals)
* Defined in [lib/typescript/tsc.d.ts:371](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L371)


### Optional modifiers: [ModifiersArray](ts.modifiersarray.md)

* Inherited from [Node](ts.node.md).[modifiers](ts.node.md#modifiers)
* Defined in [lib/typescript/tsc.d.ts:366](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L366)


### moduleName: string

* Defined in [lib/typescript/tsc.d.ts:932](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L932)


### Optional name: [DeclarationName](../modules/ts.md#declarationname)

* Inherited from [Declaration](ts.declaration.md).[name](ts.declaration.md#name)
* Defined in [lib/typescript/tsc.d.ts:393](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L393)


### Optional nextContainer: [Node](ts.node.md)

* Inherited from [Node](ts.node.md).[nextContainer](ts.node.md#nextcontainer)
* Defined in [lib/typescript/tsc.d.ts:372](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L372)


### nodeCount: number

* Defined in [lib/typescript/tsc.d.ts:941](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L941)


### Optional parent: [Node](ts.node.md)

* Inherited from [Node](ts.node.md).[parent](ts.node.md#parent)
* Defined in [lib/typescript/tsc.d.ts:368](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L368)


### parseDiagnostics: [Diagnostic](ts.diagnostic.md)[]

* Defined in [lib/typescript/tsc.d.ts:944](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L944)


### Optional parserContextFlags: [ParserContextFlags](../enums/ts.parsercontextflags.md)

* Inherited from [Node](ts.node.md).[parserContextFlags](ts.node.md#parsercontextflags)
* Defined in [lib/typescript/tsc.d.ts:364](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L364)


### pos: number

* Inherited from [TextRange](ts.textrange.md).[pos](ts.textrange.md#pos)
* Defined in [lib/typescript/tsc.d.ts:14](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L14)


### referencedFiles: [FileReference](ts.filereference.md)[]

* Defined in [lib/typescript/tsc.d.ts:933](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L933)


### Optional renamedDependencies: [Map](ts.map.md)<string>

* Defined in [lib/typescript/tsc.d.ts:935](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L935)


### resolvedModules: [Map](ts.map.md)<string>

* Defined in [lib/typescript/tsc.d.ts:948](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L948)


### statements: [NodeArray](ts.nodearray.md)<[Statement](ts.statement.md)>

* Defined in [lib/typescript/tsc.d.ts:924](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L924)


### Optional symbol: [Symbol](ts.symbol.md)

* Inherited from [Node](ts.node.md).[symbol](ts.node.md#symbol)
* Defined in [lib/typescript/tsc.d.ts:370](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L370)


### symbolCount: number

* Defined in [lib/typescript/tsc.d.ts:943](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L943)


### text: string

* Defined in [lib/typescript/tsc.d.ts:927](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L927)



Generated using [TypeDoc](http://typedoc.io)
