export interface ParentInterface {
  id: number;
  sender: string;
  receiver: string;
  totalAmount: number;
}

export interface ParentDataInterface {
  parents: ParentInterface[];
  totalNumber: number;
}
