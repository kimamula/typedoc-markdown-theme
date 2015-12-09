# Class Repository
Stores data of a repository.

## Index

### Constructors
* [constructor](td.converter.repository.md#constructor)

### Properties
* [branch](td.converter.repository.md#branch)
* [files](td.converter.repository.md#files)
* [gitHubProject](td.converter.repository.md#githubproject)
* [gitHubUser](td.converter.repository.md#githubuser)
* [path](td.converter.repository.md#path)

### Methods
* [contains](td.converter.repository.md#contains)
* [getGitHubURL](td.converter.repository.md#getgithuburl)
* [tryCreateRepository](td.converter.repository.md#trycreaterepository)

## Constructors

### new Repository(path: string): [Repository](td.converter.repository.md)
Create a new Repository instance.  
* Defined in [td/converter/plugins/GitHubPlugin.ts:31](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GitHubPlugin.ts#L31)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string| The root path of the repository. |

#### Returns: [Repository](td.converter.repository.md)

## Properties

### branch: string
The name of the branch this repository is on right now.
* Defined in [td/converter/plugins/GitHubPlugin.ts:16](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GitHubPlugin.ts#L16)


### files: string[]
A list of all files tracked by the repository.
* Defined in [td/converter/plugins/GitHubPlugin.ts:21](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GitHubPlugin.ts#L21)


### gitHubProject: string
The project name of this repository on GitHub.
* Defined in [td/converter/plugins/GitHubPlugin.ts:31](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GitHubPlugin.ts#L31)


### gitHubUser: string
The user/organisation name of this repository on GitHub.
* Defined in [td/converter/plugins/GitHubPlugin.ts:26](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GitHubPlugin.ts#L26)


### path: string
The root path of this repository.
* Defined in [td/converter/plugins/GitHubPlugin.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GitHubPlugin.ts#L11)


## Methods

### contains(fileName: string): boolean
Check whether the given file is tracked by this repository.  
* Defined in [td/converter/plugins/GitHubPlugin.ts:83](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GitHubPlugin.ts#L83)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string| The name of the file to test for. |

#### Returns: boolean
TRUE when the file is part of the repository, otherwise FALSE.


### getGitHubURL(fileName: string): string
Get the URL of the given file on GitHub.  
* Defined in [td/converter/plugins/GitHubPlugin.ts:94](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GitHubPlugin.ts#L94)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string| The file whose GitHub URL should be determined. |

#### Returns: string
An url pointing to the web preview of the given file or NULL.


### Static tryCreateRepository(path: string): [Repository](td.converter.repository.md)
Try to create a new repository instance.Checks whether the given path is the root of a valid repository and if socreates a new instance of [[Repository]].  
* Defined in [td/converter/plugins/GitHubPlugin.ts:119](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/GitHubPlugin.ts#L119)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string| The potential repository root. |

#### Returns: [Repository](td.converter.repository.md)
A new instance of [[Repository]] or NULL.



Generated using [TypeDoc](http://typedoc.io)
