import fs from 'node:fs';
import path from 'node:path';

const pagesDir =
    path.join(
        process.cwd(),
        'export/pages'
    );

export function getPages() {

    return fs
        .readdirSync(pagesDir)
        .map(file => {

            const json =
                fs.readFileSync(
                    path.join(
                        pagesDir,
                        file
                    ),
                    'utf8'
                );

            return JSON.parse(json);
        });
}

export function getPage(
    slug: string
) {

    return getPages()
        .find(
            page =>
                page.slug === slug
        );
}