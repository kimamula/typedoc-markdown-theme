# Interface ServerResponse


### Extends
* [EventEmitter](../classes/_events_.eventemitter.md)
* [Writable](../classes/_stream_.writable.md)

### Implements
* [EventEmitter](nodejs.eventemitter.md)
* [EventEmitter](nodejs.eventemitter.md)
* [WritableStream](nodejs.writablestream.md)

## Index

### Constructors
* [constructor](_http_.serverresponse.md#constructor)

### Properties
* [sendDate](_http_.serverresponse.md#senddate)
* [statusCode](_http_.serverresponse.md#statuscode)
* [writable](_http_.serverresponse.md#writable)

### Methods
* [_write](_http_.serverresponse.md#_write)
* [addListener](_http_.serverresponse.md#addlistener)
* [addTrailers](_http_.serverresponse.md#addtrailers)
* [emit](_http_.serverresponse.md#emit)
* [end](_http_.serverresponse.md#end)
* [getHeader](_http_.serverresponse.md#getheader)
* [listeners](_http_.serverresponse.md#listeners)
* [on](_http_.serverresponse.md#on)
* [once](_http_.serverresponse.md#once)
* [removeAllListeners](_http_.serverresponse.md#removealllisteners)
* [removeHeader](_http_.serverresponse.md#removeheader)
* [removeListener](_http_.serverresponse.md#removelistener)
* [setHeader](_http_.serverresponse.md#setheader)
* [setMaxListeners](_http_.serverresponse.md#setmaxlisteners)
* [write](_http_.serverresponse.md#write)
* [writeContinue](_http_.serverresponse.md#writecontinue)
* [writeHead](_http_.serverresponse.md#writehead)
* [listenerCount](_http_.serverresponse.md#listenercount)

## Constructors

### new ServerResponse(opts?: [WritableOptions](_stream_.writableoptions.md)): [ServerResponse](_http_.serverresponse.md)
  
* Inherited from [Writable](../classes/_stream_.writable.md).[constructor](../classes/_stream_.writable.md#constructor)
* Defined in [lib/node/node.d.ts:1246](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1246)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [WritableOptions](_stream_.writableoptions.md)|  |

#### Returns: [ServerResponse](_http_.serverresponse.md)

## Properties

### sendDate: boolean

* Defined in [lib/node/node.d.ts:309](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L309)


### statusCode: number

* Defined in [lib/node/node.d.ts:307](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L307)


### writable: boolean

* Inherited from [Writable](../classes/_stream_.writable.md).[writable](../classes/_stream_.writable.md#writable)
* Defined in [lib/node/node.d.ts:1246](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1246)


## Methods

### _write(data: [Buffer](buffer.md), encoding: string, callback: Function): void_write(data: string, encoding: string, callback: Function): void
  
* Inherited from [Writable](../classes/_stream_.writable.md).[_write](../classes/_stream_.writable.md#_write)
* Defined in [lib/node/node.d.ts:1248](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1248)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data | [Buffer](buffer.md)|  |
| encoding | string|  |
| callback | Function|  |

#### Returns: void
  
* Inherited from [Writable](../classes/_stream_.writable.md).[_write](../classes/_stream_.writable.md#_write)
* Defined in [lib/node/node.d.ts:1249](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1249)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data | string|  |
| encoding | string|  |
| callback | Function|  |

#### Returns: void

### addListener(event: string, listener: Function): [EventEmitter](../classes/_events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[addListener](../classes/_events_.eventemitter.md#addlistener)
* Overwrites [EventEmitter](../classes/_events_.eventemitter.md).[addListener](../classes/_events_.eventemitter.md#addlistener)
* Defined in [lib/node/node.d.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L261)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_events_.eventemitter.md)

### addTrailers(headers: any): void
  
* Defined in [lib/node/node.d.ts:313](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L313)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| headers | any|  |

#### Returns: void

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[emit](../classes/_events_.eventemitter.md#emit)
* Overwrites [EventEmitter](../classes/_events_.eventemitter.md).[emit](../classes/_events_.eventemitter.md#emit)
* Defined in [lib/node/node.d.ts:268](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L268)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### end(): voidend(buffer: [Buffer](buffer.md), cb?: Function): voidend(str: string, cb?: Function): voidend(str: string, encoding?: string, cb?: Function): voidend(data?: any, encoding?: string): void
  
* Overwrites [Writable](../classes/_stream_.writable.md).[end](../classes/_stream_.writable.md#end)
* Defined in [lib/node/node.d.ts:316](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L316)

#### Returns: void
  
* Overwrites [Writable](../classes/_stream_.writable.md).[end](../classes/_stream_.writable.md#end)
* Defined in [lib/node/node.d.ts:317](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L317)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Writable](../classes/_stream_.writable.md).[end](../classes/_stream_.writable.md#end)
* Defined in [lib/node/node.d.ts:318](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L318)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Writable](../classes/_stream_.writable.md).[end](../classes/_stream_.writable.md#end)
* Defined in [lib/node/node.d.ts:319](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L319)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Writable](../classes/_stream_.writable.md).[end](../classes/_stream_.writable.md#end)
* Defined in [lib/node/node.d.ts:320](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L320)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data? | any|  |
| encoding? | string|  |

#### Returns: void

### getHeader(name: string): string
  
* Defined in [lib/node/node.d.ts:310](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L310)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: string

### listeners(event: string): Function[]
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[listeners](../classes/_events_.eventemitter.md#listeners)
* Overwrites [EventEmitter](../classes/_events_.eventemitter.md).[listeners](../classes/_events_.eventemitter.md#listeners)
* Defined in [lib/node/node.d.ts:267](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L267)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [EventEmitter](../classes/_events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[on](../classes/_events_.eventemitter.md#on)
* Overwrites [EventEmitter](../classes/_events_.eventemitter.md).[on](../classes/_events_.eventemitter.md#on)
* Defined in [lib/node/node.d.ts:262](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L262)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_events_.eventemitter.md)

### once(event: string, listener: Function): [EventEmitter](../classes/_events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[once](../classes/_events_.eventemitter.md#once)
* Overwrites [EventEmitter](../classes/_events_.eventemitter.md).[once](../classes/_events_.eventemitter.md#once)
* Defined in [lib/node/node.d.ts:263](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L263)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_events_.eventemitter.md)

### removeAllListeners(event?: string): [EventEmitter](../classes/_events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[removeAllListeners](../classes/_events_.eventemitter.md#removealllisteners)
* Overwrites [EventEmitter](../classes/_events_.eventemitter.md).[removeAllListeners](../classes/_events_.eventemitter.md#removealllisteners)
* Defined in [lib/node/node.d.ts:265](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L265)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [EventEmitter](../classes/_events_.eventemitter.md)

### removeHeader(name: string): void
  
* Defined in [lib/node/node.d.ts:311](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L311)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: void

### removeListener(event: string, listener: Function): [EventEmitter](../classes/_events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[removeListener](../classes/_events_.eventemitter.md#removelistener)
* Overwrites [EventEmitter](../classes/_events_.eventemitter.md).[removeListener](../classes/_events_.eventemitter.md#removelistener)
* Defined in [lib/node/node.d.ts:264](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L264)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_events_.eventemitter.md)

### setHeader(name: string, value: string): void
  
* Defined in [lib/node/node.d.ts:308](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L308)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |
| value | string|  |

#### Returns: void

### setMaxListeners(n: number): void
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[setMaxListeners](../classes/_events_.eventemitter.md#setmaxlisteners)
* Overwrites [EventEmitter](../classes/_events_.eventemitter.md).[setMaxListeners](../classes/_events_.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L266)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### write(buffer: [Buffer](buffer.md)): booleanwrite(buffer: [Buffer](buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): booleanwrite(str: string, encoding?: string, fd?: string): booleanwrite(chunk: any, encoding?: string): any
  
* Overwrites [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:298](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L298)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:299](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L299)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:300](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L300)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:301](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L301)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:302](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L302)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| fd? | string|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:312](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L312)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |

#### Returns: any

### writeContinue(): void
  
* Defined in [lib/node/node.d.ts:304](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L304)

#### Returns: void

### writeHead(statusCode: number, reasonPhrase?: string, headers?: any): voidwriteHead(statusCode: number, headers?: any): void
  
* Defined in [lib/node/node.d.ts:305](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L305)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| statusCode | number|  |
| reasonPhrase? | string|  |
| headers? | any|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:306](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L306)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| statusCode | number|  |
| headers? | any|  |

#### Returns: void

### Static listenerCount(emitter: [EventEmitter](../classes/_events_.eventemitter.md), event: string): number
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[listenerCount](../classes/_events_.eventemitter.md#listenercount)
* Overwrites [EventEmitter](../classes/_events_.eventemitter.md).[listenerCount](../classes/_events_.eventemitter.md#listenercount)
* Defined in [lib/node/node.d.ts:259](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L259)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| emitter | [EventEmitter](../classes/_events_.eventemitter.md)|  |
| event | string|  |

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
