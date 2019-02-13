/**
 * Created by jinjiaxing on 16/3/3.
 * @file Main
 */

import React from 'react';
import {HashRouter, Switch, Route, IndexRoute} from 'react-router-dom';

import MyHeader from './component/MyHeader.jsx';
import PageNews from './page/PageNews.jsx'

import LoginStore from './stores/GlobalStore';
import LoginAction from './actions/GlobalAction';
import CommonData from './common/CommonData.js';

import {Layout} from 'antd';
const {Header, Footer, Sider, Content,} = Layout;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            stations: [],
            collapsed: false,
        };
        LoginStore.listen(this.onUpdateLoginState.bind(this));
        this.init();
    }

    /**
     * 初始化数据
     */
    init() {
        LoginAction.updateLoginState();
    }

    /**
     * 获取用户登录信息
     */
    onUpdateLoginState(data) {
        this.setState({'user_name': data.data.user_name});
    }

    onCollapse(collapsed) {
        console.log(collapsed);
        this.setState({collapsed});
    }

    render() {
        return (
            <Layout>
                <Header style={{height:'64px'}}>
                    <MyHeader userName={this.state.user_name}/>
                </Header>

                <Content>
                    <PageNews />
                </Content>
            </Layout>

        );
    }

    setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        // important! domain is needed
        var cookieVal = c_name + "=" + escape(value) +
            ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) +
            "; path=/; domain=" + location.hostname;
        document.cookie = cookieVal;
    }

    componentDidMount() {
        // todo 这个buuss 以后要从cookie取得
        var bduss = 'VZqVVFiMEdMWWVSVWlTTDhORGNsand3aFVacDB0UlllNDZSNVhZd0duQ2xGd1pYQVFBQUFBJCQAAAAAAAAAAAEAAABoeEIGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKWK3lalit5WL';
        this.setCookie('BDUSS', bduss === undefined ? '' : bduss);
    }
}

export default App;
