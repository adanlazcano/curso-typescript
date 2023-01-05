"use strict";
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(" ")}`;
    };
    const name = fullName("tony", "starks", "adomaitis");
    console.log({ name });
})();
//# sourceMappingURL=args-rest.js.map