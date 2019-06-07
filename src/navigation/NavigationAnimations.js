import { Animated, Easing } from 'react-native'

export const SlideInUp = ({ transitionSpec = {} } = {}) => () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      ...transitionSpec,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene, index, scenes } = sceneProps

      const thisSceneIndex = scene.index
      const { initHeight, initWidth } = layout

      const translateY = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [initHeight, 0]
      })

      const lastSceneIndex = scenes[scenes.length - 1].index

      if (lastSceneIndex - index > 1) {
        if (scene.index === index) return
        if (scene.index !== lastSceneIndex) return { opacity: 0 }
        return { transform: [{ translateY }] }
      }

      return { transform: [{ translateY }] }
    }
  }
}

export const FadeInOut = ({
  transitionSpec = {},
  backgroundColor = '#000'
} = {}) => () => ({
  transitionSpec: {
    duration: 1000,
    easing: Easing.linear,
    timing: Animated.timing,
    ...transitionSpec,
    useNativeDriver: true
  },
  screenInterpolator: sceneProps => {
    console.log('sceneProps: ', sceneProps)
    const { position, scene, scenes, index: toIndex } = sceneProps

    const thisIndex = scene.index
    const lastSceneIndex = scenes[scenes.length - 1].index

    const isNavigatingMoreThanOneScreen = lastSceneIndex - toIndex > 1
    const isTransitionScreen = scene.index !== lastSceneIndex
    const isDestinationScreen = scene.index === toIndex

    return {
      opacity: position.interpolate({
        inputRange: [thisIndex - 0.25, thisIndex, thisIndex + 0.25],
        outputRange: [0, 1, 0],
        extrapolate: 'clamp'
      })
    }
  },
  containerStyle: {
    backgroundColor
  }
})
