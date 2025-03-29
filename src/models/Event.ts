interface Event {
  id: number;
  title: string;
  local: string;
  date: Date;
  attending?: boolean;
}

export default Event;
