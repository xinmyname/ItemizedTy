itemize:
	./node_modules/.bin/webpack
	ex -sc '1i|#! /usr/bin/env node' -cx ./bin/itemize.js
	yarn link

clean:
	yarn unlink
	rm -rf ./bin
	