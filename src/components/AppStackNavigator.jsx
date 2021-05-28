export default function AppStackNavigator(props) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.header,
            shadowOpacity: 0,
          },
          headerTintColor: COLORS.background,
          headerBackTitleVisible: false,
        }}>
        {props.children}
      </Stack.Navigator>
    );
  }