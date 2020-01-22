import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;
const AddFBForm = () => (
  <Formik
    initialValues={{ name: '', telNumb: '' }}
    onSubmit={async values => {
      await new Promise(resolve => setTimeout(resolve, 500));
      alert(JSON.stringify(values, null, 2));
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string()
        .email()
        .required('Required'),
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
      } = props;
      return (
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name" customStyles={labelStyles}>
            Name
          </Label>
          <Input
            primary={errors.name && touched.name}
            id="name"
            name="name"
            placeholder="Enter your name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.name && touched.name ? 'text-input error' : 'text-input'
            }
          />
          <Label htmlFor="phoneNumber" customStyles={labelStyles}>
            Telephone number
          </Label>
          <Input
            id="phoneNumber"
            name="telNumb"
            placeholder="Enter your telephone"
            type="text"
            value={values.telNumb}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.telephone && touched.telephone
                ? 'text-input error'
                : 'text-input'
            }
          />

          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}
          <Button
            type="button"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
            label="Reset"
          />
          <Button type="submit" disabled={isSubmitting} label="Submit" />
        </Form>
      );
    }}
  </Formik>
);
export default AddFBForm;
