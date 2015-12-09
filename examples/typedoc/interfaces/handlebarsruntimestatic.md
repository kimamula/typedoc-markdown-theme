# Interface HandlebarsRuntimeStatic


### Extends
* [HandlebarsCommon](handlebarscommon.md)

## Index

### Properties
* [SafeString](handlebarsruntimestatic.md#safestring)
* [Utils](handlebarsruntimestatic.md#utils)
* [logger](handlebarsruntimestatic.md#logger)
* [templates](handlebarsruntimestatic.md#templates)

### Methods
* [Exception](handlebarsruntimestatic.md#exception)
* [K](handlebarsruntimestatic.md#k)
* [createFrame](handlebarsruntimestatic.md#createframe)
* [log](handlebarsruntimestatic.md#log)
* [registerHelper](handlebarsruntimestatic.md#registerhelper)
* [registerPartial](handlebarsruntimestatic.md#registerpartial)

## Properties

### SafeString: [SafeString](../classes/hbs.safestring.md)

* Inherited from [HandlebarsCommon](handlebarscommon.md).[SafeString](handlebarscommon.md#safestring)
* Defined in [lib/handlebars/handlebars.d.ts:29](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L29)


### Utils: [Utils](../modules/hbs.utils.md)

* Inherited from [HandlebarsCommon](handlebarscommon.md).[Utils](handlebarscommon.md#utils)
* Defined in [lib/handlebars/handlebars.d.ts:30](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L30)


### logger: [Logger](logger.md)

* Inherited from [HandlebarsCommon](handlebarscommon.md).[logger](handlebarscommon.md#logger)
* Defined in [lib/handlebars/handlebars.d.ts:32](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L32)


### templates: [HandlebarsTemplates](handlebarstemplates.md)

* Defined in [lib/handlebars/handlebars.d.ts:47](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L47)


## Methods

### Exception(message: string): void
  
* Inherited from [HandlebarsCommon](handlebarscommon.md).[Exception](handlebarscommon.md#exception)
* Defined in [lib/handlebars/handlebars.d.ts:28](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L28)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| message | string|  |

#### Returns: void

### K(): void
  
* Inherited from [HandlebarsCommon](handlebarscommon.md).[K](handlebarscommon.md#k)
* Defined in [lib/handlebars/handlebars.d.ts:25](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L25)

#### Returns: void

### createFrame(object: any): any
  
* Inherited from [HandlebarsCommon](handlebarscommon.md).[createFrame](handlebarscommon.md#createframe)
* Defined in [lib/handlebars/handlebars.d.ts:26](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L26)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | any|  |

#### Returns: any

### log(level: number, obj: any): void
  
* Inherited from [HandlebarsCommon](handlebarscommon.md).[log](handlebarscommon.md#log)
* Defined in [lib/handlebars/handlebars.d.ts:33](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L33)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| level | number|  |
| obj | any|  |

#### Returns: void

### registerHelper(name: string, fn: Function, inverse?: boolean): void
  
* Inherited from [HandlebarsCommon](handlebarscommon.md).[registerHelper](handlebarscommon.md#registerhelper)
* Defined in [lib/handlebars/handlebars.d.ts:23](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L23)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |
| fn | Function|  |
| inverse? | boolean|  |

#### Returns: void

### registerPartial(name: string, str: any): void
  
* Inherited from [HandlebarsCommon](handlebarscommon.md).[registerPartial](handlebarscommon.md#registerpartial)
* Defined in [lib/handlebars/handlebars.d.ts:24](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L24)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |
| str | any|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
