import React, { Component } from 'react'
import { NavBar, Icon ,Tabs,Carousel} from 'antd-mobile';
import { Flex, WhiteSpace } from 'antd-mobile';
const tabs = [
    { title: '推荐'},
    { title: '冬季'},
    { title: '宜家'},
    { title: '小清新'},
    { title: '小户型'},
    { title: '个性色彩'},
  ];
  const PlaceHolder2 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps} style={{position:'relative'}}>
        <img src="./img/shou3.png" style={{width:"100%",height:"150px"}}/>
        <img src="./img/tou.png" style={{height:'55px',top:'70%',left:'3%',float:'left',position:'absolute'}}/>
        <span style={{marginLeft:'30%',marginTop:'20px',lineHeight:'40px'}}>橙色律动</span>
        <span className='iconfont icon-aixin' style={{marginLeft:'8%',marginTop:'20px'}}></span>
    </div>
  );
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                    ]}
                >灵感</NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{width:'100%'}}>
                        <div className="flex-container">
                            <Flex>
                                <Flex.Item><PlaceHolder2 /></Flex.Item>
                                <Flex.Item><PlaceHolder2 /></Flex.Item>
                            </Flex>
                            <WhiteSpace size="lg" />
                            <Flex>
                                <Flex.Item><PlaceHolder2 /></Flex.Item>
                                <Flex.Item><PlaceHolder2 /></Flex.Item>
                            </Flex>
                            <WhiteSpace size="lg" />
                            <Flex>
                                <Flex.Item><PlaceHolder2 /></Flex.Item>
                                <Flex.Item><PlaceHolder2 /></Flex.Item>
                            </Flex>
                            <WhiteSpace size="lg" />
                            <Flex>
                                <Flex.Item><PlaceHolder2 /></Flex.Item>
                                <Flex.Item><PlaceHolder2 /></Flex.Item>
                            </Flex>
                        </div>
                    </div>
                    <div style={{height: '150px'}}>
                        Content of second tab
                    </div>
                    <div style={{ height: '150px'}}>
                        Content of third tab
                    </div>
                    <div style={{ height: '150px'}}>
                        Content of four tab
                    </div>
                    <div style={{ height: '150px'}}>
                        Content of four tab
                    </div>
                    <div style={{ height: '150px'}}>
                        Content of four tab
                    </div>
                </Tabs>
            </div>
        )
    }
}
