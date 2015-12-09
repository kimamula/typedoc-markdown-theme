# Interface FileMap<T>


### Type parameters

* #### T

## Index

### Methods
* [clear](ts.filemap.md#clear)
* [contains](ts.filemap.md#contains)
* [forEachValue](ts.filemap.md#foreachvalue)
* [get](ts.filemap.md#get)
* [remove](ts.filemap.md#remove)
* [set](ts.filemap.md#set)

## Methods

### clear(): void
  
* Defined in [lib/typescript/tsc.d.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L11)

#### Returns: void

### contains(fileName: string): boolean
  
* Defined in [lib/typescript/tsc.d.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L8)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |

#### Returns: boolean

### forEachValue(f: (v: T)=> void): void
  
* Defined in [lib/typescript/tsc.d.ts:10](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L10)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| f | (v: T)=> void|  |

#### Returns: void

### get(fileName: string): T
  
* Defined in [lib/typescript/tsc.d.ts:6](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L6)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |

#### Returns: T

### remove(fileName: string): void
  
* Defined in [lib/typescript/tsc.d.ts:9](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L9)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |

#### Returns: void

### set(fileName: string, value: T): void
  
* Defined in [lib/typescript/tsc.d.ts:7](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L7)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |
| value | T|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
