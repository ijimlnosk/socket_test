import ChattingList from 'components/chat/ChattingList';
import { CustomButton } from 'components/CustomButton';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ChatPage = () => {
    const location = useLocation();
    const { name } = location.state || {};
    const [showChat, setShowChat] = useState(false);
    const toggleChat = () => setShowChat(!showChat);

    return (
        <>
            <Styled.Wrapper>
                사용자 이름 : {name}
                <Styled.Container>
                    <CustomButton
                        onClick={toggleChat}
                        children={showChat ? '채팅 닫기' : '채팅 열기'}
                    />
                    {showChat && (
                        <ChattingList onClose={() => setShowChat(false)} />
                    )}
                </Styled.Container>
            </Styled.Wrapper>
        </>
    );
};
export default ChatPage;

const Wrapper = styled.div``;

const Container = styled.div``;

const Styled = {
    Wrapper,
    Container,
};
