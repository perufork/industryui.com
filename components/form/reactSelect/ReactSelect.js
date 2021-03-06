/**
 * React Select
 */

// React
import React, { forwardRef } from 'react'

// Style
import styled, { css } from 'styled-components'

import { Controller } from 'react-hook-form'

// React Select
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

// Components
import { defaultStyles, reactSelectDefaultProps, reactSelectPropTypes } from './components'

export const ReactSelectField = ({
  async,
  cacheOptions,
  control,
  defaultOptions,
  defaultValue,
  error,
  errors,
  loadOptions,
  required,
  name,
  options,
  selectedOption,
  ...props
}) => {
  const Component = forwardRef((data, ref) => {
    return async ? (
      <AsyncSelect
        defaultOptions={defaultOptions}
        loadOptions={loadOptions}
        cacheOptions={cacheOptions}
        ref={ref}
        {...data}
      />
    ) : (
        <Select ref={ref} {...data} />
      )
  })

  return (
    <Wrapper error={error || errors[name]}>
      <Controller
        as={<Component options={options} selectedOption={selectedOption} {...props} />}
        control={control}
        defaultValue={defaultValue}
        name={name}
        onChange={([selected]) => {
          props.onChange && props.onChange(selected)
          return selected
        }}
        rules={{ required }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${({ error }) =>
    error &&
    css`
      [class*='control'] {
        background: rgb(251, 236, 242);
        border-color: rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144);
        border-image: initial;
        border-style: solid;
        border-width: 1px 1px 1px 10px;
      }
    `}
`

ReactSelectField.propTypes = reactSelectPropTypes
ReactSelectField.defaultProps = reactSelectDefaultProps(defaultStyles)
