# Class Event
Base class of all events.Events are emitted by [[EventDispatcher]] and are passed to allhandlers registered for the associated event name.

## Index

### Properties
* [isDefaultPrevented](td.event.md#isdefaultprevented)
* [isPropagationStopped](td.event.md#ispropagationstopped)

### Methods
* [preventDefault](td.event.md#preventdefault)
* [stopPropagation](td.event.md#stoppropagation)

## Properties

### isDefaultPrevented: boolean
Has [[Event.preventDefault]] been called?
* Defined in [td/EventDispatcher.ts:26](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L26)


### isPropagationStopped: boolean
Has [[Event.stopPropagation]] been called?
* Defined in [td/EventDispatcher.ts:21](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L21)


## Methods

### preventDefault(): void
Prevent the default action associated with this event from being executed.  
* Defined in [td/EventDispatcher.ts:40](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L40)

#### Returns: void

### stopPropagation(): void
Stop the propagation of this event. Remaining event handlers will not be executed.  
* Defined in [td/EventDispatcher.ts:32](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L32)

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
