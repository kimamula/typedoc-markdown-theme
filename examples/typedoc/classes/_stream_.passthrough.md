# Class PassThrough


### Extends
* [Transform](_stream_.transform.md)

### Implements
* [EventEmitter](../interfaces/nodejs.eventemitter.md)
* [ReadWriteStream](../interfaces/nodejs.readwritestream.md)

## Index

### Constructors
* [constructor](_stream_.passthrough.md#constructor)

### Properties
* [readable](_stream_.passthrough.md#readable)
* [writable](_stream_.passthrough.md#writable)

### Methods
* [_flush](_stream_.passthrough.md#_flush)
* [_transform](_stream_.passthrough.md#_transform)
* [addListener](_stream_.passthrough.md#addlistener)
* [emit](_stream_.passthrough.md#emit)
* [end](_stream_.passthrough.md#end)
* [listeners](_stream_.passthrough.md#listeners)
* [on](_stream_.passthrough.md#on)
* [once](_stream_.passthrough.md#once)
* [pause](_stream_.passthrough.md#pause)
* [pipe](_stream_.passthrough.md#pipe)
* [push](_stream_.passthrough.md#push)
* [read](_stream_.passthrough.md#read)
* [removeAllListeners](_stream_.passthrough.md#removealllisteners)
* [removeListener](_stream_.passthrough.md#removelistener)
* [resume](_stream_.passthrough.md#resume)
* [setEncoding](_stream_.passthrough.md#setencoding)
* [setMaxListeners](_stream_.passthrough.md#setmaxlisteners)
* [unpipe](_stream_.passthrough.md#unpipe)
* [unshift](_stream_.passthrough.md#unshift)
* [wrap](_stream_.passthrough.md#wrap)
* [write](_stream_.passthrough.md#write)
* [listenerCount](_stream_.passthrough.md#listenercount)

## Constructors

### new PassThrough(opts?: [TransformOptions](../interfaces/_stream_.transformoptions.md)): [PassThrough](_stream_.passthrough.md)
  
* Inherited from [Transform](_stream_.transform.md).[constructor](_stream_.transform.md#constructor)
* Defined in [lib/node/node.d.ts:1283](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1283)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [TransformOptions](../interfaces/_stream_.transformoptions.md)|  |

#### Returns: [PassThrough](_stream_.passthrough.md)

## Properties

### readable: boolean

* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[readable](../interfaces/nodejs.readwritestream.md#readable)
* Inherited from [Transform](_stream_.transform.md).[readable](_stream_.transform.md#readable)
* Defined in [lib/node/node.d.ts:1282](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1282)


### writable: boolean

* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[writable](../interfaces/nodejs.readwritestream.md#writable)
* Inherited from [Transform](_stream_.transform.md).[writable](_stream_.transform.md#writable)
* Defined in [lib/node/node.d.ts:1283](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1283)


## Methods

### _flush(callback: Function): void
  
* Inherited from [Transform](_stream_.transform.md).[_flush](_stream_.transform.md#_flush)
* Defined in [lib/node/node.d.ts:1287](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1287)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | Function|  |

#### Returns: void

### _transform(chunk: [Buffer](../interfaces/buffer.md), encoding: string, callback: Function): void_transform(chunk: string, encoding: string, callback: Function): void
  
* Inherited from [Transform](_stream_.transform.md).[_transform](_stream_.transform.md#_transform)
* Defined in [lib/node/node.d.ts:1285](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1285)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | [Buffer](../interfaces/buffer.md)|  |
| encoding | string|  |
| callback | Function|  |

#### Returns: void
  
* Inherited from [Transform](_stream_.transform.md).[_transform](_stream_.transform.md#_transform)
* Defined in [lib/node/node.d.ts:1286](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1286)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | string|  |
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
* Inherited from [Transform](_stream_.transform.md).[end](_stream_.transform.md#end)
* Defined in [lib/node/node.d.ts:1301](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1301)

#### Returns: void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[end](../interfaces/nodejs.readwritestream.md#end)
* Inherited from [Transform](_stream_.transform.md).[end](_stream_.transform.md#end)
* Defined in [lib/node/node.d.ts:1302](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1302)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](../interfaces/buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[end](../interfaces/nodejs.readwritestream.md#end)
* Inherited from [Transform](_stream_.transform.md).[end](_stream_.transform.md#end)
* Defined in [lib/node/node.d.ts:1303](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1303)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[end](../interfaces/nodejs.readwritestream.md#end)
* Inherited from [Transform](_stream_.transform.md).[end](_stream_.transform.md#end)
* Defined in [lib/node/node.d.ts:1304](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1304)


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
* Inherited from [Transform](_stream_.transform.md).[pause](_stream_.transform.md#pause)
* Defined in [lib/node/node.d.ts:1290](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1290)

#### Returns: void

### pipe<T>(destination: T, options?: \{Optional end?: boolean\}): T
  
* Inherited from [Transform](_stream_.transform.md).[pipe](_stream_.transform.md#pipe)
* Defined in [lib/node/node.d.ts:1292](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1292)


#### Type parameters

* #### T [WritableStream](../interfaces/nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination | T|  |
| options? | \{Optional end?: boolean\}|  |

#### Returns: T

### push(chunk: any, encoding?: string): boolean
  
* Inherited from [Transform](_stream_.transform.md).[push](_stream_.transform.md#push)
* Defined in [lib/node/node.d.ts:1297](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1297)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |

#### Returns: boolean

### read(size?: number): any
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[read](../interfaces/nodejs.readwritestream.md#read)
* Inherited from [Transform](_stream_.transform.md).[read](_stream_.transform.md#read)
* Defined in [lib/node/node.d.ts:1288](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1288)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size? | number|  |

#### Returns: any

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
* Inherited from [Transform](_stream_.transform.md).[resume](_stream_.transform.md#resume)
* Defined in [lib/node/node.d.ts:1291](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1291)

#### Returns: void

### setEncoding(encoding: string): void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[setEncoding](../interfaces/nodejs.readwritestream.md#setencoding)
* Inherited from [Transform](_stream_.transform.md).[setEncoding](_stream_.transform.md#setencoding)
* Defined in [lib/node/node.d.ts:1289](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1289)


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
* Inherited from [Transform](_stream_.transform.md).[unpipe](_stream_.transform.md#unpipe)
* Defined in [lib/node/node.d.ts:1293](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1293)


#### Type parameters

* #### T [WritableStream](../interfaces/nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination? | T|  |

#### Returns: void

### unshift(chunk: string): voidunshift(chunk: [Buffer](../interfaces/buffer.md)): void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[unshift](../interfaces/nodejs.readwritestream.md#unshift)
* Inherited from [Transform](_stream_.transform.md).[unshift](_stream_.transform.md#unshift)
* Defined in [lib/node/node.d.ts:1294](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1294)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | string|  |

#### Returns: void
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[unshift](../interfaces/nodejs.readwritestream.md#unshift)
* Inherited from [Transform](_stream_.transform.md).[unshift](_stream_.transform.md#unshift)
* Defined in [lib/node/node.d.ts:1295](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1295)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | [Buffer](../interfaces/buffer.md)|  |

#### Returns: void

### wrap(oldStream: [ReadableStream](../interfaces/nodejs.readablestream.md)): [ReadableStream](../interfaces/nodejs.readablestream.md)
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[wrap](../interfaces/nodejs.readwritestream.md#wrap)
* Inherited from [Transform](_stream_.transform.md).[wrap](_stream_.transform.md#wrap)
* Defined in [lib/node/node.d.ts:1296](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1296)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldStream | [ReadableStream](../interfaces/nodejs.readablestream.md)|  |

#### Returns: [ReadableStream](../interfaces/nodejs.readablestream.md)

### write(buffer: [Buffer](../interfaces/buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): boolean
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[write](../interfaces/nodejs.readwritestream.md#write)
* Inherited from [Transform](_stream_.transform.md).[write](_stream_.transform.md#write)
* Defined in [lib/node/node.d.ts:1298](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1298)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](../interfaces/buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[write](../interfaces/nodejs.readwritestream.md#write)
* Inherited from [Transform](_stream_.transform.md).[write](_stream_.transform.md#write)
* Defined in [lib/node/node.d.ts:1299](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1299)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Implementation of [ReadWriteStream](../interfaces/nodejs.readwritestream.md).[write](../interfaces/nodejs.readwritestream.md#write)
* Inherited from [Transform](_stream_.transform.md).[write](_stream_.transform.md#write)
* Defined in [lib/node/node.d.ts:1300](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1300)


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
