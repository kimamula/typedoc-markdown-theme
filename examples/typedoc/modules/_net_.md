# Module "net"


## Index

### Interfaces
* [Server](../interfaces/_net_.server.md)
* [Socket](../interfaces/_net_.socket.md)

### Functions
* [connect](_net_.md#connect)
* [createConnection](_net_.md#createconnection)
* [createServer](_net_.md#createserver)
* [isIP](_net_.md#isip)
* [isIPv4](_net_.md#isipv4)
* [isIPv6](_net_.md#isipv6)

## Functions

### connect(options: \{Optional allowHalfOpen?: boolean\}, connectionListener?: Function): [Socket](../interfaces/_net_.socket.md)connect(port: number, host?: string, connectionListener?: Function): [Socket](../interfaces/_net_.socket.md)connect(path: string, connectionListener?: Function): [Socket](../interfaces/_net_.socket.md)
  
* Defined in [lib/node/node.d.ts:820](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L820)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | \{Optional allowHalfOpen?: boolean\}|  |
| connectionListener? | Function|  |

#### Returns: [Socket](../interfaces/_net_.socket.md)
  
* Defined in [lib/node/node.d.ts:821](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L821)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| host? | string|  |
| connectionListener? | Function|  |

#### Returns: [Socket](../interfaces/_net_.socket.md)
  
* Defined in [lib/node/node.d.ts:822](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L822)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| connectionListener? | Function|  |

#### Returns: [Socket](../interfaces/_net_.socket.md)

### createConnection(options: \{Optional allowHalfOpen?: boolean\}, connectionListener?: Function): [Socket](../interfaces/_net_.socket.md)createConnection(port: number, host?: string, connectionListener?: Function): [Socket](../interfaces/_net_.socket.md)createConnection(path: string, connectionListener?: Function): [Socket](../interfaces/_net_.socket.md)
  
* Defined in [lib/node/node.d.ts:823](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L823)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | \{Optional allowHalfOpen?: boolean\}|  |
| connectionListener? | Function|  |

#### Returns: [Socket](../interfaces/_net_.socket.md)
  
* Defined in [lib/node/node.d.ts:824](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L824)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| host? | string|  |
| connectionListener? | Function|  |

#### Returns: [Socket](../interfaces/_net_.socket.md)
  
* Defined in [lib/node/node.d.ts:825](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L825)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| connectionListener? | Function|  |

#### Returns: [Socket](../interfaces/_net_.socket.md)

### createServer(connectionListener?: (socket: [Socket](../interfaces/_net_.socket.md))=> void): [Server](../interfaces/_net_.server.md)createServer(options?: \{Optional allowHalfOpen?: boolean\}, connectionListener?: (socket: [Socket](../interfaces/_net_.socket.md))=> void): [Server](../interfaces/_net_.server.md)
  
* Defined in [lib/node/node.d.ts:818](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L818)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| connectionListener? | (socket: [Socket](../interfaces/_net_.socket.md))=> void|  |

#### Returns: [Server](../interfaces/_net_.server.md)
  
* Defined in [lib/node/node.d.ts:819](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L819)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options? | \{Optional allowHalfOpen?: boolean\}|  |
| connectionListener? | (socket: [Socket](../interfaces/_net_.socket.md))=> void|  |

#### Returns: [Server](../interfaces/_net_.server.md)

### isIP(input: string): number
  
* Defined in [lib/node/node.d.ts:826](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L826)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| input | string|  |

#### Returns: number

### isIPv4(input: string): boolean
  
* Defined in [lib/node/node.d.ts:827](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L827)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| input | string|  |

#### Returns: boolean

### isIPv6(input: string): boolean
  
* Defined in [lib/node/node.d.ts:828](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L828)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| input | string|  |

#### Returns: boolean


Generated using [TypeDoc](http://typedoc.io)
