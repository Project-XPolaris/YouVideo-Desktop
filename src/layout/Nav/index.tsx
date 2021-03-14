import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import useStyles from './style'
import useLayoutModel, { TabIndex } from '../../models/layout'
import { useHistory } from 'react-router-dom'
import { Folder, LibraryMusic, Settings, Videocam } from '@material-ui/icons'

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
    icon: <Settings />,
    title: 'Settings',
    index: 'Settings',
    path: '/home/setting'
  }
]
const Nav = () => {
  const classes = useStyles()
  const layoutModel = useLayoutModel()
  const history = useHistory()
  console.log(history.location.pathname)
  return (
    <div className={classes.root}>
      <List component='nav'>
        {NavItems.map((item) => (
          <ListItem
            key={item.index}
            button
            selected={layoutModel.activeIndex === item.index}
            onClick={() => {
              layoutModel.setActiveIndex(item.index)
              history.push(item.path)
              console.log(item)
            }}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
export default Nav
