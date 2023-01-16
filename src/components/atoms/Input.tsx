import React from 'react';
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
  ref: React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
) => {

  const { placeholder, type, ...inputProps } = props

  return (
    type === "textarea" ?
      <textarea
        css={baseInputStyle}
        {...inputProps}
        ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
      />
      :
      <input
        css={baseInputStyle}
        type={type}
        {...inputProps}
        ref={ref as React.ForwardedRef<HTMLInputElement>}
      />
  )
}

const baseInputStyle = css({
  padding: "5px",
  borderWidth: "1px",
  borderColor: "#5e5858",
  borderRadius: "5px",
});

export const Input = React.forwardRef(InnerTextField)
