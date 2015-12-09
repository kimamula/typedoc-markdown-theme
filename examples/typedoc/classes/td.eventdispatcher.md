# Class EventDispatcher
Base class of all objects dispatching events.Events are dispatched by calling [[EventDispatcher.dispatch]]. Events must have a name andthey can carry additional arguments that are passed to all handlers. The first argument canbe an instance of [[Event]] providing additional functionality.

## Index

### Properties
* [listeners](td.eventdispatcher.md#listeners)

### Methods
* [dispatch](td.eventdispatcher.md#dispatch)
* [off](td.eventdispatcher.md#off)
* [on](td.eventdispatcher.md#on)

## Properties

### Private listeners: [event: string]: [IListener](../interfaces/td.ilistener.md)[]
List of all registered handlers grouped by event name.
* Defined in [td/EventDispatcher.ts:58](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L58)


## Methods

### dispatch(event: string, ...args: any[]): void
Dispatch an event with the given event name.  
* Defined in [td/EventDispatcher.ts:67](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L67)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string| The name of the event to dispatch. |
| ...args | any[]| Additional arguments to pass to the handlers. |

#### Returns: void

### off(event =  null: string, handler =  null: Function, scope =  null: any): void
Remove an event handler.  
* Defined in [td/EventDispatcher.ts:119](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L119)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event =  null | string| The name of the event whose handlers should be removed. |
| handler =  null | Function| The callback that should be removed. |
| scope =  null | any| The scope of the callback that should be removed. |

#### Returns: void

### on(event: string, handler: Function, scope =  null: any, priority = 0: number): void
Register an event handler for the given event name.  
* Defined in [td/EventDispatcher.ts:97](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L97)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string| The name of the event the handler should be registered to. |
| handler | Function| The callback that should be invoked. |
| scope =  null | any| The scope the callback should be executed in. |
| priority = 0 | number| A numeric value describing the priority of the handler. Handlerswith higher priority will be executed earlier. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
