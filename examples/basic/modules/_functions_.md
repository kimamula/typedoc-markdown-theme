# External module "functions"


## Index

### Modules
* [moduleFunction](_functions_.modulefunction.md)

### Functions
* [createSomething](_functions_.md#createsomething)
* [exportedFunction](_functions_.md#exportedfunction)
* [functionWithArguments](_functions_.md#functionwitharguments)
* [functionWithDefaults](_functions_.md#functionwithdefaults)
* [functionWithDocLink](_functions_.md#functionwithdoclink)
* [functionWithOptionalValue](_functions_.md#functionwithoptionalvalue)
* [functionWithRest](_functions_.md#functionwithrest)
* [genericFunction](_functions_.md#genericfunction)
* [internalFunction](_functions_.md#internalfunction)
* [multipleSignatures](_functions_.md#multiplesignatures)
* [variableFunction](_functions_.md#variablefunction)

## Functions

### createSomething(): \{foo: string, doAnotherThing: (), doSomething: ()\}
A function that returns an object.Also no type information is given, the object should be correctly reflected.  
* Defined in [functions.ts:175](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/functions.ts#L175)

#### Returns: \{foo: string, doAnotherThing: (), doSomething: ()\}

### exportedFunction(): void
This is a simple exported function.  
* Defined in [functions.ts:12](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/functions.ts#L12)

#### Returns: void

### functionWithArguments(paramZ: string, paramG: any, paramA: [INameInterface](../interfaces/_classes_.inameinterface.md)): number
This is a function with multiple arguments and a return value.  
* Defined in [functions.ts:50](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/functions.ts#L50)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| paramZ | string| This is a string parameter. |
| paramG | any| This is a parameter flagged with any.This sentence is placed in the next line. |
| paramA | [INameInterface](../interfaces/_classes_.inameinterface.md)| This is a **parameter** pointing to an interface.~~~var value:BaseClass = new BaseClass('test');functionWithArguments('arg', 0, value);~~~ |

#### Returns: number

### functionWithDefaults(valueA = "defaultValue": string, valueB = 100: number, valueC =  Number.NaN: number, valueD = true: boolean, valueE = false: boolean): string
This is a function with a parameter that has a default value.  
* Defined in [functions.ts:70](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/functions.ts#L70)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| valueA = "defaultValue" | string|  |
| valueB = 100 | number|  |
| valueC =  Number.NaN | number|  |
| valueD = true | boolean|  |
| valueE = false | boolean|  |

#### Returns: string
The input value or the default value.


### functionWithDocLink(): void
See {@linkcode INameInterface} and [INameInterface's name property]{@link INameInterface.name}.Also, check out {@link http://www.google.com|Google} and{@link https://github.com GitHub}.Taken from http://usejsdoc.org/tags-inline-link.html.  
* Defined in [functions.ts:191](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/functions.ts#L191)

#### Returns: void

### functionWithOptionalValue(requiredParam: string, optionalParam?: string): void
This is a function with a parameter that is optional.  
* Defined in [functions.ts:61](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/functions.ts#L61)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| requiredParam | string| A normal parameter. |
| optionalParam? | string| An optional parameter. |

#### Returns: void

### functionWithRest(...rest: string[]): string
This is a function with rest parameter.  
* Defined in [functions.ts:87](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/functions.ts#L87)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...rest | string[]| Multiple strings. |

#### Returns: string
The combined string.


### genericFunction<T>(value: T): T
This is a generic function.  
* Defined in [functions.ts:131](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/functions.ts#L131)


#### Type parameters

* #### TThe type parameter.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | T| The typed value. |

#### Returns: T
Returns the typed value.


### internalFunction(): void
This is an internal function.  
* Defined in [functions.ts:6](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/functions.ts#L6)

#### Returns: void

### multipleSignatures(value: string): stringmultipleSignatures(value: \{name: string\}): string
This is the first signature of a function with multiple signatures.  
* Defined in [functions.ts:97](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/functions.ts#L97)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | string| The name value. |

#### Returns: string
This is the second signature of a function with multiple signatures.  
* Defined in [functions.ts:105](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/functions.ts#L105)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | \{name: string\}| An object containing the name value. |

#### Returns: string

### variableFunction(paramZ: string, paramG: any, paramA: [INameInterface](../interfaces/_classes_.inameinterface.md)): number
This is a function with multiple arguments and a return value.  
* Defined in [functions.ts:30](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/functions.ts#L30)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| paramZ | string| This is a string parameter. |
| paramG | any| This is a parameter flagged with any.This sentence is placed in the next line. |
| paramA | [INameInterface](../interfaces/_classes_.inameinterface.md)| This is a **parameter** pointing to an interface.~~~var value:BaseClass = new BaseClass('test');functionWithArguments('arg', 0, value);~~~ |

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
