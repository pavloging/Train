export interface TabTargetScreenListsType {
  id: number;
  name: string;
  goals?: Array<Object>;
}
// не обяз - ?

export interface ListType {
  onChangeText?: ((text: string) => void) | undefined;
}
