"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName} ${upper}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName} ${upper}`;
        }
    };
    let noName = "tony";
    const name = fullName(noName, "starks");
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map