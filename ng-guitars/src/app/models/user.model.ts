import { Guitar } from "./guitar.model";

export interface User {
    id: number;
    username: string;
    favorites: Guitar[];
}