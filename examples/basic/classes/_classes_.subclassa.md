# Class SubClassA
This is a class that extends another class.This class has no own constructor, so its constructor should be inheritedfrom BaseClass.

### Extends
* [BaseClass](_classes_.baseclass.md)

### Implements
* [INameInterface](../interfaces/_classes_.inameinterface.md)
* [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md)

## Index

### Constructors
* [constructor](_classes_.subclassa.md#constructor)

### Properties
* [kind](_classes_.subclassa.md#kind)
* [name](_classes_.subclassa.md#name)
* [instance](_classes_.subclassa.md#instance)
* [instances](_classes_.subclassa.md#instances)

### Accessors
* [nameProperty](_classes_.subclassa.md#nameproperty)
* [readOnlyNameProperty](_classes_.subclassa.md#readonlynameproperty)
* [writeOnlyNameProperty](_classes_.subclassa.md#writeonlynameproperty)

### Methods
* [arrowFunction](_classes_.subclassa.md#arrowfunction)
* [getName](_classes_.subclassa.md#getname)
* [print](_classes_.subclassa.md#print)
* [printName](_classes_.subclassa.md#printname)
* [setName](_classes_.subclassa.md#setname)
* [caTest](_classes_.subclassa.md#catest)
* [getInstance](_classes_.subclassa.md#getinstance)
* [getName](_classes_.subclassa.md#getname-1)

## Constructors

### new SubClassA(name: string): [SubClassA](_classes_.subclassa.md)new SubClassA(source: [BaseClass](_classes_.baseclass.md)): [SubClassA](_classes_.subclassa.md)
  
* Inherited from [BaseClass](_classes_.baseclass.md).[constructor](_classes_.baseclass.md#constructor)
* Defined in [classes.ts:76](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L76)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string|  |

#### Returns: [SubClassA](_classes_.subclassa.md)
  
* Inherited from [BaseClass](_classes_.baseclass.md).[constructor](_classes_.baseclass.md#constructor)
* Defined in [classes.ts:79](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L79)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| source | [BaseClass](_classes_.baseclass.md)|  |

#### Returns: [SubClassA](_classes_.subclassa.md)

## Properties

### Protected kind: number
This is a simple protected member.
* Inherited from [BaseClass](_classes_.baseclass.md).[kind](_classes_.baseclass.md#kind)
* Defined in [classes.ts:63](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L63)


### name: string
This is a simple public member.
* Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[name](../interfaces/_classes_.iprintnameinterface.md#name)
* Inherited from [BaseClass](_classes_.baseclass.md).[name](_classes_.baseclass.md#name)
* Defined in [classes.ts:58](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L58)


### Static instance: [BaseClass](_classes_.baseclass.md)
This is a static member.Static members should not be inherited.
* Inherited from [BaseClass](_classes_.baseclass.md).[instance](_classes_.baseclass.md#instance)
* Defined in [classes.ts:70](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L70)


### Static instances: [BaseClass](_classes_.baseclass.md)[]

* Inherited from [BaseClass](_classes_.baseclass.md).[instances](_classes_.baseclass.md#instances)
* Defined in [classes.ts:71](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L71)


## Accessors

### nameProperty
* get nameProperty(): string
* set nameProperty(value: string): void
Returns the name. See [[BaseClass.name]].  
* Defined in [classes.ts:219](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L219)

#### Returns: string
The return value.

Sets the name. See [[BaseClass.name]].  
* Defined in [classes.ts:229](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L229)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | string| The new name. |

#### Returns: void
The return value.


### readOnlyNameProperty
* get readOnlyNameProperty(): string
Returns the name. See [[BaseClass.name]].  
* Defined in [classes.ts:239](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L239)

#### Returns: string
The return value.


### writeOnlyNameProperty
* set writeOnlyNameProperty(value: string): void
Sets the name. See [[BaseClass.name]].  
* Defined in [classes.ts:250](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L250)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | string| The new name. |

#### Returns: void
The return value.


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

### getName(): string
This is a simple member function.It should be inherited by all subclasses. This class has a staticmember with the same name, both should be documented.  
* Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[getName](../interfaces/_classes_.iprintnameinterface.md#getname)
* Inherited from [BaseClass](_classes_.baseclass.md).[getName](_classes_.baseclass.md#getname)
* Defined in [classes.ts:102](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L102)

#### Returns: string
Return the name.


### print(value: string): void
This is a simple interface function.  
* Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[print](../interfaces/_classes_.iprintnameinterface.md#print)
* Defined in [classes.ts:203](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L203)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | string|  |

#### Returns: void

### printName(): void
This is a interface function of IPrintNameInterface  
* Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[printName](../interfaces/_classes_.iprintnameinterface.md#printname)
* Defined in [classes.ts:209](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/classes.ts#L209)

#### Returns: void

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
