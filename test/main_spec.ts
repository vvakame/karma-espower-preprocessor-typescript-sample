describe("main.ts", () => {
    describe("hello", () => {
        it("returns 'Hello, world' without parameter", () => {
            var result = hello();
            assert(result === "Hello, World");
        });

        it("returns 'Hello, TypeScript' with parameter", () => {
            var result = hello("typeScript");
            assert(result === "Hello, TypeScript");
        });
    });
});
