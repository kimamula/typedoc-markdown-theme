# Class CommentPlugin
A handler that parses javadoc comments and attaches [[Models.Comment]] instances tothe generated reflections.

### Extends
* [ConverterPlugin](td.converter.converterplugin.md)

### Implements
* [IPluginInterface](../interfaces/td.iplugininterface.md)

## Index

### Constructors
* [constructor](td.converter.commentplugin.md#constructor)

### Properties
* [comments](td.converter.commentplugin.md#comments)
* [converter](td.converter.commentplugin.md#converter)
* [hidden](td.converter.commentplugin.md#hidden)

### Methods
* [applyModifiers](td.converter.commentplugin.md#applymodifiers)
* [onBegin](td.converter.commentplugin.md#onbegin)
* [onBeginResolve](td.converter.commentplugin.md#onbeginresolve)
* [onCreateTypeParameter](td.converter.commentplugin.md#oncreatetypeparameter)
* [onDeclaration](td.converter.commentplugin.md#ondeclaration)
* [onFunctionImplementation](td.converter.commentplugin.md#onfunctionimplementation)
* [onResolve](td.converter.commentplugin.md#onresolve)
* [remove](td.converter.commentplugin.md#remove)
* [storeModuleComment](td.converter.commentplugin.md#storemodulecomment)
* [getComment](td.converter.commentplugin.md#getcomment)
* [parseComment](td.converter.commentplugin.md#parsecomment)
* [removeReflection](td.converter.commentplugin.md#removereflection)
* [removeTags](td.converter.commentplugin.md#removetags)

## Constructors

### new CommentPlugin(converter: [Converter](td.converter.converter.md)): [CommentPlugin](td.converter.commentplugin.md)
Create a new CommentPlugin instance.  
* Overwrites [ConverterPlugin](td.converter.converterplugin.md).[constructor](td.converter.converterplugin.md#constructor)
* Defined in [td/converter/plugins/CommentPlugin.ts:39](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L39)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| converter | [Converter](td.converter.converter.md)| The converter this plugin should be attached to. |

#### Returns: [CommentPlugin](td.converter.commentplugin.md)

## Properties

### Private comments: [id: number]: [IModuleComment](../interfaces/td.converter.imodulecomment.md)
List of discovered module comments.
* Defined in [td/converter/plugins/CommentPlugin.ts:34](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L34)


### Protected converter: [Converter](td.converter.converter.md)
The converter this plugin is attached to.
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[converter](td.converter.converterplugin.md#converter)
* Defined in [td/converter/ConverterPlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L8)


### Private hidden: [Reflection](td.models.reflection.md)[]
List of hidden reflections.
* Defined in [td/converter/plugins/CommentPlugin.ts:39](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L39)


## Methods

### Private applyModifiers(reflection: [Reflection](td.models.reflection.md), comment: [Comment](td.models.comment.md)): void
Apply all comment tag modifiers to the given reflection.  
* Defined in [td/converter/plugins/CommentPlugin.ts:86](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L86)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| reflection | [Reflection](td.models.reflection.md)| The reflection the modifiers should be applied to. |
| comment | [Comment](td.models.comment.md)| The comment that should be searched for modifiers. |

#### Returns: void

### Private onBegin(context: [Context](td.converter.context.md)): void
Triggered when the converter begins converting a project.  
* Defined in [td/converter/plugins/CommentPlugin.ts:120](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L120)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |

#### Returns: void

### Private onBeginResolve(context: [Context](td.converter.context.md)): void
Triggered when the converter begins resolving a project.  
* Defined in [td/converter/plugins/CommentPlugin.ts:196](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L196)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |

#### Returns: void

### Private onCreateTypeParameter(context: [Context](td.converter.context.md), reflection: [TypeParameterReflection](td.models.typeparameterreflection.md), node?: [Node](../interfaces/ts.node.md)): void
Triggered when the converter has created a type parameter reflection.  
* Defined in [td/converter/plugins/CommentPlugin.ts:132](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L132)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |
| reflection | [TypeParameterReflection](td.models.typeparameterreflection.md)| The reflection that is currently processed. |
| node? | [Node](../interfaces/ts.node.md)| The node that is currently processed if available. |

#### Returns: void

### Private onDeclaration(context: [Context](td.converter.context.md), reflection: [Reflection](td.models.reflection.md), node?: [Node](../interfaces/ts.node.md)): void
Triggered when the converter has created a declaration or signature reflection.Invokes the comment parser.  
* Defined in [td/converter/plugins/CommentPlugin.ts:156](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L156)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |
| reflection | [Reflection](td.models.reflection.md)| The reflection that is currently processed. |
| node? | [Node](../interfaces/ts.node.md)| The node that is currently processed if available. |

#### Returns: void

### Private onFunctionImplementation(context: [Context](td.converter.context.md), reflection: [Reflection](td.models.reflection.md), node?: [Node](../interfaces/ts.node.md)): void
Triggered when the converter has found a function implementation.  
* Defined in [td/converter/plugins/CommentPlugin.ts:181](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L181)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |
| reflection | [Reflection](td.models.reflection.md)| The reflection that is currently processed. |
| node? | [Node](../interfaces/ts.node.md)| The node that is currently processed if available. |

#### Returns: void

### Private onResolve(context: [Context](td.converter.context.md), reflection: [DeclarationReflection](td.models.declarationreflection.md)): void
Triggered when the converter resolves a reflection.Cleans up comment tags related to signatures like @param or @returnand moves their data to the corresponding parameter reflections.This hook also copies over the comment of function implementations to theirsignatures.  
* Defined in [td/converter/plugins/CommentPlugin.ts:229](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L229)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](td.converter.context.md)| The context object describing the current state the converter is in. |
| reflection | [DeclarationReflection](td.models.declarationreflection.md)| The reflection that is currently resolved. |

#### Returns: void

### remove(): void
Removes this plugin.  
* Implementation of [IPluginInterface](../interfaces/td.iplugininterface.md).[remove](../interfaces/td.iplugininterface.md#remove)
* Inherited from [ConverterPlugin](td.converter.converterplugin.md).[remove](td.converter.converterplugin.md#remove)
* Defined in [td/converter/ConverterPlugin.ts:24](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/ConverterPlugin.ts#L24)

#### Returns: void

### Private storeModuleComment(comment: string, reflection: [Reflection](td.models.reflection.md)): void
  
* Defined in [td/converter/plugins/CommentPlugin.ts:59](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L59)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| comment | string|  |
| reflection | [Reflection](td.models.reflection.md)|  |

#### Returns: void

### Static getComment(node: [Node](../interfaces/ts.node.md)): string
Return the raw comment string for the given node.  
* Defined in [td/converter/plugins/CommentPlugin.ts:282](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L282)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Node](../interfaces/ts.node.md)| The node whose comment should be resolved. |

#### Returns: string
The raw comment string or NULL if no comment could be found.


### Static parseComment(text: string, comment =  new models.Comment(): [Comment](td.models.comment.md)): [Comment](td.models.comment.md)
Parse the given doc comment string.  
* Defined in [td/converter/plugins/CommentPlugin.ts:420](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L420)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| text | string| The doc comment string that should be parsed. |
| comment =  new models.Comment() | [Comment](td.models.comment.md)| The [[Models.Comment]] instance the parsed results should be stored into. |

#### Returns: [Comment](td.models.comment.md)
A populated [[Models.Comment]] instance.


### Static removeReflection(project: [ProjectReflection](td.models.projectreflection.md), reflection: [Reflection](td.models.reflection.md)): void
Remove the given reflection from the project.  
* Defined in [td/converter/plugins/CommentPlugin.ts:355](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L355)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| project | [ProjectReflection](td.models.projectreflection.md)|  |
| reflection | [Reflection](td.models.reflection.md)|  |

#### Returns: void

### Static removeTags(comment: [Comment](td.models.comment.md), tagName: string): void
Remove all tags with the given name from the given comment instance.  
* Defined in [td/converter/plugins/CommentPlugin.ts:337](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/CommentPlugin.ts#L337)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| comment | [Comment](td.models.comment.md)| The comment that should be modified. |
| tagName | string| The name of the that that should be removed. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
