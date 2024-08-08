import { useEffect, useState } from 'react'
import { autoCompleteSearch } from '../services/autoComplete'
export function useSearch () {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const handleSubmit = (e) => {
    setSearch(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }
  // Ojo VAlidar por que no funciona
  const clearSearch = () => {}

  useEffect(() => {
    const getData = setTimeout(() => {
      getResults()
    }, 300)

    return () => clearTimeout(getData)
  }, [search])

  const getResults = async () => {
    const newAutoComplete = await autoCompleteSearch({ search })
    setResults(newAutoComplete)
  }

  return {
    handleSubmit,
    onSubmit,
    clearSearch,
    results
  }
}
