import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from "./tabs";

function Layout() {
    return (
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
    );
}

export default Layout;