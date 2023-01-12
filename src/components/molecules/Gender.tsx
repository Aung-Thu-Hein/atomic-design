import { Input } from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import { useFormContext} from 'react-hook-form'
import { css } from '@emotion/react'

const Gender = (props : any) => {
  const { register } = useFormContext();
  return (
    <div css={inputFieldStyle}>
      <Label name="gender" label="Gender" />
      <div css={{marginRight: 50}}>
        <Label name="male" label="Male" />
        <Input type="radio" id="male" {...register('gender')} value="Male" {...props}/>
      </div>
      <div>
        <Label name="female" label="Female" />
        <Input type="radio" id="female" {...register('gender')} value="Female" {...props}/>
      </div>
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


export default Gender;
