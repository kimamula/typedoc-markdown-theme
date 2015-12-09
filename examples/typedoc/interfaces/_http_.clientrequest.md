# Interface ClientRequest


### Extends
* [EventEmitter](../classes/_events_.eventemitter.md)
* [Writable](../classes/_stream_.writable.md)

### Implements
* [EventEmitter](nodejs.eventemitter.md)
* [EventEmitter](nodejs.eventemitter.md)
* [WritableStream](nodejs.writablestream.md)

## Index

### Constructors
* [constructor](_http_.clientrequest.md#constructor)

### Properties
* [writable](_http_.clientrequest.md#writable)

### Methods
* [_write](_http_.clientrequest.md#_write)
* [abort](_http_.clientrequest.md#abort)
* [addListener](_http_.clientrequest.md#addlistener)
* [emit](_http_.clientrequest.md#emit)
* [end](_http_.clientrequest.md#end)
* [listeners](_http_.clientrequest.md#listeners)
* [on](_http_.clientrequest.md#on)
* [once](_http_.clientrequest.md#once)
* [removeAllListeners](_http_.clientrequest.md#removealllisteners)
* [removeListener](_http_.clientrequest.md#removelistener)
* [setMaxListeners](_http_.clientrequest.md#setmaxlisteners)
* [setNoDelay](_http_.clientrequest.md#setnodelay)
* [setSocketKeepAlive](_http_.clientrequest.md#setsocketkeepalive)
* [setTimeout](_http_.clientrequest.md#settimeout)
* [write](_http_.clientrequest.md#write)
* [listenerCount](_http_.clientrequest.md#listenercount)

## Constructors

### new ClientRequest(opts?: [WritableOptions](_stream_.writableoptions.md)): [ClientRequest](_http_.clientrequest.md)
  
* Inherited from [Writable](../classes/_stream_.writable.md).[constructor](../classes/_stream_.writable.md#constructor)
* Defined in [lib/node/node.d.ts:1246](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1246)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [WritableOptions](_stream_.writableoptions.md)|  |

#### Returns: [ClientRequest](_http_.clientrequest.md)

## Properties

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

### abort(): void
  
* Defined in [lib/node/node.d.ts:331](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L331)

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
* Defined in [lib/node/node.d.ts:337](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L337)

#### Returns: void
  
* Overwrites [Writable](../classes/_stream_.writable.md).[end](../classes/_stream_.writable.md#end)
* Defined in [lib/node/node.d.ts:338](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L338)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Writable](../classes/_stream_.writable.md).[end](../classes/_stream_.writable.md#end)
* Defined in [lib/node/node.d.ts:339](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L339)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Writable](../classes/_stream_.writable.md).[end](../classes/_stream_.writable.md#end)
* Defined in [lib/node/node.d.ts:340](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L340)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: void
  
* Overwrites [Writable](../classes/_stream_.writable.md).[end](../classes/_stream_.writable.md#end)
* Defined in [lib/node/node.d.ts:341](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L341)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data? | any|  |
| encoding? | string|  |

#### Returns: void

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

### setMaxListeners(n: number): void
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[setMaxListeners](../classes/_events_.eventemitter.md#setmaxlisteners)
* Overwrites [EventEmitter](../classes/_events_.eventemitter.md).[setMaxListeners](../classes/_events_.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L266)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### setNoDelay(noDelay?: boolean): void
  
* Defined in [lib/node/node.d.ts:333](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L333)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| noDelay? | boolean|  |

#### Returns: void

### setSocketKeepAlive(enable?: boolean, initialDelay?: number): void
  
* Defined in [lib/node/node.d.ts:334](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L334)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| enable? | boolean|  |
| initialDelay? | number|  |

#### Returns: void

### setTimeout(timeout: number, callback?: Function): void
  
* Defined in [lib/node/node.d.ts:332](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L332)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| timeout | number|  |
| callback? | Function|  |

#### Returns: void

### write(buffer: [Buffer](buffer.md)): booleanwrite(buffer: [Buffer](buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): booleanwrite(str: string, encoding?: string, fd?: string): booleanwrite(chunk: any, encoding?: string): void
  
* Overwrites [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:324](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L324)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:325](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L325)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:326](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L326)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:327](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L327)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:328](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L328)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| fd? | string|  |

#### Returns: boolean
  
* Overwrites [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:330](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L330)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| chunk | any|  |
| encoding? | string|  |

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
