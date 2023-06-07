import { atom } from 'recoil';

// 토큰 정보 저장
const accessAtom = atom<string | null>({
  key: 'accessAtom',
  default: null,
});

export default accessAtom;
