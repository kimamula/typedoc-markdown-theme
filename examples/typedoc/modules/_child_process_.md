# Module "child_process"


## Index

### Interfaces
* [ChildProcess](../interfaces/_child_process_.childprocess.md)

### Functions
* [exec](_child_process_.md#exec)
* [execFile](_child_process_.md#execfile)
* [execFileSync](_child_process_.md#execfilesync)
* [execSync](_child_process_.md#execsync)
* [fork](_child_process_.md#fork)
* [spawn](_child_process_.md#spawn)

## Functions

### exec(command: string, options: \{Optional customFds?: any, Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number\}, callback: (error: Error, stdout: [Buffer](../interfaces/buffer.md), stderr: [Buffer](../interfaces/buffer.md))=> void): [ChildProcess](../interfaces/_child_process_.childprocess.md)exec(command: string, callback: (error: Error, stdout: [Buffer](../interfaces/buffer.md), stderr: [Buffer](../interfaces/buffer.md))=> void): [ChildProcess](../interfaces/_child_process_.childprocess.md)
  
* Defined in [lib/node/node.d.ts:658](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L658)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| command | string|  |
| options | \{Optional customFds?: any, Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number\}|  |
| callback | (error: Error, stdout: [Buffer](../interfaces/buffer.md), stderr: [Buffer](../interfaces/buffer.md))=> void|  |

#### Returns: [ChildProcess](../interfaces/_child_process_.childprocess.md)
  
* Defined in [lib/node/node.d.ts:668](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L668)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| command | string|  |
| callback | (error: Error, stdout: [Buffer](../interfaces/buffer.md), stderr: [Buffer](../interfaces/buffer.md))=> void|  |

#### Returns: [ChildProcess](../interfaces/_child_process_.childprocess.md)

### execFile(file: string, callback?: (error: Error, stdout: [Buffer](../interfaces/buffer.md), stderr: [Buffer](../interfaces/buffer.md))=> void): [ChildProcess](../interfaces/_child_process_.childprocess.md)execFile(file: string, args?: string[], callback?: (error: Error, stdout: [Buffer](../interfaces/buffer.md), stderr: [Buffer](../interfaces/buffer.md))=> void): [ChildProcess](../interfaces/_child_process_.childprocess.md)execFile(file: string, args?: string[], options?: \{Optional customFds?: any, Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional killSignal?: string, Optional maxBuffer?: string, Optional stdio?: any, Optional timeout?: number\}, callback?: (error: Error, stdout: [Buffer](../interfaces/buffer.md), stderr: [Buffer](../interfaces/buffer.md))=> void): [ChildProcess](../interfaces/_child_process_.childprocess.md)
  
* Defined in [lib/node/node.d.ts:669](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L669)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| callback? | (error: Error, stdout: [Buffer](../interfaces/buffer.md), stderr: [Buffer](../interfaces/buffer.md))=> void|  |

#### Returns: [ChildProcess](../interfaces/_child_process_.childprocess.md)
  
* Defined in [lib/node/node.d.ts:671](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L671)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| args? | string[]|  |
| callback? | (error: Error, stdout: [Buffer](../interfaces/buffer.md), stderr: [Buffer](../interfaces/buffer.md))=> void|  |

#### Returns: [ChildProcess](../interfaces/_child_process_.childprocess.md)
  
* Defined in [lib/node/node.d.ts:673](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L673)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| args? | string[]|  |
| options? | \{Optional customFds?: any, Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional killSignal?: string, Optional maxBuffer?: string, Optional stdio?: any, Optional timeout?: number\}|  |
| callback? | (error: Error, stdout: [Buffer](../interfaces/buffer.md), stderr: [Buffer](../interfaces/buffer.md))=> void|  |

#### Returns: [ChildProcess](../interfaces/_child_process_.childprocess.md)

### execFileSync(command: string, args?: string[], options?: \{Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional gid?: number, Optional input?: string | [Buffer](../interfaces/buffer.md), Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number, Optional uid?: number\}): [ChildProcess](../interfaces/_child_process_.childprocess.md)
  
* Defined in [lib/node/node.d.ts:700](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L700)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| command | string|  |
| args? | string[]|  |
| options? | \{Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional gid?: number, Optional input?: string | [Buffer](../interfaces/buffer.md), Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number, Optional uid?: number\}|  |

#### Returns: [ChildProcess](../interfaces/_child_process_.childprocess.md)

### execSync(command: string, options?: \{Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional gid?: number, Optional input?: string | [Buffer](../interfaces/buffer.md), Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number, Optional uid?: number\}): [ChildProcess](../interfaces/_child_process_.childprocess.md)
  
* Defined in [lib/node/node.d.ts:688](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L688)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| command | string|  |
| options? | \{Optional cwd?: string, Optional encoding?: string, Optional env?: any, Optional gid?: number, Optional input?: string | [Buffer](../interfaces/buffer.md), Optional killSignal?: string, Optional maxBuffer?: number, Optional stdio?: any, Optional timeout?: number, Optional uid?: number\}|  |

#### Returns: [ChildProcess](../interfaces/_child_process_.childprocess.md)

### fork(modulePath: string, args?: string[], options?: \{Optional cwd?: string, Optional encoding?: string, Optional env?: any\}): [ChildProcess](../interfaces/_child_process_.childprocess.md)
  
* Defined in [lib/node/node.d.ts:683](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L683)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| modulePath | string|  |
| args? | string[]|  |
| options? | \{Optional cwd?: string, Optional encoding?: string, Optional env?: any\}|  |

#### Returns: [ChildProcess](../interfaces/_child_process_.childprocess.md)

### spawn(command: string, args?: string[], options?: \{Optional custom?: any, Optional cwd?: string, Optional detached?: boolean, Optional env?: any, Optional stdio?: any\}): [ChildProcess](../interfaces/_child_process_.childprocess.md)
  
* Defined in [lib/node/node.d.ts:651](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L651)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| command | string|  |
| args? | string[]|  |
| options? | \{Optional custom?: any, Optional cwd?: string, Optional detached?: boolean, Optional env?: any, Optional stdio?: any\}|  |

#### Returns: [ChildProcess](../interfaces/_child_process_.childprocess.md)


Generated using [TypeDoc](http://typedoc.io)
