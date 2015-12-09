# Interface Server


### Extends
* [EventEmitter](../classes/_events_.eventemitter.md)

### Implements
* [EventEmitter](nodejs.eventemitter.md)

## Index

### Properties
* [maxHeadersCount](_http_.server.md#maxheaderscount)

### Methods
* [addListener](_http_.server.md#addlistener)
* [address](_http_.server.md#address)
* [close](_http_.server.md#close)
* [emit](_http_.server.md#emit)
* [listen](_http_.server.md#listen)
* [listeners](_http_.server.md#listeners)
* [on](_http_.server.md#on)
* [once](_http_.server.md#once)
* [removeAllListeners](_http_.server.md#removealllisteners)
* [removeListener](_http_.server.md#removelistener)
* [setMaxListeners](_http_.server.md#setmaxlisteners)
* [listenerCount](_http_.server.md#listenercount)

## Properties

### maxHeadersCount: number

* Defined in [lib/node/node.d.ts:283](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L283)


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

### address(): \{address: string, family: string, port: number\}
  
* Defined in [lib/node/node.d.ts:282](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L282)

#### Returns: \{address: string, family: string, port: number\}

### close(cb?: any): [Server](_http_.server.md)
  
* Defined in [lib/node/node.d.ts:281](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L281)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| cb? | any|  |

#### Returns: [Server](_http_.server.md)

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[emit](../classes/_events_.eventemitter.md#emit)
* Defined in [lib/node/node.d.ts:268](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L268)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### listen(port: number, hostname?: string, backlog?: number, callback?: Function): [Server](_http_.server.md)listen(path: string, callback?: Function): [Server](_http_.server.md)listen(handle: any, listeningListener?: Function): [Server](_http_.server.md)
  
* Defined in [lib/node/node.d.ts:278](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L278)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| hostname? | string|  |
| backlog? | number|  |
| callback? | Function|  |

#### Returns: [Server](_http_.server.md)
  
* Defined in [lib/node/node.d.ts:279](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L279)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | Function|  |

#### Returns: [Server](_http_.server.md)
  
* Defined in [lib/node/node.d.ts:280](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L280)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| handle | any|  |
| listeningListener? | Function|  |

#### Returns: [Server](_http_.server.md)

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
