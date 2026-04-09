export default class UserDTO {
    constructor(
        public id: string,
        public username: string,
        public ELO: number,
        public wins: number,
        public losses: number,
        public profilePicture: string
    ) {
    }
}