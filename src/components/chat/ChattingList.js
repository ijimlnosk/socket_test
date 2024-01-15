import { CustomButton } from 'components/CustomButton';
import { useState } from 'react';
import styled from 'styled-components';

import ChattingView from './ChattingView';

const ChattingList = ({ onClose }) => {
    const [chatList, setChatList] = useState([
        'Room1',
        'Room2',
        'Room3',
        'Room4',
        'Room5',
    ]);
    const [right, setRight] = useState(null);

    const handleChatRoomClick = roomName => {
        setRight(roomName.target.value);
    };

    const handleAddChatRoom = () => {
        setChatList(prev => [...prev, 'Room' + parseInt(chatList.length + 1)]);
    };

    return (
        <>
            <Styled.Wrapper>
                <Styled.Container>
                    <CustomButton onClick={onClose}>X</CustomButton>
                    {chatList?.map((item, index) => (
                        <Styled.Box
                            key={index}
                            onClick={e => handleChatRoomClick(e)}
                            value={index + 1}
                        >
                            {item}
                        </Styled.Box>
                    ))}
                </Styled.Container>
                {right !== null && (
                    <ChattingView
                        roomName={right}
                        onClose={() => setRight(null)}
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
    padding: 20px;
    border-radius: 10px;
`;

const Box = styled.li`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    border: 1px solid #000;
    &:hover {
        cursor: pointer;
    }
`;

const CloseButton = styled.button``;

const Styled = {
    Wrapper,
    Container,
    Box,
};
