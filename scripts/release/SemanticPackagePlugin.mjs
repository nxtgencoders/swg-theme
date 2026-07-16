import {
    ThemePackager
}
from '../packagers/ThemePackager.mjs';

/**
 * Build the distributable SWG theme package.
 */
export async function prepare() {

    const packager =
        new ThemePackager();

    await packager.package();

}