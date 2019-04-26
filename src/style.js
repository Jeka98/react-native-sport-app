'use strict'

let React = require('react-native');
let { StyleSheet } = React;

const constants = {
  actionsColor: '#3cb371'
}

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1
  },
  listview: {
    flex: 1
  },
  li: {
    backgroundColor: '#ffffff',
    borderBottomColor: '#eeeeee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
    display: 'flex',
    flexDirection: 'row',
  },
  liContainer: {
    flex: 2
  },
  liText: {
    color: '#333333',
    fontSize: 16,
    flex: 2,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomColor: '#eeeeee',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444444',
    fontSize: 16,
    fontWeight: '500'
  },
  toolbar: {
    backgroundColor: '#ffffff',
    height: 22
  },
  center: {
    textAlign: 'center'
  },
  actionText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
  },
  action: {
    backgroundColor: constants.actionsColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16
  },
  input: {
    height: 40,
    paddingLeft: 6
  },
  save: {
    textAlign: 'center',
    backgroundColor: constants.actionsColor,
    borderColor: 'transparent',
    color: '#ffffff',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 10,
    paddingBottom: 10
  },
  cancel: {
    textAlign: 'center',
    backgroundColor: '#B34643',
    borderColor: 'transparent',
    color: '#ffffff',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'center',
  },
  editBtn: {
    flex: 1
  },
  removeBtn: {
    flex: 1,
    color: '#F65076',
  }
});
