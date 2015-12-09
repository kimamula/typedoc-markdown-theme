# Interface ReadWriteStream


### Extends
* [ReadableStream](nodejs.readablestream.md)
* [WritableStream](nodejs.writablestream.md)

### Implemented by
* [ClearTextStream](_tls_.cleartextstream.md)
* [Deflate](_zlib_.deflate.md)
* [DeflateRaw](_zlib_.deflateraw.md)
* [Duplex](../classes/_stream_.duplex.md)
* [Gunzip](_zlib_.gunzip.md)
* [Gzip](_zlib_.gzip.md)
* [Inflate](_zlib_.inflate.md)
* [InflateRaw](_zlib_.inflateraw.md)
* [PassThrough](../classes/_stream_.passthrough.md)
* [ReadStream](_tty_.readstream.md)
* [Server](_tls_.server.md)
* [Server](_net_.server.md)
* [Server](_https_.server.md)
* [Socket](_net_.socket.md)
* [Transform](../classes/_stream_.transform.md)
* [Unzip](_zlib_.unzip.md)
* [WriteStream](_tty_.writestream.md)

## Index

### Properties
* [readable](nodejs.readwritestream.md#readable)
* [writable](nodejs.readwritestream.md#writable)

### Methods
* [addListener](nodejs.readwritestream.md#addlistener)
* [emit](nodejs.readwritestream.md#emit)
* [end](nodejs.readwritestream.md#end)
* [listeners](nodejs.readwritestream.md#listeners)
* [on](nodejs.readwritestream.md#on)
* [once](nodejs.readwritestream.md#once)
* [pause](nodejs.readwritestream.md#pause)
* [pipe](nodejs.readwritestream.md#pipe)
* [read](nodejs.readwritestream.md#read)
* [removeAllListeners](nodejs.readwritestream.md#removealllisteners)
* [removeListener](nodejs.readwritestream.md#removelistener)
* [resume](nodejs.readwritestream.md#resume)
* [setEncoding](nodejs.readwritestream.md#setencoding)
* [setMaxListeners](nodejs.readwritestream.md#setmaxlisteners)
* [unpipe](nodejs.readwritestream.md#unpipe)
* [unshift](nodejs.readwritestream.md#unshift)
* [wrap](nodejs.readwritestream.md#wrap)
* [write](nodejs.readwritestream.md#write)

## Properties

### readable: boolean

* Inherited from [ReadableStream](nodejs.readablestream.md).[readable](nodejs.readablestream.md#readable)
* Defined in [lib/node/node.d.ts:100](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L100)


### writable: boolean

* Inherited from [WritableStream](nodejs.writablestream.md).[writable](nodejs.writablestream.md#writable)
* Defined in [lib/node/node.d.ts:113](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L113)


## Methods

### addListener(event: string, listener: Function): [EventEmitter](nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[addListener](nodejs.eventemitter.md#addlistener)
* Overwrites [EventEmitter](nodejs.eventemitter.md).[addListener](nodejs.eventemitter.md#addlistener)
* Defined in [lib/node/node.d.ts:89](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L89)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[emit](nodejs.eventemitter.md#emit)
* Overwrites [EventEmitter](nodejs.eventemitter.md).[emit](nodejs.eventemitter.md#emit)
* Defined in [lib/node/node.d.ts:96](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L96)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### end(): voidend(buffer: [Buffer](buffer.md), cb?: Function): voidend(str: string, cb?: Function): voidend(str: string, encoding?: string, cb?: Function): void
  
* Inherited from [WritableStream](nodejs.writablestream.md).[end](nodejs.writablestream.md#end)
* Defined in [lib/node/node.d.ts:117](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L117)

#### Returns: void
  
* Inherited from [WritableStream](nodejs.writablestream.md).[end](nodejs.writablestream.md#end)
* Defined in [lib/node/node.d.ts:118](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L118)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [WritableStream](nodejs.writablestream.md).[end](nodejs.writablestream.md#end)
* Defined in [lib/node/node.d.ts:119](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L119)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [WritableStream](nodejs.writablestream.md).[end](nodejs.writablestream.md#end)
* Defined in [lib/node/node.d.ts:120](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L120)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void

### listeners(event: string): Function[]
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[listeners](nodejs.eventemitter.md#listeners)
* Overwrites [EventEmitter](nodejs.eventemitter.md).[listeners](nodejs.eventemitter.md#listeners)
* Defined in [lib/node/node.d.ts:95](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L95)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[on](nodejs.eventemitter.md#on)
* Overwrites [EventEmitter](nodejs.eventemitter.md).[on](nodejs.eventemitter.md#on)
* Defined in [lib/node/node.d.ts:90](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L90)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[once](nodejs.eventemitter.md#once)
* Overwrites [EventEmitter](nodejs.eventemitter.md).[once](nodejs.eventemitter.md#once)
* Defined in [lib/node/node.d.ts:91](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L91)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### pause(): void
  
* Inherited from [ReadableStream](nodejs.readablestream.md).[pause](nodejs.readablestream.md#pause)
* Defined in [lib/node/node.d.ts:103](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L103)

#### Returns: void

### pipe<T>(destination: T, options?: \{Optional end?: boolean\}): T
  
* Inherited from [ReadableStream](nodejs.readablestream.md).[pipe](nodejs.readablestream.md#pipe)
* Defined in [lib/node/node.d.ts:105](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L105)


#### Type parameters

* #### T [WritableStream](nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination | T|  |
| options? | \{Optional end?: boolean\}|  |

#### Returns: T

### read(size?: number): string | [Buffer](buffer.md)
  
* Inherited from [ReadableStream](nodejs.readablestream.md).[read](nodejs.readablestream.md#read)
* Defined in [lib/node/node.d.ts:101](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L101)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size? | number|  |

#### Returns: string | [Buffer](buffer.md)

### removeAllListeners(event?: string): [EventEmitter](nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[removeAllListeners](nodejs.eventemitter.md#removealllisteners)
* Overwrites [EventEmitter](nodejs.eventemitter.md).[removeAllListeners](nodejs.eventemitter.md#removealllisteners)
* Defined in [lib/node/node.d.ts:93](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L93)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[removeListener](nodejs.eventemitter.md#removelistener)
* Overwrites [EventEmitter](nodejs.eventemitter.md).[removeListener](nodejs.eventemitter.md#removelistener)
* Defined in [lib/node/node.d.ts:92](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L92)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### resume(): void
  
* Inherited from [ReadableStream](nodejs.readablestream.md).[resume](nodejs.readablestream.md#resume)
* Defined in [lib/node/node.d.ts:104](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L104)

#### Returns: void

### setEncoding(encoding: string): void
  
* Inherited from [ReadableStream](nodejs.readablestream.md).[setEncoding](nodejs.readablestream.md#setencoding)
* Defined in [lib/node/node.d.ts:102](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L102)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding | string|  |

#### Returns: void

### setMaxListeners(n: number): void
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[setMaxListeners](nodejs.eventemitter.md#setmaxlisteners)
* Overwrites [EventEmitter](nodejs.eventemitter.md).[setMaxListeners](nodejs.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:94](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L94)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### unpipe<T>(destination?: T): void
  
* Inherited from [ReadableStream](nodejs.readablestream.md).[unpipe](nodejs.readablestream.md#unpipe)
* Defined in [lib/node/node.d.ts:106](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L106)


#### Type parameters

* #### T [WritableStream](nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination? | T|  |

#### Returns: void

### unshift(chunk: string): voidunshift(chunk: [Buffer](buffer.md)): void
  
* Inherited from [ReadableStream](nodejs.readablestream.md).[unshift](nodejs.readablestream.md#unshift)
* Defined in [lib/node/node.d.ts:107](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L107)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | string|  |

#### Returns: void
  
* Inherited from [ReadableStream](nodejs.readablestream.md).[unshift](nodejs.readablestream.md#unshift)
* Defined in [lib/node/node.d.ts:108](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L108)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | [Buffer](buffer.md)|  |

#### Returns: void

### wrap(oldStream: [ReadableStream](nodejs.readablestream.md)): [ReadableStream](nodejs.readablestream.md)
  
* Inherited from [ReadableStream](nodejs.readablestream.md).[wrap](nodejs.readablestream.md#wrap)
* Defined in [lib/node/node.d.ts:109](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L109)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldStream | [ReadableStream](nodejs.readablestream.md)|  |

#### Returns: [ReadableStream](nodejs.readablestream.md)

### write(buffer: [Buffer](buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): boolean
  
* Inherited from [WritableStream](nodejs.writablestream.md).[write](nodejs.writablestream.md#write)
* Defined in [lib/node/node.d.ts:114](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L114)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [WritableStream](nodejs.writablestream.md).[write](nodejs.writablestream.md#write)
* Defined in [lib/node/node.d.ts:115](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L115)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [WritableStream](nodejs.writablestream.md).[write](nodejs.writablestream.md#write)
* Defined in [lib/node/node.d.ts:116](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L116)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean


Generated using [TypeDoc](http://typedoc.io)
