import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import Page404 from "../components/Page404/Page404";

export const publicRoutes = [
  {path: '/', component: Main, exact: true, props: {}},
  {path: '/signin', component: Login, exact: true, props: {}},
  {path: '/404', component: Page404, exact: true, props: {}},
]