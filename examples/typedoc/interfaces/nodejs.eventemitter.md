# Interface EventEmitter


### Implemented by
* [ChildProcess](_child_process_.childprocess.md)
* [ClearTextStream](_tls_.cleartextstream.md)
* [ClientRequest](_http_.clientrequest.md)
* [ClientRequest](_http_.clientrequest.md)
* [ClientResponse](_http_.clientresponse.md)
* [ClientResponse](_http_.clientresponse.md)
* [Deflate](_zlib_.deflate.md)
* [DeflateRaw](_zlib_.deflateraw.md)
* [Domain](../classes/_domain_.domain.md)
* [Duplex](../classes/_stream_.duplex.md)
* [EventEmitter](../classes/_events_.eventemitter.md)
* [FSWatcher](_fs_.fswatcher.md)
* [Gunzip](_zlib_.gunzip.md)
* [Gzip](_zlib_.gzip.md)
* [Inflate](_zlib_.inflate.md)
* [InflateRaw](_zlib_.inflateraw.md)
* [PassThrough](../classes/_stream_.passthrough.md)
* [ReadLine](_readline_.readline.md)
* [ReadStream](_tty_.readstream.md)
* [ReadStream](../classes/_fs_extra_.readstream.md)
* [ReadStream](_fs_.readstream.md)
* [Readable](../classes/_stream_.readable.md)
* [Server](_http_.server.md)
* [Server](_https_.server.md)
* [Server](_tls_.server.md)
* [Server](_net_.server.md)
* [ServerRequest](_http_.serverrequest.md)
* [ServerRequest](_http_.serverrequest.md)
* [ServerResponse](_http_.serverresponse.md)
* [ServerResponse](_http_.serverresponse.md)
* [Socket](_net_.socket.md)
* [Socket](_dgram_.socket.md)
* [Stream](_stream_.stream.md)
* [Transform](../classes/_stream_.transform.md)
* [Unzip](_zlib_.unzip.md)
* [Worker](../classes/_cluster_.worker.md)
* [Writable](../classes/_stream_.writable.md)
* [WriteStream](_tty_.writestream.md)
* [WriteStream](_fs_.writestream.md)
* [WriteStream](../classes/_fs_extra_.writestream.md)

## Index

### Methods
* [addListener](nodejs.eventemitter.md#addlistener)
* [emit](nodejs.eventemitter.md#emit)
* [listeners](nodejs.eventemitter.md#listeners)
* [on](nodejs.eventemitter.md#on)
* [once](nodejs.eventemitter.md#once)
* [removeAllListeners](nodejs.eventemitter.md#removealllisteners)
* [removeListener](nodejs.eventemitter.md#removelistener)
* [setMaxListeners](nodejs.eventemitter.md#setmaxlisteners)

## Methods

### addListener(event: string, listener: Function): [EventEmitter](nodejs.eventemitter.md)
  
* Defined in [lib/node/node.d.ts:89](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L89)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### emit(event: string, ...args: any[]): boolean
  
* Defined in [lib/node/node.d.ts:96](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L96)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### listeners(event: string): Function[]
  
* Defined in [lib/node/node.d.ts:95](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L95)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](nodejs.eventemitter.md)
  
* Defined in [lib/node/node.d.ts:90](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L90)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](nodejs.eventemitter.md)
  
* Defined in [lib/node/node.d.ts:91](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L91)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### removeAllListeners(event?: string): [EventEmitter](nodejs.eventemitter.md)
  
* Defined in [lib/node/node.d.ts:93](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L93)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### removeListener(event: string, listener: Function): [EventEmitter](nodejs.eventemitter.md)
  
* Defined in [lib/node/node.d.ts:92](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L92)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### setMaxListeners(n: number): void
  
* Defined in [lib/node/node.d.ts:94](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L94)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
