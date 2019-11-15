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
    dateString: 'Informe o dia da pelada'
  }

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
      dateString: date.toDateString(),
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

  render() {
    const { show, date, dateString } = this.state;

    return (
        <TouchableOpacity onPress={ this.datepicker }>
            <Container>
            <Icon
                name={'calendar-month'}
                size={24}
                color={'#fff'}
                style={{marginHorizontal:10}}
            />
            <Text style={{color:'#fff'}}>{dateString}</Text>

        { show && <DateTimePicker
                    value={date}
                    mode='date'
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
