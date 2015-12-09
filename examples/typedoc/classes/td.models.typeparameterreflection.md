# Class TypeParameterReflection


### Extends
* [Reflection](td.models.reflection.md)

### Implements
* [ITypeContainer](../interfaces/td.models.itypecontainer.md)

## Index

### Constructors
* [constructor](td.models.typeparameterreflection.md#constructor)

### Properties
* [anchor](td.models.typeparameterreflection.md#anchor)
* [comment](td.models.typeparameterreflection.md#comment)
* [cssClasses](td.models.typeparameterreflection.md#cssclasses)
* [decorates](td.models.typeparameterreflection.md#decorates)
* [decorators](td.models.typeparameterreflection.md#decorators)
* [flags](td.models.typeparameterreflection.md#flags)
* [hasOwnDocument](td.models.typeparameterreflection.md#hasowndocument)
* [id](td.models.typeparameterreflection.md#id)
* [kind](td.models.typeparameterreflection.md#kind)
* [kindString](td.models.typeparameterreflection.md#kindstring)
* [name](td.models.typeparameterreflection.md#name)
* [originalName](td.models.typeparameterreflection.md#originalname)
* [parent](td.models.typeparameterreflection.md#parent)
* [sources](td.models.typeparameterreflection.md#sources)
* [type](td.models.typeparameterreflection.md#type)
* [url](td.models.typeparameterreflection.md#url)

### Methods
* [findReflectionByName](td.models.typeparameterreflection.md#findreflectionbyname)
* [getAlias](td.models.typeparameterreflection.md#getalias)
* [getChildByName](td.models.typeparameterreflection.md#getchildbyname)
* [getFullName](td.models.typeparameterreflection.md#getfullname)
* [hasComment](td.models.typeparameterreflection.md#hascomment)
* [hasGetterOrSetter](td.models.typeparameterreflection.md#hasgetterorsetter)
* [kindOf](td.models.typeparameterreflection.md#kindof)
* [setFlag](td.models.typeparameterreflection.md#setflag)
* [toObject](td.models.typeparameterreflection.md#toobject)
* [toString](td.models.typeparameterreflection.md#tostring)
* [toStringHierarchy](td.models.typeparameterreflection.md#tostringhierarchy)
* [traverse](td.models.typeparameterreflection.md#traverse)

## Constructors

### new TypeParameterReflection(parent?: [Reflection](td.models.reflection.md), type?: [TypeParameterType](td.models.typeparametertype.md)): [TypeParameterReflection](td.models.typeparameterreflection.md)
Create a new TypeParameterReflection instance.  
* Overwrites [Reflection](td.models.reflection.md).[constructor](td.models.reflection.md#constructor)
* Defined in [td/models/reflections/TypeParameterReflection.ts:7](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/TypeParameterReflection.ts#L7)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| parent? | [Reflection](td.models.reflection.md)|  |
| type? | [TypeParameterType](td.models.typeparametertype.md)|  |

#### Returns: [TypeParameterReflection](td.models.typeparameterreflection.md)

## Properties

### anchor: string
The name of the anchor of this child.
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[anchor](../interfaces/td.models.itypecontainer.md#anchor)
* Inherited from [Reflection](td.models.reflection.md).[anchor](td.models.reflection.md#anchor)
* Defined in [td/models/Reflection.ts:281](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L281)


### comment: [Comment](td.models.comment.md)
The parsed documentation comment attached to this reflection.
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[comment](../interfaces/td.models.itypecontainer.md#comment)
* Inherited from [Reflection](td.models.reflection.md).[comment](td.models.reflection.md#comment)
* Defined in [td/models/Reflection.ts:256](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L256)


### cssClasses: string
A list of generated css classes that should be applied to representations of thisreflection in the generated markup.
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[cssClasses](../interfaces/td.models.itypecontainer.md#cssclasses)
* Inherited from [Reflection](td.models.reflection.md).[cssClasses](td.models.reflection.md#cssclasses)
* Defined in [td/models/Reflection.ts:294](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L294)


### decorates: [Type](td.models.type.md)[]
A list of all types that are decorated by this reflection.
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[decorates](../interfaces/td.models.itypecontainer.md#decorates)
* Inherited from [Reflection](td.models.reflection.md).[decorates](td.models.reflection.md#decorates)
* Defined in [td/models/Reflection.ts:271](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L271)


### decorators: [IDecorator](../interfaces/td.models.idecorator.md)[]
A list of all decorators attached to this reflection.
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[decorators](../interfaces/td.models.itypecontainer.md#decorators)
* Inherited from [Reflection](td.models.reflection.md).[decorators](td.models.reflection.md#decorators)
* Defined in [td/models/Reflection.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L266)


### flags: [IReflectionFlags](../interfaces/td.models.ireflectionflags.md)

* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[flags](../interfaces/td.models.itypecontainer.md#flags)
* Inherited from [Reflection](td.models.reflection.md).[flags](td.models.reflection.md#flags)
* Defined in [td/models/Reflection.ts:246](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L246)


### hasOwnDocument: boolean
Is the url pointing to an individual document?When FALSE, the url points to an anchor tag on a page of a different reflection.
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[hasOwnDocument](../interfaces/td.models.itypecontainer.md#hasowndocument)
* Inherited from [Reflection](td.models.reflection.md).[hasOwnDocument](td.models.reflection.md#hasowndocument)
* Defined in [td/models/Reflection.ts:288](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L288)


### id: number
Unique id of this reflection.
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[id](../interfaces/td.models.itypecontainer.md#id)
* Inherited from [Reflection](td.models.reflection.md).[id](td.models.reflection.md#id)
* Defined in [td/models/Reflection.ts:224](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L224)


### kind: [ReflectionKind](../enums/td.models.reflectionkind.md)
The kind of this reflection.
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[kind](../interfaces/td.models.itypecontainer.md#kind)
* Inherited from [Reflection](td.models.reflection.md).[kind](td.models.reflection.md#kind)
* Defined in [td/models/Reflection.ts:239](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L239)


### kindString: string
The human readable string representation of the kind of this reflection.
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[kindString](../interfaces/td.models.itypecontainer.md#kindstring)
* Inherited from [Reflection](td.models.reflection.md).[kindString](td.models.reflection.md#kindstring)
* Defined in [td/models/Reflection.ts:244](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L244)


### name: string
The symbol name of this reflection.
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[name](../interfaces/td.models.itypecontainer.md#name)
* Inherited from [Reflection](td.models.reflection.md).[name](td.models.reflection.md#name)
* Defined in [td/models/Reflection.ts:229](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L229)


### originalName: string
The original name of the TypeScript declaration.
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[originalName](../interfaces/td.models.itypecontainer.md#originalname)
* Inherited from [Reflection](td.models.reflection.md).[originalName](td.models.reflection.md#originalname)
* Defined in [td/models/Reflection.ts:234](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L234)


### parent: [DeclarationReflection](td.models.declarationreflection.md)

* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[parent](../interfaces/td.models.itypecontainer.md#parent)
* Overwrites [Reflection](td.models.reflection.md).[parent](td.models.reflection.md#parent)
* Defined in [td/models/reflections/TypeParameterReflection.ts:5](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/TypeParameterReflection.ts#L5)


### sources: [ISourceReference](../interfaces/td.models.isourcereference.md)[]
A list of all source files that contributed to this reflection.
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[sources](../interfaces/td.models.itypecontainer.md#sources)
* Inherited from [Reflection](td.models.reflection.md).[sources](td.models.reflection.md#sources)
* Defined in [td/models/Reflection.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L261)


### type: [Type](td.models.type.md)

* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[type](../interfaces/td.models.itypecontainer.md#type)
* Defined in [td/models/reflections/TypeParameterReflection.ts:7](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/TypeParameterReflection.ts#L7)


### url: string
The url of this reflection in the generated documentation.
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[url](../interfaces/td.models.itypecontainer.md#url)
* Inherited from [Reflection](td.models.reflection.md).[url](td.models.reflection.md#url)
* Defined in [td/models/Reflection.ts:276](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L276)


## Methods

### findReflectionByName(name: string): [Reflection](td.models.reflection.md)findReflectionByName(names: string[]): [Reflection](td.models.reflection.md)
Try to find a reflection by its name.  
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[findReflectionByName](../interfaces/td.models.itypecontainer.md#findreflectionbyname)
* Inherited from [Reflection](td.models.reflection.md).[findReflectionByName](td.models.reflection.md#findreflectionbyname)
* Defined in [td/models/Reflection.ts:515](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L515)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name to look for. Might contain a hierarchy. |

#### Returns: [Reflection](td.models.reflection.md)
The found reflection or null.

Try to find a reflection by its name.  
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[findReflectionByName](../interfaces/td.models.itypecontainer.md#findreflectionbyname)
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
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[getAlias](../interfaces/td.models.itypecontainer.md#getalias)
* Inherited from [Reflection](td.models.reflection.md).[getAlias](td.models.reflection.md#getalias)
* Defined in [td/models/Reflection.ts:436](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L436)

#### Returns: string

### getChildByName(name: string): [Reflection](td.models.reflection.md)getChildByName(names: string[]): [Reflection](td.models.reflection.md)
Return a child by its name.  
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[getChildByName](../interfaces/td.models.itypecontainer.md#getchildbyname)
* Inherited from [Reflection](td.models.reflection.md).[getChildByName](td.models.reflection.md#getchildbyname)
* Defined in [td/models/Reflection.ts:481](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L481)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name of the child to look for. Might contain a hierarchy. |

#### Returns: [Reflection](td.models.reflection.md)
The found child or NULL.

Return a child by its name.  
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[getChildByName](../interfaces/td.models.itypecontainer.md#getchildbyname)
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
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[getFullName](../interfaces/td.models.itypecontainer.md#getfullname)
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
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[hasComment](../interfaces/td.models.itypecontainer.md#hascomment)
* Inherited from [Reflection](td.models.reflection.md).[hasComment](td.models.reflection.md#hascomment)
* Defined in [td/models/Reflection.ts:468](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L468)

#### Returns: boolean
TRUE when this reflection has a visible comment.


### hasGetterOrSetter(): boolean
  
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[hasGetterOrSetter](../interfaces/td.models.itypecontainer.md#hasgetterorsetter)
* Inherited from [Reflection](td.models.reflection.md).[hasGetterOrSetter](td.models.reflection.md#hasgetterorsetter)
* Defined in [td/models/Reflection.ts:473](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L473)

#### Returns: boolean

### kindOf(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)): booleankindOf(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)[]): boolean
Test whether this reflection is of the given kind.  
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[kindOf](../interfaces/td.models.itypecontainer.md#kindof)
* Inherited from [Reflection](td.models.reflection.md).[kindOf](td.models.reflection.md#kindof)
* Defined in [td/models/Reflection.ts:322](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L322)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The kind to test for. |

#### Returns: boolean
Test whether this reflection is of the given kind.  
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[kindOf](../interfaces/td.models.itypecontainer.md#kindof)
* Inherited from [Reflection](td.models.reflection.md).[kindOf](td.models.reflection.md#kindof)
* Defined in [td/models/Reflection.ts:327](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L327)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)[]| An array of kinds to test for. |

#### Returns: boolean

### setFlag(flag: [ReflectionFlag](../enums/td.models.reflectionflag.md), value = true: boolean): void
Set a flag on this reflection.  
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[setFlag](../interfaces/td.models.itypecontainer.md#setflag)
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
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[toObject](../interfaces/td.models.itypecontainer.md#toobject)
* Overwrites [Reflection](td.models.reflection.md).[toObject](td.models.reflection.md#toobject)
* Defined in [td/models/reflections/TypeParameterReflection.ts:22](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/TypeParameterReflection.ts#L22)

#### Returns: any

### toString(): string
Return a string representation of this reflection.  
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[toString](../interfaces/td.models.itypecontainer.md#tostring)
* Inherited from [Reflection](td.models.reflection.md).[toString](td.models.reflection.md#tostring)
* Defined in [td/models/Reflection.ts:603](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L603)

#### Returns: string

### toStringHierarchy(indent = "": string): string
Return a string representation of this reflection and all of its children.  
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[toStringHierarchy](../interfaces/td.models.itypecontainer.md#tostringhierarchy)
* Inherited from [Reflection](td.models.reflection.md).[toStringHierarchy](td.models.reflection.md#tostringhierarchy)
* Defined in [td/models/Reflection.ts:613](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L613)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| indent = "" | string| Used internally to indent child reflections. |

#### Returns: string

### traverse(callback: [ITraverseCallback](../interfaces/td.models.itraversecallback.md)): void
Traverse all potential child reflections of this reflection.The given callback will be invoked for all children, signatures and type parametersattached to this reflection.  
* Implementation of [ITypeContainer](../interfaces/td.models.itypecontainer.md).[traverse](../interfaces/td.models.itypecontainer.md#traverse)
* Inherited from [Reflection](td.models.reflection.md).[traverse](td.models.reflection.md#traverse)
* Defined in [td/models/Reflection.ts:547](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L547)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | [ITraverseCallback](../interfaces/td.models.itraversecallback.md)| The callback function that should be applied for each child reflection. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
