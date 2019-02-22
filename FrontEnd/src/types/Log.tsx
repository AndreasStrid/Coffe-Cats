
// font-family: bold;
class Log {

    public static debug(isLoggable: boolean, tag: string, message: string, data: any): void {
        if (isLoggable) {
            console.log(`%c${tag} -> %c${message}: %c${JSON.stringify(data)} `, "color: blue;", "color: teal;", "color: black;");
        }
    }

}

export default Log
