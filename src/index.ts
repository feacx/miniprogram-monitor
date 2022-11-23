import { init } from "./bootstrap/init";

/**
 * @description main into
 * @author Fea.cx
 * @datetime 2022-11-22
 */
export class Application {
  constructor() {
    console.log("出生地阿斯达asddfsdf");
  }
  /**
   * @description 初始化函数
   */
  init() {
    Promise.all([this.getNetworkType, this.getSystemInfo])
      .then((res) => {
        console.log("成功了", res);
        console.log("asdasd", getApp());
      })
      .catch((err) => {
        console.log("失败了", err);
      });
  }

  static setParam() {
    console.log("阿斯达啊");
  }

  getSystemInfo() {
    return new Promise((resolve, reject) => {
      wx.getSystemInfo({
        success(e) {
          resolve(e);
        },
        fail(e) {
          reject(e);
        },
      });
    });
  }

  getNetworkType() {
    return new Promise((resolve, reject) => {
      wx.getNetworkType({
        success(e) {
          resolve(e);
        },
        fail(e) {
          reject(e);
        },
      });
    });
  }
}

init();
