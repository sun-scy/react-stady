import React, { Component } from "react";
import { getBanner } from "../api";
type Props = {};

type State = {
  opacity: number;
};

export default class Home extends Component<Props, State> {
  public timer: any;
  state = {
    opacity: 1,
  };
  setTitie = () => {};

  getData = async () => {
    let data = await getBanner();

    console.log(data, "banneer");

    //...发送
    console.log("response");
  };

  

  componentDidMount() {
    //组件挂载时执行

    //echarts
    //componentDidMount
    //1 可以获取真实dom
    //2 发送网络请求

    let hot = document.querySelector(".hot") as HTMLSpanElement;
    document.querySelectorAll('.hot')
    document.getElementById('wrap')
    // document.getElementsByClassName()
    document.getElementsByName('div')
    

    // hot.innerText = "今天天气真冷";

    this.getData();

    this.timer = setInterval(() => {
      if (this.state.opacity <= 0) {
        this.setState({
          opacity: 1,
        });
      } else {
        this.setState({
          opacity: this.state.opacity - 0.1,
        });
      }
    }, 100);
  }


  componentWillUnmount() {
    //清楚定时器
    clearInterval(this.timer);
  }

  //render n + 1
  render() {
    let { opacity } = this.state;

    return (
      <div id="wrap">
        <span className="hot" style={{ opacity }}>
          今天天气真热
        </span>
        {/* <div onClick={this.dead}>消失</div> */}
      </div>
    );
  }
}

// 文字的呼吸效果
// 卸载页面
