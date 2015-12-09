# Interface ReadableStream


### Extends
* [EventEmitter](nodejs.eventemitter.md)

### Implemented by
* [ClearTextStream](_tls_.cleartextstream.md)
* [ClientResponse](_http_.clientresponse.md)
* [Duplex](../classes/_stream_.duplex.md)
* [ReadStream](../classes/_fs_extra_.readstream.md)
* [ReadStream](_tty_.readstream.md)
* [ReadStream](_fs_.readstream.md)
* [Readable](../classes/_stream_.readable.md)
* [Server](_net_.server.md)
* [Server](_https_.server.md)
* [Server](_tls_.server.md)
* [ServerRequest](_http_.serverrequest.md)
* [Socket](_net_.socket.md)
* [WriteStream](_tty_.writestream.md)

## Index

### Properties
* [readable](nodejs.readablestream.md#readable)

### Methods
* [addListener](nodejs.readablestream.md#addlistener)
* [emit](nodejs.readablestream.md#emit)
* [listeners](nodejs.readablestream.md#listeners)
* [on](nodejs.readablestream.md#on)
* [once](nodejs.readablestream.md#once)
* [pause](nodejs.readablestream.md#pause)
* [pipe](nodejs.readablestream.md#pipe)
* [read](nodejs.readablestream.md#read)
* [removeAllListeners](nodejs.readablestream.md#removealllisteners)
* [removeListener](nodejs.readablestream.md#removelistener)
* [resume](nodejs.readablestream.md#resume)
* [setEncoding](nodejs.readablestream.md#setencoding)
* [setMaxListeners](nodejs.readablestream.md#setmaxlisteners)
* [unpipe](nodejs.readablestream.md#unpipe)
* [unshift](nodejs.readablestream.md#unshift)
* [wrap](nodejs.readablestream.md#wrap)

## Properties

### readable: boolean

* Defined in [lib/node/node.d.ts:100](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L100)


## Methods

### addListener(event: string, listener: Function): [EventEmitter](nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[addListener](nodejs.eventemitter.md#addlistener)
* Defined in [lib/node/node.d.ts:89](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L89)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[emit](nodejs.eventemitter.md#emit)
* Defined in [lib/node/node.d.ts:96](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L96)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### listeners(event: string): Function[]
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[listeners](nodejs.eventemitter.md#listeners)
* Defined in [lib/node/node.d.ts:95](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L95)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[on](nodejs.eventemitter.md#on)
* Defined in [lib/node/node.d.ts:90](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L90)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[once](nodejs.eventemitter.md#once)
* Defined in [lib/node/node.d.ts:91](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L91)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### pause(): void
  
* Defined in [lib/node/node.d.ts:103](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L103)

#### Returns: void

### pipe<T>(destination: T, options?: \{Optional end?: boolean\}): T
  
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
  
* Defined in [lib/node/node.d.ts:101](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L101)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size? | number|  |

#### Returns: string | [Buffer](buffer.md)

### removeAllListeners(event?: string): [EventEmitter](nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[removeAllListeners](nodejs.eventemitter.md#removealllisteners)
* Defined in [lib/node/node.d.ts:93](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L93)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[removeListener](nodejs.eventemitter.md#removelistener)
* Defined in [lib/node/node.d.ts:92](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L92)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### resume(): void
  
* Defined in [lib/node/node.d.ts:104](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L104)

#### Returns: void

### setEncoding(encoding: string): void
  
* Defined in [lib/node/node.d.ts:102](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L102)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding | string|  |

#### Returns: void

### setMaxListeners(n: number): void
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[setMaxListeners](nodejs.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:94](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L94)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### unpipe<T>(destination?: T): void
  
* Defined in [lib/node/node.d.ts:106](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L106)


#### Type parameters

* #### T [WritableStream](nodejs.writablestream.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| destination? | T|  |

#### Returns: void

### unshift(chunk: string): voidunshift(chunk: [Buffer](buffer.md)): void
  
* Defined in [lib/node/node.d.ts:107](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L107)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | string|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:108](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L108)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | [Buffer](buffer.md)|  |

#### Returns: void

### wrap(oldStream: [ReadableStream](nodejs.readablestream.md)): [ReadableStream](nodejs.readablestream.md)
  
* Defined in [lib/node/node.d.ts:109](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L109)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldStream | [ReadableStream](nodejs.readablestream.md)|  |

#### Returns: [ReadableStream](nodejs.readablestream.md)


Generated using [TypeDoc](http://typedoc.io)
