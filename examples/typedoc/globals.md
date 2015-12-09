#  TypeDoc Documentation


## Index

### Modules
* ["assert"](modules/_assert_.md)
* ["buffer"](modules/_buffer_.md)
* ["child_process"](modules/_child_process_.md)
* ["cluster"](modules/_cluster_.md)
* ["crypto"](modules/_crypto_.md)
* ["dgram"](modules/_dgram_.md)
* ["dns"](modules/_dns_.md)
* ["domain"](modules/_domain_.md)
* ["events"](modules/_events_.md)
* ["fs"](modules/_fs_.md)
* ["fs-extra"](modules/_fs_extra_.md)
* ["handlebars"](modules/_handlebars_.md)
* ["highlight.js"](modules/_highlight_js_.md)
* ["http"](modules/_http_.md)
* ["https"](modules/_https_.md)
* ["marked"](modules/_marked_.md)
* ["minimatch"](modules/_minimatch_.md)
* ["net"](modules/_net_.md)
* ["os"](modules/_os_.md)
* ["path"](modules/_path_.md)
* ["punycode"](modules/_punycode_.md)
* ["querystring"](modules/_querystring_.md)
* ["readline"](modules/_readline_.md)
* ["repl"](modules/_repl_.md)
* ["stream"](modules/_stream_.md)
* ["string_decoder"](modules/_string_decoder_.md)
* ["tls"](modules/_tls_.md)
* ["tty"](modules/_tty_.md)
* ["url"](modules/_url_.md)
* ["util"](modules/_util_.md)
* ["vm"](modules/_vm_.md)
* ["zlib"](modules/_zlib_.md)
* [NodeJS](modules/nodejs.md)
* [hbs](modules/hbs.md)
* [td](modules/td.md)
* [ts](modules/ts.md)

### Interfaces
* [Buffer](interfaces/buffer.md)
* [HandlebarsCommon](interfaces/handlebarscommon.md)
* [HandlebarsRuntimeStatic](interfaces/handlebarsruntimestatic.md)
* [HandlebarsStatic](interfaces/handlebarsstatic.md)
* [HandlebarsTemplatable](interfaces/handlebarstemplatable.md)
* [HandlebarsTemplateDelegate](interfaces/handlebarstemplatedelegate.md)
* [HandlebarsTemplates](interfaces/handlebarstemplates.md)
* [Logger](interfaces/logger.md)
* [MarkedOptions](interfaces/markedoptions.md)
* [MarkedStatic](interfaces/markedstatic.md)
* [NodeBuffer](interfaces/nodebuffer.md)

### Variables
* [Handlebars](globals.md#handlebars)
* [SlowBuffer](globals.md#slowbuffer)
* [___dirname](globals.md#___dirname)
* [___filename](globals.md#___filename)
* [exports](globals.md#exports)
* [global](globals.md#global)
* [marked](globals.md#marked)
* [module](globals.md#module)
* [process](globals.md#process)
* [require](globals.md#require)

### Functions
* [clearImmediate](globals.md#clearimmediate)
* [clearInterval](globals.md#clearinterval)
* [clearTimeout](globals.md#cleartimeout)
* [setImmediate](globals.md#setimmediate)
* [setInterval](globals.md#setinterval)
* [setTimeout](globals.md#settimeout)

## Variables

### Handlebars: [HandlebarsStatic](interfaces/handlebarsstatic.md)

* Defined in [lib/handlebars/handlebars.d.ts:8](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/handlebars/handlebars.d.ts#L8)


### SlowBuffer: \{constructor: (), prototype: [Buffer](interfaces/buffer.md), byteLength: (), concat: (), isBuffer: ()\}

* Defined in [lib/node/node.d.ts:50](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L50)


### ___dirname: string

* Defined in [lib/node/node.d.ts:21](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L21)


### ___filename: string

* Defined in [lib/node/node.d.ts:20](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L20)


### exports: any

* Defined in [lib/node/node.d.ts:49](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L49)


### global: any

* Defined in [lib/node/node.d.ts:18](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L18)


### marked: [MarkedStatic](interfaces/markedstatic.md)

* Defined in [lib/marked/marked.d.ts:121](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/marked/marked.d.ts#L121)


### module: \{children: any[], exports: any, filename: string, id: string, loaded: boolean, parent: any, require: ()\}

* Defined in [lib/node/node.d.ts:38](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L38)


### process: [Process](interfaces/nodejs.process.md)
*GLOBAL                      **
* Defined in [lib/node/node.d.ts:17](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L17)


### require: (id: string)=> any\{cache: any, extensions: any, main: any, resolve: ()\}

* Defined in [lib/node/node.d.ts:30](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L30)


## Functions

### clearImmediate(immediateId: any): void
  
* Defined in [lib/node/node.d.ts:28](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L28)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| immediateId | any|  |

#### Returns: void

### clearInterval(intervalId: [Timer](interfaces/nodejs.timer.md)): void
  
* Defined in [lib/node/node.d.ts:26](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L26)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| intervalId | [Timer](interfaces/nodejs.timer.md)|  |

#### Returns: void

### clearTimeout(timeoutId: [Timer](interfaces/nodejs.timer.md)): void
  
* Defined in [lib/node/node.d.ts:24](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L24)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| timeoutId | [Timer](interfaces/nodejs.timer.md)|  |

#### Returns: void

### setImmediate(callback: (...args: any[])=> void, ...args: any[]): any
  
* Defined in [lib/node/node.d.ts:27](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L27)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | (...args: any[])=> void|  |
| ...args | any[]|  |

#### Returns: any

### setInterval(callback: (...args: any[])=> void, ms: number, ...args: any[]): [Timer](interfaces/nodejs.timer.md)
  
* Defined in [lib/node/node.d.ts:25](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L25)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | (...args: any[])=> void|  |
| ms | number|  |
| ...args | any[]|  |

#### Returns: [Timer](interfaces/nodejs.timer.md)

### setTimeout(callback: (...args: any[])=> void, ms: number, ...args: any[]): [Timer](interfaces/nodejs.timer.md)
  
* Defined in [lib/node/node.d.ts:23](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L23)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| callback | (...args: any[])=> void|  |
| ms | number|  |
| ...args | any[]|  |

#### Returns: [Timer](interfaces/nodejs.timer.md)


Generated using [TypeDoc](http://typedoc.io)
