HR=\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#
CHECK=\033[32m✔\033[39m
DATE=$(shell date +%I:%M%p)

build:
	@echo "\n${HR}\n\n\n"
	@echo "Running JSHint...              ${CHECK} Done"
	@jshint Functions/*.js Number/*.js String/*.js
	@echo "Combining files...             ${CHECK} Done"
	@cat Functions/*.js Number/*.js String/*.js > helpers.js
	@echo "Running UglifyJS...            ${CHECK} Done"
	@uglifyjs helpers.js > helpers.min.js -mc
	@echo "${HR}\n"