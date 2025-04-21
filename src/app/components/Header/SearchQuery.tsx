"use client";
import { debounce } from "lodash";
import { Search } from "lucide-react";
import { Field, Form, Formik } from "formik";
import { useCallback, useMemo } from "react";

export const SearchQuery = () => {
  const initialValues = useMemo(() => ({ search: "" }), []);

  const handleSearchQuery = useCallback(
    debounce((values, { resetForm }) => {
      const searchTerm = values.search.trim().toLowerCase();
      resetForm();
    }, 300),
    []
  );

  return (
    <div className="flex w-[60%] lg:w-1/3">
      <Formik initialValues={initialValues} onSubmit={handleSearchQuery}>
        <Form className="w-full">
          <label htmlFor="search" className="sr-only">
            Search for products
          </label>
          <div className="relative flex items-center">
            <Field
              type="text"
              id="search"
              name="search"
              placeholder="Search meme video"
              className="rounded-md bg-[#f2f2f2] dark:text-black px-2 py-[10px] border text-sm w-full focus:ring-2 focus:ring-[#FFDE11] focus:border-transparent transition-all hover:border-white motion-safe:duration-200"
              aria-describedby="search-button"
            />
            <button
              type="submit"
              id="search-button"
              aria-label="Submit search"
              className="absolute right-1 flex items-center py-2 px-2 bg-white rounded-[10px] border-[#737376] hover:bg-[#FFD700] active:bg-white focus:ring-2 focus:ring-[#FFDE11] transition-all motion-safe:duration-200 hover:scale-105 active:scale-95 dark:bg-black"
            >
              <Search size={12} aria-hidden="true" />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
