# Class ReflectionGroup
A group of reflections. All reflections in a group are of the same kind.Reflection groups are created by the ´GroupHandler´ in the resolving phaseof the dispatcher. The main purpose of groups is to be able to more easilyrender human readable children lists in templates.

## Index

### Constructors
* [constructor](td.models.reflectiongroup.md#constructor)

### Properties
* [allChildrenAreExternal](td.models.reflectiongroup.md#allchildrenareexternal)
* [allChildrenAreInherited](td.models.reflectiongroup.md#allchildrenareinherited)
* [allChildrenArePrivate](td.models.reflectiongroup.md#allchildrenareprivate)
* [allChildrenAreProtectedOrPrivate](td.models.reflectiongroup.md#allchildrenareprotectedorprivate)
* [allChildrenHaveOwnDocument](td.models.reflectiongroup.md#allchildrenhaveowndocument)
* [children](td.models.reflectiongroup.md#children)
* [cssClasses](td.models.reflectiongroup.md#cssclasses)
* [kind](td.models.reflectiongroup.md#kind)
* [someChildrenAreExported](td.models.reflectiongroup.md#somechildrenareexported)
* [title](td.models.reflectiongroup.md#title)

### Methods
* [getAllChildrenHaveOwnDocument](td.models.reflectiongroup.md#getallchildrenhaveowndocument)
* [toObject](td.models.reflectiongroup.md#toobject)

## Constructors

### new ReflectionGroup(title: string, kind: [ReflectionKind](../enums/td.models.reflectionkind.md)): [ReflectionGroup](td.models.reflectiongroup.md)
Create a new ReflectionGroup instance.  
* Defined in [td/models/ReflectionGroup.ts:64](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/ReflectionGroup.ts#L64)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| title | string| The title of this group. |
| kind | [ReflectionKind](../enums/td.models.reflectionkind.md)| The original typescript kind of the children of this group. |

#### Returns: [ReflectionGroup](td.models.reflectiongroup.md)

## Properties

### allChildrenAreExternal: boolean
Are all children external members?
* Defined in [td/models/ReflectionGroup.ts:59](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/ReflectionGroup.ts#L59)


### allChildrenAreInherited: boolean
Are all children inherited members?
* Defined in [td/models/ReflectionGroup.ts:44](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/ReflectionGroup.ts#L44)


### allChildrenArePrivate: boolean
Are all children private members?
* Defined in [td/models/ReflectionGroup.ts:49](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/ReflectionGroup.ts#L49)


### allChildrenAreProtectedOrPrivate: boolean
Are all children private or protected members?
* Defined in [td/models/ReflectionGroup.ts:54](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/ReflectionGroup.ts#L54)


### allChildrenHaveOwnDocument: Function
Do all children of this group have a separate document?A bound representation of the ´ReflectionGroup.getAllChildrenHaveOwnDocument´that can be used within templates.
* Defined in [td/models/ReflectionGroup.ts:39](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/ReflectionGroup.ts#L39)


### children: [DeclarationReflection](td.models.declarationreflection.md)[]
All reflections of this group.
* Defined in [td/models/ReflectionGroup.ts:25](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/ReflectionGroup.ts#L25)


### cssClasses: string
A list of generated css classes that should be applied to representations of thisgroup in the generated markup.
* Defined in [td/models/ReflectionGroup.ts:31](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/ReflectionGroup.ts#L31)


### kind: [ReflectionKind](../enums/td.models.reflectionkind.md)
The original typescript kind of the children of this group.
* Defined in [td/models/ReflectionGroup.ts:20](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/ReflectionGroup.ts#L20)


### someChildrenAreExported: boolean
Are any children exported declarations?
* Defined in [td/models/ReflectionGroup.ts:64](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/ReflectionGroup.ts#L64)


### title: string
The title, a string representation of the typescript kind, of this group.
* Defined in [td/models/ReflectionGroup.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/ReflectionGroup.ts#L15)


## Methods

### Private getAllChildrenHaveOwnDocument(): boolean
Do all children of this group have a separate document?  
* Defined in [td/models/ReflectionGroup.ts:84](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/ReflectionGroup.ts#L84)

#### Returns: boolean

### toObject(): any
Return a raw object representation of this reflection group.  
* Defined in [td/models/ReflectionGroup.ts:97](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/ReflectionGroup.ts#L97)

#### Returns: any


Generated using [TypeDoc](http://typedoc.io)
