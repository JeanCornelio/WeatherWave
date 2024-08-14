import { useState } from 'react'

export function useTab ({ tabs }) {
  const [tab, setTab] = useState(1)

  const handleTab = (tabActive) => {
    setTab(tabActive)
  }

  return {
    tab,
    handleTab,
    tabs
  }
}
