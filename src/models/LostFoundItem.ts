interface LostFoundItem {
  id: number;
  name: string;
  foundBy: string;
  description: string;
  image?: string;
  creationDate: Date;
  status: string;
}

export default LostFoundItem;
