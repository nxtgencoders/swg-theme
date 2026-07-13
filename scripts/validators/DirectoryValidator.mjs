import fs
    from 'node:fs';

export class DirectoryValidator {

    directories = [

        'src/components',

        'src/layouts',

        'src/pages',

        'src/templates'

    ];

    async validate() {

        console.log(
            'Directories'
        );

        console.log('');

        let valid = true;

        for (

            const directory

            of this.directories

        ) {

            if (

                fs.existsSync(directory)

            ) {

                console.log(
                    ` ✓ ${directory}`
                );

                continue;

            }

            console.log(
                ` ✗ ${directory}`
            );

            valid = false;

        }

        console.log('');

        return valid;

    }

}