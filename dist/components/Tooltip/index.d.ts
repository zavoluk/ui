import { FC, HTMLAttributes, ReactElement, ReactNode } from 'react';
export declare enum TooltipPositions {
    bottom = "bottom",
    left = "left",
    right = "right",
    top = "top"
}
interface StyleProps {
    /**
     * Ability to interact with tooltip
     *
     * @default false
     */
    interactive?: boolean;
    /**
     * @default 'right'
     */
    position?: TooltipPositions;
}
interface Props extends StyleProps, HTMLAttributes<HTMLDivElement> {
    children: ReactElement;
    content: ReactNode;
    /** Control show/hide state */
    isOpen?: boolean;
}
declare const Tooltip: FC<Props>;
export default Tooltip;
