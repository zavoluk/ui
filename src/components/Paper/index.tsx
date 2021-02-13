import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

enum IndentList {
    lg = '2rem',
    md = '1.75rem',
    sm = '1.5rem',
    xs = '1rem'
}

export enum IndentTypes {
    lg = 'lg',
    md = 'md',
    sm = 'sm',
    xs = 'xs'
}

interface StyleProps {
    boxShadow?: boolean;
    indent?: keyof typeof IndentTypes;
}

interface Props extends HTMLAttributes<HTMLDivElement>, StyleProps {}

const Paper: FC<Props> = ({ boxShadow = true, children, indent }) => {
    return (
        <Wrapper indent={indent} boxShadow={boxShadow}>
            {children}
        </Wrapper>
    );
};

export default Paper;

const Wrapper = styled.div<StyleProps>`
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ boxShadow }) => (boxShadow ? '0 0 10px 0 #eeeeee' : 'none')};
    padding: ${({ indent }) => (indent ? IndentList[indent] : 0)};
`;
