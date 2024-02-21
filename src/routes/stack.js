import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (

<Stack.Navigator initialRouteName='Home'>
    <Stack.Screen
        name= 'Home'
        component={Home}
        options={{
            title: 'Home',
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'white',
            headerShown: false,
          }}
    />
</Stack.Navigator>);}