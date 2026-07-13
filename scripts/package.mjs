import { ThemePackager }
    from './packagers/ThemePackager.mjs';

/**
 * Package the current theme.
 */
export async function packageTheme() {

    await new ThemePackager().package();

}