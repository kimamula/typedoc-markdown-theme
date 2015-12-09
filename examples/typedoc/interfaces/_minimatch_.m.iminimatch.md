# Interface IMinimatch


## Index

### Methods
* [braceExpand](_minimatch_.m.iminimatch.md#braceexpand)
* [debug](_minimatch_.m.iminimatch.md#debug)
* [make](_minimatch_.m.iminimatch.md#make)
* [makeRe](_minimatch_.m.iminimatch.md#makere)
* [match](_minimatch_.m.iminimatch.md#match)
* [matchOne](_minimatch_.m.iminimatch.md#matchone)
* [parse](_minimatch_.m.iminimatch.md#parse)
* [parseNegate](_minimatch_.m.iminimatch.md#parsenegate)

## Methods

### braceExpand(pattern: string, options: [IOptions](_minimatch_.m.ioptions.md)): void
  
* Defined in [lib/minimatch/minimatch.d.ts:38](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/minimatch/minimatch.d.ts#L38)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| pattern | string|  |
| options | [IOptions](_minimatch_.m.ioptions.md)|  |

#### Returns: void

### debug(): void
  
* Defined in [lib/minimatch/minimatch.d.ts:35](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/minimatch/minimatch.d.ts#L35)

#### Returns: void

### make(): void
  
* Defined in [lib/minimatch/minimatch.d.ts:36](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/minimatch/minimatch.d.ts#L36)

#### Returns: void

### makeRe(): RegExp
  
* Defined in [lib/minimatch/minimatch.d.ts:40](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/minimatch/minimatch.d.ts#L40)

#### Returns: RegExp

### match(file: string): boolean
  
* Defined in [lib/minimatch/minimatch.d.ts:41](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/minimatch/minimatch.d.ts#L41)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |

#### Returns: boolean

### matchOne(files: string[], pattern: string[], partial: any): boolean
  
* Defined in [lib/minimatch/minimatch.d.ts:42](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/minimatch/minimatch.d.ts#L42)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| files | string[]|  |
| pattern | string[]|  |
| partial | any|  |

#### Returns: boolean

### parse(pattern: string, isSub?: boolean): void
  
* Defined in [lib/minimatch/minimatch.d.ts:39](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/minimatch/minimatch.d.ts#L39)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| pattern | string|  |
| isSub? | boolean|  |

#### Returns: void

### parseNegate(): void
  
* Defined in [lib/minimatch/minimatch.d.ts:37](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/minimatch/minimatch.d.ts#L37)

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
