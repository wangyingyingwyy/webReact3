import React, { Component } from 'react'
import { NavBar, Icon ,Tabs,Carousel,Grid} from 'antd-mobile';
import '../app.css';
import { Flex, WhiteSpace } from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder1`} {...restProps}>
      <img src="./img/zhuo.png" style={{width:"100%",height:"100%"}}/>
  </div>
);
const PlaceHolder2 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>
        <img src="./img/bei.png" style={{width:"100%",height:"100%"}}/>
        <span>顺顺工艺欧式风格塑料外框</span>
    </div>
  );
export default class AppHome extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: ['3', 'shou2', 'shou3'],
          });
        }, 100);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                    ]}
                >商城</NavBar>
                <div style={{position:'relative'}}>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.data.map(val => (
                            <a
                            key={val}
                            href=""
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                src={`./img/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                    </Carousel>
                    <div style={{width:'100%',height:'45px',position:'absolute',top:'0',backgroundColor:'#000',opacity:'0.5'}}>
                        <input placeholder="请输入关键字搜索" style={{width:'57%',height:'30px',marginLeft:'21%',marginTop:'2%',borderRadius:'5px'}}/>
                    </div>
                </div>
                <div style={{backgroundColor:'#fff',width:'100%'}}>
                    <div className="flex-container1">
                    <Flex>
                        <Flex.Item><PlaceHolder /><span style={{paddingLeft:'20px'}}>桌</span></Flex.Item>
                        <Flex.Item><PlaceHolder /><span style={{paddingLeft:'20px'}}>床</span></Flex.Item>
                        <Flex.Item><PlaceHolder /><span style={{paddingLeft:'20px'}}>椅</span></Flex.Item>
                        <Flex.Item><PlaceHolder /><span style={{paddingLeft:'20px'}}>几</span></Flex.Item>
                        <Flex.Item><PlaceHolder /><span style={{paddingLeft:'20px'}}>柜</span></Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item><PlaceHolder /><span style={{paddingLeft:'15px'}}>书架</span></Flex.Item>
                        <Flex.Item><PlaceHolder /><span style={{paddingLeft:'15px'}}>沙发</span></Flex.Item>
                        <Flex.Item><PlaceHolder />家居用品</Flex.Item>
                        <Flex.Item><PlaceHolder />户外家具</Flex.Item>
                        <Flex.Item><PlaceHolder />全部分类</Flex.Item>
                    </Flex>
                    </div>
                </div>
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
                        </Flex>
                    </div>
                </div>
            </div>
        )
    }
}
