import React, {Component} from 'react';
import {Platform,TouchableOpacity, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Container } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class DatePicker extends Component {
  state = {
    date: new Date(),
    mode: 'date',
    show: false,
    dateString: 'Informe o dia da pelada',
    icon: 'calendar-month',
  }

  setDate = (event, date) => {
    date = date || this.state.date;
    let dateString = date.toLocaleDateString();

    if(this.props.mode === 'time'){
        dateString = date.toLocaleTimeString();
    }

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
      dateString: dateString,
    });
  }

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  }

  datepicker = () => {
    this.show('date');
  }

  componentDidMount(){
      if(this.props.mode == 'time'){
        this.setState({
            icon: 'clock-outline',
            dateString: 'Informe a hora da pelada'
        })
      }
  }

  render() {
    const { show, date, dateString } = this.state;

    return (
        <TouchableOpacity onPress={ this.datepicker }>
            <Container>
            <Icon
                name={this.state.icon}
                size={24}
                color={'#fff'}
                style={{marginHorizontal:10}}
            />
            <Text style={{color:'#fff'}}>{dateString}</Text>

        { show && <DateTimePicker
                    value={date}
                    mode={this.props.mode}
                    is24Hour={true}
                    display="default"
                    minimumDate={new Date()}
                    onChange={this.setDate} />

        }
        </Container>
       </TouchableOpacity>
    );
  }
}
