# External module "typescript-1.4"
Examples of features added in TypeScript 1.4. see http://blogs.msdn.com/b/typescript/archive/2014/11/18/what-s-new-in-the-typescript-type-system.aspx


## Index

### Classes
* [SimpleClass](../classes/_typescript_1_4_.simpleclass.md)

### Interfaces
* [RunOptions](../interfaces/_typescript_1_4_.runoptions.md)

### Type aliases
* [Callback](_typescript_1_4_.md#callback)
* [GenericCallback](_typescript_1_4_.md#genericcallback)
* [MyNumber](_typescript_1_4_.md#mynumber)
* [MyRunOptions](_typescript_1_4_.md#myrunoptions)
* [PrimitiveArray](_typescript_1_4_.md#primitivearray)

### Variables
* [callback](_typescript_1_4_.md#callback-1)
* [interfaceOrString](_typescript_1_4_.md#interfaceorstring)

### Functions
* [functionUsingTypes](_typescript_1_4_.md#functionusingtypes)
* [functionWithGenericCallback](_typescript_1_4_.md#functionwithgenericcallback)

## Type aliases

### Callback: (...parameters: string[])=> string
A type alias of for a callback function.
* Defined in [typescript-1.4.ts:39](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/typescript-1.4.ts#L39)


### GenericCallback: <T>(val: T, index: number, arr: Array<T>)=> any
A type alias of for a generic callback function. returns Some return value.

* Defined in [typescript-1.4.ts:51](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/typescript-1.4.ts#L51)


### MyNumber: number
A type alias describing a primitive value.
* Defined in [typescript-1.4.ts:25](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/typescript-1.4.ts#L25)


### MyRunOptions: [RunOptions](../interfaces/_typescript_1_4_.runoptions.md)
A type alias describing a reference type.
* Defined in [typescript-1.4.ts:31](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/typescript-1.4.ts#L31)


### PrimitiveArray: Array<string | number | boolean>
A type alias describing an array.
* Defined in [typescript-1.4.ts:19](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/typescript-1.4.ts#L19)


## Variables

### callback: [Callback](_typescript_1_4_.md#callback)
A variable pointing to a type alias.
* Defined in [typescript-1.4.ts:63](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/typescript-1.4.ts#L63)


### interfaceOrString: [RunOptions](../interfaces/_typescript_1_4_.runoptions.md) | string
A variable defined using an union type.
* Defined in [typescript-1.4.ts:57](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/typescript-1.4.ts#L57)


## Functions

### functionUsingTypes(aliasData: [PrimitiveArray](_typescript_1_4_.md#primitivearray), callback: [Callback](_typescript_1_4_.md#callback)): [MyNumber](_typescript_1_4_.md#mynumber)
A function that has parameters pointing to type aliases and returns a type alias.  
* Defined in [typescript-1.4.ts:69](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/typescript-1.4.ts#L69)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| aliasData | [PrimitiveArray](_typescript_1_4_.md#primitivearray)|  |
| callback | [Callback](_typescript_1_4_.md#callback)|  |

#### Returns: [MyNumber](_typescript_1_4_.md#mynumber)

### functionWithGenericCallback<T>(arr: Array<T>, callback: [GenericCallback](_typescript_1_4_.md#genericcallback)): any
A generic function using a generic type alias.  
* Defined in [typescript-1.4.ts:82](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/typescript-1.4.ts#L82)


#### Type parameters

* #### TSome type argument.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| arr | Array<T>| A generic array. |
| callback | [GenericCallback](_typescript_1_4_.md#genericcallback)| Some generic type alias callback. |

#### Returns: any
Some return value.



Generated using [TypeDoc](http://typedoc.io)
