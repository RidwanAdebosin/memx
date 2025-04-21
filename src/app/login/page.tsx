"use client";
import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .min(5, "Must be at least 6 characters with symbol")
      .required("Password is required"),
  });

  const handleSubmit = (values: object) => {
    console.log(values);
  };

  return (
    <section className="w-full flex justify-center items-center bg-tone-100 min-h-screen">
      <div className="w-full md:w-[70%] lg:w-[80%] xl:w-1/2 grid justify-items-center gap-5  ">
        <h1 className="text-2xl font-bold mb-4">Sign in to your account</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-full grid gap-5 justify-items-center">
            <div className="grid lg:flex items-center lg:space-x-3 w-[90%] lg:w-[80%] ">
              <label
                htmlFor="email"
                className="hidden lg:flex font-semibold min-w-[25%]"
              >
                Your login email
              </label>
              <Field
                placeholder="Type email"
                name="email"
                type="text"
                id="email"
                className="bg-[#F2F2F2] rounded-lg py-3 px-2 w-full"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 mb-2 text-xs"
              />
            </div>

            <div className="grid lg:flex items-center lg:space-x-3 w-[90%] lg:w-[80%] ">
              <label
                htmlFor="password"
                className="hidden lg:flex font-semibold min-w-[25%]"
              >
                Your Password
              </label>
              <Field
                placeholder="Type password"
                name="password"
                type="password"
                id="password"
                className="bg-[#F2F2F2] rounded-lg py-3 px-2 w-full"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 mb-2 text-xs"
              />
            </div>
            <button className="w-[90%] lg:w-[80%] justify-center group relative inline-flex items-center overflow-hidden rounded-lg cursor-pointer bg-black border-2 border-white px-4 py-2 text-lg font-medium text-white hover:bg-[#F7F7F7] hover:text-black hover:border-black transition-all motion-safe:duration-200 hover:scale-105 active:scale-95 ">
              <span className="absolute left-0 top-1/2 block h-0 w-full bg-white opacity-100 transition-all duration-400 ease-in-out group-hover:top-0 group-hover:h-full"></span>
              <span className="relative transform duration-700 group-hover:-translate-x-1 font-medium text-base">
                Log in
              </span>
            </button>
          </Form>
        </Formik>

        <div className="flex items-center">
          <hr className="flex-grow border-[#E7E7E7]" />
          <p>OR</p>
          <hr className="flex-grow" />
        </div>
        <Link
          href="signup"
          className="w-[90%] lg:w-[80%] justify-center group relative inline-flex items-center overflow-hidden rounded-lg cursor-pointer bg-[#F2F2F2] border-2 border-white px-4 py-2 text-lg font-medium text-black hover:bg-black hover:text-white transition-all motion-safe:duration-200 hover:scale-105 active:scale-95 "
        >
          <span className="absolute left-0 top-1/2 block h-0 w-full bg-black opacity-100 transition-all duration-400 ease-in-out group-hover:top-0 group-hover:h-full"></span>
          <span className="relative transform duration-700 group-hover:-translate-x-1 font-medium text-base">
            Create a free account
          </span>
        </Link>
        <div className="flex items-center">
          <hr className="flex-grow" />
          <p>OR</p>
          <hr className="flex-grow" />
        </div>
        <button className="hover-underline">Login with Google</button>
        {/* </Form> */}
        {/* </Formik> */}
      </div>
    </section>
  );
};

export default Login;
