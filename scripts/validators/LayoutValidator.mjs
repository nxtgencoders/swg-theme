import fs
    from 'node:fs';

export class LayoutValidator {

    layouts = [

        'src/layouts/BaseLayout.astro'

    ];

    /**
     * Validate layouts.
     */
    async validate() {

        console.log(
            'Layouts'
        );

        console.log('');

        let valid =
            true;

        for (

            const layout

            of this.layouts

        ) {

            if (

                fs.existsSync(
                    layout
                )

            ) {

                console.log(
                    ` ✓ ${layout}`
                );

                continue;

            }

            console.log(
                ` ✗ ${layout}`
            );

            valid =
                false;

        }

        console.log('');

        return valid;

    }

}