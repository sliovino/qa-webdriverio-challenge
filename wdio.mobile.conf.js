import { config as desktopConfig } from './wdio.desktop.conf.js';

export const config = {
    ...desktopConfig,
    runner: 'local',

    specs: [
        './test/specs/*.js',
        './test/specs/bugs/*.js'
    ],

    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            mobileEmulation: {
                deviceName: 'iPhone X'
            },
            args: [
                '--window-size=375,812',
                '--headless=new',
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--user-data-dir=/tmp/chrome-user-data'
            ]
        }
    }],

    jasmineOpts: {
        defaultTimeoutInterval: 60000
    }
};

