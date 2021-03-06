/**
 * Country
 */

// React
import { func, string } from 'prop-types'

// UI
import { Select } from './'

// Data
import { COUNTRY } from '../../../constants'

export const SelectCountry = ({ change, id, label, value }) => {
  return <Select change={change} id={id} label={label} options={COUNTRY} value={value} />
}

SelectCountry.propTypes = {
  change: func.isRequired,
  id: string,
  label: string,
  value: string
}
