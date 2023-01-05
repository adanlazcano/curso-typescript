"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3 ? true : false;
    };
    Validations.validateDate = (date) => {
        return isNaN(date.valueOf()) ? true : false;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Fe'));
console.log(Validations.validateDate(new Date()));
//# sourceMappingURL=main.js.map