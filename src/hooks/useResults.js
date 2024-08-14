import { useEffect, useState } from 'react'

export function useResult ({ form }) {
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    document.addEventListener('mousedown', closeOpenMenus)

    return () => {
      document.removeEventListener('mousedown', closeOpenMenus)
    }
  }, [showResults])

  const closeOpenMenus = (e) => {
    if (showResults && !form.current?.contains(e.target)) {
      setShowResults(false)
    }
  }

  const handleShowResult = (value) => {
    setShowResults(value)
  }

  return {
    closeOpenMenus,
    handleShowResult,
    showResults
  }
}
