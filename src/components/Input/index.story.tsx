import React, { ComponentProps } from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import Button from 'components/Button';

import Input from './index';

export default {
    parameters: {
        info: { text: '#### Компонент "Поле ввода"' }
    },
    title: 'components/Input'
};

export const _default = (): JSX.Element => {
    const props: ComponentProps<typeof Input> = {
        disabled: boolean('disabled', false),
        placeholder: text('placeholder', 'placeholder'),
        title: text('title', 'Title')
    };

    return (
        <>
            <Input {...props} />
            <div>
                <br />
                <Button>Кнопка</Button>
            </div>
        </>
    );
};
