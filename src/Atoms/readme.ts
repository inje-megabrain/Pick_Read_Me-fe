import { atom } from 'recoil';

const readmeAtom = atom<Blob>({
  key: 'readmeState',
  default: new Blob(),
});

export default readmeAtom;
