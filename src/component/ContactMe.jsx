import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ContactMe = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Handle your form submission logic here
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div id="contact" className="h-screen pt-20 px-28 max-md:px-7">
      <section className="flex justify-between gap-10 items-center flex-row-reverse max-md:flex-col-reverse">
        <div className="w-1/2 text-right max-md:hidden">
          <img src="/contactme.svg" className="w-7/12 h-full mx-auto" alt="Contact" />
        </div>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="rounded-lg text-black space-y-5 py-10 px-5 w-2/5 max-md:w-full">
              <h1 className="text-3xl text-start text-white mb-3 font-bold">
                Get in touch
              </h1>

              <div>
                <label className="text-white font-semibold text-xs">Your Name</label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 outline-none rounded-lg bg-transparent border-2 border-neutral-700 text-white px-4 mb-2 mt-1 hover:border-neutral-50"
                />
                {errors.name && touched.name ? (
                  <div className="text-red-500 text-xs mt-1">{errors.name}</div>
                ) : null}
              </div>

              <div>
                <label className="text-white font-semibold text-xs"><span className="mr-1">Your Email </span>
                   <span>  {errors.email && touched.email ? (
                  <span className="text-red-500 text-xs mt-1"> ({errors.email})</span>
                ) : null}</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className={`w-full p-2 outline-none rounded-lg bg-transparent border-2 border-neutral-700 text-white px-4 mb-2 mt-1 hover:border-neutral-50 ${errors.email && touched.email ? "border-red-500" : ""}`}
                />
              
              </div>

              <div>
                <label className="text-white font-semibold text-xs">Your Message</label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-2 outline-none rounded-lg bg-transparent border-2 border-neutral-700 text-white px-4 mt-1 hover:border-neutral-50"
                  style={{ maxWidth: "100%", resize: "none", height: "150px" }}
                />
                {errors.message && touched.message ? (
                  <div className="text-red-500 text-xs mt-1">{errors.message}</div>
                ) : null}
              </div>

              <div className="text-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-black font-semibold text-sm px-8 py-2 rounded-lg hover:scale-110 active:scale-95 transition-all bg-white disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSubmitting ? "Sending..." : "SEND"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
};

export default ContactMe;