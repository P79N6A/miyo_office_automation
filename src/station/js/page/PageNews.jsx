/**
 * Created by zengruofan on 2019/1/30.
 */
import Query from '../Query.js'
import React from 'react';
import {HashRouter, Switch, Route, IndexRoute, withRouter} from 'react-router-dom';

import Transaction from './PageTransaction.jsx';
import Pagepermission from './PagePermission.jsx';
import PageAddPermission from './PageAddPermission.jsx'
import PageAttendance from './PageAttendance.jsx'
import PageTransactionDetail from './PageTransactionDetails.jsx';
import PageExtend from './PageExtend.jsx'
import PageWeiboNews from './PageWeiboNews.jsx'
import PageNewsAudit from './PageNewsAudit.jsx'
import PageGameSearch from './PageGameSearch.jsx'
import SilderBar from '../component/SilderBar.jsx';


class PageNews extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <SilderBar id="silderbar"/>
                <div id="pageNews">
                    <Route exact path='/' component={PageWeiboNews}/>
                    <Route path='/pageweibonews' component={PageWeiboNews}/>
                    <Route path='/pagenewsaudit' component={PageNewsAudit}/>
                    <Route path='/pagegamesearch' component={PageGameSearch}/>

                    <Route path='/pagepermission' component={Pagepermission}/>
                    <Route path='/pageaddpermission' component={PageAddPermission}/>
                    <Route path='/pageAttendance' component={PageAttendance}/>
                    <Route path='/pageTransactionDetail/:stationID/:orderID'
                           component={PageTransactionDetail}/>
                    <Route path='/pageextend' component={PageExtend}/>
                </div>
            </div>
        )
    }
}

export default PageNews;