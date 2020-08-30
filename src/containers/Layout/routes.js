import React from "react";

const Dashboard = <div>UwU</div>;
const Inicio = React.lazy(() => import("../../pages/Inicio"));
const Ficha = React.lazy(() => import("../../components/Epi/Ficha"));
const CriarFicha = React.lazy(() => import("../../pages/Epi/CriarFicha"));
const Estoque = React.lazy(() => import("../../pages/Epi/Estoque"));
const Model = React.lazy(() => import("../../pages/Epi/Model"));

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
    component: Inicio,
    privateRoute: true,
  },
  {
    path: "/epi/ficha",
    name: "Ficha",
    exact: false,
    component: Ficha,
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
  {
    path: "/epi/model",
    name: "Estoque",
    exact: false,
    component: Model,
    privateRoute: true,
  },
];

export default routes;
