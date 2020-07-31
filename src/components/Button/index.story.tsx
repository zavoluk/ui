import React from 'react';

import addonKnobs from 'helpers/addonKnobs';

import Button from './index';

const data = {
    parameters: {
        info: { text: '#### Компонент "Кнопка"' }
    }
};

export default { title: 'components/Button' };

export const _default = (): JSX.Element => {
    return <Button {...addonKnobs(data)}>Кнопка</Button>;
};
