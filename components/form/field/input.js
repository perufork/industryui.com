/**
 * Form - Field
 */

// React
import { arrayOf, bool, number, oneOfType, string, object } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

export const FormField = ({
  disabled,
  errors,
  name,
  placeholder,
  readOnly,
  register,
  validate,
  ...props
}) => {
  return (
    <StyledInput
      aria-label={name}
      disabled={disabled}
      errors={errors[name]}
      key={name}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      ref={register({
        pattern: props.regExp ? new RegExp(props.regExp) : null,
        validate: validate,
        ...(props.max ? { max: props.max } : null),
        ...(props.min ? { min: props.min } : null),
        ...(props.maxLength ? { maxLength: props.maxLength } : null),
        ...(props.minLength ? { minLength: props.minLength } : null)
      })}
      {...props}
    />
  )
}

export const StyledInput = styled.input.attrs(props => ({
  autoComplete: 'off',
  autoFocus: false
}))`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.COLOUR.dark};
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.COLOUR.dark};
  display: block;
  height: 3rem;
  padding: 0.5rem 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: 0;
  }

  ::-webkit-input-placeholder {
    color: #c0c0c0;
  }

  :-ms-input-placeholder {
    color: #c0c0c0;
  }

  :-moz-placeholder {
    color: #c0c0c0;
    opacity: 1;
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.COLOUR.light};
      cursor: not-allowed;
    `}


    ${({ readOnly, theme }) =>
      readOnly &&
      css`
        background-color: transparent;
        border: solid transparent;
        border-width: 1px 0;
        padding: 0.5rem 0;

        &:focus {
          box-shadow: none;
          outline: 0;
        }
      `}

    /* display: block;
    width: 100%;
    padding-top: .375rem;
    padding-bottom: .375rem;
     */

  ${({ errors, error }) =>
    (errors || error) &&
    css`
      background: rgb(251, 236, 242);
      border-color: rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144);
      border-image: initial;
      border-style: solid;
      border-width: 1px 1px 1px 5px;
    `}
`

FormField.propTypes = {
  accept: string,
  autoComplete: oneOfType([bool, string]),
  autoFocus: bool,
  disabled: bool,
  label: string,
  name: string.isRequired,
  placeholder: string,
  readOnly: bool,
  style: object,
  type: string,
  value: oneOfType([string, number, bool, arrayOf(oneOfType([string, number, bool]))])
}

FormField.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  errors: {},
  readOnly: false,
  type: 'text'
}
