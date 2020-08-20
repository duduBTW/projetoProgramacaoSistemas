export default {
  title: "Cabeçalho",
  items: [
    {
      name: "Inicio",
      url: "/home",
      //Nome do ícone : font awesome
      icon: "fa fa-bell",
      badge: {
        variant: "info", //danger, warning, success, info, primary, secundary
        text: "NOVO",
      },
    },
    // {
    //   name: "TESTEEEE",
    //   url: "/teste2",
    //   //Nome do ícone : font awesome
    //   icon: "fa fa-bell",
    //   badge: {
    //     variant: "info", //danger, warning, success, info, primary, secundary
    //     text: "NOVO",
    //   },
    // },
    {
      name: "Epi",
      url: "/epi",
      icon: "fa fa-bell",
      children: [
        {
          name: "Criar Ficha",
          url: "/criar",
        },
        {
          name: "Estoque",
          url: "/estoque",
        },
      ],
    },
  ],
};
