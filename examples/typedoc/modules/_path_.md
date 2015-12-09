# Module "path"


## Index

### Interfaces
* [ParsedPath](../interfaces/_path_.parsedpath.md)

### Variables
* [delimiter](_path_.md#delimiter)
* [sep](_path_.md#sep)

### Functions
* [basename](_path_.md#basename)
* [dirname](_path_.md#dirname)
* [extname](_path_.md#extname)
* [format](_path_.md#format)
* [isAbsolute](_path_.md#isabsolute)
* [join](_path_.md#join)
* [normalize](_path_.md#normalize)
* [parse](_path_.md#parse)
* [relative](_path_.md#relative)
* [resolve](_path_.md#resolve)

## Variables

### delimiter: string

* Defined in [lib/node/node.d.ts:1036](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1036)


### sep: string

* Defined in [lib/node/node.d.ts:1035](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1035)


## Functions

### basename(p: string, ext?: string): string
  
* Defined in [lib/node/node.d.ts:1033](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1033)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |
| ext? | string|  |

#### Returns: string

### dirname(p: string): string
  
* Defined in [lib/node/node.d.ts:1032](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1032)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: string

### extname(p: string): string
  
* Defined in [lib/node/node.d.ts:1034](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1034)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: string

### format(pP: [ParsedPath](../interfaces/_path_.parsedpath.md)): string
  
* Defined in [lib/node/node.d.ts:1038](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1038)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| pP | [ParsedPath](../interfaces/_path_.parsedpath.md)|  |

#### Returns: string

### isAbsolute(p: string): boolean
  
* Defined in [lib/node/node.d.ts:1030](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1030)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: boolean

### join(...paths: any[]): string
  
* Defined in [lib/node/node.d.ts:1028](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1028)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...paths | any[]|  |

#### Returns: string

### normalize(p: string): string
  
* Defined in [lib/node/node.d.ts:1027](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1027)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: string

### parse(p: string): [ParsedPath](../interfaces/_path_.parsedpath.md)
  
* Defined in [lib/node/node.d.ts:1037](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1037)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| p | string|  |

#### Returns: [ParsedPath](../interfaces/_path_.parsedpath.md)

### relative(from: string, to: string): string
  
* Defined in [lib/node/node.d.ts:1031](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1031)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| from | string|  |
| to | string|  |

#### Returns: string

### resolve(...pathSegments: any[]): string
  
* Defined in [lib/node/node.d.ts:1029](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1029)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...pathSegments | any[]|  |

#### Returns: string


Generated using [TypeDoc](http://typedoc.io)
