# Interface IConverterNodeCallback
Event callback definition for events triggered by factories. see [[Converter.EVENT_FILE_BEGIN]] see [[Converter.EVENT_CREATE_DECLARATION]] see [[Converter.EVENT_CREATE_SIGNATURE]] see [[Converter.EVENT_CREATE_PARAMETER]] see [[Converter.EVENT_CREATE_TYPE_PARAMETER]] see [[Converter.EVENT_FUNCTION_IMPLEMENTATION]]


### Callable
__call(context: [Context](../classes/td.converter.context.md), reflection: [Reflection](../classes/td.models.reflection.md), node?: [Node](ts.node.md)): void
Event callback definition for events triggered by factories.  
* Defined in [td/converter/Converter.ts:86](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L86)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| context | [Context](../classes/td.converter.context.md)| The context object describing the current state the converter is in. |
| reflection | [Reflection](../classes/td.models.reflection.md)| The reflection that is currently processed. |
| node? | [Node](ts.node.md)| The node that is currently processed if available. |

#### Returns: void



Generated using [TypeDoc](http://typedoc.io)
