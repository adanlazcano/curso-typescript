"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '---'}`;
    };
    let noName = 'tony';
    const name = fullName(noName);
    console.log({ name });
})();
//# sourceMappingURL=args-optionals.js.map