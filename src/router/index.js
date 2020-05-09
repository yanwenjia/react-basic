import React from 'react';
import Home from '../pages/home'
// import Test from '../pages/test'
// 路由使用 history模式
// import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
// 路由采用 hash模式
// import { HashRouter, Switch, Route  } from 'react-router-dom'
/**
 * Route 属性exact 严格匹配
 * BrowserRouter 自带 history 属性 直接props.history使用
 * Route path属性没有时 component 作为404 组件
 * Switch  从上到下依次匹配 只匹配一个
 */
function Routers(props) {
    return (
        <div>
            {/* <HashRouter>
                <Switch >
                    <Route path="/" component={Home} />
                    <Route path="/test" component={Test} />
                    <Route path="/test/1" component={Test} />
                    <Basic />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter> */}
            <Home/>
        </div>

    )
}

export default Routers;