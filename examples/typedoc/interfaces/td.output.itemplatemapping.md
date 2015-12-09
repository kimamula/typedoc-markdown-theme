# Interface ITemplateMapping
Defines a mapping of a [[Models.Kind]] to a template file.Used by [[DefaultTheme]] to map reflections to output files.

## Index

### Properties
* [directory](td.output.itemplatemapping.md#directory)
* [isLeaf](td.output.itemplatemapping.md#isleaf)
* [kind](td.output.itemplatemapping.md#kind)
* [template](td.output.itemplatemapping.md#template)

## Properties

### directory: string
The name of the directory the output files should be written to.
* Defined in [td/output/themes/DefaultTheme.ts:52](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L52)


### isLeaf: boolean
Can this mapping have children or should all further reflections be renderedto the defined output page?
* Defined in [td/output/themes/DefaultTheme.ts:47](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L47)


### kind: [ReflectionKind](../enums/td.models.reflectionkind.md)[]
[[DeclarationReflection.kind]] this rule applies to.
* Defined in [td/output/themes/DefaultTheme.ts:41](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L41)


### template: string
The name of the template that should be used to render the reflection.
* Defined in [td/output/themes/DefaultTheme.ts:57](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L57)



Generated using [TypeDoc](http://typedoc.io)
