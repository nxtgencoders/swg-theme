import fs from 'node:fs';
import path from 'node:path';

export interface Settings {
    language: string;
    company_name: string;
    default_robots: string;
    footer: string;
    site_name: string;
    site_url: string;
    support_email: string;
    tagline: string;
    title_separator: string;
}

const settingsFile =
    path.join(
        process.cwd(),
        'export',
        'settings',
        'settings.json'
    );

/**
 * Returns the exported site settings.
 */
export function getSettings(): Settings {

    const json =
        fs.readFileSync(
            settingsFile,
            'utf8'
        );

    return JSON.parse(
        json
    ) as Settings;

}