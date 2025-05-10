export interface EventCenterData {
    id?: string;
    amount: number;
    name: string;
    description: string;
    address: {street: string, state: string, country: string}
    medias: FileList | string[];
}