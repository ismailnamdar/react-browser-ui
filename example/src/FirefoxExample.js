import React from 'react'
import Browser, { Firefox } from 'react-browser-ui'
import reactImg from './react.png'

const { Tab, Divider, AddButton } = Firefox;

export default function FirefoxExample () {
  const tabEnd = (
    <>
      <Divider />
      <AddButton />
    </>
  )
  return (
    <div style={{ width: 600, height: 500, paddingTop: '5em' }}>
      <Browser
        type={'firefox'}
        showHeader={false}
        activeTabKey={'green'}
        tabEnd={tabEnd}>
        <Tab key={'green'} imageUrl={"https://w7.pngwing.com/pngs/922/486/png-transparent-mozilla-foundation-firefox-web-browser-logo-firefox-globe-orange-logo.png"} imageAlt={'green tab image'} title={'Green'}>
          <div style={{ backgroundColor: 'green', height: '100%', width: '100%', opacity: 0.9, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'white', margin: 0 }}>{'Your component here'}</h1>
          </div>
        </Tab>
        <Tab key={'blue'} imageUrl={reactImg} imageAlt={'blue tab image'} title={'Blue'}>
          <div style={{ backgroundColor: 'green', height: '100%', width: '100%', opacity: 0.9, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'white', margin: 0 }}>{'Your component here'}</h1>
          </div>
        </Tab>
        <Tab key={'blue1'} imageUrl={reactImg} imageAlt={'blue tab image'} title={'Blue'}>
          <div style={{ backgroundColor: 'green', height: '100%', width: '100%', opacity: 0.9, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'white', margin: 0 }}>{'Your component here'}</h1>
          </div>
        </Tab>
      </Browser>
    </div>
  )
}
