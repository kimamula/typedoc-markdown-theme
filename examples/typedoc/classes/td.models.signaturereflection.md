# Class SignatureReflection


### Extends
* [Reflection](td.models.reflection.md)

### Implements
* [ITypeContainer](../interfaces/td.models.itypecontainer.md)
* [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md)

## Index

### Constructors
* [constructor](td.models.signaturereflection.md#constructor)

### Properties
* [anchor](td.models.signaturereflection.md#anchor)
* [comment](td.models.signaturereflection.md#comment)
* [cssClasses](td.models.signaturereflection.md#cssclasses)
* [decorates](td.models.signaturereflection.md#decorates)
* [decorators](td.models.signaturereflection.md#decorators)
* [flags](td.models.signaturereflection.md#flags)
* [hasOwnDocument](td.models.signaturereflection.md#hasowndocument)
* [id](td.models.signaturereflection.md#id)
* [implementationOf](td.models.signaturereflection.md#implementationof)
* [inheritedFrom](td.models.signaturereflection.md#inheritedfrom)
* [kind](td.models.signaturereflection.md#kind)
* [kindString](td.models.signaturereflection.md#kindstring)
* [name](td.models.signaturereflection.md#name)
* [originalName](td.models.signaturereflection.md#originalname)
* [overwrites](td.models.signaturereflection.md#overwrites)
* [parameters](td.models.signaturereflection.md#parameters)
* [parent](td.models.signaturereflection.md#parent)
* [sources](td.models.signaturereflection.md#sources)
* [type](td.models.signaturereflection.md#type)
* [typeParameters](td.models.signaturereflection.md#typeparameters)
* [url](td.models.signaturereflection.md#url)

### Methods
* [findReflectionByName](td.models.signaturereflection.md#findreflectionbyname)
* [getAlias](td.models.signaturereflection.md#getalias)
* [getChildByName](td.models.signaturereflection.md#getchildbyname)
* [getFullName](td.models.signaturereflection.md#getfullname)
* [getParameterTypes](td.models.signaturereflection.md#getparametertypes)
* [hasComment](td.models.signaturereflection.md#hascomment)
* [hasGetterOrSetter](td.models.signaturereflection.md#hasgetterorsetter)
* [kindOf](td.models.signaturereflection.md#kindof)
* [setFlag](td.models.signaturereflection.md#setflag)
* [toObject](td.models.signaturereflection.md#toobject)
* [toString](td.models.signaturereflection.md#tostring)
* [toStringHierarchy](td.models.signaturereflection.md#tostringhierarchy)
* [traverse](td.models.signaturereflection.md#traverse)

## Constructors

### new SignatureReflection(parent?: [Reflection](td.models.reflection.md), name?: string, kind?: [ReflectionKind](../enums/td.models.reflectionkind.md)): [SignatureReflection](td.models.signaturereflection.md)
Create a new BaseReflection instance.  
* Inherited from [Reflection](td.models.reflection.md).[constructor](td.models.reflection.md#constructor)
* Defined in [td/models/Reflection.ts:303](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L303)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| parent? | [Reflection](td.models.reflection.md)|  |
| name? | string|  |
| kind? | [ReflectionKind](../enums/td.models.reflectionkind.md)|  |

#### Returns: [SignatureReflection](td.models.signaturereflection.md)

## Properties

### anchor: string
The name of the anchor of this child.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[anchor](../interfaces/td.models.itypeparametercontainer.md#anchor)
* Inherited from [Reflection](td.models.reflection.md).[anchor](td.models.reflection.md#anchor)
* Defined in [td/models/Reflection.ts:281](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L281)


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


### flags: [IReflectionFlags](../interfaces/td.models.ireflectionflags.md)

* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[flags](../interfaces/td.models.itypeparametercontainer.md#flags)
* Inherited from [Reflection](td.models.reflection.md).[flags](td.models.reflection.md#flags)
* Defined in [td/models/Reflection.ts:246](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L246)


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
* Defined in [td/models/reflections/SignatureReflection.ts:32](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/SignatureReflection.ts#L32)


### inheritedFrom: [Type](td.models.type.md)
A type that points to the reflection this reflection has been inherited from.Applies to interface and class members.
* Defined in [td/models/reflections/SignatureReflection.ts:25](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/SignatureReflection.ts#L25)


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
* Defined in [td/models/reflections/SignatureReflection.ts:18](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/SignatureReflection.ts#L18)


### parameters: [ParameterReflection](td.models.parameterreflection.md)[]

* Defined in [td/models/reflections/SignatureReflection.ts:7](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/SignatureReflection.ts#L7)


### parent: [ContainerReflection](td.models.containerreflection.md)

* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[parent](../interfaces/td.models.itypeparametercontainer.md#parent)
* Overwrites [Reflection](td.models.reflection.md).[parent](td.models.reflection.md#parent)
* Defined in [td/models/reflections/SignatureReflection.ts:5](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/SignatureReflection.ts#L5)


### sources: [ISourceReference](../interfaces/td.models.isourcereference.md)[]
A list of all source files that contributed to this reflection.
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[sources](../interfaces/td.models.itypeparametercontainer.md#sources)
* Inherited from [Reflection](td.models.reflection.md).[sources](td.models.reflection.md#sources)
* Defined in [td/models/Reflection.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L261)


### type: [Type](td.models.type.md)

* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[type](../interfaces/td.models.itypecontainer.md#type)
* Defined in [td/models/reflections/SignatureReflection.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/SignatureReflection.ts#L11)


### typeParameters: [TypeParameterReflection](td.models.typeparameterreflection.md)[]

* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[typeParameters](../interfaces/td.models.itypeparametercontainer.md#typeparameters)
* Defined in [td/models/reflections/SignatureReflection.ts:9](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/SignatureReflection.ts#L9)


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


### getParameterTypes(): [Type](td.models.type.md)[]
Return an array of the parameter types.  
* Defined in [td/models/reflections/SignatureReflection.ts:39](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/SignatureReflection.ts#L39)

#### Returns: [Type](td.models.type.md)[]

### hasComment(): boolean
Has this reflection a visible comment?  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[hasComment](../interfaces/td.models.itypeparametercontainer.md#hascomment)
* Inherited from [Reflection](td.models.reflection.md).[hasComment](td.models.reflection.md#hascomment)
* Defined in [td/models/Reflection.ts:468](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L468)

#### Returns: boolean
TRUE when this reflection has a visible comment.


### hasGetterOrSetter(): boolean
  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[hasGetterOrSetter](../interfaces/td.models.itypeparametercontainer.md#hasgetterorsetter)
* Inherited from [Reflection](td.models.reflection.md).[hasGetterOrSetter](td.models.reflection.md#hasgetterorsetter)
* Defined in [td/models/Reflection.ts:473](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L473)

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
* Overwrites [Reflection](td.models.reflection.md).[toObject](td.models.reflection.md#toobject)
* Defined in [td/models/reflections/SignatureReflection.ts:73](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/SignatureReflection.ts#L73)

#### Returns: any

### toString(): string
Return a string representation of this reflection.  
* Implementation of [ITypeParameterContainer](../interfaces/td.models.itypeparametercontainer.md).[toString](../interfaces/td.models.itypeparametercontainer.md#tostring)
* Overwrites [Reflection](td.models.reflection.md).[toString](td.models.reflection.md#tostring)
* Defined in [td/models/reflections/SignatureReflection.ts:99](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/SignatureReflection.ts#L99)

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
* Overwrites [Reflection](td.models.reflection.md).[traverse](td.models.reflection.md#traverse)
* Defined in [td/models/reflections/SignatureReflection.ts:53](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/SignatureReflection.ts#L53)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | [ITraverseCallback](../interfaces/td.models.itraversecallback.md)| The callback function that should be applied for each child reflection. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
