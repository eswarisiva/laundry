import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem to='/builder' icon='switch' title='ADMIN' fontIcon='bi-layers' />
      
      <SidebarMenuItem to='/crafted/pages/profile/overview' title='MASTERS'  />
          <SidebarMenuItem to='/crafted/pages/profile/projects' title='SETTINGS'  />
          <SidebarMenuItem
            to='/crafted/pages/profile/campaigns'
            title='ORDERS'

          />
          <SidebarMenuItem
            to='/crafted/pages/profile/documents'
            title='USERS'
            
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/connections'
            title='ACTIVITIES'
            
          />
      <SidebarMenuItem
        to='/apps/user-management/users'
        icon='abstract-28'
        title='REPORTS'
        fontIcon='bi-layers'
      />
      
    </>
  )
}

export {SidebarMenuMain}
