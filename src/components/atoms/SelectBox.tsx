import React, { FC } from "react"
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
  // const style = isError && touched ? errorStyle : isError ? untouchedErrorStyle : selectStyle

  return (
    <div css={inputFieldStyle}>
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

const inputFieldStyle = css({
  
})

const inputStyle = css({
  width: "190px",
  padding: "8px",
  borderWidth: "1px",
  borderColor: "#5e5858",
  borderRadius: "5px",
});

// const selectWrapper = css({
//   position: "relative",
//   height: "40px",

//   "&:after": {
//     position: "absolute",
//     content: "''",
//     width: 0,
//     height: 0,
//     top: "50%",
//     fontsize: "16px",
//     transform: "translateY(-50%)",
//     right: "10px",
//     borderStyle: "solid",
//     borderWidth: "10px 6px 0 6px",
//     borderColor: "#66a3ff transparent transparent transparent",
//   },
// })

// const selectStyle = css({
//   width: "100%",
//   height: "100%",
//   fontSize: "16px",
//   padding: "0 1rem",
//   border: "2px solid #e2e2e2",
//   borderRadius: "5px",
//   cursor: "pointer",
//   appearance: "none",
//   textAlign: "left",
//   outline: 0,
// })

// const optionLabel = css({
//   fontSize: "16px",
// })
// const untouchedErrorStyle = css(selectStyle, {
//   background: "#ffe5e6",
// })

// const errorStyle = css(untouchedErrorStyle, {
//   border: "1px solid #fa4b62",
//   background: "#ffe5e6",
// })

export default SelectBox
