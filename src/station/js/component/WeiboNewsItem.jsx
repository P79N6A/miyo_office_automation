/**
 * Created by zengruofan on 2019/2/2.
 */
import React from 'react';
import {Skeleton, Avatar, Icon, Divider} from 'antd'

class WeiboNewsItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            used: props.news ? (props.news.used ? true : false) : false,
            loading: props.news?(props.news.id?false:true):true
        }
    }

    onTip() {

        this.setState({
            used: true,
        })

        if (this.props.news && this.props.news.id && this.props.news.res_url) {
            window.open(this.props.news.res_url);
        }

    }

    render() {
        return (
            <div id="weiboNewsItem" onClick={this.onTip.bind(this)}>
                <Skeleton loading={this.state.loading} active avatar>
                    <div className="news-item-extra-wrap">
                        <div className="news-item-mark">
                            <Avatar style={{backgroundColor: this.state.used?'#ffffff':'#f56a00'}}></Avatar>
                        </div>
                        <div className="news-item-main">
                            <div className="news-item-meta">
                                <div className="news-item-meta-surface">
                                    <img width="160" alt="logo" src={this.props.news.img}/>
                                </div>

                                <div className="news-item-meta-content">
                                    <h4 className="news-item-meta-title">
                                        {this.props.news.title}
                                    </h4>
                                    <div className="news-item-meta-description">{this.props.news.des}</div>
                                </div>
                            </div>
                            <div className="news-item-action">
                                <li>
                                    <Icon type="link" style={{marginRight: '8px'}}/>{this.props.news.platfrom}
                                    <Divider type="vertical"/>
                                </li>
                                <li>
                                    <Icon type="clock-circle" style={{marginRight: '8px'}}/>{this.props.news.time}
                                </li>
                            </div>
                        </div>

                    </div>
                </Skeleton>
            </div>
        )

    }
}

WeiboNewsItem.defaultProps = {
    news: {
        title: '若凡米优',
        des: '',
        img: '',
        platfrom: '',
        time: ''
    }
};

export default WeiboNewsItem;

