# Interface FSWatcher


### Extends
* [EventEmitter](../classes/_events_.eventemitter.md)

### Implements
* [EventEmitter](nodejs.eventemitter.md)

## Index

### Methods
* [addListener](_fs_.fswatcher.md#addlistener)
* [close](_fs_.fswatcher.md#close)
* [emit](_fs_.fswatcher.md#emit)
* [listeners](_fs_.fswatcher.md#listeners)
* [on](_fs_.fswatcher.md#on)
* [once](_fs_.fswatcher.md#once)
* [removeAllListeners](_fs_.fswatcher.md#removealllisteners)
* [removeListener](_fs_.fswatcher.md#removelistener)
* [setMaxListeners](_fs_.fswatcher.md#setmaxlisteners)
* [listenerCount](_fs_.fswatcher.md#listenercount)

## Methods

### addListener(event: string, listener: Function): [EventEmitter](../classes/_events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[addListener](../classes/_events_.eventemitter.md#addlistener)
* Defined in [lib/node/node.d.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L261)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_events_.eventemitter.md)

### close(): void
  
* Defined in [lib/node/node.d.ts:889](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L889)

#### Returns: void

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[emit](../classes/_events_.eventemitter.md#emit)
* Defined in [lib/node/node.d.ts:268](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L268)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### listeners(event: string): Function[]
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[listeners](../classes/_events_.eventemitter.md#listeners)
* Defined in [lib/node/node.d.ts:267](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L267)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](../classes/_events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[on](../classes/_events_.eventemitter.md#on)
* Defined in [lib/node/node.d.ts:262](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L262)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_events_.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](../classes/_events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[once](../classes/_events_.eventemitter.md#once)
* Defined in [lib/node/node.d.ts:263](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L263)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_events_.eventemitter.md)

### removeAllListeners(event?: string): [EventEmitter](../classes/_events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[removeAllListeners](../classes/_events_.eventemitter.md#removealllisteners)
* Defined in [lib/node/node.d.ts:265](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L265)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](../classes/_events_.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](../classes/_events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[removeListener](../classes/_events_.eventemitter.md#removelistener)
* Defined in [lib/node/node.d.ts:264](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L264)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_events_.eventemitter.md)

### setMaxListeners(n: number): void
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[setMaxListeners](../classes/_events_.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L266)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### Static listenerCount(emitter: [EventEmitter](../classes/_events_.eventemitter.md), event: string): number
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[listenerCount](../classes/_events_.eventemitter.md#listenercount)
* Defined in [lib/node/node.d.ts:259](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L259)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| emitter | [EventEmitter](../classes/_events_.eventemitter.md)|  |
| event | string|  |

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
