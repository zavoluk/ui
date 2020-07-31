import React from 'react';

import addonKnobs from 'helpers/addonKnobs';

import Input from './index';

const data = {
    parameters: {
        info: { text: '#### Компонент "Поле ввода"' }
    },
    placeholder: 'placeholder'
};

export default { title: 'components/Input' };

export const _default = (): JSX.Element => {
    return <Input {...addonKnobs(data)} />;
};
