import fs
    from 'node:fs';

/**
 * Synchronize the version in theme.json
 * with the version from package.json.
 */
export async function syncVersion() {

    const packageJson =
        JSON.parse(

            fs.readFileSync(
                'package.json',
                'utf8'
            )

        );

    const themeJson =
        JSON.parse(

            fs.readFileSync(
                'theme.json',
                'utf8'
            )

        );

    themeJson.version =
        packageJson.version;

    fs.writeFileSync(

        'theme.json',

        JSON.stringify(
            themeJson,
            null,
            4
        ) + '\n'

    );

    console.log('');

    console.log(
        'SWG Version Sync'
    );

    console.log('');

    console.log(
        ` ✓ package.json : ${packageJson.version}`
    );

    console.log(
        ` ✓ theme.json   : ${themeJson.version}`
    );

    console.log('');

    console.log(
        '✔ Versions synchronized.'
    );

}