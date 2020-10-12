import React from "react";

const Dashboard = <div>UwU</div>;
const Inicio = React.lazy(() => import("../../pages/Inicio"));
const Ficha = React.lazy(() => import("../../components/Epi/Ficha/index"));
const CriarFicha = React.lazy(() => import("../../pages/Epi/CriarFicha"));
const Estoque = React.lazy(() => import("../../pages/Epi/Estoque"));
const EpiItem = React.lazy(() => import("../../pages/Epi/EpiItem"));
const Model = React.lazy(() => import("../../pages/Epi/Model"));
const Mobile = React.lazy(() => import("../../pages/Login/Mobile"));
const Employee = React.lazy(() => import("../../pages/Employee"));
const EmployeeItem = React.lazy(() => import("../../pages/Employee/item"));
const EpiItemO = React.lazy(() => import("../../components/Epi/Ficha/Itme"));

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
    path: "/funcionario",
    name: "Ficha",
    exact: true,
    component: Employee,
    privateRoute: true,
  },
  {
    path: "/funcionario/:id",
    name: "Ficha Func",
    exact: true,
    component: EmployeeItem,
    privateRoute: true,
  },
  {
    path: "/epi/ficha",
    name: "Ficha",
    exact: true,
    component: Ficha,
    privateRoute: true,
  },
  {
    path: "/epi/ficha/:id",
    name: "Ficha",
    exact: true,
    component: EpiItemO,
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
    exact: true,
    component: Estoque,
    privateRoute: true,
  },
  {
    path: "/epi/estoque/:id",
    name: "Estoque Item",
    exact: true,
    component: EpiItem,
    privateRoute: true,
  },
  {
    path: "/epi/model",
    name: "Estoque",
    exact: false,
    component: Model,
    privateRoute: true,
  },
  {
    path: "/mobileLogin",
    name: "Estoque",
    exact: false,
    component: Mobile,
    privateRoute: true,
  },
];

export default routes;
