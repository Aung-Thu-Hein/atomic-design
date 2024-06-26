import { ComponentProps, forwardRef, ForwardedRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { css } from '@emotion/react'
import Label from '@/components/atoms/Label'
import { Input } from '@/components/atoms/Input'

type Props = ComponentProps<typeof Input> & {
  name: string,
  label: string,
}

const InputText = (
  props: Props,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
) => {
  const { register, formState } = useFormContext();
  const inputMethods = register(props.name)
  return (
    <div css={inputFieldStyle}>
      <Label name={props.name} label={props.label} />
      <Input
        {...props}
        name={inputMethods.name}
        ref={(el: any) => {
          inputMethods.ref(el)
          if (typeof ref === 'function') {
            ref(el)
            return
          }
          if (ref) {
            ref.current = el
          }
        }}
        onChange={(e: any) => {
          inputMethods.onChange(e)
          props.onChange && props.onChange(e as React.ChangeEvent<HTMLInputElement>)
        }}
        onBlur={(e: any) => {
          inputMethods.onBlur(e)
          props.onBlur && props.onBlur(e as React.FocusEvent<HTMLInputElement, Element>)
        }}
      />
    </div>
  )
}

const inputFieldStyle = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  paddingTop: "10px",
  paddingLeft: "20px",
  width: "100%",
});

export const InputTextField = forwardRef(InputText)
