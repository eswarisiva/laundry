import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {Dashboard} from '../pages/dashboard/Dashboard';
import UserRoles from '../pages/admin/userRoles/UserRoles';
import UserRoleDetail from '../pages/admin/userRoles/UserRoleDetail';
import AdminUserList from '../pages/admin/adminUsers/UserList';
import AdminUserDetail from '../pages/admin/adminUsers/UserDetail';
import CurrencyList from '../pages/masters/currency/CurrencyList';
import CurrencyDetail from '../pages/masters/currency/CurrencyDetail';
import CountryList from '../pages/masters/country/CountryList';
import CountryDetail from '../pages/masters/country/CountryDetail';
import StateList from '../pages/masters/state/StateList';
import StateDetail from '../pages/masters/state/StateDetail';
import CityList from '../pages/masters/city/CityList';
import CityDetail from '../pages/masters/city/CityDetail';
import AreaList from '../pages/masters/area/AreaList';
import AreaDetail from '../pages/masters/area/AreaDetail';
import CategoryList from '../pages/masters/category/CategoryList';
import CategoryDetail from '../pages/masters/category/CategoryDetail';
import ItemList from '../pages/masters/items/ItemList';
import ItemDetail from '../pages/masters/items/ItemDetail';
import CompanyInfo from '../pages/settings/CompanyInfo';
import AppSettings from '../pages/settings/AppSettings';
import RateSettings from '../pages/settings/RateSettings';
import Cancellations from '../pages/settings/Cancellations';
import TaxList from '../pages/settings/tax/TaxList';
import TaxDetail from '../pages/settings/tax/TaxDetail';
import CurrencyRates from '../pages/settings/CurrencyRates';
import AgentList from '../pages/agents/AgentList';
import {MenuTestPage} from '../pages/MenuTestPage';
import AgentProfile from '../pages/agents/profile/AgentProfile';
import AgentUpdate from '../pages/agents/AgentUpdate';
import LocationCharges from '../pages/agents/LocationCharges';
import AgentUsers from '../pages/agents/users/Users';
import AgentUserDetail from '../pages/agents/users/UserDetail';
import AgentWallet from '../pages/agents/wallet/Wallet';
import AgentStatistics from '../pages/agents/Statistics';
import AgentOrders from '../pages/agents/Orders';
import AgentItems from '../pages/agents/AgentItems';
import AgentSubscriptions from '../pages/agents/Subscriptions';
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='userRoles' element={<UserRoles />} />
        <Route path='userRoles/:roleId' element={<UserRoleDetail />} />
        <Route path='adminUsers' element={<AdminUserList />} />
        <Route path='adminUsers/:userId' element={<AdminUserDetail />} />
        <Route path='currency' element={<CurrencyList />} />
        <Route path='currency/:currencyId' element={<CurrencyDetail />} />
        <Route path='country' element={<CountryList />} />
        <Route path='country/:countryId' element={<CountryDetail />} />
        <Route path='state' element={<StateList />} />
        <Route path='state/:stateId' element={<StateDetail />} />
        <Route path='city' element={<CityList />} />
        <Route path='city/:cityId' element={<CityDetail />} />
        <Route path='area' element={<AreaList />} />
        <Route path='area/:areaId' element={<AreaDetail />} />
        <Route path='category' element={<CategoryList />} />
        <Route path='category/:categoryId' element={<CategoryDetail />} />
        <Route path='item' element={<ItemList />} />
        <Route path='item/:itemId' element={<ItemDetail />} />
        <Route path='settings/companyInfo' element={<CompanyInfo />} />
        <Route path='settings/app' element={<AppSettings />} />
        <Route path='settings/rate' element={<RateSettings />} />
        <Route path='settings/cancellation' element={<Cancellations />} />
        <Route path='settings/tax' element={<TaxList />} />
        <Route path='settings/tax/:taxId' element={<TaxDetail />} />
        <Route path='settings/currencyRates' element={<CurrencyRates />} />
        <Route path='agent/list' element={<AgentList />} />
        <Route path='agent/:agentId/profile' element={<AgentProfile />}  />
        <Route path='agent/:agentId/locationCharges' element={<LocationCharges />}  />
        <Route path='agent/:agentId/users' element={<AgentUsers />}  />
        <Route path='agent/:agentId/users/:userId' element={<AgentUserDetail />}  />
        <Route path='agent/:agentId' element={<AgentUpdate />}  />
        <Route path='agent/:agentId/wallet' element={<AgentWallet />}  />
        <Route path='agent/:agentId/stats' element={<AgentStatistics />}  />
        <Route path='agent/:agentId/orders' element={<AgentOrders />}  />
        <Route path='agent/:agentId/items' element={<AgentItems />}  />
        <Route path='agent/:agentId/subscriptions' element={<AgentSubscriptions />}  />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
