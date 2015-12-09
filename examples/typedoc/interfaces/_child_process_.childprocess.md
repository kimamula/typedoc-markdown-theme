# Interface ChildProcess


### Extends
* [EventEmitter](../classes/_events_.eventemitter.md)

### Implements
* [EventEmitter](nodejs.eventemitter.md)

## Index

### Properties
* [pid](_child_process_.childprocess.md#pid)
* [stderr](_child_process_.childprocess.md#stderr)
* [stdin](_child_process_.childprocess.md#stdin)
* [stdout](_child_process_.childprocess.md#stdout)

### Methods
* [addListener](_child_process_.childprocess.md#addlistener)
* [disconnect](_child_process_.childprocess.md#disconnect)
* [emit](_child_process_.childprocess.md#emit)
* [kill](_child_process_.childprocess.md#kill)
* [listeners](_child_process_.childprocess.md#listeners)
* [on](_child_process_.childprocess.md#on)
* [once](_child_process_.childprocess.md#once)
* [removeAllListeners](_child_process_.childprocess.md#removealllisteners)
* [removeListener](_child_process_.childprocess.md#removelistener)
* [send](_child_process_.childprocess.md#send)
* [setMaxListeners](_child_process_.childprocess.md#setmaxlisteners)
* [listenerCount](_child_process_.childprocess.md#listenercount)

## Properties

### pid: number

* Defined in [lib/node/node.d.ts:645](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L645)


### stderr: [Readable](../classes/_stream_.readable.md)

* Defined in [lib/node/node.d.ts:644](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L644)


### stdin: [Writable](../classes/_stream_.writable.md)

* Defined in [lib/node/node.d.ts:642](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L642)


### stdout: [Readable](../classes/_stream_.readable.md)

* Defined in [lib/node/node.d.ts:643](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L643)


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

### disconnect(): void
  
* Defined in [lib/node/node.d.ts:648](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L648)

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

### kill(signal?: string): void
  
* Defined in [lib/node/node.d.ts:646](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L646)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| signal? | string|  |

#### Returns: void

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

### send(message: any, sendHandle?: any): void
  
* Defined in [lib/node/node.d.ts:647](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L647)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| message | any|  |
| sendHandle? | any|  |

#### Returns: void

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
