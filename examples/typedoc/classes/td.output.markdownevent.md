# Class MarkdownEvent
An event emitted by the [[MarkedPlugin]] on the [[Renderer]] after a chunk ofmarkdown has been processed. Allows other plugins to manipulate the result. see [[MarkedPlugin.EVENT_PARSE_MARKDOWN]]


### Extends
* [Event](td.event.md)

## Index

### Properties
* [isDefaultPrevented](td.output.markdownevent.md#isdefaultprevented)
* [isPropagationStopped](td.output.markdownevent.md#ispropagationstopped)
* [originalText](td.output.markdownevent.md#originaltext)
* [parsedText](td.output.markdownevent.md#parsedtext)

### Methods
* [preventDefault](td.output.markdownevent.md#preventdefault)
* [stopPropagation](td.output.markdownevent.md#stoppropagation)

## Properties

### isDefaultPrevented: boolean
Has [[Event.preventDefault]] been called?
* Inherited from [Event](td.event.md).[isDefaultPrevented](td.event.md#isdefaultprevented)
* Defined in [td/EventDispatcher.ts:26](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L26)


### isPropagationStopped: boolean
Has [[Event.stopPropagation]] been called?
* Inherited from [Event](td.event.md).[isPropagationStopped](td.event.md#ispropagationstopped)
* Defined in [td/EventDispatcher.ts:21](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L21)


### originalText: string
The unparsed original text.
* Defined in [td/output/events/MarkdownEvent.ts:14](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/MarkdownEvent.ts#L14)


### parsedText: string
The parsed output.
* Defined in [td/output/events/MarkdownEvent.ts:19](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/MarkdownEvent.ts#L19)


## Methods

### preventDefault(): void
Prevent the default action associated with this event from being executed.  
* Inherited from [Event](td.event.md).[preventDefault](td.event.md#preventdefault)
* Defined in [td/EventDispatcher.ts:40](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L40)

#### Returns: void

### stopPropagation(): void
Stop the propagation of this event. Remaining event handlers will not be executed.  
* Inherited from [Event](td.event.md).[stopPropagation](td.event.md#stoppropagation)
* Defined in [td/EventDispatcher.ts:32](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L32)

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
