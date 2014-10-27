describe("subA/b.ts", function () {
    describe("b", function () {
        it("returns 'Oh, b' without parameter", function () {
            var result = subA.b();
            assert(result === "Oh, b");
        });

        it("returns 'Oh, B' with parameter", function () {
            var result = subA.b("B");
            assert(result === "Oh, b");
        });
    });
});
