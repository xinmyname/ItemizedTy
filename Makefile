itemize:
	yarn
	./node_modules/.bin/tsc

run:
	node ./bin/itemize.js

clean:
	rm -rf ./bin
