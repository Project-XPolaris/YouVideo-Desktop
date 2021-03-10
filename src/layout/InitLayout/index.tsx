import React from 'react'
import { ApplicationConfig } from '../../config'

export interface InitLayoutPropsType {
    children:any
}

const InitLayout = ({ children }: InitLayoutPropsType) => {
  const check = async () => {
    const apiUrl = localStorage.getItem(ApplicationConfig.storeKey.apiUrl)
    window.location.href = '/#/start'
  }
  return (
    <div>
      {children}
    </div>
  )
}

export default InitLayout
