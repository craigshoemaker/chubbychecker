
const _module = {
    stringBefore: (input, firstString, secondString) => {
        const firstStringIndex = input.indexOf(firstString)
            , secondStringIndex = input.indexOf(secondString)
        ;
    
        return firstStringIndex < secondStringIndex;
    }
};

module.exports = _module;