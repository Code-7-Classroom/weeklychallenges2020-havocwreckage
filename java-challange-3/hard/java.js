var humanInfo = (function (personalData) {
    var pii = {
        name: 'John mcgee',
        ssn: '098-76-7890'
    }
    return public = {
        getName: function getName() {
            return pii.name;
        }
    };
})();
console.log(humanInfo.getName());