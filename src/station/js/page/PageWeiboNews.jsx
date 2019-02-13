/**
 * Created by zengruofan on 2019/1/28.
 */
import Query from '../Query.js'
import React from 'react';

import {Pagination, Switch} from 'antd';

import WeiboNewsItem from '../component/WeiboNewsItem.jsx'

class PageWeiboNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weibonewsdata: {}
        }

        this.getNewsDetail();
    }

    isObjectEmp(obj) {
        if (JSON.stringify(obj) == '{}') {
            return true
        }
        return false
    }


    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }

    onShowAudit(checked) {
        console.log(checked)
    }

    getNewsDetail() {
        var test_url = '/api/getNews'
        var reqData=''
        Query.get(test_url, reqData, function(data) {
            console.log(data)
        //     this.setState({loading: false});
            if (data && data.data) {
                this.setState(
                    {weibonewsdata: data});
                // this.setState( {
                //     oilTransactionDetails: {
                //         ID: data.data.order_id,
                //         time: new Date(data.data.pay_time*1000).format(),
                //         money: data.data.total_amount,
                //         ganNum: data.data.gun_no,
                //         oilNum: data.data.oil_no,
                //         carNum: data.data.car_no
                //     }
                // });
                // this.getDetailsStatus(data.data.status);
            } else {
                console.log('订单详情为空');
            }
        }.bind(this));
    }

    render() {
        const listData = !this.isObjectEmp(this.state.weibonewsdata)?this.state.weibonewsdata.data:[];
        const data_total = !this.isObjectEmp(this.state.weibonewsdata)?this.state.weibonewsdata.total: 0;

        var weibonews = listData
        console.log(weibonews)

        return (
            <div id="pageWeiboNews">
                <div className='queryHeader'>
                    <div>微博新闻收录</div>

                    <div className="show_audit_content">
                        显示已审核过内容:
                        <Switch checkedChildren="开" unCheckedChildren="关" 
                                style={{marginLeft: '10px'}}
                                onChange={this.onShowAudit.bind(this)}/>
                    </div>
                </div>
                {
                    weibonews.map((item, idx)=>
                        <WeiboNewsItem news={item} key={item.id}/>
                    )
                }

                <Pagination showQuickJumper defaultCurrent={1} pageSize={10} total={data_total}
                            onChange={this.onChange.bind(this)}
                            hideOnSinglePage
                            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                            style={{marginTop: '20px', marginBottom: '50px', marginLeft: '50px'}}/>,

            </div>
        )

    }
}

export default PageWeiboNews;