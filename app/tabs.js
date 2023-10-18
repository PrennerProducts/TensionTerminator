import {ProfileScreen, Welcome} from "./index";
import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"screens/welcome"} component={Welcome} />
            <Tab.Screen name={"screens/profile"} component={ProfileScreen}  />
        </Tab.Navigator>
    );
}

export default TabNavigator;