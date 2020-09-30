import React, { FC } from 'react';
import styled from 'styled-components';

type Indent = keyof typeof indentList;

interface Props {
    indent?: Indent;
}

export const indentList = {
    lg: '2rem',
    md: '1.5rem',
    sm: '1rem',
    xs: '.5rem'
};

const Paper: FC<Props> = ({ children, indent = 'xs' }) => {
    return <Container indent={indent}>{children}</Container>;
};

export default Paper;

const Container = styled.div<{ indent: Indent }>`
    padding: ${({ indent }) => indentList[indent]};
`;
