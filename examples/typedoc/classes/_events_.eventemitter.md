# Class EventEmitter


### Implements
* [EventEmitter](../interfaces/nodejs.eventemitter.md)

## Index

### Methods
* [addListener](_events_.eventemitter.md#addlistener)
* [emit](_events_.eventemitter.md#emit)
* [listeners](_events_.eventemitter.md#listeners)
* [on](_events_.eventemitter.md#on)
* [once](_events_.eventemitter.md#once)
* [removeAllListeners](_events_.eventemitter.md#removealllisteners)
* [removeListener](_events_.eventemitter.md#removelistener)
* [setMaxListeners](_events_.eventemitter.md#setmaxlisteners)
* [listenerCount](_events_.eventemitter.md#listenercount)

## Methods

### addListener(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[addListener](../interfaces/nodejs.eventemitter.md#addlistener)
* Defined in [lib/node/node.d.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L261)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[emit](../interfaces/nodejs.eventemitter.md#emit)
* Defined in [lib/node/node.d.ts:268](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L268)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### listeners(event: string): Function[]
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[listeners](../interfaces/nodejs.eventemitter.md#listeners)
* Defined in [lib/node/node.d.ts:267](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L267)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[on](../interfaces/nodejs.eventemitter.md#on)
* Defined in [lib/node/node.d.ts:262](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L262)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[once](../interfaces/nodejs.eventemitter.md#once)
* Defined in [lib/node/node.d.ts:263](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L263)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### removeAllListeners(event?: string): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[removeAllListeners](../interfaces/nodejs.eventemitter.md#removealllisteners)
* Defined in [lib/node/node.d.ts:265](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L265)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[removeListener](../interfaces/nodejs.eventemitter.md#removelistener)
* Defined in [lib/node/node.d.ts:264](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L264)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### setMaxListeners(n: number): void
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[setMaxListeners](../interfaces/nodejs.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L266)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### Static listenerCount(emitter: [EventEmitter](_events_.eventemitter.md), event: string): number
  
* Defined in [lib/node/node.d.ts:259](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L259)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| emitter | [EventEmitter](_events_.eventemitter.md)|  |
| event | string|  |

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
