import React from 'react';

import { StackNavigator } from 'react-navigation';
import ScreenOne from './Login';
import ScreenTwo from './Beranda';


const App = StackNavigator({
    ScreenOne: { screen: ScreenOne},
    ScreenTwo: { screen: ScreenTwo}
})

export default App;