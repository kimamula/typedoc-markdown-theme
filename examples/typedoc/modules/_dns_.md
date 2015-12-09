# Module "dns"


## Index

### Functions
* [lookup](_dns_.md#lookup)
* [resolve](_dns_.md#resolve)
* [resolve4](_dns_.md#resolve4)
* [resolve6](_dns_.md#resolve6)
* [resolveCname](_dns_.md#resolvecname)
* [resolveMx](_dns_.md#resolvemx)
* [resolveNs](_dns_.md#resolvens)
* [resolveSrv](_dns_.md#resolvesrv)
* [resolveTxt](_dns_.md#resolvetxt)
* [reverse](_dns_.md#reverse)

## Functions

### lookup(domain: string, family: number, callback: (err: Error, address: string, family: number)=> void): stringlookup(domain: string, callback: (err: Error, address: string, family: number)=> void): string
  
* Defined in [lib/node/node.d.ts:749](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L749)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| family | number|  |
| callback | (err: Error, address: string, family: number)=> void|  |

#### Returns: string
  
* Defined in [lib/node/node.d.ts:750](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L750)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, address: string, family: number)=> void|  |

#### Returns: string

### resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[])=> void): string[]resolve(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in [lib/node/node.d.ts:751](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L751)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| rrtype | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]
  
* Defined in [lib/node/node.d.ts:752](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L752)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### resolve4(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in [lib/node/node.d.ts:753](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L753)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### resolve6(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in [lib/node/node.d.ts:754](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L754)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### resolveCname(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in [lib/node/node.d.ts:759](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L759)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### resolveMx(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in [lib/node/node.d.ts:755](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L755)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### resolveNs(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in [lib/node/node.d.ts:758](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L758)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### resolveSrv(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in [lib/node/node.d.ts:757](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L757)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### resolveTxt(domain: string, callback: (err: Error, addresses: string[])=> void): string[]
  
* Defined in [lib/node/node.d.ts:756](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L756)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| domain | string|  |
| callback | (err: Error, addresses: string[])=> void|  |

#### Returns: string[]

### reverse(ip: string, callback: (err: Error, domains: string[])=> void): string[]
  
* Defined in [lib/node/node.d.ts:760](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L760)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ip | string|  |
| callback | (err: Error, domains: string[])=> void|  |

#### Returns: string[]


Generated using [TypeDoc](http://typedoc.io)
