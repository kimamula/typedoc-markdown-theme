# Module "cluster"


## Index

### Classes
* [Worker](../classes/_cluster_.worker.md)

### Interfaces
* [ClusterSettings](../interfaces/_cluster_.clustersettings.md)

### Variables
* [isMaster](_cluster_.md#ismaster)
* [isWorker](_cluster_.md#isworker)
* [settings](_cluster_.md#settings)
* [worker](_cluster_.md#worker-1)
* [workers](_cluster_.md#workers)

### Functions
* [addListener](_cluster_.md#addlistener)
* [disconnect](_cluster_.md#disconnect)
* [emit](_cluster_.md#emit)
* [fork](_cluster_.md#fork)
* [listeners](_cluster_.md#listeners)
* [on](_cluster_.md#on)
* [once](_cluster_.md#once)
* [removeAllListeners](_cluster_.md#removealllisteners)
* [removeListener](_cluster_.md#removelistener)
* [setMaxListeners](_cluster_.md#setmaxlisteners)
* [setupMaster](_cluster_.md#setupmaster)

## Variables

### isMaster: boolean

* Defined in [lib/node/node.d.ts:421](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L421)


### isWorker: boolean

* Defined in [lib/node/node.d.ts:422](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L422)


### settings: [ClusterSettings](../interfaces/_cluster_.clustersettings.md)

* Defined in [lib/node/node.d.ts:420](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L420)


### worker: [Worker](../classes/_cluster_.worker.md)

* Defined in [lib/node/node.d.ts:426](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L426)


### workers: [Worker](../classes/_cluster_.worker.md)[]

* Defined in [lib/node/node.d.ts:427](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L427)


## Functions

### addListener(event: string, listener: Function): void
  
* Defined in [lib/node/node.d.ts:430](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L430)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: void

### disconnect(callback?: Function): void
  
* Defined in [lib/node/node.d.ts:425](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L425)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback? | Function|  |

#### Returns: void

### emit(event: string, ...args: any[]): boolean
  
* Defined in [lib/node/node.d.ts:437](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L437)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### fork(env?: any): [Worker](../classes/_cluster_.worker.md)
  
* Defined in [lib/node/node.d.ts:424](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L424)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| env? | any|  |

#### Returns: [Worker](../classes/_cluster_.worker.md)

### listeners(event: string): Function[]
  
* Defined in [lib/node/node.d.ts:436](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L436)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### on(event: string, listener: Function): any
  
* Defined in [lib/node/node.d.ts:431](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L431)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: any

### once(event: string, listener: Function): void
  
* Defined in [lib/node/node.d.ts:432](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L432)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: void

### removeAllListeners(event?: string): void
  
* Defined in [lib/node/node.d.ts:434](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L434)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event? | string|  |

#### Returns: void

### removeListener(event: string, listener: Function): void
  
* Defined in [lib/node/node.d.ts:433](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L433)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: void

### setMaxListeners(n: number): void
  
* Defined in [lib/node/node.d.ts:435](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L435)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### setupMaster(settings?: [ClusterSettings](../interfaces/_cluster_.clustersettings.md)): void
  
* Defined in [lib/node/node.d.ts:423](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L423)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| settings? | [ClusterSettings](../interfaces/_cluster_.clustersettings.md)|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
