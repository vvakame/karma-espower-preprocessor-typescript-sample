describe("sub/a.ts", function () {
    describe("a", function () {
        it("returns 'Oh, a' without parameter", function () {
            var result = sub.a();
            assert(result === "Oh, a");
        });

        it("returns 'Oh, A' with parameter", function () {
            var result = sub.a("A");
            assert(result === "Oh, a");
        });
    });
});
