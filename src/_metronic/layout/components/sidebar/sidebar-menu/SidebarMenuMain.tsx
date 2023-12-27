import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'        icon='element-11'
        title='DASHBOARD'
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItemWithSub to='' icon='switch' title='ADMIN' fontIcon='bi-layers'>
         <SidebarMenuItem to='/userRoles' title='User Roles' fontIcon='bi-layers' />
         <SidebarMenuItem to='/adminUsers' title='Admin User' fontIcon='bi-layers' />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='' icon='switch' title='MASTERS' fontIcon='bi-layers'>
         <SidebarMenuItem to='/currency' title='Currencies' fontIcon='bi-layers' />
         <SidebarMenuItem to='/country' title='Country' fontIcon='bi-layers' />
         <SidebarMenuItem to='/state' title='State / Provinces' fontIcon='bi-layers' />
         <SidebarMenuItem to='/city' title='City' fontIcon='bi-layers' />
         <SidebarMenuItem to='/area' title='Area' fontIcon='bi-layers' />
         <SidebarMenuItem to='/category' title='Category' fontIcon='bi-layers' />
         <SidebarMenuItem to='/item' title='Items' fontIcon='bi-layers' />
      </SidebarMenuItemWithSub>
      
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
