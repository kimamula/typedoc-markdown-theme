# Interface WritableStream


### Extends
* [EventEmitter](nodejs.eventemitter.md)

### Implemented by
* [ClientRequest](_http_.clientrequest.md)
* [ServerResponse](_http_.serverresponse.md)
* [Writable](../classes/_stream_.writable.md)
* [WriteStream](_fs_.writestream.md)
* [WriteStream](../classes/_fs_extra_.writestream.md)

## Index

### Properties
* [writable](nodejs.writablestream.md#writable)

### Methods
* [addListener](nodejs.writablestream.md#addlistener)
* [emit](nodejs.writablestream.md#emit)
* [end](nodejs.writablestream.md#end)
* [listeners](nodejs.writablestream.md#listeners)
* [on](nodejs.writablestream.md#on)
* [once](nodejs.writablestream.md#once)
* [removeAllListeners](nodejs.writablestream.md#removealllisteners)
* [removeListener](nodejs.writablestream.md#removelistener)
* [setMaxListeners](nodejs.writablestream.md#setmaxlisteners)
* [write](nodejs.writablestream.md#write)

## Properties

### writable: boolean

* Defined in [lib/node/node.d.ts:113](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L113)


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

### end(): voidend(buffer: [Buffer](buffer.md), cb?: Function): voidend(str: string, cb?: Function): voidend(str: string, encoding?: string, cb?: Function): void
  
* Defined in [lib/node/node.d.ts:117](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L117)

#### Returns: void
  
* Defined in [lib/node/node.d.ts:118](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L118)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:119](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L119)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: void
  
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

### setMaxListeners(n: number): void
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[setMaxListeners](nodejs.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:94](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L94)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### write(buffer: [Buffer](buffer.md), cb?: Function): booleanwrite(str: string, cb?: Function): booleanwrite(str: string, encoding?: string, cb?: Function): boolean
  
* Defined in [lib/node/node.d.ts:114](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L114)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buffer | [Buffer](buffer.md)|  |
| cb? | Function|  |

#### Returns: boolean
  
* Defined in [lib/node/node.d.ts:115](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L115)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| cb? | Function|  |

#### Returns: boolean
  
* Defined in [lib/node/node.d.ts:116](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L116)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |
| encoding? | string|  |
| cb? | Function|  |

#### Returns: boolean


Generated using [TypeDoc](http://typedoc.io)
