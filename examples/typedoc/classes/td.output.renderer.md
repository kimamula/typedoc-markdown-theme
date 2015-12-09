# Class Renderer
The renderer processes a [[ProjectReflection]] using a [[BaseTheme]] instance and writesthe emitted html documents to a output directory. You can specify which theme should be usedusing the ```--theme <name>``` commandline argument.Subclasses of [[BasePlugin]] that have registered themselves in the [[Renderer.PLUGIN_CLASSES]]will be automatically initialized. Most of the core functionality is provided as separate plugins.[[Renderer]] is a subclass of [[EventDispatcher]] and triggers a series of events whilea project is being processed. You can listen to these events to control the flow or manipulatethe output.* [[Renderer.EVENT_BEGIN]]<br>Triggered before the renderer starts rendering a project. The listener receivesan instance of [[OutputEvent]]. By calling [[OutputEvent.preventDefault]] the entirerender process can be canceled.* [[Renderer.EVENT_BEGIN_PAGE]]<br>Triggered before a document will be rendered. The listener receives an instance of[[OutputPageEvent]]. By calling [[OutputPageEvent.preventDefault]] the generation of thedocument can be canceled.* [[Renderer.EVENT_END_PAGE]]<br>Triggered after a document has been rendered, just before it is written to disc. Thelistener receives an instance of [[OutputPageEvent]]. When calling[[OutputPageEvent.preventDefault]] the the document will not be saved to disc.* [[Renderer.EVENT_END]]<br>Triggered after the renderer has written all documents. The listener receivesan instance of [[OutputEvent]].

### Extends
* [PluginHost](td.pluginhost.md)<[RendererPlugin](td.output.rendererplugin.md)>

### Implements
* [IParameterProvider](../interfaces/td.iparameterprovider.md)

## Index

