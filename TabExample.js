import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import HomeComponent from './pages/HomeComponent'


export default class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'First' },
            { key: 'second', title: 'Second' },
            { key: 'third', title: 'Third' },
            { key: 'fourth', title: 'Fourth' },
            { key: 'fifth', title: 'Fifth' },
            { key: 'sixth', title: 'Sixth' },
        ],
    };

    componentDidMount() {
        this.setState({ routes: this.state.routes.concat({ key: 'seven', title: 'seventh' }) })
    }
    render() {
        return (
            <TabView
                navigationState={this.state}
                position={this.position}
                timingConfig={{duration:100}}
                renderScene={({ route }) => {
                    if (Math.abs(this.state.index - this.state.routes.indexOf(route)) > 2) {
                        return <View />;
                      }
                    
                      return <HomeComponent name={route.key} />;
                    // switch (route.key) {
                    //     case 'home':
                    //         return <HomeComponent />;
                    //     default:
                    //         return <HomeComponent name={route.key} />;
                    // }
                }}
                renderTabBar={props =>
                    <TabBar
                        {...props}
                        scrollEnabled={true}
                        indicatorStyle={{ backgroundColor: 'white' }}
                        style={{ backgroundColor: 'pink' }}
                        onTabPress={({ route, preventDefault }) => {
                            
                            if (route.key === 'home') {
                              preventDefault();
                          
                              // Do something else
                            }
                          }}
                    />
                }
                onIndexChange={index => this.setState({ index })}
                initialLayout={{  height: 0, width: Dimensions.get('window').width }}
                lazy={true}
                
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});