import { useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import {
  ArrendamientoIcon,
  BodegaIcon,
  ClienteIcon,
  DasboardIcon,
  EraIcon,
  PagosIcon,
  PersonalIcon,
  RolesIcon,
} from './Icons'
import { Dashboard } from './Dashboard'
import { Store } from './Store'
import { Customers } from './Customers'
import { Employees } from './Employees'

export const Menu = () => {
  const [value, setValue] = useState('Dashboard')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            className="flex flex-row gap-3"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="Dashboard" value="Dashboard" />
            <DasboardIcon className="relative top-[13px] right-[10px]" />
            <Tab label="Bodega" value="Bodega" />
            <BodegaIcon className="relative top-[13px] right-[10px]" />
            <Tab label="Clientes" value="Clientes" />
            <ClienteIcon className="relative top-[13px] right-[10px]" />
            <Tab label="Pagos" value="Pagos" />
            <PagosIcon className="relative top-[13px] right-[10px]" />
            <Tab label="Era" value="Era" />
            <EraIcon className="relative top-[13px] right-[10px]" />
            <Tab label="Arrendamientos" value="Arrendamientos" />
            <ArrendamientoIcon className="relative top-[13px] right-[10px]" />
            <Tab label="Personal" value="Personal" />
            <PersonalIcon className="relative top-[13px] right-[10px]" />
            <Tab label="Roles" value="Roles" />
            <RolesIcon className="relative top-[13px] right-[10px]" />
          </TabList>
        </Box>
        <TabPanel value="Dashboard">
          <Dashboard />
        </TabPanel>
        <TabPanel value="Bodega">
          <Store />
        </TabPanel>
        <TabPanel value="Clientes">
          <Customers />
        </TabPanel>
        <TabPanel value="Pagos">Pagos</TabPanel>
        <TabPanel value="Era">Era</TabPanel>
        <TabPanel value="Arrendamientos">Arrendamientos</TabPanel>
        <TabPanel value="Personal">
          <Employees />
        </TabPanel>
        <TabPanel value="Roles">Roles</TabPanel>
      </TabContext>
    </Box>
  )
}
