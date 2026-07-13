import fs
    from 'node:fs';

import { DefaultExclude }
    from '../../PackageDefaults.mjs';

export class ReadThemeStep {

    /**
     * Read the theme configuration.
     */
    async run(
        context
    ) {

        context.theme =
            JSON.parse(

                fs.readFileSync(
                    'theme.json',
                    'utf8'
                )

            );

        context.exclude = [

            ...DefaultExclude,

            ...(context.theme.packaging?.exclude ?? [])

        ];

        console.log(
            '✓ Read theme'
        );

        console.log(
            `  Name      ${context.theme.name}`
        );

        console.log(
            `  Version   ${context.theme.version}`
        );

        console.log(
            `  Framework ${context.theme.framework}`
        );

        console.log('');

        return context;

    }

}