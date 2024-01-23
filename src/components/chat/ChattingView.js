import styled from 'styled-components';

import Chatting from './Chatting';

const ChattingView = ({ roomName, onClose }) => {
    return (
        <>
            <Styled.Wrapper>
                <Styled.BackBtn onClick={onClose}>&larr;</Styled.BackBtn>
                <Chatting roomName={roomName} />
            </Styled.Wrapper>
        </>
    );
};
export default ChattingView;

const Wrapper = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 300px;
    height: 400px;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        width: 100%;
        height: 100%;
        bottom: 0;
        right: 0;
    }
`;

const BackBtn = styled.button``;

const Styled = {
    Wrapper,
    BackBtn,
};
