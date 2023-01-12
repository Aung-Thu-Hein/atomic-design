/** @jsxImportSource @emotion/react */;
import { css } from '@emotion/react';

//molecules
import { InputTextField } from '../molecules/InputTextField';
//import ConfirmBtn from '../molecules/ConfirmBtn';

import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider, } from "react-hook-form"
import React, { FC, ComponentProps } from 'react';
import Btn from '../molecules/Btn';
import Gender from '../molecules/Gender';
import UserRole from '../molecules/UserRole';
// import { FieldValue, FieldValues } from 'react-hook-form/dist/types';

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
  userRole: Yup
    .string()
    .required("User role is required"),
});

// type FormValues = {
//   userId: string;
//   userName: string;
//   gender: string;
//   email: string;
//   address: string;
//   birthday: Date;
//   age: number;
//   userRole: string;
// }

// type SubmitHandler<TFieldValues extends FieldValues> = (
//   data: TFieldValues, event?: React.BaseSyntheticEvent
// ) => any | Promise<any>

// type Props = ComponentProps<typeof InputTextField> & ComponentProps<typeof ConfirmBtn>


const UserInfoForm = () => {
  // { resolver: yupResolver(schema), }
  const methods = useForm();
  const { register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors } } = methods

  const onSubmitss = (data: any) => console.log("FormData:: ", data);

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(onSubmitss)}>
        <InputTextField
          label="User ID"
          name="userId"
          type="text"
        />
        <InputTextField
          label="User Name"
          name="userName"
          type="text"
        />
        <Gender/>
        <InputTextField
          label="Email"
          name="email"
          type="email"
        />
        <InputTextField
          label="Address"
          name="address"
          type="textarea"
        />
        <InputTextField
          label="Birthday"
          name="birthday"
          type="date"
        />
        <UserRole />
        <Btn
          type="submit"
          name="Confirm"
          handleClick={() => console.log("clicked!!")} 
        />
      </form>
    </FormProvider>
  )
}

export default UserInfoForm;
