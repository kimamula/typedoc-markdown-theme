# Class ProjectReflection
A reflection that represents the root of the project.The project reflection acts as a global index, one may receive all reflectionsand source files of the processed project through this reflection.

### Extends
* [ContainerReflection](td.models.containerreflection.md)

## Index

### Constructors
* [constructor](td.models.projectreflection.md#constructor)

### Properties
* [anchor](td.models.projectreflection.md#anchor)
* [children](td.models.projectreflection.md#children)
* [comment](td.models.projectreflection.md#comment)
* [cssClasses](td.models.projectreflection.md#cssclasses)
* [decorates](td.models.projectreflection.md#decorates)
* [decorators](td.models.projectreflection.md#decorators)
* [directory](td.models.projectreflection.md#directory)
* [files](td.models.projectreflection.md#files)
* [flags](td.models.projectreflection.md#flags)
* [groups](td.models.projectreflection.md#groups)
* [hasOwnDocument](td.models.projectreflection.md#hasowndocument)
* [id](td.models.projectreflection.md#id)
* [kind](td.models.projectreflection.md#kind)
* [kindString](td.models.projectreflection.md#kindstring)
* [name](td.models.projectreflection.md#name)
* [originalName](td.models.projectreflection.md#originalname)
* [packageInfo](td.models.projectreflection.md#packageinfo)
* [parent](td.models.projectreflection.md#parent)
* [readme](td.models.projectreflection.md#readme)
* [reflections](td.models.projectreflection.md#reflections)
* [sources](td.models.projectreflection.md#sources)
* [symbolMapping](td.models.projectreflection.md#symbolmapping)
* [url](td.models.projectreflection.md#url)

### Methods
* [findReflectionByName](td.models.projectreflection.md#findreflectionbyname)
* [getAlias](td.models.projectreflection.md#getalias)
* [getChildByName](td.models.projectreflection.md#getchildbyname)
* [getChildrenByKind](td.models.projectreflection.md#getchildrenbykind)
* [getFullName](td.models.projectreflection.md#getfullname)
* [getReflectionsByKind](td.models.projectreflection.md#getreflectionsbykind)
* [hasComment](td.models.projectreflection.md#hascomment)
* [hasGetterOrSetter](td.models.projectreflection.md#hasgetterorsetter)
* [kindOf](td.models.projectreflection.md#kindof)
* [setFlag](td.models.projectreflection.md#setflag)
* [toObject](td.models.projectreflection.md#toobject)
* [toString](td.models.projectreflection.md#tostring)
* [toStringHierarchy](td.models.projectreflection.md#tostringhierarchy)
* [traverse](td.models.projectreflection.md#traverse)

## Constructors

### new ProjectReflection(name: string): [ProjectReflection](td.models.projectreflection.md)
Create a new ProjectReflection instance.  
* Overwrites [Reflection](td.models.reflection.md).[constructor](td.models.reflection.md#constructor)
* Defined in [td/models/reflections/ProjectReflection.ts:43](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ProjectReflection.ts#L43)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name of the project. |

#### Returns: [ProjectReflection](td.models.projectreflection.md)

## Properties

### anchor: string
The name of the anchor of this child.
* Inherited from [Reflection](td.models.reflection.md).[anchor](td.models.reflection.md#anchor)
* Defined in [td/models/Reflection.ts:281](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L281)


### children: [DeclarationReflection](td.models.declarationreflection.md)[]
The children of this reflection.
* Inherited from [ContainerReflection](td.models.containerreflection.md).[children](td.models.containerreflection.md#children)
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


### directory: [SourceDirectory](td.models.sourcedirectory.md)
The root directory of the project.
* Defined in [td/models/reflections/ProjectReflection.ts:21](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ProjectReflection.ts#L21)


### files: [SourceFile](td.models.sourcefile.md)[]
A list of all source files within the project.
* Defined in [td/models/reflections/ProjectReflection.ts:26](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ProjectReflection.ts#L26)


### flags: [IReflectionFlags](../interfaces/td.models.ireflectionflags.md)

* Inherited from [Reflection](td.models.reflection.md).[flags](td.models.reflection.md#flags)
* Defined in [td/models/Reflection.ts:246](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L246)


### groups: [ReflectionGroup](td.models.reflectiongroup.md)[]
All children grouped by their kind.
* Inherited from [ContainerReflection](td.models.containerreflection.md).[groups](td.models.containerreflection.md#groups)
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
The name of the project.The name can be passed as a commandline argument or it is read from the package info.
* Overwrites [Reflection](td.models.reflection.md).[name](td.models.reflection.md#name)
* Defined in [td/models/reflections/ProjectReflection.ts:33](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ProjectReflection.ts#L33)


### originalName: string
The original name of the TypeScript declaration.
* Inherited from [Reflection](td.models.reflection.md).[originalName](td.models.reflection.md#originalname)
* Defined in [td/models/Reflection.ts:234](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L234)


### packageInfo: any
The parsed data of the package.json file of the project when found.
* Defined in [td/models/reflections/ProjectReflection.ts:43](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ProjectReflection.ts#L43)


### parent: [Reflection](td.models.reflection.md)
The reflection this reflection is a child of.
* Inherited from [Reflection](td.models.reflection.md).[parent](td.models.reflection.md#parent)
* Defined in [td/models/Reflection.ts:251](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L251)


### readme: string
The contents of the readme.md file of the project when found.
* Defined in [td/models/reflections/ProjectReflection.ts:38](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ProjectReflection.ts#L38)


### reflections: [id: number]: [Reflection](td.models.reflection.md)
A list of all reflections within the project.
* Defined in [td/models/reflections/ProjectReflection.ts:14](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ProjectReflection.ts#L14)


### sources: [ISourceReference](../interfaces/td.models.isourcereference.md)[]
A list of all source files that contributed to this reflection.
* Inherited from [Reflection](td.models.reflection.md).[sources](td.models.reflection.md#sources)
* Defined in [td/models/Reflection.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L261)


### symbolMapping: [symbolId: number]: number

* Defined in [td/models/reflections/ProjectReflection.ts:16](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ProjectReflection.ts#L16)


### url: string
The url of this reflection in the generated documentation.
* Inherited from [Reflection](td.models.reflection.md).[url](td.models.reflection.md#url)
* Defined in [td/models/Reflection.ts:276](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L276)


## Methods

### findReflectionByName(name: string): [Reflection](td.models.reflection.md)findReflectionByName(names: string[]): [Reflection](td.models.reflection.md)
Try to find a reflection by its name.  
* Overwrites [Reflection](td.models.reflection.md).[findReflectionByName](td.models.reflection.md#findreflectionbyname)
* Defined in [td/models/reflections/ProjectReflection.ts:78](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ProjectReflection.ts#L78)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name to look for. Might contain a hierarchy. |

#### Returns: [Reflection](td.models.reflection.md)
The found reflection or null.

Try to find a reflection by its name.  
* Overwrites [Reflection](td.models.reflection.md).[findReflectionByName](td.models.reflection.md#findreflectionbyname)
* Defined in [td/models/reflections/ProjectReflection.ts:83](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ProjectReflection.ts#L83)


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
* Inherited from [Reflection](td.models.reflection.md).[getFullName](td.models.reflection.md#getfullname)
* Defined in [td/models/Reflection.ts:354](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L354)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| separator = "." | string| Separator used to join the names of the reflections. |

#### Returns: string
The full name of this reflection.


### getReflectionsByKind(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)): [DeclarationReflection](td.models.declarationreflection.md)[]
Return a list of all reflections in this project of a certain kind.  
* Defined in [td/models/reflections/ProjectReflection.ts:62](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ProjectReflection.ts#L62)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The desired kind of reflection. |

#### Returns: [DeclarationReflection](td.models.declarationreflection.md)[]
An array containing all reflections with the desired kind.


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
* Inherited from [ContainerReflection](td.models.containerreflection.md).[toObject](td.models.containerreflection.md#toobject)
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
* Inherited from [ContainerReflection](td.models.containerreflection.md).[traverse](td.models.containerreflection.md#traverse)
* Overwrites [Reflection](td.models.reflection.md).[traverse](td.models.reflection.md#traverse)
* Defined in [td/models/reflections/ContainerReflection.ts:43](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/reflections/ContainerReflection.ts#L43)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | [ITraverseCallback](../interfaces/td.models.itraversecallback.md)| The callback function that should be applied for each child reflection. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
