import fs
    from 'node:fs';

import path
    from 'node:path';

import { ConfigurationValidator }
    from './ConfigurationValidator.mjs';

import { DirectoryValidator }
    from './DirectoryValidator.mjs';

import { LayoutValidator }
    from './LayoutValidator.mjs';

import { TemplateValidator }
    from './TemplateValidator.mjs';

import { DocumentationValidator }
    from './DocumentationValidator.mjs';

export class ThemeValidator {

    async validate() {

        console.log('');
        console.log('SWG Theme Validator');
        console.log('');

        const theme =
            this.readTheme();

        console.log(
            `Theme    : ${theme.name ?? 'Unknown'}`
        );

        console.log(
            `Version  : ${theme.version ?? 'Unknown'}`
        );

        console.log(
            `Framework: ${theme.framework ?? 'Unknown'}`
        );

        console.log('');

        let valid = true;

        valid &=
            await new DirectoryValidator().validate();

        valid &=
            await new ConfigurationValidator().validate();

        valid &=
            await new LayoutValidator().validate();

        valid &=
            await new TemplateValidator().validate();

        valid &=
            await new DocumentationValidator().validate();

        console.log('');
        console.log(
            '────────────────────────────────────────'
        );
        console.log('');

        if (valid) {

            console.log(
                '✔ Theme is SWG Ready.'
            );

            return;
        }

        console.log(
            '✗ Theme validation failed.'
        );

        process.exit(1);

    }

    readTheme() {

        const file =
            path.resolve(
                'theme.json'
            );

        if (!fs.existsSync(file)) {

            return {};

        }

        return JSON.parse(
            fs.readFileSync(
                file,
                'utf8'
            )
        );

    }

}