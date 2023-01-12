/** @jsxImportSource @emotion/react */;
import { css } from '@emotion/react';

//molecules
import { InputTextField } from '../molecules/InputTextField';
//import ConfirmBtn from '../molecules/ConfirmBtn';

import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider, } from "react-hook-form"
import { useState } from 'react';
import Btn from '../molecules/Btn';
import Gender from '../molecules/Gender';
import { UserRole } from '../molecules/UserRole';

type FormValues = {
  userId: string;
  userName: string;
  gender: string;
  email: string;
  address: string;
  birthday: Date;
  age: number;
  userRole: string;
}

const schema = Yup.object().shape({
  userName: Yup
    .string()
    .required("User name is required"),
  gender: Yup
    .string()
    .required("gender is required"),
  email: Yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  address: Yup
    .string()
    .required("Address is required"),
  birthday: Yup
    .string()
    .required("Birthday is required"),
  age: Yup
    .string()
    .required("Age is required"),
  userRole: Yup
    .string()
    .required("User role is required"),
});



// type SubmitHandler<TFieldValues extends FieldValues> = (
//   data: TFieldValues, event?: React.BaseSyntheticEvent
// ) => any | Promise<any>

// type Props = ComponentProps<typeof InputTextField> & ComponentProps<typeof ConfirmBtn>

// type Props = ComponentProps<typeof UserRole> 

const UserInfoForm = () => {
  const methods = useForm<FormValues>({ resolver: yupResolver(schema), });
  const { register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors } } = methods

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const onSubmit = () => setIsDisabled(true);

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div css={inputWrapper}>
          <InputTextField
            label="User ID"
            name="userId"
            type="text"
            disabled={isDisabled}
          />
        </div>
        <div css={inputWrapper}>
          <InputTextField
            label="User Name"
            name="userName"
            type="text"
            disabled={isDisabled}
          />
          <p css={errorStyle}>{errors.userName?.message}</p>
        </div>
        <div css={inputWrapper}>
          <Gender disabled={isDisabled} />
          <p css={errorStyle}>{errors.gender?.message}</p>
        </div>
        <div css={inputWrapper}>
          <InputTextField
            label="Email"
            name="email"
            type="email"
            disabled={isDisabled}
          />
          <p css={errorStyle}>{errors.email?.message}</p>
        </div>
        <div css={inputWrapper}>
          <InputTextField
            label="Address"
            name="address"
            type="textarea"
            disabled={isDisabled}
          />
          <p css={errorStyle}>{errors.address?.message}</p>
        </div>
        <div css={birthdayWrapper}>
          <div css={inputWrapper}>
            <InputTextField
              label="Birthday"
              name="birthday"
              type="date"
              disabled={isDisabled}
            />
            <p css={errorStyle}>{errors.birthday?.message}</p>
          </div>
          <div css={inputWrapper}>
            <InputTextField css={{ flexWrap: "nowrap" }}
              label="Age"
              name="age"
              type="text"
              disabled={isDisabled}
            />
            <p css={errorStyle}>{errors.age?.message}</p></div>
        </div>
        <div css={inputWrapper}>
          <UserRole label="User Role" {...register("userRole")} disabled={isDisabled} />
          <p css={errorStyle}>{errors.userRole?.message}</p>
        </div>
        <div css={buttonWrapper}>
          {
            isDisabled ?
              <Btn
                type="button"
                name="Back"
                handleClick={() => setIsDisabled(false)}
              />
              :
              <Btn
                type="button"
                name="Clear"
                handleClick={() => console.log("clicked!!")}
              />
          }
          {
            isDisabled ?
            <Btn
              type="button"
              name="Register"
              handleClick={() => reset()}
            />
            :
            <Btn
              type="submit"
              name="Confirm"
              handleClick={() => console.log("clicked!!")}
            />
          }
        </div>

    </form>
    </FormProvider >
  )
}

const errorStyle = css({
  fontSize: "13px",
  color: "red",
  marginLeft: "220px",
})

const inputWrapper = css({
  display: "flex",
  flexDirection: "column",
  paddingBottom: "20px",
});

const birthdayWrapper = css({
  display: "flex",
  flexDirection: "row",
  paddingBottom: "20px",
});

const buttonWrapper = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
})

export default UserInfoForm;
