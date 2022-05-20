import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import useStyles from './style'
import useLayoutModel, { TabIndex } from '../../models/layout'
import { useNavigate } from 'react-router-dom'
import { Bookmarks, Folder, Settings, Videocam } from '@mui/icons-material'
import { ListItemButton } from '@mui/material'

const NavItems: {
  icon: React.ReactElement, title: string, index: TabIndex, path: string
}[] = [
  {
    icon: <HomeIcon />,
    title: 'Home',
    index: 'Home',
    path: '/home'
  },
  {
    icon: <Videocam />,
    title: 'Videos',
    index: 'Videos',
    path: '/home/videos'
  },
  {
    icon: <Folder />,
    title: 'Library',
    index: 'Library',
    path: '/home/library'
  },
  {
    icon: <Bookmarks />,
    title: 'Tags',
    index: 'Tags',
    path: '/home/tags'
  },
  {
    icon: <Settings />,
    title: 'Settings',
    index: 'Settings',
    path: '/home/setting'
  }
]
const Nav = () => {
  const classes = useStyles()
  const layoutModel = useLayoutModel()
  const history = useNavigate()
  return (
    <div className={classes.root}>
      <List component='nav'>
        {NavItems.map((item) => (
          <ListItemButton
            key={item.index}
            selected={layoutModel.activeIndex === item.index}
            onClick={() => {
              layoutModel.setActiveIndex(item.index)
              history(item.path)
            }}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </div>
  )
}
export default Nav
