import { atom } from 'recoil';
import { IUser } from 'src/Api/fetchUser';

const authAtom = atom<IUser | null>({
  key: 'authAtom',
  default: null,
});

export default authAtom;
