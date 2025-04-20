import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import { Home,AboutUs,ContactUs ,User} from './components/index.js'
import Github from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "AboutUs",
        element: <AboutUs />
      },
      {
      path: "ContactUs",
      element: <ContactUs />
      },
      {
        path: "User/:userid", 
        //we get access of userid in User component automatically because we render User component in this element.
        element: <User />
      },
      {
        path: "Github",
        element: <Github />,
        // loader : {githubInfoLoader}
      }
    ]
  }
])

// another way to create router
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path = "/" element = {<Root />}>
//       <Route path='' element = {<Home />} />
//       <Route path='AboutUs' element = {<AboutUs />} />
//       <Route path="ContactUs" elememt = {<ContactUs />} />
//       <Route path="User/:userid" element = {<User />} />
//       <Route path="Github" element = {<Github />} />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
