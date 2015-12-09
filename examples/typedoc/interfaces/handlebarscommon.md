# Interface HandlebarsCommon


## Index

### Properties
* [SafeString](handlebarscommon.md#safestring)
* [Utils](handlebarscommon.md#utils)
* [logger](handlebarscommon.md#logger)

### Methods
* [Exception](handlebarscommon.md#exception)
* [K](handlebarscommon.md#k)
* [createFrame](handlebarscommon.md#createframe)
* [log](handlebarscommon.md#log)
* [registerHelper](handlebarscommon.md#registerhelper)
* [registerPartial](handlebarscommon.md#registerpartial)

## Properties

### SafeString: [SafeString](../classes/hbs.safestring.md)

* Defined in [lib/handlebars/handlebars.d.ts:29](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L29)


### Utils: [Utils](../modules/hbs.utils.md)

* Defined in [lib/handlebars/handlebars.d.ts:30](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L30)


### logger: [Logger](logger.md)

* Defined in [lib/handlebars/handlebars.d.ts:32](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L32)


## Methods

### Exception(message: string): void
  
* Defined in [lib/handlebars/handlebars.d.ts:28](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L28)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| message | string|  |

#### Returns: void

### K(): void
  
* Defined in [lib/handlebars/handlebars.d.ts:25](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L25)

#### Returns: void

### createFrame(object: any): any
  
* Defined in [lib/handlebars/handlebars.d.ts:26](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L26)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| object | any|  |

#### Returns: any

### log(level: number, obj: any): void
  
* Defined in [lib/handlebars/handlebars.d.ts:33](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L33)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| level | number|  |
| obj | any|  |

#### Returns: void

### registerHelper(name: string, fn: Function, inverse?: boolean): void
  
* Defined in [lib/handlebars/handlebars.d.ts:23](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L23)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |
| fn | Function|  |
| inverse? | boolean|  |

#### Returns: void

### registerPartial(name: string, str: any): void
  
* Defined in [lib/handlebars/handlebars.d.ts:24](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L24)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |
| str | any|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
