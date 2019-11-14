import React, { Component } from 'react'
import { NavBar, Icon ,Tabs,Carousel} from 'antd-mobile';
import { Flex, WhiteSpace } from 'antd-mobile';
import '../app.css';
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>
        <img src="./img/hot.jpg" style={{width:'100%',height:'100%'}}/>
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
            data: ['shou1', 'shou2', 'shou3'],
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
                >住吧家居</NavBar>
                <div>
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
                </div>
                <div className="flex-container">
                    <Flex>
                        <Flex.Item><PlaceHolder /></Flex.Item>
                        <Flex.Item><PlaceHolder /></Flex.Item>
                        <Flex.Item><PlaceHolder /></Flex.Item>
                    </Flex>
                </div>
                <div style={{height:'30px',width:'100%',backgroundColor:"#fff"}}>
                    <span style={{borderLeft:'3px solid #3fcccb',paddingLeft:'3%',lineHeight:'30px'}}>热门推荐</span>
                </div>
                <div>
                    <img src="./img/2.png" style={{width:'100%',height:'100%'}}/>
                </div>
                <div>
                    <img src="./img/2.png" style={{width:'100%',height:'100%'}}/>
                </div>
            </div>
        )
    }
}
