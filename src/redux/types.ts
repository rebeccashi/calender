export interface Event {
    name: string,
    date: string,
    startTime: string,
    endTime: string,
    location?: string,
    notes?: string,
    username: string,   //not alterable
    id: string
};

export interface CalendarState {
    events: Event[],
    visibilityFilter: string,
}