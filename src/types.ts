// You do not need to touch this file.
export interface User {
    id: string | number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    source: DataSource;
}

export enum DataSource {
    DATA_SOURCE_1 = "DATA_SOURCE_1",
    DATA_SOURCE_2 = "DATA_SOURCE_2",
}
