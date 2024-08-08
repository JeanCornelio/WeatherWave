import { useState } from 'react'

const tabs = [
  {
    name: 'Today',
    id: 1,
    active: true
  },
  {
    name: 'Weekly',
    id: 2,
    active: false
  }
]

export function useTab () {
  const [tab, setTab] = useState(1)

  const handleTab = (tabActive) => {
    setTab(tabActive)
  }

  return {
    tab, handleTab, tabs
  }
}
