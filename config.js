var config = {
    logLevel: 'DEBUG',
    contextBroker: {
        host: '192.168.1.199',
        port: '1026'
    },
    server: {
        port: 4040
    },
    deviceRegistry: {
        type: 'memory'
    },
    types: {
    },
    service: 'omitest',
    subservice: '/omi',
    providerUrl: 'http://192.168.1.199:4040',
    deviceRegistrationDuration: 'P1M',
    defaultType: 'Thing'
};

module.exports = config;
