export const Condition = ({ condition, showTextCondition }) => {
  const { code, text } = condition

  return (
    <div className="self-center flex flex-col items-center gap-3">
      <Animation code={code} />

      {showTextCondition && (
        <p className="text-center font-semibold text-sky-blue-700 dark:text-white ">
          {text}
        </p>
      )}
    </div>
  )
}

export const Animation = ({ code }) => {
  switch (code) {
    case 1000:
      return <div className="sunny"></div>

    case 1003:
      return <div className="cloudy"></div>
    case 1009:
      return (
        <div className="rainy    relative ">
          <div className="rainy__cloud absolute left-5"></div>
          <div className="rainy__cloud absolute -left-5"></div>
        </div>
      )

    case 1030:
      return <div className="cloudy"></div>
    case 1135:
      return (
        <div className="rainy    relative ">
          <div className="cloudy absolute left-5"></div>
          <div className="cloudy absolute -left-5"></div>
        </div>
      )
    case 1150:
      return (
        <div className="rainy">
          <div className="rainy__cloud"></div>
          <div className="rainy__rain"></div>
        </div>
      )
    case 1063:
      return (
        <div className="rainy">
          <div className="rainy__cloud"></div>
        </div>
      )
    case 1180:
      return (
        <div className="rainy">
          <div className="rainy__cloud"></div>
          <div className="rainy__rain"></div>
        </div>
      )
    case 1183:
      return (
        <div className="rainy">
          <div className="rainy__cloud"></div>
          <div className="rainy__rain"></div>
        </div>
      )

    case 1189:
      return (
        <div className="rainy">
          <div className="rainy__cloud"></div>
          <div className="rainy__rain"></div>
        </div>
      )
    case 1195:
      return (
        <div className="rainy">
          <div className="thundery__cloud"></div>
          <div className="rainy__rain"></div>
        </div>
      )
    case 1240:
      return (
        <div className="rainy">
          <div className="rainy__cloud"></div>
          <div className="rainy__rain"></div>
        </div>
      )
    case 1243:
      return (
        <div className="rainy">
          <div className="rainy__cloud"></div>
          <div className="rainy__rain"></div>
        </div>
      )
    case 1276:
      return (
        <div className="rainy">
          <div className="thundery__cloud"></div>
          <div className="rainy__rain"></div>
        </div>
      )
    default:
      return <p>{code}</p>
  }
}
