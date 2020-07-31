import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IProps> = props => {
    return <input {...props} />;
};

export default Input;
