import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Welcome, QRScanScreen, AppointmentScreen, CriteriaScreen, DataTransferScreen, EvaluationAfterScreen,
    EvaluationBeforeScreen, ExplanationTextScreen, ExplanationVideoScreen, IntensityAfterScreen, ResultScreen,
    GratulationScreen, HowScreen, IntensityBeforeScreen, TrainingScreen, TrainingStartScreen, WhereScreen,
    EvaluationScreen, EvaluationYawScreen, EvaluationRollScreen, ProfileScreen} from "./index";
import TabNavigator from "./tabs";



const Stack = createStackNavigator();


function Layout() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="screens/welcome"
                component={Welcome}
                options={{
                    headerTitle: '???',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/appointment"
                component={AppointmentScreen}
                options={{
                    headerTitle: 'Termin planen',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/criteria"
                component={CriteriaScreen}
                options={{
                    headerTitle: 'Ausschlusskriterien',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/dataTransfer"
                component={DataTransferScreen}
                options={{
                    headerTitle: 'Daten übermitteln',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/evaluationAfter"
                component={EvaluationAfterScreen}
                options={{
                    headerTitle: 'Evaluierungsübung NACHHER',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/evaluationBefore"
                component={EvaluationBeforeScreen}
                options={{
                    headerTitle: 'Evaluierungsübung VORHER',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/explanationText"
                component={ExplanationTextScreen}
                options={{
                    headerTitle: 'Erklärung lesen',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/explanationVideo"
                component={ExplanationVideoScreen}
                options={{
                    headerTitle: 'Erklärvideo',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/gratulation"
                component={GratulationScreen}
                options={{
                    headerTitle: 'Gratulation',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/how"
                component={HowScreen}
                options={{
                    headerTitle: 'Wie tut es weh?',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/intensityBefore"
                component={IntensityBeforeScreen}
                options={{
                    headerTitle: 'Wie stark tut es weh? VORHER',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/intensityAfter"
                component={IntensityAfterScreen}
                options={{
                    headerTitle: 'Wie stark tut es weh? NACHHER',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/resultEvaluation"
                component={ResultScreen}
                options={{
                    headerTitle: 'Ergebnisanzeige Evaluierung',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/training"
                component={TrainingScreen}
                options={{
                    headerTitle: 'Training',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/where"
                component={WhereScreen}
                options={{
                    headerTitle: 'Wo tut es weh?',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/QRScan"
                component={QRScanScreen}
                options={{
                    headerTitle: 'QR-Code scannen',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />

            <Stack.Screen
                name="screens/EvaluationScreen"
                component={EvaluationScreen}
                options={{
                    headerTitle: 'Evaluation',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="screens/profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profil',
                    headerShown: true,
                    headerTitle: 'Profil Screen',
                }}
            />
            <Stack.Screen
                name="screens/trainingStart"
                component={TrainingStartScreen}
                options={{
                    tabBarLabel: 'Training Start',
                    headerShown: true,
                    headerTitle: 'Training Start',
                }}
            />
            <Stack.Screen
                name="screens/evaluationYaw"
                component={EvaluationYawScreen}
                options={{
                    tabBarLabel: 'EvaluationYawScreen',
                    headerShown: false,
                    headerTitle: 'EvaluationYawScreen',
                }}
            />
            <Stack.Screen
                name="screens/evaluationRoll"
                component={EvaluationRollScreen}
                options={{
                    tabBarLabel: 'EvaluationRollScreen',
                    headerShown: false,
                    headerTitle: 'EvaluationRollScreen',
                }}
            />
            <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Layout;