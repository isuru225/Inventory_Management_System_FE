import React from 'react'

// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// // Base
// const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
// const Cards = React.lazy(() => import('./views/base/cards/Cards'))
// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
// const Navs = React.lazy(() => import('./views/base/navs/Navs'))
// const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
// const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
// const Progress = React.lazy(() => import('./views/base/progress/Progress'))
// const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
// const Tables = React.lazy(() => import('./views/base/tables/Tables'))
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// // Buttons
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
// const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

// //Forms
// const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
// const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
// const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
// const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
// const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
// const Range = React.lazy(() => import('./views/forms/range/Range'))
// const Select = React.lazy(() => import('./views/forms/select/Select'))
// const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

// const Charts = React.lazy(() => import('./views/charts/Charts'))

// // Icons
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// // Notifications
// const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
// const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
// const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
// const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

// const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
const Login = React.lazy(()=> import('./pages/Login/Login.tsx'))
const Home = React.lazy(()=> import('./components/Home/Home.tsx'))
const RawDrugs = React.lazy(()=> import('./components/RawDrugs/RawDrugs.tsx'))
const StoreKeeper = React.lazy(()=> import('./components/StoreKeeper/StoreKeeper.tsx'))
const History = React.lazy(()=> import('./components/History/History.tsx'))
const Registration = React.lazy(()=> import('./components/Admin/Admin.tsx'))
const FinishedDrugs = React.lazy(()=> import('./components/FinishedDrugs/FinishdDrugs.tsx'))
const ResetPassword = React.lazy(()=> import('./pages/ResetPassword/ResetPassword.tsx'))
const ForgotPassword = React.lazy(()=> import('./pages/ForgotPassword/ForgotPassword.tsx'))


const routes = [
   { path: '/login', name: 'Login',element: Login},
   { path: '/home', name: 'Home2', element: Home},
   { path: '/rawdrugs', name: 'RawDrugs', element : RawDrugs},
   { path: ':variable/storekeeper', name: 'StoreKeeper', element : StoreKeeper},
   { path: '/history', name: 'History', element : History},
   { path: '/admin', name: 'Registration', element : Registration},
   { path: '/finisheddrugs', name: 'FinishedDrugs', element : FinishedDrugs},
   { path: '/login/resetpassword', name: 'ResetPassword', element : ResetPassword},
   { path: '/login/forgotpassword', name: 'ForgotPassword', element : ForgotPassword}
]

export default routes
