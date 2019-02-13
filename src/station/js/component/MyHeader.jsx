/**
 * Created by jinjiaxing on 16/3/4.
 * header 组件
 */
import React from 'react';
import HeaderMenu from './HeaderMenu.jsx';

class MyHeader extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {

        return (
            <div id="oilHeader">
                <div className="logoContainer">
                    <div className="logo icon-baidulogo"></div>
                    <label> | 若凡米优内部工作系统</label>
                </div>
                <div className="userInfo">
                    <HeaderMenu userName={this.props.userName} />
                </div>
            </div>
        )
    }
}



export default MyHeader;


