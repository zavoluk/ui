import { boolean, color, number, select, text } from '@storybook/addon-knobs';

export default function addonKnobs(obj: Record<string, unknown>): Record<string, undefined> {
    let result: Record<string, undefined> = {};

    for (const [key, value] of Object.entries(obj)) {
        let val: any = undefined;
        const knobValue = Array.isArray(value) ? value[0] : value;

        switch (typeof value) {
            case 'string':
                if (/color/i.test(key)) {
                    val = color(key, knobValue);
                } else {
                    val = text(key, knobValue);
                }
                break;

            case 'number': {
                val = number(key, knobValue);
                break;
            }
            case 'boolean': {
                val = boolean(key, knobValue);
                break;
            }
            case 'object': {
                if (Array.isArray(value)) {
                    val = select(key, value, knobValue);
                }
                break;
            }

            default:
                break;
        }

        if (typeof val === 'boolean' || val) {
            if (result) result[key] = val;
            else result = { [key]: val };
        }
    }

    return result;
}
