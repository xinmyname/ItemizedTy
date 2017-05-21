# ItemizedTy

This is the TypeScript+Node version of Itemized. The program adds items to inventory and then prints out how many items you have. You can specify how many items to add by passing a number as an argument. If you don't specify any items, you will receive one item. 

Yes, it's very simple. That's the idea.

## Example

    $> node ./bin/itemize.js
    You have:
    An item
    $> node ./bin/itemize.js 4
    You have:
    Four items
    $> node ./bin/itemize.js 42
    You have: 
    42 items

# Prerequisites
- node 7.10.0
- yarn 0.24.5

## Building

    make

## Running

    node ./bin/itemize.js <count>

## Removal

    make clean

## Notes

This was a LOT of trouble to setup and it's probably not idiomatic. Combining node and TypeScript for a CLI was way more difficult than I thought it would be. I would really like to squash the transpiled files into a single JS file somehow. I tried webpack, but it wanted to include the node_modules, which didn't work so well.
