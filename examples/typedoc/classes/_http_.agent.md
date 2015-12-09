# Class Agent


## Index

### Constructors
* [constructor](_http_.agent.md#constructor)

### Properties
* [maxSockets](_http_.agent.md#maxsockets)
* [requests](_http_.agent.md#requests)
* [sockets](_http_.agent.md#sockets)

### Methods
* [destroy](_http_.agent.md#destroy)

## Constructors

### new Agent(opts?: [AgentOptions](../interfaces/_http_.agentoptions.md)): [Agent](_http_.agent.md)
  
* Defined in [lib/node/node.d.ts:376](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L376)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| opts? | [AgentOptions](../interfaces/_http_.agentoptions.md)|  |

#### Returns: [Agent](_http_.agent.md)

## Properties

### maxSockets: number

* Defined in [lib/node/node.d.ts:374](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L374)


### requests: any

* Defined in [lib/node/node.d.ts:376](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L376)


### sockets: any

* Defined in [lib/node/node.d.ts:375](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L375)


## Methods

### destroy(): void
Destroy any sockets that are currently in use by the agent.It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,sockets may hang open for quite a long time before the server terminates them.  
* Defined in [lib/node/node.d.ts:386](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L386)

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
