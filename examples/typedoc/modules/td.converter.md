# Module converter


## Index

### Classes
* [BasePath](../classes/td.converter.basepath.md)
* [CommentPlugin](../classes/td.converter.commentplugin.md)
* [Context](../classes/td.converter.context.md)
* [Converter](../classes/td.converter.converter.md)
* [ConverterPlugin](../classes/td.converter.converterplugin.md)
* [DecoratorPlugin](../classes/td.converter.decoratorplugin.md)
* [DeepCommentPlugin](../classes/td.converter.deepcommentplugin.md)
* [DynamicModulePlugin](../classes/td.converter.dynamicmoduleplugin.md)
* [GitHubPlugin](../classes/td.converter.githubplugin.md)
* [GroupPlugin](../classes/td.converter.groupplugin.md)
* [ImplementsPlugin](../classes/td.converter.implementsplugin.md)
* [PackagePlugin](../classes/td.converter.packageplugin.md)
* [Repository](../classes/td.converter.repository.md)
* [SourcePlugin](../classes/td.converter.sourceplugin.md)
* [TypePlugin](../classes/td.converter.typeplugin.md)

### Interfaces
* [IConverterCallback](../interfaces/td.converter.iconvertercallback.md)
* [IConverterNodeCallback](../interfaces/td.converter.iconverternodecallback.md)
* [IConverterResolveCallback](../interfaces/td.converter.iconverterresolvecallback.md)
* [IConverterResult](../interfaces/td.converter.iconverterresult.md)
* [IModuleComment](../interfaces/td.converter.imodulecomment.md)

