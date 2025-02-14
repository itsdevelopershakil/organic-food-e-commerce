import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import { store } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
        <Toaster containerClassName="!z-[999999999]" />
    </Provider>
);
