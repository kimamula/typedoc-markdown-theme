# Class SourceFile
Exposes information about a source file.One my access a list of all source files through the [[ProjectReflection.files]] property or asa tree structure through the [[ProjectReflection.directory]] property.Furthermore each reflection carries references to the related SourceFile with their[[DeclarationReflection.sources]] property. It is an array of of [[IDeclarationSource]] instancescontaining the reference in their [[IDeclarationSource.file]] field.

## Index

### Constructors
* [constructor](td.models.sourcefile.md#constructor)

### Properties
* [fileName](td.models.sourcefile.md#filename)
* [fullFileName](td.models.sourcefile.md#fullfilename)
* [groups](td.models.sourcefile.md#groups)
* [name](td.models.sourcefile.md#name)
* [parent](td.models.sourcefile.md#parent)
* [reflections](td.models.sourcefile.md#reflections)
* [url](td.models.sourcefile.md#url)

## Constructors

### new SourceFile(fullFileName: string): [SourceFile](td.models.sourcefile.md)
Create a new SourceFile instance.  
* Defined in [td/models/SourceFile.ts:49](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceFile.ts#L49)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fullFileName | string| The full file name. |

#### Returns: [SourceFile](td.models.sourcefile.md)

## Properties

### fileName: string
A trimmed version of the file name. Contains only the path relative to thedetermined base path.
* Defined in [td/models/SourceFile.ts:24](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceFile.ts#L24)


### fullFileName: string
The original full system file name.
* Defined in [td/models/SourceFile.ts:18](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceFile.ts#L18)


### groups: [ReflectionGroup](td.models.reflectiongroup.md)[]
A grouped list of the reflections declared in this file.
* Defined in [td/models/SourceFile.ts:49](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceFile.ts#L49)


### name: string
The base name of the file.
* Defined in [td/models/SourceFile.ts:29](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceFile.ts#L29)


### parent: [SourceDirectory](td.models.sourcedirectory.md)
The representation of the parent directory of this source file.
* Defined in [td/models/SourceFile.ts:39](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceFile.ts#L39)


### reflections: [DeclarationReflection](td.models.declarationreflection.md)[]
A list of all reflections that are declared in this file.
* Defined in [td/models/SourceFile.ts:44](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceFile.ts#L44)


### url: string
A url pointing to a page displaying the contents of this file.
* Defined in [td/models/SourceFile.ts:34](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/SourceFile.ts#L34)



Generated using [TypeDoc](http://typedoc.io)
