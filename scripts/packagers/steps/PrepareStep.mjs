import fs
    from 'node:fs';

export class PrepareStep {

    /**
     * Prepare the package workspace.
     */
    async run(
        context
    ) {

        context.workspace =
            '.build/package';

        fs.rmSync(

            '.build',

            {
                recursive: true,
                force: true
            }

        );

        fs.mkdirSync(

            context.workspace,

            {
                recursive: true
            }

        );

        fs.mkdirSync(

            'dist',

            {
                recursive: true
            }

        );

        console.log(
            '✓ Prepare workspace'
        );

        console.log('');

        return context;

    }

}

