# Interface IOptions
Options object interface declaration.Other components might add additional option declarations.

## Index

### Properties
* [disableOutputCheck](td.ioptions.md#disableoutputcheck)
* [entryPoint](td.ioptions.md#entrypoint)
* [exclude](td.ioptions.md#exclude)
* [excludeExternals](td.ioptions.md#excludeexternals)
* [excludeNotExported](td.ioptions.md#excludenotexported)
* [externalPattern](td.ioptions.md#externalpattern)
* [gaID](td.ioptions.md#gaid)
* [gaSite](td.ioptions.md#gasite)
* [help](td.ioptions.md#help)
* [hideGenerator](td.ioptions.md#hidegenerator)
* [ignoreCompilerErrors](td.ioptions.md#ignorecompilererrors)
* [includeDeclarations](td.ioptions.md#includedeclarations)
* [includes](td.ioptions.md#includes)
* [json](td.ioptions.md#json)
* [logger](td.ioptions.md#logger)
* [media](td.ioptions.md#media)
* [mode](td.ioptions.md#mode)
* [name](td.ioptions.md#name)
* [out](td.ioptions.md#out)
* [plugins](td.ioptions.md#plugins)
* [readme](td.ioptions.md#readme)
* [theme](td.ioptions.md#theme)
* [verbose](td.ioptions.md#verbose)
* [version](td.ioptions.md#version)

## Properties

### Optional disableOutputCheck: boolean
Should TypeDoc disable the testing and cleaning of the output directory?
* Defined in [td/Options.ts:43](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L43)


### Optional entryPoint: string
Specifies the fully qualified name of the root symbol. Defaults to global namespace.
* Defined in [td/output/themes/DefaultTheme.ts:24](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L24)


### Optional exclude: string
A pattern for files that should be excluded when a path is specified as source.
* Defined in [td/Options.ts:23](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L23)


### Optional excludeExternals: boolean
Should externally resolved TypeScript files be ignored?
* Defined in [td/converter/Converter.ts:30](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L30)


### Optional excludeNotExported: boolean
Should symbols that are not marked as being exported be ignored?
* Defined in [td/converter/Converter.ts:35](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L35)


### Optional externalPattern: string
Define a pattern for files that should be considered being external.
* Defined in [td/converter/Converter.ts:20](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L20)


### Optional gaID: string
The Google Analytics tracking ID that should be used. When not set, the tracking codeshould be omitted.
* Defined in [td/output/themes/DefaultTheme.ts:9](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L9)


### Optional gaSite: string
Optional site name for Google Analytics. Defaults to `auto`.
* Defined in [td/output/themes/DefaultTheme.ts:14](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L14)


### Optional help: boolean
Does the user want to display the help message?
* Defined in [td/Options.ts:48](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L48)


### Optional hideGenerator: boolean
Should we hide the TypeDoc link at the end of the page?
* Defined in [td/output/themes/DefaultTheme.ts:19](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L19)


### Optional ignoreCompilerErrors: boolean
Should TypeDoc generate documentation pages even after the compiler has returned errors?
* Defined in [td/Options.ts:38](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L38)


### Optional includeDeclarations: boolean
Should declaration files be documented?
* Defined in [td/converter/Converter.ts:25](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L25)


### Optional includes: string
Specifies the location to look for included documents.
* Defined in [td/output/plugins/MarkedPlugin.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L8)


### Optional json: string
Path and filename of the json file.
* Defined in [td/Options.ts:33](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L33)


### Optional logger: [LoggerType](../enums/td.loggertype.md)
Which logger should be used to record messages?
* Defined in [td/Options.ts:63](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L63)


### Optional media: string
Specifies the location with media files that should be copied to the output directory.
* Defined in [td/output/plugins/MarkedPlugin.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/MarkedPlugin.ts#L13)


### Optional mode: [SourceFileMode](../enums/td.sourcefilemode.md)
Specifies the output mode the project is used to be compiled with.
* Defined in [td/converter/Converter.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L15)


### Optional name: string
The human readable name of the project. Used within the templates to set the title of the document.
* Defined in [td/converter/Converter.ts:10](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Converter.ts#L10)


### Optional out: string
The path of the output directory.
* Defined in [td/Options.ts:28](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L28)


### Optional plugins: string[]
The list of npm plugins that should be loaded.
* Defined in [td/Options.ts:18](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L18)


### Optional readme: string
The location of the readme file that should be displayed on the index page. Set this to 'none' toremove the index page and start with the globals page.
* Defined in [td/converter/plugins/PackagePlugin.ts:9](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/plugins/PackagePlugin.ts#L9)


### theme: string
The path of the theme that should be used.
* Defined in [td/Options.ts:13](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L13)


### Optional verbose: boolean
Should we display some extra debug information?
* Defined in [td/Options.ts:53](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L53)


### Optional version: boolean
Does the user want to know the version number?
* Defined in [td/Options.ts:58](https://github.com/kimamula/typedoc/blob/HEAD/src/td/Options.ts#L58)



Generated using [TypeDoc](http://typedoc.io)
