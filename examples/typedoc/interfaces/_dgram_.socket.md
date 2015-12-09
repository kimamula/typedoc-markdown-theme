# Interface Socket


### Extends
* [EventEmitter](../classes/_events_.eventemitter.md)

### Implements
* [EventEmitter](nodejs.eventemitter.md)

## Index

### Methods
* [addListener](_dgram_.socket.md#addlistener)
* [addMembership](_dgram_.socket.md#addmembership)
* [address](_dgram_.socket.md#address)
* [bind](_dgram_.socket.md#bind)
* [close](_dgram_.socket.md#close)
* [dropMembership](_dgram_.socket.md#dropmembership)
* [emit](_dgram_.socket.md#emit)
* [listeners](_dgram_.socket.md#listeners)
* [on](_dgram_.socket.md#on)
* [once](_dgram_.socket.md#once)
* [removeAllListeners](_dgram_.socket.md#removealllisteners)
* [removeListener](_dgram_.socket.md#removelistener)
* [send](_dgram_.socket.md#send)
* [setBroadcast](_dgram_.socket.md#setbroadcast)
* [setMaxListeners](_dgram_.socket.md#setmaxlisteners)
* [setMulticastLoopback](_dgram_.socket.md#setmulticastloopback)
* [setMulticastTTL](_dgram_.socket.md#setmulticastttl)
* [listenerCount](_dgram_.socket.md#listenercount)

## Methods

### addListener(event: string, listener: Function): [EventEmitter](../classes/_events_.eventemitter.md)
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[addListener](../classes/_events_.eventemitter.md#addlistener)
* Defined in [lib/node/node.d.ts:261](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L261)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](../classes/_events_.eventemitter.md)

### addMembership(multicastAddress: string, multicastInterface?: string): void
  
* Defined in [lib/node/node.d.ts:856](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L856)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| multicastAddress | string|  |
| multicastInterface? | string|  |

#### Returns: void

### address(): [AddressInfo](_dgram_.addressinfo.md)
  
* Defined in [lib/node/node.d.ts:852](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L852)

#### Returns: [AddressInfo](_dgram_.addressinfo.md)

### bind(port: number, address?: string, callback?: ()=> void): void
  
* Defined in [lib/node/node.d.ts:850](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L850)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| address? | string|  |
| callback? | ()=> void|  |

#### Returns: void

### close(): void
  
* Defined in [lib/node/node.d.ts:851](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L851)

#### Returns: void

### dropMembership(multicastAddress: string, multicastInterface?: string): void
  
* Defined in [lib/node/node.d.ts:857](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L857)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| multicastAddress | string|  |
| multicastInterface? | string|  |

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

### send(buf: [Buffer](buffer.md), offset: number, length: number, port: number, address: string, callback?: (error: Error, bytes: number)=> void): void
  
* Defined in [lib/node/node.d.ts:849](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L849)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buf | [Buffer](buffer.md)|  |
| offset | number|  |
| length | number|  |
| port | number|  |
| address | string|  |
| callback? | (error: Error, bytes: number)=> void|  |

#### Returns: void

### setBroadcast(flag: boolean): void
  
* Defined in [lib/node/node.d.ts:853](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L853)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| flag | boolean|  |

#### Returns: void

### setMaxListeners(n: number): void
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[setMaxListeners](../classes/_events_.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L266)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### setMulticastLoopback(flag: boolean): void
  
* Defined in [lib/node/node.d.ts:855](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L855)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| flag | boolean|  |

#### Returns: void

### setMulticastTTL(ttl: number): void
  
* Defined in [lib/node/node.d.ts:854](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L854)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ttl | number|  |

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
