# react-browser-ui

> use browser ui components inside your app!

[![NPM](https://img.shields.io/npm/v/react-browser-ui.svg)](https://www.npmjs.com/package/react-browser-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

 

showHeader = true             |  showHeader = false
:-------------------------:|:-------------------------:
![Browser ui example 1](./img/example01.png) | ![Browser ui example 2](./img/example02.png)

## Install

```bash
npm install --save react-browser-ui
```

## Usage

```jsx
import React, { Component } from 'react'

import Browser, { Tab, Divider, AddButton } from 'react-browser-ui'

function ExampleComponent () {
  const tabEnd = (
    <>
      <Divider />
      <AddButton />
    </>
  )
  return (
    <div style={{ width: '100%', height: 600 }}>
      <Browser
        type={'chrome'}
        showHeader={false}
        activeTabKey={'green'}
        tabEnd={tabEnd}>
        <Tab key={'green'} title={'Green'}>
          <div style={{ backgroundColor: 'green', height: '100%', width: '100%', opacity: 0.9 }} />
        </Tab>
        <Tab key={'blue'} title={'Blue'}>
          <div style={{ backgroundColor: 'blue', height: '100%', width: '100%', opacity: 0.9 }} />
        </Tab>
      </Browser>
    </div>
  )
}
```

## API

### Browser
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| type | *String* | 'chrome' | browser type (currently only *chrome* is supported) |
| showHeader | *Boolean* | `false` | whether to show header of the browser |
| activeTabKey | *String, Number* | `undefined` | active tab's key |
| tabEnd | *ReactElements* | `<React.Fragment />` | additional react elements that will be insterted end of the tabs |
| children | *ReactElements* | `<React.Fragment />` | `Tab` element collection will passed as a child in here |
| onClose | *Function* | `undefined` | action will be fired when browser close button clicked |
| onMinifyClick | *Function* | `undefined` | action will be fired when browser minify button clicked |
| onFullscreenClick | *Function* | `undefined` | action will be fired when browser fullscreen button clicked |

### Tab
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| imageUrl | *String* | `undefined` | thumbnail image of the tab |
| title | *String, ReactElements* | `''` | title of the tab |
| children | *ReactElements* | `<React.Fragment />` | tab content, your component will go here |
| onClose | *Function* | `undefined` | action will be fired when tab close button clicked |

### Divider
Vertically divides items.
 
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| - | - | - | - |

### AddButton
Circle add button. It can take native button properties as a prop
 
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| - | - | - | - |

## License

MIT © [ismailnamdar](https://github.com/ismailnamdar)
