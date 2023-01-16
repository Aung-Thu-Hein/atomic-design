import { FC } from 'react';
import { css } from '@emotion/react';

type Props = {
  type?: "button" | "submit"
  handleClick?: any
  name: string
}

const Button: FC<Props> = ({ type, handleClick, name,}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      css={buttonStyle}
    >
      {name}
    </button>
  )
}

const buttonStyle = css({
  padding: "12px",
  backgroundColor: "#1a628f",
  borderWidth: "1px",
  borderRadius: "4px",
  fontSize: "17px",
  fontWeight: 500,
  color: "#000000",
})

export default Button;
