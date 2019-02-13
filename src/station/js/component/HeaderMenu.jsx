/**
 * Created by jinjiaxing on 16/3/6.
 * HeaderMenu:用于Header内的menu组件
 * props: userName
 */
import React from 'react';

import {Menu, Dropdown, Icon} from 'antd';
let {SubMenu} = Menu;

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick(e) {
        console.log('click 123 ', e);
        alert('退出登录');
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item onClick={this.handleClick.bind(this)}>
                    退出登录
                </Menu.Item>
            </Menu>
        );

        return (
            <div id="headerMenu">
                <Dropdown overlay={menu}>
                    <div>
                        <i className='icon-user userimage'></i>
                        <label className='usertext'>{this.props.userName}</label>
                        <i className='icon-user_down usericon'></i>
                    </div>
                </Dropdown>
            </div>
        );
    }
}

HeaderMenu.defaultProps = {userName: '尚未登录'};

export default HeaderMenu;
