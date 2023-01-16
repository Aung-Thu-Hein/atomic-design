//react, useForm, react-router and yup
import { useForm, FormProvider, } from "react-hook-form"
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

//emotion
import { css } from '@emotion/react';

//molecules
import { InputTextField } from '@/components/molecules/InputTextField';
// import Btn from '@/components/molecules/Btn';
import Button from '@/components/atoms/Button';
import Gender from '@/components/molecules/Gender';
import { UserRole } from '@/components/molecules/UserRole';

type FormValues = {
  userId: string;
  userName: string;
  gender: string;
  email: string;
  address: string;
  birthday: Date;
  age: string | number;
  userRole: string;
}

const schema = Yup.object().shape({
  userName: Yup
    .string()
    .required("User name is required"),
  gender: Yup
    .string()
    .required("Gender is required")
    .nullable(),
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
  userRole: Yup
    .string()
    .required("User role is required"),
})

const UserInfoForm = () => {
  const methods = useForm<FormValues>({ resolver: yupResolver(schema), });
  const { register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    watch,
    formState: { errors } } = methods

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const navigate = useNavigate();
  const bd = watch('birthday');

  const onSubmit = () => setIsDisabled(true);

  const handleRegister = () => {
    const formData: FormValues = getValues();

    let data: any[] = [];
    let newData: any[] = [];

    const dataString = localStorage.getItem('Form Data');
    if (dataString) {
      data = JSON.parse(dataString)
      newData = [...data, formData]
      localStorage.setItem("Form Data", JSON.stringify(newData));
    } else {
      localStorage.setItem("Form Data", JSON.stringify([formData]));
    }
    navigate('/usertable')
  }

  const calculateAge = () => {

    var today = new Date();
    var birthDate = new Date(bd);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    let age = age_now ? age_now : "";
    setValue('age', age);
  }

  useEffect(() => {
    calculateAge();
  }, [bd]);

  useEffect(() => {
    let data: any[] = [];
    const dataString: string | null = localStorage.getItem('Form Data');
    if (dataString) {
      data = JSON.parse(dataString);
      setValue('userId', 'ID-' + `${(data.length + 1).toString().padStart(4, '0')}`)
    } else setValue('userId', 'ID-0001')
  }, []);

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
          <p></p>
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
          <div css={[inputWrapper, { marginRight: "150px" }]}>
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
          </div>
        </div>
        <div css={inputWrapper}>
          <UserRole label="User Role" {...register("userRole")} disabled={isDisabled} />
          <p css={errorStyle}>{errors.userRole?.message}</p>
        </div>
        <div css={buttonWrapper}>
          {
            isDisabled ?
              <Button
                type="button"
                name="Back"
                handleClick={() => setIsDisabled(false)}
              />
              :
              <Button
                type="button"
                name="Clear"
                handleClick={() => reset()}
              />
          }
          {
            isDisabled ?
              <Button
                type="button"
                name="Register"
                handleClick={handleRegister}
              />
              :
              <Button
                type="submit"
                name="Confirm"
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

});

const birthdayWrapper = css({
  display: "flex",
  flexDirection: "row",
});

const buttonWrapper = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
})

export default UserInfoForm;
