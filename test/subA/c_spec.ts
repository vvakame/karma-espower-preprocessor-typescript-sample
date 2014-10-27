describe("subA/c.ts", function () {
    describe("c", function () {
        it("returns 'Oh, c' without parameter", function () {
            var result = subA.c();
            assert(result === "Oh, c");
        });

        it("returns 'Oh, C' with parameter", function () {
            var result = subA.c("C");
            assert(result === "Oh, c");
        });
    });
});
