# Interface Buffer


### Extends
* [NodeBuffer](nodebuffer.md)

### Indexable
[index: number] number


## Index

### Properties
* [length](buffer.md#length)

### Methods
* [copy](buffer.md#copy)
* [fill](buffer.md#fill)
* [readDoubleBE](buffer.md#readdoublebe)
* [readDoubleLE](buffer.md#readdoublele)
* [readFloatBE](buffer.md#readfloatbe)
* [readFloatLE](buffer.md#readfloatle)
* [readInt16BE](buffer.md#readint16be)
* [readInt16LE](buffer.md#readint16le)
* [readInt32BE](buffer.md#readint32be)
* [readInt32LE](buffer.md#readint32le)
* [readInt8](buffer.md#readint8)
* [readUInt16BE](buffer.md#readuint16be)
* [readUInt16LE](buffer.md#readuint16le)
* [readUInt32BE](buffer.md#readuint32be)
* [readUInt32LE](buffer.md#readuint32le)
* [readUInt8](buffer.md#readuint8)
* [slice](buffer.md#slice)
* [toJSON](buffer.md#tojson)
* [toString](buffer.md#tostring)
* [write](buffer.md#write)
* [writeDoubleBE](buffer.md#writedoublebe)
* [writeDoubleLE](buffer.md#writedoublele)
* [writeFloatBE](buffer.md#writefloatbe)
* [writeFloatLE](buffer.md#writefloatle)
* [writeInt16BE](buffer.md#writeint16be)
* [writeInt16LE](buffer.md#writeint16le)
* [writeInt32BE](buffer.md#writeint32be)
* [writeInt32LE](buffer.md#writeint32le)
* [writeInt8](buffer.md#writeint8)
* [writeUInt16BE](buffer.md#writeuint16be)
* [writeUInt16LE](buffer.md#writeuint16le)
* [writeUInt32BE](buffer.md#writeuint32be)
* [writeUInt32LE](buffer.md#writeuint32le)
* [writeUInt8](buffer.md#writeuint8)

## Properties

### length: number

* Inherited from [NodeBuffer](nodebuffer.md).[length](nodebuffer.md#length)
* Defined in [lib/node/node.d.ts:207](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L207)


## Methods

### copy(targetBuffer: [Buffer](buffer.md), targetStart?: number, sourceStart?: number, sourceEnd?: number): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[copy](nodebuffer.md#copy)
* Defined in [lib/node/node.d.ts:208](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L208)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| targetBuffer | [Buffer](buffer.md)|  |
| targetStart? | number|  |
| sourceStart? | number|  |
| sourceEnd? | number|  |

#### Returns: number

### fill(value: any, offset?: number, end?: number): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[fill](nodebuffer.md#fill)
* Defined in [lib/node/node.d.ts:238](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L238)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | any|  |
| offset? | number|  |
| end? | number|  |

#### Returns: void

### readDoubleBE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[readDoubleBE](nodebuffer.md#readdoublebe)
* Defined in [lib/node/node.d.ts:223](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L223)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readDoubleLE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[readDoubleLE](nodebuffer.md#readdoublele)
* Defined in [lib/node/node.d.ts:222](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L222)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readFloatBE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[readFloatBE](nodebuffer.md#readfloatbe)
* Defined in [lib/node/node.d.ts:221](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L221)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readFloatLE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[readFloatLE](nodebuffer.md#readfloatle)
* Defined in [lib/node/node.d.ts:220](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L220)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readInt16BE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[readInt16BE](nodebuffer.md#readint16be)
* Defined in [lib/node/node.d.ts:217](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L217)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readInt16LE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[readInt16LE](nodebuffer.md#readint16le)
* Defined in [lib/node/node.d.ts:216](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L216)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readInt32BE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[readInt32BE](nodebuffer.md#readint32be)
* Defined in [lib/node/node.d.ts:219](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L219)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readInt32LE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[readInt32LE](nodebuffer.md#readint32le)
* Defined in [lib/node/node.d.ts:218](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L218)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readInt8(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[readInt8](nodebuffer.md#readint8)
* Defined in [lib/node/node.d.ts:215](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L215)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readUInt16BE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[readUInt16BE](nodebuffer.md#readuint16be)
* Defined in [lib/node/node.d.ts:212](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L212)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readUInt16LE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[readUInt16LE](nodebuffer.md#readuint16le)
* Defined in [lib/node/node.d.ts:211](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L211)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readUInt32BE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[readUInt32BE](nodebuffer.md#readuint32be)
* Defined in [lib/node/node.d.ts:214](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L214)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readUInt32LE(offset: number, noAssert?: boolean): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[readUInt32LE](nodebuffer.md#readuint32le)
* Defined in [lib/node/node.d.ts:213](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L213)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: number

### readUInt8(offset: number, noAsset?: boolean): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[readUInt8](nodebuffer.md#readuint8)
* Defined in [lib/node/node.d.ts:210](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L210)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| offset | number|  |
| noAsset? | boolean|  |

#### Returns: number

### slice(start?: number, end?: number): [Buffer](buffer.md)
  
* Inherited from [NodeBuffer](nodebuffer.md).[slice](nodebuffer.md#slice)
* Defined in [lib/node/node.d.ts:209](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L209)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| start? | number|  |
| end? | number|  |

#### Returns: [Buffer](buffer.md)

### toJSON(): any
  
* Inherited from [NodeBuffer](nodebuffer.md).[toJSON](nodebuffer.md#tojson)
* Defined in [lib/node/node.d.ts:206](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L206)

#### Returns: any

### toString(encoding?: string, start?: number, end?: number): string
  
* Inherited from [NodeBuffer](nodebuffer.md).[toString](nodebuffer.md#tostring)
* Defined in [lib/node/node.d.ts:205](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L205)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| encoding? | string|  |
| start? | number|  |
| end? | number|  |

#### Returns: string

### write(string: string, offset?: number, length?: number, encoding?: string): number
  
* Inherited from [NodeBuffer](nodebuffer.md).[write](nodebuffer.md#write)
* Defined in [lib/node/node.d.ts:204](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L204)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| string | string|  |
| offset? | number|  |
| length? | number|  |
| encoding? | string|  |

#### Returns: number

### writeDoubleBE(value: number, offset: number, noAssert?: boolean): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[writeDoubleBE](nodebuffer.md#writedoublebe)
* Defined in [lib/node/node.d.ts:237](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L237)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: void

### writeDoubleLE(value: number, offset: number, noAssert?: boolean): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[writeDoubleLE](nodebuffer.md#writedoublele)
* Defined in [lib/node/node.d.ts:236](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L236)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: void

### writeFloatBE(value: number, offset: number, noAssert?: boolean): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[writeFloatBE](nodebuffer.md#writefloatbe)
* Defined in [lib/node/node.d.ts:235](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L235)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: void

### writeFloatLE(value: number, offset: number, noAssert?: boolean): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[writeFloatLE](nodebuffer.md#writefloatle)
* Defined in [lib/node/node.d.ts:234](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L234)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: void

### writeInt16BE(value: number, offset: number, noAssert?: boolean): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[writeInt16BE](nodebuffer.md#writeint16be)
* Defined in [lib/node/node.d.ts:231](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L231)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: void

### writeInt16LE(value: number, offset: number, noAssert?: boolean): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[writeInt16LE](nodebuffer.md#writeint16le)
* Defined in [lib/node/node.d.ts:230](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L230)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: void

### writeInt32BE(value: number, offset: number, noAssert?: boolean): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[writeInt32BE](nodebuffer.md#writeint32be)
* Defined in [lib/node/node.d.ts:233](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L233)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: void

### writeInt32LE(value: number, offset: number, noAssert?: boolean): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[writeInt32LE](nodebuffer.md#writeint32le)
* Defined in [lib/node/node.d.ts:232](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L232)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: void

### writeInt8(value: number, offset: number, noAssert?: boolean): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[writeInt8](nodebuffer.md#writeint8)
* Defined in [lib/node/node.d.ts:229](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L229)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: void

### writeUInt16BE(value: number, offset: number, noAssert?: boolean): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[writeUInt16BE](nodebuffer.md#writeuint16be)
* Defined in [lib/node/node.d.ts:226](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L226)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: void

### writeUInt16LE(value: number, offset: number, noAssert?: boolean): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[writeUInt16LE](nodebuffer.md#writeuint16le)
* Defined in [lib/node/node.d.ts:225](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L225)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: void

### writeUInt32BE(value: number, offset: number, noAssert?: boolean): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[writeUInt32BE](nodebuffer.md#writeuint32be)
* Defined in [lib/node/node.d.ts:228](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L228)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: void

### writeUInt32LE(value: number, offset: number, noAssert?: boolean): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[writeUInt32LE](nodebuffer.md#writeuint32le)
* Defined in [lib/node/node.d.ts:227](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L227)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: void

### writeUInt8(value: number, offset: number, noAssert?: boolean): void
  
* Inherited from [NodeBuffer](nodebuffer.md).[writeUInt8](nodebuffer.md#writeuint8)
* Defined in [lib/node/node.d.ts:224](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L224)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| value | number|  |
| offset | number|  |
| noAssert? | boolean|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
