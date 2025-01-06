// Defining an object with a 'function' property set to 'lognormal'
let config = {
    'function': 'lognormal',
    'mean': 0,
    'variance': 1
};

// Example function utilizing the config object
function processConfig(config) {
    if (config['function'] === 'lognormal') {
        console.log(`Processing a lognormal function with mean ${config.mean} and variance ${config.variance}`);
    } else {
        console.log('Unknown function type');
    }
}

// Using the config object
processConfig(config);
