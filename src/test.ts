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