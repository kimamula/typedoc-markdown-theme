# Interface Unzip


### Extends
* [Transform](../classes/_stream_.transform.md)

### Implements
* [EventEmitter](nodejs.eventemitter.md)
* [ReadWriteStream](nodejs.readwritestream.md)

## Index

### Constructors
* [constructor](_zlib_.unzip.md#constructor)

### Properties
* [readable](_zlib_.unzip.md#readable)
* [writable](_zlib_.unzip.md#writable)

### Methods
* [_flush](_zlib_.unzip.md#_flush)
* [_transform](_zlib_.unzip.md#_transform)
* [addListener](_zlib_.unzip.md#addlistener)
* [emit](_zlib_.unzip.md#emit)
* [end](_zlib_.unzip.md#end)
* [listeners](_zlib_.unzip.md#listeners)
* [on](_zlib_.unzip.md#on)
* [once](_zlib_.unzip.md#once)
* [pause](_zlib_.unzip.md#pause)
* [pipe](_zlib_.unzip.md#pipe)
* [push](_zlib_.unzip.md#push)
* [read](_zlib_.unzip.md#read)
* [removeAllListeners](_zlib_.unzip.md#removealllisteners)
* [removeListener](_zlib_.unzip.md#removelistener)
* [resume](_zlib_.unzip.md#resume)
* [setEncoding](_zlib_.unzip.md#setencoding)
* [setMaxListeners](_zlib_.unzip.md#setmaxlisteners)
* [unpipe](_zlib_.unzip.md#unpipe)
* [unshift](_zlib_.unzip.md#unshift)
* [wrap](_zlib_.unzip.md#wrap)
* [write](_zlib_.unzip.md#write)
* [listenerCount](_zlib_.unzip.md#listenercount)

## Constructors

### new Unzip(opts?: [TransformOptions](_stream_.transformoptions.md)): [Unzip](_zlib_.unzip.md)
  
* Inherited from [Transform](../classes/_stream_.transform.md).[constructor](../classes/_stream_.transform.md#constructor)
* Defined in [lib/node/node.d.ts:1283](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1283)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [TransformOptions](_stream_.transformoptions.md)|  |

#### Returns: [Unzip](_zlib_.unzip.md)

## Properties

### readable: boolean

* Inherited from [Transform](../classes/_stream_.transform.md).[readable](../classes/_stream_.transform.md#readable)
* Defined in [lib/node/node.d.ts:1282](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1282)


### writable: boolean

* Inherited from [Transform](../classes/_stream_.transform.md).[writable](../classes/_stream_.transform.md#writable)
* Defined in [lib/node/node.d.ts:1283](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1283)


## Methods

### _flush(callback: Function): void
  
* Inherited from [Transform](../classes/_stream_.transform.md).[_flush](../classes/_stream_.transform.md#_flush)
* Defined in [lib/node/node.d.ts:1287](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1287)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | Function|  |

#### Returns: void

### _transform(chunk: [Buffer](buffer.md), encoding: string, callback: Function): void_transform(chunk: string, encoding: string, callback: Function): void
  
* Inherited from [Transform](../classes/_stream_.transform.md).[_transform](../classes/_stream_.transform.md#_transform)
* Defined in [lib/node/node.d.ts:1285](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1285)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | [Buffer](buffer.md)|  |
| encoding | string|  |
| callback | Function|  |

#### Returns: void
  
* Inherited from [Transform](../classes/_stream_.transform.md).[_transform](../classes/_stream_.transform.md#_transform)
* Defined in [lib/node/node.d.ts:1286](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1286)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | string|  |
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
  
* Inherited from [Transform](../classes/_stream_.transform.md).[end](../classes/_stream_.transform.md#end)
* Defined in [lib/node/node.d.ts:1301](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1301)

#### Returns: void
  
* Inherited from [Transform](../classes/_stream_.transform.md).[end](../classes/_stream_.transform.md#end)
* Defined in [lib/node/node.d.ts:1302](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1302)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [Transform](../classes/_stream_.transform.md).[end](../classes/_stream_.transform.md#end)
* Defined in [lib/node/node.d.ts:1303](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1303)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [Transform](../classes/_stream_.transform.md).[end](../classes/_stream_.transform.md#end)
* Defined in [lib/node/node.d.ts:1304](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1304)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

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
  
* Inherited from [Transform](../classes/_stream_.transform.md).[pause](../classes/_stream_.transform.md#pause)
* Defined in [lib/node/node.d.ts:1290](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1290)

#### Returns: void

### pipe<T>(destination: T, options?: \{Optional end?: boolean\}): T
  
* Inherited from [Transform](../classes/_stream_.transform.md).[pipe](../classes/_stream_.transform.md#pipe)
* Defined in [lib/node/node.d.ts:1292](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1292)


#### Type parameters

* #### T [WritableStream](nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination | T|  |
| options? | \{Optional end?: boolean\}|  |

#### Returns: T

### push(chunk: any, encoding?: string): boolean
  
* Inherited from [Transform](../classes/_stream_.transform.md).[push](../classes/_stream_.transform.md#push)
* Defined in [lib/node/node.d.ts:1297](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1297)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |

#### Returns: boolean

### read(size?: number): any
  
* Inherited from [Transform](../classes/_stream_.transform.md).[read](../classes/_stream_.transform.md#read)
* Defined in [lib/node/node.d.ts:1288](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1288)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size? | number|  |

#### Returns: any

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
  
* Inherited from [Transform](../classes/_stream_.transform.md).[resume](../classes/_stream_.transform.md#resume)
* Defined in [lib/node/node.d.ts:1291](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1291)

#### Returns: void

### setEncoding(encoding: string): void
  
* Inherited from [Transform](../classes/_stream_.transform.md).[setEncoding](../classes/_stream_.transform.md#setencoding)
* Defined in [lib/node/node.d.ts:1289](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1289)


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
  
* Inherited from [Transform](../classes/_stream_.transform.md).[unpipe](../classes/_stream_.transform.md#unpipe)
* Defined in [lib/node/node.d.ts:1293](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1293)


#### Type parameters

* #### T [WritableStream](nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination? | T|  |

#### Returns: void

### unshift(chunk: string): voidunshift(chunk: [Buffer](buffer.md)): void
  
* Inherited from [Transform](../classes/_stream_.transform.md).[unshift](../classes/_stream_.transform.md#unshift)
* Defined in [lib/node/node.d.ts:1294](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1294)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | string|  |

#### Returns: void
  
* Inherited from [Transform](../classes/_stream_.transform.md).[unshift](../classes/_stream_.transform.md#unshift)
* Defined in [lib/node/node.d.ts:1295](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1295)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | [Buffer](buffer.md)|  |

#### Returns: void

### wrap(oldStream: [ReadableStream](nodejs.readablestream.md)): [ReadableStream](nodejs.readablestream.md)
  
* Inherited from [Transform](../classes/_stream_.transform.md).[wrap](../classes/_stream_.transform.md#wrap)
* Defined in [lib/node/node.d.ts:1296](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1296)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldStream | [ReadableStream](nodejs.readablestream.md)|  |

#### Returns: [ReadableStream](nodejs.readablestream.md)

### write(buffer: [Buffer](buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): boolean
  
* Inherited from [Transform](../classes/_stream_.transform.md).[write](../classes/_stream_.transform.md#write)
* Defined in [lib/node/node.d.ts:1298](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1298)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [Transform](../classes/_stream_.transform.md).[write](../classes/_stream_.transform.md#write)
* Defined in [lib/node/node.d.ts:1299](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1299)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [Transform](../classes/_stream_.transform.md).[write](../classes/_stream_.transform.md#write)
* Defined in [lib/node/node.d.ts:1300](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1300)


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
