# Class BasePath
Helper class that determines the common base path of a set of files.In the first step all files must be passed to [[add]]. Afterwards [[trim]]can be used to retrieve the shortest path relative to the determined base path.

## Index

### Properties
* [basePaths](td.converter.basepath.md#basepaths)

### Methods
* [add](td.converter.basepath.md#add)
* [reset](td.converter.basepath.md#reset)
* [trim](td.converter.basepath.md#trim)
* [normalize](td.converter.basepath.md#normalize)

## Properties

### Private basePaths: string[]
List of known base paths.
* Defined in [td/converter/BasePath.ts:14](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/BasePath.ts#L14)


## Methods

### add(fileName: string): void
Add the given file path to this set of base paths.  
* Defined in [td/converter/BasePath.ts:22](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/BasePath.ts#L22)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string| The absolute filename that should be added to the base path. |

#### Returns: void

### reset(): void
Reset this instance, ignore all paths already passed to [[add]].  
* Defined in [td/converter/BasePath.ts:78](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/BasePath.ts#L78)

#### Returns: void

### trim(fileName: string): string
Trim the given filename by the determined base paths.  
* Defined in [td/converter/BasePath.ts:62](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/BasePath.ts#L62)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string| The absolute filename that should be trimmed. |

#### Returns: string
The trimmed version of the filename.


### Static normalize(path: string): string
Normalize the given path.  
* Defined in [td/converter/BasePath.ts:89](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/BasePath.ts#L89)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string| The path that should be normalized. |

#### Returns: string
Normalized version of the given path.



Generated using [TypeDoc](http://typedoc.io)
