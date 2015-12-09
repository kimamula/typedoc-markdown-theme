# Enumeration PrettyPrintState
List of states the parser of [[PrettyPrintPlugin]] can be in.

## Index

### Enumeration members
* [Comment](td.output.prettyprintstate.md#comment)
* [Default](td.output.prettyprintstate.md#default)
* [Pre](td.output.prettyprintstate.md#pre)

## Enumeration members

### Comment: 
Comment state, the parser waits for a comment closing tag.
* Defined in [td/output/plugins/PrettyPrintPlugin.ts:15](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L15)


### Default: 
Default state of the parser. Empty lines will be removed and indention will be adjusted.
* Defined in [td/output/plugins/PrettyPrintPlugin.ts:10](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L10)


### Pre: 
Pre state, the parser waits for the closing tag of the current pre block.
* Defined in [td/output/plugins/PrettyPrintPlugin.ts:20](https://github.com/kimamula/typedoc/blob/HEAD/src/td/output/plugins/PrettyPrintPlugin.ts#L20)



Generated using [TypeDoc](http://typedoc.io)
