/**
 * Stepper Timings
 */

// React
import { object, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const StepperTimings = ({ className, timings }) => {
  return (
    <StyledStepperTimings>
      <ul>
        <li>
          <StyledLabel>Start time: </StyledLabel>
          <StyledValue>{timings.start}</StyledValue>
        </li>
        <li>
          <StyledLabel>Scheduled end time: </StyledLabel>
          <StyledValue>{timings.scheduled}</StyledValue>
        </li>
        <li>
          <StyledLabel>Actual end time: </StyledLabel>
          <StyledValue success>{timings.actual}</StyledValue>
        </li>
      </ul>
    </StyledStepperTimings>
  )
}

const StyledStepperTimings = styled.div`
  display: inline-block;

  > ul {
    list-style: none;
    margin: 10px 0 20px 20px;
    padding: 0;
  }
`

const StyledLabel = styled.span`
  font-size: 0.85rem;
  color: #999;
`

const StyledValue = styled.span`
  font-size: 0.85rem;
  color: ${({ success }) => (success ? '#00b606' : '#000')};
`

StepperTimings.propTypes = {
  className: string,
  timings: object.isRequired
}
