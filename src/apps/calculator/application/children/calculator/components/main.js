import React, { Component } from 'react';
import { View, Text, Picker, Switch } from 'react-native';

import SearchControl from '../../searchInput/components/main';
import NumberInput from '../../numberInput/components/main';
import { navigate } from '../../../navigation';

const CurrencyPicker = props => {
  return (
    <View style={{width: 80, paddingTop: 20, fontSize: 20}}>
      <Picker {...props}>
        <Picker.Item label="ENG" value="eng" />
        <Picker.Item label="RUS" value="rus" />
      </Picker>
    </View>
  );
}

const TableItem = props => {
  let { leftText, rightText, tableItemStyle, border=1, color } = props;

  return (
    <View style={{...styles.tableItem, ...tableItemStyle, borderBottomColor: '#ddd', borderBottomWidth: border}}>
      <Text style={{...styles.tableItemLeft, color}}>{leftText}</Text>
      <Text style={{...styles.tableItemRight, color}}>{rightText}</Text>
    </View>
  );
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromSum: '100',
      toSum: '100',
      fromСurrency: 'rus',
      toСurrency: 'eng',
      withTax: false
    }
  }
  render() {
    let { fromSum, toSum, fromСurrency, toСurrency, withTax } = this.state;

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: '#fff'}}>
          <View style={{marginBottom: 10, ...styles.section}}>
            <SearchControl label="Выберите место отправления перевода"
                           title="Россия, Санкт-Петербург"
                           onPress={() => navigate({ routeName: 'SearchScreen'})} />
            <SearchControl label="Выберите место зачисления перевода"
                           title="Украина, Киев"
                           onPress={() => navigate({ routeName: 'SearchScreen'})}/>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', ...styles.section}}>
            <NumberInput label="Сумма перевода" onChangeText={(v) => this.setState({fromSum: v})} value={fromSum} autoCorrect={true} />
            <CurrencyPicker selectedValue={this.state.fromСurrency}
                            onValueChange={(itemValue, itemIndex) => this.setState({fromСurrency: itemValue})} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', ...styles.section}}>
            <NumberInput label="Сумма зачисления" onChangeText={(v) => this.setState({toSum: v})} value={toSum}/>
            <CurrencyPicker selectedValue={this.state.toСurrency}
                            onValueChange={(itemValue, itemIndex) => this.setState({toСurrency: itemValue})} />
          </View>
          <View>
            <Text>Внутрибанковский курс валют: 1.00 {fromСurrency.toUpperCase()} = 58.7072347 {toСurrency.toUpperCase()}</Text>
          </View>
          <View style={{marginTop: 10, ...styles.section}}>
            <Text style={{fontWeight: 'bold'}}>Информация о переводе</Text>
            <View style={{marginTop: 15, ...styles.section}}>
              <TableItem leftText="Сумма перевода:" rightText={`${fromSum} ${fromСurrency.toUpperCase()}`} />
              <TableItem leftText="Сумма комиссии (1%):" rightText={`${fromSum * 0.1} ${fromСurrency.toUpperCase()}`} color="#444" />
              <TableItem leftText="Сумма зачисления:" rightText={`${toSum} ${toСurrency.toUpperCase()}`} />
              <TableItem leftText="Итого:" rightText={`${Number(fromSum) - Number(fromSum * 0.1) + Number(toSum)} ${toСurrency.toUpperCase()}`} border={0} color="#444" />
            </View>
          </View>
        </View>
        <View style={styles.bottomSwitchContainer}>
          <Text>Вычесть сумму комиссии из суммы зачисления</Text>
          <View>
            <Switch value={withTax} onValueChange={v => this.setState({withTax: v})} />
          </View>
        </View>
      </View>
    );
  }
}

export default Calculator;

let styles = {
  section: {

  },
  tableItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tableItemLeft: {
  },
  tableItemRight: {
    fontSize: 20
  },
  bottomSwitchContainer: {
    backgroundColor: '#FDD835',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}