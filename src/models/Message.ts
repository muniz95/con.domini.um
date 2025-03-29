interface Message {
  id?: number;
  from?: string;
  to?: string;
  content?: string;
  deliveredAt?: Date;
}

export default Message;
