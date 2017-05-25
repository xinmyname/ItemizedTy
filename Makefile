itemize:
	yarn
	./node_modules/.bin/webpack -p --config webpack.config.prod.js
	echo "#!/usr/bin/env node" > ./bin/itemize
	echo "require('./itemize.js')" >> ./bin/itemize
	chmod +x ./bin/itemize

run:
	node ./bin/itemize.js

clean:
	rm -rf ./bin
