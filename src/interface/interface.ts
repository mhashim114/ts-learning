export interface lengthWise {
    length: number;
}

export interface GenericIdentityFn<Type> {
    (arg: Type): Type;
}