export enum Menu {
  빅웩웩 = 1,
  웩웩스파이시 = 2,
  웩웩파운더 = 3,
}
export type MenuMessage = {
  message: [string, string];
};

export const MenuSauce: Record<Menu, string> = {
  [Menu.빅웩웩]: "빅웩소스",
  [Menu.웩웩스파이시]: "웩스파이시소스",
  [Menu.웩웩파운더]: "웩파운더소스",
};
