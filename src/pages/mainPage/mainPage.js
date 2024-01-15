import { CustomInput } from 'components/CustomInput';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainPage = () => {
    const navigate = useNavigate();
    const [nickName, setNickName] = useState('');
    // const [emptyName, setEmptyName] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/chat', {
            state: { name: nickName },
        });
    };

    // const trueNickName = setEmptyName(true);

    return (
        <>
            <Styled.Wrapper>
                <Styled.Form onSubmit={handleSubmit}>
                    <Label>
                        사용자명 :
                        <CustomInput
                            type="text"
                            value={nickName}
                            onChange={e => setNickName(e.target.value)}
                        />
                    </Label>
                </Styled.Form>
            </Styled.Wrapper>
        </>
    );
};
export default MainPage;

const Wrapper = styled.div``;

const Form = styled.form``;

const Label = styled.label``;

const Styled = {
    Wrapper,
    Form,
    Label,
};
