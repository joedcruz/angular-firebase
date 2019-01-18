import { Roles } from "./roles";

export interface User {
    uid: string;
    email?: string | null;
    // photoUrl?: string;
    // displayName?: string;
    location?: string | null;
    //roles: Roles
}