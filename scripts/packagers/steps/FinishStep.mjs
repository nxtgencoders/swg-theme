export class FinishStep {

    /**
     * Finish the packaging process.
     */
    async run(
        context
    ) {

        console.log(
            '────────────────────────────────────────'
        );

        console.log('');

        console.log(
            '✔ Package created successfully.'
        );

        console.log('');

        console.log(
            'Output'
        );

        console.log('');

        console.log(
            `  ${context.output}`
        );

        console.log('');

        return context;

    }

}
