#!/usr/bin/env node

import process
    from 'node:process';

import { validate }
    from '../scripts/validate.mjs';

import { packageTheme }
    from '../scripts/package.mjs';

import { syncVersion }
    from '../scripts/release/SyncVersion.mjs';

const command =
    process.argv[2];

try {

    switch (command) {

        case 'validate':

            await validate();
            break;

        case 'package':

            await packageTheme();
            break;


        case 'sync-version':

            await syncVersion()
            break;

    break;

        default:
            usage();
            process.exit(1);

    }

} catch (error) {

    console.log('');

    console.error(
        `✗ ${error.message}`
    );

    console.log('');

    process.exit(1);

}

/**
 * Show CLI usage.
 */
function usage() {

    console.log('');

    console.log(
        'SWG Theme CLI'
    );

    console.log('');

    console.log(
        'Usage'
    );

    console.log('');

    console.log(
        '  node bin/swg.mjs validate'
    );

    console.log(
        '  node bin/swg.mjs package'
    );

    console.log(
        '  node bin/swg.mjs sync-version'
    );

    console.log('');

}