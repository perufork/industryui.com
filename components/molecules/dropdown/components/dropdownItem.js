/**
 * Dropdown
 */

import React from 'react'

import { func, object, node } from 'prop-types'

import styled from 'styled-components'

// UI
import { Link } from '../../../'

const renderItem = ({ id, name, to }, closeDropdown, onClick) => {
  const item = () => (
    <StyledLink className='dropdown--link' id={id} onClick={onClick}>
      {name}
    </StyledLink>
  )
  return to ? (
    <Link border={false} passHref to={to}>
      {item()}
    </Link>
  ) : (
    item()
  )
}

export const DropdownItem = ({ closeDropdown, item, onClick }) => {
  return (
    <StyledDropdownItem divider={item.divider}>
      {item.divider ? <StyledDivider /> : renderItem(item, closeDropdown, onClick)}
    </StyledDropdownItem>
  )
}

const StyledDropdownItem = styled.div`
  line-height: 1.5;
  white-space: nowrap;
  ${({ divider }) => divider && 'padding: 0;'}
`

const StyledDivider = styled.div`
  border-top: 1px solid #33475b;
  height: 0;
  margin: 0.5rem;
  overflow: hidden;
`

const StyledLink = styled.span`
  color: ${({ theme }) => theme.COLOUR.primary};
  display: block;
  padding: 0.25rem 1.5rem;
  &:hover {
    background-color: #f8f9fa;
    color: inherit;
  }
`

DropdownItem.propTypes = {
  children: node,
  closeDropdown: func,
  item: object,
  onClick: func
}
