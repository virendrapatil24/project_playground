import { atom, selector } from "recoil";

export const counterAtom = atom({
    default: 0,
    key: "counter"
})

export const evenSelector = selector({
    key: "isEven",
    get: ({get}) => {
        const count = get(counterAtom);
        return count % 2;
    }
})