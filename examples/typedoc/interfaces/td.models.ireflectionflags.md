# Interface IReflectionFlags


### Extends
* Array<string>

### Indexable
[n: number] string


## Index

### Properties
* [Array](td.models.ireflectionflags.md#array)
* [flags](td.models.ireflectionflags.md#flags)
* [hasExportAssignment](td.models.ireflectionflags.md#hasexportassignment)
* [isConstructorProperty](td.models.ireflectionflags.md#isconstructorproperty)
* [isExported](td.models.ireflectionflags.md#isexported)
* [isExternal](td.models.ireflectionflags.md#isexternal)
* [isOptional](td.models.ireflectionflags.md#isoptional)
* [isPrivate](td.models.ireflectionflags.md#isprivate)
* [isProtected](td.models.ireflectionflags.md#isprotected)
* [isPublic](td.models.ireflectionflags.md#ispublic)
* [isRest](td.models.ireflectionflags.md#isrest)
* [isStatic](td.models.ireflectionflags.md#isstatic)
* [length](td.models.ireflectionflags.md#length)

### Methods
* [concat](td.models.ireflectionflags.md#concat)
* [every](td.models.ireflectionflags.md#every)
* [filter](td.models.ireflectionflags.md#filter)
* [forEach](td.models.ireflectionflags.md#foreach)
* [indexOf](td.models.ireflectionflags.md#indexof)
* [join](td.models.ireflectionflags.md#join)
* [lastIndexOf](td.models.ireflectionflags.md#lastindexof)
* [map](td.models.ireflectionflags.md#map)
* [pop](td.models.ireflectionflags.md#pop)
* [push](td.models.ireflectionflags.md#push)
* [reduce](td.models.ireflectionflags.md#reduce)
* [reduceRight](td.models.ireflectionflags.md#reduceright)
* [reverse](td.models.ireflectionflags.md#reverse)
* [shift](td.models.ireflectionflags.md#shift)
* [slice](td.models.ireflectionflags.md#slice)
* [some](td.models.ireflectionflags.md#some)
* [sort](td.models.ireflectionflags.md#sort)
* [splice](td.models.ireflectionflags.md#splice)
* [toLocaleString](td.models.ireflectionflags.md#tolocalestring)
* [toString](td.models.ireflectionflags.md#tostring)
* [unshift](td.models.ireflectionflags.md#unshift)

## Properties

### Array: ArrayConstructor

* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1172


### Optional flags: [ReflectionFlag](../enums/td.models.reflectionflag.md)

* Defined in [td/models/Reflection.ts:95](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L95)


### Optional hasExportAssignment: boolean

* Defined in [td/models/Reflection.ts:143](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L143)


### Optional isConstructorProperty: boolean

* Defined in [td/models/Reflection.ts:145](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L145)


### Optional isExported: boolean
Is this member exported?
* Defined in [td/models/Reflection.ts:120](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L120)


### Optional isExternal: boolean
Is this a declaration from an external document?
* Defined in [td/models/Reflection.ts:125](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L125)


### Optional isOptional: boolean
Whether this reflection is an optional component or not.Applies to function parameters and object members.
* Defined in [td/models/Reflection.ts:132](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L132)


### Optional isPrivate: boolean
Is this a private member?
* Defined in [td/models/Reflection.ts:100](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L100)


### Optional isProtected: boolean
Is this a protected member?
* Defined in [td/models/Reflection.ts:105](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L105)


### Optional isPublic: boolean
Is this a public member?
* Defined in [td/models/Reflection.ts:110](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L110)


### Optional isRest: boolean
Whether it's a rest parameter, like `foo(...params);`.
* Defined in [td/models/Reflection.ts:138](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L138)


### Optional isStatic: boolean
Is this a static member?
* Defined in [td/models/Reflection.ts:115](https://github.com/kimamula/typedoc/blob/HEAD/src/td/models/Reflection.ts#L115)


### length: number
Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
* Inherited from Array.length
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1012


## Methods

### concat<U>(...items: U[]): string[]concat(...items: string[]): string[]
Combines two or more arrays.  
* Inherited from Array.concat
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1031


#### Type parameters

* #### U string[]

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...items | U[]| Additional items to add to the end of array1. |

#### Returns: string[]
Combines two or more arrays.  
* Inherited from Array.concat
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1036


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...items | string[]| Additional items to add to the end of array1. |

#### Returns: string[]

### every(callbackfn: (value: string, index: number, array: string[])=> boolean, thisArg?: any): boolean
Determines whether all the members of an array satisfy the specified test.  
* Inherited from Array.every
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1102


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: string, index: number, array: string[])=> boolean| A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: boolean

### filter(callbackfn: (value: string, index: number, array: string[])=> boolean, thisArg?: any): string[]
Returns the elements of an array that meet the condition specified in a callback function.  
* Inherited from Array.filter
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1130


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: string, index: number, array: string[])=> boolean| A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: string[]

### forEach(callbackfn: (value: string, index: number, array: string[])=> void, thisArg?: any): void
Performs the specified action for each element in an array.  
* Inherited from Array.forEach
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1116


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: string, index: number, array: string[])=> void| A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: void

### indexOf(searchElement: string, fromIndex?: number): number
Returns the index of the first occurrence of a value in an array.  
* Inherited from Array.indexOf
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1088


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| searchElement | string| The value to locate in the array. |
| fromIndex? | number| The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns: number

### join(separator?: string): string
Adds all the elements of an array separated by the specified separator string.  
* Inherited from Array.join
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1041


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| separator? | string| A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

#### Returns: string

### lastIndexOf(searchElement: string, fromIndex?: number): number
Returns the index of the last occurrence of a specified value in an array.  
* Inherited from Array.lastIndexOf
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1095


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| searchElement | string| The value to locate in the array. |
| fromIndex? | number| The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns: number

### map<U>(callbackfn: (value: string, index: number, array: string[])=> U, thisArg?: any): U[]
Calls a defined callback function on each element of an array, and returns an array that contains the results.  
* Inherited from Array.map
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1123


#### Type parameters

* #### U

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: string, index: number, array: string[])=> U| A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: U[]

### pop(): string
Removes the last element from an array and returns it.  
* Inherited from Array.pop
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1026

#### Returns: string

### push(...items: string[]): number
Appends new elements to an array, and returns the new length of the array.  
* Inherited from Array.push
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1022


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...items | string[]| New elements of the Array. |

#### Returns: number

### reduce(callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[])=> string, initialValue?: string): stringreduce<U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: string[])=> U, initialValue: U): U
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.  
* Inherited from Array.reduce
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1137


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (previousValue: string, currentValue: string, currentIndex: number, array: string[])=> string| A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| initialValue? | string| If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns: string
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.  
* Inherited from Array.reduce
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1143


#### Type parameters

* #### U

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (previousValue: U, currentValue: string, currentIndex: number, array: string[])=> U| A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| initialValue | U| If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns: U

### reduceRight(callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[])=> string, initialValue?: string): stringreduceRight<U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: string[])=> U, initialValue: U): U
Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.  
* Inherited from Array.reduceRight
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1150


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (previousValue: string, currentValue: string, currentIndex: number, array: string[])=> string| A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| initialValue? | string| If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns: string
Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.  
* Inherited from Array.reduceRight
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1156


#### Type parameters

* #### U

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (previousValue: U, currentValue: string, currentIndex: number, array: string[])=> U| A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| initialValue | U| If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns: U

### reverse(): string[]
Reverses the elements in an Array.  
* Inherited from Array.reverse
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1045

#### Returns: string[]

### shift(): string
Removes the first element from an array and returns it.  
* Inherited from Array.shift
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1049

#### Returns: string

### slice(start?: number, end?: number): string[]
Returns a section of an array.  
* Inherited from Array.slice
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1055


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| start? | number| The beginning of the specified portion of the array. |
| end? | number| The end of the specified portion of the array. |

#### Returns: string[]

### some(callbackfn: (value: string, index: number, array: string[])=> boolean, thisArg?: any): boolean
Determines whether the specified callback function returns true for any element of an array.  
* Inherited from Array.some
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1109


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: string, index: number, array: string[])=> boolean| A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: boolean

### sort(compareFn?: (a: string, b: string)=> number): string[]
Sorts an array.  
* Inherited from Array.sort
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1061


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| compareFn? | (a: string, b: string)=> number| The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order. |

#### Returns: string[]

### splice(start: number): string[]splice(start: number, deleteCount: number, ...items: string[]): string[]
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.  
* Inherited from Array.splice
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1067


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| start | number| The zero-based location in the array from which to start removing elements. |

#### Returns: string[]
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.  
* Inherited from Array.splice
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1075


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| start | number| The zero-based location in the array from which to start removing elements. |
| deleteCount | number| The number of elements to remove. |
| ...items | string[]| Elements to insert into the array in place of the deleted elements. |

#### Returns: string[]

### toLocaleString(): string
  
* Inherited from Array.toLocaleString
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1017

#### Returns: string

### toString(): string
Returns a string representation of an array.  
* Inherited from Array.toString
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1016

#### Returns: string

### unshift(...items: string[]): number
Inserts new elements at the start of an array.  
* Inherited from Array.unshift
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1081


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...items | string[]| Elements to insert at the start of the Array. |

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
