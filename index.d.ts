// 深度图数据结构
interface IDepthItem {
  price: number;
  amount: number;
  totalAmount: number;
}
// 深度图配置项
interface IDepthItemPropsOptions {
  width: number, // 总宽
  height: number, // 总高
  marginX: number, // 右侧数量宽度
  marginY: number, // 底部价格高度
  fontSize: number, // // 坐标轴字体大小
  fontColor: string, // 坐标轴字体颜色
  bidsColor: string, // 买盘颜色
  asksColor: string, // 卖盘颜色
  bidsBgColor: string, // 买盘背景颜色
  asksBgColor: string, // 卖盘背景颜色
  dottedBgColor: string, // 虚线背景色
  axisColor: string, // 中线及刻度线颜色
  tipFontSize: number, // 提示字体大小
  tipColor: string, // 飘窗字体颜色
}