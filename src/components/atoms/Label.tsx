
import { FC } from 'react'
import { css } from '@emotion/react'

type Props = {
  name: string
  label: string
}

const Label : FC<Props> = ({name, label}) => {
  return(
    <label css={lableStyle} htmlFor={name}>{label}</label>
  )
}

const lableStyle = css({
  width: "200px",
  textAlign: "left",
  fontSize: "17px",
  fontWeight: 500,
  color: "#5e5858",
})

export default Label;
