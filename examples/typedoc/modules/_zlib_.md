# Module "zlib"


## Index

### Interfaces
* [Deflate](../interfaces/_zlib_.deflate.md)
* [DeflateRaw](../interfaces/_zlib_.deflateraw.md)
* [Gunzip](../interfaces/_zlib_.gunzip.md)
* [Gzip](../interfaces/_zlib_.gzip.md)
* [Inflate](../interfaces/_zlib_.inflate.md)
* [InflateRaw](../interfaces/_zlib_.inflateraw.md)
* [Unzip](../interfaces/_zlib_.unzip.md)
* [ZlibOptions](../interfaces/_zlib_.zliboptions.md)

### Variables
* [Z_ASCII](_zlib_.md#z_ascii)
* [Z_BEST_COMPRESSION](_zlib_.md#z_best_compression)
* [Z_BEST_SPEED](_zlib_.md#z_best_speed)
* [Z_BINARY](_zlib_.md#z_binary)
* [Z_BLOCK](_zlib_.md#z_block)
* [Z_BUF_ERROR](_zlib_.md#z_buf_error)
* [Z_DATA_ERROR](_zlib_.md#z_data_error)
* [Z_DEFAULT_COMPRESSION](_zlib_.md#z_default_compression)
* [Z_DEFAULT_STRATEGY](_zlib_.md#z_default_strategy)
* [Z_DEFLATED](_zlib_.md#z_deflated)
* [Z_ERRNO](_zlib_.md#z_errno)
* [Z_FILTERED](_zlib_.md#z_filtered)
* [Z_FINISH](_zlib_.md#z_finish)
* [Z_FIXED](_zlib_.md#z_fixed)
* [Z_FULL_FLUSH](_zlib_.md#z_full_flush)
* [Z_HUFFMAN_ONLY](_zlib_.md#z_huffman_only)
* [Z_MEM_ERROR](_zlib_.md#z_mem_error)
* [Z_NEED_DICT](_zlib_.md#z_need_dict)
* [Z_NO_COMPRESSION](_zlib_.md#z_no_compression)
* [Z_NO_FLUSH](_zlib_.md#z_no_flush)
* [Z_NULL](_zlib_.md#z_null)
* [Z_OK](_zlib_.md#z_ok)
* [Z_PARTIAL_FLUSH](_zlib_.md#z_partial_flush)
* [Z_RLE](_zlib_.md#z_rle)
* [Z_STREAM_END](_zlib_.md#z_stream_end)
* [Z_STREAM_ERROR](_zlib_.md#z_stream_error)
* [Z_SYNC_FLUSH](_zlib_.md#z_sync_flush)
* [Z_TEXT](_zlib_.md#z_text)
* [Z_TREES](_zlib_.md#z_trees)
* [Z_UNKNOWN](_zlib_.md#z_unknown)
* [Z_VERSION_ERROR](_zlib_.md#z_version_error)

### Functions
* [createDeflate](_zlib_.md#createdeflate)
* [createDeflateRaw](_zlib_.md#createdeflateraw)
* [createGunzip](_zlib_.md#creategunzip)
* [createGzip](_zlib_.md#creategzip)
* [createInflate](_zlib_.md#createinflate)
* [createInflateRaw](_zlib_.md#createinflateraw)
* [createUnzip](_zlib_.md#createunzip)
* [deflate](_zlib_.md#deflate-1)
* [deflateRaw](_zlib_.md#deflateraw-1)
* [gunzip](_zlib_.md#gunzip-1)
* [gzip](_zlib_.md#gzip-1)
* [inflate](_zlib_.md#inflate-1)
* [inflateRaw](_zlib_.md#inflateraw-1)
* [unzip](_zlib_.md#unzip-1)

## Variables

### Z_ASCII: number

* Defined in [lib/node/node.d.ts:496](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L496)


### Z_BEST_COMPRESSION: number

* Defined in [lib/node/node.d.ts:487](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L487)


### Z_BEST_SPEED: number

* Defined in [lib/node/node.d.ts:486](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L486)


### Z_BINARY: number

* Defined in [lib/node/node.d.ts:494](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L494)


### Z_BLOCK: number

* Defined in [lib/node/node.d.ts:474](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L474)


### Z_BUF_ERROR: number

* Defined in [lib/node/node.d.ts:483](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L483)


### Z_DATA_ERROR: number

* Defined in [lib/node/node.d.ts:481](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L481)


### Z_DEFAULT_COMPRESSION: number

* Defined in [lib/node/node.d.ts:488](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L488)


### Z_DEFAULT_STRATEGY: number

* Defined in [lib/node/node.d.ts:493](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L493)


### Z_DEFLATED: number

* Defined in [lib/node/node.d.ts:498](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L498)


### Z_ERRNO: number

* Defined in [lib/node/node.d.ts:479](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L479)


### Z_FILTERED: number

* Defined in [lib/node/node.d.ts:489](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L489)


### Z_FINISH: number

* Defined in [lib/node/node.d.ts:473](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L473)


### Z_FIXED: number

* Defined in [lib/node/node.d.ts:492](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L492)


### Z_FULL_FLUSH: number

* Defined in [lib/node/node.d.ts:472](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L472)


### Z_HUFFMAN_ONLY: number

* Defined in [lib/node/node.d.ts:490](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L490)


### Z_MEM_ERROR: number

* Defined in [lib/node/node.d.ts:482](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L482)


### Z_NEED_DICT: number

* Defined in [lib/node/node.d.ts:478](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L478)


### Z_NO_COMPRESSION: number

* Defined in [lib/node/node.d.ts:485](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L485)


### Z_NO_FLUSH: number

* Defined in [lib/node/node.d.ts:469](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L469)


### Z_NULL: number

* Defined in [lib/node/node.d.ts:499](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L499)


### Z_OK: number

* Defined in [lib/node/node.d.ts:476](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L476)


### Z_PARTIAL_FLUSH: number

* Defined in [lib/node/node.d.ts:470](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L470)


### Z_RLE: number

* Defined in [lib/node/node.d.ts:491](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L491)


### Z_STREAM_END: number

* Defined in [lib/node/node.d.ts:477](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L477)


### Z_STREAM_ERROR: number

* Defined in [lib/node/node.d.ts:480](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L480)


### Z_SYNC_FLUSH: number

* Defined in [lib/node/node.d.ts:471](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L471)


### Z_TEXT: number

* Defined in [lib/node/node.d.ts:495](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L495)


### Z_TREES: number

* Defined in [lib/node/node.d.ts:475](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L475)


### Z_UNKNOWN: number

* Defined in [lib/node/node.d.ts:497](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L497)


### Z_VERSION_ERROR: number

* Defined in [lib/node/node.d.ts:484](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L484)


## Functions

### createDeflate(options?: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): [Deflate](../interfaces/_zlib_.deflate.md)
  
* Defined in [lib/node/node.d.ts:454](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L454)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options? | [ZlibOptions](../interfaces/_zlib_.zliboptions.md)|  |

#### Returns: [Deflate](../interfaces/_zlib_.deflate.md)

### createDeflateRaw(options?: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): [DeflateRaw](../interfaces/_zlib_.deflateraw.md)
  
* Defined in [lib/node/node.d.ts:456](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L456)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options? | [ZlibOptions](../interfaces/_zlib_.zliboptions.md)|  |

#### Returns: [DeflateRaw](../interfaces/_zlib_.deflateraw.md)

### createGunzip(options?: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): [Gunzip](../interfaces/_zlib_.gunzip.md)
  
* Defined in [lib/node/node.d.ts:453](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L453)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options? | [ZlibOptions](../interfaces/_zlib_.zliboptions.md)|  |

#### Returns: [Gunzip](../interfaces/_zlib_.gunzip.md)

### createGzip(options?: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): [Gzip](../interfaces/_zlib_.gzip.md)
  
* Defined in [lib/node/node.d.ts:452](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L452)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options? | [ZlibOptions](../interfaces/_zlib_.zliboptions.md)|  |

#### Returns: [Gzip](../interfaces/_zlib_.gzip.md)

### createInflate(options?: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): [Inflate](../interfaces/_zlib_.inflate.md)
  
* Defined in [lib/node/node.d.ts:455](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L455)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options? | [ZlibOptions](../interfaces/_zlib_.zliboptions.md)|  |

#### Returns: [Inflate](../interfaces/_zlib_.inflate.md)

### createInflateRaw(options?: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): [InflateRaw](../interfaces/_zlib_.inflateraw.md)
  
* Defined in [lib/node/node.d.ts:457](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L457)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options? | [ZlibOptions](../interfaces/_zlib_.zliboptions.md)|  |

#### Returns: [InflateRaw](../interfaces/_zlib_.inflateraw.md)

### createUnzip(options?: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): [Unzip](../interfaces/_zlib_.unzip.md)
  
* Defined in [lib/node/node.d.ts:458](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L458)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| options? | [ZlibOptions](../interfaces/_zlib_.zliboptions.md)|  |

#### Returns: [Unzip](../interfaces/_zlib_.unzip.md)

### deflate(buf: [Buffer](../interfaces/buffer.md), callback: (error: Error, result: any)=> void): void
  
* Defined in [lib/node/node.d.ts:460](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L460)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buf | [Buffer](../interfaces/buffer.md)|  |
| callback | (error: Error, result: any)=> void|  |

#### Returns: void

### deflateRaw(buf: [Buffer](../interfaces/buffer.md), callback: (error: Error, result: any)=> void): void
  
* Defined in [lib/node/node.d.ts:461](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L461)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buf | [Buffer](../interfaces/buffer.md)|  |
| callback | (error: Error, result: any)=> void|  |

#### Returns: void

### gunzip(buf: [Buffer](../interfaces/buffer.md), callback: (error: Error, result: any)=> void): void
  
* Defined in [lib/node/node.d.ts:463](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L463)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buf | [Buffer](../interfaces/buffer.md)|  |
| callback | (error: Error, result: any)=> void|  |

#### Returns: void

### gzip(buf: [Buffer](../interfaces/buffer.md), callback: (error: Error, result: any)=> void): void
  
* Defined in [lib/node/node.d.ts:462](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L462)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buf | [Buffer](../interfaces/buffer.md)|  |
| callback | (error: Error, result: any)=> void|  |

#### Returns: void

### inflate(buf: [Buffer](../interfaces/buffer.md), callback: (error: Error, result: any)=> void): void
  
* Defined in [lib/node/node.d.ts:464](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L464)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buf | [Buffer](../interfaces/buffer.md)|  |
| callback | (error: Error, result: any)=> void|  |

#### Returns: void

### inflateRaw(buf: [Buffer](../interfaces/buffer.md), callback: (error: Error, result: any)=> void): void
  
* Defined in [lib/node/node.d.ts:465](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L465)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buf | [Buffer](../interfaces/buffer.md)|  |
| callback | (error: Error, result: any)=> void|  |

#### Returns: void

### unzip(buf: [Buffer](../interfaces/buffer.md), callback: (error: Error, result: any)=> void): void
  
* Defined in [lib/node/node.d.ts:466](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L466)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| buf | [Buffer](../interfaces/buffer.md)|  |
| callback | (error: Error, result: any)=> void|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
