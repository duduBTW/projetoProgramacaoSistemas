import React from "react";

const Dashboard = <div>UwU</div>;
const About = React.lazy(() => import("../../pages/about"));
const CriarFicha = React.lazy(() => import("../../pages/Epi/CriarFicha"));
const Estoque = React.lazy(() => import("../../pages/Epi/Estoque"));

const routes = [
  // { path: "/", exact: true, name: "Home", privateRoute: true },
  // {
  //   path: "/login",
  //   exact: true,
  //   name: "Login",
  //   component: Login,
  //   privateRoute: false,
  // },
  {
    path: "/home",
    name: "Inicio",
    exact: false,
    component: About,
    privateRoute: true,
  },
  {
    path: "/epi/criar",
    name: "Criar Ficha",
    exact: false,
    component: CriarFicha,
    privateRoute: true,
  },
  {
    path: "/epi/estoque",
    name: "Estoque",
    exact: false,
    component: Estoque,
    privateRoute: true,
  },
];

export default routes;
