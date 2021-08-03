/* eslint-disable @typescript-eslint/no-var-requires */
const { readdirSync } = require('fs');
const { resolve } = require('path');

const componentList = readdirSync(resolve(__dirname, '../../src/components'));
const scopeTypeList = ['story', 'source'];
const scopeList = scopeTypeList.flatMap(scope => componentList.map(component => ({ name: `${scope}/${component}` })));

module.exports = {
    allowCustomScopes: true,

    allowTicketNumber: false,

    breaklineChar: '|',

    isTicketNumberRequired: false,

    messages: {
        body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',

        confirmCommit: 'Are you sure you want to proceed with the commit above?',
        // used if allowCustomScopes is true
        customScope: 'Denote the SCOPE of this change:',
        scope: '\nDenote the SCOPE of this change (optional):',
        subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
        type: `Select the type of change that you're committing:`
    },

    scopes: [...scopeList, { name: 'project' }],

    // skip any questions you want
    skipQuestions: ['breaking', 'footer'],

    // limit subject length
    subjectLimit: 100,
    types: [
        { name: 'feat:     A new feature', value: 'feat' },
        { name: 'fix:      A bug fix', value: 'fix' },
        { name: 'docs:     Documentation only changes', value: 'docs' },
        {
            name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
            value: 'style'
        },
        {
            name: 'refactor: A code change that neither fixes a bug nor adds a feature',
            value: 'refactor'
        },
        {
            name: 'perf:     A code change that improves performance',
            value: 'perf'
        },
        { name: 'test:     Adding or editing tests', value: 'test' },
        {
            name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
            value: 'chore'
        }
    ]
};
