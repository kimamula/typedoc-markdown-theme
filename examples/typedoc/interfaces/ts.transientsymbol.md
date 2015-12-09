# Interface TransientSymbol


### Extends
* [Symbol](ts.symbol.md)
* [SymbolLinks](ts.symbollinks.md)

## Index

### Properties
* [constEnumOnlyModule](ts.transientsymbol.md#constenumonlymodule)
* [containingType](ts.transientsymbol.md#containingtype)
* [declarations](ts.transientsymbol.md#declarations)
* [declaredType](ts.transientsymbol.md#declaredtype)
* [exportSymbol](ts.transientsymbol.md#exportsymbol)
* [exports](ts.transientsymbol.md#exports)
* [exportsChecked](ts.transientsymbol.md#exportschecked)
* [flags](ts.transientsymbol.md#flags)
* [id](ts.transientsymbol.md#id)
* [instantiations](ts.transientsymbol.md#instantiations)
* [isNestedRedeclaration](ts.transientsymbol.md#isnestedredeclaration)
* [mapper](ts.transientsymbol.md#mapper)
* [members](ts.transientsymbol.md#members)
* [mergeId](ts.transientsymbol.md#mergeid)
* [name](ts.transientsymbol.md#name)
* [parent](ts.transientsymbol.md#parent)
* [referenced](ts.transientsymbol.md#referenced)
* [resolvedExports](ts.transientsymbol.md#resolvedexports)
* [target](ts.transientsymbol.md#target)
* [type](ts.transientsymbol.md#type)
* [typeParameters](ts.transientsymbol.md#typeparameters)
* [valueDeclaration](ts.transientsymbol.md#valuedeclaration)

## Properties

### Optional constEnumOnlyModule: boolean

* Inherited from [Symbol](ts.symbol.md).[constEnumOnlyModule](ts.symbol.md#constenumonlymodule)
* Defined in [lib/typescript/tsc.d.ts:1237](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1237)


### Optional containingType: [UnionOrIntersectionType](ts.unionorintersectiontype.md)

* Inherited from [SymbolLinks](ts.symbollinks.md).[containingType](ts.symbollinks.md#containingtype)
* Defined in [lib/typescript/tsc.d.ts:1247](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1247)


### Optional declarations: [Declaration](ts.declaration.md)[]

* Inherited from [Symbol](ts.symbol.md).[declarations](ts.symbol.md#declarations)
* Defined in [lib/typescript/tsc.d.ts:1229](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1229)


### Optional declaredType: [Type](ts.type.md)

* Inherited from [SymbolLinks](ts.symbollinks.md).[declaredType](ts.symbollinks.md#declaredtype)
* Defined in [lib/typescript/tsc.d.ts:1242](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1242)


### Optional exportSymbol: [Symbol](ts.symbol.md)

* Inherited from [Symbol](ts.symbol.md).[exportSymbol](ts.symbol.md#exportsymbol)
* Defined in [lib/typescript/tsc.d.ts:1236](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1236)


### Optional exports: [SymbolTable](ts.symboltable.md)

* Inherited from [Symbol](ts.symbol.md).[exports](ts.symbol.md#exports)
* Defined in [lib/typescript/tsc.d.ts:1232](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1232)


### Optional exportsChecked: boolean

* Inherited from [SymbolLinks](ts.symbollinks.md).[exportsChecked](ts.symbollinks.md#exportschecked)
* Defined in [lib/typescript/tsc.d.ts:1249](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1249)


### flags: [SymbolFlags](../enums/ts.symbolflags.md)

* Inherited from [Symbol](ts.symbol.md).[flags](ts.symbol.md#flags)
* Defined in [lib/typescript/tsc.d.ts:1227](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1227)


### Optional id: number

* Inherited from [Symbol](ts.symbol.md).[id](ts.symbol.md#id)
* Defined in [lib/typescript/tsc.d.ts:1233](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1233)


### Optional instantiations: [Map](ts.map.md)<[Type](ts.type.md)>

* Inherited from [SymbolLinks](ts.symbollinks.md).[instantiations](ts.symbollinks.md#instantiations)
* Defined in [lib/typescript/tsc.d.ts:1244](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1244)


### Optional isNestedRedeclaration: boolean

* Inherited from [SymbolLinks](ts.symbollinks.md).[isNestedRedeclaration](ts.symbollinks.md#isnestedredeclaration)
* Defined in [lib/typescript/tsc.d.ts:1250](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1250)


### Optional mapper: [TypeMapper](ts.typemapper.md)

* Inherited from [SymbolLinks](ts.symbollinks.md).[mapper](ts.symbollinks.md#mapper)
* Defined in [lib/typescript/tsc.d.ts:1245](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1245)


### Optional members: [SymbolTable](ts.symboltable.md)

* Inherited from [Symbol](ts.symbol.md).[members](ts.symbol.md#members)
* Defined in [lib/typescript/tsc.d.ts:1231](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1231)


### Optional mergeId: number

* Inherited from [Symbol](ts.symbol.md).[mergeId](ts.symbol.md#mergeid)
* Defined in [lib/typescript/tsc.d.ts:1234](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1234)


### name: string

* Inherited from [Symbol](ts.symbol.md).[name](ts.symbol.md#name)
* Defined in [lib/typescript/tsc.d.ts:1228](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1228)


### Optional parent: [Symbol](ts.symbol.md)

* Inherited from [Symbol](ts.symbol.md).[parent](ts.symbol.md#parent)
* Defined in [lib/typescript/tsc.d.ts:1235](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1235)


### Optional referenced: boolean

* Inherited from [SymbolLinks](ts.symbollinks.md).[referenced](ts.symbollinks.md#referenced)
* Defined in [lib/typescript/tsc.d.ts:1246](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1246)


### Optional resolvedExports: [SymbolTable](ts.symboltable.md)

* Inherited from [SymbolLinks](ts.symbollinks.md).[resolvedExports](ts.symbollinks.md#resolvedexports)
* Defined in [lib/typescript/tsc.d.ts:1248](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1248)


### Optional target: [Symbol](ts.symbol.md)

* Inherited from [SymbolLinks](ts.symbollinks.md).[target](ts.symbollinks.md#target)
* Defined in [lib/typescript/tsc.d.ts:1240](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1240)


### Optional type: [Type](ts.type.md)

* Inherited from [SymbolLinks](ts.symbollinks.md).[type](ts.symbollinks.md#type)
* Defined in [lib/typescript/tsc.d.ts:1241](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1241)


### Optional typeParameters: [TypeParameter](ts.typeparameter.md)[]

* Inherited from [SymbolLinks](ts.symbollinks.md).[typeParameters](ts.symbollinks.md#typeparameters)
* Defined in [lib/typescript/tsc.d.ts:1243](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1243)


### Optional valueDeclaration: [Declaration](ts.declaration.md)

* Inherited from [Symbol](ts.symbol.md).[valueDeclaration](ts.symbol.md#valuedeclaration)
* Defined in [lib/typescript/tsc.d.ts:1230](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1230)



Generated using [TypeDoc](http://typedoc.io)
