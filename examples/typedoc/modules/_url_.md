# Module "url"


## Index

### Interfaces
* [Url](../interfaces/_url_.url.md)
* [UrlOptions](../interfaces/_url_.urloptions.md)

### Functions
* [format](_url_.md#format)
* [parse](_url_.md#parse)
* [resolve](_url_.md#resolve)

## Functions

### format(url: [UrlOptions](../interfaces/_url_.urloptions.md)): string
  
* Defined in [lib/node/node.d.ts:744](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L744)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| url | [UrlOptions](../interfaces/_url_.urloptions.md)|  |

#### Returns: string

### parse(urlStr: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): [Url](../interfaces/_url_.url.md)
  
* Defined in [lib/node/node.d.ts:743](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L743)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| urlStr | string|  |
| parseQueryString? | boolean|  |
| slashesDenoteHost? | boolean|  |

#### Returns: [Url](../interfaces/_url_.url.md)

### resolve(from: string, to: string): string
  
* Defined in [lib/node/node.d.ts:745](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L745)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| from | string|  |
| to | string|  |

#### Returns: string


Generated using [TypeDoc](http://typedoc.io)
