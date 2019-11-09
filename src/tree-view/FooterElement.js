import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Footer, AddButton, StyledInput } from "./Styled";
import { MdAdd, MdDone } from "react-icons/md";

export default props => {
  const { currentPath, options, setOptions, setCurrentPath } = props;
  return (
    <div style={{ padding: ".5em" }}>
      {/* TODO: ADD validation */}
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, actions) => {
          const { name } = values;
          const option = currentPath ? currentPath + "/" + name : name;
          setOptions([...options, option]);
          setCurrentPath(option);
          actions.resetForm();
        }}
      >
        {({ submitForm }) => (
          <Footer>
            <Form>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Field name="name" as={StyledInput} placeholder="new folder" />
                <ErrorMessage name="name" />
                <AddButton className="btn" onClick={submitForm}>
                  <MdAdd />
                </AddButton>
              </div>
            </Form>
          </Footer>
        )}
      </Formik>
      {/* TODO: ADD validation */}
      <Formik
        initialValues={{ name: "" }}
        onSubmit={values => {
          // props.onCreateNewFile(selected folder + '/' + values.name)
        }}
      >
        {({ submitForm }) => (
          <Footer>
            <Form className="mt-2">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Field name="name" as={StyledInput} placeholder="file name" />
                <ErrorMessage name="name" />
                <AddButton className="btn" onClick={submitForm}>
                  <MdDone />
                </AddButton>
              </div>
            </Form>
          </Footer>
        )}
      </Formik>
    </div>
  );
};
