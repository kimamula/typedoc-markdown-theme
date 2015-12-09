# Class NavigationItem
A hierarchical model holding the data of single node within the navigation.This structure is used by the [[NavigationPlugin]] and [[TocPlugin]] to expose the currentnavigation state to the template engine. Themes should generate the primary navigation structurethrough the [[BaseTheme.getNavigation]] method.

## Index

### Constructors
* [constructor](td.output.navigationitem.md#constructor)

### Properties
* [children](td.output.navigationitem.md#children)
* [cssClasses](td.output.navigationitem.md#cssclasses)
* [dedicatedUrls](td.output.navigationitem.md#dedicatedurls)
* [isCurrent](td.output.navigationitem.md#iscurrent)
* [isGlobals](td.output.navigationitem.md#isglobals)
* [isInPath](td.output.navigationitem.md#isinpath)
* [isLabel](td.output.navigationitem.md#islabel)
* [isVisible](td.output.navigationitem.md#isvisible)
* [parent](td.output.navigationitem.md#parent)
* [title](td.output.navigationitem.md#title)
* [url](td.output.navigationitem.md#url)

### Methods
* [create](td.output.navigationitem.md#create)

## Constructors

### new NavigationItem(title?: string, url?: string, parent?: [NavigationItem](td.output.navigationitem.md), cssClasses?: string): [NavigationItem](td.output.navigationitem.md)
Create a new NavigationItem instance.  
* Defined in [td/output/models/NavigationItem.ts:65](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/models/NavigationItem.ts#L65)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| title? | string| The visible title of the navigation node. |
| url? | string| The url this navigation node points to. |
| parent? | [NavigationItem](td.output.navigationitem.md)| The parent navigation node. |
| cssClasses? | string| A string containing the css classes of this node. |

#### Returns: [NavigationItem](td.output.navigationitem.md)

## Properties

### children: [NavigationItem](td.output.navigationitem.md)[]
An array containing all child navigation nodes.
* Defined in [td/output/models/NavigationItem.ts:35](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/models/NavigationItem.ts#L35)


### cssClasses: string
A string containing the css classes of this node.
* Defined in [td/output/models/NavigationItem.ts:40](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/models/NavigationItem.ts#L40)


### dedicatedUrls: string[]
A list of urls that should be seen as sub-pages of this node.
* Defined in [td/output/models/NavigationItem.ts:25](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/models/NavigationItem.ts#L25)


### isCurrent: boolean
Does this navigation node represent the current page?
* Defined in [td/output/models/NavigationItem.ts:55](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/models/NavigationItem.ts#L55)


### isGlobals: boolean
Is this the navigation node for the globals page?
* Defined in [td/output/models/NavigationItem.ts:60](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/models/NavigationItem.ts#L60)


### isInPath: boolean
Is this navigation node one of the parents of the current page?
* Defined in [td/output/models/NavigationItem.ts:65](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/models/NavigationItem.ts#L65)


### isLabel: boolean
Is this item a simple label without a link?
* Defined in [td/output/models/NavigationItem.ts:45](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/models/NavigationItem.ts#L45)


### isVisible: boolean
Is this item visible?
* Defined in [td/output/models/NavigationItem.ts:50](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/models/NavigationItem.ts#L50)


### parent: [NavigationItem](td.output.navigationitem.md)
The parent navigation node.
* Defined in [td/output/models/NavigationItem.ts:30](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/models/NavigationItem.ts#L30)


### title: string
The visible title of the navigation node.
* Defined in [td/output/models/NavigationItem.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/models/NavigationItem.ts#L15)


### url: string
The url this navigation node points to.
* Defined in [td/output/models/NavigationItem.ts:20](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/models/NavigationItem.ts#L20)


## Methods

### Static create(reflection: [Reflection](td.models.reflection.md), parent?: [NavigationItem](td.output.navigationitem.md), useShortNames?: boolean): [NavigationItem](td.output.navigationitem.md)
Create a navigation node for the given reflection.  
* Defined in [td/output/models/NavigationItem.ts:101](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/models/NavigationItem.ts#L101)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| reflection | [Reflection](td.models.reflection.md)| The reflection whose navigation node should be created. |
| parent? | [NavigationItem](td.output.navigationitem.md)| The parent navigation node. |
| useShortNames? | boolean| Force this function to always use short names. |

#### Returns: [NavigationItem](td.output.navigationitem.md)


Generated using [TypeDoc](http://typedoc.io)
