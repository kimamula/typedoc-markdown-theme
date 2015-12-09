# Class PluginHost<T>


### Type parameters

* #### T [IPluginInterface](../interfaces/td.iplugininterface.md)

### Extends
* [EventDispatcher](td.eventdispatcher.md)

### Implements
* [IParameterProvider](../interfaces/td.iparameterprovider.md)

## Index

### Properties
* [plugins](td.pluginhost.md#plugins)
* [PLUGINS](td.pluginhost.md#plugins-1)

### Methods
* [addPlugin](td.pluginhost.md#addplugin)
* [dispatch](td.pluginhost.md#dispatch)
* [getParameters](td.pluginhost.md#getparameters)
* [getPlugin](td.pluginhost.md#getplugin)
* [off](td.pluginhost.md#off)
* [on](td.pluginhost.md#on)
* [removeAllPlugins](td.pluginhost.md#removeallplugins)
* [removePlugin](td.pluginhost.md#removeplugin)
* [loadPlugins](td.pluginhost.md#loadplugins)
* [registerPlugin](td.pluginhost.md#registerplugin)

## Properties

### plugins: [name: string]: T
List of all plugins that are attached to this host.
* Defined in [td/PluginHost.ts:17](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L17)


### Static PLUGINS: [name: string]: [IPluginClass](../interfaces/td.ipluginclass.md)<[IPluginInterface](../interfaces/td.iplugininterface.md)>

* Defined in [td/PluginHost.ts:19](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L19)


## Methods

### addPlugin(name: string, pluginClass: [IPluginClass](../interfaces/td.ipluginclass.md)<T>): T
  
* Defined in [td/PluginHost.ts:50](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L50)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |
| pluginClass | [IPluginClass](../interfaces/td.ipluginclass.md)<T>|  |

#### Returns: T

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
* Defined in [td/PluginHost.ts:22](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L22)

#### Returns: [IParameter](../interfaces/td.iparameter.md)[]

### getPlugin(name: string): T
Retrieve a plugin instance.  
* Defined in [td/PluginHost.ts:41](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L41)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: T
The instance of the plugin or NULL if no plugin with the given class is attached.


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

### removeAllPlugins(): void
  
* Defined in [td/PluginHost.ts:71](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L71)

#### Returns: void

### removePlugin(name: string): boolean
  
* Defined in [td/PluginHost.ts:60](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L60)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: boolean

### Static loadPlugins<T>(instance: [PluginHost](td.pluginhost.md)<T>): void
  
* Defined in [td/PluginHost.ts:87](https://github.com/kimamula/typedoc/blob/HEAD/src/td/PluginHost.ts#L87)


#### Type parameters

* #### T [IPluginInterface](../interfaces/td.iplugininterface.md)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| instance | [PluginHost](td.pluginhost.md)<T>|  |

#### Returns: void

### Static registerPlugin<T>(name: string, pluginClass: [IPluginClass](../interfaces/td.ipluginclass.md)<T>): void
  
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
