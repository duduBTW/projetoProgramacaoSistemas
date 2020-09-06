import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";

interface SidenavItem {
  name: string;
  url: string;
  Icon?: any;
  badge?: any;
  children?: Array<SidenavItem>;
}

interface sidenavProps {
  title?: string;
  items: Array<SidenavItem>;
}

const sidenav: sidenavProps = {
  title: "Cabeçalho",
  items: [
    {
      name: "Inicio",
      url: "/home",
      //Nome do ícone : font awesome
      Icon: HomeIcon,
      badge: {
        variant: "info", //danger, warning, success, info, primary, secundary
        text: "NOVO",
      },
    },
    {
      name: "Epi",
      url: "/epi",
      Icon: BuildIcon,
      children: [
        {
          name: "Ficha",
          url: "/ficha",
          children: [
            {
              name: "Criar Ficha",
              url: "/epi/criar",
            },
            {
              name: "Ver Ficha",
              url: "/epi/ficha",
            },
          ],
        },
        {
          name: "Estoque",
          url: "/epi/estoque",
        },
      ],
    },
  ],
};

export default sidenav;
