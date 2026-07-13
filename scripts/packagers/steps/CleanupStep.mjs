import fs
    from 'node:fs';

import path
    from 'node:path';

export class CleanupStep {

    /**
     * Remove development files from the package.
     */
    async run(
        context
    ) {

        const files = [

            '.git',

            '.github',

            '.vscode',

            'node_modules',

            'dist',

            '.build',

            'src/pages'

        ];

            for (

                const entry

                of context.exclude

            ) {

                this.remove(

                    path.join(
                        context.workspace,
                        entry
                    )

                );

            }
            
        console.log(
            '✓ Cleanup package'
        );

        console.log('');

        return context;

    }

    /**
     * Remove a file or directory.
     */
    remove(
        target
    ) {

        fs.rmSync(

            target,

            {
                recursive: true,
                force: true
            }

        );

    }

}