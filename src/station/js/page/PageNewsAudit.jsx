/**
 * Created by zengruofan on 2019/1/28.
 */
import Query from '../Query.js'
import React from 'react';
import moment from 'moment';
import newsAuditStateStore from '../stores/newsAuditStateStore.jsx'

import {
    Pagination, Switch, Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon, Radio,
    AutoComplete, Tag, Tooltip, Card, Checkbox, notification
} from 'antd';
const {Option} = Select;
const {Meta} = Card;

const timeFormat = 'YYYY/MM/DD HH:mm';

const data = {
    "type": '1',
    "topic_id": 1,
    'res_url': 'http://www.baidu.com',
    "title": "《勇者斗恶龙建造者2》奥克苏姆岛情报及截图",
    "surface": "http://oh8he3fdl.bkt.clouddn.com/qiniu/13258/image/1a8b5cfd89421294188b0194c688b08d.jpg?watermark/1/image/aHR0cDovL3d3dy5ydHRzd2l0Y2guY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9zeS0xLnBuZw==/dissolve/100/gravity/SouthWest/dx/10/dy/10",
    des: 'SE公布了《勇者斗恶龙建造者2》的全新情报和截图，本次游戏的介绍的是其中一个名叫奥克苏姆的岛屿',
    source_platform: 'duowan',
    image_collection: [
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        'http://www.ign.xn--fiqs8s/sm/t/ign_cn/screenshot/default/bao-ke-meng-3_msfb.300.jpg',
        'http://www.ign.xn--fiqs8s/sm/t/ign_cn/screenshot/default/lian-jin-4_sv3w.300.jpg',
        'http://www.ign.xn--fiqs8s/sm/t/ign_cn/screenshot/default/marvel-spider-man-180803008_g8hw.300.jpg',
        'http://www.ign.xn--fiqs8s/sm/t/ign_cn/screenshot/default/mi-gong-1_3a3z.300.jpg',
        'http://www.ign.xn--fiqs8s/sm/t/ign_cn/screenshot/default/medusa-killed-me-stone-dead-in-assassins-creed-odyssey-games_bhjg.300.jpg'
    ],
    surface: [
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        'http://www.ign.xn--fiqs8s/sm/t/ign_cn/screenshot/default/bao-ke-meng-3_msfb.300.jpg',
        'http://www.ign.xn--fiqs8s/sm/t/ign_cn/screenshot/default/lian-jin-4_sv3w.300.jpg',
    ],
    "content": [
        {
            "type": 1,
            "data": "SE公布了《勇者斗恶龙建造者2》的全新情报和截图，本次游戏的介绍的是其中一个名叫奥克苏姆的岛屿。"
        },
        {
            "type": 1,
            "data": "奥克苏姆岛是一个全新的冒险地点，是一个经常拥有金矿的采矿岛屿，主角为了宣召建造金属物体的方法来到这座岛上。这是一座沙漠岛，地底下有丰富的矿石资源，在矿洞的深处可能隐藏着神秘的宝藏，你甚至可以在矿洞内看到地下河的出现。"
        },
        {
            "type": 1,
            "data": "奥克苏姆岛曾经因为淘金热十分的热闹，自从矿山关闭之后，这里就慢慢没落了，玩家需要在这里恢复岛屿昔日的辉煌，你可以使用建筑之力来恢复矿产。让岛民们重获新生。"
        },
        {
            "type": 1,
            "data": "在这里你将可以遇到曾经是镇上酒吧的表演女郎的佩罗，擅长采矿矿石马西莫，优秀的铁匠卡罗。"
        },
        {
            "type": 2,
            "data": 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
        {
            "type": 1,
            "data": "矿洞里面会各种烦人的怪出等待着玩家，他们会突然从矿洞跳出来攻击，甚至可以使用毒性攻击。"
        },
        {
            "type": 2,
            "data": 'http://www.ign.xn--fiqs8s/sm/t/ign_cn/screenshot/default/bao-ke-meng-3_msfb.300.jpg',
        },
        {
            "type": 2,
            "data": 'http://www.ign.xn--fiqs8s/sm/t/ign_cn/screenshot/default/lian-jin-4_sv3w.300.jpg',
        },
        {
            "type": 2,
            "data": "http://oh8he3fdl.bkt.clouddn.com/qiniu/13258/image/22f6dd67ea021e3929f23b18a4ca1af1.jpg?watermark/1/image/aHR0cDovL3d3dy5ydHRzd2l0Y2guY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9zeS0xLnBuZw==/dissolve/100/gravity/SouthWest/dx/10/dy/10"
        },
    ],
}

const atlas_content = [
    {
        type: 2,
        data: "http://img.demaxiya.com/uploads/allimg/180709/15-1PF915453Xb.gif",
        desc: '1change事件返回detail中包含一个source字段，表示导致变更的原因，可能值如下1change事件返回detail中包含一个source字段，表示导致变更的原因，可能值如下1change事件返回detail中包含一个source字段，表示导致变更的原因，可能值如下',
    },
    {
        type: 2,
        data: "http://www.rttswitch.com/wp-content/uploads/20181101gamersky_01origin_01_20181119521D1.jpg",
        desc: '2change事件返回detail中包含一个source字段，表示导致变更的原因，可能值如下',
    },
    {
        type: 2,
        data: "http://www.rttswitch.com/wp-content/uploads/20181101sports-party-1-656x369.jpg",
        desc: '3change事件返回detail中包含一个source字段，表示导致变更的原因，可能值如下',
    },
    {
        type: 2,
        data: "http://www.rttswitch.com/wp-content/uploads/20181030dragon-quest-builders-2-multi-1.jpg",
        desc: '4change事件返回detail中包含一个source字段，表示导致变更的原因，可能值如下',
    },
    {
        type: 2,
        data: "http://img.demaxiya.com/uploads/allimg/180709/15-1PF915454W52.jpg",
        desc: '5change事件返回detail中包含一个source字段，表示导致变更的原因，可能值如下',
    },
    {
        type: 2,
        data: "http://img.demaxiya.com/uploads/allimg/180709/15-1PF9154602250.jpg",
        desc: '6change事件返回detail中包含一个source字段，表示导致变更的原因，可能值如下',
    },
    {
        type: 2,
        data: "http://img.demaxiya.com/uploads/allimg/180709/15-1PF9154612131.jpg",
        desc: '7change事件返回detail中包含一个source字段，表示导致变更的原因，可能值如下',
    },
    {
        type: 2,
        data: "http://img.demaxiya.com/uploads/allimg/180709/15-1PF9154621U9.jpg",
        desc: '8change事件返回detail中包含一个source字段，表示导致变更的原因，可能值如下',
    },
    {
        type: 2,
        data: "http://img.demaxiya.com/uploads/allimg/180709/15-1PF915462W62.jpg",
        desc: '9change事件返回detail中包含一个source字段，表示导致变更的原因，可能值如下',
    },

]

const platforms = {
    duowan: '多玩',
    gamersky: '游民星空',
    haowanjun: '好玩Jun'
}


import NewsItem from '../component/NewsItem.jsx'

Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

Array.prototype.contains = function (val) {
    var i = this.length;
    while (i--) {
        if (this[i] === val) {
            return true;
        }
    }
    return false
};

function isHasImg(pathImg) {
    var ImgObj = new Image();
    ImgObj.src = pathImg;
    if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
        return true;
    } else {
        return false;
    }
}

class AuditDetailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news_data: data,
            res_news_data: data,
            game_autocomplete: [],
            news_tags: ['Unremovable', 'Tag 2', 'Tag 3'], // 关联游戏时候带的
            tagInputVisible: false,
            tagInputValue: '',
            allSurfaceExpand: false,
            video_url: '',
            atlas_content: atlas_content,
            selected_atlas_content: [],
        }
    }

    componentWillMount() {
        this.newsFilter()
        this.atlasFilter()
    }

    // 打开源网址
    openSourceUrl() {
        window.open(this.state.news_data.res_url)
    }

    // 类型切换
    handleTypeChange(e) {
        this.state.news_data.type = e.target.value
        this.setState({
            news_data: this.state.news_data
        });
    }

    // 关联游戏输入,自动联想
    handleGameInput(value) {
        console.log(value);
        this.setState({
            game_autocomplete: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }

    // 关联游戏选择
    onSelectGame(value) {
        console.log('onSelect', value);
    }

    // 标签
    // 删除标签
    handleTagClose(removedTag) {
        const news_tags = this.state.news_tags.filter(tag => tag !== removedTag);
        console.log(news_tags);
        this.setState({news_tags});
    }

    // 展现标签输入框
    showTagInput() {
        this.setState({tagInputVisible: true}, () => this.tagInput.focus());
    }

    // 输入标签
    handleTagInputChange(e) {
        this.setState({tagInputValue: e.target.value});
    }

    // 确认标签输入
    handleTagInputConfirm() {
        const state = this.state;
        const tagInputValue = state.tagInputValue;
        let news_tags = state.news_tags;
        if (tagInputValue && news_tags.indexOf(tagInputValue) === -1) {
            news_tags = [...news_tags, tagInputValue];
        }
        console.log(news_tags);
        this.setState({
            news_tags,
            tagInputVisible: false,
            tagInputValue: '',
        });
    }

    saveTagInputRef(input) {
        this.tagInput = input
    }

    // surface
    onSurfaceChange(checkedValues) {
        var news_data = this.state.news_data

        if (checkedValues.length < 4) {
            news_data.surface = checkedValues
            this.setState({
                news_data
            })
        } else {
            notification['warning']({
                message: 'Warning',
                description: '新闻封面图最多设置3张',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        }

    }

    onSurfaceSelect(e) {

        var surface = this.state.news_data.surface

        var selectImg = e.currentTarget.id

        if (surface.contains(selectImg)) {
            surface.remove(selectImg)
        } else {
            if (surface.length < 3) {
                surface.push(selectImg)
                var new_surface = this.state.news_data.image_collection.filter(img => (
                    surface.contains(img) || selectImg==img
                ))
                surface = new_surface
            } else {
                notification['warning']({
                    message: 'Warning',
                    description: '新闻封面图最多设置3张',
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
            }
        }

        var news_data = this.state.news_data
        news_data.surface = surface

        this.setState({
            news_data
        })

    }

    showAllSurface() {
        this.setState({
            allSurfaceExpand: !this.state.allSurfaceExpand
        })
    }

    // 关闭抽屉
    onCloseDrawer() {
        this.props.onClose()
    }

    //新闻
    // 图集

    newsFilter(){

        var news_content = this.state.news_data.content.filter(news_item => {
            if (news_item.type == 1 || isHasImg(news_item.data)){
                return true
            } else {
                return false
            }
        })

        var news_data = this.state.news_data
        news_data.content = news_content
        this.setState({
            news_data
        })
    }

    //绑定视频地址
    onBindVideoUrl(value) {
        this.setState({
            video_url: value
        })
    }

    // 图集

    atlasFilter(){
        var selected_atlas = []
        var atlas = this.state.atlas_content.filter(atlas_item => {
            if (isHasImg(atlas_item.data)) {
                selected_atlas.push(atlas_item.data)
                return true
            } else {
                return false
            }
        })

        this.setState({
            atlas_content : atlas,
            selected_atlas_content : selected_atlas
        })
    }

    onAtlasChange(checkedValues) {
        this.setState({
            selected_atlas_content: checkedValues
        })


    }

    onAtlasSelect(e) {

        var selected_atlas_content = this.state.selected_atlas_content
        var selectImg = e.currentTarget.id
        if (selected_atlas_content.contains(selectImg)) {
            selected_atlas_content.remove(selectImg)

        } else {
            selected_atlas_content.push(selectImg)

        }

        this.setState({
            selected_atlas_content
        })

    }


    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };

        var content_frame = ''
        if (this.state.news_data.type == '1') { // 图文
            var content_item = this.state.news_data.content.map(item => {
                if (item.type == 2) {
                    return <p><img alt="example" style={{display:'block',margin:'0 auto'}} id={item.data}
                                   src={item.data}/>
                    </p>
                } else {
                    return <p style={{textIndent:'2em'}}>{item.data}</p>
                }
            })


            content_frame = (
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="新闻类容">
                            <Row gutter={16}>
                                {content_item.map((item, index) => (
                                        <Col span={16} offset={4} key={index}>
                                            {item}
                                        </Col>
                                    )
                                )}
                            </Row>
                        </Form.Item>
                    </Col>
                </Row>
            )
        } else if (this.state.news_data.type == '2') { //视频
            content_frame = (
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="视频地址">
                            {getFieldDecorator('video', {
                                rules: [{required: true, message: '请输入视频地址'}],
                            })(<Input.Search
                                placeholder="请输入视频地址"
                                enterButton
                                onSearch={this.onBindVideoUrl.bind(this)}/>)}
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <video style={{display:'block',margin:'0 auto'}} src={this.state.video_url}
                               controls="controls"></video>
                    </Col>
                </Row>
            )
        } else if (this.state.news_data.type == '3') { // 图集

            content_frame = (
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="图集">
                            {getFieldDecorator('atlas', {
                                rules: [
                                    {
                                        required: true,
                                        message: '选择图集图片',
                                    },
                                ],
                                initialValue: this.state.selected_atlas_content,
                            })(
                                <Checkbox.Group style={{ width: '100%' }} onChange={this.onAtlasChange.bind(this)}>
                                    <Row gutter={16}>
                                        {this.state.atlas_content.map(img_item => (
                                            <Col span={16}
                                                 style={{marginTop:'8px'}}
                                                 key={img_item.data}>
                                                <Card
                                                    cover={<img alt="example" id={img_item.data} src={img_item.data} onClick={this.onAtlasSelect.bind(this)}/>}
                                                    extra={
                                                            <Checkbox
                                                                className={'CheckboxStyle'}
                                                                value={img_item.data}
                                                                checked={this.state.selected_atlas_content.contains(img_item.data)}/>
                                                            }
                                                >
                                                    <Meta
                                                        description={img_item.desc}
                                                    />
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Checkbox.Group>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
            )
        }


        return (
            <Form layout="vertical" hideRequiredMark>
                <Row>
                    <Form.Item
                        label={<span>新闻标题<a style={{marginLeft:'12px'}} href='jacascript:void(0)' onClick={this.openSourceUrl}>源地址</a></span>}>
                        {getFieldDecorator('title', {
                            rules: [{required: true, message: '请输入新闻标题'}],
                            initialValue: this.state.news_data.title
                        })(<Input placeholder="请输入新闻标题"/>)}
                    </Form.Item>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            label={<span>类型</span>}>
                            {getFieldDecorator('type', {
                                rules: [{required: true, message: '请输入新闻标题'}],
                                initialValue: this.state.news_data.type
                            })(
                                <Radio.Group onChange={this.handleTypeChange.bind(this)}>
                                    <Radio.Button value="1">图文</Radio.Button>
                                    <Radio.Button value="2">视频</Radio.Button>
                                    <Radio.Button value="3">图集</Radio.Button>
                                </Radio.Group>
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="平台">
                            {getFieldDecorator('platform', {
                                rules: [{required: true, message: '请选择一个平台'}],
                                initialValue: this.state.news_data.source_platform
                            })(
                                <Select placeholder="请选择一个平台">
                                    {Object.keys(platforms).map((key) => (
                                        <Option key={key} value={key}>{platforms[key]}</Option>
                                    ))}
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="发布时间">
                            {getFieldDecorator('pushTime', {
                                rules: [{required: true, message: '选择发布时间'}],
                                initialValue: moment('2015/01/01 12:11', "YYYY-MM-DD HH:mm")
                            })(
                                <DatePicker
                                    showTime
                                    format="YYYY-MM-DD HH:mm"
                                    getPopupContainer={trigger => trigger.parentNode}
                                />
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="简介">
                            {getFieldDecorator('description', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'please enter url description',
                                    },
                                ],
                                initialValue: this.state.news_data.des
                            })(<Input.TextArea autosize={{ minRows: 3, maxRows: 6 }}
                                               placeholder="please enter url description"/>)}
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            label="关联游戏">
                            {getFieldDecorator('reletivegame', {
                                rules: [{required: true, message: '请关联游戏'}],
                            })(
                                <AutoComplete
                                    dataSource={this.state.game_autocomplete}
                                    style={{ width: 200 }}
                                    onSelect={this.onSelectGame.bind(this)}
                                    onSearch={this.handleGameInput.bind(this)}
                                    placeholder="input here"/>
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={16}>
                        <Form.Item label="标签">
                            {getFieldDecorator('mark', {
                                rules: [{required: true, message: '请选择一个平台'}],
                                initialValue: this.state.news_data.source_platform
                            })(
                                <div>
                                    {this.state.news_tags.map((tag, index) => {
                                        const isLongTag = tag.length > 20;
                                        const tagElem = (
                                            <Tag key={tag} style={{marginBottom: '8px'}} closable={true}
                                                 afterClose={() => this.handleTagClose(tag)}>
                                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                            </Tag>
                                        );
                                        return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                                    })}
                                    {this.state.tagInputVisible && (
                                        <Input
                                            ref={this.saveTagInputRef.bind(this)}
                                            type="text"
                                            size="small"
                                            style={{ width: 78 }}
                                            value={this.state.tagInputValue}
                                            onChange={this.handleTagInputChange.bind(this)}
                                            onBlur={this.handleTagInputConfirm.bind(this)}
                                            onPressEnter={this.handleTagInputConfirm.bind(this)}
                                        />
                                    )}
                                    {!this.state.tagInputVisible && (
                                        <Tag
                                            onClick={this.showTagInput.bind(this)}
                                            style={{ background: '#fff', borderStyle: 'dashed' }}
                                        >
                                            <Icon type="plus"/> New Tag
                                        </Tag>
                                    )}
                                </div>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label={
                        <span>
                            新闻封面图
                            <a style={{marginLeft:'12px'}} href='jacascript:void(0)' onClick={this.showAllSurface.bind(this)}>
                                全部可用图片({this.state.news_data.image_collection.length})<Icon type={this.state.allSurfaceExpand ? 'up' : 'down'} />
                            </a>
                        </span>
                        }>
                            {getFieldDecorator('surface', {
                                rules: [
                                    {
                                        required: true,
                                        message: '选择封面图片',
                                    },
                                ],
                                initialValue: this.state.news_data.surface,
                            })(
                                <Checkbox.Group style={{ width: '100%' }} onChange={this.onSurfaceChange.bind(this)}>
                                    <Row gutter={16}>
                                        {this.state.news_data.image_collection.map(img_src => (
                                            (this.state.news_data.surface.contains(img_src) || this.state.allSurfaceExpand) && (
                                                <Col span={8}
                                                     style={{marginTop:'8px'}}
                                                     key={img_src}>
                                                    <Card
                                                        cover={<img alt="example" id={img_src} style={{height: '118px'}} src={img_src} onClick={this.onSurfaceSelect.bind(this)}/>}
                                                        extra={
                                                            <Checkbox
                                                                className={'CheckboxStyle'}
                                                                value={img_src}
                                                                checked={this.state.news_data.surface.contains(img_src)}
                                                                disabled={(!this.state.news_data.surface.contains(img_src)) && this.state.news_data.surface.length > 2}/>
                                                            }
                                                    >

                                                    </Card>
                                                </Col>
                                            )
                                        ))}
                                    </Row>
                                </Checkbox.Group>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                {content_frame}
                <div
                    style={{
                        width: '100%',
                        borderTop: '1px solid #e8e8e8',
                        padding: '10px 16px',
                        textAlign: 'right',
                        left: 0,
                        background: '#fff',
                        borderRadius: '0 0 4px 4px',
                    }}
                >
                    <Button
                        style={{
                            marginRight: 8,
                        }}
                        onClick={this.onCloseDrawer.bind(this)}
                    >
                        Cancel
                    </Button>
                    <Button onClick={this.onCloseDrawer.bind(this)} type="primary">
                        Submit
                    </Button>
                </div>
            </Form>
        )
    }
}

class PageNewsAudit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newsdata: {},
            drawerVisible: true,
            selectnewsid: ''
        }

        this.getNewsDetail();
        newsAuditStateStore.listen(this.selectNewsAudit.bind(this))
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

    onDrawerClose() {
        this.setState({
            drawerVisible: false,
        });
    };

    getNewsDetail() {
        var test_url = '/api/getNews'
        var reqData = ''
        Query.get(test_url, reqData, function (data) {
            console.log(data)
            //     this.setState({loading: false});
            if (data && data.data) {
                this.setState(
                    {newsdata: data});
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

    selectNewsAudit(news_id) {
        this.setState({
            drawerVisible: true,
            selectnewsid: news_id
        })
    }

    render() {
        const listData = !this.isObjectEmp(this.state.newsdata) ? this.state.newsdata.data : [];
        const data_total = !this.isObjectEmp(this.state.newsdata) ? this.state.newsdata.total : 0;

        var newsData = listData

        const AuditForm = Form.create()(AuditDetailForm);


        return (
            <div id="pageNewsAudit">
                <div className='queryHeader'>
                    <div>新闻审核</div>

                    <div className="show_audit_content">
                        显示已审核过内容:
                        <Switch checkedChildren="开" unCheckedChildren="关"
                                style={{marginLeft: '10px'}}
                                onChange={this.onShowAudit.bind(this)}/>
                    </div>
                </div>
                {
                    newsData.map((item, idx)=>
                        <NewsItem news={item} key={item.id}/>
                    )
                }

                <Pagination showQuickJumper defaultCurrent={1} pageSize={10} total={data_total}
                            onChange={this.onChange.bind(this)}
                            hideOnSinglePage
                            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                            style={{marginTop: '20px', marginBottom: '50px', marginLeft: '50px'}}/>,

                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    width={720}
                    closable={true}
                    onClose={this.onDrawerClose.bind(this)}
                    visible={this.state.drawerVisible}
                >
                    <AuditForm onClose={this.onDrawerClose.bind(this)}/>

                </Drawer>
            </div>
        )

    }
}

export default PageNewsAudit;