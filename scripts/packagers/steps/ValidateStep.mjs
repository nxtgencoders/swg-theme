import { validate }
    from '../../validate.mjs';

export class ValidateStep {

    /**
     * Validate the current theme.
     */
    async run(
        context
    ) {

        await validate();

        return context;

    }

}