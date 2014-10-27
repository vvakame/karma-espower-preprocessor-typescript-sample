/// <reference path="./a.ts" />
/// <reference path="./b.ts" />
/// <reference path="./c.ts" />

module sub {
    "use strict";

    export function bye(word = "World") {
        return "Good bye, " + word;
    }
}
