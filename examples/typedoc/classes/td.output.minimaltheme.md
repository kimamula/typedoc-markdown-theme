# Class MinimalTheme


### Extends
* [DefaultTheme](td.output.defaulttheme.md)

### Implements
* [IParameterProvider](../interfaces/td.iparameterprovider.md)

## Index

### Constructors
* [constructor](td.output.minimaltheme.md#constructor)

### Properties
* [basePath](td.output.minimaltheme.md#basepath)
* [renderer](td.output.minimaltheme.md#renderer)
* [MAPPINGS](td.output.minimaltheme.md#mappings)

### Methods
* [getEntryPoint](td.output.minimaltheme.md#getentrypoint)
* [getNavigation](td.output.minimaltheme.md#getnavigation)
* [getParameters](td.output.minimaltheme.md#getparameters)
* [getUrls](td.output.minimaltheme.md#geturls)
* [isOutputDirectory](td.output.minimaltheme.md#isoutputdirectory)
* [onRendererBeginPage](td.output.minimaltheme.md#onrendererbeginpage)
* [applyAnchorUrl](td.output.minimaltheme.md#applyanchorurl)
* [applyGroupClasses](td.output.minimaltheme.md#applygroupclasses)
* [applyReflectionClasses](td.output.minimaltheme.md#applyreflectionclasses)
* [buildToc](td.output.minimaltheme.md#buildtoc)
* [buildUrls](td.output.minimaltheme.md#buildurls)
* [getMapping](td.output.minimaltheme.md#getmapping)
* [getUrl](td.output.minimaltheme.md#geturl)
* [toStyleClass](td.output.minimaltheme.md#tostyleclass)

## Constructors

### new MinimalTheme(renderer: [Renderer](td.output.renderer.md), basePath: string): [MinimalTheme](td.output.minimaltheme.md)
Create a new DefaultTheme instance.  
* Overwrites [DefaultTheme](td.output.defaulttheme.md).[constructor](td.output.defaulttheme.md#constructor)
* Defined in [td/output/themes/MinimalTheme.ts:4](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/MinimalTheme.ts#L4)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| renderer | [Renderer](td.output.renderer.md)| The renderer this theme is attached to. |
| basePath | string| The base path of this theme. |

#### Returns: [MinimalTheme](td.output.minimaltheme.md)

## Properties

### basePath: string
The base path of this theme.
* Inherited from [Theme](td.output.theme.md).[basePath](td.output.theme.md#basepath)
* Defined in [td/output/Theme.ts:56](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Theme.ts#L56)


### renderer: [Renderer](td.output.renderer.md)
The renderer this theme is attached to.
* Inherited from [Theme](td.output.theme.md).[renderer](td.output.theme.md#renderer)
* Defined in [td/output/Theme.ts:51](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Theme.ts#L51)


### Static MAPPINGS: [ITemplateMapping](../interfaces/td.output.itemplatemapping.md)[]
Mappings of reflections kinds to templates used by this theme.
* Inherited from [DefaultTheme](td.output.defaulttheme.md).[MAPPINGS](td.output.defaulttheme.md#mappings)
* Defined in [td/output/themes/DefaultTheme.ts:70](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L70)


## Methods

### getEntryPoint(project: [ProjectReflection](td.models.projectreflection.md)): [ContainerReflection](td.models.containerreflection.md)
Return the entry point of the documentation.  
* Inherited from [DefaultTheme](td.output.defaulttheme.md).[getEntryPoint](td.output.defaulttheme.md#getentrypoint)
* Defined in [td/output/themes/DefaultTheme.ts:179](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L179)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| project | [ProjectReflection](td.models.projectreflection.md)| The current project. |

#### Returns: [ContainerReflection](td.models.containerreflection.md)
The reflection that should be used as the entry point.


### getNavigation(project: [ProjectReflection](td.models.projectreflection.md)): [NavigationItem](td.output.navigationitem.md)
Create a navigation structure for the given project.  
* Inherited from [DefaultTheme](td.output.defaulttheme.md).[getNavigation](td.output.defaulttheme.md#getnavigation)
* Overwrites [Theme](td.output.theme.md).[getNavigation](td.output.theme.md#getnavigation)
* Defined in [td/output/themes/DefaultTheme.ts:204](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L204)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| project | [ProjectReflection](td.models.projectreflection.md)| The project whose navigation should be generated. |

#### Returns: [NavigationItem](td.output.navigationitem.md)
The root navigation item.


### getParameters(): [IParameter](../interfaces/td.iparameter.md)[]
  
* Implementation of [IParameterProvider](../interfaces/td.iparameterprovider.md).[getParameters](../interfaces/td.iparameterprovider.md#getparameters)
* Inherited from [DefaultTheme](td.output.defaulttheme.md).[getParameters](td.output.defaulttheme.md#getparameters)
* Defined in [td/output/themes/DefaultTheme.ts:123](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L123)

#### Returns: [IParameter](../interfaces/td.iparameter.md)[]

### getUrls(project: [ProjectReflection](td.models.projectreflection.md)): [UrlMapping](td.output.urlmapping.md)[]
Map the models of the given project to the desired output files.  
* Overwrites [DefaultTheme](td.output.defaulttheme.md).[getUrls](td.output.defaulttheme.md#geturls)
* Defined in [td/output/themes/MinimalTheme.ts:43](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/MinimalTheme.ts#L43)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| project | [ProjectReflection](td.models.projectreflection.md)| The project whose urls should be generated. |

#### Returns: [UrlMapping](td.output.urlmapping.md)[]
A list of [[UrlMapping]] instances defining which models
                should be rendered to which files.


### isOutputDirectory(path: string): boolean
Test whether the given path contains a documentation generated by this theme.  
* Overwrites [DefaultTheme](td.output.defaulttheme.md).[isOutputDirectory](td.output.defaulttheme.md#isoutputdirectory)
* Defined in [td/output/themes/MinimalTheme.ts:30](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/MinimalTheme.ts#L30)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string| The path of the directory that should be tested. |

#### Returns: boolean
TRUE if the given path seems to be a previous output directory,
             otherwise FALSE.


### Private onRendererBeginPage(page: [OutputPageEvent](td.output.outputpageevent.md)): void
Triggered before a document will be rendered.  
* Defined in [td/output/themes/MinimalTheme.ts:64](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/MinimalTheme.ts#L64)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| page | [OutputPageEvent](td.output.outputpageevent.md)| An event object describing the current render operation. |

#### Returns: void

### Static applyAnchorUrl(reflection: [Reflection](td.models.reflection.md), container: [Reflection](td.models.reflection.md)): void
Generate an anchor url for the given reflection and all of its children.  
* Inherited from [DefaultTheme](td.output.defaulttheme.md).[applyAnchorUrl](td.output.defaulttheme.md#applyanchorurl)
* Defined in [td/output/themes/DefaultTheme.ts:443](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L443)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| reflection | [Reflection](td.models.reflection.md)| The reflection an anchor url should be created for. |
| container | [Reflection](td.models.reflection.md)| The nearest reflection having an own document. |

#### Returns: void

### Static applyGroupClasses(group: [ReflectionGroup](td.models.reflectiongroup.md)): void
Generate the css classes for the given reflection group and apply them to the[[ReflectionGroup.cssClasses]] property.  
* Inherited from [DefaultTheme](td.output.defaulttheme.md).[applyGroupClasses](td.output.defaulttheme.md#applygroupclasses)
* Defined in [td/output/themes/DefaultTheme.ts:512](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L512)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| group | [ReflectionGroup](td.models.reflectiongroup.md)| The reflection group whose cssClasses property should be generated. |

#### Returns: void

### Static applyReflectionClasses(reflection: [DeclarationReflection](td.models.declarationreflection.md)): void
Generate the css classes for the given reflection and apply them to the[[DeclarationReflection.cssClasses]] property.  
* Inherited from [DefaultTheme](td.output.defaulttheme.md).[applyReflectionClasses](td.output.defaulttheme.md#applyreflectionclasses)
* Defined in [td/output/themes/DefaultTheme.ts:467](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L467)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| reflection | [DeclarationReflection](td.models.declarationreflection.md)| The reflection whose cssClasses property should be generated. |

#### Returns: void

### Static buildToc(model: [DeclarationReflection](td.models.declarationreflection.md), parent: [NavigationItem](td.output.navigationitem.md)): void
Create a toc navigation item structure.  
* Defined in [td/output/themes/MinimalTheme.ts:81](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/MinimalTheme.ts#L81)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| model | [DeclarationReflection](td.models.declarationreflection.md)| The models whose children should be written to the toc. |
| parent | [NavigationItem](td.output.navigationitem.md)| The parent [[Models.NavigationItem]] the toc should be appended to. |

#### Returns: void

### Static buildUrls(reflection: [DeclarationReflection](td.models.declarationreflection.md), urls: [UrlMapping](td.output.urlmapping.md)[]): [UrlMapping](td.output.urlmapping.md)[]
Build the url for the the given reflection and all of its children.  
* Inherited from [DefaultTheme](td.output.defaulttheme.md).[buildUrls](td.output.defaulttheme.md#buildurls)
* Defined in [td/output/themes/DefaultTheme.ts:413](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L413)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| reflection | [DeclarationReflection](td.models.declarationreflection.md)| The reflection the url should be created for. |
| urls | [UrlMapping](td.output.urlmapping.md)[]| The array the url should be appended to. |

#### Returns: [UrlMapping](td.output.urlmapping.md)[]
The altered urls array.


### Static getMapping(reflection: [DeclarationReflection](td.models.declarationreflection.md)): [ITemplateMapping](../interfaces/td.output.itemplatemapping.md)
Return the template mapping fore the given reflection.  
* Inherited from [DefaultTheme](td.output.defaulttheme.md).[getMapping](td.output.defaulttheme.md#getmapping)
* Defined in [td/output/themes/DefaultTheme.ts:394](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L394)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| reflection | [DeclarationReflection](td.models.declarationreflection.md)| The reflection whose mapping should be resolved. |

#### Returns: [ITemplateMapping](../interfaces/td.output.itemplatemapping.md)
The found mapping or NULL if no mapping could be found.


### Static getUrl(reflection: [Reflection](td.models.reflection.md), relative?: [Reflection](td.models.reflection.md), separator = ".": string): string
Return a url for the given reflection.  
* Inherited from [DefaultTheme](td.output.defaulttheme.md).[getUrl](td.output.defaulttheme.md#geturl)
* Defined in [td/output/themes/DefaultTheme.ts:377](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L377)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| reflection | [Reflection](td.models.reflection.md)| The reflection the url should be generated for. |
| relative? | [Reflection](td.models.reflection.md)| The parent reflection the url generation should stop on. |
| separator = "." | string| The separator used to generate the url. |

#### Returns: string
The generated url.


### Static toStyleClass(str: string): string
Transform a space separated string into a string suitable to be used as acss class, e.g. "constructor method" > "Constructor-method".  
* Inherited from [DefaultTheme](td.output.defaulttheme.md).[toStyleClass](td.output.defaulttheme.md#tostyleclass)
* Defined in [td/output/themes/DefaultTheme.ts:528](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/themes/DefaultTheme.ts#L528)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| str | string|  |

#### Returns: string


Generated using [TypeDoc](http://typedoc.io)
