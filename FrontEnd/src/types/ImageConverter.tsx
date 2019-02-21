

const ImageConverter = {

    toBase64(img: any): any {
        const reader = new FileReader();
        console.log("img befroe: ", img);

        reader.onload = () => {
            console.log("img: ", reader.result);
        }
        reader.readAsDataURL(img);

    },


    // handleFile(event) {
    //    var binaryString = event.target.result;
    //           this.base64textString= btoa(binaryString);
    //           console.log(btoa(binaryString));
    //   },


    //   selectFile(event){
    //     var files = event.target.files;
    //     var file = files[0];

    //   if (files && file) {
    //       var reader = new FileReader();

    //       reader.onload =this.handleFile.bind(this);

    //       reader.readAsBinaryString(file);
    //   }
    // }



    // handleFile(event) {
    //    var binaryString = event.target.result;
    //           this.base64textString= btoa(binaryString);
    //           console.log(btoa(binaryString));
    //   }


}


export default ImageConverter
