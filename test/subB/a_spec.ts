describe("subB/a.ts", function () {
    describe("a", function () {
        it("returns 'Oh, a' without parameter", function () {
            var result = subB.a();
            assert(result === "Oh, a");
        });

        it("returns 'Oh, A' with parameter", function () {
            var result = subB.a("A");
            assert(result === "Oh, a");
        });
    });
});
