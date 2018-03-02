

const _module = {

    render: result => {
        const builder = [];

        builder.push('\n');
        builder.push(`## Validation Summary:`);
        builder.push(`- Total: ${result.total}, Passed: ${result.passed}, Failed: ${result.failed}`);

        builder.push('\n');
        
        result.details.forEach(item => {
            builder.push(`### ${item.type}`);
            builder.push(`- Total: ${item.total}, Passed: ${item.passed}, Failed: ${item.failed}`);
            builder.push('- Broken rules:');
            builder.push('  * ' + item.brokenRules.join('\n  * '));
            builder.push('\n');
        });

        return builder.join('\n');
    }

};

module.exports = _module;