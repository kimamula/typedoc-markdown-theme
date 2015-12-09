# Module "http"


## Index

### Classes
* [Agent](../classes/_http_.agent.md)

### Interfaces
* [AgentOptions](../interfaces/_http_.agentoptions.md)
* [ClientRequest](../interfaces/_http_.clientrequest.md)
* [ClientResponse](../interfaces/_http_.clientresponse.md)
* [Server](../interfaces/_http_.server.md)
* [ServerRequest](../interfaces/_http_.serverrequest.md)
* [ServerResponse](../interfaces/_http_.serverresponse.md)

### Variables
* [STATUS_CODES](_http_.md#status_codes)
* [globalAgent](_http_.md#globalagent)

### Functions
* [createClient](_http_.md#createclient)
* [createServer](_http_.md#createserver)
* [get](_http_.md#get)
* [request](_http_.md#request)

## Variables

### STATUS_CODES: [errorCode: string]: string

* Defined in [lib/node/node.d.ts:389](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L389)


### globalAgent: [Agent](../classes/_http_.agent.md)

* Defined in [lib/node/node.d.ts:397](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L397)


## Functions

### createClient(port?: number, host?: string): any
  
* Defined in [lib/node/node.d.ts:394](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L394)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| port? | number|  |
| host? | string|  |

#### Returns: any

### createServer(requestListener?: (request: [ServerRequest](../interfaces/_http_.serverrequest.md), response: [ServerResponse](../interfaces/_http_.serverresponse.md))=> void): [Server](../interfaces/_http_.server.md)
  
* Defined in [lib/node/node.d.ts:393](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L393)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| requestListener? | (request: [ServerRequest](../interfaces/_http_.serverrequest.md), response: [ServerResponse](../interfaces/_http_.serverresponse.md))=> void|  |

#### Returns: [Server](../interfaces/_http_.server.md)

### get(options: any, callback?: Function): [ClientRequest](../interfaces/_http_.clientrequest.md)
  
* Defined in [lib/node/node.d.ts:396](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L396)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | any|  |
| callback? | Function|  |

#### Returns: [ClientRequest](../interfaces/_http_.clientrequest.md)

### request(options: any, callback?: Function): [ClientRequest](../interfaces/_http_.clientrequest.md)
  
* Defined in [lib/node/node.d.ts:395](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L395)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options | any|  |
| callback? | Function|  |

#### Returns: [ClientRequest](../interfaces/_http_.clientrequest.md)


Generated using [TypeDoc](http://typedoc.io)
