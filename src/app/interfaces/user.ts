export interface User {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    isVerified: boolean;
    avatarPath: string | null;
    password: string;
    verificationCode: string;
    date: string;
}
