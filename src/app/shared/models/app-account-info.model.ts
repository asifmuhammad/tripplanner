export class AppAccountInfo {
    uid?: string;
    displayName: string;
    email: string;
    photoURL?: string;
    emailVerified?: boolean;
    favorites?: { [ key: string ]: boolean };
    created_at?: Date;
    password?: string;
}

