import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import styled from 'styled-components';

const socket = io('http://49.165.177.17:3000');

const Chatting = ({ roomName }) => {
    const location = useLocation();
    const { name } = location.state || {};

    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const messagesEndRef = useRef(null);

    const scrollIntoBottom = () => {
        // 새로운 메시지가 입력되면 맨 밑으로 이동
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    //
    useEffect(() => {
        scrollIntoBottom();
    }, [chat]);
    //

    useEffect(() => {
        if (roomName) {
            socket.emit('join room', roomName);
            console.log(roomName);
        }

        const messageHandler = msg => {
            setChat(prev => [...prev, msg]);
        };

        socket.on('chat message', messageHandler);

        return () => {
            socket.off('chat message', messageHandler);
            if (roomName) {
                socket.emit('leave room', roomName);
            }
        };
    }, [roomName]);

    const sendMessage = e => {
        e.preventDefault();
        const newMessage = { roomName: roomName, user: name, text: message };
        socket.emit('chat message', newMessage);
        setMessage('');
        setChat(prev => [...prev, newMessage]);
    };

    return (
        <>
            <Styled.Wrapper>
                <Styled.Container>
                    <Styled.Ul>
                        {chat.map((msg, index) => (
                            <Styled.Li
                                key={index}
                                isUserMessage={msg.user === name}
                            >
                                {msg.user !== name && <span>{msg.user}</span>}
                                <MessageText isUserMessage={msg.user === name}>
                                    {msg.text}
                                </MessageText>
                            </Styled.Li>
                        ))}
                        <div ref={messagesEndRef} />
                    </Styled.Ul>
                </Styled.Container>
                <SForm onSubmit={sendMessage}>
                    <Input
                        type="text"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="메세지 입력"
                    />
                    <Button type="submit">전송</Button>
                </SForm>
            </Styled.Wrapper>
        </>
    );
};

export default Chatting;

const Wrapper = styled.div`
    width: 300px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 500px) {
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

const Container = styled.div`
    width: 300px;
    height: 300px;
    overflow: auto;
    @media (max-width: 500px) {
        width: 250px;
        height: 400px;
        overflow: auto;
    }
`;

const Ul = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.isUserMessage ? 'flex-end' : 'flex-start')};
    margin: 0 30px;
    margin-bottom: 5px;
    @media (max-width: 500px) {
        margin: 0 10px;
    }
`;

const MessageText = styled.span`
    background-color: ${props => (props.isUserMessage ? '#E180E3' : '#E5D9FF')};
    padding: 5px;
    border-radius: 8px;
    margin-left: 5px;
    max-width: 80%;
    word-wrap: break-word;

    @media (max-width: 500px) {
        max-width: 80%;
    }
`;

const Input = styled.input`
    width: 230px;
    height: 50px;
    padding-left: 10px;
    @media (max-width: 500px) {
        width: 200px;
        height: 30px;
    }
`;

const Button = styled.button`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    border: none;
    border-radius: 8px;
    background-color: #bcb2d7;
    &:hover {
        background-color: #9517a0;
    }
`;

const SForm = styled.form`
    display: flex;
    flex-direction: row;
`;
const Styled = {
    Wrapper,
    Container,
    Ul,
    SForm,
    Li,
};
