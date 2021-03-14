import { ButtonHTMLAttributes, FC, KeyboardEvent, MouseEvent } from 'react';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?(e: MouseEvent | KeyboardEvent): void;
}
declare const Button: FC<Props>;
export default Button;
