import React, {
    cloneElement,
    ComponentProps,
    FC,
    HTMLAttributes,
    memo,
    MouseEvent,
    ReactElement,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';

import Paper from 'components/Paper';

export const TooltipPositions = [
    'top',
    'topLeft',
    'topRight',
    'right',
    'rightTop',
    'rightBottom',
    'bottom',
    'bottomLeft',
    'bottomRight',
    'left',
    'leftTop',
    'leftBottom'
] as const;

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactElement;
    content: ReactNode;
    /**
     * Indent from wrapped element
     *
     * @default 0
     */
    indent?: number;
    /**
     * Ability to interact with tooltip
     *
     * @default false
     */
    interactive?: boolean;
    /** Control show/hide state */
    isOpen?: boolean;
    /** Content wrapper properties */
    paperProps?: ComponentProps<typeof Paper>;
    /**
     * @default 'right'
     */
    position?: typeof TooltipPositions[number];
}

const indentAmount = 10;
// position: [left, top]
const getPosition = (trigger: HTMLElement, content: HTMLElement) => {
    const {
        height: triggerHeight,
        left: triggerLeft,
        top: triggerTop,
        width: triggerWidth
    } = trigger.getBoundingClientRect();
    const { height: contentHeight, width: contentWidth } = content.getBoundingClientRect();
    const indent = parseInt(window.getComputedStyle(content).padding);

    const positions: Record<typeof TooltipPositions[number], [number, number]> = {
        bottom: [triggerLeft + triggerWidth / 2 - contentWidth / 2, triggerTop + triggerHeight - indent],
        bottomLeft: [triggerLeft - indent, triggerTop + triggerHeight - indent],
        bottomRight: [triggerLeft + triggerWidth - contentWidth + indent, triggerTop + triggerHeight - indent],
        left: [triggerLeft - contentWidth + indent, triggerTop + triggerHeight / 2 - contentHeight / 2],
        leftBottom: [triggerLeft - contentWidth + indent, triggerTop + triggerHeight - contentHeight + indent],
        leftTop: [triggerLeft - contentWidth + indent, triggerTop - indent],
        right: [triggerLeft + triggerWidth - indent, triggerTop + (triggerHeight / 2 - contentHeight / 2)],
        rightBottom: [triggerLeft + triggerWidth - indent, triggerTop + triggerHeight - contentHeight + indent],
        rightTop: [triggerLeft + triggerWidth - indent, triggerTop - indent],
        top: [triggerLeft + triggerWidth / 2 - contentWidth / 2, triggerTop - contentHeight + indent],
        topLeft: [triggerLeft - indent, triggerTop - contentHeight + indent],
        topRight: [triggerLeft + triggerWidth - contentWidth + indent, triggerTop - contentHeight + indent]
    };

    return positions;
};

const Tooltip: FC<Props> = ({
    children,
    content,
    interactive = false,
    isOpen,
    paperProps,
    position = 'right',
    ...rest
}) => {
    const isControlled = typeof isOpen !== 'undefined';
    const [styles, setStyles] = useState({ left: 0, opacity: isOpen ? 1 : 0, top: 0 });
    const [open, setOpen] = useState(!!isOpen);
    const [render, setRender] = useState(false);
    const [calculated, setCalculated] = useState(false);
    const triggerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const timerID = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (render && triggerRef.current && contentRef.current) {
            const positions = getPosition(triggerRef.current, contentRef.current);

            setStyles(styles => ({
                ...styles,
                ...{ left: positions[position][0], top: positions[position][1] }
            }));
            setTimeout(() => {
                setCalculated(true);
            });
        }
    }, [render, position]);

    useEffect(() => {
        if (calculated) {
            setRender(render);
        }
    }, [calculated]);

    useEffect(() => {
        setOpen(!!isOpen);
    }, [isOpen]);

    useEffect(() => {
        if (calculated) {
            // [enter, leave]
            const left = position.includes('right')
                ? [indentAmount, -indentAmount]
                : position.includes('left')
                ? [-indentAmount, indentAmount]
                : [0, 0];
            const top = position.includes('top')
                ? [-indentAmount, indentAmount]
                : position.includes('bottom')
                ? [indentAmount, -indentAmount]
                : [0, 0];

            setStyles(prevState => ({
                left: prevState.left + (open ? left[0] : left[1]),
                opacity: open ? 1 : 0,
                top: prevState.top + (open ? top[0] : top[1])
            }));
        }
    }, [open, calculated, position]);

    const handleMouse = useCallback((e: MouseEvent) => {
        const event = e;
        const isMouseEnter = event.type === 'mouseenter';

        setOpen(isMouseEnter);
        window.clearTimeout(timerID.current);
        if (isMouseEnter) {
            setRender(true);
        } else {
            timerID.current = setTimeout(() => {
                setRender(false);
            }, 200);
        }
    }, []);

    const { left, opacity, top } = styles;

    return (
        <>
            {render &&
                createPortal(
                    <Wrapper>
                        <Container
                            style={{
                                opacity: `${opacity}`,
                                padding: `${indentAmount}px`,
                                transform: `translate3d(${left}px, ${top}px, 0)`
                            }}
                            ref={contentRef}
                            enableTransition={calculated}
                            interactive={interactive}
                            onMouseEnter={e => (interactive ? handleMouse(e) : undefined)}
                            onMouseLeave={e => (interactive ? handleMouse(e) : undefined)}
                            {...rest}
                        >
                            <Paper {...paperProps}>{content}</Paper>
                        </Container>
                    </Wrapper>,
                    document.body
                )}
            {cloneElement(children, {
                onMouseEnter: (e: MouseEvent) => (isControlled ? undefined : handleMouse(e)),
                onMouseLeave: (e: MouseEvent) => (isControlled ? undefined : handleMouse(e)),
                ref: triggerRef
            })}
        </>
    );
};

export default Tooltip;

const Wrapper = styled.div`
    left: 0;
    position: absolute;
    top: 0;
`;

const Container = styled.div<{ enableTransition: boolean; interactive: boolean }>`
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transition: ${({ enableTransition, theme }) => (enableTransition ? theme.animation.transition : 0)};
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
