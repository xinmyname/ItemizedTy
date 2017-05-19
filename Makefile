itemize:
	yarn
	./node_modules/.bin/tsc

run:
	node ./bin/main.js

clean:
	rm -rf ./bin
