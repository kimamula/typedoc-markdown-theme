# Class Reflection
Base class for all reflection classes.While generating a documentation, TypeDoc generates an instance of [[ProjectReflection]]as the root for all reflections within the project. All other reflections are representedby the [[DeclarationReflection]] class.This base class exposes the basic properties one may use to traverse the reflection tree.You can use the [[children]] and [[parent]] properties to walk the tree. The [[groups]] propertycontains a list of all children grouped and sorted for being rendered.

## Index

### Constructors
* [constructor](td.models.reflection.md#constructor)

### Properties
* [_alias](td.models.reflection.md#_alias)
* [_aliases](td.models.reflection.md#_aliases)
* [anchor](td.models.reflection.md#anchor)
* [comment](td.models.reflection.md#comment)
* [cssClasses](td.models.reflection.md#cssclasses)
* [decorates](td.models.reflection.md#decorates)
* [decorators](td.models.reflection.md#decorators)
* [flags](td.models.reflection.md#flags)
* [hasOwnDocument](td.models.reflection.md#hasowndocument)
* [id](td.models.reflection.md#id)
* [kind](td.models.reflection.md#kind)
* [kindString](td.models.reflection.md#kindstring)
* [name](td.models.reflection.md#name)
* [originalName](td.models.reflection.md#originalname)
* [parent](td.models.reflection.md#parent)
* [sources](td.models.reflection.md#sources)
* [url](td.models.reflection.md#url)

### Methods
* [findReflectionByName](td.models.reflection.md#findreflectionbyname)
* [getAlias](td.models.reflection.md#getalias)
* [getChildByName](td.models.reflection.md#getchildbyname)
* [getFullName](td.models.reflection.md#getfullname)
* [hasComment](td.models.reflection.md#hascomment)
* [hasGetterOrSetter](td.models.reflection.md#hasgetterorsetter)
* [kindOf](td.models.reflection.md#kindof)
* [setFlag](td.models.reflection.md#setflag)
* [toObject](td.models.reflection.md#toobject)
* [toString](td.models.reflection.md#tostring)
* [toStringHierarchy](td.models.reflection.md#tostringhierarchy)
* [traverse](td.models.reflection.md#traverse)

## Constructors

### new Reflection(parent?: [Reflection](td.models.reflection.md), name?: string, kind?: [ReflectionKind](../enums/td.models.reflectionkind.md)): [Reflection](td.models.reflection.md)
Create a new BaseReflection instance.  
* Defined in [td/models/Reflection.ts:303](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L303)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| parent? | [Reflection](td.models.reflection.md)|  |
| name? | string|  |
| kind? | [ReflectionKind](../enums/td.models.reflectionkind.md)|  |

#### Returns: [Reflection](td.models.reflection.md)

## Properties

### Private _alias: string
Url safe alias for this reflection. see [[BaseReflection.getAlias]]

* Defined in [td/models/Reflection.ts:301](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L301)


### Private _aliases: string[]

* Defined in [td/models/Reflection.ts:303](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L303)


### anchor: string
The name of the anchor of this child.
* Defined in [td/models/Reflection.ts:281](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L281)


### comment: [Comment](td.models.comment.md)
The parsed documentation comment attached to this reflection.
* Defined in [td/models/Reflection.ts:256](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L256)


### cssClasses: string
A list of generated css classes that should be applied to representations of thisreflection in the generated markup.
* Defined in [td/models/Reflection.ts:294](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L294)


### decorates: [Type](td.models.type.md)[]
A list of all types that are decorated by this reflection.
* Defined in [td/models/Reflection.ts:271](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L271)


### decorators: [IDecorator](../interfaces/td.models.idecorator.md)[]
A list of all decorators attached to this reflection.
* Defined in [td/models/Reflection.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L266)


### flags: [IReflectionFlags](../interfaces/td.models.ireflectionflags.md)

* Defined in [td/models/Reflection.ts:246](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L246)


### hasOwnDocument: boolean
Is the url pointing to an individual document?When FALSE, the url points to an anchor tag on a page of a different reflection.
* Defined in [td/models/Reflection.ts:288](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L288)


### id: number
Unique id of this reflection.
* Defined in [td/models/Reflection.ts:224](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L224)


### kind: [ReflectionKind](../enums/td.models.reflectionkind.md)
The kind of this reflection.
* Defined in [td/models/Reflection.ts:239](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L239)


### kindString: string
The human readable string representation of the kind of this reflection.
* Defined in [td/models/Reflection.ts:244](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L244)


### name: string
The symbol name of this reflection.
* Defined in [td/models/Reflection.ts:229](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L229)


### originalName: string
The original name of the TypeScript declaration.
* Defined in [td/models/Reflection.ts:234](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L234)


### parent: [Reflection](td.models.reflection.md)
The reflection this reflection is a child of.
* Defined in [td/models/Reflection.ts:251](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L251)


### sources: [ISourceReference](../interfaces/td.models.isourcereference.md)[]
A list of all source files that contributed to this reflection.
* Defined in [td/models/Reflection.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L261)


### url: string
The url of this reflection in the generated documentation.
* Defined in [td/models/Reflection.ts:276](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L276)


## Methods

### findReflectionByName(name: string): [Reflection](td.models.reflection.md)findReflectionByName(names: string[]): [Reflection](td.models.reflection.md)
Try to find a reflection by its name.  
* Defined in [td/models/Reflection.ts:515](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L515)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name to look for. Might contain a hierarchy. |

#### Returns: [Reflection](td.models.reflection.md)
The found reflection or null.

Try to find a reflection by its name.  
* Defined in [td/models/Reflection.ts:520](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L520)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| names | string[]| The name hierarchy to look for. |

#### Returns: [Reflection](td.models.reflection.md)
The found reflection or null.


### getAlias(): string
Return an url safe alias for this reflection.  
* Defined in [td/models/Reflection.ts:436](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L436)

#### Returns: string

### getChildByName(name: string): [Reflection](td.models.reflection.md)getChildByName(names: string[]): [Reflection](td.models.reflection.md)
Return a child by its name.  
* Defined in [td/models/Reflection.ts:481](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L481)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name of the child to look for. Might contain a hierarchy. |

#### Returns: [Reflection](td.models.reflection.md)
The found child or NULL.

Return a child by its name.  
* Defined in [td/models/Reflection.ts:486](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L486)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| names | string[]| The name hierarchy of the child to look for. |

#### Returns: [Reflection](td.models.reflection.md)
The found child or NULL.


### getFullName(separator = ".": string): string
Return the full name of this reflection.The full name contains the name of this reflection and the names of all parent reflections.  
* Defined in [td/models/Reflection.ts:354](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L354)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| separator = "." | string| Separator used to join the names of the reflections. |

#### Returns: string
The full name of this reflection.


### hasComment(): boolean
Has this reflection a visible comment?  
* Defined in [td/models/Reflection.ts:468](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L468)

#### Returns: boolean
TRUE when this reflection has a visible comment.


### hasGetterOrSetter(): boolean
  
* Defined in [td/models/Reflection.ts:473](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L473)

#### Returns: boolean

### kindOf(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)): booleankindOf(kind: [ReflectionKind](../enums/td.models.reflectionkind.md)[]): boolean
Test whether this reflection is of the given kind.  
* Defined in [td/models/Reflection.ts:322](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L322)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The kind to test for. |

#### Returns: boolean
Test whether this reflection is of the given kind.  
* Defined in [td/models/Reflection.ts:327](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L327)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)[]| An array of kinds to test for. |

#### Returns: boolean

### setFlag(flag: [ReflectionFlag](../enums/td.models.reflectionflag.md), value = true: boolean): void
Set a flag on this reflection.  
* Defined in [td/models/Reflection.ts:366](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L366)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| flag | [ReflectionFlag](../enums/td.models.reflectionflag.md)|  |
| value = true | boolean|  |

#### Returns: void

### toObject(): any
Return a raw object representation of this reflection.  
* Defined in [td/models/Reflection.ts:553](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L553)

#### Returns: any

### toString(): string
Return a string representation of this reflection.  
* Defined in [td/models/Reflection.ts:603](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L603)

#### Returns: string

### toStringHierarchy(indent = "": string): string
Return a string representation of this reflection and all of its children.  
* Defined in [td/models/Reflection.ts:613](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L613)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| indent = "" | string| Used internally to indent child reflections. |

#### Returns: string

### traverse(callback: [ITraverseCallback](../interfaces/td.models.itraversecallback.md)): void
Traverse all potential child reflections of this reflection.The given callback will be invoked for all children, signatures and type parametersattached to this reflection.  
* Defined in [td/models/Reflection.ts:547](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L547)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | [ITraverseCallback](../interfaces/td.models.itraversecallback.md)| The callback function that should be applied for each child reflection. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
