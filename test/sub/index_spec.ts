/// <reference path="./a_spec.ts" />

describe("sub/index.ts", function () {
    describe("bye", function () {
        it("returns 'Good bye, world' without parameter", function () {
            var result = sub.bye();
            assert(result === "Good bye, World");
        });

        it("returns 'Good bye, TypeScript' with parameter", function () {
            var result = sub.bye("typeScript");
            assert(result === "Good bye, TypeScript");
        });
    });
});
