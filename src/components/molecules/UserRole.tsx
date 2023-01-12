import Label from '@/components/atoms/Label';
import {css} from '@emotion/react';

import { ComponentProps, forwardRef, ForwardedRef } from 'react'
import { useFormContext} from 'react-hook-form'

type Props = ComponentProps<typeof Label> & {
  disabled : boolean
}

const UserRoleBox = (
  props: Props,
  ref: ForwardedRef<HTMLSelectElement>
) => {
  const { register } = useFormContext();

  return(
    <div css={inputFieldStyle}>
      <Label name={props.name} label={props.label}/>
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

const inputFieldStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 10px;
  padding: 10px;
  width: 100%;
`;

const baseInputStyle = css({
  width: "190px",
  padding: "8px",
  borderWidth: "1px",
  borderColor: "#5e5858",
  borderRadius: "5px",
});

export const UserRole = forwardRef(UserRoleBox);


// import { css } from '@emotion/react'
// import SelectBox from "@/components/atoms/SelectBox"
// import Label from "@/components/atoms/Label"

// const UserRole = ({ name,...restProps }: any) => {

//   return (
//     <div css={inputFieldStyle}>
//       <Label name='userRole' label="User Role" />
//       <SelectBox
//         name={name}
//         items={["Administrator", "User", "Guest"]}
//         {...restProps}
//       />
//     </div >
//   )
// }

// const inputFieldStyle = css({
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "flex start",
//   marginLeft: "10px",
//   marginRight: "100px",
//   padding: "10px",
//   width: "100%",
// })

// export default UserRole;
