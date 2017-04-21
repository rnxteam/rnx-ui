/**
 * @component Validator
 * @version 0.17.0
 * @description 表单校验工具
 * @instructions {instruInfo: ./util/Validator/Validator.md}
 */

class Validator {
  constructor() {
    this.collect = this.collect.bind(this);
  }
  validateList = [];
  collect(validate) {
    this.validateList.push(validate);
  }
  run() {
    const res = {
      err: 0,
      data: {},
    };
     /**
      * @method collect
      * @description 用来收集基础表单组件的校验方法，通常为基础表单组件的 collectValidate 属性的值。
      */
     /**
      * @method run
      * @description 用来运行结果，返回一个对象。
      * 如果运行正确，返回对象的 `err` 属性值为 0，返回对象的 `data` 属性值为包含所有收集表单的名字和值的映射；
      * 如果运行错误，返回对象的 `err` 属性值为 1，返回对象的 `data` 属性值为出错信息。
      */
    this.validateList.some((item) => {
      const itemRes = item();

      // 通过校验
      if (itemRes.err === 0) {
        res.data[itemRes.name] = itemRes.value;
        return false;
      }

      // 未通过校验
      res.err = 1;
      res.data = itemRes;
      return true;
    });

    return res;
  }
}

export default Validator;
