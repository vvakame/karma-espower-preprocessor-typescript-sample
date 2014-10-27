describe("subA/main.ts", function () {
    describe("bye", function () {
        it("returns 'Good bye, world' without parameter", function () {
            var result = subA.bye();
            assert(result === "Good bye, World");
        });

        it("returns 'Good bye, TypeScript' with parameter", function () {
            var result = subA.bye("typeScript");
            assert(result === "Good bye, TypeScript");
        });
    });
});
