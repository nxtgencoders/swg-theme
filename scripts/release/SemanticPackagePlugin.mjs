import {
    ThemePackager
}
from '../package/ThemePackager.mjs';

/**
 * Build the distributable SWG theme package.
 */
export async function prepare() {

    const packager =
        new ThemePackager();

    await packager.package();

}