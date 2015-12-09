# Interface Socket


### Extends
* [Duplex](../classes/_stream_.duplex.md)

### Implements
* [EventEmitter](nodejs.eventemitter.md)
* [ReadableStream](nodejs.readablestream.md)
* [ReadWriteStream](nodejs.readwritestream.md)

## Index

### Constructors
* [constructor](_net_.socket.md#constructor)

### Properties
* [bufferSize](_net_.socket.md#buffersize)
* [bytesRead](_net_.socket.md#bytesread)
* [bytesWritten](_net_.socket.md#byteswritten)
* [localAddress](_net_.socket.md#localaddress)
* [localPort](_net_.socket.md#localport)
* [readable](_net_.socket.md#readable)
* [remoteAddress](_net_.socket.md#remoteaddress)
* [remoteFamily](_net_.socket.md#remotefamily)
* [remotePort](_net_.socket.md#remoteport)
* [writable](_net_.socket.md#writable)

### Methods
* [_read](_net_.socket.md#_read)
* [_write](_net_.socket.md#_write)
* [addListener](_net_.socket.md#addlistener)
* [address](_net_.socket.md#address)
* [connect](_net_.socket.md#connect)
* [destroy](_net_.socket.md#destroy)
* [emit](_net_.socket.md#emit)
* [end](_net_.socket.md#end)
* [listeners](_net_.socket.md#listeners)
* [on](_net_.socket.md#on)
* [once](_net_.socket.md#once)
* [pause](_net_.socket.md#pause)
* [pipe](_net_.socket.md#pipe)
* [push](_net_.socket.md#push)
* [read](_net_.socket.md#read)
* [ref](_net_.socket.md#ref)
* [removeAllListeners](_net_.socket.md#removealllisteners)
* [removeListener](_net_.socket.md#removelistener)
* [resume](_net_.socket.md#resume)
* [setEncoding](_net_.socket.md#setencoding)
* [setKeepAlive](_net_.socket.md#setkeepalive)
* [setMaxListeners](_net_.socket.md#setmaxlisteners)
* [setNoDelay](_net_.socket.md#setnodelay)
* [setTimeout](_net_.socket.md#settimeout)
* [unpipe](_net_.socket.md#unpipe)
* [unref](_net_.socket.md#unref)
* [unshift](_net_.socket.md#unshift)
* [wrap](_net_.socket.md#wrap)
* [write](_net_.socket.md#write)
* [listenerCount](_net_.socket.md#listenercount)

## Constructors

### new Socket(opts?: [DuplexOptions](_stream_.duplexoptions.md)): [Socket](_net_.socket.md)
  
* Inherited from [Duplex](../classes/_stream_.duplex.md).[constructor](../classes/_stream_.duplex.md#constructor)
* Overwrites [Readable](../classes/_stream_.readable.md).[constructor](../classes/_stream_.readable.md#constructor)
* Defined in [lib/node/node.d.ts:1265](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1265)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [DuplexOptions](_stream_.duplexoptions.md)|  |

#### Returns: [Socket](_net_.socket.md)

## Properties

### bufferSize: number

* Defined in [lib/node/node.d.ts:776](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L776)


### bytesRead: number

* Defined in [lib/node/node.d.ts:794](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L794)


### bytesWritten: number

* Defined in [lib/node/node.d.ts:795](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L795)


### localAddress: string

* Defined in [lib/node/node.d.ts:792](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L792)


### localPort: number

* Defined in [lib/node/node.d.ts:793](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L793)


### readable: boolean

* Inherited from [Readable](../classes/_stream_.readable.md).[readable](../classes/_stream_.readable.md#readable)
* Defined in [lib/node/node.d.ts:1225](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1225)


### remoteAddress: string

* Defined in [lib/node/node.d.ts:789](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L789)


### remoteFamily: string

* Defined in [lib/node/node.d.ts:790](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L790)


### remotePort: number

* Defined in [lib/node/node.d.ts:791](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L791)


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

### address(): \{address: string, family: string, port: number\}
  
* Defined in [lib/node/node.d.ts:785](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L785)

#### Returns: \{address: string, family: string, port: number\}

### connect(port: number, host?: string, connectionListener?: Function): voidconnect(path: string, connectionListener?: Function): void
  
* Defined in [lib/node/node.d.ts:774](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L774)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| host? | string|  |
| connectionListener? | Function|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:775](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L775)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| connectionListener? | Function|  |

#### Returns: void

### destroy(): void
  
* Defined in [lib/node/node.d.ts:779](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L779)

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

### end(): voidend(buffer: [Buffer](buffer.md), cb?: Function): voidend(str: string, cb?: Function): voidend(str: string, encoding?: string, cb?: Function): voidend(data?: any, encoding?: string): void
  
* Overwrites [Duplex](../classes/_stream_.duplex.md).[end](../classes/_stream_.duplex.md#end)
* Defined in [lib/node/node.d.ts:798](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L798)

#### Returns: void
  
* Overwrites [Duplex](../classes/_stream_.duplex.md).[end](../classes/_stream_.duplex.md#end)
* Defined in [lib/node/node.d.ts:799](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L799)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Duplex](../classes/_stream_.duplex.md).[end](../classes/_stream_.duplex.md#end)
* Defined in [lib/node/node.d.ts:800](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L800)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Duplex](../classes/_stream_.duplex.md).[end](../classes/_stream_.duplex.md#end)
* Defined in [lib/node/node.d.ts:801](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L801)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Duplex](../classes/_stream_.duplex.md).[end](../classes/_stream_.duplex.md#end)
* Defined in [lib/node/node.d.ts:802](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L802)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data? | any|  |
| encoding? | string|  |

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

### pause(): void
  
* Overwrites [Readable](../classes/_stream_.readable.md).[pause](../classes/_stream_.readable.md#pause)
* Defined in [lib/node/node.d.ts:780](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L780)

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

### ref(): void
  
* Defined in [lib/node/node.d.ts:787](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L787)

#### Returns: void

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
  
* Overwrites [Readable](../classes/_stream_.readable.md).[resume](../classes/_stream_.readable.md#resume)
* Defined in [lib/node/node.d.ts:781](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L781)

#### Returns: void

### setEncoding(encoding?: string): void
  
* Overwrites [Readable](../classes/_stream_.readable.md).[setEncoding](../classes/_stream_.readable.md#setencoding)
* Defined in [lib/node/node.d.ts:777](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L777)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding? | string|  |

#### Returns: void

### setKeepAlive(enable?: boolean, initialDelay?: number): void
  
* Defined in [lib/node/node.d.ts:784](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L784)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| enable? | boolean|  |
| initialDelay? | number|  |

#### Returns: void

### setMaxListeners(n: number): void
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[setMaxListeners](../classes/_events_.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L266)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### setNoDelay(noDelay?: boolean): void
  
* Defined in [lib/node/node.d.ts:783](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L783)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| noDelay? | boolean|  |

#### Returns: void

### setTimeout(timeout: number, callback?: Function): void
  
* Defined in [lib/node/node.d.ts:782](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L782)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| timeout | number|  |
| callback? | Function|  |

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

### unref(): void
  
* Defined in [lib/node/node.d.ts:786](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L786)

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

### write(buffer: [Buffer](buffer.md)): booleanwrite(buffer: [Buffer](buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): booleanwrite(str: string, encoding?: string, fd?: string): booleanwrite(data: any, encoding?: string, callback?: Function): void
  
* Overwrites [Duplex](../classes/_stream_.duplex.md).[write](../classes/_stream_.duplex.md#write)
* Defined in [lib/node/node.d.ts:768](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L768)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |

#### Returns: boolean
  
* Overwrites [Duplex](../classes/_stream_.duplex.md).[write](../classes/_stream_.duplex.md#write)
* Defined in [lib/node/node.d.ts:769](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L769)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Duplex](../classes/_stream_.duplex.md).[write](../classes/_stream_.duplex.md#write)
* Defined in [lib/node/node.d.ts:770](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L770)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Duplex](../classes/_stream_.duplex.md).[write](../classes/_stream_.duplex.md#write)
* Defined in [lib/node/node.d.ts:771](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L771)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Duplex](../classes/_stream_.duplex.md).[write](../classes/_stream_.duplex.md#write)
* Defined in [lib/node/node.d.ts:772](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L772)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| fd? | string|  |

#### Returns: boolean
  
* Overwrites [Duplex](../classes/_stream_.duplex.md).[write](../classes/_stream_.duplex.md#write)
* Defined in [lib/node/node.d.ts:778](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L778)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data | any|  |
| encoding? | string|  |
| callback? | Function|  |

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
