NAME=itemize
OUTPUTDIR=./bin
TARGET=$(OUTPUTDIR)/$(NAME)
WEBPACK=./node_modules/.bin/webpack
WEBPACKFLAGS=

.PHONY: debug
debug: WEBPACKFLAGS+=--debug --env.production=false
debug: all

.PHONY: release
release: WEBPACKFLAGS+=-p --env.production=true
release: all

all:
	rm -rf $(OUTPUTDIR)
	yarn
	$(WEBPACK) $(WEBPACKFLAGS)
	echo "#!/usr/bin/env node" > $(TARGET)
	echo "require('./$(NAME).js')" >> $(TARGET)
	chmod +x $(TARGET)

clean:
	rm -rf $(OUTPUTDIR)
