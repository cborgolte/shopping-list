
export interface LineItem {
  pos: number;
  qty: number;
  name: string;
  selected: boolean;
  bought: boolean;
  categories: Array<string>;
}

export function createLineItem(qty: number, name: string, selected: boolean, categories: Array<string> = []) {
  categories = ['all'].concat(categories);
  return {
    qty,
    name,
    categories,
    pos: 0,
    selected,
    bought: false,
  };
}