### Constructors
* [constructor](td.output.renderer.md#constructor)

### Events
* [EVENT_BEGIN](td.output.renderer.md#event_begin)
* [EVENT_BEGIN_PAGE](td.output.renderer.md#event_begin_page)
* [EVENT_END](td.output.renderer.md#event_end)
* [EVENT_END_PAGE](td.output.renderer.md#event_end_page)

### Properties
* [application](td.output.renderer.md#application)
* [plugins](td.output.renderer.md#plugins)
* [templates](td.output.renderer.md#templates)
* [theme](td.output.renderer.md#theme)
* [PLUGINS](td.output.renderer.md#plugins-1)

### Methods
* [addPlugin](td.output.renderer.md#addplugin)
* [dispatch](td.output.renderer.md#dispatch)
* [getParameters](td.output.renderer.md#getparameters)
* [getPlugin](td.output.renderer.md#getplugin)
* [getTemplate](td.output.renderer.md#gettemplate)
* [off](td.output.renderer.md#off)
* [on](td.output.renderer.md#on)
* [prepareOutputDirectory](td.output.renderer.md#prepareoutputdirectory)
* [prepareTheme](td.output.renderer.md#preparetheme)
* [removeAllPlugins](td.output.renderer.md#removeallplugins)
* [removePlugin](td.output.renderer.md#removeplugin)
* [render](td.output.renderer.md#render)
* [renderDocument](td.output.renderer.md#renderdocument)
* [getDefaultTheme](td.output.renderer.md#getdefaulttheme)
* [getThemeDirectory](td.output.renderer.md#getthemedirectory)
* [loadPlugins](td.output.renderer.md#loadplugins)
* [readFile](td.output.renderer.md#readfile)
* [registerPlugin](td.output.renderer.md#registerplugin)

## Constructors

### new Renderer(application: [IApplication](../interfaces/td.iapplication.md)): [Renderer](td.output.renderer.md)
Create a new Renderer instance.  
* Defined in [td/output/Renderer.ts:89](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L89)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| application | [IApplication](../interfaces/td.iapplication.md)| The application this dispatcher is attached to. |

#### Returns: [Renderer](td.output.renderer.md)

## Events

### Static EVENT_BEGIN: string
Triggered before the renderer starts rendering a project.
* Defined in [td/output/Renderer.ts:71](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L71)


### Static EVENT_BEGIN_PAGE: string
Triggered before a document will be rendered.
* Defined in [td/output/Renderer.ts:83](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L83)


### Static EVENT_END: string
Triggered after the renderer has written all documents.
* Defined in [td/output/Renderer.ts:77](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L77)


### Static EVENT_END_PAGE: string
Triggered after a document has been rendered, just before it is written to disc.
* Defined in [td/output/Renderer.ts:89](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L89)


## Properties

### application: [IApplication](../interfaces/td.iapplication.md)
The application this dispatcher is attached to.
* Defined in [td/output/Renderer.ts:55](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L55)


### plugins: [name: string]: [RendererPlugin](td.output.rendererplugin.md)
List of all plugins that are attached to this host.
* Inherited from [PluginHost](td.pluginhost.md).[plugins](td.pluginhost.md#plugins)
* Defined in [td/PluginHost.ts:17](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L17)


### Private templates: [path: string]: [IHandlebarTemplate](../interfaces/td.output.ihandlebartemplate.md)
Hash map of all loaded templates indexed by filename.
* Defined in [td/output/Renderer.ts:65](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L65)


### theme: [Theme](td.output.theme.md)
The theme that is used to render the documentation.
* Defined in [td/output/Renderer.ts:60](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L60)


### Static PLUGINS: [name: string]: [IPluginClass](../interfaces/td.ipluginclass.md)<[IPluginInterface](../interfaces/td.iplugininterface.md)>

* Inherited from [PluginHost](td.pluginhost.md).[PLUGINS](td.pluginhost.md#plugins-1)
* Defined in [td/PluginHost.ts:19](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L19)


## Methods

### addPlugin(name: string, pluginClass: [IPluginClass](../interfaces/td.ipluginclass.md)<[RendererPlugin](td.output.rendererplugin.md)>): [RendererPlugin](td.output.rendererplugin.md)
  
* Inherited from [PluginHost](td.pluginhost.md).[addPlugin](td.pluginhost.md#addplugin)
* Defined in [td/PluginHost.ts:50](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L50)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |
| pluginClass | [IPluginClass](../interfaces/td.ipluginclass.md)<[RendererPlugin](td.output.rendererplugin.md)>|  |

#### Returns: [RendererPlugin](td.output.rendererplugin.md)

### dispatch(event: string, ...args: any[]): void
Dispatch an event with the given event name.  
* Inherited from [EventDispatcher](td.eventdispatcher.md).[dispatch](td.eventdispatcher.md#dispatch)
* Defined in [td/EventDispatcher.ts:67](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L67)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string| The name of the event to dispatch. |
| ...args | any[]| Additional arguments to pass to the handlers. |

#### Returns: void

### getParameters(): [IParameter](../interfaces/td.iparameter.md)[]
  
* Implementation of [IParameterProvider](../interfaces/td.iparameterprovider.md).[getParameters](../interfaces/td.iparameterprovider.md#getparameters)
* Overwrites [PluginHost](td.pluginhost.md).[getParameters](td.pluginhost.md#getparameters)
* Defined in [td/output/Renderer.ts:106](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L106)

#### Returns: [IParameter](../interfaces/td.iparameter.md)[]

### getPlugin(name: string): [RendererPlugin](td.output.rendererplugin.md)
Retrieve a plugin instance.  
* Inherited from [PluginHost](td.pluginhost.md).[getPlugin](td.pluginhost.md#getplugin)
* Defined in [td/PluginHost.ts:41](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L41)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: [RendererPlugin](td.output.rendererplugin.md)
The instance of the plugin or NULL if no plugin with the given class is attached.


### getTemplate(fileName: string): [IHandlebarTemplate](../interfaces/td.output.ihandlebartemplate.md)
Return the template with the given filename.Tries to find the file in the ´templates´ subdirectory of the current theme.If it does not exist, TypeDoc tries to find the template in the defaulttheme templates subdirectory.  
* Defined in [td/output/Renderer.ts:129](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L129)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fileName | string| The filename of the template that should be loaded. |

#### Returns: [IHandlebarTemplate](../interfaces/td.output.ihandlebartemplate.md)
The compiled template or NULL if the file could not be found.


### off(event =  null: string, handler =  null: Function, scope =  null: any): void
Remove an event handler.  
* Inherited from [EventDispatcher](td.eventdispatcher.md).[off](td.eventdispatcher.md#off)
* Defined in [td/EventDispatcher.ts:119](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L119)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event =  null | string| The name of the event whose handlers should be removed. |
| handler =  null | Function| The callback that should be removed. |
| scope =  null | any| The scope of the callback that should be removed. |

#### Returns: void

### on(event: string, handler: Function, scope =  null: any, priority = 0: number): void
Register an event handler for the given event name.  
* Inherited from [EventDispatcher](td.eventdispatcher.md).[on](td.eventdispatcher.md#on)
* Defined in [td/EventDispatcher.ts:97](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L97)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| event | string| The name of the event the handler should be registered to. |
| handler | Function| The callback that should be invoked. |
| scope =  null | any| The scope the callback should be executed in. |
| priority = 0 | number| A numeric value describing the priority of the handler. Handlerswith higher priority will be executed earlier. |

#### Returns: void

### Private prepareOutputDirectory(directory: string): boolean
Prepare the output directory. If the directory does not exist, it will becreated. If the directory exists, it will be emptied.  
* Defined in [td/output/Renderer.ts:259](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L259)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| directory | string| The path to the directory that should be prepared. |

#### Returns: boolean
TRUE if the directory could be prepared, otherwise FALSE.


### Private prepareTheme(): boolean
Ensure that a theme has been setup.If a the user has set a theme we try to find and load it. If no theme hasbeen specified we load the default theme.  
* Defined in [td/output/Renderer.ts:227](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L227)

#### Returns: boolean
TRUE if a theme has been setup, otherwise FALSE.


### removeAllPlugins(): void
  
* Inherited from [PluginHost](td.pluginhost.md).[removeAllPlugins](td.pluginhost.md#removeallplugins)
* Defined in [td/PluginHost.ts:71](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L71)

#### Returns: void

### removePlugin(name: string): boolean
  
* Inherited from [PluginHost](td.pluginhost.md).[removePlugin](td.pluginhost.md#removeplugin)
* Defined in [td/PluginHost.ts:60](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L60)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: boolean

### render(project: [ProjectReflection](td.models.projectreflection.md), outputDirectory: string): void
Render the given project reflection to the specified output directory.  
* Defined in [td/output/Renderer.ts:160](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L160)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| project | [ProjectReflection](td.models.projectreflection.md)| The project that should be rendered. |
| outputDirectory | string| The path of the directory the documentation should be rendered to. |

#### Returns: void

### Private renderDocument(page: [OutputPageEvent](td.output.outputpageevent.md)): boolean
Render a single page.  
* Defined in [td/output/Renderer.ts:194](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L194)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| page | [OutputPageEvent](td.output.outputpageevent.md)| An event describing the current page. |

#### Returns: boolean
TRUE if the page has been saved to disc, otherwise FALSE.


### Static getDefaultTheme(): string
Return the path to the default theme.  
* Defined in [td/output/Renderer.ts:319](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L319)

#### Returns: string
The path to the default theme.


### Static getThemeDirectory(): string
Return the path containing the themes shipped with TypeDoc.  
* Defined in [td/output/Renderer.ts:309](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L309)

#### Returns: string
The path to the theme directory.


### Static loadPlugins<T>(instance: [PluginHost](td.pluginhost.md)<T>): void
  
* Inherited from [PluginHost](td.pluginhost.md).[loadPlugins](td.pluginhost.md#loadplugins)
* Defined in [td/PluginHost.ts:87](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L87)


#### Type parameters

* #### T [IPluginInterface](../interfaces/td.iplugininterface.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| instance | [PluginHost](td.pluginhost.md)<T>|  |

#### Returns: void

### Static readFile(file: any): string
Load the given file and return its contents.  
* Defined in [td/output/Renderer.ts:330](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/Renderer.ts#L330)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | any| The path of the file to read. |

#### Returns: string
The files contents.


### Static registerPlugin<T>(name: string, pluginClass: [IPluginClass](../interfaces/td.ipluginclass.md)<T>): void
  
* Inherited from [PluginHost](td.pluginhost.md).[registerPlugin](td.pluginhost.md#registerplugin)
* Defined in [td/PluginHost.ts:81](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L81)


#### Type parameters

* #### T [IPluginInterface](../interfaces/td.iplugininterface.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |
| pluginClass | [IPluginClass](../interfaces/td.ipluginclass.md)<T>|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
