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

        valid &=
            this.validateJson(
                'theme.json'
            );

        valid &=
            this.validateJson(
                'package.json'
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

            return false;

        }

        try {

            JSON.parse(

                fs.readFileSync(
                    file,
                    'utf8'
                )

            );

            return true;

        } catch {

            console.log(
                ` ✗ ${file} contains invalid JSON`
            );

            return false;

        }

    }

}