import React from 'react'
import Browser, { Safari } from 'react-browser-ui'

const { Tab, Divider, AddButton } = Safari

export default function SafariExample () {
  const tabEnd = (
    <React.Fragment>
      <Divider />
      <AddButton />
    </React.Fragment>
  )
  return (
    <div style={{ width: 600, height: 500 }}>
      <Browser
        type={'safari'}
        showHeader={false}
        activeTabKey={'green'}
        tabEnd={tabEnd}>
        <Tab key={'green'} imageUrl={''} imageAlt={'green tab image'} title={'Green'}>
          <div style={{ backgroundColor: 'green', height: '100%', width: '100%', opacity: 0.9, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'white', margin: 0 }}>{'Your component here'}</h1>
          </div>
        </Tab>
        <Tab key={'blue'} imageUrl={''} imageAlt={'blue tab image'} title={'Blue'}>
          <div style={{ backgroundColor: 'green', height: '100%', width: '100%', opacity: 0.9, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'white', margin: 0 }}>{'Your component here'}</h1>
          </div>
        </Tab>
      </Browser>
    </div>
  )
}
