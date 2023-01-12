import Label from '@/components/atoms/Label';
import {css} from '@emotion/react';

import {ComponentProps, FC} from 'react'

// type Props = ComponentProps<typeof Label> & {
//   value: string
// }

const UserRole : FC = () => {
  return(
    <div>
      <Label name="userRole" label="User Role"/>
      <select name="userRole" css={baseInputStyle}>
        <option value="Administrator">Administrator</option>
        <option value="User">User</option>
        <option value="Guest">Guest</option>
      </select>
    </div>
  )
}

const baseInputStyle = css({
  padding: "8px",
  borderWidth: "1px",
  borderColor: "#5e5858",
  borderRadius: "5px",
});

export default UserRole;
