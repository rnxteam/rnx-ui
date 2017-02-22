import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import {
  Dropper,
} from 'rnx-ui/Drop';

const styles = StyleSheet.create({
  dropper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

function DropperDefault(props) {
  return (
    <Dropper
      style={{
        height: 20,
        width: 20,
        backgroundColor: '#30b9a3',
      }}
      startPosition={props.startPosition}
      endPosition={props.endPosition}
      width={20}
      height={20}
      onEnd={props.onEnd}
    />
  );
}
DropperDefault.propTypes = Dropper.propTypes;

function DropperImg(props) {
  return (
    <Dropper
      style={[styles.dropper, {
        overflow: 'hidden',
      }]}
      startPosition={props.startPosition}
      endPosition={props.endPosition}
      width={50}
      height={50}
      onEnd={props.onEnd}
    >
      <Image
        source={{
          uri: 'http://tva1.sinaimg.cn/crop.0.0.217.217.180/4c8b519djw8fa45br0vpxj2062062q33.jpg',
        }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
        }}
      />
    </Dropper>
  );
}
DropperImg.propTypes = Dropper.propTypes;

function DropperScale(props) {
  return (
    <Dropper
      style={[styles.dropper, {
        backgroundColor: '#ac51c5',
      }]}
      startPosition={props.startPosition}
      endPosition={props.endPosition}
      width={50}
      height={50}
      scale={props.scale}
      onEnd={props.onEnd}
    >
      <Text
        style={styles.text}
      >
        Scale
      </Text>
    </Dropper>
  );
}
DropperScale.propTypes = Dropper.propTypes;

function DropperNoRotate(props) {
  return (
    <Dropper
      style={[styles.dropper, {
        backgroundColor: '#a99313',
      }]}
      startPosition={props.startPosition}
      endPosition={props.endPosition}
      width={50}
      height={50}
      rotate={0}
      onEnd={props.onEnd}
    >
      <Text
        style={styles.text}
      >
        不转
      </Text>
    </Dropper>
  );
}
DropperNoRotate.propTypes = Dropper.propTypes;

function DropperDuration(props) {
  return (
    <Dropper
      style={[styles.dropper, {
        backgroundColor: '#ff4f4f',
      }]}
      duration={props.duration}
      startPosition={props.startPosition}
      endPosition={props.endPosition}
      width={50}
      height={50}
      onEnd={props.onEnd}
    >
      <Text
        style={styles.text}
      >
        Duration
      </Text>
    </Dropper>
  );
}
DropperDuration.propTypes = Dropper.propTypes;

function DropperJumpHeight(props) {
  return (
    <Dropper
      style={[styles.dropper, {
        backgroundColor: '#7c40ad',
      }]}
      jumpHeight={props.jumpHeight}
      startPosition={props.startPosition}
      endPosition={props.endPosition}
      width={50}
      height={50}
      onEnd={props.onEnd}
    >
      <Text
        style={styles.text}
      >
        JumpHeight
      </Text>
    </Dropper>
  );
}
DropperJumpHeight.propTypes = Dropper.propTypes;

function DropperNoEndAnimation(props) {
  return (
    <Dropper
      style={[styles.dropper, {
        backgroundColor: '#866ed8',
      }]}
      jumpHeight={120}
      startPosition={props.startPosition}
      endPosition={props.endPosition}
      width={50}
      height={50}
      onEnd={props.onEnd}
      endAnimation={false}
    >
      <Text
        style={styles.text}
      >
        无回弹
      </Text>
    </Dropper>
  );
}
DropperNoEndAnimation.propTypes = Dropper.propTypes;

export {
  DropperDefault,
  DropperImg,
  DropperScale,
  DropperNoRotate,
  DropperDuration,
  DropperJumpHeight,
  DropperNoEndAnimation,
};
