import {Event, ADD_EVENT, ADD_MUSIC_EVENTS} from './calendarTypes';

export function addEvent(event: Event) {
    return {
        type: ADD_EVENT,
        payload: Event,
    }
};

export function addMusicEvents(arr: []) {
    return {
        type: ADD_MUSIC_EVENTS,
        payload: [],
    }
}