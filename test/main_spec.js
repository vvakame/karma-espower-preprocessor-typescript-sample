describe("index.js", function () {
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
