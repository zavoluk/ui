import React, { ButtonHTMLAttributes, FC, KeyboardEvent, MouseEvent, useCallback } from 'react';
import { darken } from 'polished';
import styled from 'styled-components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?(e: MouseEvent | KeyboardEvent): void;
}

const Button: FC<Props> = props => {
    const { onClick, type = 'button', ...rest } = props;

    const clickHandler = useCallback(
        (e: MouseEvent | KeyboardEvent) => {
            const event = e;

            if (onClick) onClick(event);
        },
        [onClick]
    );

    return (
        <Wrapper type={type} onClick={clickHandler} tabIndex={0} {...rest}>
            <span tabIndex={-1}>{props.children}</span>
        </Wrapper>
    );
};

export default Button;

const Wrapper = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    outline: none;
    padding: 0;
    &:hover {
        & > span {
            background-color: ${({ theme }) => darken(0.05, theme.colors.primary)};
            border-color: ${({ theme }) => darken(0.05, theme.colors.primary)};
        }
    }
    &:focus {
        outline: none;
        & > span {
            box-shadow: 0 0 10px -2px ${({ theme }) => theme.colors.primary};
        }
    }
    &:active {
        & > span {
            background-color: ${({ theme }) => darken(0.15, theme.colors.primary)};
            border-color: ${({ theme }) => darken(0.15, theme.colors.primary)};
        }
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    & > span {
        background-color: ${({ theme }) => theme.colors.primary};
        border: 1px solid ${({ theme }) => theme.colors.primary};
        border-radius: ${({ theme }) => theme.borderRadius};
        display: inline-block;
        outline: none;
        padding: 0.5rem 1rem;
        transition: background-color ${({ theme }) => theme.animation.transition},
            border-color ${({ theme }) => theme.animation.transition};
    }
`;
