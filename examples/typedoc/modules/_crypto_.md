# Module "crypto"


## Index

### Interfaces
* [Cipher](../interfaces/_crypto_.cipher.md)
* [CredentialDetails](../interfaces/_crypto_.credentialdetails.md)
* [Credentials](../interfaces/_crypto_.credentials.md)
* [Decipher](../interfaces/_crypto_.decipher.md)
* [DiffieHellman](../interfaces/_crypto_.diffiehellman.md)
* [Hash](../interfaces/_crypto_.hash.md)
* [Hmac](../interfaces/_crypto_.hmac.md)
* [Signer](../interfaces/_crypto_.signer.md)
* [Verify](../interfaces/_crypto_.verify.md)

### Functions
* [createCipher](_crypto_.md#createcipher)
* [createCipheriv](_crypto_.md#createcipheriv)
* [createCredentials](_crypto_.md#createcredentials)
* [createDecipher](_crypto_.md#createdecipher)
* [createDecipheriv](_crypto_.md#createdecipheriv)
* [createDiffieHellman](_crypto_.md#creatediffiehellman)
* [createHash](_crypto_.md#createhash)
* [createHmac](_crypto_.md#createhmac)
* [createSign](_crypto_.md#createsign)
* [createVerify](_crypto_.md#createverify)
* [getDiffieHellman](_crypto_.md#getdiffiehellman)
* [pbkdf2](_crypto_.md#pbkdf2)
* [pbkdf2Sync](_crypto_.md#pbkdf2sync)
* [pseudoRandomBytes](_crypto_.md#pseudorandombytes)
* [randomBytes](_crypto_.md#randombytes)

## Functions

### createCipher(algorithm: string, password: any): [Cipher](../interfaces/_crypto_.cipher.md)
  
* Defined in [lib/node/node.d.ts:1162](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1162)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |
| password | any|  |

#### Returns: [Cipher](../interfaces/_crypto_.cipher.md)

### createCipheriv(algorithm: string, key: any, iv: any): [Cipher](../interfaces/_crypto_.cipher.md)
  
* Defined in [lib/node/node.d.ts:1163](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1163)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |
| key | any|  |
| iv | any|  |

#### Returns: [Cipher](../interfaces/_crypto_.cipher.md)

### createCredentials(details: [CredentialDetails](../interfaces/_crypto_.credentialdetails.md)): [Credentials](../interfaces/_crypto_.credentials.md)
  
* Defined in [lib/node/node.d.ts:1146](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1146)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| details | [CredentialDetails](../interfaces/_crypto_.credentialdetails.md)|  |

#### Returns: [Credentials](../interfaces/_crypto_.credentials.md)

### createDecipher(algorithm: string, password: any): [Decipher](../interfaces/_crypto_.decipher.md)
  
* Defined in [lib/node/node.d.ts:1171](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1171)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |
| password | any|  |

#### Returns: [Decipher](../interfaces/_crypto_.decipher.md)

### createDecipheriv(algorithm: string, key: any, iv: any): [Decipher](../interfaces/_crypto_.decipher.md)
  
* Defined in [lib/node/node.d.ts:1172](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1172)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |
| key | any|  |
| iv | any|  |

#### Returns: [Decipher](../interfaces/_crypto_.decipher.md)

### createDiffieHellman(prime_length: number): [DiffieHellman](../interfaces/_crypto_.diffiehellman.md)createDiffieHellman(prime: number, encoding?: string): [DiffieHellman](../interfaces/_crypto_.diffiehellman.md)
  
* Defined in [lib/node/node.d.ts:1190](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1190)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| prime_length | number|  |

#### Returns: [DiffieHellman](../interfaces/_crypto_.diffiehellman.md)
  
* Defined in [lib/node/node.d.ts:1191](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1191)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| prime | number|  |
| encoding? | string|  |

#### Returns: [DiffieHellman](../interfaces/_crypto_.diffiehellman.md)

### createHash(algorithm: string): [Hash](../interfaces/_crypto_.hash.md)
  
* Defined in [lib/node/node.d.ts:1147](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1147)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |

#### Returns: [Hash](../interfaces/_crypto_.hash.md)

### createHmac(algorithm: string, key: string): [Hmac](../interfaces/_crypto_.hmac.md)createHmac(algorithm: string, key: [Buffer](../interfaces/buffer.md)): [Hmac](../interfaces/_crypto_.hmac.md)
  
* Defined in [lib/node/node.d.ts:1148](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1148)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |
| key | string|  |

#### Returns: [Hmac](../interfaces/_crypto_.hmac.md)
  
* Defined in [lib/node/node.d.ts:1149](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1149)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |
| key | [Buffer](../interfaces/buffer.md)|  |

#### Returns: [Hmac](../interfaces/_crypto_.hmac.md)

### createSign(algorithm: string): [Signer](../interfaces/_crypto_.signer.md)
  
* Defined in [lib/node/node.d.ts:1180](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1180)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorithm | string|  |

#### Returns: [Signer](../interfaces/_crypto_.signer.md)

### createVerify(algorith: string): [Verify](../interfaces/_crypto_.verify.md)
  
* Defined in [lib/node/node.d.ts:1185](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1185)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| algorith | string|  |

#### Returns: [Verify](../interfaces/_crypto_.verify.md)

### getDiffieHellman(group_name: string): [DiffieHellman](../interfaces/_crypto_.diffiehellman.md)
  
* Defined in [lib/node/node.d.ts:1202](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1202)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| group_name | string|  |

#### Returns: [DiffieHellman](../interfaces/_crypto_.diffiehellman.md)

### pbkdf2(password: string, salt: string, iterations: number, keylen: number, callback: (err: Error, derivedKey: [Buffer](../interfaces/buffer.md))=> any): void
  
* Defined in [lib/node/node.d.ts:1203](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1203)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| password | string|  |
| salt | string|  |
| iterations | number|  |
| keylen | number|  |
| callback | (err: Error, derivedKey: [Buffer](../interfaces/buffer.md))=> any|  |

#### Returns: void

### pbkdf2Sync(password: string, salt: string, iterations: number, keylen: number): [Buffer](../interfaces/buffer.md)
  
* Defined in [lib/node/node.d.ts:1204](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1204)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| password | string|  |
| salt | string|  |
| iterations | number|  |
| keylen | number|  |

#### Returns: [Buffer](../interfaces/buffer.md)

### pseudoRandomBytes(size: number): [Buffer](../interfaces/buffer.md)pseudoRandomBytes(size: number, callback: (err: Error, buf: [Buffer](../interfaces/buffer.md))=> void): void
  
* Defined in [lib/node/node.d.ts:1207](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1207)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size | number|  |

#### Returns: [Buffer](../interfaces/buffer.md)
  
* Defined in [lib/node/node.d.ts:1208](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1208)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size | number|  |
| callback | (err: Error, buf: [Buffer](../interfaces/buffer.md))=> void|  |

#### Returns: void

### randomBytes(size: number): [Buffer](../interfaces/buffer.md)randomBytes(size: number, callback: (err: Error, buf: [Buffer](../interfaces/buffer.md))=> void): void
  
* Defined in [lib/node/node.d.ts:1205](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1205)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size | number|  |

#### Returns: [Buffer](../interfaces/buffer.md)
  
* Defined in [lib/node/node.d.ts:1206](https://github.com/kimamula/typedoc/blob/HEAD/src/lib/node/node.d.ts#L1206)


#### Parameters

| Name | Type | Description |
| ---- | ---- | ---- |
| size | number|  |
| callback | (err: Error, buf: [Buffer](../interfaces/buffer.md))=> void|  |

#### Returns: void


Generated using [TypeDoc](http://typedoc.io)
