# Interface ClearTextStream


### Extends
* [Duplex](../classes/_stream_.duplex.md)

### Implements
* [EventEmitter](nodejs.eventemitter.md)
* [ReadableStream](nodejs.readablestream.md)
* [ReadWriteStream](nodejs.readwritestream.md)

## Index

### Constructors
* [constructor](_tls_.cleartextstream.md#constructor)

### Properties
* [address](_tls_.cleartextstream.md#address)
* [authorizationError](_tls_.cleartextstream.md#authorizationerror)
* [authorized](_tls_.cleartextstream.md#authorized)
* [getCipher](_tls_.cleartextstream.md#getcipher)
* [readable](_tls_.cleartextstream.md#readable)
* [remoteAddress](_tls_.cleartextstream.md#remoteaddress)
* [remotePort](_tls_.cleartextstream.md#remoteport)
* [writable](_tls_.cleartextstream.md#writable)

### Methods
* [_read](_tls_.cleartextstream.md#_read)
* [_write](_tls_.cleartextstream.md#_write)
* [addListener](_tls_.cleartextstream.md#addlistener)
* [emit](_tls_.cleartextstream.md#emit)
* [end](_tls_.cleartextstream.md#end)
* [getPeerCertificate](_tls_.cleartextstream.md#getpeercertificate)
* [listeners](_tls_.cleartextstream.md#listeners)
* [on](_tls_.cleartextstream.md#on)
* [once](_tls_.cleartextstream.md#once)
* [pause](_tls_.cleartextstream.md#pause)
* [pipe](_tls_.cleartextstream.md#pipe)
* [push](_tls_.cleartextstream.md#push)
* [read](_tls_.cleartextstream.md#read)
* [removeAllListeners](_tls_.cleartextstream.md#removealllisteners)
* [removeListener](_tls_.cleartextstream.md#removelistener)
* [resume](_tls_.cleartextstream.md#resume)
* [setEncoding](_tls_.cleartextstream.md#setencoding)
* [setMaxListeners](_tls_.cleartextstream.md#setmaxlisteners)
* [unpipe](_tls_.cleartextstream.md#unpipe)
* [unshift](_tls_.cleartextstream.md#unshift)
* [wrap](_tls_.cleartextstream.md#wrap)
* [write](_tls_.cleartextstream.md#write)
* [listenerCount](_tls_.cleartextstream.md#listenercount)

## Constructors

### new ClearTextStream(opts?: [DuplexOptions](_stream_.duplexoptions.md)): [ClearTextStream](_tls_.cleartextstream.md)
  
* Inherited from [Duplex](../classes/_stream_.duplex.md).[constructor](../classes/_stream_.duplex.md#constructor)
* Overwrites [Readable](../classes/_stream_.readable.md).[constructor](../classes/_stream_.readable.md#constructor)
* Defined in [lib/node/node.d.ts:1265](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1265)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [DuplexOptions](_stream_.duplexoptions.md)|  |

#### Returns: [ClearTextStream](_tls_.cleartextstream.md)

## Properties

### address: \{address: string, family: string, port: number\}

* Defined in [lib/node/node.d.ts:1114](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1114)


### authorizationError: Error

* Defined in [lib/node/node.d.ts:1108](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1108)


### authorized: boolean

* Defined in [lib/node/node.d.ts:1107](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1107)


### getCipher: \{name: string, version: string\}

* Defined in [lib/node/node.d.ts:1110](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1110)


### readable: boolean

* Inherited from [Readable](../classes/_stream_.readable.md).[readable](../classes/_stream_.readable.md#readable)
* Defined in [lib/node/node.d.ts:1225](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1225)


### remoteAddress: string

* Defined in [lib/node/node.d.ts:1119](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1119)


### remotePort: number

* Defined in [lib/node/node.d.ts:1120](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1120)


### writable: boolean

* Inherited from [Duplex](../classes/_stream_.duplex.md).[writable](../classes/_stream_.duplex.md#writable)
* Defined in [lib/node/node.d.ts:1265](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1265)


## Methods

### _read(size: number): void
  
* Inherited from [Readable](../classes/_stream_.readable.md).[_read](../classes/_stream_.readable.md#_read)
* Defined in [lib/node/node.d.ts:1227](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1227)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size | number|  |

#### Returns: void

### _write(data: [Buffer](buffer.md), encoding: string, callback: Function): void_write(data: string, encoding: string, callback: Function): void
  
* Inherited from [Duplex](../classes/_stream_.duplex.md).[_write](../classes/_stream_.duplex.md#_write)
* Defined in [lib/node/node.d.ts:1267](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1267)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data | [Buffer](buffer.md)|  |
| encoding | string|  |
| callback | Function|  |

#### Returns: void
  
* Inherited from [Duplex](../classes/_stream_.duplex.md).[_write](../classes/_stream_.duplex.md#_write)
* Defined in [lib/node/node.d.ts:1268](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1268)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data | string|  |
| encoding | string|  |
| callback | Function|  |

#### Returns: void

### addListener(event: string, listener: Function): [EventEmitter](../classes/_events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[addListener](../classes/_events_.eventemitter.md#addlistener)
* Defined in [lib/node/node.d.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L261)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_events_.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[emit](../classes/_events_.eventemitter.md#emit)
* Defined in [lib/node/node.d.ts:268](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L268)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### end(): voidend(buffer: [Buffer](buffer.md), cb?: Function): voidend(str: string, cb?: Function): voidend(str: string, encoding?: string, cb?: Function): void
  
* Inherited from [Duplex](../classes/_stream_.duplex.md).[end](../classes/_stream_.duplex.md#end)
* Defined in [lib/node/node.d.ts:1272](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1272)

#### Returns: void
  
* Inherited from [Duplex](../classes/_stream_.duplex.md).[end](../classes/_stream_.duplex.md#end)
* Defined in [lib/node/node.d.ts:1273](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1273)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [Duplex](../classes/_stream_.duplex.md).[end](../classes/_stream_.duplex.md#end)
* Defined in [lib/node/node.d.ts:1274](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1274)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [Duplex](../classes/_stream_.duplex.md).[end](../classes/_stream_.duplex.md#end)
* Defined in [lib/node/node.d.ts:1275](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1275)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void

### getPeerCertificate(): any
  
* Defined in [lib/node/node.d.ts:1109](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1109)

#### Returns: any

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

### pause(): void
  
* Inherited from [Readable](../classes/_stream_.readable.md).[pause](../classes/_stream_.readable.md#pause)
* Defined in [lib/node/node.d.ts:1230](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1230)

#### Returns: void

### pipe<T>(destination: T, options?: \{Optional end?: boolean\}): T
  
* Inherited from [Readable](../classes/_stream_.readable.md).[pipe](../classes/_stream_.readable.md#pipe)
* Defined in [lib/node/node.d.ts:1232](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1232)


#### Type parameters

* #### T [WritableStream](nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination | T|  |
| options? | \{Optional end?: boolean\}|  |

#### Returns: T

### push(chunk: any, encoding?: string): boolean
  
* Inherited from [Readable](../classes/_stream_.readable.md).[push](../classes/_stream_.readable.md#push)
* Defined in [lib/node/node.d.ts:1237](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1237)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |

#### Returns: boolean

### read(size?: number): string | [Buffer](buffer.md)
  
* Inherited from [Readable](../classes/_stream_.readable.md).[read](../classes/_stream_.readable.md#read)
* Defined in [lib/node/node.d.ts:1228](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1228)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size? | number|  |

#### Returns: string | [Buffer](buffer.md)

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

### resume(): void
  
* Inherited from [Readable](../classes/_stream_.readable.md).[resume](../classes/_stream_.readable.md#resume)
* Defined in [lib/node/node.d.ts:1231](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1231)

#### Returns: void

### setEncoding(encoding: string): void
  
* Inherited from [Readable](../classes/_stream_.readable.md).[setEncoding](../classes/_stream_.readable.md#setencoding)
* Defined in [lib/node/node.d.ts:1229](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1229)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding | string|  |

#### Returns: void

### setMaxListeners(n: number): void
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[setMaxListeners](../classes/_events_.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L266)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### unpipe<T>(destination?: T): void
  
* Inherited from [Readable](../classes/_stream_.readable.md).[unpipe](../classes/_stream_.readable.md#unpipe)
* Defined in [lib/node/node.d.ts:1233](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1233)


#### Type parameters

* #### T [WritableStream](nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination? | T|  |

#### Returns: void

### unshift(chunk: string): voidunshift(chunk: [Buffer](buffer.md)): void
  
* Inherited from [Readable](../classes/_stream_.readable.md).[unshift](../classes/_stream_.readable.md#unshift)
* Defined in [lib/node/node.d.ts:1234](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1234)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | string|  |

#### Returns: void
  
* Inherited from [Readable](../classes/_stream_.readable.md).[unshift](../classes/_stream_.readable.md#unshift)
* Defined in [lib/node/node.d.ts:1235](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1235)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | [Buffer](buffer.md)|  |

#### Returns: void

### wrap(oldStream: [ReadableStream](nodejs.readablestream.md)): [ReadableStream](nodejs.readablestream.md)
  
* Inherited from [Readable](../classes/_stream_.readable.md).[wrap](../classes/_stream_.readable.md#wrap)
* Defined in [lib/node/node.d.ts:1236](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1236)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldStream | [ReadableStream](nodejs.readablestream.md)|  |

#### Returns: [ReadableStream](nodejs.readablestream.md)

### write(buffer: [Buffer](buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): boolean
  
* Inherited from [Duplex](../classes/_stream_.duplex.md).[write](../classes/_stream_.duplex.md#write)
* Defined in [lib/node/node.d.ts:1269](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1269)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [Duplex](../classes/_stream_.duplex.md).[write](../classes/_stream_.duplex.md#write)
* Defined in [lib/node/node.d.ts:1270](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1270)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [Duplex](../classes/_stream_.duplex.md).[write](../classes/_stream_.duplex.md#write)
* Defined in [lib/node/node.d.ts:1271](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1271)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean

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
