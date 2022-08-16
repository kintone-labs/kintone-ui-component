
module.exports = config => {
    return {  
        nodeResolve: { mainFields: ["module", "main", "browser"] },
        files: './unit_test/**/test/*.test.js',
        coverage: true,
        coverageConfig: {
            threshold:{
                statements: 90,
                branches: 90,
                functions: 90,
                lines: 90
            }
        },
    };
}
  