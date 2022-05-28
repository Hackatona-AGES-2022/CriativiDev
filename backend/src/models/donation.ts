export interface Donation {
    id?: number;
    description: string;
    category_id: number;
    user_id: number;
}

export interface CreateDonationPayload {
    description: string;
    category_id: number;
    user_id: number;
}

