import { ErrorPage, Main, News } from './components';
import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers';
import { createStore  } from 'redux';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ERoutes } from './types';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={`${ERoutes.CurrentNews}/:id`} element={<News />} />
          <Route path={ERoutes.Main} element={<Main />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
