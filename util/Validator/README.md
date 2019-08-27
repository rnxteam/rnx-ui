# Validator

表单校验工具

## Example

```js
/**
 * 校验器
 *
 * @method collect
 *   用来收集基础表单组件的校验方法，通常为基础表单组件的 collectValidate 属性的值。
 * @method run
 *   用来运行结果，返回一个对象。
 *   如果运行正确，返回对象的 `err` 属性值为 0，返回对象的 `data` 属性值为包含所有收集表单的名字和值的映射；
 *   如果运行错误，返回对象的 `err` 属性值为 1，返回对象的 `data` 属性值为出错信息。
 */

 import React from 'react';
 import {
   StyleSheet,
   ScrollView,
 } from 'react-native';
 import {
   PView,
 } from 'rnplus';
 import PhoneNumInput from 'rnx-ui/PhoneNumInput';
 import SmsCaptchaInput from 'rnx-ui/SmsCaptchaInput';
 import Btn from 'rnx-ui/Btn';
 import Validator from 'rnx-ui/util/Validator';
 import {
   All,
   NavBar,
 } from '../../component';

 const styles = StyleSheet.create({
   scrollView: {
     paddingHorizontal: 10,
     paddingTop: 10,
   },
   btn: {
     marginTop: 10,
   },
 });

 class RnxUiValidator extends PView {
   constructor(props) {
     super(props);

     this.onPress = this.onPress.bind(this);
     // 验证器初始化
     const validator = new Validator();
     this.validator = validator;
     this.collectValidate = validator.collect;
   }
   onPress() {
     const res = this.validator.run();
     console.log(res);
   }
   render() {
     return (
       <All>
         <NavBar title="Validator" />
         <ScrollView style={styles.scrollView}>
           <PhoneNumInput
             collectValidate={this.collectValidate}
             name="HANDSOME_NAME"
             readableName="帅气的名字"
           />
           <SmsCaptchaInput collectValidate={this.collectValidate} />
           <Btn
             style={styles.btn}
             onPress={this.onPress}
           />
         </ScrollView>
       </All>
     );
   }
 }
```
