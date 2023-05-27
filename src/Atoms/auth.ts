import { atom } from 'recoil';

// export type IUser = {
//   token?: string;
//   email?: string;
//   name?: string;
//   profile?: string;
//   repo?: string;
// };

const authAtom = atom<string | null>({
  key: 'authAtom',
  default: null,
});

export default authAtom;
