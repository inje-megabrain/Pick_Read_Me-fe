import { atom } from 'recoil';

const authAtom = atom<string | null>({
  key: 'authAtom',
  default: null,
});

export default authAtom;
