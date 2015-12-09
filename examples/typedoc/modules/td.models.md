# Module models
Holds all data models used by TypeDoc.The [[BaseReflection]] is base class of all reflection models. The subclass [[ProjectReflection]]serves as the root container for the current project while [[DeclarationReflection]] instancesform the structure of the project. Most of the other classes in this namespace are referenced by thistwo base classes.The models [[NavigationItem]] and [[UrlMapping]] are special as they are only used by the [[Renderer]]while creating the final output.

## Index

### Enumerations
* [ReflectionFlag](../enums/td.models.reflectionflag.md)
* [ReflectionKind](../enums/td.models.reflectionkind.md)
* [TraverseProperty](../enums/td.models.traverseproperty.md)

### Classes
* [Comment](../classes/td.models.comment.md)
* [CommentTag](../classes/td.models.commenttag.md)
* [ContainerReflection](../classes/td.models.containerreflection.md)
* [DeclarationReflection](../classes/td.models.declarationreflection.md)
* [IntrinsicType](../classes/td.models.intrinsictype.md)
* [ParameterReflection](../classes/td.models.parameterreflection.md)
* [ProjectReflection](../classes/td.models.projectreflection.md)
* [ReferenceType](../classes/td.models.referencetype.md)
* [Reflection](../classes/td.models.reflection.md)
* [ReflectionGroup](../classes/td.models.reflectiongroup.md)
* [ReflectionType](../classes/td.models.reflectiontype.md)
* [SignatureReflection](../classes/td.models.signaturereflection.md)
* [SourceDirectory](../classes/td.models.sourcedirectory.md)
* [SourceFile](../classes/td.models.sourcefile.md)
* [StringLiteralType](../classes/td.models.stringliteraltype.md)
* [TupleType](../classes/td.models.tupletype.md)
* [Type](../classes/td.models.type.md)
* [TypeParameterReflection](../classes/td.models.typeparameterreflection.md)
* [TypeParameterType](../classes/td.models.typeparametertype.md)
* [UnionType](../classes/td.models.uniontype.md)
* [UnknownType](../classes/td.models.unknowntype.md)

### Interfaces
* [IDeclarationHierarchy](../interfaces/td.models.ideclarationhierarchy.md)
* [IDecorator](../interfaces/td.models.idecorator.md)
* [IDefaultValueContainer](../interfaces/td.models.idefaultvaluecontainer.md)
* [IReflectionFlags](../interfaces/td.models.ireflectionflags.md)
* [ISourceReference](../interfaces/td.models.isourcereference.md)
* [ITraverseCallback](../interfaces/td.models.itraversecallback.md)
* [ITypeContainer](../interfaces/td.models.itypecontainer.md)
* [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md)

### Variables
* [REFLECTION_ID](td.models.md#reflection_id)
* [relevantFlags](td.models.md#relevantflags)

### Functions
* [resetReflectionID](td.models.md#resetreflectionid)

## Variables

### REFLECTION_ID: number
Current reflection id.
* Defined in [td/models/Reflection.ts:17](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L17)


### relevantFlags: [ReflectionFlag](../enums/td.models.reflectionflag.md)[]

* Defined in [td/models/Reflection.ts:82](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L82)


## Functions

### resetReflectionID(): void
Reset the reflection id.Used by the test cases to ensure the reflection ids won't change between runs.  
* Defined in [td/models/Reflection.ts:24](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L24)

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
