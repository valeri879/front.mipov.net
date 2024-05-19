export interface User {
    firstName: string;
    lastName: string;
    email: string;
    isVerified: boolean;
    avatarPath: string | null;
    password: string;
    verificationCode: string;
    date: string;
}
