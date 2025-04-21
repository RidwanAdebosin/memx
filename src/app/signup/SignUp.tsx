"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";

export const SignUp = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  import * as Yup from "yup";

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(6, "Name must be at least 6 characters"),

    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-])[A-Za-z\d@$!%*#?&^_-]{6,}$/,
        "Password must include at least one letter, one number, and one special character"
      ),
  });

  export default validationSchema;

  const handleSubmit = (values: object) => {
    console.log(values);
  };

  return (
    <section className="w-full flex justify-center items-center bg-tone-100 min-h-screen">
      <div className="w-full md:w-[70%] lg:w-[80%] xl:w-1/2 grid justify-items-center gap-5">
        <h1 className="text-2xl font-bold mb-4">Create a free account</h1>
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
                htmlFor="name"
                className="hidden lg:flex font-semibold min-w-[25%]"
              >
                Profile Name
              </label>
              <Field
                placeholder="Type Name"
                name="name"
                type="name"
                id="name"
                className="bg-[#F2F2F2] rounded-lg py-3 px-2 w-full"
              />
              <ErrorMessage
                name="name"
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
                Sign in
              </span>
            </button>
            <div className="flex items-center">
              <p>
                Already have an account? <Link href="login">Log in here</Link>
              </p>
            </div>

            <div className="flex items-center">
              <hr className="flex-grow" />
              <p>OR</p>
              <hr className="flex-grow" />
            </div>
            <button className="hover-underline">Sign in with Google</button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};
