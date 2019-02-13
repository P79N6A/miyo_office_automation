/**
 * Created by jinjiaxing on 16/3/7.
 * SilderBar 屏幕左侧导航条
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Icon, Badge} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SilderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultRouter: 'pageweibonews'
        };
        this.constText = {
            newsManagement: '新闻管理',
            weiNews: '微博新闻',
            newsAudit: '新闻审核',
            operate: '运营管理',
            opExpand: '推广效果',
            opNearByUser: '周边用户',
            oilManagement: '油站管理',
            accessManagement: '权限管理'
        }
    }

    componentWillMount() {
        var routerpath = (window.location.hash).substr(2, window.location.hash.length)
        if (routerpath.length > 0) {
            this.setState({
                defaultRouter: routerpath
            })
        }
    }

    changeRouter(e) {
        console.log('click ', e);
    }

    render() {
        return (
            <div className="silderBarComponent">
                <Menu mode="vertical" theme="dark" style={{ width: 188 }}
                      defaultSelectedKeys={[this.state.defaultRouter]}
                      onClick={this.changeRouter}>
                    <MenuItemGroup key="g0" title={''}></MenuItemGroup>
                    <MenuItemGroup key="g1" title='新闻管理'>
                        <Menu.Item key="pageweibonews">
                            <Link to='pageweibonews'>
                                <Icon type="weibo"/>微博新闻
                                <Badge count={5} style={{marginLeft: '10px'}} title="有5条新闻看下是否需要发微博">
                                </Badge>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="pagenewsaudit">
                            <Link to='pagenewsaudit'>
                                <Icon type="diff"/>新闻审核
                                <Badge count={5} style={{marginLeft: '10px'}} title="有5条新闻需要审核">
                                </Badge>
                            </Link>
                        </Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title='游戏管理'>
                        <Menu.Item key="pagegamesearch">
                            <Link to='pagegamesearch'>
                                <Icon type="weibo"/>游戏查询
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="4">
                            <Link to='d'>
                                <Icon type="weibo"/>游戏列表管理
                            </Link>
                        </Menu.Item>
                    </MenuItemGroup>

                    <MenuItemGroup key="g3" title={this.constText.oilManagement}>
                        <Menu.Item key="5">
                            <Link to='pagepermission'>
                                <Icon type="robot"/>{this.constText.accessManagement}
                            </Link>
                        </Menu.Item>
                    </MenuItemGroup>
                </Menu>
            </div>
        )
            ;
    }

}

SilderBar.defaultProps = {};

//ReactDOM.render(<SilderBar />, document.getElementById('silderbar'));
export default SilderBar;
