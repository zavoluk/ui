import React, {
    cloneElement,
    FC,
    HTMLAttributes,
    MouseEvent,
    ReactElement,
    ReactNode,
    useCallback,
    useEffect,
    useState
} from 'react';
import styled, { css } from 'styled-components';

export enum TooltipPositions {
    bottom = 'bottom',
    left = 'left',
    right = 'right',
    top = 'top'
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

const indent = '10px';

const Tooltip: FC<Props> = ({
    children,
    content,
    interactive = false,
    isOpen,
    position = TooltipPositions.right,
    ...rest
}) => {
    const isControlled = typeof isOpen !== 'undefined';
    const [open, setOpen] = useState(!!isOpen);

    useEffect(() => {
        setOpen(!!isOpen);
    }, [isOpen]);

    const handleMouse = useCallback((e: MouseEvent) => {
        const event = e;
        const isMouseEnter = event.type === 'mouseenter';

        setOpen(isMouseEnter);
    }, []);

    return cloneElement(children, {
        children: (
            <>
                {children.props.children}
                <Wrapper
                    position={position}
                    onMouseEnter={(e: MouseEvent) => (isControlled ? undefined : handleMouse(e))}
                    onMouseLeave={(e: MouseEvent) => (isControlled ? undefined : handleMouse(e))}
                >
                    <Content
                        position={position}
                        open={open}
                        interactive={(interactive || isControlled) && open}
                        {...rest}
                    >
                        {content}
                    </Content>
                </Wrapper>
            </>
        )
    });
};

export default Tooltip;

const Wrapper = styled.div<StyleProps>`
    align-items: ${({ position }) =>
        position === TooltipPositions.right || position === TooltipPositions.left
            ? 'center'
            : position === TooltipPositions.bottom
            ? 'flex-end'
            : position === TooltipPositions.top
            ? 'flex-start'
            : 'center'};
    display: flex;
    height: 100%;
    justify-content: ${({ position }) =>
        position === TooltipPositions.top || position === TooltipPositions.bottom
            ? 'center'
            : position === TooltipPositions.right
            ? 'flex-end'
            : position === TooltipPositions.left
            ? 'flex-start'
            : 'center'};
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

const Content = styled.div<StyleProps & { open: boolean }>`
    opacity: ${({ open }) => (open ? 1 : 0)};
    padding: ${indent};
    pointer-events: none;
    transform: ${({ open, position }) =>
        position === TooltipPositions.right
            ? `translate(calc(calc(100% - ${indent}) + ${open ? indent : '0px'}), 0)`
            : position === TooltipPositions.left
            ? `translate(calc(calc(-100% - ${indent}) + ${open ? indent : '0px'}), 0)`
            : position === TooltipPositions.top
            ? `translate(0, calc(calc(-100% - ${indent}) + ${open ? indent : '0px'}))`
            : position === TooltipPositions.bottom
            ? `translate(0, calc(calc(100% - ${indent}) + ${open ? indent : '0px'}))`
            : 'none'};
    transition: opacity ${({ theme }) => theme.animation.transition},
        transform ${({ theme }) => theme.animation.transition};
    will-change: opacity, transform;
    ${({ interactive }) =>
        interactive &&
        css`
            pointer-events: auto;
            &:hover {
                opacity: 1 !important;
            }
        `}
`;
