// import { ComponentProps, forwardRef, ForwardedRef } from 'react'
// import { useFormContext, get } from 'react-hook-form'
// import { css } from '@emotion/react'
// import Label from '@/components/atoms/Label'
// import {Input} from '@/components/atoms/Input'

// type Props = ComponentProps<typeof Input> & {
//   name: string,
//   label: string,
// }

// const InputText = (
//   props: Props,
//   ref: ForwardedRef<HTMLInputElement|HTMLTextAreaElement>,
// ) => {
//   const { register, formState } = useFormContext();
//   const { touchedFields, errors } = formState
//   const inputMethods = register(props.name)
//   return(
//     <div css={inputFieldStyle}>
//       <Label name={props.name} label={props.label}/>
//       <Input
//         {...props}
//         isError={get(errors, props.name)}
//         touched={get(touchedFields, props.name)}
//         name={inputMethods.name}
//         ref={(el : any) => {
//           inputMethods.ref(el)
//           if (typeof ref === 'function') {
//             ref(el)
//             return
//           }
//           if (ref) {
//             ref.current = el
//           }
//         }}
//         onChange={(e:any) => {
//           inputMethods.onChange(e)
//           props.onChange && props.onChange(e as React.ChangeEvent<HTMLInputElement>)
//         }}
//         onBlur={(e:any) => {
//           inputMethods.onBlur(e)
//           props.onBlur && props.onBlur(e as React.FocusEvent<HTMLInputElement, Element>)
//         }}
//       />
//     </div>
//   )
// }

// const inputFieldStyle = css`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   margin-left: 10px;
//   margin-right: 100px;
//   padding: 10px;
//   width: 100%;
// `;

// export const InputTextField = forwardRef(InputText)


import { ComponentProps, forwardRef, ForwardedRef } from 'react'
import { useFormContext, get } from 'react-hook-form'
import { css } from '@emotion/react'
import Label from '@/components/atoms/Label'
import {Input} from '@/components/atoms/Input'

type Props = ComponentProps<typeof Input> & {
  name: string,
  label: string,
}

const InputText = (
  props: Props,
  ref: ForwardedRef<HTMLInputElement|HTMLTextAreaElement>,
) => {
  const { register, formState } = useFormContext();
  // const { touchedFields, errors } = formState
  const inputMethods = register(props.name)
  return(
    <div css={inputFieldStyle}>
      <Label name={props.name} label={props.label}/>
      <Input
        {...props}
        // isError={get(errors, props.name)}
        // touched={get(touchedFields, props.name)}
        name={inputMethods.name}
        ref={(el : any) => {
          inputMethods.ref(el)
          if (typeof ref === 'function') {
            ref(el)
            return
          }
          if (ref) {
            ref.current = el
          }
        }}
        onChange={(e:any) => {
          inputMethods.onChange(e)
          props.onChange && props.onChange(e as React.ChangeEvent<HTMLInputElement>)
        }}
        onBlur={(e:any) => {
          inputMethods.onBlur(e)
          props.onBlur && props.onBlur(e as React.FocusEvent<HTMLInputElement, Element>)
        }}
      />
    </div>
  )
}

const inputFieldStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 10px;
  margin-right: 100px;
  padding: 10px 10px 0px;
  width: 100%;
`;

export const InputTextField = forwardRef(InputText)
