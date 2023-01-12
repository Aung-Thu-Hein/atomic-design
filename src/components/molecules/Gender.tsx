import { Input } from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';

import {FC} from 'react'
// import { useFormContext, get } from 'react-hook-form'
// import { css } from '@emotion/react'

const Gender : FC = () => {
  return(
    <div>
      <Label name="gender" label="Gender"/>
      
      <Label name="male" label="Male"/>
      <Input type="radio" id="male" name="gender" value="Male"/>

      <Label name="female" label="Female"/>
      <Input type="radio" id="female" name="gender" value="Female"/>

    </div>
  )
}

export default Gender;
