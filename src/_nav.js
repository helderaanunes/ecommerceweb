import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAccountLogout,
  cilAddressBook,
  cilBell,
  cilBriefcase,
  cilCalculator,
  cilCart,
  cilChartLine,
  cilChartPie,
  cilCheckCircle,
  cilCreditCard,
  cilCursor,
  cilDescription,
  cilDollar,
  cilDrop,
  cilGift,
  cilInbox,
  cilNotes,
  cilObjectGroup,
  cilPencil,
  cilPeople,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilTransfer,
  cilTruck,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Categoria ',
    to: '/categoria',
    icon: <CIcon icon={cilObjectGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/categoria/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/categoria/list',
      }
    ],
  },
  { 
    component: CNavGroup,
    name: 'Estoque',
    to: '/estoque',
    icon: <CIcon icon={cilInbox} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/estoque/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/estoque/list',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Cliente',
    to: '/cliente',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/cliente/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/cliente/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Produto',
    to: '/produto',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/produto/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/produto/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Fornecedor',
    to: '/fornecedor',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/fornecedor/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/fornecedor/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Venda',
    to: '/venda',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/venda/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/venda/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Entrega',
    to: '/entrega',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/entrega/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/entrega/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Cartão',
    to: '/cartao',
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/cartao/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/cartao/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Lista de Desejos',
    to: '/listadesejo',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/listadesejo/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/listadesejo/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Promoção',
    to: '/promocao',
    icon: <CIcon icon={cilGift} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/promocao/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/promocao/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Devolução',
    to: '/devolucao',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/devolucao/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/devolucao/list',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Avaliação do Produto',
    to: '/avalicaoProduto',
    icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/avalicaoProduto/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/avalicaoProduto/list',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Fluxo Financeiro',
    to: '/fluxoFinanceiro',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/fluxoFinanceiro/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/fluxoFinanceiro/list',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Histórico de Entrega',
    to: '/historicoEntrega',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/historicoEntrega/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/historicoEntrega/list',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Transportadora',
    to: '/transportadora',
    icon: <CIcon icon={cilTransfer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/transportadora/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/transportadora/list',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Endereço',
    to: '/endereco',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/endereco/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/endereco/list',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Usuário',
    to: '/usuario',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/usuario/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/usuairo/list',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Carrinho',
    to: '/carrinhoProduto',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Adicionar',
        to: '/carrinhoProduto/add',
      },
      {
        component: CNavItem,
        name: 'Listar',
        to: '/carrinhoProduto/list',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Buttons ',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
