import {Tabs} from 'expo-router';
import {FontAwesome5} from '@expo/vector-icons';

export default () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: 'Home',
                    headerTitle: 'Home Screen',
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="home" color={color} size={size}/>
                    ),
                }}
            />

            <Tabs.Screen
                name="EvaluationScreen"
                options={{
                    tabBarLabel: 'Evaluation',
                    headerTitle: 'Evaluation Screen',

                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="camera" color={color} size={size}/>
                    ),
                }}
            />

            <Tabs.Screen
                name="barcode"
                options={{
                    tabBarLabel: 'Scan QR Code',
                    headerTitle: 'Scan Barcode',
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="qrcode" color={color} size={size}/>
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: 'Profil',
                    headerTitle: 'Profil Screen',
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="user" color={color} size={size}/>
                    ),
                }}
            />

        </Tabs>
    );
};
