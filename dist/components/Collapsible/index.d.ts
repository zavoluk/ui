import { FC, HTMLAttributes, ReactNode } from 'react';
interface StyledProps {
    /** Контроль открытого состояния */
    open?: boolean;
}
interface Props extends HTMLAttributes<HTMLDivElement>, StyledProps {
    header?: ReactNode;
}
declare const Collapsible: FC<Props>;
export default Collapsible;
