import Label from '@/components/atoms/Label';
import { css } from '@emotion/react';
import { ComponentProps, forwardRef, ForwardedRef } from 'react'
import { useFormContext } from 'react-hook-form'

type Props = ComponentProps<typeof Label> & {
  disabled: boolean
}

const UserRoleBox = (
  props: Props,
  ref: ForwardedRef<HTMLSelectElement>
) => {
  const { register } = useFormContext();

  return (
    <div css={inputFieldStyle}>
      <Label name={props.name} label={props.label} />
      <select
        css={baseInputStyle}
        {...register(props.name)}
        disabled={props.disabled}
      >
        <option></option>
        <option value="Administrator">Administrator</option>
        <option value="User">User</option>
        <option value="Guest">Guest</option>
      </select>
    </div>
  )
}

const inputFieldStyle = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  marginTop: "10px",
  paddingLeft: "20px",
  width: "100%",
})

const baseInputStyle = css({
  width: "190px",
  padding: "8px",
  borderWidth: "1px",
  borderColor: "#5e5858",
  borderRadius: "5px",
});

export const UserRole = forwardRef(UserRoleBox);
