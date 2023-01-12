// import { FC } from 'react';
// import { css } from '@emotion/react';

// type Props = {
//   id: string,
//   type: string,
//   name: string,
//   isDisabled: boolean,
// }

// const Input : FC<Props> = ({id, type, name, isDisabled, ...inputProps}) => {
//   return(
//     <input 
//       id={id}
//       type={type}
//       disabled={isDisabled}
//       {...inputProps}
//     />
//   )
// }

// const inputStyle = css({
//   padding: "8px",
//   borderWidth: "1px",
//   borderColor: "#5e5858",
//   borederRadius: "5px",
// });

// export default Input;


import React, { FC } from 'react';
import { css } from '@emotion/react';

type Props = JSX.IntrinsicElements['input'] &
  JSX.IntrinsicElements['textarea'] & {
  isError?: boolean
  touched?: boolean
  type: string
  placeholder?: string
}

const InnerTextField = (
  props: Props,
  ref: React.ForwardedRef<HTMLInputElement|HTMLTextAreaElement>,
) => {
  const { isError, touched, type, placeholder, ...inputProps } = props
  let inputStyle = baseInputStyle

  if (isError) {
    inputStyle = touched ? css(baseInputStyle, errorStyle) : css(baseInputStyle, untouchedAndErrorStyle)
  }

  return (
    type === "textarea" ?
    <textarea
      css={inputStyle}
      placeholder={placeholder}
      {...inputProps}
      ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
    />
    :
    <input
      css={inputStyle}
      type={type}
      placeholder={placeholder}
      {...inputProps}
      ref={ref as React.ForwardedRef<HTMLInputElement>}
    />
  )
}

const baseInputStyle = css({
  padding: "8px",
  borderWidth: "1px",
  borderColor: "#5e5858",
  borderRadius: "5px",
});

const errorStyle = css({
  fontSize: "10px",
  color: "#e02b02",
})

const untouchedAndErrorStyle = css({
  fontSize: "10px",
  color: "#e02b02",
})

export const Input = React.forwardRef(InnerTextField)
