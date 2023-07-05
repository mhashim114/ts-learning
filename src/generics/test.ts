import { lengthWise } from '../interface/interface';
import { GenericIdentityFn } from '../interface/interface';
interface KycData<T> {
    status: boolean,
    message: string,
    data: T
}

function submitKyc<T>(data: T): KycData<T> {
    return {
        status: true,
        message: "Success",
        data: data
    }
}

type FinjaData = {
    name: string,
    cnic: string,
    mobile: string
}


const finjaData: FinjaData = {
    name: "zyx",
    cnic: '42465',
    mobile: "+92345"
}

const muawinData = {
    name: "zyx",
    cnic: '42465',
    mobile: "+92345",
    data: '14/4/2023'
}

const result = submitKyc(muawinData);



function identity1<T extends lengthWise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

let out = identity1({ length: 10, value: 3 });


function identity<Type>(arg: Type): Type {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
console.log(myIdentity(1));

function getProperty<T, Key extends keyof T>(obj: T, key: Key) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

let ans = getProperty(x, 'a');
console.log(ans)