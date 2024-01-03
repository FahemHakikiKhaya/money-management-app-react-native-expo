import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  IconElement,
  IconProps,
} from '@ui-kitten/components';

const HomeIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="home" />
);

const CartIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="shopping-cart-outline" />
);

const ChartIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="bar-chart-outline" />
);

const BottomNavigationBar: React.FC<BottomTabBarProps> = ({
  navigation,
  state,
}) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) =>
        navigation.navigate(state.routeNames[index])
      }
    >
      <BottomNavigationTab title="Home" icon={HomeIcon} />
      <BottomNavigationTab title="Transaction" icon={CartIcon} />
      <BottomNavigationTab title="Statistics" icon={ChartIcon} />
    </BottomNavigation>
  );
};

export default BottomNavigationBar;
