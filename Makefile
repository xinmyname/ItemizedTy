itemize:
	yarn
	./node_modules/.bin/webpack
	ex -sc '1i|#! /usr/bin/env node' -cx ./bin/itemize
	chmod +x ./bin/itemize

clean:
	rm -rf ./bin
	rm -rf ./node_modules
