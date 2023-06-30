interface lengthWise {
    length: number;
}

function identity1<T extends lengthWise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

let out = identity1({ length: 10, value: 3 });

interface GenericIdentityFn<Type> {
    (arg: Type): Type;
}

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
