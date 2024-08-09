import DateObject from 'react-date-object'

export const dateTransform = ({ date, format }) => {
  const initialDate = new DateObject(date)
  const formatDate = initialDate.format(format)

  return formatDate
}
