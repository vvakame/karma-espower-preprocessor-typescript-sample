# karma-espower-preprocessor-sample

sample of [karma-espower-preprocessor](https://www.npmjs.org/package/karma-espower-preprocessor).

## How to use

```
$ git clone git@github.com:vvakame/karma-espower-preprocessor-sample.git
$ npm install
$ bower install
$ karma start
INFO [karma]: Karma v0.12.24 server started at http://localhost:9876/
INFO [launcher]: Starting browser Chrome
INFO [Chrome 38.0.2125 (Mac OS X 10.9.5)]: Connected on socket 9U3GjglcRx2LCNZfLk-z with id 21974024
Chrome 38.0.2125 (Mac OS X 10.9.5) index.js hello returns 'Hello, TypeScript' with parameter FAILED
	AssertionError: # /private/tmp/karma-espower-preprocessor-sample/test/main_spec.js:10

	assert(result === "Hello, TypeScript")
	       |      |
	       |      false
	       "Hello, typeScript"

	--- [string] "Hello, TypeScript"
	+++ [string] result
	@@ -4,9 +4,9 @@
	 lo,
	-T
	+t
	 ypeS


	    at decoratedAssert (/private/tmp/karma-espower-preprocessor-sample/bower_components/power-assert/build/power-assert.js:1546:26)
	    at powerAssert (/private/tmp/karma-espower-preprocessor-sample/bower_components/power-assert/build/power-assert.js:1451:32)
	    at Context.<anonymous> (/private/tmp/karma-espower-preprocessor-sample/test/main_spec.espowered.js:13:27 <- /private/tmp/karma-espower-preprocessor-sample/test/main_spec.js:10:19)
Chrome 38.0.2125 (Mac OS X 10.9.5): Executed 2 of 2 (1 FAILED) (0.027 secs / 0.012 secs)
```
