# Interface ITypeParameterContainer


### Extends
* [Reflection](../classes/td.models.reflection.md)

### Implemented by
* [DeclarationReflection](../classes/td.models.declarationreflection.md)
* [SignatureReflection](../classes/td.models.signaturereflection.md)

## Index

### Constructors
* [constructor](td.models.itypeparametercontainer.md#constructor)

### Properties
* [anchor](td.models.itypeparametercontainer.md#anchor)
* [comment](td.models.itypeparametercontainer.md#comment)
* [cssClasses](td.models.itypeparametercontainer.md#cssclasses)
* [decorates](td.models.itypeparametercontainer.md#decorates)
* [decorators](td.models.itypeparametercontainer.md#decorators)
* [flags](td.models.itypeparametercontainer.md#flags)
* [hasOwnDocument](td.models.itypeparametercontainer.md#hasowndocument)
* [id](td.models.itypeparametercontainer.md#id)
* [kind](td.models.itypeparametercontainer.md#kind)
* [kindString](td.models.itypeparametercontainer.md#kindstring)
* [name](td.models.itypeparametercontainer.md#name)
* [originalName](td.models.itypeparametercontainer.md#originalname)
* [parent](td.models.itypeparametercontainer.md#parent)
* [sources](td.models.itypeparametercontainer.md#sources)
* [typeParameters](td.models.itypeparametercontainer.md#typeparameters)
* [url](td.models.itypeparametercontainer.md#url)

### Methods
* [findReflectionByName](td.models.itypeparametercontainer.md#findreflectionbyname)
* [getAlias](td.models.itypeparametercontainer.md#getalias)
* [getChildByName](td.models.itypeparametercontainer.md#getchildbyname)
* [getFullName](td.models.itypeparametercontainer.md#getfullname)
* [hasComment](td.models.itypeparametercontainer.md#hascomment)
* [hasGetterOrSetter](td.models.itypeparametercontainer.md#hasgetterorsetter)
* [kindOf](td.models.itypeparametercontainer.md#kindof)
* [setFlag](td.models.itypeparametercontainer.md#setflag)
* [toObject](td.models.itypeparametercontainer.md#toobject)
* [toString](td.models.itypeparametercontainer.md#tostring)
* [toStringHierarchy](td.models.itypeparametercontainer.md#tostringhierarchy)
* [traverse](td.models.itypeparametercontainer.md#traverse)

## Constructors

### new ITypeParameterContainer(parent?: [Reflection](../classes/td.models.reflection.md), name?: string, kind?: [ReflectionKind](../enums/td.models.reflectionkind.md)): [ITypeParameterContainer](td.models.itypeparametercontainer.md)
Create a new BaseReflection instance.  
* Inherited from [Reflection](../classes/td.models.reflection.md).[constructor](../classes/td.models.reflection.md#constructor)
* Defined in [td/models/Reflection.ts:303](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L303)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| parent? | [Reflection](../classes/td.models.reflection.md)|  |
| name? | string|  |
| kind? | [ReflectionKind](../enums/td.models.reflectionkind.md)|  |

#### Returns: [ITypeParameterContainer](td.models.itypeparametercontainer.md)

## Properties

### anchor: string
The name of the anchor of this child.
* Inherited from [Reflection](../classes/td.models.reflection.md).[anchor](../classes/td.models.reflection.md#anchor)
* Defined in [td/models/Reflection.ts:281](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L281)


### comment: [Comment](../classes/td.models.comment.md)
The parsed documentation comment attached to this reflection.
* Inherited from [Reflection](../classes/td.models.reflection.md).[comment](../classes/td.models.reflection.md#comment)
* Defined in [td/models/Reflection.ts:256](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L256)


### cssClasses: string
A list of generated css classes that should be applied to representations of thisreflection in the generated markup.
* Inherited from [Reflection](../classes/td.models.reflection.md).[cssClasses](../classes/td.models.reflection.md#cssclasses)
* Defined in [td/models/Reflection.ts:294](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L294)


### decorates: [Type](../classes/td.models.type.md)[]
A list of all types that are decorated by this reflection.
* Inherited from [Reflection](../classes/td.models.reflection.md).[decorates](../classes/td.models.reflection.md#decorates)
* Defined in [td/models/Reflection.ts:271](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L271)


### decorators: [IDecorator](td.models.idecorator.md)[]
A list of all decorators attached to this reflection.
* Inherited from [Reflection](../classes/td.models.reflection.md).[decorators](../classes/td.models.reflection.md#decorators)
* Defined in [td/models/Reflection.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L266)


### flags: [IReflectionFlags](td.models.ireflectionflags.md)

* Inherited from [Reflection](../classes/td.models.reflection.md).[flags](../classes/td.models.reflection.md#flags)
* Defined in [td/models/Reflection.ts:246](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L246)


### hasOwnDocument: boolean
Is the url pointing to an individual document?When FALSE, the url points to an anchor tag on a page of a different reflection.
* Inherited from [Reflection](../classes/td.models.reflection.md).[hasOwnDocument](../classes/td.models.reflection.md#hasowndocument)
* Defined in [td/models/Reflection.ts:288](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L288)


### id: number
Unique id of this reflection.
* Inherited from [Reflection](../classes/td.models.reflection.md).[id](../classes/td.models.reflection.md#id)
* Defined in [td/models/Reflection.ts:224](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L224)


### kind: [ReflectionKind](../enums/td.models.reflectionkind.md)
The kind of this reflection.
* Inherited from [Reflection](../classes/td.models.reflection.md).[kind](../classes/td.models.reflection.md#kind)
* Defined in [td/models/Reflection.ts:239](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L239)


### kindString: string
The human readable string representation of the kind of this reflection.
* Inherited from [Reflection](../classes/td.models.reflection.md).[kindString](../classes/td.models.reflection.md#kindstring)
* Defined in [td/models/Reflection.ts:244](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L244)


### name: string
The symbol name of this reflection.
* Inherited from [Reflection](../classes/td.models.reflection.md).[name](../classes/td.models.reflection.md#name)
* Defined in [td/models/Reflection.ts:229](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L229)


### originalName: string
The original name of the TypeScript declaration.
* Inherited from [Reflection](../classes/td.models.reflection.md).[originalName](../classes/td.models.reflection.md#originalname)
* Defined in [td/models/Reflection.ts:234](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L234)


### parent: [Reflection](../classes/td.models.reflection.md)
The reflection this reflection is a child of.
* Inherited from [Reflection](../classes/td.models.reflection.md).[parent](../classes/td.models.reflection.md#parent)
* Defined in [td/models/Reflection.ts:251](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L251)


### sources: [ISourceReference](td.models.isourcereference.md)[]
A list of all source files that contributed to this reflection.
* Inherited from [Reflection](../classes/td.models.reflection.md).[sources](../classes/td.models.reflection.md#sources)
* Defined in [td/models/Reflection.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L261)


### typeParameters: [TypeParameterReflection](../classes/td.models.typeparameterreflection.md)[]

* Defined in [td/models/Reflection.ts:163](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L163)


### url: string
The url of this reflection in the generated documentation.
* Inherited from [Reflection](../classes/td.models.reflection.md).[url](../classes/td.models.reflection.md#url)
* Defined in [td/models/Reflection.ts:276](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L276)


## Methods

### findReflectionByName(name: string): [Reflection](../classes/td.models.reflection.md)findReflectionByName(names: string[]): [Reflection](../classes/td.models.reflection.md)
Try to find a reflection by its name.  
* Inherited from [Reflection](../classes/td.models.reflection.md).[findReflectionByName](../classes/td.models.reflection.md#findreflectionbyname)
* Defined in [td/models/Reflection.ts:515](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L515)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name to look for. Might contain a hierarchy. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The found reflection or null.

Try to find a reflection by its name.  
* Inherited from [Reflection](../classes/td.models.reflection.md).[findReflectionByName](../classes/td.models.reflection.md#findreflectionbyname)
* Defined in [td/models/Reflection.ts:520](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L520)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| names | string[]| The name hierarchy to look for. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The found reflection or null.


### getAlias(): string
Return an url safe alias for this reflection.  
* Inherited from [Reflection](../classes/td.models.reflection.md).[getAlias](../classes/td.models.reflection.md#getalias)
* Defined in [td/models/Reflection.ts:436](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L436)

#### Returns: string

### getChildByName(name: string): [Reflection](../classes/td.models.reflection.md)getChildByName(names: string[]): [Reflection](../classes/td.models.reflection.md)
Return a child by its name.  
* Inherited from [Reflection](../classes/td.models.reflection.md).[getChildByName](../classes/td.models.reflection.md#getchildbyname)
* Defined in [td/models/Reflection.ts:481](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L481)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name of the child to look for. Might contain a hierarchy. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The found child or NULL.

Return a child by its name.  
* Inherited from [Reflection](../classes/td.models.reflection.md).[getChildByName](../classes/td.models.reflection.md#getchildbyname)
* Defined in [td/models/Reflection.ts:486](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L486)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| names | string[]| The name hierarchy of the child to look for. |

#### Returns: [Reflection](../classes/td.models.reflection.md)
The found child or NULL.


### getFullName(separator = ".": string): string
Return the full name of this reflection.The full name contains the name of this reflection and the names of all parent reflections.  
* Inherited from [Reflection](../classes/td.models.reflection.md).[getFullName](../classes/td.models.reflection.md#getfullname)
* Defined in [td/models/Reflection.ts:354](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L354)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| separator = "." | string| Separator used to join the names of the reflections. |

#### Returns: string
The full name of this reflection.


### hasComment(): boolean
Has this reflection a visible comment?  
* Inherited from [Reflection](../classes/td.models.reflection.md).[hasComment](../classes/td.models.reflection.md#hascomment)
* Defined in [td/models/Reflection.ts:468](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L468)

#### Returns: boolean
TRUE when this reflection has a visible comment.


### hasGetterOrSetter(): boolean
  
* Inherited from [Reflection](../classes/td.models.reflection.md).[hasGetterOrSetter](../classes/td.models.reflection.md#hasgetterorsetter)
* Defined in [td/models/Reflection.ts:473](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L473)

#### Returns: boolean

### kindOf(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)): booleankindOf(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)[]): boolean
Test whether this reflection is of the given kind.  
* Inherited from [Reflection](../classes/td.models.reflection.md).[kindOf](../classes/td.models.reflection.md#kindof)
* Defined in [td/models/Reflection.ts:322](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L322)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The kind to test for. |

#### Returns: boolean
Test whether this reflection is of the given kind.  
* Inherited from [Reflection](../classes/td.models.reflection.md).[kindOf](../classes/td.models.reflection.md#kindof)
* Defined in [td/models/Reflection.ts:327](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L327)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)[]| An array of kinds to test for. |

#### Returns: boolean

### setFlag(flag: [ReflectionFlag](../enums/td.models.reflectionflag.md), value = true: boolean): void
Set a flag on this reflection.  
* Inherited from [Reflection](../classes/td.models.reflection.md).[setFlag](../classes/td.models.reflection.md#setflag)
* Defined in [td/models/Reflection.ts:366](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L366)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| flag | [ReflectionFlag](../enums/td.models.reflectionflag.md)|  |
| value = true | boolean|  |

#### Returns: void

### toObject(): any
Return a raw object representation of this reflection.  
* Inherited from [Reflection](../classes/td.models.reflection.md).[toObject](../classes/td.models.reflection.md#toobject)
* Defined in [td/models/Reflection.ts:553](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L553)

#### Returns: any

### toString(): string
Return a string representation of this reflection.  
* Inherited from [Reflection](../classes/td.models.reflection.md).[toString](../classes/td.models.reflection.md#tostring)
* Defined in [td/models/Reflection.ts:603](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L603)

#### Returns: string

### toStringHierarchy(indent = "": string): string
Return a string representation of this reflection and all of its children.  
* Inherited from [Reflection](../classes/td.models.reflection.md).[toStringHierarchy](../classes/td.models.reflection.md#tostringhierarchy)
* Defined in [td/models/Reflection.ts:613](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L613)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| indent = "" | string| Used internally to indent child reflections. |

#### Returns: string

### traverse(callback: [ITraverseCallback](td.models.itraversecallback.md)): void
Traverse all potential child reflections of this reflection.The given callback will be invoked for all children, signatures and type parametersattached to this reflection.  
* Inherited from [Reflection](../classes/td.models.reflection.md).[traverse](../classes/td.models.reflection.md#traverse)
* Defined in [td/models/Reflection.ts:547](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L547)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | [ITraverseCallback](td.models.itraversecallback.md)| The callback function that should be applied for each child reflection. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
