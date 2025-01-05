import { BigNumber } from "bignumber.js";
BigNumber.config({ EXPONENTIAL_AT: [-100, 100] });

/**
 * 函数节流
 * @param {*} fn
 * @param {*} gapTime
 */
export const throttle = (fn: any, gapTime: any) => {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1000;
  }

  let _lastTime = 0;
  return function () {
    let _nowTime = +new Date();
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments);
      _lastTime = _nowTime;
    }
  };
};

// 转数字
export const toNum = (val: number | BigNumber | string) => {
  if (val === null || val === undefined) return 0;
  if (typeof val === "string") {
    val = val.replace(/[^0-9.-]/g, "").replace(/(\..*)\./g, "");
    if (!val) return 0;
  }
  return new BigNumber(val).toNumber();
};

// 乘法
export const times = (
  x: number | BigNumber | string,
  y: number | BigNumber | string
) => {
  x = toNum(x);
  y = toNum(y);
  return new BigNumber(x).times(y);
};

// 除法
export const div = (
  x: number | string | BigNumber,
  y: number | string | BigNumber
) => {
  x = toNum(x);
  y = toNum(y);
  return new BigNumber(x).dividedBy(y);
};

// 加法
export const plus = (
  x: number | BigNumber | string,
  y: number | BigNumber | string
) => {
  x = toNum(x);
  y = toNum(y);
  return new BigNumber(x).plus(y);
};

// 减法
export const minus = (
  x: number | BigNumber | string,
  y: number | BigNumber | string
) => {
  x = toNum(x);
  y = toNum(y);
  return new BigNumber(x).minus(y);
};

/**
 * 格式化数字
 * @param num
 * @param decimalPlaces 保留几位小数 传入后会自动补零
 * @param roundingMode 舍入模式 默认向负无穷方向对齐3 所有值： 0 | 2 | 1 | 3 | 4 | 5 | 6 | 7 | 8
 * @returns string
 */
export const toFormat = (
  num: number | string | BigNumber,
  decimalPlaces?: number,
  roundingMode?: BigNumber.RoundingMode,
  format?: BigNumber.Format
) => {
  if (!num) return "";
  if (!(num instanceof BigNumber)) {
    num = toNum(num);
  }
  const fmt = {
    decimalSeparator: ".",
    groupSeparator: ",",
    groupSize: 3,
    secondaryGroupSize: 0,
    ...format,
  };
  return new BigNumber(num).toFormat(
    decimalPlaces || 0,
    roundingMode || BigNumber.ROUND_FLOOR,
    fmt
  );
};