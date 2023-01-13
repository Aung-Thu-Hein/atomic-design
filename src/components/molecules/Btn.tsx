import Button from '@/components/atoms/Button'
import { FC, ComponentProps } from 'react'

type Props = ComponentProps<typeof Button>

const Btn : FC<Props> = (props: Props,) => {
  return(
    <Button type={props.type} name={props.name} handleClick={props.handleClick}/>
  )
}

export default Btn;
