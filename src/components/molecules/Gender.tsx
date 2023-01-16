import { Input } from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import { useFormContext } from 'react-hook-form'
import { css } from '@emotion/react'

const Gender = (props: any) => {
  const { register } = useFormContext();
  return (
    <div css={inputFieldStyle}>
      <Label name="gender" label="Gender" />
      <div>
        <label htmlFor="male" css={genderLabel}>Male</label>
        <Input type="radio" id="male" {...register('gender')} value="Male" {...props} css={{marginRight: "50px"}} />
        <label htmlFor="female" css={genderLabel}>Female</label>
        <Input type="radio" id="female" {...register('gender')} value="Female" {...props} /> 
      </div>
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
})

const genderLabel = css({
  marginRight: "10px",
  fontSize: "15px",
  fontWeight: 500,
  color: "#5e5858",
})

export default Gender;