### Variables
* [nonStaticKinds](td.converter.md#nonstatickinds)

### Functions
* [convertArrayTypeNode](td.converter.md#convertarraytypenode)
* [convertDestructuringType](td.converter.md#convertdestructuringtype)
* [convertEnumType](td.converter.md#convertenumtype)
* [convertIntrinsicType](td.converter.md#convertintrinsictype)
* [convertStringLiteralExpression](td.converter.md#convertstringliteralexpression)
* [convertStringLiteralType](td.converter.md#convertstringliteraltype)
* [convertTupleType](td.converter.md#converttupletype)
* [convertTupleTypeNode](td.converter.md#converttupletypenode)
* [convertType](td.converter.md#converttype)
* [convertTypeAliasNode](td.converter.md#converttypealiasnode)
* [convertTypeLiteral](td.converter.md#converttypeliteral)
* [convertTypeParameterNode](td.converter.md#converttypeparameternode)
* [convertTypeReferenceNode](td.converter.md#converttypereferencenode)
* [convertTypeReferenceType](td.converter.md#converttypereferencetype)
* [convertUnionType](td.converter.md#convertuniontype)
* [convertUnionTypeNode](td.converter.md#convertuniontypenode)
* [convertUnknownType](td.converter.md#convertunknowntype)
* [createDeclaration](td.converter.md#createdeclaration)
* [createParameter](td.converter.md#createparameter)
* [createReferenceType](td.converter.md#createreferencetype)
* [createSignature](td.converter.md#createsignature)
* [createTypeParameter](td.converter.md#createtypeparameter)
* [extractSignatureType](td.converter.md#extractsignaturetype)
* [getDefaultValue](td.converter.md#getdefaultvalue)
* [isSimpleObjectLiteral](td.converter.md#issimpleobjectliteral)
* [isTypeAlias](td.converter.md#istypealias)
* [mergeDeclarations](td.converter.md#mergedeclarations)
* [setupDeclaration](td.converter.md#setupdeclaration)
* [visit](td.converter.md#visit)
* [visitBindingPattern](td.converter.md#visitbindingpattern)
* [visitBlock](td.converter.md#visitblock)
* [visitCallSignatureDeclaration](td.converter.md#visitcallsignaturedeclaration)
* [visitClassDeclaration](td.converter.md#visitclassdeclaration)
* [visitConstructor](td.converter.md#visitconstructor)
* [visitConstructorModifiers](td.converter.md#visitconstructormodifiers)
* [visitEnumDeclaration](td.converter.md#visitenumdeclaration)
* [visitEnumMember](td.converter.md#visitenummember)
* [visitExportAssignment](td.converter.md#visitexportassignment)
* [visitFunctionDeclaration](td.converter.md#visitfunctiondeclaration)
* [visitGetAccessorDeclaration](td.converter.md#visitgetaccessordeclaration)
* [visitIndexSignatureDeclaration](td.converter.md#visitindexsignaturedeclaration)
* [visitInterfaceDeclaration](td.converter.md#visitinterfacedeclaration)
* [visitModuleDeclaration](td.converter.md#visitmoduledeclaration)
* [visitObjectLiteral](td.converter.md#visitobjectliteral)
* [visitSetAccessorDeclaration](td.converter.md#visitsetaccessordeclaration)
* [visitSourceFile](td.converter.md#visitsourcefile)
* [visitTypeAliasDeclaration](td.converter.md#visittypealiasdeclaration)
* [visitTypeLiteral](td.converter.md#visittypeliteral)
* [visitVariableDeclaration](td.converter.md#visitvariabledeclaration)
* [visitVariableStatement](td.converter.md#visitvariablestatement)

## Variables

### nonStaticKinds: Array<[ReflectionKind](../enums/td.models.reflectionkind.md)>
List of reflection kinds that never should be static.
* Defined in [td/converter/converters/factories.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/factories.ts#L8)


## Functions

### convertArrayTypeNode(context: [Context](../classes/td.converter.context.md), node: [ArrayTypeNode](../interfaces/ts.arraytypenode.md)): [Type](../classes/td.models.type.md)
Convert the given array type node to its type reflection.This is a node based converter with no type equivalent.```var someValue:number[];```  
* Defined in [td/converter/converters/convertType.ts:194](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L194)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [ArrayTypeNode](../interfaces/ts.arraytypenode.md)| The array type node that should be converted. |

#### Returns: [Type](../classes/td.models.type.md)
The type reflection representing the given array type node.


### convertDestructuringType(context: [Context](../classes/td.converter.context.md), node: [BindingPattern](../interfaces/ts.bindingpattern.md)): [Type](../classes/td.models.type.md)
Convert the given binding pattern to its type reflection.  
* Defined in [td/converter/converters/convertType.ts:483](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L483)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [BindingPattern](../interfaces/ts.bindingpattern.md)| The binding pattern that should be converted. |

#### Returns: [Type](../classes/td.models.type.md)
The type reflection representing the given binding pattern.


### convertEnumType(context: [Context](../classes/td.converter.context.md), type: [Type](../interfaces/ts.type.md)): [Type](../classes/td.models.type.md)
Convert the given enumeration type to its type reflection.This is a type based converter with no node based equivalent.```enum MyEnum { One, Two, Three }var someValue:MyEnum;```  
* Defined in [td/converter/converters/convertType.ts:391](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L391)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| type | [Type](../interfaces/ts.type.md)| The enumeration type that should be converted. |

#### Returns: [Type](../classes/td.models.type.md)
The type reflection representing the given enumeration type.


### convertIntrinsicType(type: [IntrinsicType](../interfaces/ts.intrinsictype.md)): [IntrinsicType](../classes/td.models.intrinsictype.md)
Convert the given intrinsic type to its type reflection.This is a type based converter with no node based equivalent.```var someValue:string;```  
* Defined in [td/converter/converters/convertType.ts:336](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L336)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [IntrinsicType](../interfaces/ts.intrinsictype.md)| The intrinsic type that should be converted. |

#### Returns: [IntrinsicType](../classes/td.models.intrinsictype.md)
The type reflection representing the given intrinsic type.


### convertStringLiteralExpression(node: [StringLiteral](../interfaces/ts.stringliteral.md)): [StringLiteralType](../classes/td.models.stringliteraltype.md)
Convert the given string literal expression node to its type reflection.This is a node based converter, see [[convertStringLiteralType]] for the type equivalent.```createElement(tagName:"a"):HTMLAnchorElement;```  
* Defined in [td/converter/converters/convertType.ts:176](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L176)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [StringLiteral](../interfaces/ts.stringliteral.md)| The string literal node that should be converted. |

#### Returns: [StringLiteralType](../classes/td.models.stringliteraltype.md)
The type reflection representing the given string literal node.


### convertStringLiteralType(type: [StringLiteralType](../interfaces/ts.stringliteraltype.md)): [StringLiteralType](../classes/td.models.stringliteraltype.md)
Convert the given string literal type to its type reflection.This is a type based converter, see [[convertStringLiteralExpression]] for the node equivalent.```createElement(tagName:"a"):HTMLAnchorElement;```  
* Defined in [td/converter/converters/convertType.ts:353](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L353)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| type | [StringLiteralType](../interfaces/ts.stringliteraltype.md)| The intrinsic type that should be converted. |

#### Returns: [StringLiteralType](../classes/td.models.stringliteraltype.md)
The type reflection representing the given string literal type.


### convertTupleType(context: [Context](../classes/td.converter.context.md), type: [TupleType](../interfaces/ts.tupletype.md)): [TupleType](../classes/td.models.tupletype.md)
Convert the given tuple type to its type reflection.This is a type based converter, see [[convertTupleTypeNode]] for the node equivalent.```var someValue:[string,number];```  
* Defined in [td/converter/converters/convertType.ts:409](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L409)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| type | [TupleType](../interfaces/ts.tupletype.md)| The tuple type that should be converted. |

#### Returns: [TupleType](../classes/td.models.tupletype.md)
The type reflection representing the given tuple type.


### convertTupleTypeNode(context: [Context](../classes/td.converter.context.md), node: [TupleTypeNode](../interfaces/ts.tupletypenode.md)): [TupleType](../classes/td.models.tupletype.md)
Convert the given tuple type node to its type reflection.This is a node based converter, see [[convertTupleType]] for the type equivalent.```var someValue:[string,number];```  
* Defined in [td/converter/converters/convertType.ts:219](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L219)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [TupleTypeNode](../interfaces/ts.tupletypenode.md)| The tuple type node that should be converted. |

#### Returns: [TupleType](../classes/td.models.tupletype.md)
The type reflection representing the given tuple type node.


### convertType(context: [Context](../classes/td.converter.context.md), node?: [Node](../interfaces/ts.node.md), type?: [Type](../interfaces/ts.type.md)): [Type](../classes/td.models.type.md)
Convert the given TypeScript type into its TypeDoc type reflection.  
* Defined in [td/converter/converters/convertType.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L11)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node? | [Node](../interfaces/ts.node.md)| The node whose type should be reflected. |
| type? | [Type](../interfaces/ts.type.md)| The type of the node if already known. |

#### Returns: [Type](../classes/td.models.type.md)
The TypeDoc type reflection representing the given node and type.


### convertTypeAliasNode(node: [TypeReferenceNode](../interfaces/ts.typereferencenode.md)): [ReferenceType](../classes/td.models.referencetype.md)
Create a reflection for the given type alias node.This is a node based converter with no type equivalent.Use [[isTypeAlias]] beforehand to test whether a given type/node combination ispointing to a type alias.```type MyNumber = number;var someValue:MyNumber;```  
* Defined in [td/converter/converters/convertType.ts:158](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L158)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [TypeReferenceNode](../interfaces/ts.typereferencenode.md)| The node whose type should be reflected. |

#### Returns: [ReferenceType](../classes/td.models.referencetype.md)
A type reference pointing to the type alias definition.


### convertTypeLiteral(context: [Context](../classes/td.converter.context.md), symbol: [Symbol](../interfaces/ts.symbol.md), node?: [Node](../interfaces/ts.node.md)): [ReflectionType](../classes/td.models.reflectiontype.md)
Create a type literal reflection.This is a utility function used by [[convertTypeReferenceNode]] and[[convertTypeReferenceType]] when encountering an object or type literal.A type literal is explicitly set:```var someValue:{a:string; b:number;};```An object literal types are usually reflected by the TypeScript compiler:```function someFunction() { return {a:'Test', b:1024}; }```  
* Defined in [td/converter/converters/convertType.ts:117](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L117)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| symbol | [Symbol](../interfaces/ts.symbol.md)| The symbol describing the type literal. |
| node? | [Node](../interfaces/ts.node.md)| If known the node which produced the type literal. Type literals that areimplicitly generated by TypeScript won't have a corresponding node. |

#### Returns: [ReflectionType](../classes/td.models.reflectiontype.md)
A type reflection representing the given type literal.


### convertTypeParameterNode(context: [Context](../classes/td.converter.context.md), node: [TypeReferenceNode](../interfaces/ts.typereferencenode.md)): [Type](../classes/td.models.type.md)
Interpret the given type reference node as a type parameter and convert it to its type reflection.This is a node based converter with no type equivalent.```class SomeClass<T> {public someValue:T;}```  
* Defined in [td/converter/converters/convertType.ts:271](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L271)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [TypeReferenceNode](../interfaces/ts.typereferencenode.md)| The type reference node representing a type parameter. |

#### Returns: [Type](../classes/td.models.type.md)
The type reflection representing the given type parameter.


### convertTypeReferenceNode(context: [Context](../classes/td.converter.context.md), node: [TypeReferenceNode](../interfaces/ts.typereferencenode.md), type: [TypeReference](../interfaces/ts.typereference.md)): [Type](../classes/td.models.type.md)
Convert the type reference node to its type reflection.This is a node based converter, see [[convertTypeReferenceType]] for the type equivalent.```class SomeClass { }var someValue:SomeClass;```  
* Defined in [td/converter/converters/convertType.ts:301](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L301)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [TypeReferenceNode](../interfaces/ts.typereferencenode.md)| The type reference node that should be converted. |
| type | [TypeReference](../interfaces/ts.typereference.md)| The type of the type reference node. |

#### Returns: [Type](../classes/td.models.type.md)
The type reflection representing the given reference node.


### convertTypeReferenceType(context: [Context](../classes/td.converter.context.md), type: [TypeReference](../interfaces/ts.typereference.md)): [Type](../classes/td.models.type.md)
Convert the given type reference to its type reflection.This is a type based converter, see [[convertTypeReference]] for the node equivalent.```class SomeClass { }var someValue:SomeClass;```  
* Defined in [td/converter/converters/convertType.ts:460](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L460)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| type | [TypeReference](../interfaces/ts.typereference.md)| The type reference that should be converted. |

#### Returns: [Type](../classes/td.models.type.md)
The type reflection representing the given type reference.


### convertUnionType(context: [Context](../classes/td.converter.context.md), type: [UnionType](../interfaces/ts.uniontype.md)): [UnionType](../classes/td.models.uniontype.md)
Convert the given union type to its type reflection.This is a type based converter, see [[convertUnionTypeNode]] for the node equivalent.```var someValue:string|number;```  
* Defined in [td/converter/converters/convertType.ts:434](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L434)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| type | [UnionType](../interfaces/ts.uniontype.md)| The union type that should be converted. |

#### Returns: [UnionType](../classes/td.models.uniontype.md)
The type reflection representing the given union type.


### convertUnionTypeNode(context: [Context](../classes/td.converter.context.md), node: [UnionTypeNode](../interfaces/ts.uniontypenode.md)): [UnionType](../classes/td.models.uniontype.md)
Convert the given union type node to its type reflection.This is a node based converter, see [[convertUnionType]] for the type equivalent.```var someValue:string|number;```  
* Defined in [td/converter/converters/convertType.ts:244](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L244)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [UnionTypeNode](../interfaces/ts.uniontypenode.md)| The union type node that should be converted. |

#### Returns: [UnionType](../classes/td.models.uniontype.md)
The type reflection representing the given union type node.


### convertUnknownType(context: [Context](../classes/td.converter.context.md), type: [Type](../interfaces/ts.type.md)): [Type](../classes/td.models.type.md)
Convert the given type to its type reflection.This is a type based converter with no node based equivalent.If no other converter is able to reflect a type, this converter will produce areflection by utilising ts.typeToString() to generate a string representation of thegiven type.  
* Defined in [td/converter/converters/convertType.ts:371](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L371)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| type | [Type](../interfaces/ts.type.md)| The type that should be converted. |

#### Returns: [Type](../classes/td.models.type.md)
The type reflection representing the given type.


### createDeclaration(context: [Context](../classes/td.converter.context.md), node: [Node](../interfaces/ts.node.md), kind: [ReflectionKind](../enums/td.models.reflectionkind.md), name?: string): [DeclarationReflection](../classes/td.models.declarationreflection.md)
Create a declaration reflection from the given TypeScript node.  
* Defined in [td/converter/converters/factories.ts:24](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/factories.ts#L24)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. Thescope of the context will be the parent of the generated reflection. |
| node | [Node](../interfaces/ts.node.md)| The TypeScript node that should be converted to a reflection. |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The desired kind of the reflection. |
| name? | string| The desired name of the reflection. |

#### Returns: [DeclarationReflection](../classes/td.models.declarationreflection.md)
The resulting reflection.


### createParameter(context: [Context](../classes/td.converter.context.md), node: [ParameterDeclaration](../interfaces/ts.parameterdeclaration.md)): [ParameterReflection](../classes/td.models.parameterreflection.md)
Create a parameter reflection for the given node.  
* Defined in [td/converter/converters/factories.ts:263](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/factories.ts#L263)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [ParameterDeclaration](../interfaces/ts.parameterdeclaration.md)| The parameter node that should be reflected. |

#### Returns: [ParameterReflection](../classes/td.models.parameterreflection.md)
The newly created parameter reflection.


### createReferenceType(context: [Context](../classes/td.converter.context.md), symbol: [Symbol](../interfaces/ts.symbol.md), includeParent?: boolean): [ReferenceType](../classes/td.models.referencetype.md)
Create a new reference type pointing to the given symbol.  
* Defined in [td/converter/converters/factories.ts:185](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/factories.ts#L185)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| symbol | [Symbol](../interfaces/ts.symbol.md)| The symbol the reference type should point to. |
| includeParent? | boolean| Should the name of the parent be provided within the fallback name? |

#### Returns: [ReferenceType](../classes/td.models.referencetype.md)
A new reference type instance pointing to the given symbol.


### createSignature(context: [Context](../classes/td.converter.context.md), node: [SignatureDeclaration](../interfaces/ts.signaturedeclaration.md), name: string, kind: [ReflectionKind](../enums/td.models.reflectionkind.md)): [SignatureReflection](../classes/td.models.signaturereflection.md)
Create a new signature reflection from the given node.  
* Defined in [td/converter/converters/factories.ts:207](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/factories.ts#L207)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [SignatureDeclaration](../interfaces/ts.signaturedeclaration.md)| The TypeScript node containing the signature declaration that should be reflected. |
| name | string| The name of the function or method this signature belongs to. |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The desired kind of the reflection. |

#### Returns: [SignatureReflection](../classes/td.models.signaturereflection.md)
The newly created signature reflection describing the given node.


### createTypeParameter(context: [Context](../classes/td.converter.context.md), node: [TypeParameterDeclaration](../interfaces/ts.typeparameterdeclaration.md)): [TypeParameterType](../classes/td.models.typeparametertype.md)
Create a type parameter reflection for the given node.  
* Defined in [td/converter/converters/factories.ts:300](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/factories.ts#L300)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [TypeParameterDeclaration](../interfaces/ts.typeparameterdeclaration.md)| The type parameter node that should be reflected. |

#### Returns: [TypeParameterType](../classes/td.models.typeparametertype.md)
The newly created type parameter reflection.


### extractSignatureType(context: [Context](../classes/td.converter.context.md), node: [SignatureDeclaration](../interfaces/ts.signaturedeclaration.md)): [Type](../classes/td.models.type.md)
Extract the return type of the given signature declaration.  
* Defined in [td/converter/converters/factories.ts:239](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/factories.ts#L239)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [SignatureDeclaration](../interfaces/ts.signaturedeclaration.md)| The signature declaration whose return type should be determined. |

#### Returns: [Type](../classes/td.models.type.md)
The return type reflection of the given signature.


### getDefaultValue(node: [VariableDeclaration](../interfaces/ts.variabledeclaration.md)): stringgetDefaultValue(node: [ParameterDeclaration](../interfaces/ts.parameterdeclaration.md)): stringgetDefaultValue(node: [EnumMember](../interfaces/ts.enummember.md)): string
Return the default value of the given node.  
* Defined in [td/converter/converters/convertNode.ts:3](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L3)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [VariableDeclaration](../interfaces/ts.variabledeclaration.md)| The TypeScript node whose default value should be extracted. |

#### Returns: string
The default value as a string.

Return the default value of the given node.  
* Defined in [td/converter/converters/convertNode.ts:4](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L4)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [ParameterDeclaration](../interfaces/ts.parameterdeclaration.md)| The TypeScript node whose default value should be extracted. |

#### Returns: string
The default value as a string.

Return the default value of the given node.  
* Defined in [td/converter/converters/convertNode.ts:5](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L5)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [EnumMember](../interfaces/ts.enummember.md)| The TypeScript node whose default value should be extracted. |

#### Returns: string
The default value as a string.


### isSimpleObjectLiteral(objectLiteral: [ObjectLiteralExpression](../interfaces/ts.objectliteralexpression.md)): boolean
  
* Defined in [td/converter/converters/convertNode.ts:369](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L369)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| objectLiteral | [ObjectLiteralExpression](../interfaces/ts.objectliteralexpression.md)|  |

#### Returns: boolean

### isTypeAlias(context: [Context](../classes/td.converter.context.md), node: [TypeReferenceNode](../interfaces/ts.typereferencenode.md), type: [Type](../interfaces/ts.type.md)): boolean
Test whether the given node and type definitions represent a type alias.The compiler resolves type aliases pretty early and there is no field telling uswhether the given node was a type alias or not. So we have to compare the type name of thenode with the type name of the type symbol.  
* Defined in [td/converter/converters/convertType.ts:75](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertType.ts#L75)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [TypeReferenceNode](../interfaces/ts.typereferencenode.md)| The node that should be tested. |
| type | [Type](../interfaces/ts.type.md)| The type of the node that should be tested. |

#### Returns: boolean
TRUE when the given node and type look like a type alias, otherwise FALSE.


### mergeDeclarations(context: [Context](../classes/td.converter.context.md), reflection: [DeclarationReflection](../classes/td.models.declarationreflection.md), node: [Node](../interfaces/ts.node.md), kind: [ReflectionKind](../enums/td.models.reflectionkind.md)): [DeclarationReflection](../classes/td.models.declarationreflection.md)
Merge the properties of the given TypeScript node with the pre existent reflection.  
* Defined in [td/converter/converters/factories.ts:149](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/factories.ts#L149)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| reflection | [DeclarationReflection](../classes/td.models.declarationreflection.md)| The pre existent reflection. |
| node | [Node](../interfaces/ts.node.md)| The TypeScript node whose properties should be merged with the given reflection. |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The desired kind of the reflection. |

#### Returns: [DeclarationReflection](../classes/td.models.declarationreflection.md)
The reflection merged with the values of the given node or NULL if the merge is invalid.


### setupDeclaration(context: [Context](../classes/td.converter.context.md), reflection: [DeclarationReflection](../classes/td.models.declarationreflection.md), node: [Node](../interfaces/ts.node.md)): [DeclarationReflection](../classes/td.models.declarationreflection.md)
Setup a newly created declaration reflection.  
* Defined in [td/converter/converters/factories.ts:118](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/factories.ts#L118)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| reflection | [DeclarationReflection](../classes/td.models.declarationreflection.md)| The newly created blank reflection. |
| node | [Node](../interfaces/ts.node.md)| The TypeScript node whose properties should be applies to the given reflection. |

#### Returns: [DeclarationReflection](../classes/td.models.declarationreflection.md)
The reflection populated with the values of the given node.


### visit(context: [Context](../classes/td.converter.context.md), node: [Node](../interfaces/ts.node.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given node and create a suitable reflection.This function checks the kind of the node and delegates to the matching function implementation.  
* Defined in [td/converter/converters/convertNode.ts:45](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L45)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [Node](../interfaces/ts.node.md)| The compiler node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitBindingPattern(context: [Context](../classes/td.converter.context.md), node: [BindingPattern](../interfaces/ts.bindingpattern.md)): void
Traverse the elements of the given binding pattern and create the corresponding variable reflections.  
* Defined in [td/converter/converters/convertNode.ts:447](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L447)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [BindingPattern](../interfaces/ts.bindingpattern.md)| The binding pattern node that should be analyzed. |

#### Returns: void

### visitBlock(context: [Context](../classes/td.converter.context.md), node: [SourceFile](../interfaces/ts.sourcefile.md)): [Reflection](../classes/td.models.reflection.md)visitBlock(context: [Context](../classes/td.converter.context.md), node: [Block](../interfaces/ts.block.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given block node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:174](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L174)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [SourceFile](../interfaces/ts.sourcefile.md)| The source file node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.

  
* Defined in [td/converter/converters/convertNode.ts:175](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L175)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)|  |
| node | [Block](../interfaces/ts.block.md)|  |

#### Returns: [Reflection](../classes/td.models.reflection.md)

### visitCallSignatureDeclaration(context: [Context](../classes/td.converter.context.md), node: [SignatureDeclaration](../interfaces/ts.signaturedeclaration.md)): [Reflection](../classes/td.models.reflection.md)visitCallSignatureDeclaration(context: [Context](../classes/td.converter.context.md), node: [FunctionExpression](../interfaces/ts.functionexpression.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given call signature declaration node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:593](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L593)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [SignatureDeclaration](../interfaces/ts.signaturedeclaration.md)| The signature declaration node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.

  
* Defined in [td/converter/converters/convertNode.ts:594](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L594)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)|  |
| node | [FunctionExpression](../interfaces/ts.functionexpression.md)|  |

#### Returns: [Reflection](../classes/td.models.reflection.md)

### visitClassDeclaration(context: [Context](../classes/td.converter.context.md), node: [ClassDeclaration](../interfaces/ts.classdeclaration.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given class declaration node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:257](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L257)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [ClassDeclaration](../interfaces/ts.classdeclaration.md)| The class declaration node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitConstructor(context: [Context](../classes/td.converter.context.md), node: [ConstructorDeclaration](../interfaces/ts.constructordeclaration.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given constructor declaration node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:535](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L535)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [ConstructorDeclaration](../interfaces/ts.constructordeclaration.md)| The constructor declaration node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitConstructorModifiers(context: [Context](../classes/td.converter.context.md), node: [ConstructorDeclaration](../interfaces/ts.constructordeclaration.md)): void
Analyze parameters in given constructor declaration node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:503](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L503)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [ConstructorDeclaration](../interfaces/ts.constructordeclaration.md)| The constructor declaration node that should be analyzed. |

#### Returns: void
The resulting reflection or NULL.


### visitEnumDeclaration(context: [Context](../classes/td.converter.context.md), node: [EnumDeclaration](../interfaces/ts.enumdeclaration.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given enumeration declaration node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:464](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L464)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [EnumDeclaration](../interfaces/ts.enumdeclaration.md)| The enumeration declaration node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitEnumMember(context: [Context](../classes/td.converter.context.md), node: [EnumMember](../interfaces/ts.enummember.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given enumeration member node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:486](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L486)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [EnumMember](../interfaces/ts.enummember.md)| The enumeration member node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitExportAssignment(context: [Context](../classes/td.converter.context.md), node: [ExportAssignment](../interfaces/ts.exportassignment.md)): [Reflection](../classes/td.models.reflection.md)
  
* Defined in [td/converter/converters/convertNode.ts:712](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L712)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)|  |
| node | [ExportAssignment](../interfaces/ts.exportassignment.md)|  |

#### Returns: [Reflection](../classes/td.models.reflection.md)

### visitFunctionDeclaration(context: [Context](../classes/td.converter.context.md), node: [FunctionDeclaration](../interfaces/ts.functiondeclaration.md)): [Reflection](../classes/td.models.reflection.md)visitFunctionDeclaration(context: [Context](../classes/td.converter.context.md), node: [MethodDeclaration](../interfaces/ts.methoddeclaration.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given function declaration node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:564](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L564)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [FunctionDeclaration](../interfaces/ts.functiondeclaration.md)| The function declaration node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.

  
* Defined in [td/converter/converters/convertNode.ts:565](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L565)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)|  |
| node | [MethodDeclaration](../interfaces/ts.methoddeclaration.md)|  |

#### Returns: [Reflection](../classes/td.models.reflection.md)

### visitGetAccessorDeclaration(context: [Context](../classes/td.converter.context.md), node: [SignatureDeclaration](../interfaces/ts.signaturedeclaration.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given getter declaration node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:632](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L632)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [SignatureDeclaration](../interfaces/ts.signaturedeclaration.md)| The signature declaration node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitIndexSignatureDeclaration(context: [Context](../classes/td.converter.context.md), node: [SignatureDeclaration](../interfaces/ts.signaturedeclaration.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given index signature declaration node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:615](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L615)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [SignatureDeclaration](../interfaces/ts.signaturedeclaration.md)| The signature declaration node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitInterfaceDeclaration(context: [Context](../classes/td.converter.context.md), node: [InterfaceDeclaration](../interfaces/ts.interfacedeclaration.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given interface declaration node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:310](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L310)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [InterfaceDeclaration](../interfaces/ts.interfacedeclaration.md)| The interface declaration node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitModuleDeclaration(context: [Context](../classes/td.converter.context.md), node: [ModuleDeclaration](../interfaces/ts.moduledeclaration.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given module node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:230](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L230)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [ModuleDeclaration](../interfaces/ts.moduledeclaration.md)| The module node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitObjectLiteral(context: [Context](../classes/td.converter.context.md), node: [ObjectLiteralExpression](../interfaces/ts.objectliteralexpression.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given object literal node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:666](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L666)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [ObjectLiteralExpression](../interfaces/ts.objectliteralexpression.md)| The object literal node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitSetAccessorDeclaration(context: [Context](../classes/td.converter.context.md), node: [SignatureDeclaration](../interfaces/ts.signaturedeclaration.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given setter declaration node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:649](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L649)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [SignatureDeclaration](../interfaces/ts.signaturedeclaration.md)| The signature declaration node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitSourceFile(context: [Context](../classes/td.converter.context.md), node: [SourceFile](../interfaces/ts.sourcefile.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given source file node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:204](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L204)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [SourceFile](../interfaces/ts.sourcefile.md)| The source file node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitTypeAliasDeclaration(context: [Context](../classes/td.converter.context.md), node: [TypeAliasDeclaration](../interfaces/ts.typealiasdeclaration.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given type alias declaration node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:702](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L702)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [TypeAliasDeclaration](../interfaces/ts.typealiasdeclaration.md)| The type alias declaration node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitTypeLiteral(context: [Context](../classes/td.converter.context.md), node: [TypeLiteralNode](../interfaces/ts.typeliteralnode.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given type literal node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:684](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L684)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [TypeLiteralNode](../interfaces/ts.typeliteralnode.md)| The type literal node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitVariableDeclaration(context: [Context](../classes/td.converter.context.md), node: [VariableDeclaration](../interfaces/ts.variabledeclaration.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given variable declaration node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:382](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L382)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [VariableDeclaration](../interfaces/ts.variabledeclaration.md)| The variable declaration node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.


### visitVariableStatement(context: [Context](../classes/td.converter.context.md), node: [VariableStatement](../interfaces/ts.variablestatement.md)): [Reflection](../classes/td.models.reflection.md)
Analyze the given variable statement node and create a suitable reflection.  
* Defined in [td/converter/converters/convertNode.ts:354](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/converters/convertNode.ts#L354)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| node | [VariableStatement](../interfaces/ts.variablestatement.md)| The variable statement node that should be analyzed. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The resulting reflection or NULL.



Generated using [TypeDoc](http://typedoc.io)
