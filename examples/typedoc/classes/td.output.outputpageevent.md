# Class OutputPageEvent
An event emitted by the [[Renderer]] class before and after themarkup of a page is rendered.This object will be passed as the rendering context to handlebars templates. see [[Renderer.EVENT_BEGIN_PAGE]] see [[Renderer.EVENT_END_PAGE]]


### Extends
* [Event](td.event.md)

## Index

### Properties
* [contents](td.output.outputpageevent.md#contents)
* [filename](td.output.outputpageevent.md#filename)
* [isDefaultPrevented](td.output.outputpageevent.md#isdefaultprevented)
* [isPropagationStopped](td.output.outputpageevent.md#ispropagationstopped)
* [model](td.output.outputpageevent.md#model)
* [navigation](td.output.outputpageevent.md#navigation)
* [project](td.output.outputpageevent.md#project)
* [settings](td.output.outputpageevent.md#settings)
* [template](td.output.outputpageevent.md#template)
* [templateName](td.output.outputpageevent.md#templatename)
* [toc](td.output.outputpageevent.md#toc)
* [url](td.output.outputpageevent.md#url)

### Methods
* [preventDefault](td.output.outputpageevent.md#preventdefault)
* [stopPropagation](td.output.outputpageevent.md#stoppropagation)

## Properties

### contents: string
The final html content of this page.Should be rendered by layout templates and can be modifies by plugins.
* Defined in [td/output/events/OutputPageEvent.ts:64](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputPageEvent.ts#L64)


### filename: string
The filename the page will be written to.
* Defined in [td/output/events/OutputPageEvent.ts:27](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputPageEvent.ts#L27)


### isDefaultPrevented: boolean
Has [[Event.preventDefault]] been called?
* Inherited from [Event](td.event.md).[isDefaultPrevented](td.event.md#isdefaultprevented)
* Defined in [td/EventDispatcher.ts:26](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L26)


### isPropagationStopped: boolean
Has [[Event.stopPropagation]] been called?
* Inherited from [Event](td.event.md).[isPropagationStopped](td.event.md#ispropagationstopped)
* Defined in [td/EventDispatcher.ts:21](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L21)


### model: any
The model that should be rendered on this page.
* Defined in [td/output/events/OutputPageEvent.ts:37](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputPageEvent.ts#L37)


### navigation: [NavigationItem](td.output.navigationitem.md)
The primary navigation structure of this page.
* Defined in [td/output/events/OutputPageEvent.ts:52](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputPageEvent.ts#L52)


### project: [ProjectReflection](td.models.projectreflection.md)
The project the renderer is currently processing.
* Defined in [td/output/events/OutputPageEvent.ts:17](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputPageEvent.ts#L17)


### settings: IOptions
The settings that have been passed to TypeDoc.
* Defined in [td/output/events/OutputPageEvent.ts:22](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputPageEvent.ts#L22)


### template: [IHandlebarTemplate](../interfaces/td.output.ihandlebartemplate.md)
The template that should be used to render this page.
* Defined in [td/output/events/OutputPageEvent.ts:42](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputPageEvent.ts#L42)


### templateName: string
The name of the template that should be used to render this page.
* Defined in [td/output/events/OutputPageEvent.ts:47](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputPageEvent.ts#L47)


### toc: [NavigationItem](td.output.navigationitem.md)
The table of contents structure of this page.
* Defined in [td/output/events/OutputPageEvent.ts:57](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputPageEvent.ts#L57)


### url: string
The url this page will be located at.
* Defined in [td/output/events/OutputPageEvent.ts:32](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/events/OutputPageEvent.ts#L32)


## Methods

### preventDefault(): void
Prevent the default action associated with this event from being executed.  
* Inherited from [Event](td.event.md).[preventDefault](td.event.md#preventdefault)
* Defined in [td/EventDispatcher.ts:40](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L40)

#### Returns: void

### stopPropagation(): void
Stop the propagation of this event. Remaining event handlers will not be executed.  
* Inherited from [Event](td.event.md).[stopPropagation](td.event.md#stoppropagation)
* Defined in [td/EventDispatcher.ts:32](https://github.com/kimamula/typedoc/blob/HEAD/src/td/EventDispatcher.ts#L32)

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
