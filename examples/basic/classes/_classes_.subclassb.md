# Class SubClassB
This is a class that extends another class.The constructor of the original class should be overwritten.

### Extends
* [BaseClass](_classes_.baseclass.md)

### Implements
* [INameInterface](../interfaces/_classes_.inameinterface.md)

## Index

### Constructors
* [constructor](_classes_.subclassb.md#constructor)

### Properties
* [kind](_classes_.subclassb.md#kind)
* [name](_classes_.subclassb.md#name)
* [instance](_classes_.subclassb.md#instance)
* [instances](_classes_.subclassb.md#instances)

### Methods
* [arrowFunction](_classes_.subclassb.md#arrowfunction)
* [doSomething](_classes_.subclassb.md#dosomething)
* [getName](_classes_.subclassb.md#getname)
* [setName](_classes_.subclassb.md#setname)
* [caTest](_classes_.subclassb.md#catest)
* [getInstance](_classes_.subclassb.md#getinstance)
* [getName](_classes_.subclassb.md#getname-1)

## Constructors

### new SubClassB(name: string): [SubClassB](_classes_.subclassb.md)
  
* Overwrites [BaseClass](_classes_.baseclass.md).[constructor](_classes_.baseclass.md#constructor)
* Defined in [classes.ts:262](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L262)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: [SubClassB](_classes_.subclassb.md)

## Properties

### Protected kind: number
This is a simple protected member.
* Inherited from [BaseClass](_classes_.baseclass.md).[kind](_classes_.baseclass.md#kind)
* Defined in [classes.ts:63](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L63)


### name: string
This is a simple public member.
* Implementation of [INameInterface](../interfaces/_classes_.inameinterface.md).[name](../interfaces/_classes_.inameinterface.md#name)
* Inherited from [BaseClass](_classes_.baseclass.md).[name](_classes_.baseclass.md#name)
* Defined in [classes.ts:58](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L58)


### Static instance: [BaseClass](_classes_.baseclass.md)
This is a static member.Static members should not be inherited.
* Inherited from [BaseClass](_classes_.baseclass.md).[instance](_classes_.baseclass.md#instance)
* Defined in [classes.ts:70](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L70)


### Static instances: [BaseClass](_classes_.baseclass.md)[]

* Inherited from [BaseClass](_classes_.baseclass.md).[instances](_classes_.baseclass.md#instances)
* Defined in [classes.ts:71](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L71)


## Methods

### arrowFunction(param2: string, param1: number): void
This is a simple fat arrow function.  
* Inherited from [BaseClass](_classes_.baseclass.md).[arrowFunction](_classes_.baseclass.md#arrowfunction)
* Defined in [classes.ts:140](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L140)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| param2 | string| The second parameter needed by this function. |
| param1 | number| The first parameter needed by this function. |

#### Returns: void

### doSomething(value: [string, [SubClassA](_classes_.subclassa.md), [SubClassB](_classes_.subclassb.md)]): void
  
* Defined in [classes.ts:267](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L267)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | [string, [SubClassA](_classes_.subclassa.md), [SubClassB](_classes_.subclassb.md)]|  |

#### Returns: void

### getName(): string
This is a simple member function.It should be inherited by all subclasses. This class has a staticmember with the same name, both should be documented.  
* Implementation of [INameInterface](../interfaces/_classes_.inameinterface.md).[getName](../interfaces/_classes_.inameinterface.md#getname)
* Inherited from [BaseClass](_classes_.baseclass.md).[getName](_classes_.baseclass.md#getname)
* Defined in [classes.ts:102](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L102)

#### Returns: string
Return the name.


### setName(name: string): void
This is a simple member function.It should be inherited by all subclasses.  
* Inherited from [BaseClass](_classes_.baseclass.md).[setName](_classes_.baseclass.md#setname)
* Defined in [classes.ts:127](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L127)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The new name. |

#### Returns: void

### Static caTest(originalValues: [BaseClass](_classes_.baseclass.md), newRecord: any, fieldNames: string[], mandatoryFields: string[]): string
 see https://github.com/sebastian-lenz/typedoc/issues/42
  
* Inherited from [BaseClass](_classes_.baseclass.md).[caTest](_classes_.baseclass.md#catest)
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
* Inherited from [BaseClass](_classes_.baseclass.md).[getInstance](_classes_.baseclass.md#getinstance)
* Defined in [classes.ts:159](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L159)

#### Returns: [BaseClass](_classes_.baseclass.md)
An instance of BaseClass.


### Static getName(): string
This is a simple static member function.Static functions should not be inherited. This class has amember with the same name, both should be documented.  
* Inherited from [BaseClass](_classes_.baseclass.md).[getName](_classes_.baseclass.md#getname-1)
* Defined in [classes.ts:115](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L115)

#### Returns: string
Return the name.



Generated using [TypeDoc](http://typedoc.io)
