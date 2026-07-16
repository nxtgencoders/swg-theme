import fs
    from 'node:fs';

export class ConfigurationValidator {

    files = [
        'theme.json',
        'package.json',
        'astro.config.mjs',
        'tsconfig.json'
    ];

/**
 * Validate configuration files.
 */
async validate() {

    console.log(
        'Configuration'
    );

    console.log('');

    let valid =
        true;

    for (

        const file

        of this.files

    ) {

        if (

            !fs.existsSync(
                file
            )

        ) {

            console.log(
                ` ✗ ${file}`
            );

            valid =
                false;

            continue;

        }

        console.log(
            ` ✓ ${file}`
        );

    }

    const theme =

        this.validateJson(
            'theme.json'
        );

    if (theme) {

        valid &=
            this.validateTheme(
                theme
            );

    } else {

        valid = false;

    }

    valid &=
        Boolean(
            this.validateJson(
                'package.json'
            )
        );

    console.log('');

    return Boolean(
        valid
    );

}

/**
 * Validate a JSON file.
 */
validateJson(
    file
) {

    if (

        !fs.existsSync(
            file
        )

    ) {

        return null;

    }

    try {

        return JSON.parse(

            fs.readFileSync(
                file,
                'utf8'
            )

        );

    } catch {

        console.log(
            ` ✗ ${file} contains invalid JSON`
        );

        return null;

    }

}

/**
 * Validate the required theme properties.
 */
validateTheme(
    theme
) {

    const required = [

        'name',
        'slug',
        'version',
        'framework'

    ];

    let valid =
        true;

    for (

        const property

        of required

    ) {

        if (

            !theme[property]

        ) {

            console.log(
                ` ✗ theme.json missing '${property}'`
            );

            valid =
                false;

        }

    }

    return valid;

}

}