/**
 * Created by zengruofan on 2019/2/13.
 */
import React from 'react';
import CommonData from '../common/CommonData.js';
import AttendanceSelect from '../component/AttendanceSelect.jsx';
import AttendanceStats from '../component/AttendanceStats.jsx';
import LoginStore from '../stores/GlobalStore.js';

import {
    Statistic, Row, Col, Card, Popover, Input, Collapse, Radio, Button, Icon, Drawer, Pagination,
    Empty
} from 'antd';
const Search = Input.Search;
const Panel = Collapse.Panel;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const {Meta} = Card;

const content = (
    <div>
        <p>PS4</p>
        <p>Xbox One</p>
        <p>Switch</p>
    </div>
);

const gameType = [
    {
        id: 1,
        type: '第一人称射击'
    },
    {
        id: 2,
        type: '第三人称射击'
    },
    {
        id: 3,
        type: '动作游戏'
    }, {
        id: 4,
        type: '角色扮演'
    }, {
        id: 5,
        type: '动作角色扮演'
    }, {
        id: 6,
        type: '竞速游戏'
    }, {
        id: 7,
        type: '即时战略'
    }, {
        id: 8,
        type: '策略游戏'
    }
]

const gamePlatform = [
    {
        id: 1,
        platform: 'PS4'
    },
    {
        id: 2,
        platform: 'Xbox One'
    },
    {
        id: 3,
        platform: 'Switch'
    }, {
        id: 4,
        platform: 'Xbox'
    }
]

const gameTime = [
    {
        id: 1,
        time: '2019'
    },
    {
        id: 2,
        time: '2018'
    },
    {
        id: 3,
        time: '2017'
    }, {
        id: 4,
        time: '2016'
    }
]

const gameCompany = [
    {
        id: 1,
        company: '2K GAMES'
    },
    {
        id: 2,
        company: '505 GAMES'
    },
    {
        id: 3,
        company: '雅达利'
    }, {
        id: 4,
        company: '动视'
    }
]

const gameLanguage = [
    {
        id: 1,
        language: '中文'
    },
    {
        id: 2,
        language: '日文'
    },
    {
        id: 3,
        language: '英文'
    }, {
        id: 4,
        language: '韩语'
    }
]

const gameTag = {
    count: 219,
    data: [
        {
            id: 1,
            tag: '国产'
        },
        {
            id: 2,
            tag: '日文'
        },
        {
            id: 3,
            tag: '英文'
        }, {
            id: 4,
            tag: '韩语'
        }
    ]
}


class PageGameSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select_options: {
                type: 'all',
                platform: 'all',
                time: 'all',
                company: 'all',
                language: 'all',
                tag: 'all',

            },
            show_search_btn: false,
            drawer_visible: false

        }
    }

    searchGame() {
        this.setState({
            show_search_btn: false
        });
    }

    selectGameType(e) {
        var select_options = this.state.select_options
        select_options.type = e.target.value
        this.setState({
            select_options,
            show_search_btn: true
        });
    }

    selectGamePlatform(e) {
        var select_options = this.state.select_options
        select_options.platform = e.target.value
        this.setState({
            select_options,
            show_search_btn: true
        });
    }

    selectGameTime(e) {
        var select_options = this.state.select_options
        select_options.time = e.target.value
        this.setState({
            select_options,
            show_search_btn: true
        });
    }

    selectGameCompany(e) {
        var select_options = this.state.select_options
        select_options.company = e.target.value
        this.setState({
            select_options,
            show_search_btn: true
        });
    }

    selectGameLanguage(e) {
        var select_options = this.state.select_options
        select_options.language = e.target.value
        this.setState({
            select_options,
            show_search_btn: true
        });
    }

    selectGameTag(e) {
        var select_options = this.state.select_options
        select_options.tag = e.target.value
        this.setState({
            select_options,
            show_search_btn: true,
            drawer_visible: false
        });
    }

    showTagDrawer() {
        this.setState({
            drawer_visible: true
        })
    }

    drawerClose() {
        this.setState({
            drawer_visible: false
        })
    }

    render() {
        var selectHeader = (
            <div>条件选择:
                {this.state.select_options.type != 'all' ? "【游戏类型-" + gameType[this.state.select_options.type].type + "】" : ""}
                {this.state.select_options.platform != 'all' ? "【游戏类型-" + gamePlatform[this.state.select_options.platform].platform + "】" : ""}
                {this.state.select_options.time != 'all' ? "【发售时间-" + gameTime[this.state.select_options.time].time + "】" : ""}
                {this.state.select_options.company != 'all' ? "【游戏厂商-" + gameCompany[this.state.select_options.company].company + "】" : ""}
                {this.state.select_options.language != 'all' ? "【支持语言-" + gameLanguage[this.state.select_options.language].language + "】" : ""}
                {this.state.select_options.tag != 'all' ? "【游戏标签-" + gameTag.data[this.state.select_options.tag].tag + "】" : ""}
                {this.state.show_search_btn ? (<Button type="primary" shape="circle" icon="search" size="small"
                                                       style={{marginLeft: '22px', zIndex:'999'}}
                                                       onClick={this.searchGame.bind(this)}/>) : ''}
            </div>
        )
        var game_result_dom = true?(
            <div>
                <div className="game-list">
                    <Card
                        style={{ width: 240 ,margin: '10px'}}
                        cover={<img alt="example" style={{ width: 240 , height: 320}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title="Card title"
                        />
                    </Card>
                    <Card
                        style={{ width: 240 ,margin: '10px'}}
                        cover={<img alt="example" style={{ width: 240 , height: 320}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title="Card title"
                        />
                    </Card>
                    <Card
                        style={{ width: 240 ,margin: '10px'}}
                        cover={<img alt="example" style={{ width: 240 , height: 320}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title="Card title"
                        />
                    </Card>
                    <Card
                        style={{ width: 240 ,margin: '10px'}}
                        cover={<img alt="example" style={{ width: 240 , height: 320}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title="Card title"
                        />
                    </Card>
                    <Card
                        style={{ width: 240 ,margin: '10px'}}
                        cover={<img alt="example" style={{ width: 240 , height: 320}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title="Card title"
                        />
                    </Card>
                    <Card
                        style={{ width: 240 ,margin: '10px'}}
                        cover={<img alt="example" style={{ width: 240 , height: 320}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title="Card title"
                        />
                    </Card>
                    <Card
                        style={{ width: 240 ,margin: '10px'}}
                        cover={<img alt="example" style={{ width: 240 , height: 320}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title="Card title"
                        />
                    </Card>
                    <Card
                        style={{ width: 240 ,margin: '10px'}}
                        cover={<img alt="example" style={{ width: 240 , height: 320}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title="Card title"
                        />
                    </Card>
                    <Card
                        style={{ width: 240 ,margin: '10px'}}
                        cover={<img alt="example" style={{ width: 240 , height: 320}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title="Card title"
                        />
                    </Card>
                    <Card
                        style={{ width: 240 ,margin: '10px'}}
                        cover={<img alt="example" style={{ width: 240 , height: 320}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title="Card title"
                        />
                    </Card>
                    <Card
                        style={{ width: 240 ,margin: '10px'}}
                        cover={<img alt="example" style={{ width: 240 , height: 320}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title="Card title"
                        />
                    </Card>
                    <Card
                        style={{ width: 240 ,margin: '10px'}}
                        cover={<img alt="example" style={{ width: 240 , height: 320}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title="Card title"
                        />
                    </Card>
                </div>
                <Pagination className="game-list-pagination"
                            pageSize="20" defaultCurrent={1} total={50}/>
            </div>
        ):(<Empty/>)

        return (
            <div id="pageGameSearch">
                <div>
                    <div className='queryHeader'>游戏查询</div>
                    <Row className="gameStatisShow">
                        <Col span={4}>
                            <Card>
                                <Statistic title="游戏数量" value={112893} valueStyle={{ color: '#3f8600' }}/>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card>
                                <Statistic title="游戏集" value={893} valueStyle={{ color: '#3f8600' }}/>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Popover content={content} trigger="hover">
                                <Card>
                                    <Statistic title="收录平台" value={3} valueStyle={{ color: '#3f8600' }}/>
                                </Card>
                            </Popover>
                        </Col>
                        <Col span={4}>
                            <Card>
                                <Statistic title="收录公司" value={23} valueStyle={{ color: '#3f8600' }}/>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card>
                                <Statistic title="收录类型" value={4} valueStyle={{ color: '#3f8600' }}/>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card>
                                <Statistic title="收录标签" value={12} valueStyle={{ color: '#3f8600' }}/>
                            </Card>
                        </Col>
                    </Row>
                    <div style={{marginLeft: '22px', marginTop: '20px',paddingBottom: '10px'}}>
                        <Search
                            placeholder="输入查询的游戏"
                            onSearch={value => console.log(value)}
                            style={{ width: 400 }}
                        />
                    </div>

                    <div style={{marginLeft: '22px',marginBottom: '42px'}}>
                        <Collapse bordered={false}>
                            <Panel header={selectHeader} key="1">
                                <Collapse bordered={false} accordion>
                                    <Panel
                                        header={"游戏类型:"+(this.state.select_options.type != 'all'?gameType[this.state.select_options.type].type:"")}
                                        key="n1">
                                        <RadioGroup defaultValue="all" onChange={this.selectGameType.bind(this)}>
                                            <RadioButton value="all" style={{margin:'4px'}}>全部</RadioButton>
                                            {gameType.map((item, index) => (
                                                <RadioButton value={index} key={index}
                                                             style={{margin:'4px'}}>{item.type}</RadioButton>
                                            ))}
                                        </RadioGroup>
                                    </Panel>
                                    <Panel
                                        header={"游戏平台:"+(this.state.select_options.platform != 'all'?gamePlatform[this.state.select_options.platform].platform:"")}
                                        key="n2">
                                        <RadioGroup defaultValue="all" onChange={this.selectGamePlatform.bind(this)}>
                                            <RadioButton value="all" style={{margin:'4px'}}>全部</RadioButton>
                                            {gamePlatform.map((item, index) => (
                                                <RadioButton value={index} key={index}
                                                             style={{margin:'4px'}}>{item.platform}</RadioButton>
                                            ))}
                                        </RadioGroup>
                                    </Panel>
                                    <Panel
                                        header={"发售时间:"+(this.state.select_options.time != 'all'?gameTime[this.state.select_options.time].time:"")}
                                        key="n3">
                                        <RadioGroup defaultValue="all" onChange={this.selectGameTime.bind(this)}>
                                            <RadioButton value="all" style={{margin:'4px'}}>全部</RadioButton>
                                            {gameTime.map((item, index) => (
                                                <RadioButton value={index} key={index}
                                                             style={{margin:'4px'}}>{item.time}</RadioButton>
                                            ))}
                                        </RadioGroup>
                                    </Panel>
                                    <Panel
                                        header={"游戏厂商:"+(this.state.select_options.company != 'all'?gameCompany[this.state.select_options.company].company:"")}
                                        key="n4">
                                        <RadioGroup defaultValue="all" onChange={this.selectGameCompany.bind(this)}>
                                            <RadioButton value="all" style={{margin:'4px'}}>全部</RadioButton>
                                            {gameCompany.map((item, index) => (
                                                <RadioButton value={index} key={index}
                                                             style={{margin:'4px'}}>{item.company}</RadioButton>
                                            ))}
                                        </RadioGroup>
                                    </Panel>
                                    <Panel
                                        header={"支持语言:"+(this.state.select_options.language != 'all'?gameLanguage[this.state.select_options.language].language:"")}
                                        key="n5">
                                        <RadioGroup defaultValue="all" onChange={this.selectGameLanguage.bind(this)}>
                                            <RadioButton value="all" style={{margin:'4px'}}>全部</RadioButton>
                                            {gameLanguage.map((item, index) => (
                                                <RadioButton value={index} key={index}
                                                             style={{margin:'4px'}}>{item.language}</RadioButton>
                                            ))}
                                        </RadioGroup>
                                    </Panel>
                                    <Panel
                                        header={"游戏标签:"+(this.state.select_options.tag != 'all'?gameTag.data[this.state.select_options.tag].tag:"")}
                                        key="n6">
                                        <RadioGroup defaultValue="all" onChange={this.selectGameTag.bind(this)}>
                                            <RadioButton value="all" style={{margin:'4px'}}>全部</RadioButton>
                                            {gameTag.data.map((item, index) => (
                                                <RadioButton value={index} key={index}
                                                             checked={index == this.state.select_options.tag}
                                                             style={{margin:'4px'}}>{item.tag}</RadioButton>
                                            ))}
                                            <Button type="primary"
                                                    onClick={this.showTagDrawer.bind(this)}>全部{gameTag.count}标签</Button>
                                        </RadioGroup>
                                    </Panel>
                                </Collapse>
                            </Panel>
                        </Collapse>
                    </div>
                    {game_result_dom}
                </div>
                <Drawer
                    title="游戏标签"
                    placement="right"
                    closable={true}
                    onClose={this.drawerClose.bind(this)}
                    visible={this.state.drawer_visible}
                >
                    <RadioGroup defaultValue="all" onChange={this.selectGameTag.bind(this)}>
                        {gameTag.data.map((item, index) => (
                            <RadioButton value={index} key={index} checked={index == this.state.select_options.tag}
                                         style={{margin:'4px'}}>{item.tag}</RadioButton>
                        ))}
                    </RadioGroup>
                </Drawer>
            </div>
        );
    }
}


export default PageGameSearch;