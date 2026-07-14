import fs from 'node:fs';
import path from 'node:path';

export interface BlogArticle {

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

export interface BlogCategory {

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
        'blog'
    );

const categoriesFile =
    path.join(
        process.cwd(),
        'export',
        'categories',
        'blog.json'
    );

/**
 * Returns all blog articles.
 */
export function getArticles(): BlogArticle[] {

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
            ) as BlogArticle;

        });

}

/**
 * Returns a blog article by slug.
 */
export function getArticle(
    slug: string
): BlogArticle | undefined {

    return getArticles()

        .find(
            article =>
                article.slug === slug
        );

}

/**
 * Returns all blog categories.
 */
export function getCategories(): BlogCategory[] {

    const json =
        fs.readFileSync(
            categoriesFile,
            'utf8'
        );

    return JSON.parse(
        json
    ) as BlogCategory[];

}

/**
 * Returns a category by id.
 */
export function getCategory(
    id: number
): BlogCategory | undefined {

    return getCategories()

        .find(
            category =>
                category.id === id
        );

}