# Class SourceDirectory
Exposes information about a directory containing source files.One my access the root directory of a project through the [[ProjectReflection.directory]]property. Traverse through directories by utilizing the [[SourceDirectory.parent]] or[[SourceDirectory.directories]] properties.

## Index

### Constructors
* [constructor](td.models.sourcedirectory.md#constructor)

### Properties
* [dirName](td.models.sourcedirectory.md#dirname)
* [directories](td.models.sourcedirectory.md#directories)
* [files](td.models.sourcedirectory.md#files)
* [name](td.models.sourcedirectory.md#name)
* [parent](td.models.sourcedirectory.md#parent)
* [url](td.models.sourcedirectory.md#url)

### Methods
* [getAllReflections](td.models.sourcedirectory.md#getallreflections)
* [toString](td.models.sourcedirectory.md#tostring)

## Constructors

### new SourceDirectory(name?: string, parent?: [SourceDirectory](td.models.sourcedirectory.md)): [SourceDirectory](td.models.sourcedirectory.md)
Create a new SourceDirectory instance.  
* Defined in [td/models/SourceDirectory.ts:40](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceDirectory.ts#L40)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name? | string| The new of directory. |
| parent? | [SourceDirectory](td.models.sourcedirectory.md)| The parent directory instance. |

#### Returns: [SourceDirectory](td.models.sourcedirectory.md)

## Properties

### dirName: string
The relative path from the root directory to this directory.
* Defined in [td/models/SourceDirectory.ts:35](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceDirectory.ts#L35)


### directories: [name: string]: [SourceDirectory](td.models.sourcedirectory.md)
A list of all subdirectories.
* Defined in [td/models/SourceDirectory.ts:20](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceDirectory.ts#L20)


### files: [SourceFile](td.models.sourcefile.md)[]
A list of all files in this directory.
* Defined in [td/models/SourceDirectory.ts:25](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceDirectory.ts#L25)


### name: string
The name of this directory.
* Defined in [td/models/SourceDirectory.ts:30](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceDirectory.ts#L30)


### parent: [SourceDirectory](td.models.sourcedirectory.md)
The parent directory or NULL if this is a root directory.
* Defined in [td/models/SourceDirectory.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceDirectory.ts#L15)


### url: string
The url of the page displaying the directory contents.
* Defined in [td/models/SourceDirectory.ts:40](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceDirectory.ts#L40)


## Methods

### getAllReflections(): [DeclarationReflection](td.models.declarationreflection.md)[]
Return a list of all reflections exposed by the files within this directory.  
* Defined in [td/models/SourceDirectory.ts:86](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceDirectory.ts#L86)

#### Returns: [DeclarationReflection](td.models.declarationreflection.md)[]
An aggregated list of all [[DeclarationReflection]] defined in the
files of this directory.


### toString(indent = "": string): string
Return a string describing this directory and its contents.  
* Defined in [td/models/SourceDirectory.ts:64](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceDirectory.ts#L64)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| indent = "" | string| Used internally for indention. |

#### Returns: string
A string representing this directory and all of its children.



Generated using [TypeDoc](http://typedoc.io)
