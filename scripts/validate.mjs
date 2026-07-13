import { ThemeValidator }
    from './validators/ThemeValidator.mjs';

export async function validate() {

    await new ThemeValidator().validate();

}