import useId from "../hooks/useId";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";

export const navbar=[
    {
        id:useId,
        title:'Home',
        path:'/home',
        element:<HomePage/>,
        private:false,
        hidden:false
    },
    {
        id:useId,
        title:'About',
        path:'/about',
        element:<AboutPage/>,
        private:false,
        hidden:false
    },
    {
        id:useId,
        title:'Contact',
        path:'/Contact',
        element:<ContactPage/>,
        private:false,
        hidden:false
    }
]


