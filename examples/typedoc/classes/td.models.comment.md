# Class Comment
A model that represents a javadoc comment.Instances of this model are created by the [[CommentHandler]]. You can retrieve commentsthrough the [[BaseReflection.comment]] property.

## Index

### Constructors
* [constructor](td.models.comment.md#constructor)

### Properties
* [returns](td.models.comment.md#returns)
* [shortText](td.models.comment.md#shorttext)
* [tags](td.models.comment.md#tags)
* [text](td.models.comment.md#text)

### Methods
* [copyFrom](td.models.comment.md#copyfrom)
* [getTag](td.models.comment.md#gettag)
* [hasTag](td.models.comment.md#hastag)
* [hasVisibleComponent](td.models.comment.md#hasvisiblecomponent)
* [toObject](td.models.comment.md#toobject)

## Constructors

### new Comment(shortText?: string, text?: string): [Comment](td.models.comment.md)
Creates a new Comment instance.  
* Defined in [td/models/Comment.ts:30](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Comment.ts#L30)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| shortText? | string|  |
| text? | string|  |

#### Returns: [Comment](td.models.comment.md)

## Properties

### returns: string
The text of the ```@returns``` tag if present.
* Defined in [td/models/Comment.ts:25](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Comment.ts#L25)


### shortText: string
The abstract of the comment. TypeDoc interprets the first paragraph of a commentas the abstract.
* Defined in [td/models/Comment.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Comment.ts#L15)


### tags: [CommentTag](td.models.commenttag.md)[]
All associated javadoc tags.
* Defined in [td/models/Comment.ts:30](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Comment.ts#L30)


### text: string
The full body text of the comment. Excludes the [[shortText]].
* Defined in [td/models/Comment.ts:20](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Comment.ts#L20)


## Methods

### copyFrom(comment: [Comment](td.models.comment.md)): void
Copy the data of the given comment into this comment.  
* Defined in [td/models/Comment.ts:96](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Comment.ts#L96)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| comment | [Comment](td.models.comment.md)|  |

#### Returns: void

### getTag(tagName: string, paramName?: string): [CommentTag](td.models.commenttag.md)
Return the first tag with the given name.You can optionally pass a parameter name that should be searched to.  
* Defined in [td/models/Comment.ts:79](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Comment.ts#L79)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| tagName | string| The name of the tag to look for. |
| paramName? | string| An optional parameter name to look for. |

#### Returns: [CommentTag](td.models.commenttag.md)
The found tag or NULL.


### hasTag(tagName: string): boolean
Test whether this comment contains a tag with the given name.  
* Defined in [td/models/Comment.ts:59](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Comment.ts#L59)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| tagName | string| The name of the tag to look for. |

#### Returns: boolean
TRUE when this comment contains a tag with the given name, otherwise FALSE.


### hasVisibleComponent(): boolean
Has this comment a visible component?  
* Defined in [td/models/Comment.ts:48](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Comment.ts#L48)

#### Returns: boolean
TRUE when this comment has a visible component.


### toObject(): any
Return a raw object representation of this comment.  
* Defined in [td/models/Comment.ts:107](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Comment.ts#L107)

#### Returns: any


Generated using [TypeDoc](http://typedoc.io)
