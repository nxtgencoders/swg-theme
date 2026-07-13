import fs
    from 'node:fs';

export class DocumentationValidator {

    documents = [

        'README.md'

    ];

    /**
     * Validate documentation.
     */
    async validate() {

        console.log(
            'Documentation'
        );

        console.log('');

        let valid =
            true;

        for (

            const document

            of this.documents

        ) {

            if (

                fs.existsSync(
                    document
                )

            ) {

                console.log(
                    ` ✓ ${document}`
                );

                continue;

            }

            console.log(
                ` ✗ ${document}`
            );

            valid =
                false;

        }

        console.log('');

        return valid;

    }

}