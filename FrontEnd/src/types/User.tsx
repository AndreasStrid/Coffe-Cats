import CustomerLevel from "./CustomerLevel"

interface User {
     name: string;
     money: number;
     customerLevel: CustomerLevel;
     token: string | null;
}

export default User
