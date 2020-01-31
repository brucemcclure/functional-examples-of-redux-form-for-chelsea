import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

const renderField = ({ input, label, type, meta: { touched, error } }) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched &&
        error &&
        <span>
          {error}
        </span>}
    </div>
  </div>

const renderHobbies = ({ fields, meta: { error } }) =>
  <ul>
    <li>
      <button type='button' onClick={() => fields.push()}>
        Add Instructions
      </button>
    </li>
    {fields.map((hobby, index) =>
      <li key={index}>
        <button
          type='button'
          title='Remove Hobby'
          onClick={() => fields.remove(index)}
        />
        <Field
          name={hobby}
          type='text'
          component={renderField}
          label={`Hobby #${index + 1}`}
        />
      </li>
    )}
    {error &&
      <li className='error'>
        {error}
      </li>}
  </ul>

const renderMembers = ({ fields, meta: { error, submitFailed } }) =>
  <ul>
    <li>
      <button type='button' onClick={() => fields.push({})}>
        Add Step
      </button>
      {submitFailed &&
        error &&
        <span>
          {error}
        </span>}
    </li>
    {fields.map((member, index) =>
      <li key={index}>
        <button
          type='button'
          title='Remove Member'
          onClick={() => fields.remove(index)}
        />
        <h4>
          Member #{index + 1}
        </h4>
        <Field
          name={`${member}.firstName`}
          type='text'
          component={renderField}
          label='Ingredients'
        />
        <Field
          name={`${member}.lastName`}
          type='text'
          component={renderField}
          label='Quantity'
        />
        <FieldArray name={`${member}.hobbies`} component={renderHobbies} />
      </li>
    )}
  </ul>

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
      <>
        <form onSubmit={handleSubmit}>
      <Field
        name='clubName'
        type='text'
        component={renderField}
        label='Recipe Title'
      />
      <FieldArray name='members' component={renderMembers} />
      <div>
        <button type='submit' disabled={submitting}>
          Submit
        </button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    

    <button type='submit' className='next' >
    Next
    </button>
    <button type='button' className='previous' onClick={props.previousPage}>
        Previous
    </button>
    </form>
</>
  )
}



export default reduxForm({
  form: 'fieldArrays' // a unique identifier for this form
})(FieldArraysForm)
