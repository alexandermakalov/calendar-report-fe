export interface TimeTable {
  [day: number]: string
}

export interface Employee {
  id: number;
  name: string;
  position: string,
  rate: number,
  timetable: TimeTable
}
