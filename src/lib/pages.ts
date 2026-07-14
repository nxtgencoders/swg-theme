import fs from 'node:fs';
import path from 'node:path';

export interface Page {
    id: number;
    title: string;
    slug: string;
    template: string;
    [key: string]: any;
}

const pagesDirectory =
    path.join(
        process.cwd(),
        'export',
        'pages'
    );

/**
 * Returns all exported pages.
 */
export function getPages(): Page[] {

    return fs

        .readdirSync(
            pagesDirectory
        )

        .filter(
            file =>
                file.endsWith('.json')
        )

        .map(file => {

            const json =
                fs.readFileSync(
                    path.join(
                        pagesDirectory,
                        file
                    ),
                    'utf8'
                );

            return JSON.parse(
                json
            ) as Page;

        });

}

/**
 * Returns a page by slug.
 */
export function getPage(
    slug: string
): Page | undefined {

    return getPages()

        .find(
            page =>
                page.slug === slug
        );

}