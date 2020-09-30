import React, { FC, HTMLAttributes } from 'react';
import { darken, transparentize } from 'polished';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-block;
`;

const InputStyled = styled.input`
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.colors.primary};
    padding: 0.5rem 1rem;
    transition: border-color ${({ theme }) => theme.animation.transition};
    &:hover {
        border-color: ${({ theme }) => darken(0.1, theme.colors.primary)};
    }
    &::placeholder {
        color: ${({ theme }) => transparentize(0.8, theme.colors.primary)};
        transition: color ${({ theme }) => theme.animation.transition};
    }
    &:focus {
        border-color: ${({ theme }) => darken(0.15, theme.colors.primary)};
        outline: none;
        &::placeholder {
            color: ${({ theme }) => transparentize(0.95, theme.colors.primary)};
        }
    }
    &:disabled {
        background-color: white;
        opacity: 0.5;
    }
`;

interface IProps extends HTMLAttributes<HTMLInputElement> {}

const Input: FC<IProps> = props => {
    return (
        <Wrapper>
            <InputStyled {...props} />
        </Wrapper>
    );
};

export default Input;
