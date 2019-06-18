import React, {Component} from 'react';
import {connect} from 'react-redux';
import EventItem from './EventItem'
import {Event, CalendarState} from '../redux/calendar/calendarTypes'
import { getDisplayEvents } from '../redux/selector';
import { RootState } from '..';

interface ListProps {
    events: Event[]
};
  
class EventList extends Component<ListProps> {
    render() {
        const things = this.props.events.map((e : Event) => (
            <EventItem
                id={e.name}
                name = {e.name}
                date={e.date.format('MM-DD-YYYY')}
                startTime={e.startTime.format('hh:mm A')}
                endTime={e.endTime.format('hh:mm A')}
                location={e.location}
                notes={e.notes}
                username={e.username}
            />
        ));
        return things;
    }
};

const mapStateToProps = (state : RootState)  => {
    return {
        events: getDisplayEvents(state)
    }
};

export default connect(mapStateToProps)(EventList);