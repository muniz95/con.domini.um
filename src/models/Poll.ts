interface Poll {
  id: number;
  title: string;
  closingDate: Date;
  voted?: boolean;
}

export default Poll;
