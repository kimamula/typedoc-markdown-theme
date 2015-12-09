# Class DeclarationReflection
A reflection that represents a single declaration emitted by the TypeScript compiler.All parts of a project are represented by DeclarationReflection instances. The actualkind of a reflection is stored in its ´kind´ member.

### Extends
* [ContainerReflection](td.models.containerreflection.md)

### Implements
* [IDefaultValueContainer](../interfaces/td.models.idefaultvaluecontainer.md)
* [ITypeContainer](../interfaces/td.models.itypecontainer.md)
* [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md)

## Index

### Constructors
* [constructor](td.models.declarationreflection.md#constructor)

### Properties
* [anchor](td.models.declarationreflection.md#anchor)
* [children](td.models.declarationreflection.md#children)
* [comment](td.models.declarationreflection.md#comment)
* [cssClasses](td.models.declarationreflection.md#cssclasses)
* [decorates](td.models.declarationreflection.md#decorates)
* [decorators](td.models.declarationreflection.md#decorators)
* [defaultValue](td.models.declarationreflection.md#defaultvalue)
* [extendedBy](td.models.declarationreflection.md#extendedby)
* [extendedTypes](td.models.declarationreflection.md#extendedtypes)
* [flags](td.models.declarationreflection.md#flags)
* [getSignature](td.models.declarationreflection.md#getsignature)
* [groups](td.models.declarationreflection.md#groups)
* [hasOwnDocument](td.models.declarationreflection.md#hasowndocument)
* [id](td.models.declarationreflection.md#id)
* [implementationOf](td.models.declarationreflection.md#implementationof)
* [implementedBy](td.models.declarationreflection.md#implementedby)
* [implementedTypes](td.models.declarationreflection.md#implementedtypes)
* [indexSignature](td.models.declarationreflection.md#indexsignature)
* [inheritedFrom](td.models.declarationreflection.md#inheritedfrom)
* [kind](td.models.declarationreflection.md#kind)
* [kindString](td.models.declarationreflection.md#kindstring)
* [name](td.models.declarationreflection.md#name)
* [originalName](td.models.declarationreflection.md#originalname)
* [overwrites](td.models.declarationreflection.md#overwrites)
* [parent](td.models.declarationreflection.md#parent)
* [setSignature](td.models.declarationreflection.md#setsignature)
* [signatures](td.models.declarationreflection.md#signatures)
* [sources](td.models.declarationreflection.md#sources)
* [type](td.models.declarationreflection.md#type)
* [typeHierarchy](td.models.declarationreflection.md#typehierarchy)
* [typeParameters](td.models.declarationreflection.md#typeparameters)
* [url](td.models.declarationreflection.md#url)

### Methods
* [findReflectionByName](td.models.declarationreflection.md#findreflectionbyname)
* [getAlias](td.models.declarationreflection.md#getalias)
* [getAllSignatures](td.models.declarationreflection.md#getallsignatures)
* [getChildByName](td.models.declarationreflection.md#getchildbyname)
* [getChildrenByKind](td.models.declarationreflection.md#getchildrenbykind)
* [getFullName](td.models.declarationreflection.md#getfullname)
* [hasComment](td.models.declarationreflection.md#hascomment)
* [hasGetterOrSetter](td.models.declarationreflection.md#hasgetterorsetter)
* [kindOf](td.models.declarationreflection.md#kindof)
* [setFlag](td.models.declarationreflection.md#setflag)
* [toObject](td.models.declarationreflection.md#toobject)
* [toString](td.models.declarationreflection.md#tostring)
* [toStringHierarchy](td.models.declarationreflection.md#tostringhierarchy)
* [traverse](td.models.declarationreflection.md#traverse)

## Constructors

### new DeclarationReflection(parent?: [Reflection](td.models.reflection.md), name?: string, kind?: [ReflectionKind](../enums/td.models.reflectionkind.md)): [DeclarationReflection](td.models.declarationreflection.md)
Create a new BaseReflection instance.  
* Inherited from [Reflection](td.models.reflection.md).[constructor](td.models.reflection.md#constructor)
* Defined in [td/models/Reflection.ts:303](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L303)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| parent? | [Reflection](td.models.reflection.md)|  |
| name? | string|  |
| kind? | [ReflectionKind](../enums/td.models.reflectionkind.md)|  |

#### Returns: [DeclarationReflection](td.models.declarationreflection.md)

## Properties

### anchor: string
The name of the anchor of this child.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[anchor](../interfaces/td.models.itypeparametercontainer.md#anchor)
* Inherited from [Reflection](td.models.reflection.md).[anchor](td.models.reflection.md#anchor)
* Defined in [td/models/Reflection.ts:281](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L281)


### children: [DeclarationReflection](td.models.declarationreflection.md)[]
The children of this reflection.
* Inherited from [ContainerReflection](td.models.containerreflection.md).[children](td.models.containerreflection.md#children)
* Defined in [td/models/reflections/ContainerReflection.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ContainerReflection.ts#L8)


### comment: [Comment](td.models.comment.md)
The parsed documentation comment attached to this reflection.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[comment](../interfaces/td.models.itypeparametercontainer.md#comment)
* Inherited from [Reflection](td.models.reflection.md).[comment](td.models.reflection.md#comment)
* Defined in [td/models/Reflection.ts:256](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L256)


### cssClasses: string
A list of generated css classes that should be applied to representations of thisreflection in the generated markup.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[cssClasses](../interfaces/td.models.itypeparametercontainer.md#cssclasses)
* Inherited from [Reflection](td.models.reflection.md).[cssClasses](td.models.reflection.md#cssclasses)
* Defined in [td/models/Reflection.ts:294](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L294)


### decorates: [Type](td.models.type.md)[]
A list of all types that are decorated by this reflection.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[decorates](../interfaces/td.models.itypeparametercontainer.md#decorates)
* Inherited from [Reflection](td.models.reflection.md).[decorates](td.models.reflection.md#decorates)
* Defined in [td/models/Reflection.ts:271](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L271)


### decorators: [IDecorator](../interfaces/td.models.idecorator.md)[]
A list of all decorators attached to this reflection.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[decorators](../interfaces/td.models.itypeparametercontainer.md#decorators)
* Inherited from [Reflection](td.models.reflection.md).[decorators](td.models.reflection.md#decorators)
* Defined in [td/models/Reflection.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L266)


### defaultValue: string
The default value of this reflection.Applies to function parameters.
* Implementation of [IDefaultValueContainer](../interfaces/td.models.idefaultvaluecontainer.md).[defaultValue](../interfaces/td.models.idefaultvaluecontainer.md#defaultvalue)
* Defined in [td/models/reflections/DeclarationReflection.ts:104](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L104)


### extendedBy: [Type](td.models.type.md)[]
A list of all types that extend this reflection (e.g. the subclasses).
* Defined in [td/models/reflections/DeclarationReflection.ts:135](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L135)


### extendedTypes: [Type](td.models.type.md)[]
A list of all types this reflection extends (e.g. the parent classes).
* Defined in [td/models/reflections/DeclarationReflection.ts:130](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L130)


### flags: [IReflectionFlags](../interfaces/td.models.ireflectionflags.md)

* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[flags](../interfaces/td.models.itypeparametercontainer.md#flags)
* Inherited from [Reflection](td.models.reflection.md).[flags](td.models.reflection.md#flags)
* Defined in [td/models/Reflection.ts:246](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L246)


### getSignature: [SignatureReflection](td.models.signaturereflection.md)
The get signature of this declaration.
* Defined in [td/models/reflections/DeclarationReflection.ts:92](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L92)


### groups: [ReflectionGroup](td.models.reflectiongroup.md)[]
All children grouped by their kind.
* Inherited from [ContainerReflection](td.models.containerreflection.md).[groups](td.models.containerreflection.md#groups)
* Defined in [td/models/reflections/ContainerReflection.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ContainerReflection.ts#L13)


### hasOwnDocument: boolean
Is the url pointing to an individual document?When FALSE, the url points to an anchor tag on a page of a different reflection.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[hasOwnDocument](../interfaces/td.models.itypeparametercontainer.md#hasowndocument)
* Inherited from [Reflection](td.models.reflection.md).[hasOwnDocument](td.models.reflection.md#hasowndocument)
* Defined in [td/models/Reflection.ts:288](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L288)


### id: number
Unique id of this reflection.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[id](../interfaces/td.models.itypeparametercontainer.md#id)
* Inherited from [Reflection](td.models.reflection.md).[id](td.models.reflection.md#id)
* Defined in [td/models/Reflection.ts:224](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L224)


### implementationOf: [Type](td.models.type.md)
A type that points to the reflection this reflection is the implementation of.Applies to class members.
* Defined in [td/models/reflections/DeclarationReflection.ts:125](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L125)


### implementedBy: [Type](td.models.type.md)[]
A list of all types that implement this reflection.
* Defined in [td/models/reflections/DeclarationReflection.ts:145](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L145)


### implementedTypes: [Type](td.models.type.md)[]
A list of all types this reflection implements.
* Defined in [td/models/reflections/DeclarationReflection.ts:140](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L140)


### indexSignature: [SignatureReflection](td.models.signaturereflection.md)
The index signature of this declaration.
* Defined in [td/models/reflections/DeclarationReflection.ts:87](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L87)


### inheritedFrom: [Type](td.models.type.md)
A type that points to the reflection this reflection has been inherited from.Applies to interface and class members.
* Defined in [td/models/reflections/DeclarationReflection.ts:118](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L118)


### kind: [ReflectionKind](../enums/td.models.reflectionkind.md)
The kind of this reflection.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[kind](../interfaces/td.models.itypeparametercontainer.md#kind)
* Inherited from [Reflection](td.models.reflection.md).[kind](td.models.reflection.md#kind)
* Defined in [td/models/Reflection.ts:239](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L239)


### kindString: string
The human readable string representation of the kind of this reflection.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[kindString](../interfaces/td.models.itypeparametercontainer.md#kindstring)
* Inherited from [Reflection](td.models.reflection.md).[kindString](td.models.reflection.md#kindstring)
* Defined in [td/models/Reflection.ts:244](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L244)


### name: string
The symbol name of this reflection.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[name](../interfaces/td.models.itypeparametercontainer.md#name)
* Inherited from [Reflection](td.models.reflection.md).[name](td.models.reflection.md#name)
* Defined in [td/models/Reflection.ts:229](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L229)


### originalName: string
The original name of the TypeScript declaration.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[originalName](../interfaces/td.models.itypeparametercontainer.md#originalname)
* Inherited from [Reflection](td.models.reflection.md).[originalName](td.models.reflection.md#originalname)
* Defined in [td/models/Reflection.ts:234](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L234)


### overwrites: [Type](td.models.type.md)
A type that points to the reflection that has been overwritten by this reflection.Applies to interface and class members.
* Defined in [td/models/reflections/DeclarationReflection.ts:111](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L111)


### parent: [Reflection](td.models.reflection.md)
The reflection this reflection is a child of.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[parent](../interfaces/td.models.itypeparametercontainer.md#parent)
* Inherited from [Reflection](td.models.reflection.md).[parent](td.models.reflection.md#parent)
* Defined in [td/models/Reflection.ts:251](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L251)


### setSignature: [SignatureReflection](td.models.signaturereflection.md)
The set signature of this declaration.
* Defined in [td/models/reflections/DeclarationReflection.ts:97](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L97)


### signatures: [SignatureReflection](td.models.signaturereflection.md)[]
A list of call signatures attached to this declaration.TypeDoc creates one declaration per function that may contain ore or moresignature reflections.
* Defined in [td/models/reflections/DeclarationReflection.ts:82](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L82)


### sources: [ISourceReference](../interfaces/td.models.isourcereference.md)[]
A list of all source files that contributed to this reflection.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[sources](../interfaces/td.models.itypeparametercontainer.md#sources)
* Inherited from [Reflection](td.models.reflection.md).[sources](td.models.reflection.md#sources)
* Defined in [td/models/Reflection.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L261)


### type: [Type](td.models.type.md)
The type of the reflection.If the reflection represents a variable or a property, this is the value type.<br />If the reflection represents a signature, this is the return type.
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[type](../interfaces/td.models.itypecontainer.md#type)
* Defined in [td/models/reflections/DeclarationReflection.ts:72](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L72)


### typeHierarchy: [IDeclarationHierarchy](../interfaces/td.models.ideclarationhierarchy.md)
Contains a simplified representation of the type hierarchy suitable for beingrendered in templates.
* Defined in [td/models/reflections/DeclarationReflection.ts:151](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L151)


### typeParameters: [TypeParameterReflection](td.models.typeparameterreflection.md)[]

* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[typeParameters](../interfaces/td.models.itypeparametercontainer.md#typeparameters)
* Defined in [td/models/reflections/DeclarationReflection.ts:74](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L74)


### url: string
The url of this reflection in the generated documentation.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[url](../interfaces/td.models.itypeparametercontainer.md#url)
* Inherited from [Reflection](td.models.reflection.md).[url](td.models.reflection.md#url)
* Defined in [td/models/Reflection.ts:276](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L276)


## Methods

### findReflectionByName(name: string): [Reflection](td.models.reflection.md)findReflectionByName(names: string[]): [Reflection](td.models.reflection.md)
Try to find a reflection by its name.  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[findReflectionByName](../interfaces/td.models.itypeparametercontainer.md#findreflectionbyname)
* Inherited from [Reflection](td.models.reflection.md).[findReflectionByName](td.models.reflection.md#findreflectionbyname)
* Defined in [td/models/Reflection.ts:515](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L515)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name to look for. Might contain a hierarchy. |

#### Returns: [Reflection](td.models.reflection.md)
The found reflection or null.

Try to find a reflection by its name.  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[findReflectionByName](../interfaces/td.models.itypeparametercontainer.md#findreflectionbyname)
* Inherited from [Reflection](td.models.reflection.md).[findReflectionByName](td.models.reflection.md#findreflectionbyname)
* Defined in [td/models/Reflection.ts:520](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L520)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| names | string[]| The name hierarchy to look for. |

#### Returns: [Reflection](td.models.reflection.md)
The found reflection or null.


### getAlias(): string
Return an url safe alias for this reflection.  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[getAlias](../interfaces/td.models.itypeparametercontainer.md#getalias)
* Inherited from [Reflection](td.models.reflection.md).[getAlias](td.models.reflection.md#getalias)
* Defined in [td/models/Reflection.ts:436](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L436)

#### Returns: string

### getAllSignatures(): [SignatureReflection](td.models.signaturereflection.md)[]
  
* Defined in [td/models/reflections/DeclarationReflection.ts:159](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L159)

#### Returns: [SignatureReflection](td.models.signaturereflection.md)[]

### getChildByName(name: string): [Reflection](td.models.reflection.md)getChildByName(names: string[]): [Reflection](td.models.reflection.md)
Return a child by its name.  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[getChildByName](../interfaces/td.models.itypeparametercontainer.md#getchildbyname)
* Inherited from [Reflection](td.models.reflection.md).[getChildByName](td.models.reflection.md#getchildbyname)
* Defined in [td/models/Reflection.ts:481](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L481)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name of the child to look for. Might contain a hierarchy. |

#### Returns: [Reflection](td.models.reflection.md)
The found child or NULL.

Return a child by its name.  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[getChildByName](../interfaces/td.models.itypeparametercontainer.md#getchildbyname)
* Inherited from [Reflection](td.models.reflection.md).[getChildByName](td.models.reflection.md#getchildbyname)
* Defined in [td/models/Reflection.ts:486](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L486)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| names | string[]| The name hierarchy of the child to look for. |

#### Returns: [Reflection](td.models.reflection.md)
The found child or NULL.


### getChildrenByKind(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)): [DeclarationReflection](td.models.declarationreflection.md)[]
Return a list of all children of a certain kind.  
* Inherited from [ContainerReflection](td.models.containerreflection.md).[getChildrenByKind](td.models.containerreflection.md#getchildrenbykind)
* Defined in [td/models/reflections/ContainerReflection.ts:23](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ContainerReflection.ts#L23)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The desired kind of children. |

#### Returns: [DeclarationReflection](td.models.declarationreflection.md)[]
An array containing all children with the desired kind.


### getFullName(separator = ".": string): string
Return the full name of this reflection.The full name contains the name of this reflection and the names of all parent reflections.  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[getFullName](../interfaces/td.models.itypeparametercontainer.md#getfullname)
* Inherited from [Reflection](td.models.reflection.md).[getFullName](td.models.reflection.md#getfullname)
* Defined in [td/models/Reflection.ts:354](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L354)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| separator = "." | string| Separator used to join the names of the reflections. |

#### Returns: string
The full name of this reflection.


### hasComment(): boolean
Has this reflection a visible comment?  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[hasComment](../interfaces/td.models.itypeparametercontainer.md#hascomment)
* Inherited from [Reflection](td.models.reflection.md).[hasComment](td.models.reflection.md#hascomment)
* Defined in [td/models/Reflection.ts:468](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L468)

#### Returns: boolean
TRUE when this reflection has a visible comment.


### hasGetterOrSetter(): boolean
  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[hasGetterOrSetter](../interfaces/td.models.itypeparametercontainer.md#hasgetterorsetter)
* Overwrites [Reflection](td.models.reflection.md).[hasGetterOrSetter](td.models.reflection.md#hasgetterorsetter)
* Defined in [td/models/reflections/DeclarationReflection.ts:154](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L154)

#### Returns: boolean

### kindOf(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)): booleankindOf(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)[]): boolean
Test whether this reflection is of the given kind.  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[kindOf](../interfaces/td.models.itypeparametercontainer.md#kindof)
* Inherited from [Reflection](td.models.reflection.md).[kindOf](td.models.reflection.md#kindof)
* Defined in [td/models/Reflection.ts:322](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L322)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The kind to test for. |

#### Returns: boolean
Test whether this reflection is of the given kind.  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[kindOf](../interfaces/td.models.itypeparametercontainer.md#kindof)
* Inherited from [Reflection](td.models.reflection.md).[kindOf](td.models.reflection.md#kindof)
* Defined in [td/models/Reflection.ts:327](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L327)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)[]| An array of kinds to test for. |

#### Returns: boolean

### setFlag(flag: [ReflectionFlag](../enums/td.models.reflectionflag.md), value = true: boolean): void
Set a flag on this reflection.  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[setFlag](../interfaces/td.models.itypeparametercontainer.md#setflag)
* Inherited from [Reflection](td.models.reflection.md).[setFlag](td.models.reflection.md#setflag)
* Defined in [td/models/Reflection.ts:366](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L366)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| flag | [ReflectionFlag](../enums/td.models.reflectionflag.md)|  |
| value = true | boolean|  |

#### Returns: void

### toObject(): any
Return a raw object representation of this reflection.  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[toObject](../interfaces/td.models.itypeparametercontainer.md#toobject)
* Overwrites [ContainerReflection](td.models.containerreflection.md).[toObject](td.models.containerreflection.md#toobject)
* Defined in [td/models/reflections/DeclarationReflection.ts:211](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L211)

#### Returns: any

### toString(): string
Return a string representation of this reflection.  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[toString](../interfaces/td.models.itypeparametercontainer.md#tostring)
* Overwrites [Reflection](td.models.reflection.md).[toString](td.models.reflection.md#tostring)
* Defined in [td/models/reflections/DeclarationReflection.ts:257](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L257)

#### Returns: string

### toStringHierarchy(indent = "": string): string
Return a string representation of this reflection and all of its children.  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[toStringHierarchy](../interfaces/td.models.itypeparametercontainer.md#tostringhierarchy)
* Inherited from [Reflection](td.models.reflection.md).[toStringHierarchy](td.models.reflection.md#tostringhierarchy)
* Defined in [td/models/Reflection.ts:613](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L613)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| indent = "" | string| Used internally to indent child reflections. |

#### Returns: string

### traverse(callback: [ITraverseCallback](../interfaces/td.models.itraversecallback.md)): void
Traverse all potential child reflections of this reflection.The given callback will be invoked for all children, signatures and type parametersattached to this reflection.  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[traverse](../interfaces/td.models.itypeparametercontainer.md#traverse)
* Overwrites [ContainerReflection](td.models.containerreflection.md).[traverse](td.models.containerreflection.md#traverse)
* Defined in [td/models/reflections/DeclarationReflection.ts:179](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/DeclarationReflection.ts#L179)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | [ITraverseCallback](../interfaces/td.models.itraversecallback.md)| The callback function that should be applied for each child reflection. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
