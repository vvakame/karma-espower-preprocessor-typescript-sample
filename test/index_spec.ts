/// <reference path="../lib/index.ts" />

/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/assert/assert.d.ts" />

/// <reference path="./sub/index_spec.ts" />

describe("index.ts", function () {
    describe("hello", function () {
        it("returns 'Hello, world' without parameter", function () {
            var result = hello();
            assert(result === "Hello, World");
        });

        it("returns 'Hello, TypeScript' with parameter", function () {
            var result = hello("typeScript");
            assert(result === "Hello, TypeScript");
        });
    });
});
