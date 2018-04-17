// import AboutUs from './views/AboutUs/';
// import Careers from './views/Careers/';
// import Contact from './views/Contact/';
// import NewsEvent from './views/NewsEvent/';
// import Services from './views/Services/';
// import Header from './js/Header';

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: Home,
        main: () => <h2>Home</h2>
    },
    {
        path: "/services",
        sidebar: Services,
        main: () => <h2>Services</h2>
    },
    {
        path: "/about-us",
        sidebar: AboutUs,
        main: () => <h2>About-us</h2>
    },
    {
        path: "/news-events",
        sidebar: NewsEvent,
        main: () => <h2>News-events</h2>
    },
    {
        path: "/careers",
        sidebar: Careers,
        main: () => <h2>Careers</h2>
    },
    {
        path: "/contact",
        sidebar: Contact,
        main: () => <h2>Contact</h2>
    }
];
export default routes;