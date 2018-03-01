const rules = {
    general: require('./generalRules'),
    overview: require('./overviewRules'),
    quickstart: require('./quickstartRules'),
    tutorial: require('./tutorialRules')
};
    
const _module = {

    apply: (input, type) => {

        let generalResults, typeResults, results = {};

        if(!!rules[type]) {
            generalResults = rules.general.apply(input);
            typeResults = rules[type].apply(input);

            results = {
                details: [generalResults, typeResults],
                allPassed: generalResults.allPassed && typeResults.allPassed,
                total: generalResults.total + typeResults.total,
                passed: generalResults.passed + typeResults.passed,
                failed: generalResults.failed + typeResults.failed
            };
        }

        return results;
    }
};

module.exports = _module;