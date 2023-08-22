import { atom } from 'recoil';

const postAtom = atom<number | null>({
  key: 'postState', // unique ID (with respect to other atojs/selectors)
  default: null, //default value (aka initial value)
});

export default postAtom;
