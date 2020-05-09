import React, { useEffect } from 'react'
import ChromeExample from './ChromeExample'
import FirefoxExample from './FirefoxExample'
import Browser, { Tab } from 'react-browser-ui'
import reactImg from './react.png'

export default function App () {
  return (
    <Browser
      type={'chrome'}
      showHeader={false}
      activeTabKey={'firefox'}
      tabEnd={null}>
      <Tab key={'chrome'} imageUrl={reactImg} imageAlt={'chrome tab image'} title={'Chrome'}>
        <div style={{ width: "100%", height: "100%", paddingTop: "2em", display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <ChromeExample />
          <ChromeExample showHeader={true} />
        </div>
      </Tab>
      <Tab key={'firefox'} imageUrl={reactImg} imageAlt={'firefox tab image'} title={'Firefox'}>
        <div style={{ width: "100%", height: "100%", padding: "2em", display: 'flex', flexDirection: 'row' }}>
          <FirefoxExample />
        </div>
      </Tab>
    </Browser>
  )
}
