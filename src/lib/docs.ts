import fs from 'node:fs';
import path from 'node:path';

export interface Document {
    id: number;
    category_id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    featured_image: string;
    meta_title: string;
    meta_description: string;
    canonical_url: string;
    noindex: number;
    tags: string[];
    status: string;
    published_at: string;
    sort_order: number;
    created_at: string;
    updated_at: string | null;
    sections: unknown;
    reading_time: number;
}

export interface DocumentCategory {

    id: number;

    type: string;

    site_id: number;

    name: string;

    slug: string;

    icon: string;

    sort_order: number;

    created_at: string;

    description: string;

    color: string;

    sections: unknown[];

}

const articlesDirectory =
    path.join(
        process.cwd(),
        'export',
        'docs',
        'articles'
    );

const categoriesFile =
    path.join(
        process.cwd(),
        'export',
        'docs',
        'categories.json'
    );

/**
 * Returns all documentation articles.
 */
export function getArticles(): Document[] {

    return fs

        .readdirSync(
            articlesDirectory
        )

        .filter(
            file =>
                file.endsWith('.json')
        )

        .map(file => {

            const json =
                fs.readFileSync(
                    path.join(
                        articlesDirectory,
                        file
                    ),
                    'utf8'
                );

            return JSON.parse(
                json
            ) as Document;

        });

}

/**
 * Returns a documentation article.
 */
export function getArticle(
    slug: string
): Document | undefined {

    return getArticles()

        .find(
            article =>
                article.slug === slug
        );

}

/**
 * Returns all documentation categories.
 */
export function getCategories(): DocumentCategory[] {

    const json =
        fs.readFileSync(
            categoriesFile,
            'utf8'
        );

    return JSON.parse(
        json
    ) as DocumentCategory[];

}

/**
 * Returns a documentation category.
 */
export function getCategory(
    id: number
): DocumentCategory | undefined {

    return getCategories()

        .find(
            category =>
                category.id === id
        );

}

/**
 * Returns the category of a documentation article.
 */
export function getArticleCategory(
    article: Document
): DocumentCategory | undefined {

    return getCategory(
        article.category_id
    );

}

/**
 * Returns the URL of a documentation article.
 */
export function getArticleUrl(
    article: Document
): string {

    const category =
        getArticleCategory(
            article
        );

    return `/docs/${category?.slug}/${article.slug}`;

}

/**
 * Returns the URL of a documentation category.
 */
export function getCategoryUrl(
    category: DocumentCategory
): string {

    return `/docs/${category.slug}`;

}