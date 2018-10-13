class H1PImageObj {

    public h1: string;
    public p: string;
    public img: any; // Find image type 

    constructor(h1: string, p: string, img: string) {
        this.h1 = h1;
        this.p = p;
        this.img = img;
    }
}

export default H1PImageObj;
