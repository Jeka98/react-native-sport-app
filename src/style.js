'use strict'

const React = require('react-native');

const { StyleSheet } = React;

const constants = {
  actionsColor: '#3cb371'
};

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
    flexWrap: 'wrap',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    flex: 3,
  },
  subText: {
    paddingRight: 20,
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
    backgroundColor: '#2F80ED',
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#ffffff',
    fontSize: 24,
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
    flex: 1,
    justifyContent: 'center',
  },
  editBtn: {
    paddingTop: 5,
    flex: 0.5
  },
  removeBtn: {
    flex: 0.5,
    color: '#F65076',
  }
});
