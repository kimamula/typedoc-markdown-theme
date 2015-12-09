# Module "fs-extra"


## Index

### Classes
* [ReadStream](../classes/_fs_extra_.readstream.md)
* [WriteStream](../classes/_fs_extra_.writestream.md)

### Interfaces
* [FSWatcher](../interfaces/_fs_extra_.fswatcher.md)
* [OpenOptions](../interfaces/_fs_extra_.openoptions.md)
* [ReadStreamOptions](../interfaces/_fs_extra_.readstreamoptions.md)
* [Stats](../interfaces/_fs_extra_.stats.md)
* [WriteStreamOptions](../interfaces/_fs_extra_.writestreamoptions.md)

### Functions
* [appendFile](_fs_extra_.md#appendfile)
* [appendFileSync](_fs_extra_.md#appendfilesync)
* [chmod](_fs_extra_.md#chmod)
* [chmodSync](_fs_extra_.md#chmodsync)
* [chown](_fs_extra_.md#chown)
* [chownSync](_fs_extra_.md#chownsync)
* [close](_fs_extra_.md#close)
* [closeSync](_fs_extra_.md#closesync)
* [copy](_fs_extra_.md#copy)
* [copySync](_fs_extra_.md#copysync)
* [createFile](_fs_extra_.md#createfile)
* [createFileSync](_fs_extra_.md#createfilesync)
* [createReadStream](_fs_extra_.md#createreadstream)
* [createWriteStream](_fs_extra_.md#createwritestream)
* [ensureDir](_fs_extra_.md#ensuredir)
* [exists](_fs_extra_.md#exists)
* [existsSync](_fs_extra_.md#existssync)
* [fchmod](_fs_extra_.md#fchmod)
* [fchmodSync](_fs_extra_.md#fchmodsync)
* [fchown](_fs_extra_.md#fchown)
* [fchownSync](_fs_extra_.md#fchownsync)
* [fstat](_fs_extra_.md#fstat)
* [fstatSync](_fs_extra_.md#fstatsync)
* [fsync](_fs_extra_.md#fsync)
* [fsyncSync](_fs_extra_.md#fsyncsync)
* [futimes](_fs_extra_.md#futimes)
* [futimesSync](_fs_extra_.md#futimessync)
* [lchmod](_fs_extra_.md#lchmod)
* [lchmodSync](_fs_extra_.md#lchmodsync)
* [lchown](_fs_extra_.md#lchown)
* [lchownSync](_fs_extra_.md#lchownsync)
* [link](_fs_extra_.md#link)
* [linkSync](_fs_extra_.md#linksync)
* [lstat](_fs_extra_.md#lstat)
* [lstatSync](_fs_extra_.md#lstatsync)
* [mkdir](_fs_extra_.md#mkdir)
* [mkdirSync](_fs_extra_.md#mkdirsync)
* [mkdirp](_fs_extra_.md#mkdirp)
* [mkdirpSync](_fs_extra_.md#mkdirpsync)
* [mkdirs](_fs_extra_.md#mkdirs)
* [mkdirsSync](_fs_extra_.md#mkdirssync)
* [open](_fs_extra_.md#open)
* [openSync](_fs_extra_.md#opensync)
* [outputFile](_fs_extra_.md#outputfile)
* [outputFileSync](_fs_extra_.md#outputfilesync)
* [outputJSON](_fs_extra_.md#outputjson)
* [outputJSONSync](_fs_extra_.md#outputjsonsync)
* [outputJson](_fs_extra_.md#outputjson-1)
* [outputJsonSync](_fs_extra_.md#outputjsonsync-1)
* [read](_fs_extra_.md#read)
* [readFile](_fs_extra_.md#readfile)
* [readFileSync](_fs_extra_.md#readfilesync)
* [readJSON](_fs_extra_.md#readjson)
* [readJSONSync](_fs_extra_.md#readjsonsync)
* [readJson](_fs_extra_.md#readjson-1)
* [readJsonSync](_fs_extra_.md#readjsonsync-1)
* [readSync](_fs_extra_.md#readsync)
* [readdir](_fs_extra_.md#readdir)
* [readdirSync](_fs_extra_.md#readdirsync)
* [readlink](_fs_extra_.md#readlink)
* [realpath](_fs_extra_.md#realpath)
* [realpathSync](_fs_extra_.md#realpathsync)
* [remove](_fs_extra_.md#remove)
* [removeSync](_fs_extra_.md#removesync)
* [rename](_fs_extra_.md#rename)
* [renameSync](_fs_extra_.md#renamesync)
* [rmdir](_fs_extra_.md#rmdir)
* [rmdirSync](_fs_extra_.md#rmdirsync)
* [stat](_fs_extra_.md#stat)
* [statSync](_fs_extra_.md#statsync)
* [symlink](_fs_extra_.md#symlink)
* [symlinkSync](_fs_extra_.md#symlinksync)
* [truncate](_fs_extra_.md#truncate)
* [truncateSync](_fs_extra_.md#truncatesync)
* [unlink](_fs_extra_.md#unlink)
* [unlinkSync](_fs_extra_.md#unlinksync)
* [unwatchFile](_fs_extra_.md#unwatchfile)
* [utimes](_fs_extra_.md#utimes)
* [utimesSync](_fs_extra_.md#utimessync)
* [watch](_fs_extra_.md#watch)
* [watchFile](_fs_extra_.md#watchfile)
* [write](_fs_extra_.md#write)
* [writeFile](_fs_extra_.md#writefile)
* [writeFileSync](_fs_extra_.md#writefilesync)
* [writeJSON](_fs_extra_.md#writejson)
* [writeJSONSync](_fs_extra_.md#writejsonsync)
* [writeJson](_fs_extra_.md#writejson-1)
* [writeJsonSync](_fs_extra_.md#writejsonsync-1)
* [writeSync](_fs_extra_.md#writesync)

## Functions

### appendFile(filename: string, data: any, encoding?: string, callback?: (err: Error)=> void): voidappendFile(filename: string, data: any, option?: [OpenOptions](../interfaces/_fs_extra_.openoptions.md), callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:157](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L157)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| encoding? | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:158](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L158)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| option? | [OpenOptions](../interfaces/_fs_extra_.openoptions.md)|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### appendFileSync(filename: string, data: any, encoding?: string): voidappendFileSync(filename: string, data: any, option?: [OpenOptions](../interfaces/_fs_extra_.openoptions.md)): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:159](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L159)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| encoding? | string|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:160](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L160)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| option? | [OpenOptions](../interfaces/_fs_extra_.openoptions.md)|  |

#### Returns: void

### chmod(path: string, mode: number, callback?: (err: Error)=> void): voidchmod(path: string, mode: string, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:97](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L97)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | number|  |
| callback? | (err: Error)=> void|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:98](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L98)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### chmodSync(path: string, mode: number): voidchmodSync(path: string, mode: string): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:99](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L99)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | number|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:100](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L100)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | string|  |

#### Returns: void

### chown(path: string, uid: number, gid: number, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:91](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L91)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| uid | number|  |
| gid | number|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### chownSync(path: string, uid: number, gid: number): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:92](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L92)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| uid | number|  |
| gid | number|  |

#### Returns: void

### close(fd: number, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:133](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L133)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### closeSync(fd: number): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:134](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L134)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |

#### Returns: void

### copy(src: string, dest: string, callback?: (err: Error)=> void): voidcopy(src: string, dest: string, filter: (src: string)=> boolean, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:44](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L44)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| src | string|  |
| dest | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:45](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L45)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| src | string|  |
| dest | string|  |
| filter | (src: string)=> boolean|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### copySync(src: string, dest: string): voidcopySync(src: string, dest: string, filter: (src: string)=> boolean): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:47](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L47)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| src | string|  |
| dest | string|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:48](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L48)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| src | string|  |
| dest | string|  |
| filter | (src: string)=> boolean|  |

#### Returns: void

### createFile(file: string, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:50](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L50)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### createFileSync(file: string): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:51](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L51)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |

#### Returns: void

### createReadStream(path: string, options?: [ReadStreamOptions](../interfaces/_fs_extra_.readstreamoptions.md)): [ReadStream](../classes/_fs_extra_.readstream.md)
  
* Defined in [lib/fs-extra/fs-extra.d.ts:186](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L186)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| options? | [ReadStreamOptions](../interfaces/_fs_extra_.readstreamoptions.md)|  |

#### Returns: [ReadStream](../classes/_fs_extra_.readstream.md)

### createWriteStream(path: string, options?: [WriteStreamOptions](../interfaces/_fs_extra_.writestreamoptions.md)): [WriteStream](../classes/_fs_extra_.writestream.md)
  
* Defined in [lib/fs-extra/fs-extra.d.ts:187](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L187)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| options? | [WriteStreamOptions](../interfaces/_fs_extra_.writestreamoptions.md)|  |

#### Returns: [WriteStream](../classes/_fs_extra_.writestream.md)

### ensureDir(path: string, cb: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:167](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L167)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| cb | (err: Error)=> void|  |

#### Returns: void

### exists(path: string, callback?: (exists: boolean)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:165](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L165)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (exists: boolean)=> void|  |

#### Returns: void

### existsSync(path: string): boolean
  
* Defined in [lib/fs-extra/fs-extra.d.ts:166](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L166)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: boolean

### fchmod(fd: number, mode: number, callback?: (err: Error)=> void): voidfchmod(fd: number, mode: string, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:101](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L101)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| mode | number|  |
| callback? | (err: Error)=> void|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:102](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L102)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| mode | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### fchmodSync(fd: number, mode: number): voidfchmodSync(fd: number, mode: string): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:103](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L103)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| mode | number|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:104](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L104)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| mode | string|  |

#### Returns: void

### fchown(fd: number, uid: number, gid: number, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:93](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L93)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| uid | number|  |
| gid | number|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### fchownSync(fd: number, uid: number, gid: number): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:94](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L94)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| uid | number|  |
| gid | number|  |

#### Returns: void

### fstat(fd: number, callback?: (err: Error, stats: [Stats](../interfaces/_fs_extra_.stats.md))=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:111](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L111)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| callback? | (err: Error, stats: [Stats](../interfaces/_fs_extra_.stats.md))=> void|  |

#### Returns: void

### fstatSync(fd: number): [Stats](../interfaces/_fs_extra_.stats.md)
  
* Defined in [lib/fs-extra/fs-extra.d.ts:114](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L114)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |

#### Returns: [Stats](../interfaces/_fs_extra_.stats.md)

### fsync(fd: number, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:141](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L141)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### fsyncSync(fd: number): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:142](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L142)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |

#### Returns: void

### futimes(fd: number, atime: number, mtime: number, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:139](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L139)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| atime | number|  |
| mtime | number|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### futimesSync(fd: number, atime: number, mtime: number): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:140](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L140)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| atime | number|  |
| mtime | number|  |

#### Returns: void

### lchmod(path: string, mode: string, callback?: (err: Error)=> void): voidlchmod(path: string, mode: number, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:105](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L105)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:106](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L106)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | number|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### lchmodSync(path: string, mode: number): voidlchmodSync(path: string, mode: string): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:107](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L107)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | number|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:108](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L108)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | string|  |

#### Returns: void

### lchown(path: string, uid: number, gid: number, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:95](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L95)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| uid | number|  |
| gid | number|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### lchownSync(path: string, uid: number, gid: number): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:96](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L96)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| uid | number|  |
| gid | number|  |

#### Returns: void

### link(srcpath: string, dstpath: string, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:115](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L115)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| srcpath | string|  |
| dstpath | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### linkSync(srcpath: string, dstpath: string): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:116](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L116)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| srcpath | string|  |
| dstpath | string|  |

#### Returns: void

### lstat(path: string, callback?: (err: Error, stats: [Stats](../interfaces/_fs_extra_.stats.md))=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:110](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L110)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err: Error, stats: [Stats](../interfaces/_fs_extra_.stats.md))=> void|  |

#### Returns: void

### lstatSync(path: string): [Stats](../interfaces/_fs_extra_.stats.md)
  
* Defined in [lib/fs-extra/fs-extra.d.ts:113](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L113)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: [Stats](../interfaces/_fs_extra_.stats.md)

### mkdir(path: string, mode?: number, callback?: (err: Error)=> void): voidmkdir(path: string, mode?: string, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:127](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L127)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode? | number|  |
| callback? | (err: Error)=> void|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:128](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L128)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode? | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### mkdirSync(path: string, mode?: number): voidmkdirSync(path: string, mode?: string): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:129](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L129)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode? | number|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:130](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L130)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode? | string|  |

#### Returns: void

### mkdirp(dir: string, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:54](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L54)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| dir | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### mkdirpSync(dir: string): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:56](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L56)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| dir | string|  |

#### Returns: void

### mkdirs(dir: string, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:53](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L53)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| dir | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### mkdirsSync(dir: string): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:55](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L55)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| dir | string|  |

#### Returns: void

### open(path: string, flags: string, mode?: string, callback?: (err: Error, fs: number)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:135](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L135)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| flags | string|  |
| mode? | string|  |
| callback? | (err: Error, fs: number)=> void|  |

#### Returns: void

### openSync(path: string, flags: string, mode?: string): number
  
* Defined in [lib/fs-extra/fs-extra.d.ts:136](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L136)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| flags | string|  |
| mode? | string|  |

#### Returns: number

### outputFile(file: string, data: any, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:58](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L58)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| data | any|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### outputFileSync(file: string, data: any): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:59](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L59)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| data | any|  |

#### Returns: void

### outputJSON(file: string, data: any, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:62](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L62)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| data | any|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### outputJSONSync(file: string, data: any): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:64](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L64)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| data | any|  |

#### Returns: void

### outputJson(file: string, data: any, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:61](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L61)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| data | any|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### outputJsonSync(file: string, data: any): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:63](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L63)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| data | any|  |

#### Returns: void

### read(fd: number, buffer: [NodeBuffer](../interfaces/nodebuffer.md), offset: number, length: number, position: number, callback?: (err: Error, bytesRead: number, buffer: [NodeBuffer](../interfaces/nodebuffer.md))=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:145](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L145)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| buffer | [NodeBuffer](../interfaces/nodebuffer.md)|  |
| offset | number|  |
| length | number|  |
| position | number|  |
| callback? | (err: Error, bytesRead: number, buffer: [NodeBuffer](../interfaces/nodebuffer.md))=> void|  |

#### Returns: void

### readFile(filename: string, encoding: string, callback: (err: Error, data: string)=> void): voidreadFile(filename: string, options: [OpenOptions](../interfaces/_fs_extra_.openoptions.md), callback: (err: Error, data: string)=> void): voidreadFile(filename: string, callback: (err: Error, data: [NodeBuffer](../interfaces/nodebuffer.md))=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:147](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L147)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| encoding | string|  |
| callback | (err: Error, data: string)=> void|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:148](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L148)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| options | [OpenOptions](../interfaces/_fs_extra_.openoptions.md)|  |
| callback | (err: Error, data: string)=> void|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:149](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L149)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| callback | (err: Error, data: [NodeBuffer](../interfaces/nodebuffer.md))=> void|  |

#### Returns: void

### readFileSync(filename: string): [NodeBuffer](../interfaces/nodebuffer.md)readFileSync(filename: string, encoding: string): stringreadFileSync(filename: string, options: [OpenOptions](../interfaces/_fs_extra_.openoptions.md)): string
  
* Defined in [lib/fs-extra/fs-extra.d.ts:150](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L150)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |

#### Returns: [NodeBuffer](../interfaces/nodebuffer.md)
  
* Defined in [lib/fs-extra/fs-extra.d.ts:151](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L151)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| encoding | string|  |

#### Returns: string
  
* Defined in [lib/fs-extra/fs-extra.d.ts:152](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L152)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| options | [OpenOptions](../interfaces/_fs_extra_.openoptions.md)|  |

#### Returns: string

### readJSON(file: string, callback?: (err: Error)=> void): voidreadJSON(file: string, options?: [OpenOptions](../interfaces/_fs_extra_.openoptions.md), callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:68](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L68)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:69](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L69)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| options? | [OpenOptions](../interfaces/_fs_extra_.openoptions.md)|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### readJSONSync(file: string, options?: [OpenOptions](../interfaces/_fs_extra_.openoptions.md)): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:72](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L72)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| options? | [OpenOptions](../interfaces/_fs_extra_.openoptions.md)|  |

#### Returns: void

### readJson(file: string, callback?: (err: Error)=> void): voidreadJson(file: string, options?: [OpenOptions](../interfaces/_fs_extra_.openoptions.md), callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:66](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L66)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:67](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L67)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| options? | [OpenOptions](../interfaces/_fs_extra_.openoptions.md)|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### readJsonSync(file: string, options?: [OpenOptions](../interfaces/_fs_extra_.openoptions.md)): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:71](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L71)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| options? | [OpenOptions](../interfaces/_fs_extra_.openoptions.md)|  |

#### Returns: void

### readSync(fd: number, buffer: [NodeBuffer](../interfaces/nodebuffer.md), offset: number, length: number, position: number): number
  
* Defined in [lib/fs-extra/fs-extra.d.ts:146](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L146)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| buffer | [NodeBuffer](../interfaces/nodebuffer.md)|  |
| offset | number|  |
| length | number|  |
| position | number|  |

#### Returns: number

### readdir(path: string, callback?: (err: Error, files: string[])=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:131](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L131)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err: Error, files: string[])=> void|  |

#### Returns: void

### readdirSync(path: string): string[]
  
* Defined in [lib/fs-extra/fs-extra.d.ts:132](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L132)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: string[]

### readlink(path: string, callback?: (err: Error, linkString: string)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:119](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L119)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err: Error, linkString: string)=> void|  |

#### Returns: void

### realpath(path: string, callback?: (err: Error, resolvedPath: string)=> void): voidrealpath(path: string, cache: string, callback: (err: Error, resolvedPath: string)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:120](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L120)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err: Error, resolvedPath: string)=> void|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:121](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L121)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| cache | string|  |
| callback | (err: Error, resolvedPath: string)=> void|  |

#### Returns: void

### realpathSync(path: string, cache?: boolean): string
  
* Defined in [lib/fs-extra/fs-extra.d.ts:122](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L122)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| cache? | boolean|  |

#### Returns: string

### remove(dir: string, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:74](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L74)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| dir | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### removeSync(dir: string): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:75](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L75)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| dir | string|  |

#### Returns: void

### rename(oldPath: string, newPath: string, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:87](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L87)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldPath | string|  |
| newPath | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### renameSync(oldPath: string, newPath: string): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:88](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L88)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldPath | string|  |
| newPath | string|  |

#### Returns: void

### rmdir(path: string, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:125](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L125)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### rmdirSync(path: string): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:126](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L126)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: void

### stat(path: string, callback?: (err: Error, stats: [Stats](../interfaces/_fs_extra_.stats.md))=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:109](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L109)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err: Error, stats: [Stats](../interfaces/_fs_extra_.stats.md))=> void|  |

#### Returns: void

### statSync(path: string): [Stats](../interfaces/_fs_extra_.stats.md)
  
* Defined in [lib/fs-extra/fs-extra.d.ts:112](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L112)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: [Stats](../interfaces/_fs_extra_.stats.md)

### symlink(srcpath: string, dstpath: string, type?: string, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:117](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L117)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| srcpath | string|  |
| dstpath | string|  |
| type? | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### symlinkSync(srcpath: string, dstpath: string, type?: string): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:118](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L118)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| srcpath | string|  |
| dstpath | string|  |
| type? | string|  |

#### Returns: void

### truncate(fd: number, len: number, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:89](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L89)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| len | number|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### truncateSync(fd: number, len: number): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:90](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L90)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| len | number|  |

#### Returns: void

### unlink(path: string, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:123](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L123)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### unlinkSync(path: string): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:124](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L124)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: void

### unwatchFile(filename: string, listener?: [Stats](../interfaces/_fs_extra_.stats.md)): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:163](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L163)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| listener? | [Stats](../interfaces/_fs_extra_.stats.md)|  |

#### Returns: void

### utimes(path: string, atime: number, mtime: number, callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:137](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L137)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| atime | number|  |
| mtime | number|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### utimesSync(path: string, atime: number, mtime: number): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:138](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L138)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| atime | number|  |
| mtime | number|  |

#### Returns: void

### watch(filename: string, options?: \{Optional persistent?: boolean\}, listener?: (event: string, filename: string)=> any): [FSWatcher](../interfaces/_fs_extra_.fswatcher.md)
  
* Defined in [lib/fs-extra/fs-extra.d.ts:164](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L164)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| options? | \{Optional persistent?: boolean\}|  |
| listener? | (event: string, filename: string)=> any|  |

#### Returns: [FSWatcher](../interfaces/_fs_extra_.fswatcher.md)

### watchFile(filename: string, listener: \{curr: [Stats](../interfaces/_fs_extra_.stats.md), prev: [Stats](../interfaces/_fs_extra_.stats.md)\}): voidwatchFile(filename: string, options: \{Optional interval?: number, Optional persistent?: boolean\}, listener: \{curr: [Stats](../interfaces/_fs_extra_.stats.md), prev: [Stats](../interfaces/_fs_extra_.stats.md)\}): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:161](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L161)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| listener | \{curr: [Stats](../interfaces/_fs_extra_.stats.md), prev: [Stats](../interfaces/_fs_extra_.stats.md)\}|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:162](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L162)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| options | \{Optional interval?: number, Optional persistent?: boolean\}|  |
| listener | \{curr: [Stats](../interfaces/_fs_extra_.stats.md), prev: [Stats](../interfaces/_fs_extra_.stats.md)\}|  |

#### Returns: void

### write(fd: number, buffer: [NodeBuffer](../interfaces/nodebuffer.md), offset: number, length: number, position: number, callback?: (err: Error, written: number, buffer: [NodeBuffer](../interfaces/nodebuffer.md))=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:143](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L143)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| buffer | [NodeBuffer](../interfaces/nodebuffer.md)|  |
| offset | number|  |
| length | number|  |
| position | number|  |
| callback? | (err: Error, written: number, buffer: [NodeBuffer](../interfaces/nodebuffer.md))=> void|  |

#### Returns: void

### writeFile(filename: string, data: any, encoding?: string, callback?: (err: Error)=> void): voidwriteFile(filename: string, data: any, options?: [OpenOptions](../interfaces/_fs_extra_.openoptions.md), callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:153](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L153)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| encoding? | string|  |
| callback? | (err: Error)=> void|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:154](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L154)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| options? | [OpenOptions](../interfaces/_fs_extra_.openoptions.md)|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### writeFileSync(filename: string, data: any, encoding?: string): voidwriteFileSync(filename: string, data: any, option?: [OpenOptions](../interfaces/_fs_extra_.openoptions.md)): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:155](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L155)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| encoding? | string|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:156](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L156)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| option? | [OpenOptions](../interfaces/_fs_extra_.openoptions.md)|  |

#### Returns: void

### writeJSON(file: string, object: any, callback?: (err: Error)=> void): voidwriteJSON(file: string, object: any, options?: [OpenOptions](../interfaces/_fs_extra_.openoptions.md), callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:81](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L81)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| object | any|  |
| callback? | (err: Error)=> void|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:82](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L82)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| object | any|  |
| options? | [OpenOptions](../interfaces/_fs_extra_.openoptions.md)|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### writeJSONSync(file: string, object: any, options?: [OpenOptions](../interfaces/_fs_extra_.openoptions.md)): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:85](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L85)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| object | any|  |
| options? | [OpenOptions](../interfaces/_fs_extra_.openoptions.md)|  |

#### Returns: void

### writeJson(file: string, object: any, callback?: (err: Error)=> void): voidwriteJson(file: string, object: any, options?: [OpenOptions](../interfaces/_fs_extra_.openoptions.md), callback?: (err: Error)=> void): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:79](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L79)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| object | any|  |
| callback? | (err: Error)=> void|  |

#### Returns: void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:80](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L80)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| object | any|  |
| options? | [OpenOptions](../interfaces/_fs_extra_.openoptions.md)|  |
| callback? | (err: Error)=> void|  |

#### Returns: void

### writeJsonSync(file: string, object: any, options?: [OpenOptions](../interfaces/_fs_extra_.openoptions.md)): void
  
* Defined in [lib/fs-extra/fs-extra.d.ts:84](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L84)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| file | string|  |
| object | any|  |
| options? | [OpenOptions](../interfaces/_fs_extra_.openoptions.md)|  |

#### Returns: void

### writeSync(fd: number, buffer: [NodeBuffer](../interfaces/nodebuffer.md), offset: number, length: number, position: number): number
  
* Defined in [lib/fs-extra/fs-extra.d.ts:144](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/fs-extra/fs-extra.d.ts#L144)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| buffer | [NodeBuffer](../interfaces/nodebuffer.md)|  |
| offset | number|  |
| length | number|  |
| position | number|  |

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
