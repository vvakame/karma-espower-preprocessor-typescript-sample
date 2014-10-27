describe("subB/b.ts", function () {
    describe("b", function () {
        it("returns 'Oh, b' without parameter", function () {
            var result = subB.b();
            assert(result === "Oh, b");
        });

        it("returns 'Oh, B' with parameter", function () {
            var result = subB.b("B");
            assert(result === "Oh, b");
        });
    });
});
