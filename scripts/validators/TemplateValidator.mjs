import fs
    from 'node:fs';

export class TemplateValidator {

    templates = [
        'src/templates/Homepage.astro',
        'src/templates/Page.astro',
        'src/templates/BlogIndex.astro',
        'src/templates/BlogCategory.astro',
        'src/templates/BlogArticle.astro',
        'src/templates/DocsIndex.astro',
        'src/templates/DocsCategory.astro',
        'src/templates/DocsArticle.astro',
        'src/templates/Error404.astro',
        'src/templates/Error500.astro' 
    ];

    /**
     * Validate templates.
     */
    async validate() {

        console.log(
            'Templates'
        );

        console.log('');

        let valid =
            true;

        for (

            const template

            of this.templates

        ) {

            if (

                fs.existsSync(
                    template
                )

            ) {

                console.log(
                    ` ✓ ${template}`
                );

                continue;

            }

            console.log(
                ` ✗ ${template}`
            );

            valid =
                false;

        }

        console.log('');

        return valid;

    }

}