import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const CategoriaList = React.lazy(() => import('./views/categoria/CategoriaList'))
const CategoriaAdd = React.lazy(() => import('./views/categoria/CategoriaAdd'))
const ProdutoList = React.lazy(() => import('./views/produto/ProdutoList'))
const ProdutoAdd = React.lazy(() => import('./views/produto/ProdutoAdd'))
const ClienteList = React.lazy(() => import('./views/cliente/ClienteList'))
const ClienteAdd = React.lazy(() => import('./views/cliente/ClienteAdd'))
const VendaList = React.lazy(() => import('./views/venda/VendaList'))
const VendaAdd = React.lazy(() => import('./views/venda/VendaAdd'))
const EnderecoList = React.lazy(() => import('./views/endereco/EnderecoList'))
const EnderecoAdd = React.lazy(() => import('./views/endereco/EnderecoAdd'))
const EstoqueList = React.lazy(() => import('./views/estoque/EstoqueList'))
const EstoqueAdd = React.lazy(() => import('./views/estoque/EstoqueAdd'))
const ProdutoFornecedorList = React.lazy(() => import('./views/produtoFornecedor/ProdutoFornecedorList'))
const ProdutoFornecedorAdd = React.lazy(() => import('./views/produtoFornecedor/ProdutoFornecedorAdd'))
const FornecedorList = React.lazy(() => import('./views/fornecedor/FornecedorList'))
const FornecedorAdd = React.lazy(() => import('./views/fornecedor/FornecedorAdd'))
const UsuarioList = React.lazy(() => import('./views/usuario/UsuarioList'))
const UsuarioAdd = React.lazy(() => import('./views/usuario/UsuarioAdd'))
const PermissaoList = React.lazy(() => import('./views/permissao/PermissaoList'))
const PermissaoAdd = React.lazy(() => import('./views/permissao/PermissaoAdd'))
const CartaoList = React.lazy(() => import('./views/cartao/CartaoList'))
const CartaoAdd = React.lazy(() => import('./views/cartao/CartaoAdd'))
const CarrinhoProdutoList = React.lazy(() => import('./views/carrinhoProduto/CarrinhoProdutoList'))
const CarrinhoProdutoAdd = React.lazy(() => import('./views/carrinhoProduto/CarrinhoProdutoAdd'))
const TransportadoraList = React.lazy(() => import('./views/transportadora/TransportadoraList'))
const TransportadoraAdd = React.lazy(() => import('./views/transportadora/TransportadoraAdd'))
const ProdutoEstoqueList = React.lazy(() => import('./views/produtoEstoque/ProdutoEstoqueList'))
const ProdutoEstoqueAdd = React.lazy(() => import('./views/produtoEstoque/ProdutoEstoqueAdd'))
const PromocaoList = React.lazy(() => import('./views/promocao/PromocaoList'))
const PromocaoAdd = React.lazy(() => import('./views/promocao/PromocaoAdd'))
const ListaDesejoList = React.lazy(() => import('./views/listaDesejo/ListaDesejoList'))
const ListaDesejoAdd = React.lazy(() => import('./views/listaDesejo/ListaDesejoAdd'))
const ImagemProdutoList = React.lazy(() => import('./views/imagemProduto/ImagemProdutoList'))
const ImagemProdutoAdd = React.lazy(() => import('./views/imagemProduto/ImagemProdutoAdd'))
const ItemVendaList = React.lazy(() => import('./views/itemVenda/ItemVendaList'))
const ItemVendaAdd = React.lazy(() => import('./views/itemVenda/ItemVendaAdd'))
const FluxoFinanceiroList = React.lazy(() => import('./views/fluxoFinanceiro/FluxoFinanceiroList'))
const FluxoFinanceiroAdd = React.lazy(() => import('./views/fluxoFinanceiro/FluxoFinanceiroAdd'))
const DevolucaoList = React.lazy(() => import('./views/devolucao/DevolucaoList'))
const DevolucaoAdd = React.lazy(() => import('./views/devolucao/DevolucaoAdd'))
const AvaliacaoProdutoList = React.lazy(() => import('./views/avaliacaoProduto/AvaliacaoProdutoList'))
const AvaliacaoProdutoAdd = React.lazy(() => import('./views/avaliacaoProduto/AvaliacaoProdutoAdd'))
const EntregaList = React.lazy(() => import('./views/entrega/EntregaList'))
const EntregaAdd = React.lazy(() => import('./views/entrega/EntregaAdd'))
const HistoricoEntregaList = React.lazy(() => import('./views/historicoEntrega/HistoricoEntregaList'))
const HistoricoEntregaAdd = React.lazy(() => import('./views/historicoEntrega/HistoricoEntregaAdd'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/categoria/list', name: 'Categoria Listar', element: CategoriaList },
  { path: '/categoria/add', name: 'Categoria Adicionar', element: CategoriaAdd },
  { path: '/produto/list', name: 'Produto Listar', element: ProdutoList },
  { path: '/produto/add', name: 'Produto Adicionar', element: ProdutoAdd },
  { path: '/cliente/list', name: 'Cliente Listar', element: ClienteList },
  { path: '/cliente/add', name: 'Cliente Adicionar', element: ClienteAdd },
  { path: '/venda/list', name: 'Venda Listar', element: VendaList },
  { path: '/venda/add', name: 'Venda Adicionar', element: VendaAdd },
  { path: '/endereco/list', name: 'Endereço Listar', element: EnderecoList },
  { path: '/endereco/add', name: 'Endereço Adicionar', element: EnderecoAdd },
  { path: '/estoque/list', name: 'Estoque Listar', element: EstoqueList },
  { path: '/estoque/add', name: 'Estoque Adicionar', element: EstoqueAdd },
  { path: '/produtoFornecedor/list', name: 'Produto Fornecedor Listar', element: ProdutoFornecedorList },
  { path: '/produtoFornecedor/add', name: 'Produto Fornecedor Adicionar', element: ProdutoFornecedorAdd },
  { path: '/fornecedor/list', name: 'Fornecedor Listar', element: FornecedorList },
  { path: '/fornecedor/add', name: 'Fornecedor Adicionar', element: FornecedorAdd },
  { path: '/usuario/list', name: 'Usuário Listar', element: UsuarioList },
  { path: '/usuario/add', name: 'Usuário Adicionar', element: UsuarioAdd },
  { path: '/permissao/list', name: 'Permissão Listar', element: PermissaoList },
  { path: '/permissao/add', name: 'Permissão Adicionar', element: PermissaoAdd },
  { path: '/cartao/list', name: 'Cartão Listar', element: CartaoList },
  { path: '/cartao/add', name: 'Cartão Adicionar', element: CartaoAdd },
  { path: '/carrinhoProduto/list', name: 'Carrinho Produto Listar', element: CarrinhoProdutoList },
  { path: '/carrinhoProduto/add', name: 'Carrinho Produto Adicionar', element: CarrinhoProdutoAdd },
  { path: '/transportadora/list', name: 'Transportadora Listar', element: TransportadoraList },
  { path: '/transportadora/add', name: 'Transportadora Adicionar', element: TransportadoraAdd },
  { path: '/produtoEstoque/list', name: 'Produto Estoque Listar', element: ProdutoEstoqueList },
  { path: '/produtoEstoque/add', name: 'Produto Estoque Adicionar', element: ProdutoEstoqueAdd },
  { path: '/promocao/list', name: 'Promoção Listar', element: PromocaoList },
  { path: '/promocao/add', name: 'Promoção Adicionar', element: PromocaoAdd },
  { path: '/listaDesejo/list', name: 'Lista de Desejo Listar', element: ListaDesejoList },
  { path: '/listaDesejo/add', name: 'Lista de Desejo Adicionar', element: ListaDesejoAdd },
  { path: '/imagemProduto/list', name: 'Imagem Produto Listar', element: ImagemProdutoList },
  { path: '/imagemProduto/add', name: 'Imagem Produto Adicionar', element: ImagemProdutoAdd },
  { path: '/itemVenda/list', name: 'Item Venda Listar', element: ItemVendaList },
  { path: '/itemVenda/add', name: 'Item Venda Adicionar', element: ItemVendaAdd },
  { path: '/fluxoFinanceiro/list', name: 'Fluxo Financeiro Listar', element: FluxoFinanceiroList },
  { path: '/fluxoFinanceiro/add', name: 'Fluxo Financeiro Adicionar', element: FluxoFinanceiroAdd },
  { path: '/devolucao/list', name: 'Devolução Listar', element: DevolucaoList },
  { path: '/devolucao/add', name: 'Devolução Adicionar', element: DevolucaoAdd },
  { path: '/avaliacaoProduto/list', name: 'Avaliação Produto Listar', element: AvaliacaoProdutoList },
  { path: '/avaliacaoProduto/add', name: 'Avaliação Produto Adicionar', element: AvaliacaoProdutoAdd },
  { path: '/entrega/list', name: 'Entrega Listar', element: EntregaList },
  { path: '/entrega/add', name: 'Entrega Adicionar', element: EntregaAdd },
  { path: '/historicoEntrega/list', name: 'Histórico Entrega Listar', element: HistoricoEntregaList },
  { path: '/historicoEntrega/add', name: 'Histórico Entrega Adicionar', element: HistoricoEntregaAdd },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tabs', name: 'Tabs', element: Tabs },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
