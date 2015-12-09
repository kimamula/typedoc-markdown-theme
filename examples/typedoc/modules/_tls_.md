# Module "tls"


## Index

### Interfaces
* [ClearTextStream](../interfaces/_tls_.cleartextstream.md)
* [ConnectionOptions](../interfaces/_tls_.connectionoptions.md)
* [SecurePair](../interfaces/_tls_.securepair.md)
* [Server](../interfaces/_tls_.server.md)
* [TlsOptions](../interfaces/_tls_.tlsoptions.md)

### Variables
* [CLIENT_RENEG_LIMIT](_tls_.md#client_reneg_limit)
* [CLIENT_RENEG_WINDOW](_tls_.md#client_reneg_window)

### Functions
* [connect](_tls_.md#connect)
* [createSecurePair](_tls_.md#createsecurepair)
* [createServer](_tls_.md#createserver)

## Variables

### CLIENT_RENEG_LIMIT: number

* Defined in [lib/node/node.d.ts:1056](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1056)


### CLIENT_RENEG_WINDOW: number

* Defined in [lib/node/node.d.ts:1057](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1057)


## Functions

### connect(options: [TlsOptions](../interfaces/_tls_.tlsoptions.md), secureConnectionListener?: ()=> void): [ClearTextStream](../interfaces/_tls_.cleartextstream.md)connect(port: number, host?: string, options?: [ConnectionOptions](../interfaces/_tls_.connectionoptions.md), secureConnectListener?: ()=> void): [ClearTextStream](../interfaces/_tls_.cleartextstream.md)connect(port: number, options?: [ConnectionOptions](../interfaces/_tls_.connectionoptions.md), secureConnectListener?: ()=> void): [ClearTextStream](../interfaces/_tls_.cleartextstream.md)
  
* Defined in [lib/node/node.d.ts:1129](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1129)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [TlsOptions](../interfaces/_tls_.tlsoptions.md)|  |
| secureConnectionListener? | ()=> void|  |

#### Returns: [ClearTextStream](../interfaces/_tls_.cleartextstream.md)
  
* Defined in [lib/node/node.d.ts:1130](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1130)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| host? | string|  |
| options? | [ConnectionOptions](../interfaces/_tls_.connectionoptions.md)|  |
| secureConnectListener? | ()=> void|  |

#### Returns: [ClearTextStream](../interfaces/_tls_.cleartextstream.md)
  
* Defined in [lib/node/node.d.ts:1131](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1131)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port | number|  |
| options? | [ConnectionOptions](../interfaces/_tls_.connectionoptions.md)|  |
| secureConnectListener? | ()=> void|  |

#### Returns: [ClearTextStream](../interfaces/_tls_.cleartextstream.md)

### createSecurePair(credentials?: [Credentials](../interfaces/_crypto_.credentials.md), isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean): [SecurePair](../interfaces/_tls_.securepair.md)
  
* Defined in [lib/node/node.d.ts:1132](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1132)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| credentials? | [Credentials](../interfaces/_crypto_.credentials.md)|  |
| isServer? | boolean|  |
| requestCert? | boolean|  |
| rejectUnauthorized? | boolean|  |

#### Returns: [SecurePair](../interfaces/_tls_.securepair.md)

### createServer(options: [TlsOptions](../interfaces/_tls_.tlsoptions.md), secureConnectionListener?: (cleartextStream: [ClearTextStream](../interfaces/_tls_.cleartextstream.md))=> void): [Server](../interfaces/_tls_.server.md)
  
* Defined in [lib/node/node.d.ts:1128](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1128)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [TlsOptions](../interfaces/_tls_.tlsoptions.md)|  |
| secureConnectionListener? | (cleartextStream: [ClearTextStream](../interfaces/_tls_.cleartextstream.md))=> void|  |

#### Returns: [Server](../interfaces/_tls_.server.md)


Generated using [TypeDoc](http://typedoc.io)
