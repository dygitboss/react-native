import React, { FC } from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface Props {
  color?: string;
  height?: number;
  width?: number;
}

const ClockIcon: FC<Props> = ({ color, height, width }) => (
  <View style={{ height, width, overflow: "hidden" }}>
    <Svg height={height} width={width} viewBox="0 0 21.914 21.914">
      <Path
        transform="translate(10.957 18.713)"
        d="M0,3.2A11.031,11.031,0,0,0,10.957-7.756,11.029,11.029,0,0,0,.011-18.713a.791.791,0,0,0-.849.9v4.168a.8.8,0,0,0,.784.838.8.8,0,0,0,.795-.838v-3.212a9.083,9.083,0,0,1,8.379,9.1A9.087,9.087,0,0,1,0,1.375,9.089,9.089,0,0,1-9.131-7.756a9.059,9.059,0,0,1,2.17-5.887.958.958,0,0,0-.011-1.3.863.863,0,0,0-1.343.129,10.872,10.872,0,0,0-2.643,7.058A11.038,11.038,0,0,0,0,3.2ZM1.719-6.1a1.759,1.759,0,0,0-.344-2.793l-5.683-3.964a.51.51,0,0,0-.72.72l3.964,5.683A1.751,1.751,0,0,0,1.719-6.1Z"
        fill={color}
      />
    </Svg>
  </View>
);

ClockIcon.defaultProps = {
  width: 21.914,
  height: 21.914,
  color: "#e0e0e0",
};

export default ClockIcon;
