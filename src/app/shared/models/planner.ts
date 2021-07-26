export class Post {
    id?: string;
    username?: string;
    filepath?: string;
    description?: string;
    createdAt?: any;
    title?:string;
    postBy?:string;
    bookmarks?: { [key: string]: boolean };
}