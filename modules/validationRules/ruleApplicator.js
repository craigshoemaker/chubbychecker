module.exports = (input, rules) => {
    const 
          brokenRuleDescriptions = []
        , numberOfRules = rules.length
    ;

    rules.forEach(rule => {
        if(!rule.apply(input)) {
            brokenRuleDescriptions.push(rule.description);
        };
    });

    const 
          numberOfBrokenRules = brokenRuleDescriptions.length
        , numberOfUnbrokenRules = numberOfRules - numberOfBrokenRules
    ;

    return {
        brokenRules: brokenRuleDescriptions,
        allPassed: numberOfBrokenRules === 0,
        total: numberOfRules,
        passed: numberOfUnbrokenRules,
        failed: numberOfBrokenRules
    };
};