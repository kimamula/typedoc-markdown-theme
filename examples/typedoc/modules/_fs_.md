# Module "fs"


## Index

### Interfaces
* [FSWatcher](../interfaces/_fs_.fswatcher.md)
* [ReadStream](../interfaces/_fs_.readstream.md)
* [Stats](../interfaces/_fs_.stats.md)
* [WriteStream](../interfaces/_fs_.writestream.md)

### Functions
* [appendFile](_fs_.md#appendfile)
* [appendFileSync](_fs_.md#appendfilesync)
* [chmod](_fs_.md#chmod)
* [chmodSync](_fs_.md#chmodsync)
* [chown](_fs_.md#chown)
* [chownSync](_fs_.md#chownsync)
* [close](_fs_.md#close)
* [closeSync](_fs_.md#closesync)
* [createReadStream](_fs_.md#createreadstream)
* [createWriteStream](_fs_.md#createwritestream)
* [exists](_fs_.md#exists)
* [existsSync](_fs_.md#existssync)
* [fchmod](_fs_.md#fchmod)
* [fchmodSync](_fs_.md#fchmodsync)
* [fchown](_fs_.md#fchown)
* [fchownSync](_fs_.md#fchownsync)
* [fstat](_fs_.md#fstat)
* [fstatSync](_fs_.md#fstatsync)
* [fsync](_fs_.md#fsync)
* [fsyncSync](_fs_.md#fsyncsync)
* [ftruncate](_fs_.md#ftruncate)
* [ftruncateSync](_fs_.md#ftruncatesync)
* [futimes](_fs_.md#futimes)
* [futimesSync](_fs_.md#futimessync)
* [lchmod](_fs_.md#lchmod)
* [lchmodSync](_fs_.md#lchmodsync)
* [lchown](_fs_.md#lchown)
* [lchownSync](_fs_.md#lchownsync)
* [link](_fs_.md#link)
* [linkSync](_fs_.md#linksync)
* [lstat](_fs_.md#lstat)
* [lstatSync](_fs_.md#lstatsync)
* [mkdir](_fs_.md#mkdir)
* [mkdirSync](_fs_.md#mkdirsync)
* [open](_fs_.md#open)
* [openSync](_fs_.md#opensync)
* [read](_fs_.md#read)
* [readFile](_fs_.md#readfile)
* [readFileSync](_fs_.md#readfilesync)
* [readSync](_fs_.md#readsync)
* [readdir](_fs_.md#readdir)
* [readdirSync](_fs_.md#readdirsync)
* [readlink](_fs_.md#readlink)
* [readlinkSync](_fs_.md#readlinksync)
* [realpath](_fs_.md#realpath)
* [realpathSync](_fs_.md#realpathsync)
* [rename](_fs_.md#rename)
* [renameSync](_fs_.md#renamesync)
* [rmdir](_fs_.md#rmdir)
* [rmdirSync](_fs_.md#rmdirsync)
* [stat](_fs_.md#stat)
* [statSync](_fs_.md#statsync)
* [symlink](_fs_.md#symlink)
* [symlinkSync](_fs_.md#symlinksync)
* [truncate](_fs_.md#truncate)
* [truncateSync](_fs_.md#truncatesync)
* [unlink](_fs_.md#unlink)
* [unlinkSync](_fs_.md#unlinksync)
* [unwatchFile](_fs_.md#unwatchfile)
* [utimes](_fs_.md#utimes)
* [utimesSync](_fs_.md#utimessync)
* [watch](_fs_.md#watch)
* [watchFile](_fs_.md#watchfile)
* [write](_fs_.md#write)
* [writeFile](_fs_.md#writefile)
* [writeFileSync](_fs_.md#writefilesync)
* [writeSync](_fs_.md#writesync)

## Functions

### appendFile(filename: string, data: any, options: \{Optional encoding?: string, Optional flag?: string, Optional mode?: number\}, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): voidappendFile(filename: string, data: any, options: \{Optional encoding?: string, Optional flag?: string, Optional mode?: string\}, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): voidappendFile(filename: string, data: any, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:984](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L984)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| options | \{Optional encoding?: string, Optional flag?: string, Optional mode?: number\}|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:985](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L985)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| options | \{Optional encoding?: string, Optional flag?: string, Optional mode?: string\}|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:986](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L986)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### appendFileSync(filename: string, data: any, options?: \{Optional encoding?: string, Optional flag?: string, Optional mode?: number\}): voidappendFileSync(filename: string, data: any, options?: \{Optional encoding?: string, Optional flag?: string, Optional mode?: string\}): void
  
* Defined in [lib/node/node.d.ts:987](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L987)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| options? | \{Optional encoding?: string, Optional flag?: string, Optional mode?: number\}|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:988](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L988)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| options? | \{Optional encoding?: string, Optional flag?: string, Optional mode?: string\}|  |

#### Returns: void

### chmod(path: string, mode: number, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): voidchmod(path: string, mode: string, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:913](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L913)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | number|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:914](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L914)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | string|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### chmodSync(path: string, mode: number): voidchmodSync(path: string, mode: string): void
  
* Defined in [lib/node/node.d.ts:915](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L915)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | number|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:916](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L916)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | string|  |

#### Returns: void

### chown(path: string, uid: number, gid: number, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:907](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L907)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| uid | number|  |
| gid | number|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### chownSync(path: string, uid: number, gid: number): void
  
* Defined in [lib/node/node.d.ts:908](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L908)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| uid | number|  |
| gid | number|  |

#### Returns: void

### close(fd: number, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:951](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L951)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### closeSync(fd: number): void
  
* Defined in [lib/node/node.d.ts:952](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L952)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |

#### Returns: void

### createReadStream(path: string, options?: \{Optional bufferSize?: number, Optional encoding?: string, Optional fd?: string, Optional flags?: string, Optional mode?: number\}): [ReadStream](../interfaces/_fs_.readstream.md)createReadStream(path: string, options?: \{Optional bufferSize?: number, Optional encoding?: string, Optional fd?: string, Optional flags?: string, Optional mode?: string\}): [ReadStream](../interfaces/_fs_.readstream.md)
  
* Defined in [lib/node/node.d.ts:996](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L996)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| options? | \{Optional bufferSize?: number, Optional encoding?: string, Optional fd?: string, Optional flags?: string, Optional mode?: number\}|  |

#### Returns: [ReadStream](../interfaces/_fs_.readstream.md)
  
* Defined in [lib/node/node.d.ts:1003](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1003)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| options? | \{Optional bufferSize?: number, Optional encoding?: string, Optional fd?: string, Optional flags?: string, Optional mode?: string\}|  |

#### Returns: [ReadStream](../interfaces/_fs_.readstream.md)

### createWriteStream(path: string, options?: \{Optional encoding?: string, Optional flags?: string, Optional string?: string\}): [WriteStream](../interfaces/_fs_.writestream.md)
  
* Defined in [lib/node/node.d.ts:1010](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1010)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| options? | \{Optional encoding?: string, Optional flags?: string, Optional string?: string\}|  |

#### Returns: [WriteStream](../interfaces/_fs_.writestream.md)

### exists(path: string, callback?: (exists: boolean)=> void): void
  
* Defined in [lib/node/node.d.ts:994](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L994)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (exists: boolean)=> void|  |

#### Returns: void

### existsSync(path: string): boolean
  
* Defined in [lib/node/node.d.ts:995](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L995)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: boolean

### fchmod(fd: number, mode: number, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): voidfchmod(fd: number, mode: string, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:917](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L917)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| mode | number|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:918](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L918)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| mode | string|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### fchmodSync(fd: number, mode: number): voidfchmodSync(fd: number, mode: string): void
  
* Defined in [lib/node/node.d.ts:919](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L919)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| mode | number|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:920](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L920)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| mode | string|  |

#### Returns: void

### fchown(fd: number, uid: number, gid: number, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:909](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L909)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| uid | number|  |
| gid | number|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### fchownSync(fd: number, uid: number, gid: number): void
  
* Defined in [lib/node/node.d.ts:910](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L910)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| uid | number|  |
| gid | number|  |

#### Returns: void

### fstat(fd: number, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), stats: [Stats](../interfaces/_fs_.stats.md))=> any): void
  
* Defined in [lib/node/node.d.ts:927](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L927)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), stats: [Stats](../interfaces/_fs_.stats.md))=> any|  |

#### Returns: void

### fstatSync(fd: number): [Stats](../interfaces/_fs_.stats.md)
  
* Defined in [lib/node/node.d.ts:930](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L930)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |

#### Returns: [Stats](../interfaces/_fs_.stats.md)

### fsync(fd: number, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:966](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L966)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### fsyncSync(fd: number): void
  
* Defined in [lib/node/node.d.ts:967](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L967)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |

#### Returns: void

### ftruncate(fd: number, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): voidftruncate(fd: number, len: number, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:904](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L904)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:905](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L905)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| len | number|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### ftruncateSync(fd: number, len?: number): void
  
* Defined in [lib/node/node.d.ts:906](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L906)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| len? | number|  |

#### Returns: void

### futimes(fd: number, atime: number, mtime: number, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): voidfutimes(fd: number, atime: Date, mtime: Date, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:962](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L962)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| atime | number|  |
| mtime | number|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:963](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L963)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| atime | Date|  |
| mtime | Date|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### futimesSync(fd: number, atime: number, mtime: number): voidfutimesSync(fd: number, atime: Date, mtime: Date): void
  
* Defined in [lib/node/node.d.ts:964](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L964)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| atime | number|  |
| mtime | number|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:965](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L965)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| atime | Date|  |
| mtime | Date|  |

#### Returns: void

### lchmod(path: string, mode: number, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): voidlchmod(path: string, mode: string, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:921](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L921)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | number|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:922](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L922)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | string|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### lchmodSync(path: string, mode: number): voidlchmodSync(path: string, mode: string): void
  
* Defined in [lib/node/node.d.ts:923](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L923)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | number|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:924](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L924)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | string|  |

#### Returns: void

### lchown(path: string, uid: number, gid: number, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:911](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L911)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| uid | number|  |
| gid | number|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### lchownSync(path: string, uid: number, gid: number): void
  
* Defined in [lib/node/node.d.ts:912](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L912)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| uid | number|  |
| gid | number|  |

#### Returns: void

### link(srcpath: string, dstpath: string, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:931](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L931)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| srcpath | string|  |
| dstpath | string|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### linkSync(srcpath: string, dstpath: string): void
  
* Defined in [lib/node/node.d.ts:932](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L932)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| srcpath | string|  |
| dstpath | string|  |

#### Returns: void

### lstat(path: string, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), stats: [Stats](../interfaces/_fs_.stats.md))=> any): void
  
* Defined in [lib/node/node.d.ts:926](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L926)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), stats: [Stats](../interfaces/_fs_.stats.md))=> any|  |

#### Returns: void

### lstatSync(path: string): [Stats](../interfaces/_fs_.stats.md)
  
* Defined in [lib/node/node.d.ts:929](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L929)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: [Stats](../interfaces/_fs_.stats.md)

### mkdir(path: string, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): voidmkdir(path: string, mode: number, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): voidmkdir(path: string, mode: string, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:944](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L944)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:945](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L945)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | number|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:946](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L946)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode | string|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### mkdirSync(path: string, mode?: number): voidmkdirSync(path: string, mode?: string): void
  
* Defined in [lib/node/node.d.ts:947](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L947)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode? | number|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:948](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L948)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| mode? | string|  |

#### Returns: void

### open(path: string, flags: string, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), fd: number)=> any): voidopen(path: string, flags: string, mode: number, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), fd: number)=> any): voidopen(path: string, flags: string, mode: string, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), fd: number)=> any): void
  
* Defined in [lib/node/node.d.ts:953](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L953)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| flags | string|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), fd: number)=> any|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:954](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L954)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| flags | string|  |
| mode | number|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), fd: number)=> any|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:955](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L955)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| flags | string|  |
| mode | string|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), fd: number)=> any|  |

#### Returns: void

### openSync(path: string, flags: string, mode?: number): numberopenSync(path: string, flags: string, mode?: string): number
  
* Defined in [lib/node/node.d.ts:956](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L956)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| flags | string|  |
| mode? | number|  |

#### Returns: number
  
* Defined in [lib/node/node.d.ts:957](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L957)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| flags | string|  |
| mode? | string|  |

#### Returns: number

### read(fd: number, buffer: [Buffer](../interfaces/buffer.md), offset: number, length: number, position: number, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), bytesRead: number, buffer: [Buffer](../interfaces/buffer.md))=> void): void
  
* Defined in [lib/node/node.d.ts:970](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L970)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| buffer | [Buffer](../interfaces/buffer.md)|  |
| offset | number|  |
| length | number|  |
| position | number|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), bytesRead: number, buffer: [Buffer](../interfaces/buffer.md))=> void|  |

#### Returns: void

### readFile(filename: string, encoding: string, callback: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), data: string)=> void): voidreadFile(filename: string, options: \{encoding: string, Optional flag?: string\}, callback: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), data: string)=> void): voidreadFile(filename: string, options: \{Optional flag?: string\}, callback: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), data: [Buffer](../interfaces/buffer.md))=> void): voidreadFile(filename: string, callback: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), data: [Buffer](../interfaces/buffer.md))=> void): void
  
* Defined in [lib/node/node.d.ts:972](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L972)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| encoding | string|  |
| callback | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), data: string)=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:973](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L973)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| options | \{encoding: string, Optional flag?: string\}|  |
| callback | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), data: string)=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:974](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L974)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| options | \{Optional flag?: string\}|  |
| callback | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), data: [Buffer](../interfaces/buffer.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:975](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L975)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| callback | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), data: [Buffer](../interfaces/buffer.md))=> void|  |

#### Returns: void

### readFileSync(filename: string, encoding: string): stringreadFileSync(filename: string, options: \{encoding: string, Optional flag?: string\}): stringreadFileSync(filename: string, options?: \{Optional flag?: string\}): [Buffer](../interfaces/buffer.md)
  
* Defined in [lib/node/node.d.ts:976](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L976)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| encoding | string|  |

#### Returns: string
  
* Defined in [lib/node/node.d.ts:977](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L977)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| options | \{encoding: string, Optional flag?: string\}|  |

#### Returns: string
  
* Defined in [lib/node/node.d.ts:978](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L978)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| options? | \{Optional flag?: string\}|  |

#### Returns: [Buffer](../interfaces/buffer.md)

### readSync(fd: number, buffer: [Buffer](../interfaces/buffer.md), offset: number, length: number, position: number): number
  
* Defined in [lib/node/node.d.ts:971](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L971)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| buffer | [Buffer](../interfaces/buffer.md)|  |
| offset | number|  |
| length | number|  |
| position | number|  |

#### Returns: number

### readdir(path: string, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), files: string[])=> void): void
  
* Defined in [lib/node/node.d.ts:949](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L949)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), files: string[])=> void|  |

#### Returns: void

### readdirSync(path: string): string[]
  
* Defined in [lib/node/node.d.ts:950](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L950)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: string[]

### readlink(path: string, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), linkString: string)=> any): void
  
* Defined in [lib/node/node.d.ts:935](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L935)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), linkString: string)=> any|  |

#### Returns: void

### readlinkSync(path: string): string
  
* Defined in [lib/node/node.d.ts:936](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L936)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: string

### realpath(path: string, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), resolvedPath: string)=> any): voidrealpath(path: string, cache: [path: string]: string, callback: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), resolvedPath: string)=> any): void
  
* Defined in [lib/node/node.d.ts:937](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L937)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), resolvedPath: string)=> any|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:938](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L938)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| cache | [path: string]: string|  |
| callback | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), resolvedPath: string)=> any|  |

#### Returns: void

### realpathSync(path: string, cache?: [path: string]: string): string
  
* Defined in [lib/node/node.d.ts:939](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L939)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| cache? | [path: string]: string|  |

#### Returns: string

### rename(oldPath: string, newPath: string, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:899](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L899)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldPath | string|  |
| newPath | string|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### renameSync(oldPath: string, newPath: string): void
  
* Defined in [lib/node/node.d.ts:900](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L900)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| oldPath | string|  |
| newPath | string|  |

#### Returns: void

### rmdir(path: string, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:942](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L942)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### rmdirSync(path: string): void
  
* Defined in [lib/node/node.d.ts:943](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L943)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: void

### stat(path: string, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), stats: [Stats](../interfaces/_fs_.stats.md))=> any): void
  
* Defined in [lib/node/node.d.ts:925](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L925)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), stats: [Stats](../interfaces/_fs_.stats.md))=> any|  |

#### Returns: void

### statSync(path: string): [Stats](../interfaces/_fs_.stats.md)
  
* Defined in [lib/node/node.d.ts:928](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L928)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: [Stats](../interfaces/_fs_.stats.md)

### symlink(srcpath: string, dstpath: string, type?: string, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:933](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L933)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| srcpath | string|  |
| dstpath | string|  |
| type? | string|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### symlinkSync(srcpath: string, dstpath: string, type?: string): void
  
* Defined in [lib/node/node.d.ts:934](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L934)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| srcpath | string|  |
| dstpath | string|  |
| type? | string|  |

#### Returns: void

### truncate(path: string, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): voidtruncate(path: string, len: number, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:901](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L901)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:902](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L902)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| len | number|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### truncateSync(path: string, len?: number): void
  
* Defined in [lib/node/node.d.ts:903](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L903)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| len? | number|  |

#### Returns: void

### unlink(path: string, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:940](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L940)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### unlinkSync(path: string): void
  
* Defined in [lib/node/node.d.ts:941](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L941)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |

#### Returns: void

### unwatchFile(filename: string, listener?: (curr: [Stats](../interfaces/_fs_.stats.md), prev: [Stats](../interfaces/_fs_.stats.md))=> void): void
  
* Defined in [lib/node/node.d.ts:991](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L991)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| listener? | (curr: [Stats](../interfaces/_fs_.stats.md), prev: [Stats](../interfaces/_fs_.stats.md))=> void|  |

#### Returns: void

### utimes(path: string, atime: number, mtime: number, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): voidutimes(path: string, atime: Date, mtime: Date, callback?: (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:958](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L958)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| atime | number|  |
| mtime | number|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:959](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L959)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| atime | Date|  |
| mtime | Date|  |
| callback? | (err?: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### utimesSync(path: string, atime: number, mtime: number): voidutimesSync(path: string, atime: Date, mtime: Date): void
  
* Defined in [lib/node/node.d.ts:960](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L960)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| atime | number|  |
| mtime | number|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:961](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L961)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| path | string|  |
| atime | Date|  |
| mtime | Date|  |

#### Returns: void

### watch(filename: string, listener?: (event: string, filename: string)=> any): [FSWatcher](../interfaces/_fs_.fswatcher.md)watch(filename: string, options: \{Optional persistent?: boolean\}, listener?: (event: string, filename: string)=> any): [FSWatcher](../interfaces/_fs_.fswatcher.md)
  
* Defined in [lib/node/node.d.ts:992](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L992)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| listener? | (event: string, filename: string)=> any|  |

#### Returns: [FSWatcher](../interfaces/_fs_.fswatcher.md)
  
* Defined in [lib/node/node.d.ts:993](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L993)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| options | \{Optional persistent?: boolean\}|  |
| listener? | (event: string, filename: string)=> any|  |

#### Returns: [FSWatcher](../interfaces/_fs_.fswatcher.md)

### watchFile(filename: string, listener: (curr: [Stats](../interfaces/_fs_.stats.md), prev: [Stats](../interfaces/_fs_.stats.md))=> void): voidwatchFile(filename: string, options: \{Optional interval?: number, Optional persistent?: boolean\}, listener: (curr: [Stats](../interfaces/_fs_.stats.md), prev: [Stats](../interfaces/_fs_.stats.md))=> void): void
  
* Defined in [lib/node/node.d.ts:989](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L989)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| listener | (curr: [Stats](../interfaces/_fs_.stats.md), prev: [Stats](../interfaces/_fs_.stats.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:990](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L990)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| options | \{Optional interval?: number, Optional persistent?: boolean\}|  |
| listener | (curr: [Stats](../interfaces/_fs_.stats.md), prev: [Stats](../interfaces/_fs_.stats.md))=> void|  |

#### Returns: void

### write(fd: number, buffer: [Buffer](../interfaces/buffer.md), offset: number, length: number, position: number, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), written: number, buffer: [Buffer](../interfaces/buffer.md))=> void): void
  
* Defined in [lib/node/node.d.ts:968](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L968)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| buffer | [Buffer](../interfaces/buffer.md)|  |
| offset | number|  |
| length | number|  |
| position | number|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md), written: number, buffer: [Buffer](../interfaces/buffer.md))=> void|  |

#### Returns: void

### writeFile(filename: string, data: any, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): voidwriteFile(filename: string, data: any, options: \{Optional encoding?: string, Optional flag?: string, Optional mode?: number\}, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): voidwriteFile(filename: string, data: any, options: \{Optional encoding?: string, Optional flag?: string, Optional mode?: string\}, callback?: (err: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void): void
  
* Defined in [lib/node/node.d.ts:979](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L979)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:980](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L980)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| options | \{Optional encoding?: string, Optional flag?: string, Optional mode?: number\}|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:981](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L981)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| options | \{Optional encoding?: string, Optional flag?: string, Optional mode?: string\}|  |
| callback? | (err: [ErrnoException](../interfaces/nodejs.errnoexception.md))=> void|  |

#### Returns: void

### writeFileSync(filename: string, data: any, options?: \{Optional encoding?: string, Optional flag?: string, Optional mode?: number\}): voidwriteFileSync(filename: string, data: any, options?: \{Optional encoding?: string, Optional flag?: string, Optional mode?: string\}): void
  
* Defined in [lib/node/node.d.ts:982](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L982)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| options? | \{Optional encoding?: string, Optional flag?: string, Optional mode?: number\}|  |

#### Returns: void
  
* Defined in [lib/node/node.d.ts:983](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L983)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| filename | string|  |
| data | any|  |
| options? | \{Optional encoding?: string, Optional flag?: string, Optional mode?: string\}|  |

#### Returns: void

### writeSync(fd: number, buffer: [Buffer](../interfaces/buffer.md), offset: number, length: number, position: number): number
  
* Defined in [lib/node/node.d.ts:969](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L969)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| fd | number|  |
| buffer | [Buffer](../interfaces/buffer.md)|  |
| offset | number|  |
| length | number|  |
| position | number|  |

#### Returns: number


Generated using [TypeDoc](http://typedoc.io)
