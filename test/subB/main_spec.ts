describe("subB/main.ts", function () {
    describe("bye", function () {
        it("returns 'Good bye, world' without parameter", function () {
            var result = subB.bye();
            assert(result === "Good bye, World");
        });

        it("returns 'Good bye, TypeScript' with parameter", function () {
            var result = subB.bye("typeScript");
            assert(result === "Good bye, TypeScript");
        });
    });
});
