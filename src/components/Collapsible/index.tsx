import React, {
    cloneElement,
    createRef,
    FC,
    HTMLAttributes,
    isValidElement,
    ReactNode,
    RefObject,
    useEffect,
    useState
} from 'react';
import styled from 'styled-components';

interface StyledProps {
    /** Контроль открытого состояния */
    open?: boolean;
}

interface Props extends HTMLAttributes<HTMLDivElement>, StyledProps {
    header?: ReactNode;
}

const Collapsible: FC<Props> = ({ children, header, open, ...rest }) => {
    const [isOpen, setIsOpen] = useState(open ?? false);
    const [maxHeight, setMaxHeight] = useState(0);
    const ref: RefObject<HTMLDivElement> = createRef();

    const handleClick = () => {
        setIsOpen(isOpen => !isOpen);
    };

    useEffect(() => {
        if (ref.current) setMaxHeight(ref.current.scrollHeight);
    }, [children]);

    useEffect(() => {
        setIsOpen(!!open);
    }, [open]);

    return (
        <Wrapper>
            {isValidElement(header) && cloneElement(header, { onClick: handleClick })}
            <Content {...rest} open={isOpen} ref={ref} maxHeight={maxHeight}>
                {children}
            </Content>
        </Wrapper>
    );
};

export default Collapsible;

const Wrapper = styled.div``;

const Content = styled.div<StyledProps & { maxHeight: number }>`
    max-height: ${({ maxHeight, open }) => (open ? `${maxHeight}px` : '0')};
    opacity: ${({ open }) => (open ? '1' : '0')};
    pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
    transition: max-height ${({ theme }) => theme.animation.transition},
        opacity ${({ theme }) => theme.animation.transition};
`;
