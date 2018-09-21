class Redirect {

    public rederict: (name: string, url: string) => void;

    constructor(rederict: (name: string, url: string) => void) {
        this.rederict = rederict;
    }
}

export default Redirect;
