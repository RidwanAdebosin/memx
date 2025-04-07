import * as Yup from "yup"
import { Field, Formik } from "formik";
import Image from "next/image";

export const Header = () => {
  const initialValues = {
    search: ""
  };

  const validationSchema = Yup.object().shape({
    search: Yup.string()
  })

  const handleSearchQuery = (values:string {onReset}) => {
    console.log(values)
    onReset()
  }
  return (
    <header>
      <div>
        {/* <Image /> */}
        <Formik initialValues={initialValues} onSubmit={handleSearchQuery} onReset={""} validationSchema={validationSchema}>
            <Field name="search" placeholder="Search for meme"/>
        </Formik>
        <div></div>
      </div>
    </header>
  );
};
