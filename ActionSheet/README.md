# ActionSheet

**上拉按钮组**

## Demo

<image src="http://wx4.sinaimg.cn/mw690/4c8b519dly1feq4asyl44g20hs0wsguv.gif" width="320" />

## Example

```js
import ActionSheet from 'rnx-ui/ActionSheet';

function Example(props) {
  return (
    <ActionSheet
      visible={this.state.visible}
      onClose={this.hide}
      btnList={[{
        text: '默认',
        onPress: this.hide,
      }, {
        text: '相册',
        onPress: this.hide,
      }]}
    />
  );
}
```

## Props

```js
ActionSheet.propTypes = {
  // 显示开关
  visible: Sheet.propTypes.visible,
  // 按钮组
  btnList: PropTypes.arrayOf(PropTypes.shape({
    // 按钮样式
    style: View.propTypes.style,
    // 按钮文字
    text: PropTypes.string,
    // 按钮文字样式
    textStyle: Text.propTypes.style,
    // 按钮点击回调
    onPress: PropTypes.func,
  })),
  // 统一按钮样式
  btnStyle: View.propTypes.style,
  // 统一按钮文字样式
  btnTextStyle: Text.propTypes.style,
  // 取消按钮样式
  cancelBtnStyle: View.propTypes.style,
  // 取消按钮文字
  cancelBtnText: PropTypes.string,
  // 取消按钮文字样式
  cancelBtnTextStyle: Text.propTypes.style,
  // 遮罩层样式
  overlayStyle: Sheet.propTypes.overlayStyle,
  // Overlay 动画时长
  overlayAnimationDuration: PropTypes.number,
  // 关闭点击事件回调
  onClose: Sheet.propTypes.onPressOverlay,
  // 动画时长
  duration: Sheet.propTypes.duration,
  // 显示回调
  onShow: PropTypes.func,
  // 隐藏回调
  onHide: PropTypes.func,
  // 自定义样式
  style: View.propTypes.style,
  // 按钮点击透明度变化
  underlayColor: PropTypes.string,
};
ActionSheet.defaultProps = {
  visible: false,
  btnList: [{
    style: null,
    text: '确定',
    textStyle: null,
    onPress: NOOP,
  }],
  btnStyle: null,
  btnTextStyle: null,
  cancelBtnStyle: null,
  cancelBtnText: '取消',
  cancelBtnTextStyle: null,
  overlayStyle: null,
  onClose: NOOP,
  duration: 200,
  style: null,
  underlayColor: '#eee',
};
```
