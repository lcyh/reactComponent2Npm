import React from 'react'
import { render } from 'react-dom'
import ReactDemo from 'src/index' // 组件源代码

const App = () => (
    <div>
        <div>example-组件</div>
        <ReactDemo />
    </div>
)
render(<App />, document.getElementById('root'))
