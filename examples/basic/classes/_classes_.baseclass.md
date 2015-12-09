# Class BaseClass
This is a simple base class.[[include:class-example.md]]

### Implements
* [INameInterface](../interfaces/_classes_.inameinterface.md)

## Index

### Constructors
* [constructor](_classes_.baseclass.md#constructor)

### Properties
* [internalClass](_classes_.baseclass.md#internalclass)
* [kind](_classes_.baseclass.md#kind)
* [name](_classes_.baseclass.md#name)
* [instance](_classes_.baseclass.md#instance)
* [instances](_classes_.baseclass.md#instances)

### Methods
* [arrowFunction](_classes_.baseclass.md#arrowfunction)
* [checkName](_classes_.baseclass.md#checkname)
* [getName](_classes_.baseclass.md#getname)
* [setName](_classes_.baseclass.md#setname)
* [caTest](_classes_.baseclass.md#catest)
* [getInstance](_classes_.baseclass.md#getinstance)
* [getName](_classes_.baseclass.md#getname-1)

## Constructors

### new BaseClass(name: string): [BaseClass](_classes_.baseclass.md)new BaseClass(source: [BaseClass](_classes_.baseclass.md)): [BaseClass](_classes_.baseclass.md)
  
* Defined in [classes.ts:76](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L76)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: [BaseClass](_classes_.baseclass.md)
  
* Defined in [classes.ts:79](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L79)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| source | [BaseClass](_classes_.baseclass.md)|  |

#### Returns: [BaseClass](_classes_.baseclass.md)

## Properties

### Private internalClass: [InternalClass](_classes_.internalclass.md)
This is an instance member of an internal class.
* Defined in [classes.ts:76](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L76)


### Protected kind: number
This is a simple protected member.
* Defined in [classes.ts:63](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L63)


### name: string
This is a simple public member.
* Implementation of [INameInterface](../interfaces/_classes_.inameinterface.md).[name](../interfaces/_classes_.inameinterface.md#name)
* Defined in [classes.ts:58](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L58)


### Static instance: [BaseClass](_classes_.baseclass.md)
This is a static member.Static members should not be inherited.
* Defined in [classes.ts:70](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L70)


### Static instances: [BaseClass](_classes_.baseclass.md)[]

* Defined in [classes.ts:71](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L71)


## Methods

### arrowFunction(param2: string, param1: number): void
This is a simple fat arrow function.  
* Defined in [classes.ts:140](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L140)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| param2 | string| The second parameter needed by this function. |
| param1 | number| The first parameter needed by this function. |

#### Returns: void

### Private checkName(): boolean
This is a private function.  
* Defined in [classes.ts:147](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L147)

#### Returns: boolean

### getName(): string
This is a simple member function.It should be inherited by all subclasses. This class has a staticmember with the same name, both should be documented.  
* Implementation of [INameInterface](../interfaces/_classes_.inameinterface.md).[getName](../interfaces/_classes_.inameinterface.md#getname)
* Defined in [classes.ts:102](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L102)

#### Returns: string
Return the name.


### setName(name: string): void
This is a simple member function.It should be inherited by all subclasses.  
* Defined in [classes.ts:127](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L127)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The new name. |

#### Returns: void

### Static caTest(originalValues: [BaseClass](_classes_.baseclass.md), newRecord: any, fieldNames: string[], mandatoryFields: string[]): string
 see https://github.com/sebastian-lenz/typedoc/issues/42
  
* Defined in [classes.ts:167](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L167)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| originalValues | [BaseClass](_classes_.baseclass.md)|  |
| newRecord | any|  |
| fieldNames | string[]|  |
| mandatoryFields | string[]|  |

#### Returns: string

### Static getInstance(): [BaseClass](_classes_.baseclass.md)
This is a static function.Static functions should not be inherited.  
* Defined in [classes.ts:159](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L159)

#### Returns: [BaseClass](_classes_.baseclass.md)
An instance of BaseClass.


### Static getName(): string
This is a simple static member function.Static functions should not be inherited. This class has amember with the same name, both should be documented.  
* Defined in [classes.ts:115](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L115)

#### Returns: string
Return the name.



Generated using [TypeDoc](http://typedoc.io)
