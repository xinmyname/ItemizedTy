NAME=itemize
OUTPUTDIR=./bin
TARGET=$(OUTPUTDIR)/$(NAME)
WEBPACK=./node_modules/.bin/webpack
WEBPACKFLAGS=
MOCHA=./node_modules/.bin/mocha
TESTDIR=./tests

.PHONY: debug
debug: WEBPACKFLAGS+=--debug --env.production=false
debug: all

.PHONY: release
release: WEBPACKFLAGS+=-p --env.production=true
release: all

.PHONY: build
build: debug

all:
	rm -rf $(OUTPUTDIR)
	yarn
	$(WEBPACK) $(WEBPACKFLAGS)
	echo "#!/usr/bin/env node" > $(TARGET)
	echo "require('./$(NAME).js')" >> $(TARGET)
	chmod +x $(TARGET)

test:
	$(MOCHA) $(TESTDIR)/*.ts --require ./node_modules/ts-node/register.js

clean:
	rm -rf $(OUTPUTDIR)
