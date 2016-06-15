/**
 * Created by guangtian on 16/6/8.
 * 常用变量
 */
import React, {
    PixelRatio,
    Dimensions
} from 'react-native';

var CUSTOM_VAR = {
    ONE_PIXEL: 1 / PixelRatio.get(),        //最小宽度
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    SCALE: Dimensions.get('window').width / 320,
};

export default CUSTOM_VAR;