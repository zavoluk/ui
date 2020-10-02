import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

type Indent = keyof typeof indentList;

interface StyleProps {
    boxShadow?: boolean;
    indent?: Indent;
}

interface Props extends HTMLAttributes<HTMLDivElement>, StyleProps {}

export const indentList = {
    lg: '2rem',
    md: '1.5rem',
    sm: '1rem',
    xs: '.5rem'
};

const Paper: FC<Props> = ({ boxShadow = true, children, indent = 'xs' }) => {
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
    padding: ${({ indent }) => (indent ? indentList[indent] : 0)};
`;
