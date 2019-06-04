/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, Button, StyleSheet, Text, View, ListView, TouchableHighlight, Modal, TextInput } from 'react-native';
import * as firebase from 'firebase';
import Toolbar from './src/components/Toolbar/Toolbar';
import Addbutton from './src/components/Addbutton/Addbutton';

const styles = require('./src/style');

const config = {
  apiKey: "AIzaSyCG0R8zgfVAN5s7Abco5p-mHiWEG6OlQzg",
  authDomain: "reactnative-783aa.firebaseapp.com",
  databaseURL: "https://reactnative-783aa.firebaseio.com",
  projectId: "reactnative-783aa",
  storageBucket: "reactnative-783aa.appspot.com",
};

const firebaseApp = firebase.initializeApp(config);

const BLUE = '#428AF8';
const LIGHT_GRAY = '#D3D3D3';

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      text: '',
      editText: '',
      itemToEdit: null,
      itemDataSource: ds,
      modalVisible: false,
      isFocused: false,
      editModalVisible: false
    };

    this.itemsRef = this.getRef().child('items');

    this.renderRow = this.renderRow.bind(this);
    this.pressDelete = this.pressDelete.bind(this);
    this.pressEdit = this.pressEdit.bind(this);
  }


  setModalVisible(visible){
    this.setState({modalVisible:visible});
  }

  handleBlur = event => {
    this.setState({isFocused: false});

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  componentWillMount() {
    this.getItems(this.itemsRef);
  }

  componentDidMount() {
    this.getItems(this.itemsRef);
  }

  getItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      const items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });
      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
      });
    });
  }

  handleFocus = event => {
    this.setState({isFocused: true});

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  pressDelete(item) {
    this.itemsRef.child(item._key).remove();
  }

  pressEdit(item) {
    this.setState({
      editModalVisible: true,
      itemToEdit: item,
    });
  }

  closeEditModal() {
    this.setState({ editModalVisible: false });
  }

  refreshText() {
    this.setState({ text: '' });
  }

  closeAddModal() {
    this.setModalVisible(false);
    this.refreshText();
  }

  addItem() {
    this.setModalVisible(true);
  }

  renderRow(item) {
    return (
      <View style={ styles.li }>
        <Text style={styles.liText}>
          {item.title}
        </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.removeBtn}>
            <Button
              title="Remove"
              onPress={() => {
                this.pressDelete(item);
              }}
            />
          </View>
          <View style={styles.editBtn}>
            <Button
              title="Edit"
              onPress={() => {
                this.pressEdit(item);
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  render() {
    const { isFocused } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.closeAddModal();
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Toolbar title="Add item" />
              <TextInput
                style={styles.input}
                selectionColor={BLUE}
                underlineColorAndroid={
                  isFocused ? BLUE : LIGHT_GRAY
                }
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                {...otherProps}
                value={this.state.text}
                placeholder="Add item"
                onChangeText={(value) => this.setState({text:value})}
              />
              <TouchableHighlight
                onPress={() => {
                  this.itemsRef.push({ title: this.state.text });
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={styles.save}>Save Item</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={styles.cancel}>Canсel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.editModalVisible}
          onRequestClose={() => {
            this.closeEditModal();
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Toolbar title="Edit item" />
              <TextInput
                style={styles.input}
                selectionColor={BLUE}
                underlineColorAndroid={
                  isFocused ? BLUE : LIGHT_GRAY
                }
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                {...otherProps}
                value={this.state.itemToEdit ? this.state.itemToEdit.text : ''}
                placeholder="Edit item"
                onChangeText={(value) => this.setState({editText:value})}
              />
              <TouchableHighlight
                onPress={() => {
                  const updates = {};
                  const key = this.state.itemToEdit._key;
                  updates['/items/' + key] = { title: this.state.editText };
                  this.getRef().update(updates);

                  this.closeEditModal();
                }}
              >
                <Text style={styles.save}>Save Item</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  this.closeEditModal();
                }}
              >
                <Text style={styles.cancel}>Canсel</Text>
              </TouchableHighlight>

            </View>
          </View>
        </Modal>

        <Toolbar title="Item lists" />
        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />

        <Addbutton onPress={this.addItem.bind(this)} title="Add item" />
      </View>
    );
  }
}
