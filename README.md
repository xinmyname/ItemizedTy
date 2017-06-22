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

## Prerequisites
- node 7.10.0
- yarn 0.24.5

## Building

    make

## Running

    ./bin/itemize <count>

## Running with ts-node (unpacked)

    ./node_modules/.bin/ts-node src/main.ts 42    

## Testing
    make test

## Removal

    make clean

## Notes
This was a LOT of trouble to setup and it's probably not idiomatic. I'm honestly surprised it works, but it does compile and bundle the app to a single .js file, with a .map, which is great.

## The Good Parts
- Garbage collected
- Tuples are just arrays

## Airing of Grievances
- Feature poor runtime library
- Build your own build system
- WET (write everything twice) module syntax 
- Tuples are just arrays