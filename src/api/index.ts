import axios from "axios";

interface Login {
  phone: number | string;
  password: string;
}
export const doLogin = (params: Login) => {
  return axios.request({
    url: "/login/cellphone",
    method: "post",
    params,
  });
};

//定义调用banner的接口

export const getBanner = ()=>{
    return axios.request({
        url:'/banner',
        method:"get",
    })
}
