# Module "vm"


## Index

### Interfaces
* [Context](../interfaces/_vm_.context.md)
* [Script](../interfaces/_vm_.script.md)

### Functions
* [createContext](_vm_.md#createcontext)
* [createScript](_vm_.md#createscript)
* [runInContext](_vm_.md#runincontext)
* [runInNewContext](_vm_.md#runinnewcontext)
* [runInThisContext](_vm_.md#runinthiscontext)

## Functions

### createContext(initSandbox?: [Context](../interfaces/_vm_.context.md)): [Context](../interfaces/_vm_.context.md)
  
* Defined in [lib/node/node.d.ts:633](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L633)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| initSandbox? | [Context](../interfaces/_vm_.context.md)|  |

#### Returns: [Context](../interfaces/_vm_.context.md)

### createScript(code: string, filename?: string): [Script](../interfaces/_vm_.script.md)
  
* Defined in [lib/node/node.d.ts:634](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L634)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| code | string|  |
| filename? | string|  |

#### Returns: [Script](../interfaces/_vm_.script.md)

### runInContext(code: string, context: [Context](../interfaces/_vm_.context.md), filename?: string): void
  
* Defined in [lib/node/node.d.ts:632](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L632)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| code | string|  |
| context | [Context](../interfaces/_vm_.context.md)|  |
| filename? | string|  |

#### Returns: void

### runInNewContext(code: string, sandbox?: [Context](../interfaces/_vm_.context.md), filename?: string): void
  
* Defined in [lib/node/node.d.ts:631](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L631)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| code | string|  |
| sandbox? | [Context](../interfaces/_vm_.context.md)|  |
| filename? | string|  |

#### Returns: void

### runInThisContext(code: string, filename?: string): void
  
* Defined in [lib/node/node.d.ts:630](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L630)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| code | string|  |
| filename? | string|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
