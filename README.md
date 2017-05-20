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
This was a LOT of trouble to setup and it's probably not idiomatic. Combining node and TypeScript for a CLI was way more difficult than I thought it would be. I would really like to squash all of the TypeScript into a single JS file somehow. I tried webpack, but it wanted to include the node_modules, which didn't work so well.

