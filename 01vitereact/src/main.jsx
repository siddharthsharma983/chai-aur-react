import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App | MR.P</h1>

    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: '_blank',
//   },
//   children: 'Click me to visit Google',
// };

const anotherElement = (
  <a href="https://www.google.com" target="_blank">Visit
  Google</a>
)

const anotherUser = "cahi aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit Google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    // <MyApp />
    // MyApp()

    reactElement

    // anotherElement
  
)