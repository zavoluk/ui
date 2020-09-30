import React, { cloneElement, FC, ReactElement, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface Props {
    children: ReactElement;
    content: ReactNode;
    isOpen?: boolean;
    position?: 'left' | 'right' | 'top' | 'bottom';
}

interface Styles {
    left: number;
    opacity: number;
    top: number;
}

const Tooltip: FC<Props> = (props: Props) => {
    const { children, content, isOpen, position = 'right' } = props;
    const [styles, setStyles] = useState<Styles>({ left: 0, opacity: isOpen ? 1 : 0, top: 0 });
    const trigger = useRef<HTMLElement>(null);

    useEffect(() => {
        if (trigger.current) {
            const { left, top, width } = trigger.current.getBoundingClientRect();
            const { opacity } = styles;

            setStyles({ left: left + width, opacity, top });
        }
    }, []);

    const handleMouseOver = useCallback((e: MouseEvent) => {
        if (!isOpen) {
            const eventType = e.type;

            setStyles(prevState => ({ ...prevState, opacity: eventType === 'mouseenter' ? 1 : 0 }));
        }
    }, []);

    const { left, opacity, top } = styles;

    return (
        <>
            {createPortal(
                <Container>
                    <Wrapper style={{ opacity: `${opacity}`, transform: `translate(${left}px, ${top}px)` }}>
                        <Content>{content}</Content>
                    </Wrapper>
                </Container>,
                document.body
            )}
            {cloneElement(children, {
                onMouseEnter: handleMouseOver,
                onMouseLeave: handleMouseOver,
                ref: trigger
            })}
        </>
    );
};

export default Tooltip;

const Wrapper = styled.div`
    opacity: 0;
    position: absolute;
    transition: opacity ${({ theme }) => theme.animation.transition};
`;

const Content = styled.div`
    /* pointer-events: none; */
`;

const Container = styled.div`
    left: 0;
    position: absolute;
    top: 0;
`;