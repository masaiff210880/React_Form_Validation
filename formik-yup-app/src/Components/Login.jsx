import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from '../Components/Login.module.css'
const initialValue = {
  name: "",
  email: "",
  age: "",
  gender: "",
  password: "",
};
const handleSubmit = (values,{resetForm}) => {
  console.log(values);
  resetForm()
};
const Login = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name at least 3 charector")
      .max(10, "Name maximum charector is 10")
      .required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    age: Yup.number().required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form >
        <div>
          <label htmlFor="">Name:</label>
          <Field type={"text"} id={"name"} name={"name"} placeholder={"name"} />
          <ErrorMessage className={style.validationColor} name="name" component="div" />
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <Field
            type={"email"}
            id={"email"}
            name={"email"}
            placeholder={"email"}
          />
          <ErrorMessage className={style.validationColor} name="email" component="div" />
        </div>
        <div>
          <label htmlFor="">Age:</label>
          <Field type={"number"} id={"age"} name={"age"} placeholder={"age"} />
          <ErrorMessage className={style.validationColor} name="age" component="div" />
        </div>
        <div>
          <label htmlFor="">Gender:</label>
          <Field as="select" id="gender" name="gender">
            <option value="">Select a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
          <ErrorMessage className={style.validationColor} name="gender" component="div" />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <Field
            type={"password"}
            id={"password"}
            name={"password"}
            placeholder={"password"}
          />
          <ErrorMessage className={style.validationColor} name="password" component="div" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default Login;
