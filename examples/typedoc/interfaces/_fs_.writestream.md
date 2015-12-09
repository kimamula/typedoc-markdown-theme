# Interface WriteStream


### Extends
* [Writable](../classes/_stream_.writable.md)

### Implements
* [EventEmitter](nodejs.eventemitter.md)
* [WritableStream](nodejs.writablestream.md)

## Index

### Constructors
* [constructor](_fs_.writestream.md#constructor)

### Properties
* [writable](_fs_.writestream.md#writable)

### Methods
* [_write](_fs_.writestream.md#_write)
* [addListener](_fs_.writestream.md#addlistener)
* [close](_fs_.writestream.md#close)
* [emit](_fs_.writestream.md#emit)
* [end](_fs_.writestream.md#end)
* [listeners](_fs_.writestream.md#listeners)
* [on](_fs_.writestream.md#on)
* [once](_fs_.writestream.md#once)
* [removeAllListeners](_fs_.writestream.md#removealllisteners)
* [removeListener](_fs_.writestream.md#removelistener)
* [setMaxListeners](_fs_.writestream.md#setmaxlisteners)
* [write](_fs_.writestream.md#write)
* [listenerCount](_fs_.writestream.md#listenercount)

## Constructors

### new WriteStream(opts?: [WritableOptions](_stream_.writableoptions.md)): [WriteStream](_fs_.writestream.md)
  
* Inherited from [Writable](../classes/_stream_.writable.md).[constructor](../classes/_stream_.writable.md#constructor)
* Defined in [lib/node/node.d.ts:1246](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1246)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [WritableOptions](_stream_.writableoptions.md)|  |

#### Returns: [WriteStream](_fs_.writestream.md)

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

### addListener(event: string, listener: Function): [EventEmitter](../classes/_events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[addListener](../classes/_events_.eventemitter.md#addlistener)
* Defined in [lib/node/node.d.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L261)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_events_.eventemitter.md)

### close(): void
  
* Defined in [lib/node/node.d.ts:896](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L896)

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

### end(): voidend(buffer: [Buffer](buffer.md), cb?: Function): voidend(str: string, cb?: Function): voidend(str: string, encoding?: string, cb?: Function): void
  
* Inherited from [Writable](../classes/_stream_.writable.md).[end](../classes/_stream_.writable.md#end)
* Defined in [lib/node/node.d.ts:1253](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1253)

#### Returns: void
  
* Inherited from [Writable](../classes/_stream_.writable.md).[end](../classes/_stream_.writable.md#end)
* Defined in [lib/node/node.d.ts:1254](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1254)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [Writable](../classes/_stream_.writable.md).[end](../classes/_stream_.writable.md#end)
* Defined in [lib/node/node.d.ts:1255](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1255)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
* Inherited from [Writable](../classes/_stream_.writable.md).[end](../classes/_stream_.writable.md#end)
* Defined in [lib/node/node.d.ts:1256](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1256)


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

### setMaxListeners(n: number): void
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[setMaxListeners](../classes/_events_.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L266)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### write(buffer: [Buffer](buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): boolean
  
* Inherited from [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:1250](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1250)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:1251](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1251)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Inherited from [Writable](../classes/_stream_.writable.md).[write](../classes/_stream_.writable.md#write)
* Defined in [lib/node/node.d.ts:1252](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1252)


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
