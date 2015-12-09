# Class Duplex


### Extends
* [Readable](_stream_.readable.md)

### Implements
* [EventEmitter](../interfaces/nodejs.eventemitter.md)
* [ReadableStream](../interfaces/nodejs.readablestream.md)
* [ReadWriteStream](../interfaces/nodejs.readwritestream.md)

## Index

### Constructors
* [constructor](_stream_.duplex.md#constructor)

### Properties
* [readable](_stream_.duplex.md#readable)
* [writable](_stream_.duplex.md#writable)

### Methods
* [_read](_stream_.duplex.md#_read)
* [_write](_stream_.duplex.md#_write)
* [addListener](_stream_.duplex.md#addlistener)
* [emit](_stream_.duplex.md#emit)
* [end](_stream_.duplex.md#end)
* [listeners](_stream_.duplex.md#listeners)
* [on](_stream_.duplex.md#on)
* [once](_stream_.duplex.md#once)
* [pause](_stream_.duplex.md#pause)
* [pipe](_stream_.duplex.md#pipe)
* [push](_stream_.duplex.md#push)
* [read](_stream_.duplex.md#read)
* [removeAllListeners](_stream_.duplex.md#removealllisteners)
* [removeListener](_stream_.duplex.md#removelistener)
* [resume](_stream_.duplex.md#resume)
* [setEncoding](_stream_.duplex.md#setencoding)
* [setMaxListeners](_stream_.duplex.md#setmaxlisteners)
* [unpipe](_stream_.duplex.md#unpipe)
* [unshift](_stream_.duplex.md#unshift)
* [wrap](_stream_.duplex.md#wrap)
* [write](_stream_.duplex.md#write)
* [listenerCount](_stream_.duplex.md#listenercount)

## Constructors

### new Duplex(opts?: [DuplexOptions](../interfaces/_stream_.duplexoptions.md)): [Duplex](_stream_.duplex.md)
  
* Overwrites [Readable](_stream_.readable.md).[constructor](_stream_.readable.md#constructor)
* Defined in [lib/node/node.d.ts:1265](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1265)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [DuplexOptions](../interfaces/_stream_.duplexoptions.md)|  |

#### Returns: [Duplex](_stream_.duplex.md)

## Properties

### readable: boolean

* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[readable](../interfaces/nodejs.readwritestream.md#readable)
* Inherited from [Readable](_stream_.readable.md).[readable](_stream_.readable.md#readable)
* Defined in [lib/node/node.d.ts:1225](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1225)


### writable: boolean

* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[writable](../interfaces/nodejs.readwritestream.md#writable)
* Defined in [lib/node/node.d.ts:1265](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1265)


## Methods

### _read(size: number): void
  
* Inherited from [Readable](_stream_.readable.md).[_read](_stream_.readable.md#_read)
* Defined in [lib/node/node.d.ts:1227](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1227)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size | number|  |

#### Returns: void

### _write(data: [Buffer](../interfaces/buffer.md), encoding: string, callback: Function): void_write(data: string, encoding: string, callback: Function): void
  
* Defined in [lib/node/node.d.ts:1267](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1267)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data | [Buffer](../interfaces/buffer.md)|  |
| encoding | string|  |
| callback | Function|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:1268](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1268)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data | string|  |
| encoding | string|  |
| callback | Function|  |

#### Returns: void

### addListener(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[addListener](../interfaces/nodejs.readwritestream.md#addlistener)
* Inherited from [EventEmitter](_events_.eventemitter.md).[addListener](_events_.eventemitter.md#addlistener)
* Defined in [lib/node/node.d.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L261)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[emit](../interfaces/nodejs.readwritestream.md#emit)
* Inherited from [EventEmitter](_events_.eventemitter.md).[emit](_events_.eventemitter.md#emit)
* Defined in [lib/node/node.d.ts:268](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L268)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### end(): voidend(buffer: [Buffer](../interfaces/buffer.md), cb?: Function): voidend(str: string, cb?: Function): voidend(str: string, encoding?: string, cb?: Function): void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[end](../interfaces/nodejs.readwritestream.md#end)
* Defined in [lib/node/node.d.ts:1272](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1272)

#### Returns: void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[end](../interfaces/nodejs.readwritestream.md#end)
* Defined in [lib/node/node.d.ts:1273](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1273)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](../interfaces/buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[end](../interfaces/nodejs.readwritestream.md#end)
* Defined in [lib/node/node.d.ts:1274](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1274)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[end](../interfaces/nodejs.readwritestream.md#end)
* Defined in [lib/node/node.d.ts:1275](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1275)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void

### listeners(event: string): Function[]
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[listeners](../interfaces/nodejs.readwritestream.md#listeners)
* Inherited from [EventEmitter](_events_.eventemitter.md).[listeners](_events_.eventemitter.md#listeners)
* Defined in [lib/node/node.d.ts:267](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L267)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[on](../interfaces/nodejs.readwritestream.md#on)
* Inherited from [EventEmitter](_events_.eventemitter.md).[on](_events_.eventemitter.md#on)
* Defined in [lib/node/node.d.ts:262](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L262)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[once](../interfaces/nodejs.readwritestream.md#once)
* Inherited from [EventEmitter](_events_.eventemitter.md).[once](_events_.eventemitter.md#once)
* Defined in [lib/node/node.d.ts:263](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L263)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### pause(): void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[pause](../interfaces/nodejs.readwritestream.md#pause)
* Inherited from [Readable](_stream_.readable.md).[pause](_stream_.readable.md#pause)
* Defined in [lib/node/node.d.ts:1230](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1230)

#### Returns: void

### pipe<T>(destination: T, options?: \{Optional end?: boolean\}): T
  
* Inherited from [Readable](_stream_.readable.md).[pipe](_stream_.readable.md#pipe)
* Defined in [lib/node/node.d.ts:1232](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1232)


#### Type parameters

* #### T [WritableStream](../interfaces/nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination | T|  |
| options? | \{Optional end?: boolean\}|  |

#### Returns: T

### push(chunk: any, encoding?: string): boolean
  
* Inherited from [Readable](_stream_.readable.md).[push](_stream_.readable.md#push)
* Defined in [lib/node/node.d.ts:1237](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1237)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |

#### Returns: boolean

### read(size?: number): string | [Buffer](../interfaces/buffer.md)
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[read](../interfaces/nodejs.readwritestream.md#read)
* Inherited from [Readable](_stream_.readable.md).[read](_stream_.readable.md#read)
* Defined in [lib/node/node.d.ts:1228](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1228)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size? | number|  |

#### Returns: string | [Buffer](../interfaces/buffer.md)

### removeAllListeners(event?: string): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[removeAllListeners](../interfaces/nodejs.readwritestream.md#removealllisteners)
* Inherited from [EventEmitter](_events_.eventemitter.md).[removeAllListeners](_events_.eventemitter.md#removealllisteners)
* Defined in [lib/node/node.d.ts:265](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L265)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[removeListener](../interfaces/nodejs.readwritestream.md#removelistener)
* Inherited from [EventEmitter](_events_.eventemitter.md).[removeListener](_events_.eventemitter.md#removelistener)
* Defined in [lib/node/node.d.ts:264](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L264)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### resume(): void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[resume](../interfaces/nodejs.readwritestream.md#resume)
* Inherited from [Readable](_stream_.readable.md).[resume](_stream_.readable.md#resume)
* Defined in [lib/node/node.d.ts:1231](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1231)

#### Returns: void

### setEncoding(encoding: string): void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[setEncoding](../interfaces/nodejs.readwritestream.md#setencoding)
* Inherited from [Readable](_stream_.readable.md).[setEncoding](_stream_.readable.md#setencoding)
* Defined in [lib/node/node.d.ts:1229](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1229)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding | string|  |

#### Returns: void

### setMaxListeners(n: number): void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[setMaxListeners](../interfaces/nodejs.readwritestream.md#setmaxlisteners)
* Inherited from [EventEmitter](_events_.eventemitter.md).[setMaxListeners](_events_.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L266)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### unpipe<T>(destination?: T): void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[unpipe](../interfaces/nodejs.readwritestream.md#unpipe)
* Inherited from [Readable](_stream_.readable.md).[unpipe](_stream_.readable.md#unpipe)
* Defined in [lib/node/node.d.ts:1233](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1233)


#### Type parameters

* #### T [WritableStream](../interfaces/nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination? | T|  |

#### Returns: void

### unshift(chunk: string): voidunshift(chunk: [Buffer](../interfaces/buffer.md)): void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[unshift](../interfaces/nodejs.readwritestream.md#unshift)
* Inherited from [Readable](_stream_.readable.md).[unshift](_stream_.readable.md#unshift)
* Defined in [lib/node/node.d.ts:1234](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1234)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | string|  |

#### Returns: void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[unshift](../interfaces/nodejs.readwritestream.md#unshift)
* Inherited from [Readable](_stream_.readable.md).[unshift](_stream_.readable.md#unshift)
* Defined in [lib/node/node.d.ts:1235](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1235)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | [Buffer](../interfaces/buffer.md)|  |

#### Returns: void

### wrap(oldStream: [ReadableStream](../interfaces/nodejs.readablestream.md)): [ReadableStream](../interfaces/nodejs.readablestream.md)
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[wrap](../interfaces/nodejs.readwritestream.md#wrap)
* Inherited from [Readable](_stream_.readable.md).[wrap](_stream_.readable.md#wrap)
* Defined in [lib/node/node.d.ts:1236](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1236)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldStream | [ReadableStream](../interfaces/nodejs.readablestream.md)|  |

#### Returns: [ReadableStream](../interfaces/nodejs.readablestream.md)

### write(buffer: [Buffer](../interfaces/buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): boolean
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[write](../interfaces/nodejs.readwritestream.md#write)
* Defined in [lib/node/node.d.ts:1269](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1269)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](../interfaces/buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[write](../interfaces/nodejs.readwritestream.md#write)
* Defined in [lib/node/node.d.ts:1270](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1270)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[write](../interfaces/nodejs.readwritestream.md#write)
* Defined in [lib/node/node.d.ts:1271](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1271)


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
