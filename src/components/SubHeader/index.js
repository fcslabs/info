import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { RowBetween, AutoRow, RowFixed } from '../Row'
import Title from '../Title'
import Search from '../Search'
import { BasicLink } from '../Link'
import { useMedia } from 'react-use'
import { transparentize } from 'polished'

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => transparentize(0.4, theme.bg1)};
  backdrop-filter: blur(20px);
  color: ${({ theme }) => theme.text1};
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  position: sticky;
  top: 32px;
  z-index: 9999;
  border-bottom: 1px solid ${({ theme }) => theme.bg3};
  box-sizing: border-box;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Option = styled.div`
  font-weight: 500;
  color: ${({ theme, activeText }) => (activeText ? theme.text1 : theme.text3)};
`

function SubHeader({
  history: {
    location: { pathname }
  }
}) {
  const below1080 = useMedia('(max-width: 1080px)')
  const below600 = useMedia('(max-width: 600px)')

  return (
    <Wrapper>
      <RowBetween>
        <RowFixed>
          {!below600 ? <Title /> : <Search small={true} />}
          {!below1080 && (
            <AutoRow gap="0.5rem" style={{ marginLeft: '1rem' }}>
              <BasicLink to="/home">
                <Option activeText={pathname === '/home' ?? undefined}>Overview</Option>
              </BasicLink>
              <BasicLink to="/all-pairs">
                <Option activeText={pathname === '/all-pairs' ?? undefined}>Pairs</Option>
              </BasicLink>
              <BasicLink to="/all-tokens">
                <Option activeText={pathname === '/all-tokens' ?? undefined}>Tokens</Option>
              </BasicLink>
              <BasicLink to="/account-lookup">
                <Option activeText={pathname === '/account-lookup' ?? undefined}>Accounts</Option>
              </BasicLink>
            </AutoRow>
          )}
        </RowFixed>
        {!below600 && <Search small={true} />}
      </RowBetween>
    </Wrapper>
  )
}

export default withRouter(SubHeader)