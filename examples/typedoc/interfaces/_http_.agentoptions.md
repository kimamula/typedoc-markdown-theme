# Interface AgentOptions


## Index

### Properties
* [keepAlive](_http_.agentoptions.md#keepalive)
* [keepAliveMsecs](_http_.agentoptions.md#keepalivemsecs)
* [maxFreeSockets](_http_.agentoptions.md#maxfreesockets)
* [maxSockets](_http_.agentoptions.md#maxsockets)

## Properties

### Optional keepAlive: boolean
Keep sockets around in a pool to be used by other requests in the future. Default = false
* Defined in [lib/node/node.d.ts:357](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L357)


### Optional keepAliveMsecs: number
When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.Only relevant if keepAlive is set to true.
* Defined in [lib/node/node.d.ts:362](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L362)


### Optional maxFreeSockets: number
Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.
* Defined in [lib/node/node.d.ts:370](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L370)


### Optional maxSockets: number
Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity
* Defined in [lib/node/node.d.ts:366](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L366)



Generated using [TypeDoc](http://typedoc.io)
