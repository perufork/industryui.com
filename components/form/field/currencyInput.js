/**
 * Components - Forms - Currency Input
 */

// React
import React from 'react'
import { bool, func, number, object, oneOfType, node, string } from 'prop-types'

import { FormField, FormLabel, InputGroup, InputGroupAddon } from '../../'

export const CurrencyInput = ({
  currencySymbol,
  errors,
  label,
  min,
  name,
  register,
  show,
  style,
  vat
}) => {
  return (
    <FormLabel show={show} label={label}>
      <InputGroup>
        <InputGroupAddon addonType='prepend' text>
          {currencySymbol}
        </InputGroupAddon>

        <FormField
          errors={errors}
          min={min}
          name={name}
          register={register}
          style={style}
          step='any'
          type='number'
        />

        {vat && (
          <InputGroupAddon addonType='append' text>
            Inc VAT
          </InputGroupAddon>
        )}
      </InputGroup>
    </FormLabel>
  )
}

CurrencyInput.propTypes = {
  currencySymbol: oneOfType([object, string]),
  errors: object.isRequired,
  label: string.isRequired,
  min: number,
  name: string.isRequired,
  register: func.isRequired,
  show: bool,
  style: node,
  vat: bool
}

CurrencyInput.defaultProps = {
  currencySymbol: '£',
  min: 0,
  show: true,
  vat: false
}
