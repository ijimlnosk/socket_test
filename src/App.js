import './App.css';

import MainPage from 'pages/mainPage/mainPage';
import { RouterProvider } from 'react-router-dom';
import router from 'routes/route';

function App() {
    return (
        <RouterProvider router={router}>
            <MainPage />
        </RouterProvider>
    );
}

export default App;
