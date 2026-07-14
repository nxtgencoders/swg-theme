import fs from 'node:fs';
import path from 'node:path';

export interface Page {
    id: number;
    title: string;
    slug: string;
    status: string;
    published_at: string | null;
    created_at: string;
    updated_at: string | null;
    is_homepage: boolean;
    template: string;
    meta_title: string;
    meta_description: string;
    canonical_url: string;
    robots: string;
    og_title: string;
    og_description: string;
    og_image: string;
    template_name: string;
    template_label: string;
    editor: string;
    content?: string;
    sections: any[];
}

const exportPath =
    path.join(
        process.cwd(),
        'export'
    );

const pagesPath =
    path.join(
        exportPath,
        'pages'
    );

/**
 * Returns the homepage.
 */
export function getHomepage(): Page {

    const file =
        path.join(
            exportPath,
            'homepage.json'
        );

    if (
        !fs.existsSync(file)
    ) {

        throw new Error(
            'Homepage not found.'
        );

    }

    return JSON.parse(
        fs.readFileSync(
            file,
            'utf8'
        )
    );
}

/**
 * Returns all pages except the homepage.
 */
export function getPages(): Page[] {

    if (
        !fs.existsSync(
            pagesPath
        )
    ) {

        return [];

    }

    return fs

        .readdirSync(
            pagesPath
        )

        .filter(
            file =>
                file.endsWith(
                    '.json'
                )
        )

        .map(
            file =>

                JSON.parse(

                    fs.readFileSync(

                        path.join(
                            pagesPath,
                            file
                        ),

                        'utf8'

                    )

                ) as Page

        );

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