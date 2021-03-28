import { createModel } from 'hox'
import { useState } from 'react'

export type TabIndex = 'Home' | 'Library' | 'Videos' | 'Settings' | 'Tags'
export type NavIcon = 'Menu' | 'Back'
export type DialogKey = 'library/pickDirectory' | 'video/addTags' | 'video/transcode'
const LayoutModel = () => {
  const [activeIndex, setActiveIndex] = useState<TabIndex>('Home')
  const [navIcon, setNavIcon] = useState<NavIcon>('Menu')
  const [dialogs, setDialogs] = useState< { [key:string]:boolean }>({})
  const switchDialog = (dialogKey:DialogKey) => {
    const newDialog = {
      ...dialogs
    }
    newDialog[dialogKey] = !newDialog[dialogKey]
    setDialogs(newDialog)
  }
  const getDialogOpen = (dialogKey:DialogKey) => {
    return Boolean(dialogs[dialogKey])
  }
  return {
    setActiveIndex,
    activeIndex,
    navIcon,
    setNavIcon,
    switchDialog,
    dialogs,
    getDialogOpen
  }
}
const useLayoutModel = createModel(LayoutModel)
export default useLayoutModel
