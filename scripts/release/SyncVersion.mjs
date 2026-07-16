import fs
    from 'node:fs';

/**
 * Synchronize the version in package.json
 * and theme.json with the semantic release version.
 */
export async function syncVersion(
    version
) {

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

    packageJson.version =
        version;

    themeJson.version =
        version;

    fs.writeFileSync(

        'package.json',

        JSON.stringify(
            packageJson,
            null,
            4
        ) + '\n'

    );

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