# Interface NodeArray<T>


### Type parameters

* #### T

### Extends
* Array<T>
* [TextRange](ts.textrange.md)

### Indexable
[n: number] T


## Index

### Properties
* [Array](ts.nodearray.md#array)
* [end](ts.nodearray.md#end)
* [hasTrailingComma](ts.nodearray.md#hastrailingcomma)
* [length](ts.nodearray.md#length)
* [pos](ts.nodearray.md#pos)

### Methods
* [concat](ts.nodearray.md#concat)
* [every](ts.nodearray.md#every)
* [filter](ts.nodearray.md#filter)
* [forEach](ts.nodearray.md#foreach)
* [indexOf](ts.nodearray.md#indexof)
* [join](ts.nodearray.md#join)
* [lastIndexOf](ts.nodearray.md#lastindexof)
* [map](ts.nodearray.md#map)
* [pop](ts.nodearray.md#pop)
* [push](ts.nodearray.md#push)
* [reduce](ts.nodearray.md#reduce)
* [reduceRight](ts.nodearray.md#reduceright)
* [reverse](ts.nodearray.md#reverse)
* [shift](ts.nodearray.md#shift)
* [slice](ts.nodearray.md#slice)
* [some](ts.nodearray.md#some)
* [sort](ts.nodearray.md#sort)
* [splice](ts.nodearray.md#splice)
* [toLocaleString](ts.nodearray.md#tolocalestring)
* [toString](ts.nodearray.md#tostring)
* [unshift](ts.nodearray.md#unshift)

## Properties

### Array: ArrayConstructor

* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1172


### end: number

* Inherited from [TextRange](ts.textrange.md).[end](ts.textrange.md#end)
* Defined in [lib/typescript/tsc.d.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L15)


### Optional hasTrailingComma: boolean

* Defined in [lib/typescript/tsc.d.ts:376](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L376)


### length: number
Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
* Inherited from Array.length
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1012


### pos: number

* Inherited from [TextRange](ts.textrange.md).[pos](ts.textrange.md#pos)
* Defined in [lib/typescript/tsc.d.ts:14](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/typescript/tsc.d.ts#L14)


## Methods

### concat<U>(...items: U[]): T[]concat(...items: T[]): T[]
Combines two or more arrays.  
* Inherited from Array.concat
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1031


#### Type parameters

* #### U T[]

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...items | U[]| Additional items to add to the end of array1. |

#### Returns: T[]
Combines two or more arrays.  
* Inherited from Array.concat
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1036


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...items | T[]| Additional items to add to the end of array1. |

#### Returns: T[]

### every(callbackfn: (value: T, index: number, array: T[])=> boolean, thisArg?: any): boolean
Determines whether all the members of an array satisfy the specified test.  
* Inherited from Array.every
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1102


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: T, index: number, array: T[])=> boolean| A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: boolean

### filter(callbackfn: (value: T, index: number, array: T[])=> boolean, thisArg?: any): T[]
Returns the elements of an array that meet the condition specified in a callback function.  
* Inherited from Array.filter
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1130


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: T, index: number, array: T[])=> boolean| A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: T[]

### forEach(callbackfn: (value: T, index: number, array: T[])=> void, thisArg?: any): void
Performs the specified action for each element in an array.  
* Inherited from Array.forEach
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1116


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: T, index: number, array: T[])=> void| A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: void

### indexOf(searchElement: T, fromIndex?: number): number
Returns the index of the first occurrence of a value in an array.  
* Inherited from Array.indexOf
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1088


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| searchElement | T| The value to locate in the array. |
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

### lastIndexOf(searchElement: T, fromIndex?: number): number
Returns the index of the last occurrence of a specified value in an array.  
* Inherited from Array.lastIndexOf
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1095


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| searchElement | T| The value to locate in the array. |
| fromIndex? | number| The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns: number

### map<U>(callbackfn: (value: T, index: number, array: T[])=> U, thisArg?: any): U[]
Calls a defined callback function on each element of an array, and returns an array that contains the results.  
* Inherited from Array.map
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1123


#### Type parameters

* #### U

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: T, index: number, array: T[])=> U| A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: U[]

### pop(): T
Removes the last element from an array and returns it.  
* Inherited from Array.pop
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1026

#### Returns: T

### push(...items: T[]): number
Appends new elements to an array, and returns the new length of the array.  
* Inherited from Array.push
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1022


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...items | T[]| New elements of the Array. |

#### Returns: number

### reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[])=> T, initialValue?: T): Treduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[])=> U, initialValue: U): U
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.  
* Inherited from Array.reduce
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1137


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: T[])=> T| A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| initialValue? | T| If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns: T
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.  
* Inherited from Array.reduce
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1143


#### Type parameters

* #### U

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (previousValue: U, currentValue: T, currentIndex: number, array: T[])=> U| A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| initialValue | U| If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns: U

### reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[])=> T, initialValue?: T): TreduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[])=> U, initialValue: U): U
Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.  
* Inherited from Array.reduceRight
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1150


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: T[])=> T| A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| initialValue? | T| If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns: T
Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.  
* Inherited from Array.reduceRight
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1156


#### Type parameters

* #### U

#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (previousValue: U, currentValue: T, currentIndex: number, array: T[])=> U| A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| initialValue | U| If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns: U

### reverse(): T[]
Reverses the elements in an Array.  
* Inherited from Array.reverse
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1045

#### Returns: T[]

### shift(): T
Removes the first element from an array and returns it.  
* Inherited from Array.shift
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1049

#### Returns: T

### slice(start?: number, end?: number): T[]
Returns a section of an array.  
* Inherited from Array.slice
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1055


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| start? | number| The beginning of the specified portion of the array. |
| end? | number| The end of the specified portion of the array. |

#### Returns: T[]

### some(callbackfn: (value: T, index: number, array: T[])=> boolean, thisArg?: any): boolean
Determines whether the specified callback function returns true for any element of an array.  
* Inherited from Array.some
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1109


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callbackfn | (value: T, index: number, array: T[])=> boolean| A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array. |
| thisArg? | any| An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns: boolean

### sort(compareFn?: (a: T, b: T)=> number): T[]
Sorts an array.  
* Inherited from Array.sort
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1061


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| compareFn? | (a: T, b: T)=> number| The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order. |

#### Returns: T[]

### splice(start: number): T[]splice(start: number, deleteCount: number, ...items: T[]): T[]
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.  
* Inherited from Array.splice
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1067


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| start | number| The zero-based location in the array from which to start removing elements. |

#### Returns: T[]
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.  
* Inherited from Array.splice
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1075


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| start | number| The zero-based location in the array from which to start removing elements. |
| deleteCount | number| The number of elements to remove. |
| ...items | T[]| Elements to insert into the array in place of the deleted elements. |

#### Returns: T[]

### toLocaleString(): string
  
* Inherited from Array.toLocaleString
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1017

#### Returns: string

### toString(): string
Returns a string representation of an array.  
* Inherited from Array.toString
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1016

#### Returns: string

### unshift(...items: T[]): number
Inserts new elements at the start of an array.  
* Inherited from Array.unshift
* Defined in C:/develop/src/typedoc-markdown-theme/node_modules/typescript/lib/lib.d.ts:1081


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| ...items | T[]| Elements to insert at the start of the Array. |

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
