# Class Worker


### Extends
* [EventEmitter](_events_.eventemitter.md)

### Implements
* [EventEmitter](../interfaces/nodejs.eventemitter.md)

## Index

### Properties
* [id](_cluster_.worker.md#id)
* [process](_cluster_.worker.md#process)
* [suicide](_cluster_.worker.md#suicide)

### Methods
* [addListener](_cluster_.worker.md#addlistener)
* [destroy](_cluster_.worker.md#destroy)
* [disconnect](_cluster_.worker.md#disconnect)
* [emit](_cluster_.worker.md#emit)
* [kill](_cluster_.worker.md#kill)
* [listeners](_cluster_.worker.md#listeners)
* [on](_cluster_.worker.md#on)
* [once](_cluster_.worker.md#once)
* [removeAllListeners](_cluster_.worker.md#removealllisteners)
* [removeListener](_cluster_.worker.md#removelistener)
* [send](_cluster_.worker.md#send)
* [setMaxListeners](_cluster_.worker.md#setmaxlisteners)
* [listenerCount](_cluster_.worker.md#listenercount)

## Properties

### id: string

* Defined in [lib/node/node.d.ts:411](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L411)


### process: [ChildProcess](../interfaces/_child_process_.childprocess.md)

* Defined in [lib/node/node.d.ts:412](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L412)


### suicide: boolean

* Defined in [lib/node/node.d.ts:413](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L413)


## Methods

### addListener(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[addListener](../interfaces/nodejs.eventemitter.md#addlistener)
* Inherited from [EventEmitter](_events_.eventemitter.md).[addListener](_events_.eventemitter.md#addlistener)
* Defined in [lib/node/node.d.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L261)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### destroy(signal?: string): void
  
* Defined in [lib/node/node.d.ts:416](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L416)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| signal? | string|  |

#### Returns: void

### disconnect(): void
  
* Defined in [lib/node/node.d.ts:417](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L417)

#### Returns: void

### emit(event: string, ...args: any[]): boolean
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[emit](../interfaces/nodejs.eventemitter.md#emit)
* Inherited from [EventEmitter](_events_.eventemitter.md).[emit](_events_.eventemitter.md#emit)
* Defined in [lib/node/node.d.ts:268](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L268)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### kill(signal?: string): void
  
* Defined in [lib/node/node.d.ts:415](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L415)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| signal? | string|  |

#### Returns: void

### listeners(event: string): Function[]
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[listeners](../interfaces/nodejs.eventemitter.md#listeners)
* Inherited from [EventEmitter](_events_.eventemitter.md).[listeners](_events_.eventemitter.md#listeners)
* Defined in [lib/node/node.d.ts:267](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L267)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[on](../interfaces/nodejs.eventemitter.md#on)
* Inherited from [EventEmitter](_events_.eventemitter.md).[on](_events_.eventemitter.md#on)
* Defined in [lib/node/node.d.ts:262](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L262)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[once](../interfaces/nodejs.eventemitter.md#once)
* Inherited from [EventEmitter](_events_.eventemitter.md).[once](_events_.eventemitter.md#once)
* Defined in [lib/node/node.d.ts:263](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L263)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### removeAllListeners(event?: string): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[removeAllListeners](../interfaces/nodejs.eventemitter.md#removealllisteners)
* Inherited from [EventEmitter](_events_.eventemitter.md).[removeAllListeners](_events_.eventemitter.md#removealllisteners)
* Defined in [lib/node/node.d.ts:265](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L265)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[removeListener](../interfaces/nodejs.eventemitter.md#removelistener)
* Inherited from [EventEmitter](_events_.eventemitter.md).[removeListener](_events_.eventemitter.md#removelistener)
* Defined in [lib/node/node.d.ts:264](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L264)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### send(message: any, sendHandle?: any): void
  
* Defined in [lib/node/node.d.ts:414](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L414)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| message | any|  |
| sendHandle? | any|  |

#### Returns: void

### setMaxListeners(n: number): void
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[setMaxListeners](../interfaces/nodejs.eventemitter.md#setmaxlisteners)
* Inherited from [EventEmitter](_events_.eventemitter.md).[setMaxListeners](_events_.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L266)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### Static listenerCount(emitter: [EventEmitter](_events_.eventemitter.md), event: string): number
  
* Inherited from [EventEmitter](_events_.eventemitter.md).[listenerCount](_events_.eventemitter.md#listenercount)
* Defined in [lib/node/node.d.ts:259](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L259)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| emitter | [EventEmitter](_events_.eventemitter.md)|  |
| event | string|  |

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
