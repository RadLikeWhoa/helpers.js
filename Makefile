HR=\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#
CHECK=\033[32m✔\033[39m
DATE=$(shell date +%I:%M%p)

build:
	@echo "\n${HR}\n"
	@echo " Running JSHint...              ${CHECK} Done"
	@./node_modules/.bin/jshint Functions/*.js Number/*.js String/*.js
	@echo " Concatenating files...         ${CHECK} Done"
	@cat Functions/*.js Number/*.js String/*.js > helpers.js
	@echo " Running UglifyJS...            ${CHECK} Done"
	@./node_modules/.bin/uglifyjs helpers.js > helpers.min.js -mc
	@echo " Built \033[32mhelpers.js\033[39m at ${DATE}.\n"
	@echo "${HR}\n"

test:
	@open tests/index.html