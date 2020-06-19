import React, {FC} from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  height?: number;
  width?: number;
}

const ArrowRightIcon: FC<Props> = ({
  color, height, width,
}) => {

  return (
    <View style={{ height, width, overflow: 'hidden' }}>
      <Svg
        height={height}
        width={width}
        viewBox="0 0 9.757 17.516"
      >
        <Path
          transform="translate(-11876.811 -11211.802)"
          d="M11878.225,11213.216l7.344,7.344-7.344,7.344"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </Svg>
    </View>
  );
};

ArrowRightIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
};

ArrowRightIcon.defaultProps = {
  width: 9.757,
  height: 17.516,
  color: '#313946'
};

export default ArrowRightIcon;
