import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.label`
    border: 1px solid ${props => props.theme.colors.primary};
`;
const StyledButton = styled.button`
    border: none;
`;

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IProps> = props => {
    return (
        <Wrapper>
            <StyledButton {...props} />
        </Wrapper>
    );
};

export default Button;
