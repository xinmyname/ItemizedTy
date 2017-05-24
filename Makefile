itemize:
	yarn
	./node_modules/.bin/webpack

run:
	node ./bin/itemize.js

clean:
	rm -rf ./bin
