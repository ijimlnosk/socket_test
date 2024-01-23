import defaultImg from 'assets/images/defaultImg.png';
import { CustomButton } from 'components/CustomButton';
import { useState } from 'react';
import styled from 'styled-components';

import ChattingView from './ChattingView';

const ChattingList = ({ onClose }) => {
    const [chatList, setChatList] = useState([
        {
            id: 1,
            nickname: '최하영',
            userImg: '',
            comments: '채팅 내용',
        },
        {
            id: 2,
            nickname: '이영록',
            userImg: '',
            comments: '채팅 내용',
        },
        {
            id: 3,
            nickname: '허진욱',
            userImg: '',
            comments: '채팅 내용',
        },
        {
            id: 4,
            nickname: '장지영',
            userImg: '',
            comments: '채팅 내용',
        },
        {
            id: 5,
            nickname: '박채윤',
            userImg: '',
            comments: '채팅 내용',
        },
        {
            id: 6,
            nickname: '이윤신',
            userImg: '',
            comments: '채팅 내용',
        },
    ]);
    const [roomView, setRoomView] = useState(null);

    const handleChatRoomClick = roomName => {
        setRoomView(roomName.target.value);
    };

    const handleAddChatRoom = () => {
        setChatList(prev => [...prev, 'Room' + parseInt(chatList.length + 1)]);
    };

    return (
        <>
            <Styled.Wrapper>
                <CustomButton onClick={onClose}>X</CustomButton>
                <Styled.Container>
                    {chatList?.map((item, index) => (
                        <Styled.Box
                            key={index}
                            onClick={e => handleChatRoomClick(e)}
                            value={index + 1}
                        >
                            <img src={item.userImg === '' && defaultImg} />
                            <Styled.TextContainer>
                                <Styled.Span>{item.nickname}</Styled.Span>
                                <Styled.P>{item.comments}</Styled.P>
                            </Styled.TextContainer>
                        </Styled.Box>
                    ))}
                </Styled.Container>
                {roomView !== null && (
                    <ChattingView
                        roomName={roomView}
                        onClose={() => setRoomView(null)}
                    />
                )}
                <CustomButton
                    onClick={() => handleAddChatRoom()}
                    children="채팅방 추가"
                />
            </Styled.Wrapper>
        </>
    );
};
export default ChattingList;

const Wrapper = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 300px;
    height: 400px;
    overflow: auto;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000; // 다른 요소들 위에 띄우기
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
const Container = styled.div`
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
`;

const Box = styled.li`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
    padding-top: 5px;
    border: 1px solid #000;
    &:hover {
        cursor: pointer;
        background-color: #ccc;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Span = styled.span`
    font-size: 14px;
`;

const P = styled.p`
    font-size: 10px;
`;

const CloseButton = styled.button``;

const Styled = {
    Wrapper,
    Container,
    Box,
    TextContainer,
    Span,
    P,
};
