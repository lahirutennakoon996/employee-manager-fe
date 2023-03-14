import {ErrorMessage, Field} from "formik";
import cx from "classnames";

import styles from "./InputField.module.css";

export default function InputField({labelName, identifier, isDropdown, dropdownOptions}) {
  return (
    <div className="row my-3 mx-5">
      <label htmlFor={identifier} className="col-4 col-form-label text-end">{labelName}</label>
      <div className="col-4">
        {isDropdown ? (
            <Field id={identifier} name={identifier} as="select" className="form-select">
              {dropdownOptions.map((dropdownOption) => (
                <option key={dropdownOption} value={dropdownOption}>{dropdownOption}</option>
              ))}
            </Field>
        ) : (
          <Field id={identifier} name={identifier}>
            {({
                field,
                meta: { touched, error }
              }) => (
              <input id={identifier}
                     className={ touched && error ? cx("form-control", styles.errorBorder) : "form-control" } { ...field } />
            )}
          </Field>
        )}
        <div className={styles.errorMsg}>
          <ErrorMessage name={identifier} />
        </div>
      </div>
    </div>
  )
}