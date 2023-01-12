
import { FC } from 'react';
import { css } from '@emotion/react';

type Props = {
  type?: "button" | "submit"
  handleClick: any
  name: string
}

const Button : FC<Props> = ({type, handleClick, name}) => {
  return(
    <button 
      type={type} 
      onClick={handleClick}
      css={buttonStyle}
    >
      {name}
    </button>
  )
}

const buttonStyle = css`
  padding: 10px 15px;
  background-color: #1a628f;
  border-width: 1px;
  border-radius: 4px;
  font-size: 17px;
  font-weight: 500;
  color: #000000;
`;

export default Button;
