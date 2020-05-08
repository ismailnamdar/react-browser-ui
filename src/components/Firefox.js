import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {CloseButton, FullscreenButton, MinifyButton} from './HeaderButton'

const theme = {
  fg: "palevioletred",
  bg: "white"
}

const TAB_COLOR = '#54585A'
const Tabs = styled.div`
  display: flex;
  height: ${props => props.height || '42px'};
  background-color: ${TAB_COLOR};
  padding-right: 13px;
  padding-left: 13px;
`

const StyledTab = styled.div`
  min-width: ${props => props.maxWidth || '50px'};
  max-width: ${props => props.minWidth || '200px'};
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 7px;
  padding: 0 8px 0 8px;
  align-items: center;
  box-sizing: border-box;
  background-color: ${props => props.isActive ? 'white' : 'initial'};
`
const TabCloseButton = styled.button`
  //
`

const Title = styled.span`
  font-size: 14px;
  margin: 0;
  margin-top: -2px;
  margin: ${props => props.margin};
  flex: 1;
  text-align: start;
  white-space: nowrap;
  overflow: hidden;
`

export const Tab = ({ isActive, imageUrl, imageAlt, title, onClick, onClose }) => {

  return <div/>;
  return (
    <StyledTab tabIndex={0} isActive={isActive} onClick={onClick} onKeyPress={onClick}>
      {imageUrl && <img height={'16px'} width={'16px'} src={imageUrl} alt={imageAlt} />}
      {typeof title === 'string'
        ? (<Title margin={'0 6px 0 6px'}>
          {title}
        </Title>) : title}
      <TabCloseButton tabIndex={0} alignItems={'center'} onClick={onClose}>
        {'X'}
      </TabCloseButton>
    </StyledTab>
  )
}

export default function Firefox({ showHeader, tabs, children, tabEnd, onClose, onMinifyClick, onFullscreenClick }) {
 return (
   <ThemeProvider theme={theme}>
     <Tabs>
       <div>
         <CloseButton onClick={onClose} />
         <MinifyButton onClick={onMinifyClick} />
         <FullscreenButton onClick={onFullscreenClick} />
       </div>
       {tabs}
       {tabEnd}
     </Tabs>
     <div style={{ height: "100%" }}>
       {children}
     </div>
   </ThemeProvider>
 )
}
