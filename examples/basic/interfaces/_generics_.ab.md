# Interface AB<T>
A generic interface extending two other generic interfacesand setting one of the type parameters.

### Type parameters

* #### TThe leftover generic type parameter.

### Extends
* [A](_generics_.a.md)<T>
* [B](_generics_.b.md)<T, boolean>

## Index

### Methods
* [getC](_generics_.ab.md#getc)
* [getT](_generics_.ab.md#gett)
* [setT](_generics_.ab.md#sett)

## Methods

### getC(): boolean
A generic member function.  
* Inherited from [B](_generics_.b.md).[getC](_generics_.b.md#getc)
* Defined in [generics.ts:48](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/generics.ts#L48)

#### Returns: boolean
A generic return value.


### getT(): T
A generic member function.  
* Inherited from [A](_generics_.a.md).[getT](_generics_.a.md#gett)
* Defined in [generics.ts:24](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/generics.ts#L24)

#### Returns: T
A generic return value.


### setT(value: T): void
A generic member function.  
* Inherited from [B](_generics_.b.md).[setT](_generics_.b.md#sett)
* Defined in [generics.ts:41](https://github.com/kimamula/typedoc/blob/HEAD/examples/basic/src/generics.ts#L41)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | T| A generic parameter. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
