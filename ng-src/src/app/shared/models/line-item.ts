
export class LineItem {
  pos: number;
  qty: number;
  name: string;
  selected: boolean;
  bought: boolean;
  categories: Array<string> = ['all'];
  meta: {
    boughtAt: any[];
  };
}
