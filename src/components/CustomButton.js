import styled from 'styled-components';

export const CustomButton = ({
    onClick,
    width,
    height,
    border,
    borderRadius,
    backgroundColor,
    color,
    children,
}) => {
    return (
        <>
            <Button
                onClick={onClick}
                width={width}
                height={height}
                border={border}
                borderRadius={borderRadius}
                backgroundColor={backgroundColor}
                color={color}
            >
                {children}
            </Button>
        </>
    );
};

const Button = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    outline: none;
    &:hover {
        cursor: pointer;
    }
`;
