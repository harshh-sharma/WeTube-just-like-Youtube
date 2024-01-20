import './App.css';
import { Body } from './components/Body';
import { Head } from './components/Head';
import { Provider } from 'react-redux';
import store from './utils/Store/Store';
import {RouterProvider, createBrowserRouter,router} from 'react-router-dom'
import { MainContainer } from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchPage from './components/SearchPage';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'watch',
        element:<WatchPage/>
      },
      {
        path:'/search',
        element:<SearchPage/>
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
