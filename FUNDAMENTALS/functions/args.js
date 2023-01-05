"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('required name');
        }
        return `${firstName} ${lastName}`;
    };
    let noName = 'tony';
    const name = fullName(noName, true);
    console.log({ name });
})();
//# sourceMappingURL=args.js.map