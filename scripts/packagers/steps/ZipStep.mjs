import fs
    from 'node:fs';

import path
    from 'node:path';

import { execSync }
    from 'node:child_process';

export class ZipStep {

    /**
     * Create the theme package.
     */
/**
 * Create the package archive.
 */
async run(
    context
) {

    context.output =

        path.join(
            'dist',
            `${this.slug(
                context.theme.name
            )}-${context.theme.version}.zip`

        );
    if (
        fs.existsSync(
            context.output
        )
    ) {

        throw new Error(
            [
                'Package already exists.',
                '',
                `Output: ${context.output}`,
                '',
                'Increase the version in theme.json',
                'or remove the existing package.'
            ].join('\n')
        );
    }

    execSync(

        `cd ${context.workspace} && zip -qr ../../${context.output} .`,
        {
            stdio: 'inherit'
        }
    );

    console.log(
        '✓ Create ZIP'
    );

    console.log('');

    return context;

}

    /**
     * Convert a value into a slug.
     */
    slug(
        value
    ) {

        return value

            .toLowerCase()

            .replace(
                /[^a-z0-9]+/g,
                '-'
            )

            .replace(
                /^-+|-+$/g,
                ''

            );

    }

}