# Class ContainerReflection


### Extends
* [Reflection](td.models.reflection.md)

## Index

### Constructors
* [constructor](td.models.containerreflection.md#constructor)

### Properties
* [anchor](td.models.containerreflection.md#anchor)
* [children](td.models.containerreflection.md#children)
* [comment](td.models.containerreflection.md#comment)
* [cssClasses](td.models.containerreflection.md#cssclasses)
* [decorates](td.models.containerreflection.md#decorates)
* [decorators](td.models.containerreflection.md#decorators)
* [flags](td.models.containerreflection.md#flags)
* [groups](td.models.containerreflection.md#groups)
* [hasOwnDocument](td.models.containerreflection.md#hasowndocument)
* [id](td.models.containerreflection.md#id)
* [kind](td.models.containerreflection.md#kind)
* [kindString](td.models.containerreflection.md#kindstring)
* [name](td.models.containerreflection.md#name)
* [originalName](td.models.containerreflection.md#originalname)
* [parent](td.models.containerreflection.md#parent)
* [sources](td.models.containerreflection.md#sources)
* [url](td.models.containerreflection.md#url)

### Methods
* [findReflectionByName](td.models.containerreflection.md#findreflectionbyname)
* [getAlias](td.models.containerreflection.md#getalias)
* [getChildByName](td.models.containerreflection.md#getchildbyname)
* [getChildrenByKind](td.models.containerreflection.md#getchildrenbykind)
* [getFullName](td.models.containerreflection.md#getfullname)
* [hasComment](td.models.containerreflection.md#hascomment)
* [hasGetterOrSetter](td.models.containerreflection.md#hasgetterorsetter)
* [kindOf](td.models.containerreflection.md#kindof)
* [setFlag](td.models.containerreflection.md#setflag)
* [toObject](td.models.containerreflection.md#toobject)
* [toString](td.models.containerreflection.md#tostring)
* [toStringHierarchy](td.models.containerreflection.md#tostringhierarchy)
* [traverse](td.models.containerreflection.md#traverse)

## Constructors

### new ContainerReflection(parent?: [Reflection](td.models.reflection.md), name?: string, kind?: [ReflectionKind](../enums/td.models.reflectionkind.md)): [ContainerReflection](td.models.containerreflection.md)
Create a new BaseReflection instance.  
* Inherited from [Reflection](td.models.reflection.md).[constructor](td.models.reflection.md#constructor)
* Defined in [td/models/Reflection.ts:303](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L303)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| parent? | [Reflection](td.models.reflection.md)|  |
| name? | string|  |
| kind? | [ReflectionKind](../enums/td.models.reflectionkind.md)|  |

#### Returns: [ContainerReflection](td.models.containerreflection.md)

## Properties

### anchor: string
The name of the anchor of this child.
* Inherited from [Reflection](td.models.reflection.md).[anchor](td.models.reflection.md#anchor)
* Defined in [td/models/Reflection.ts:281](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L281)


### children: [DeclarationReflection](td.models.declarationreflection.md)[]
The children of this reflection.
* Defined in [td/models/reflections/ContainerReflection.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ContainerReflection.ts#L8)


### comment: [Comment](td.models.comment.md)
The parsed documentation comment attached to this reflection.
* Inherited from [Reflection](td.models.reflection.md).[comment](td.models.reflection.md#comment)
* Defined in [td/models/Reflection.ts:256](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L256)


### cssClasses: string
A list of generated css classes that should be applied to representations of thisreflection in the generated markup.
* Inherited from [Reflection](td.models.reflection.md).[cssClasses](td.models.reflection.md#cssclasses)
* Defined in [td/models/Reflection.ts:294](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L294)


### decorates: [Type](td.models.type.md)[]
A list of all types that are decorated by this reflection.
* Inherited from [Reflection](td.models.reflection.md).[decorates](td.models.reflection.md#decorates)
* Defined in [td/models/Reflection.ts:271](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L271)


### decorators: [IDecorator](../interfaces/td.models.idecorator.md)[]
A list of all decorators attached to this reflection.
* Inherited from [Reflection](td.models.reflection.md).[decorators](td.models.reflection.md#decorators)
* Defined in [td/models/Reflection.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L266)


### flags: [IReflectionFlags](../interfaces/td.models.ireflectionflags.md)

* Inherited from [Reflection](td.models.reflection.md).[flags](td.models.reflection.md#flags)
* Defined in [td/models/Reflection.ts:246](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L246)


### groups: [ReflectionGroup](td.models.reflectiongroup.md)[]
All children grouped by their kind.
* Defined in [td/models/reflections/ContainerReflection.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ContainerReflection.ts#L13)


### hasOwnDocument: boolean
Is the url pointing to an individual document?When FALSE, the url points to an anchor tag on a page of a different reflection.
* Inherited from [Reflection](td.models.reflection.md).[hasOwnDocument](td.models.reflection.md#hasowndocument)
* Defined in [td/models/Reflection.ts:288](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L288)


### id: number
Unique id of this reflection.
* Inherited from [Reflection](td.models.reflection.md).[id](td.models.reflection.md#id)
* Defined in [td/models/Reflection.ts:224](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L224)


### kind: [ReflectionKind](../enums/td.models.reflectionkind.md)
The kind of this reflection.
* Inherited from [Reflection](td.models.reflection.md).[kind](td.models.reflection.md#kind)
* Defined in [td/models/Reflection.ts:239](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L239)


### kindString: string
The human readable string representation of the kind of this reflection.
* Inherited from [Reflection](td.models.reflection.md).[kindString](td.models.reflection.md#kindstring)
* Defined in [td/models/Reflection.ts:244](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L244)


### name: string
The symbol name of this reflection.
* Inherited from [Reflection](td.models.reflection.md).[name](td.models.reflection.md#name)
* Defined in [td/models/Reflection.ts:229](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L229)


### originalName: string
The original name of the TypeScript declaration.
* Inherited from [Reflection](td.models.reflection.md).[originalName](td.models.reflection.md#originalname)
* Defined in [td/models/Reflection.ts:234](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L234)


### parent: [Reflection](td.models.reflection.md)
The reflection this reflection is a child of.
* Inherited from [Reflection](td.models.reflection.md).[parent](td.models.reflection.md#parent)
* Defined in [td/models/Reflection.ts:251](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L251)


### sources: [ISourceReference](../interfaces/td.models.isourcereference.md)[]
A list of all source files that contributed to this reflection.
* Inherited from [Reflection](td.models.reflection.md).[sources](td.models.reflection.md#sources)
* Defined in [td/models/Reflection.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L261)


### url: string
The url of this reflection in the generated documentation.
* Inherited from [Reflection](td.models.reflection.md).[url](td.models.reflection.md#url)
* Defined in [td/models/Reflection.ts:276](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L276)


## Methods

### findReflectionByName(name: string): [Reflection](td.models.reflection.md)findReflectionByName(names: string[]): [Reflection](td.models.reflection.md)
Try to find a reflection by its name.  
* Inherited from [Reflection](td.models.reflection.md).[findReflectionByName](td.models.reflection.md#findreflectionbyname)
* Defined in [td/models/Reflection.ts:515](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L515)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name to look for. Might contain a hierarchy. |

#### Returns: [Reflection](td.models.reflection.md)
The found reflection or null.

Try to find a reflection by its name.  
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
* Inherited from [Reflection](td.models.reflection.md).[getAlias](td.models.reflection.md#getalias)
* Defined in [td/models/Reflection.ts:436](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L436)

#### Returns: string

### getChildByName(name: string): [Reflection](td.models.reflection.md)getChildByName(names: string[]): [Reflection](td.models.reflection.md)
Return a child by its name.  
* Inherited from [Reflection](td.models.reflection.md).[getChildByName](td.models.reflection.md#getchildbyname)
* Defined in [td/models/Reflection.ts:481](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L481)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name of the child to look for. Might contain a hierarchy. |

#### Returns: [Reflection](td.models.reflection.md)
The found child or NULL.

Return a child by its name.  
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
* Defined in [td/models/reflections/ContainerReflection.ts:23](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ContainerReflection.ts#L23)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The desired kind of children. |

#### Returns: [DeclarationReflection](td.models.declarationreflection.md)[]
An array containing all children with the desired kind.


### getFullName(separator = ".": string): string
Return the full name of this reflection.The full name contains the name of this reflection and the names of all parent reflections.  
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
* Inherited from [Reflection](td.models.reflection.md).[hasComment](td.models.reflection.md#hascomment)
* Defined in [td/models/Reflection.ts:468](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L468)

#### Returns: boolean
TRUE when this reflection has a visible comment.


### hasGetterOrSetter(): boolean
  
* Inherited from [Reflection](td.models.reflection.md).[hasGetterOrSetter](td.models.reflection.md#hasgetterorsetter)
* Defined in [td/models/Reflection.ts:473](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L473)

#### Returns: boolean

### kindOf(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)): booleankindOf(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)[]): boolean
Test whether this reflection is of the given kind.  
* Inherited from [Reflection](td.models.reflection.md).[kindOf](td.models.reflection.md#kindof)
* Defined in [td/models/Reflection.ts:322](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L322)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The kind to test for. |

#### Returns: boolean
Test whether this reflection is of the given kind.  
* Inherited from [Reflection](td.models.reflection.md).[kindOf](td.models.reflection.md#kindof)
* Defined in [td/models/Reflection.ts:327](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L327)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)[]| An array of kinds to test for. |

#### Returns: boolean

### setFlag(flag: [ReflectionFlag](../enums/td.models.reflectionflag.md), value = true: boolean): void
Set a flag on this reflection.  
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
* Overwrites [Reflection](td.models.reflection.md).[toObject](td.models.reflection.md#toobject)
* Defined in [td/models/reflections/ContainerReflection.ts:53](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ContainerReflection.ts#L53)

#### Returns: any

### toString(): string
Return a string representation of this reflection.  
* Inherited from [Reflection](td.models.reflection.md).[toString](td.models.reflection.md#tostring)
* Defined in [td/models/Reflection.ts:603](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L603)

#### Returns: string

### toStringHierarchy(indent = "": string): string
Return a string representation of this reflection and all of its children.  
* Inherited from [Reflection](td.models.reflection.md).[toStringHierarchy](td.models.reflection.md#tostringhierarchy)
* Defined in [td/models/Reflection.ts:613](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L613)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| indent = "" | string| Used internally to indent child reflections. |

#### Returns: string

### traverse(callback: [ITraverseCallback](../interfaces/td.models.itraversecallback.md)): void
Traverse all potential child reflections of this reflection.The given callback will be invoked for all children, signatures and type parametersattached to this reflection.  
* Overwrites [Reflection](td.models.reflection.md).[traverse](td.models.reflection.md#traverse)
* Defined in [td/models/reflections/ContainerReflection.ts:43](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ContainerReflection.ts#L43)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | [ITraverseCallback](../interfaces/td.models.itraversecallback.md)| The callback function that should be applied for each child reflection. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
