# Interface Process


### Extends
* [EventEmitter](nodejs.eventemitter.md)

## Index

### Properties
* [arch](nodejs.process.md#arch)
* [argv](nodejs.process.md#argv)
* [config](nodejs.process.md#config)
* [env](nodejs.process.md#env)
* [execPath](nodejs.process.md#execpath)
* [pid](nodejs.process.md#pid)
* [platform](nodejs.process.md#platform)
* [stderr](nodejs.process.md#stderr)
* [stdin](nodejs.process.md#stdin)
* [stdout](nodejs.process.md#stdout)
* [title](nodejs.process.md#title)
* [version](nodejs.process.md#version)
* [versions](nodejs.process.md#versions)

### Methods
* [abort](nodejs.process.md#abort)
* [addListener](nodejs.process.md#addlistener)
* [chdir](nodejs.process.md#chdir)
* [cwd](nodejs.process.md#cwd)
* [emit](nodejs.process.md#emit)
* [exit](nodejs.process.md#exit)
* [getgid](nodejs.process.md#getgid)
* [getuid](nodejs.process.md#getuid)
* [hrtime](nodejs.process.md#hrtime)
* [kill](nodejs.process.md#kill)
* [listeners](nodejs.process.md#listeners)
* [memoryUsage](nodejs.process.md#memoryusage)
* [nextTick](nodejs.process.md#nexttick)
* [on](nodejs.process.md#on)
* [once](nodejs.process.md#once)
* [removeAllListeners](nodejs.process.md#removealllisteners)
* [removeListener](nodejs.process.md#removelistener)
* [send](nodejs.process.md#send)
* [setMaxListeners](nodejs.process.md#setmaxlisteners)
* [setgid](nodejs.process.md#setgid)
* [setuid](nodejs.process.md#setuid)
* [umask](nodejs.process.md#umask)
* [uptime](nodejs.process.md#uptime)

## Properties

### arch: string

* Defined in [lib/node/node.d.ts:181](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L181)


### argv: string[]

* Defined in [lib/node/node.d.ts:129](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L129)


### config: \{target_defaults: \{cflags: any[], default_configuration: string, defines: string[], include_dirs: string[], libraries: string[]\}, variables: \{clang: number, host_arch: string, node_install_npm: boolean, node_install_waf: boolean, node_prefix: string, node_shared_openssl: boolean, node_shared_v8: boolean, node_shared_zlib: boolean, node_use_dtrace: boolean, node_use_etw: boolean, node_use_openssl: boolean, target_arch: string, v8_no_strict_aliasing: number, v8_use_snapshot: boolean, visibility: string\}\}

* Defined in [lib/node/node.d.ts:152](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L152)


### env: any

* Defined in [lib/node/node.d.ts:134](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L134)


### execPath: string

* Defined in [lib/node/node.d.ts:130](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L130)


### pid: number

* Defined in [lib/node/node.d.ts:179](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L179)


### platform: string

* Defined in [lib/node/node.d.ts:182](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L182)


### stderr: [WritableStream](nodejs.writablestream.md)

* Defined in [lib/node/node.d.ts:127](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L127)


### stdin: [ReadableStream](nodejs.readablestream.md)

* Defined in [lib/node/node.d.ts:128](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L128)


### stdout: [WritableStream](nodejs.writablestream.md)

* Defined in [lib/node/node.d.ts:126](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L126)


### title: string

* Defined in [lib/node/node.d.ts:180](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L180)


### version: string

* Defined in [lib/node/node.d.ts:142](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L142)


### versions: \{ares: string, http_parser: string, node: string, openssl: string, uv: string, v8: string, zlib: string\}

* Defined in [lib/node/node.d.ts:143](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L143)


## Methods

### abort(): void
  
* Defined in [lib/node/node.d.ts:131](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L131)

#### Returns: void

### addListener(event: string, listener: Function): [EventEmitter](nodejs.eventemitter.md)
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[addListener](nodejs.eventemitter.md#addlistener)
* Defined in [lib/node/node.d.ts:89](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L89)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| listener | Function|  |

#### Returns: [EventEmitter](nodejs.eventemitter.md)

### chdir(directory: string): void
  
* Defined in [lib/node/node.d.ts:132](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L132)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| directory | string|  |

#### Returns: void

### cwd(): string
  
* Defined in [lib/node/node.d.ts:133](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L133)

#### Returns: string

### emit(event: string, ...args: any[]): boolean
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[emit](nodejs.eventemitter.md#emit)
* Defined in [lib/node/node.d.ts:96](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L96)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |
| ...args | any[]|  |

#### Returns: boolean

### exit(code?: number): void
  
* Defined in [lib/node/node.d.ts:135](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L135)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| code? | number|  |

#### Returns: void

### getgid(): number
  
* Defined in [lib/node/node.d.ts:136](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L136)

#### Returns: number

### getuid(): number
  
* Defined in [lib/node/node.d.ts:139](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L139)

#### Returns: number

### hrtime(time?: number[]): number[]
  
* Defined in [lib/node/node.d.ts:187](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L187)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| time? | number[]|  |

#### Returns: number[]

### kill(pid: number, signal?: string): void
  
* Defined in [lib/node/node.d.ts:178](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L178)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| pid | number|  |
| signal? | string|  |

#### Returns: void

### listeners(event: string): Function[]
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[listeners](nodejs.eventemitter.md#listeners)
* Defined in [lib/node/node.d.ts:95](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L95)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string|  |

#### Returns: Function[]

### memoryUsage(): \{heapTotal: number, heapUsed: number, rss: number\}
  
* Defined in [lib/node/node.d.ts:183](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L183)

#### Returns: \{heapTotal: number, heapUsed: number, rss: number\}

### nextTick(callback: Function): void
  
* Defined in [lib/node/node.d.ts:184](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L184)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | Function|  |

#### Returns: void

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

### Optional send(message: any, sendHandle?: any): void
  
* Defined in [lib/node/node.d.ts:190](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L190)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| message | any|  |
| sendHandle? | any|  |

#### Returns: void

### setMaxListeners(n: number): void
  
* Inherited from [EventEmitter](nodejs.eventemitter.md).[setMaxListeners](nodejs.eventemitter.md#setmaxlisteners)
* Defined in [lib/node/node.d.ts:94](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L94)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| n | number|  |

#### Returns: void

### setgid(id: number): voidsetgid(id: string): void
  
* Defined in [lib/node/node.d.ts:137](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L137)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| id | number|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:138](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L138)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| id | string|  |

#### Returns: void

### setuid(id: number): voidsetuid(id: string): void
  
* Defined in [lib/node/node.d.ts:140](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L140)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| id | number|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:141](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L141)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| id | string|  |

#### Returns: void

### umask(mask?: number): number
  
* Defined in [lib/node/node.d.ts:185](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L185)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| mask? | number|  |

#### Returns: number

### uptime(): number
  
* Defined in [lib/node/node.d.ts:186](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L186)

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
