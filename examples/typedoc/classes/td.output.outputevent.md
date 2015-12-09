# Class OutputEvent
An event emitted by the [[Renderer]] class at the very beginning andending of the entire rendering process. see [[Renderer.EVENT_BEGIN]] see [[Renderer.EVENT_END]]


### Extends
* [Event](td.event.md)

## Index

### Properties
* [isDefaultPrevented](td.output.outputevent.md#isdefaultprevented)
* [isPropagationStopped](td.output.outputevent.md#ispropagationstopped)
* [outputDirectory](td.output.outputevent.md#outputdirectory)
* [project](td.output.outputevent.md#project)
* [settings](td.output.outputevent.md#settings)
* [urls](td.output.outputevent.md#urls)

### Methods
* [createPageEvent](td.output.outputevent.md#createpageevent)
* [preventDefault](td.output.outputevent.md#preventdefault)
* [stopPropagation](td.output.outputevent.md#stoppropagation)

## Properties

### isDefaultPrevented: boolean
Has [[Event.preventDefault]] been called?
* Inherited from [Event](td.event.md).[isDefaultPrevented](td.event.md#isdefaultprevented)
* Defined in [td/EventDispatcher.ts:26](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L26)


### isPropagationStopped: boolean
Has [[Event.stopPropagation]] been called?
* Inherited from [Event](td.event.md).[isPropagationStopped](td.event.md#ispropagationstopped)
* Defined in [td/EventDispatcher.ts:21](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L21)


### outputDirectory: string
The path of the directory the documentation should be written to.
* Defined in [td/output/events/OutputEvent.ts:25](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputEvent.ts#L25)


### project: [ProjectReflection](td.models.projectreflection.md)
The project the renderer is currently processing.
* Defined in [td/output/events/OutputEvent.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputEvent.ts#L15)


### settings: IOptions
The settings that have been passed to TypeDoc.
* Defined in [td/output/events/OutputEvent.ts:20](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputEvent.ts#L20)


### urls: [UrlMapping](td.output.urlmapping.md)[]
A list of all pages that should be generated.This list can be altered during the [[Renderer.EVENT_BEGIN]] event.
* Defined in [td/output/events/OutputEvent.ts:32](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputEvent.ts#L32)


## Methods

### createPageEvent(mapping: [UrlMapping](td.output.urlmapping.md)): [OutputPageEvent](td.output.outputpageevent.md)
Create an [[OutputPageEvent]] event based on this event and the given url mapping. internal   
* Defined in [td/output/events/OutputEvent.ts:42](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputEvent.ts#L42)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| mapping | [UrlMapping](td.output.urlmapping.md)| The mapping that defines the generated [[OutputPageEvent]] state. |

#### Returns: [OutputPageEvent](td.output.outputpageevent.md)
A newly created [[OutputPageEvent]] instance.


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
