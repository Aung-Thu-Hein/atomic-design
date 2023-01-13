import { FC } from "react"
import { css } from '@emotion/react'

type Props = {
  name: string
  items: any[]
  value?: string
  className?: string
  isError?: boolean
  touched?: boolean
  [x: string]: any
}

const SelectBox: FC<Props> = ({
  name,
  items,
  className,
  isError = false,
  touched = false,
  ...restProps
}) => {

  return (
    <div>
      <select name={name} defaultValue="" {...restProps} css={inputStyle}>
        {items.map((item: any, index: any) => (
          <option value={item.value} key={index}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}

const inputStyle = css({
  width: "190px",
  padding: "8px",
  borderWidth: "1px",
  borderColor: "#5e5858",
  borderRadius: "5px",
});

export default SelectBox
