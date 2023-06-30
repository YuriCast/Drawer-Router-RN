import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator} = createNativeStackNavigator();

import { ScreenA } from '../screens/Login';
import { ScreenB } from '../screens/Upload';

export function StackRoutes(){
    return(
        <Navigator
            /*screenOptions={{
                headerShown: false
            }}*/
        >
            <Screen
                name='screenA'
                options={{
                    title: 'Tela A',
                    headerShown: false
                }}
                component={ScreenA}
            />
            <Screen
                name='screenB'
                options={{
                    title: 'Tela B',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={ScreenB}
            />
        </Navigator>
    )
}