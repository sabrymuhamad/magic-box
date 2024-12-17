import { GENDER, GRADE } from "../enums/shared.enum";

export interface ISubscribe {
    yourName: string,
    email: string,
    childName: string,
    childDOB: string,
    grade: GRADE,
    gender: GENDER,
    topics: number[]
}

export class Subscribe implements ISubscribe {
    yourName!: string;
    email!: string;
    childName!: string;
    childDOB!: string;
    grade!: GRADE;
    gender = GENDER.BOY;
    topics!: number[]
}