import fs from 'node:fs';
import path from 'node:path';

export interface MenuItem {
    label: string;
    url: string;
    css_class: string | null;
    target: string | null;
}

export interface MenuCategory {
    title: string;
    items: MenuItem[];

}

export interface Menu {
    name: string;
    label: string;
    categories: MenuCategory[];
}

const menusDirectory =
    path.join(
        process.cwd(),
        'export',
        'menus'
    );

/**
 * Returns all exported menus.
 */
export function getMenus(): Menu[] {

    return fs

        .readdirSync(
            menusDirectory
        )

        .filter(
            file =>
                file.endsWith('.json')
        )

        .map(file => {

            const json =
                fs.readFileSync(
                    path.join(
                        menusDirectory,
                        file
                    ),
                    'utf8'
                );

            return JSON.parse(
                json
            ) as Menu;

        });

}

/**
 * Returns a menu by name.
 */
export function getMenu(
    name: string
): Menu | undefined {

    return getMenus()

        .find(
            menu =>
                menu.name === name
        );

}