export interface EventCenterData {
    id?: string;
    amount: number;
    name: string;
    description: string;
    address: {streetAddress: string, state: string, country: string}
    medias: FileList | string[];
    phoneNumber?: string;
}
