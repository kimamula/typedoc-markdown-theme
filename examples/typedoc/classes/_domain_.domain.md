# Class Domain


### Extends
* [EventEmitter](_events_.eventemitter.md)

### Implements
* [EventEmitter](../interfaces/nodejs.eventemitter.md)

## Index

### Methods
* [add](_domain_.domain.md#add)
* [addListener](_domain_.domain.md#addlistener)
* [bind](_domain_.domain.md#bind)
* [dispose](_domain_.domain.md#dispose)
* [emit](_domain_.domain.md#emit)
* [intercept](_domain_.domain.md#intercept)
* [listeners](_domain_.domain.md#listeners)
* [on](_domain_.domain.md#on)
* [once](_domain_.domain.md#once)
* [remove](_domain_.domain.md#remove)
* [removeAllListeners](_domain_.domain.md#removealllisteners)
* [removeListener](_domain_.domain.md#removelistener)
* [run](_domain_.domain.md#run)
* [setMaxListeners](_domain_.domain.md#setmaxlisteners)
* [listenerCount](_domain_.domain.md#listenercount)

## Methods

### add(emitter: [EventEmitter](_events_.eventemitter.md)): void
  
* Defined in [lib/node/node.d.ts:1395](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1395)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| emitter | [EventEmitter](_events_.eventemitter.md)|  |

#### Returns: void

### addListener(event: string, listener: Function): [Domain](_domain_.domain.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[addListener](../interfaces/nodejs.eventemitter.md#addlistener)
* Overwrites [EventEmitter](_events_.eventemitter.md).[addListener](_events_.eventemitter.md#addlistener)
* Defined in [lib/node/node.d.ts:1401](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1401)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [Domain](_domain_.domain.md)

### bind(cb: (err: Error, data: any)=> any): any
  
* Defined in [lib/node/node.d.ts:1397](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1397)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| cb | (err: Error, data: any)=> any|  |

#### Returns: any

### dispose(): void
  
* Defined in [lib/node/node.d.ts:1399](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1399)

#### Returns: void

### emit(event: string, ...args: any[]): boolean
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[emit](../interfaces/nodejs.eventemitter.md#emit)
* Inherited from [EventEmitter](_events_.eventemitter.md).[emit](_events_.eventemitter.md#emit)
* Defined in [lib/node/node.d.ts:268](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L268)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### intercept(cb: (data: any)=> any): any
  
* Defined in [lib/node/node.d.ts:1398](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1398)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| cb | (data: any)=> any|  |

#### Returns: any

### listeners(event: string): Function[]
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[listeners](../interfaces/nodejs.eventemitter.md#listeners)
* Inherited from [EventEmitter](_events_.eventemitter.md).[listeners](_events_.eventemitter.md#listeners)
* Defined in [lib/node/node.d.ts:267](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L267)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): [Domain](_domain_.domain.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[on](../interfaces/nodejs.eventemitter.md#on)
* Overwrites [EventEmitter](_events_.eventemitter.md).[on](_events_.eventemitter.md#on)
* Defined in [lib/node/node.d.ts:1402](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1402)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [Domain](_domain_.domain.md)

### once(event: string, listener: Function): [Domain](_domain_.domain.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[once](../interfaces/nodejs.eventemitter.md#once)
* Overwrites [EventEmitter](_events_.eventemitter.md).[once](_events_.eventemitter.md#once)
* Defined in [lib/node/node.d.ts:1403](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1403)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [Domain](_domain_.domain.md)

### remove(emitter: [EventEmitter](_events_.eventemitter.md)): void
  
* Defined in [lib/node/node.d.ts:1396](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1396)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| emitter | [EventEmitter](_events_.eventemitter.md)|  |

#### Returns: void

### removeAllListeners(event?: string): [Domain](_domain_.domain.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[removeAllListeners](../interfaces/nodejs.eventemitter.md#removealllisteners)
* Overwrites [EventEmitter](_events_.eventemitter.md).[removeAllListeners](_events_.eventemitter.md#removealllisteners)
* Defined in [lib/node/node.d.ts:1405](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1405)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: [Domain](_domain_.domain.md)

### removeListener(event: string, listener: Function): [Domain](_domain_.domain.md)
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[removeListener](../interfaces/nodejs.eventemitter.md#removelistener)
* Overwrites [EventEmitter](_events_.eventemitter.md).[removeListener](_events_.eventemitter.md#removelistener)
* Defined in [lib/node/node.d.ts:1404](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1404)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [Domain](_domain_.domain.md)

### run(fn: Function): void
  
* Defined in [lib/node/node.d.ts:1394](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1394)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fn | Function|  |

#### Returns: void

### setMaxListeners(n: number): void
  
* Implementation of [EventEmitter](../interfaces/nodejs.eventemitter.md).[setMaxListeners](../interfaces/nodejs.eventemitter.md#setmaxlisteners)
* Inherited from [EventEmitter](_events_.eventemitter.md).[setMaxListeners](_events_.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L266)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### Static listenerCount(emitter: [EventEmitter](_events_.eventemitter.md), event: string): number
  
* Inherited from [EventEmitter](_events_.eventemitter.md).[listenerCount](_events_.eventemitter.md#listenercount)
* Defined in [lib/node/node.d.ts:259](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L259)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| emitter | [EventEmitter](_events_.eventemitter.md)|  |
| event | string|  |

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
