# Interface ReadLine


### Extends
* [EventEmitter](../classes/_events_.eventemitter.md)

### Implements
* [EventEmitter](nodejs.eventemitter.md)

## Index

### Methods
* [addListener](_readline_.readline.md#addlistener)
* [close](_readline_.readline.md#close)
* [emit](_readline_.readline.md#emit)
* [listeners](_readline_.readline.md#listeners)
* [on](_readline_.readline.md#on)
* [once](_readline_.readline.md#once)
* [pause](_readline_.readline.md#pause)
* [prompt](_readline_.readline.md#prompt)
* [question](_readline_.readline.md#question)
* [removeAllListeners](_readline_.readline.md#removealllisteners)
* [removeListener](_readline_.readline.md#removelistener)
* [resume](_readline_.readline.md#resume)
* [setMaxListeners](_readline_.readline.md#setmaxlisteners)
* [setPrompt](_readline_.readline.md#setprompt)
* [write](_readline_.readline.md#write)
* [listenerCount](_readline_.readline.md#listenercount)

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

### close(): void
  
* Defined in [lib/node/node.d.ts:612](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L612)

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

### pause(): void
  
* Defined in [lib/node/node.d.ts:610](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L610)

#### Returns: void

### prompt(preserveCursor?: boolean): void
  
* Defined in [lib/node/node.d.ts:608](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L608)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| preserveCursor? | boolean|  |

#### Returns: void

### question(query: string, callback: Function): void
  
* Defined in [lib/node/node.d.ts:609](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L609)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| query | string|  |
| callback | Function|  |

#### Returns: void

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
  
* Defined in [lib/node/node.d.ts:611](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L611)

#### Returns: void

### setMaxListeners(n: number): void
  
* Inherited from [EventEmitter](../classes/_events_.eventemitter.md).[setMaxListeners](../classes/_events_.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:266](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L266)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### setPrompt(prompt: string, length: number): void
  
* Defined in [lib/node/node.d.ts:607](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L607)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| prompt | string|  |
| length | number|  |

#### Returns: void

### write(data: any, key?: any): void
  
* Defined in [lib/node/node.d.ts:613](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L613)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| data | any|  |
| key? | any|  |

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
