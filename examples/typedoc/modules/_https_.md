# Module "https"


## Index

### Interfaces
* [Agent](../interfaces/_https_.agent.md)
* [RequestOptions](../interfaces/_https_.requestoptions.md)
* [Server](../interfaces/_https_.server.md)
* [ServerOptions](../interfaces/_https_.serveroptions.md)

### Variables
* [globalAgent](_https_.md#globalagent)

### Functions
* [createServer](_https_.md#createserver)
* [get](_https_.md#get)
* [request](_https_.md#request)

## Variables

### globalAgent: [Agent](../interfaces/_https_.agent.md)

* Defined in [lib/node/node.d.ts:568](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L568)


## Functions

### createServer(options: [ServerOptions](../interfaces/_https_.serveroptions.md), requestListener?: Function): [Server](../interfaces/_https_.server.md)
  
* Defined in [lib/node/node.d.ts:565](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L565)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [ServerOptions](../interfaces/_https_.serveroptions.md)|  |
| requestListener? | Function|  |

#### Returns: [Server](../interfaces/_https_.server.md)

### get(options: [RequestOptions](../interfaces/_https_.requestoptions.md), callback?: (res: [ClientResponse](../interfaces/_http_.clientresponse.md))=> void): [ClientRequest](../interfaces/_http_.clientrequest.md)
  
* Defined in [lib/node/node.d.ts:567](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L567)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [RequestOptions](../interfaces/_https_.requestoptions.md)|  |
| callback? | (res: [ClientResponse](../interfaces/_http_.clientresponse.md))=> void|  |

#### Returns: [ClientRequest](../interfaces/_http_.clientrequest.md)

### request(options: [RequestOptions](../interfaces/_https_.requestoptions.md), callback?: (res: [ClientResponse](../interfaces/_http_.clientresponse.md))=> void): [ClientRequest](../interfaces/_http_.clientrequest.md)
  
* Defined in [lib/node/node.d.ts:566](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L566)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | [RequestOptions](../interfaces/_https_.requestoptions.md)|  |
| callback? | (res: [ClientResponse](../interfaces/_http_.clientresponse.md))=> void|  |

#### Returns: [ClientRequest](../interfaces/_http_.clientrequest.md)


Generated using [TypeDoc](http://typedoc.io)
