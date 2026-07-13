import fs
    from 'node:fs';

import path
    from 'node:path';

export class CopyStep {

    /**
     * Copy the theme to the package workspace.
     */
    async run(
        context
    ) {

        this.copy(

            '.',

            context.workspace,

            context.exclude

        );

        console.log(
            '✓ Copy files'
        );

        console.log('');

        return context;

    }

    /**
     * Copy a directory recursively.
     */
    copy(
        source,
        destination,
        exclude = []
    ) {

        if (

            !fs.existsSync(
                destination
            )

        ) {

            fs.mkdirSync(

                destination,

                {
                    recursive: true
                }

            );

        }

        const entries =

            fs.readdirSync(

                source,

                {
                    withFileTypes: true
                }

            );

        for (

            const entry

            of entries

        ) {

            if (

                exclude.includes(
                    entry.name
                )

            ) {

                continue;

            }

            const from =

                path.join(
                    source,
                    entry.name
                );

            const to =

                path.join(
                    destination,
                    entry.name
                );

            if (

                entry.isDirectory()

            ) {

                this.copy(

                    from,

                    to,

                    exclude

                );

                continue;

            }

            fs.copyFileSync(

                from,

                to

            );

        }

    }

}