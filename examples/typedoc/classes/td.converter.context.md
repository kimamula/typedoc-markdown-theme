# Class Context
The context describes the current state the converter is in.

## Index

### Constructors
* [constructor](td.converter.context.md#constructor)

### Properties
* [checker](td.converter.context.md#checker)
* [converter](td.converter.context.md#converter)
* [externalPattern](td.converter.context.md#externalpattern)
* [fileNames](td.converter.context.md#filenames)
* [inheritParent](td.converter.context.md#inheritparent)
* [inherited](td.converter.context.md#inherited)
* [inheritedChildren](td.converter.context.md#inheritedchildren)
* [isDeclaration](td.converter.context.md#isdeclaration)
* [isExternal](td.converter.context.md#isexternal)
* [isInherit](td.converter.context.md#isinherit)
* [program](td.converter.context.md#program)
* [project](td.converter.context.md#project)
* [scope](td.converter.context.md#scope)
* [symbolID](td.converter.context.md#symbolid)
* [typeArguments](td.converter.context.md#typearguments)
* [typeParameters](td.converter.context.md#typeparameters)
* [visitStack](td.converter.context.md#visitstack)

### Methods
* [extractTypeParameters](td.converter.context.md#extracttypeparameters)
* [getCompilerOptions](td.converter.context.md#getcompileroptions)
* [getLogger](td.converter.context.md#getlogger)
* [getOptions](td.converter.context.md#getoptions)
* [getSymbolID](td.converter.context.md#getsymbolid)
* [getTypeAtLocation](td.converter.context.md#gettypeatlocation)
* [inherit](td.converter.context.md#inherit)
* [registerReflection](td.converter.context.md#registerreflection)
* [trigger](td.converter.context.md#trigger)
* [withScope](td.converter.context.md#withscope)
* [withSourceFile](td.converter.context.md#withsourcefile)

## Constructors

### new Context(converter: [Converter](td.converter.converter.md), fileNames: string[], checker: [TypeChecker](../interfaces/ts.typechecker.md), program: [Program](../interfaces/ts.program.md)): [Context](td.converter.context.md)
Create a new Context instance.  
* Defined in [td/converter/Context.ts:91](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L91)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| converter | [Converter](td.converter.converter.md)| The converter instance that has created the context. |
| fileNames | string[]| A list of all files that have been passed to the TypeScript compiler. |
| checker | [TypeChecker](../interfaces/ts.typechecker.md)| The TypeChecker instance returned by the TypeScript compiler. |
| program | [Program](../interfaces/ts.program.md)|  |

#### Returns: [Context](td.converter.context.md)

## Properties

### checker: [TypeChecker](../interfaces/ts.typechecker.md)
The TypeChecker instance returned by the TypeScript compiler.
* Defined in [td/converter/Context.ts:21](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L21)


### converter: [Converter](td.converter.converter.md)
The converter instance that has created the context.
* Defined in [td/converter/Context.ts:11](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L11)


### Private externalPattern: \{match: ()\}
The pattern that should be used to flag external source files.
* Defined in [td/converter/Context.ts:91](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L91)


### fileNames: string[]
A list of all files that have been passed to the TypeScript compiler.
* Defined in [td/converter/Context.ts:16](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L16)


### inheritParent: [Node](../interfaces/ts.node.md)
The node that has started the inheritance mode.
* Defined in [td/converter/Context.ts:66](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L66)


### inherited: string[]
The names of the children of the scope before inheritance has been started.
* Defined in [td/converter/Context.ts:76](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L76)


### inheritedChildren: number[]
List symbol ids of inherited children already visited while inheriting.
* Defined in [td/converter/Context.ts:71](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L71)


### isDeclaration: boolean
Is the current source file a declaration file?
* Defined in [td/converter/Context.ts:46](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L46)


### isExternal: boolean
Is the current source file marked as being external?
* Defined in [td/converter/Context.ts:41](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L41)


### isInherit: boolean
Is the converter in inheritance mode?
* Defined in [td/converter/Context.ts:61](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L61)


### program: [Program](../interfaces/ts.program.md)
The program that is currently processed.
* Defined in [td/converter/Context.ts:26](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L26)


### project: [ProjectReflection](td.models.projectreflection.md)
The project that is currently processed.
* Defined in [td/converter/Context.ts:31](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L31)


### scope: [Reflection](td.models.reflection.md)
The scope or parent reflection that is currently processed.
* Defined in [td/converter/Context.ts:36](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L36)


### Private symbolID: number
Next free symbol id used by [[getSymbolID]].
* Defined in [td/converter/Context.ts:86](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L86)


### typeArguments: [Type](td.models.type.md)[]
The currently set type arguments.
* Defined in [td/converter/Context.ts:56](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L56)


### typeParameters: [Map](../interfaces/ts.map.md)<[Type](td.models.type.md)>
The currently set type parameters.
* Defined in [td/converter/Context.ts:51](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L51)


### visitStack: [Node](../interfaces/ts.node.md)[]
A list of parent nodes that have been passed to the visit function.
* Defined in [td/converter/Context.ts:81](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L81)


## Methods

### Private extractTypeParameters(parameters: [NodeArray](../interfaces/ts.nodearray.md)<[TypeParameterDeclaration](../interfaces/ts.typeparameterdeclaration.md)>, preserve?: boolean): [Map](../interfaces/ts.map.md)<[Type](td.models.type.md)>
Convert the given list of type parameter declarations into a type mapping.  
* Defined in [td/converter/Context.ts:365](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L365)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| parameters | [NodeArray](../interfaces/ts.nodearray.md)<[TypeParameterDeclaration](../interfaces/ts.typeparameterdeclaration.md)>| The list of type parameter declarations that should be converted. |
| preserve? | boolean| Should the currently set type parameters of the context be preserved? |

#### Returns: [Map](../interfaces/ts.map.md)<[Type](td.models.type.md)>
The resulting type mapping.


### getCompilerOptions(): [CompilerOptions](../interfaces/ts.compileroptions.md)
Return the compiler options.  
* Defined in [td/converter/Context.ts:131](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L131)

#### Returns: [CompilerOptions](../interfaces/ts.compileroptions.md)

### getLogger(): [Logger](td.logger.md)
Return the current logger instance.  
* Defined in [td/converter/Context.ts:162](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L162)

#### Returns: [Logger](td.logger.md)
The current logger instance.


### getOptions(): IOptions
Return the current TypeDoc options object.  
* Defined in [td/converter/Context.ts:123](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L123)

#### Returns: IOptions

### getSymbolID(symbol: [Symbol](../interfaces/ts.symbol.md)): number
Return the symbol id of the given symbol.The compiler sometimes does not assign an id to symbols, this method makes sure that we have one.It will assign negative ids if they are not set.  
* Defined in [td/converter/Context.ts:176](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L176)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| symbol | [Symbol](../interfaces/ts.symbol.md)| The symbol whose id should be returned. |

#### Returns: number
The id of the given symbol.


### getTypeAtLocation(node: [Node](../interfaces/ts.node.md)): [Type](../interfaces/ts.type.md)
Return the type declaration of the given node.  
* Defined in [td/converter/Context.ts:142](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L142)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [Node](../interfaces/ts.node.md)| The TypeScript node whose type should be resolved. |

#### Returns: [Type](../interfaces/ts.type.md)
The type declaration of the given node.


### inherit(baseNode: [Node](../interfaces/ts.node.md), typeArguments?: [NodeArray](../interfaces/ts.nodearray.md)<[TypeNode](../interfaces/ts.typenode.md)>): [Reflection](td.models.reflection.md)
Inherit the children of the given TypeScript node to the current scope.  
* Defined in [td/converter/Context.ts:306](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L306)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| baseNode | [Node](../interfaces/ts.node.md)| The node whose children should be inherited. |
| typeArguments? | [NodeArray](../interfaces/ts.nodearray.md)<[TypeNode](../interfaces/ts.typenode.md)>| The type arguments that apply while inheriting the given node. |

#### Returns: [Reflection](td.models.reflection.md)
The resulting reflection / the current scope.


### registerReflection(reflection: [Reflection](td.models.reflection.md), node: [Node](../interfaces/ts.node.md), symbol?: [Symbol](../interfaces/ts.symbol.md)): void
Register a newly generated reflection.Ensures that the reflection is both listed in [[Project.reflections]] and[[Project.symbolMapping]] if applicable.  
* Defined in [td/converter/Context.ts:193](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L193)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| reflection | [Reflection](td.models.reflection.md)| The reflection that should be registered. |
| node | [Node](../interfaces/ts.node.md)| The node the given reflection was resolved from. |
| symbol? | [Symbol](../interfaces/ts.symbol.md)| The symbol the given reflection was resolved from. |

#### Returns: void

### trigger(name: string, reflection: [Reflection](td.models.reflection.md), node?: [Node](../interfaces/ts.node.md)): void
Trigger a node reflection event.All events are dispatched on the current converter instance.  
* Defined in [td/converter/Context.ts:212](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L212)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| name | string| The name of the event that should be triggered. |
| reflection | [Reflection](td.models.reflection.md)| The triggering reflection. |
| node? | [Node](../interfaces/ts.node.md)| The triggering TypeScript node if available. |

#### Returns: void

### withScope(scope: [Reflection](td.models.reflection.md), callback: Function): anywithScope(scope: [Reflection](td.models.reflection.md), parameters: [NodeArray](../interfaces/ts.nodearray.md)<[TypeParameterDeclaration](../interfaces/ts.typeparameterdeclaration.md)>, callback: Function): anywithScope(scope: [Reflection](td.models.reflection.md), parameters: [NodeArray](../interfaces/ts.nodearray.md)<[TypeParameterDeclaration](../interfaces/ts.typeparameterdeclaration.md)>, preserve: boolean, callback: Function): any
Run the given callback with the scope of the context set to the given reflection.  
* Defined in [td/converter/Context.ts:258](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L258)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| scope | [Reflection](td.models.reflection.md)| The reflection that should be set as the scope of the context while the callback is invoked. |
| callback | Function| The callback function that should be executed with the changed context. |

#### Returns: any
Run the given callback with the scope of the context set to the given reflection.  
* Defined in [td/converter/Context.ts:264](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L264)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| scope | [Reflection](td.models.reflection.md)| The reflection that should be set as the scope of the context while the callback is invoked. |
| parameters | [NodeArray](../interfaces/ts.nodearray.md)<[TypeParameterDeclaration](../interfaces/ts.typeparameterdeclaration.md)>| An array of type parameters that should be set on the context while the callback is invoked. |
| callback | Function| The callback function that should be executed with the changed context. |

#### Returns: any
Run the given callback with the scope of the context set to the given reflection.  
* Defined in [td/converter/Context.ts:271](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L271)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| scope | [Reflection](td.models.reflection.md)| The reflection that should be set as the scope of the context while the callback is invoked. |
| parameters | [NodeArray](../interfaces/ts.nodearray.md)<[TypeParameterDeclaration](../interfaces/ts.typeparameterdeclaration.md)>| An array of type parameters that should be set on the context while the callback is invoked. |
| preserve | boolean| Should the currently set type parameters of the context be preserved? |
| callback | Function| The callback function that should be executed with the changed context. |

#### Returns: any

### withSourceFile(node: [SourceFile](../interfaces/ts.sourcefile.md), callback: Function): void
Run the given callback with the context configured for the given source file.  
* Defined in [td/converter/Context.ts:223](https://github.com/kimamula/typedoc/blob/HEAD/src/td/converter/Context.ts#L223)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| node | [SourceFile](../interfaces/ts.sourcefile.md)| The TypeScript node containing the source file declaration. |
| callback | Function| The callback that should be executed. |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
