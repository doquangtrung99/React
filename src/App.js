import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootPage from './component/pages/RootPage';
import { publishroute } from './component/route/publishroutes'
import DefaultLayout from './component/DefaultLayout';
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootPage />}>
    {publishroute.map(item => {

      const Element = item.component
      return (
        <Route path={item.path} element={item.layout ? <DefaultLayout><Element /></DefaultLayout> : <Element />} />
      )
    })}
  </Route>
))


function App() {
  return (
    <div >
      <header >
        <RouterProvider router={router} />
      </header>

    </div>

  );
}
export default App;
