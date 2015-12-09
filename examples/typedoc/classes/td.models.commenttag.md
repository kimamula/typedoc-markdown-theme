# Class CommentTag
A model that represents a single javadoc comment tag.Tags are stored in the [[Comment.tags]] property.

## Index

### Constructors
* [constructor](td.models.commenttag.md#constructor)

### Properties
* [paramName](td.models.commenttag.md#paramname)
* [tagName](td.models.commenttag.md#tagname)
* [text](td.models.commenttag.md#text)

### Methods
* [toObject](td.models.commenttag.md#toobject)

## Constructors

### new CommentTag(tagName: string, paramName?: string, text?: string): [CommentTag](td.models.commenttag.md)
Create a new CommentTag instance.  
* Defined in [td/models/CommentTag.ts:23](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/CommentTag.ts#L23)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| tagName | string|  |
| paramName? | string|  |
| text? | string|  |

#### Returns: [CommentTag](td.models.commenttag.md)

## Properties

### paramName: string
The name of the related parameter when this is a ```@param``` tag.
* Defined in [td/models/CommentTag.ts:18](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/CommentTag.ts#L18)


### tagName: string
The name of this tag.
* Defined in [td/models/CommentTag.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/CommentTag.ts#L13)


### text: string
The actual body text of this tag.
* Defined in [td/models/CommentTag.ts:23](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/CommentTag.ts#L23)


## Methods

### toObject(): any
Return a raw object representation of this tag.  
* Defined in [td/models/CommentTag.ts:39](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/CommentTag.ts#L39)

#### Returns: any


Generated using [TypeDoc](http://typedoc.io)
