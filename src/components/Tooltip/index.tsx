import React, { createRef, FC, ReactNode, useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Paper from 'components/Paper';
interface Props {
    animation?: 'zoom' | 'fade';
    content?: ReactNode;
    isOpen?: boolean;
    position?: 'left' | 'top' | 'right' | 'bottom';
}

const INDENT = 10;

const Tooltip: FC<Props> = ({
    animation = 'fade',
    children,
    content,
    isOpen: isOpenProp = false,
    position: positionProp = 'right'
}) => {
    if (!React.isValidElement(children)) return null;
    const triggerRef = createRef<HTMLElement | undefined>();
    const contentRef = createRef<HTMLDivElement>();
    const [isOpen, setIsOpen] = useState(isOpenProp);
    const [position, setPosition] = useState(positionProp);
    const [contentProperties, setContentProperties] = useState({
        contentHeight: 0,
        contentWidth: 0,
        triggerHeight: 0,
        triggerLeft: 0,
        triggerTop: 0,
        triggerWidth: 0
    });

    useEffect(() => {
        setIsOpen(isOpenProp);
    }, [isOpenProp]);

    useEffect(() => {
        setPosition(positionProp);
    }, [positionProp]);

    useEffect(() => {
        if (triggerRef.current && contentRef.current) {
            const { height, left, top, width } = triggerRef.current.getBoundingClientRect();
            const { height: contentHeight, width: contentWidth } = contentRef.current.getBoundingClientRect();

            setContentProperties({
                contentHeight,
                contentWidth,
                triggerHeight: height,
                triggerLeft: left,
                triggerTop: top,
                triggerWidth: width
            });
        }
    }, []);

    const { contentHeight, contentWidth, triggerHeight, triggerLeft, triggerTop, triggerWidth } = contentProperties;

    return (
        <>
            <TriggerStyles />
            {React.cloneElement(children, {
                className: 'tooltip-trigger',
                ref: triggerRef
            })}
            <Content
                ref={contentRef}
                isOpen={isOpen}
                position={position}
                style={{
                    left:
                        triggerLeft +
                        (position === 'right'
                            ? triggerWidth
                            : position === 'left'
                            ? -contentWidth
                            : triggerWidth / 2 - contentWidth / 2),
                    top:
                        triggerTop +
                        (position === 'bottom'
                            ? triggerHeight
                            : position === 'top'
                            ? -contentHeight
                            : triggerHeight / 2 - contentHeight / 2)
                }}
            >
                <Paper>{content}</Paper>
            </Content>
        </>
    );
};

export default Tooltip;

const Content = styled.div<Pick<Props, 'isOpen' | 'position'>>`
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    padding: ${({ position }) =>
        position === 'left'
            ? `0 ${INDENT}px 0 0:`
            : position === 'top'
            ? `0 0 ${INDENT}px 0`
            : position === 'right'
            ? `0 0 0 ${INDENT}px`
            : position === 'bottom'
            ? `${INDENT}px 0 0 0`
            : 0};
    pointer-events: none;
    position: fixed;
    transition: opacity ${({ theme }) => theme.animation.transition};
`;

const TriggerStyles = createGlobalStyle`
    .tooltip-trigger {
        cursor: pointer;
        &:hover {
            & + ${Content} {
                opacity: 1
            }
        }
    }
`;
