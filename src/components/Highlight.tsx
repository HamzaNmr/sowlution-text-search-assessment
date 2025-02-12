import { Fragment } from "react"

const Highlight: React.FC<{ text: string; pattern: RegExp }> = ({
  text,
  pattern,
}) => {

  const parts = text.split(pattern)
  const matches = text.match(pattern) || []

  return (
    <p className="">
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part}
          {matches[index] && <mark>{matches[index]}</mark>}
        </Fragment>
      ))}
    </p>
  )
}

export default Highlight