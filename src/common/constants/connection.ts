export const connection: Connection = {
    CONNECTION_STRING: "mysql://3466/234",
    DB: "spotify",
    DB_NAME: "songs"
}

export type Connection = {
    CONNECTION_STRING: string,
    DB: string,
    DB_NAME: string     
}