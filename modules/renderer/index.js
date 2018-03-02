const renderStrategies = {
    markdown: require('./markdownRenderer')
};

const _module = {

    render: (input, strategy) => {
        let result = input;

        if(strategy && !!renderStrategies[strategy]) {
            result = renderStrategies[strategy].render(input);
        }

        return result;
    } 

};

module.exports = _module;