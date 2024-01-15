import styled from 'styled-components';

export const CustomInput = ({
    type,
    value,
    onChange,
    width,
    height,
    placeholder,
}) => {
    return (
        <>
            <Input
                type={type}
                value={value}
                onChange={onChange}
                width={width}
                height={height}
                placeholder={placeholder}
            />
        </>
    );
};

const Input = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
    margin-left: 10px;
`;
