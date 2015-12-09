# Module internal


### Callable
internal(value: any, message?: string): void
  
* Defined in [lib/node/node.d.ts:1334](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1334)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any|  |
| message? | string|  |

#### Returns: void

## Index

### Classes
* [AssertionError](../classes/_assert_.internal.assertionerror.md)

### Variables
* [doesNotThrow](_assert_.internal.md#doesnotthrow)
* [throws](_assert_.internal.md#throws)

### Functions
* [deepEqual](_assert_.internal.md#deepequal)
* [equal](_assert_.internal.md#equal)
* [fail](_assert_.internal.md#fail)
* [ifError](_assert_.internal.md#iferror)
* [notDeepEqual](_assert_.internal.md#notdeepequal)
* [notEqual](_assert_.internal.md#notequal)
* [notStrictEqual](_assert_.internal.md#notstrictequal)
* [ok](_assert_.internal.md#ok)
* [strictEqual](_assert_.internal.md#strictequal)

## Variables

### doesNotThrow: (block: Function, message?: string)=> void; (block: Function, error: Function, message?: string)=> void; (block: Function, error: RegExp, message?: string)=> void; (block: Function, error: (err: any)=> boolean, message?: string)=> void

* Defined in [lib/node/node.d.ts:1363](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1363)


### throws: (block: Function, message?: string)=> void; (block: Function, error: Function, message?: string)=> void; (block: Function, error: RegExp, message?: string)=> void; (block: Function, error: (err: any)=> boolean, message?: string)=> void

* Defined in [lib/node/node.d.ts:1356](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1356)


## Functions

### deepEqual(actual: any, expected: any, message?: string): void
  
* Defined in [lib/node/node.d.ts:1352](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1352)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| actual | any|  |
| expected | any|  |
| message? | string|  |

#### Returns: void

### equal(actual: any, expected: any, message?: string): void
  
* Defined in [lib/node/node.d.ts:1350](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1350)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| actual | any|  |
| expected | any|  |
| message? | string|  |

#### Returns: void

### fail(actual?: any, expected?: any, message?: string, operator?: string): void
  
* Defined in [lib/node/node.d.ts:1348](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1348)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| actual? | any|  |
| expected? | any|  |
| message? | string|  |
| operator? | string|  |

#### Returns: void

### ifError(value: any): void
  
* Defined in [lib/node/node.d.ts:1370](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1370)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any|  |

#### Returns: void

### notDeepEqual(acutal: any, expected: any, message?: string): void
  
* Defined in [lib/node/node.d.ts:1353](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1353)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| acutal | any|  |
| expected | any|  |
| message? | string|  |

#### Returns: void

### notEqual(actual: any, expected: any, message?: string): void
  
* Defined in [lib/node/node.d.ts:1351](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1351)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| actual | any|  |
| expected | any|  |
| message? | string|  |

#### Returns: void

### notStrictEqual(actual: any, expected: any, message?: string): void
  
* Defined in [lib/node/node.d.ts:1355](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1355)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| actual | any|  |
| expected | any|  |
| message? | string|  |

#### Returns: void

### ok(value: any, message?: string): void
  
* Defined in [lib/node/node.d.ts:1349](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1349)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any|  |
| message? | string|  |

#### Returns: void

### strictEqual(actual: any, expected: any, message?: string): void
  
* Defined in [lib/node/node.d.ts:1354](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1354)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| actual | any|  |
| expected | any|  |
| message? | string|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
