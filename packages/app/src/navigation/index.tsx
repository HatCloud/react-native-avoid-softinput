import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { BottomSheetExample } from '../screens/BottomSheetExample';
import { CustomAnimationConfigModuleExample } from '../screens/CustomAnimationConfigModuleExample';
import { CustomAnimationConfigViewExample } from '../screens/CustomAnimationConfigViewExample';
import { FormExample } from '../screens/FormExample';
import { HomeScreen } from '../screens/HomeScreen';
import { ModalExample } from '../screens/ModalExample';
import { ReanimatedExample } from '../screens/ReanimatedExample';
import { StickyFooterExample } from '../screens/StickyFooterExample';

import { ROUTES } from './routes';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation: React.FC = () => {
  return <Stack.Navigator>
    <Stack.Screen name={ROUTES.Home} component={HomeScreen} />
    <Stack.Screen name={ROUTES.BottomSheet} component={BottomSheetExample} />
    <Stack.Screen name={ROUTES.CustomAnimationConfigModule} component={CustomAnimationConfigModuleExample} />
    <Stack.Screen name={ROUTES.CustomAnimationConfigView} component={CustomAnimationConfigViewExample} />
    <Stack.Screen name={ROUTES.Form} component={FormExample} />
    <Stack.Screen name={ROUTES.Modal} component={ModalExample} />
    <Stack.Screen name={ROUTES.Reanimated} component={ReanimatedExample} />
    <Stack.Screen name={ROUTES.StickyFooter} component={StickyFooterExample} />
  </Stack.Navigator>;
};
