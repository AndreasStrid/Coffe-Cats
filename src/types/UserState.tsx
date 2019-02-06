import CustomerLevel from "./CustomerLevel"

interface UserState {
     name: string;
     money: number;
     customerLevel: CustomerLevel;
     token: string | null;
}

export default UserState
