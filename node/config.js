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
        type: 'mongodb'
    },
    mongodb: {
        host: 'mongo',
        port: '27017',
        db: 'iotagent',
        retries: 5,
        retryTime: 5
    },
    types: {
    },
    service: 'omitest',
    subservice: '/',
    providerUrl: 'http://192.168.1.199:4040',
    deviceRegistrationDuration: 'P1M',
    defaultType: 'thing'
};

module.exports = config;
