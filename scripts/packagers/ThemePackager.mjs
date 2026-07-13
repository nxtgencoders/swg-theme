import { ValidateStep }
    from './steps/ValidateStep.mjs';

import { ReadThemeStep }
    from './steps/ReadThemeStep.mjs';

import { PrepareStep }
    from './steps/PrepareStep.mjs';

import { CopyStep }
    from './steps/CopyStep.mjs';

import { CleanupStep }
    from './steps/CleanupStep.mjs';

import { ZipStep }
    from './steps/ZipStep.mjs';

import { FinishStep }
    from './steps/FinishStep.mjs';

export class ThemePackager {

    async package() {

        console.log('');

        console.log(
            'SWG Theme Packager'
        );

        console.log('');

        const context = {};

        await new ValidateStep()
            .run(context);

        await new ReadThemeStep()
            .run(context);

        await new PrepareStep()
            .run(context);

        await new CopyStep()
            .run(context);

        await new CleanupStep()
            .run(context);

        await new ZipStep()
            .run(context);

        await new FinishStep()
            .run(context);

    }

}