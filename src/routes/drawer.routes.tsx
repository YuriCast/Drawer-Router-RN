import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator} = createDrawerNavigator();

import { ScreenA } from '../screens/Login';
import { ScreenB } from '../screens/Upload';
import { ScreenC } from '../screens/Cadastro';

export function DrawerRoutes(){
    return(
        <Navigator
        >
            <Screen
                name='Login'
                component={ScreenA}
                options={{
                    drawerLabel: 'Login',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="home" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='screenC'
                component={ScreenC}
                options={{
                    drawerLabel: 'Cadastro',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    drawerLabel: 'Upload',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="logout" 
                            size={22}
                        />
                }}
            />
        </Navigator>
    )
}