import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import MySkillsContainer from './components/UI/MySkillsContainer';
import AboutMeContainer from './components/UI/AboutMeContainer';
import HeroContainer from './components/UI/HeroContainer';
import PortfolioContainer from './components/UI/PortfolioContainer';
import ContactMeContainer from './components/UI/contactMeContainer';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element:  <HeroContainer />
        }, {
          path: '/aboutme',
          element: <AboutMeContainer/>
        }, {
          path: '/myskills',
          element: <MySkillsContainer />
        }, {
          path: '/portfolio',
          element: <PortfolioContainer />
        }, {
          path: '/contact',
          element: <ContactMeContainer />
        }
      ]
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);
