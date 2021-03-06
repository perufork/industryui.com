/**
 * Messaging/MessageBase
 */

// React
import React, { useEffect, useRef, useState } from 'react'
import { string, bool } from 'prop-types'

// UI
import { Card, Column, Icon, Image, Row, Truncate } from '../../../../'
import { MessageIcon } from './icon'
import { MessageTo } from './to'

// Style
import styled from 'styled-components'

export const MessageBase = ({
  content,
  from,
  icon,
  more,
  pictureId,
  prevType,
  reply,
  scrollToMessage,
  statusText,
  time,
  to,
  type
}) => {
  const [seeMore, setSeeMore] = useState(false)
  const messageRef = useRef(null)

  useEffect(() => {
    if (scrollToMessage) messageRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [])

  return (
    <Column sm={11} columnRef={messageRef}>
      <StyledCard type={type}>
        <Row>
          <Column sm={6}>
            <MessageIcon icon={icon} />
            <MessageTo to={to} />
            <StyledTime>{time}</StyledTime>
          </Column>

          <Column sm={6}>
            <StyledFrom>{from}</StyledFrom>
          </Column>
        </Row>

        <Row>
          {pictureId && (
            <Column sm={2}>
              <Image alt='Image' src={pictureId} />
            </Column>
          )}

          <Column sm={pictureId ? 8 : !type ? 11 : 12}>
            <StyledReply>{reply}</StyledReply>
            <StyledContent seeMore={seeMore}>
              {content.split('\n').map((item, key) => {
                return (
                  <span key={key}>
                    {item}
                    <br />
                  </span>
                )
              })}
            </StyledContent>

            {more && (
              <StyledCollapse onClick={() => setSeeMore(!seeMore)}>
                {!seeMore ? (
                  <>
                    <span>See more</span>
                    <Icon icon='chevron-down' />
                  </>
                ) : (
                  <>
                    <span>Close</span>
                    <Icon icon='chevron-up' />
                  </>
                )}
              </StyledCollapse>
            )}
          </Column>

          {!type && (
            <Column sm={1}>
              <Icon color={statusText === 'Delivered' ? 'green' : '#bbb'} icon='check-circle' />
            </Column>
          )}
        </Row>
      </StyledCard>
    </Column>
  )
}

const StyledCard = styled(Card)`
  background-color: ${({ type }) => (type === 'in' ? '#fff' : '#F7F7F7')};
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  padding: 0.75rem 1rem;
`

const StyledContent = styled.div`
  color: #000;
  ${({ seeMore }) => !seeMore && Truncate()}
`

const StyledReply = styled.div`
  color: #696969;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
`

const StyledCollapse = styled.div`
  color: #faac46;
  cursor: pointer;
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
`

const StyledTime = styled.span`
  color: ${({ theme }) => theme.COLOUR.primary};
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
`

const StyledFrom = styled(StyledTime)`
  display: block;
  text-align: right;
`

MessageBase.propTypes = {
  content: string,
  pictureId: string,
  scrollToMessage: bool,
  statusText: string,
  time: string,
  type: string
}
