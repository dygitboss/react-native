import React, {FC} from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  height?: number;
  width?: number;
}

const ArrowLeftIcon: FC<Props> = ({
  color, height, width,
}) => (
  <View style={{ height, width, overflow: 'hidden' }}>
    <Svg
      height={height}
      width={width}
      viewBox="0 0 11.965 20.789"
    >
      <Path
        transform="translate(-2.988 18.855)"
        d="M12.586,1.535A1.392,1.392,0,0,0,14.953.551a1.409,1.409,0,0,0-.422-1.008l-8.2-8.016,8.2-7.992a1.429,1.429,0,0,0,.422-1.008,1.373,1.373,0,0,0-1.395-1.383,1.327,1.327,0,0,0-.961.4L3.48-9.551a1.455,1.455,0,0,0-.492,1.09,1.48,1.48,0,0,0,.48,1.078Z"
        fill={color}
      />
    </Svg>
  </View>
);

ArrowLeftIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
};

ArrowLeftIcon.defaultProps = {
  width: 11.965,
  height: 20.789,
  color: '#313946'
};

export default ArrowLeftIcon;
