import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, Dialog, Portal, Menu, Divider, Provider,Chip ,Colors} from 'react-native-paper';

export default class HomeComponent extends Component {
    state = {
        visible: false,
    };

    _showDialog = () => this.setState({ visible: true });

    _hideDialog = () => this.setState({ visible: false });

    _openMenu = () => this.setState({ visible: true });

    _closeMenu = () => this.setState({ visible: false });
    render() {
        return (
            <Provider>
                <View>
                    <Text>Name: {this.props.name} </Text>
                   
                    <Card>
                        <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                        <Card.Content>
                            <Title>Card title</Title>
                            <Paragraph>Card content</Paragraph>
                        </Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button>Ok</Button>
                            <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
                        </Card.Actions>
                    </Card>
                    <Button onPress={this._showDialog}>Show Dialog</Button>
                    <Portal>
                        <Dialog
                            visible={this.state.visible}
                            onDismiss={this._hideDialog}>
                            <Dialog.Title>Alert</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>This is simple dialog</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={this._hideDialog}>Done</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                    <View
                        style={{
                            paddingTop: 50,
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                        <Menu
                            visible={this.state.visible}
                            onDismiss={this._closeMenu}
                            anchor={
                                <Button onPress={this._openMenu}>Show menu</Button>
                            }
                        >
                            <Menu.Item onPress={() => { }} title="Item 1" />
                            <Menu.Item onPress={() => { }} title="Item 2" />
                            <Divider />
                            <Menu.Item onPress={() => { }} title="Item 3" />
                        </Menu>
                    </View>
                </View>
            </Provider>

        )
    }
}