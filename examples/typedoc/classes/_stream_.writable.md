# Class Writable


### Extends
* [EventEmitter](_events_.eventemitter.md)

### Implements
* [EventEmitter](../interfaces/nodejs.eventemitter.md)
* [WritableStream](../interfaces/nodejs.writablestream.md)

## Index

### Constructors
* [constructor](_stream_.writable.md#constructor)

### Properties
* [writable](_stream_.writable.md#writable)

### Methods
* [_write](_stream_.writable.md#_write)
* [addListener](_stream_.writable.md#addlistener)
* [emit](_stream_.writable.md#emit)
* [end](_stream_.writable.md#end)
* [listeners](_stream_.writable.md#listeners)
* [on](_stream_.writable.md#on)
* [once](_stream_.writable.md#once)
* [removeAllListeners](_stream_.writable.md#removealllisteners)
* [removeListener](_stream_.writable.md#removelistener)
* [setMaxListeners](_stream_.writable.md#setmaxlisteners)
* [write](_stream_.writable.md#write)
* [listenerCount](_stream_.writable.md#listenercount)

## Constructors

### new Writable(opts?: [WritableOptions](../interfaces/_stream_.writableoptions.md)): [Writable](_stream_.writable.md)
  
* Defined in [lib/node/node.d.ts:1246](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1246)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [WritableOptions](../interfaces/_stream_.writableoptions.md)|  |

#### Returns: [Writable](_stream_.writable.md)

## Properties

### writable: boolean

* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[writable](../interfaces/nodejs.writablestream.md#writable)
* Defined in [lib/node/node.d.ts:1246](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1246)


## Methods

### _write(data: [Buffer](../interfaces/buffer.md), encoding: string, callback: Function): void_write(data: string, encoding: string, callback: Function): void
  
* Defined in [lib/node/node.d.ts:1248](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1248)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data | [Buffer](../interfaces/buffer.md)|  |
| encoding | string|  |
| callback | Function|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:1249](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1249)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data | string|  |
| encoding | string|  |
| callback | Function|  |

#### Returns: void

### addListener(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[addListener](../interfaces/nodejs.writablestream.md#addlistener)
* Inherited from [EventEmitter](_events_.eventemitter.md).[addListener](_events_.eventemitter.md#addlistener)
* Defined in [lib/node/node.d.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L261)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[emit](../interfaces/nodejs.writablestream.md#emit)
* Inherited from [EventEmitter](_events_.eventemitter.md).[emit](_events_.eventemitter.md#emit)
* Defined in [lib/node/node.d.ts:268](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L268)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### end(): voidend(buffer: [Buffer](../interfaces/buffer.md), cb?: Function): voidend(str: string, cb?: Function): voidend(str: string, encoding?: string, cb?: Function): void
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[end](../interfaces/nodejs.writablestream.md#end)
* Defined in [lib/node/node.d.ts:1253](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1253)

#### Returns: void
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[end](../interfaces/nodejs.writablestream.md#end)
* Defined in [lib/node/node.d.ts:1254](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1254)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](../interfaces/buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[end](../interfaces/nodejs.writablestream.md#end)
* Defined in [lib/node/node.d.ts:1255](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1255)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[end](../interfaces/nodejs.writablestream.md#end)
* Defined in [lib/node/node.d.ts:1256](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1256)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void

### listeners(event: string): Function[]
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[listeners](../interfaces/nodejs.writablestream.md#listeners)
* Inherited from [EventEmitter](_events_.eventemitter.md).[listeners](_events_.eventemitter.md#listeners)
* Defined in [lib/node/node.d.ts:267](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L267)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[on](../interfaces/nodejs.writablestream.md#on)
* Inherited from [EventEmitter](_events_.eventemitter.md).[on](_events_.eventemitter.md#on)
* Defined in [lib/node/node.d.ts:262](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L262)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[once](../interfaces/nodejs.writablestream.md#once)
* Inherited from [EventEmitter](_events_.eventemitter.md).[once](_events_.eventemitter.md#once)
* Defined in [lib/node/node.d.ts:263](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L263)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### removeAllListeners(event?: string): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[removeAllListeners](../interfaces/nodejs.writablestream.md#removealllisteners)
* Inherited from [EventEmitter](_events_.eventemitter.md).[removeAllListeners](_events_.eventemitter.md#removealllisteners)
* Defined in [lib/node/node.d.ts:265](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L265)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[removeListener](../interfaces/nodejs.writablestream.md#removelistener)
* Inherited from [EventEmitter](_events_.eventemitter.md).[removeListener](_events_.eventemitter.md#removelistener)
* Defined in [lib/node/node.d.ts:264](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L264)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### setMaxListeners(n: number): void
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[setMaxListeners](../interfaces/nodejs.writablestream.md#setmaxlisteners)
* Inherited from [EventEmitter](_events_.eventemitter.md).[setMaxListeners](_events_.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L266)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### write(buffer: [Buffer](../interfaces/buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): boolean
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[write](../interfaces/nodejs.writablestream.md#write)
* Defined in [lib/node/node.d.ts:1250](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1250)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](../interfaces/buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[write](../interfaces/nodejs.writablestream.md#write)
* Defined in [lib/node/node.d.ts:1251](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1251)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[write](../interfaces/nodejs.writablestream.md#write)
* Defined in [lib/node/node.d.ts:1252](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1252)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean

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
