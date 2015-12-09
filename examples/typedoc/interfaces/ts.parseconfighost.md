# Interface ParseConfigHost


### Extends
* [ModuleResolutionHost](ts.moduleresolutionhost.md)

## Index

### Methods
* [fileExists](ts.parseconfighost.md#fileexists)
* [readDirectory](ts.parseconfighost.md#readdirectory)
* [readFile](ts.parseconfighost.md#readfile)

## Methods

### fileExists(fileName: string): boolean
  
* Inherited from [ModuleResolutionHost](ts.moduleresolutionhost.md).[fileExists](ts.moduleresolutionhost.md#fileexists)
* Defined in [lib/typescript/tsc.d.ts:1681](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1681)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |

#### Returns: boolean

### readDirectory(rootDir: string, extension: string, exclude: string[]): string[]
  
* Defined in [lib/typescript/tsc.d.ts:957](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L957)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| rootDir | string|  |
| extension | string|  |
| exclude | string[]|  |

#### Returns: string[]

### readFile(fileName: string): string
  
* Inherited from [ModuleResolutionHost](ts.moduleresolutionhost.md).[readFile](ts.moduleresolutionhost.md#readfile)
* Defined in [lib/typescript/tsc.d.ts:1682](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L1682)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string|  |

#### Returns: string


Generated using [TypeDoc](http://typedoc.io)
