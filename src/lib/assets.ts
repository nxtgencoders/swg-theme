import fs from 'node:fs';
import path from 'node:path';

export interface Asset {

    id: string;

    name: string;

    description: string;

    sort_order: number;

    type:
        'script'
        | 'stylesheet';

    location:
        'head'
        | 'footer';

    enabled: boolean;

    settings: {

        source:
            'external'
            | 'inline';

        url: string;

        content: string;

    };

}

const assetsDirectory =
    path.join(
        process.cwd(),
        'export',
        'assets'
    );

/**
 * Returns all exported assets.
 */
export function getAssets(): Asset[] {

    if (
        !fs.existsSync(
            assetsDirectory
        )
    ) {

        return [];

    }

    return fs

        .readdirSync(
            assetsDirectory
        )

        .filter(
            file =>
                file.endsWith(
                    '.json'
                )
        )

        .map(file => {

            const json =
                fs.readFileSync(
                    path.join(
                        assetsDirectory,
                        file
                    ),
                    'utf8'
                );

            return JSON.parse(
                json
            ) as Asset;

        })

        .filter(
            asset =>
                asset.enabled
        )

        .sort(
            (a, b) =>
                a.sort_order
                -
                b.sort_order
        );

}

/**
 * Returns all assets for a location.
 */
export function getAssetsByLocation(
    location:
        'head'
        | 'footer'
): Asset[] {

    return getAssets()

        .filter(
            asset =>
                asset.location === location
        );

}

/**
 * Returns all head assets.
 */
export function getHeadAssets(): Asset[] {

    return getAssetsByLocation(
        'head'
    );

}

/**
 * Returns all footer assets.
 */
export function getFooterAssets(): Asset[] {

    return getAssetsByLocation(
        'footer'
    );

}