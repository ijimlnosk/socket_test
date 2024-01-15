import Chatting from 'components/chat/ChattingView';
import ChatPage from 'pages/chatPage/chatPage';
import { createBrowserRouter } from 'react-router-dom';

import MainPage from '../pages/mainPage/mainPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/chat',
        element: <ChatPage />,
    },
    {
        path: '/chat:roomName',
        element: <Chatting />,
    },
]);
export default router;
