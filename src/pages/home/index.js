import React, {Component} from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import Test from '../test'
import Test2 from '../test2'
import Test3 from '../test3'
import './index.scss'

export default class Index extends Component{
    render(){
        return (
            <div className="home-container">
                <div className="left">
                    左边
                </div>
                <div className="right">
                    <div className="top">
                        头部
                    </div>
                    <div className="main">
                        <HashRouter>
                        <Link to="/" style={{marginRight:'20px'}}>首页</Link>
                        <Link to="/test">测试</Link>
                        <Link to="/test2">测试2</Link>
                        
                            {/* <Switch > */}
                                {/* <Route path="/" component={Home} /> */}
                                <Route path="/test" component={Test} />
                                <Route path="/test2" component={Test2} />
                                <Route path="/test2/test3" component={Test3} />
                                {/* <Route path="/test3" component={Test3} /> */}
                                {/* <Basic /> */}
                                {/* <Route component={NotFound} /> */}
                            {/* </Switch> */}
                        </HashRouter>
                    </div>
                </div>                
            </div>
        )
    }
}