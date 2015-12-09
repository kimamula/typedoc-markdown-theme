# Class ReadStream


### Extends
* [Readable](_stream_.readable.md)

### Implements
* [EventEmitter](../interfaces/nodejs.eventemitter.md)
* [ReadableStream](../interfaces/nodejs.readablestream.md)

## Index

### Constructors
* [constructor](_fs_extra_.readstream.md#constructor)

### Properties
* [readable](_fs_extra_.readstream.md#readable)

### Methods
* [_read](_fs_extra_.readstream.md#_read)
* [addListener](_fs_extra_.readstream.md#addlistener)
* [emit](_fs_extra_.readstream.md#emit)
* [listeners](_fs_extra_.readstream.md#listeners)
* [on](_fs_extra_.readstream.md#on)
* [once](_fs_extra_.readstream.md#once)
* [pause](_fs_extra_.readstream.md#pause)
* [pipe](_fs_extra_.readstream.md#pipe)
* [push](_fs_extra_.readstream.md#push)
* [read](_fs_extra_.readstream.md#read)
* [removeAllListeners](_fs_extra_.readstream.md#removealllisteners)
* [removeListener](_fs_extra_.readstream.md#removelistener)
* [resume](_fs_extra_.readstream.md#resume)
* [setEncoding](_fs_extra_.readstream.md#setencoding)
* [setMaxListeners](_fs_extra_.readstream.md#setmaxlisteners)
* [unpipe](_fs_extra_.readstream.md#unpipe)
* [unshift](_fs_extra_.readstream.md#unshift)
* [wrap](_fs_extra_.readstream.md#wrap)
* [listenerCount](_fs_extra_.readstream.md#listenercount)

## Constructors

### new ReadStream(opts?: [ReadableOptions](../interfaces/_stream_.readableoptions.md)): [ReadStream](_fs_extra_.readstream.md)
  
* Inherited from [Readable](_stream_.readable.md).[constructor](_stream_.readable.md#constructor)
* Defined in [lib/node/node.d.ts:1225](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1225)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [ReadableOptions](../interfaces/_stream_.readableoptions.md)|  |

#### Returns: [ReadStream](_fs_extra_.readstream.md)

## Properties

### readable: boolean

* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[readable](../interfaces/nodejs.readablestream.md#readable)
* Inherited from [Readable](_stream_.readable.md).[readable](_stream_.readable.md#readable)
* Defined in [lib/node/node.d.ts:1225](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1225)


## Methods

### _read(size: number): void
  
* Inherited from [Readable](_stream_.readable.md).[_read](_stream_.readable.md#_read)
* Defined in [lib/node/node.d.ts:1227](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1227)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size | number|  |

#### Returns: void

### addListener(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[addListener](../interfaces/nodejs.readablestream.md#addlistener)
* Inherited from [EventEmitter](_events_.eventemitter.md).[addListener](_events_.eventemitter.md#addlistener)
* Defined in [lib/node/node.d.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L261)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[emit](../interfaces/nodejs.readablestream.md#emit)
* Inherited from [EventEmitter](_events_.eventemitter.md).[emit](_events_.eventemitter.md#emit)
* Defined in [lib/node/node.d.ts:268](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L268)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### listeners(event: string): Function[]
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[listeners](../interfaces/nodejs.readablestream.md#listeners)
* Inherited from [EventEmitter](_events_.eventemitter.md).[listeners](_events_.eventemitter.md#listeners)
* Defined in [lib/node/node.d.ts:267](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L267)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[on](../interfaces/nodejs.readablestream.md#on)
* Inherited from [EventEmitter](_events_.eventemitter.md).[on](_events_.eventemitter.md#on)
* Defined in [lib/node/node.d.ts:262](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L262)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[once](../interfaces/nodejs.readablestream.md#once)
* Inherited from [EventEmitter](_events_.eventemitter.md).[once](_events_.eventemitter.md#once)
* Defined in [lib/node/node.d.ts:263](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L263)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### pause(): void
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[pause](../interfaces/nodejs.readablestream.md#pause)
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
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[read](../interfaces/nodejs.readablestream.md#read)
* Inherited from [Readable](_stream_.readable.md).[read](_stream_.readable.md#read)
* Defined in [lib/node/node.d.ts:1228](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1228)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size? | number|  |

#### Returns: string | [Buffer](../interfaces/buffer.md)

### removeAllListeners(event?: string): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[removeAllListeners](../interfaces/nodejs.readablestream.md#removealllisteners)
* Inherited from [EventEmitter](_events_.eventemitter.md).[removeAllListeners](_events_.eventemitter.md#removealllisteners)
* Defined in [lib/node/node.d.ts:265](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L265)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](_events_.eventemitter.md)
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[removeListener](../interfaces/nodejs.readablestream.md#removelistener)
* Inherited from [EventEmitter](_events_.eventemitter.md).[removeListener](_events_.eventemitter.md#removelistener)
* Defined in [lib/node/node.d.ts:264](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L264)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](_events_.eventemitter.md)

### resume(): void
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[resume](../interfaces/nodejs.readablestream.md#resume)
* Inherited from [Readable](_stream_.readable.md).[resume](_stream_.readable.md#resume)
* Defined in [lib/node/node.d.ts:1231](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1231)

#### Returns: void

### setEncoding(encoding: string): void
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[setEncoding](../interfaces/nodejs.readablestream.md#setencoding)
* Inherited from [Readable](_stream_.readable.md).[setEncoding](_stream_.readable.md#setencoding)
* Defined in [lib/node/node.d.ts:1229](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1229)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding | string|  |

#### Returns: void

### setMaxListeners(n: number): void
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[setMaxListeners](../interfaces/nodejs.readablestream.md#setmaxlisteners)
* Inherited from [EventEmitter](_events_.eventemitter.md).[setMaxListeners](_events_.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L266)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### unpipe<T>(destination?: T): void
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[unpipe](../interfaces/nodejs.readablestream.md#unpipe)
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
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[unshift](../interfaces/nodejs.readablestream.md#unshift)
* Inherited from [Readable](_stream_.readable.md).[unshift](_stream_.readable.md#unshift)
* Defined in [lib/node/node.d.ts:1234](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1234)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | string|  |

#### Returns: void
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[unshift](../interfaces/nodejs.readablestream.md#unshift)
* Inherited from [Readable](_stream_.readable.md).[unshift](_stream_.readable.md#unshift)
* Defined in [lib/node/node.d.ts:1235](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1235)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | [Buffer](../interfaces/buffer.md)|  |

#### Returns: void

### wrap(oldStream: [ReadableStream](../interfaces/nodejs.readablestream.md)): [ReadableStream](../interfaces/nodejs.readablestream.md)
  
* Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[wrap](../interfaces/nodejs.readablestream.md#wrap)
* Inherited from [Readable](_stream_.readable.md).[wrap](_stream_.readable.md#wrap)
* Defined in [lib/node/node.d.ts:1236](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1236)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldStream | [ReadableStream](../interfaces/nodejs.readablestream.md)|  |

#### Returns: [ReadableStream](../interfaces/nodejs.readablestream.md)

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
