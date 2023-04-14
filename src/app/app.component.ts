import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qrcode-generator';
  ngOnInit(){

  }
  generateQR(){
    debugger
    var inputText:any=document.getElementById("input-text");
    var qrImg:any=document.getElementById("qrImg");
    var imgBox:any=document.getElementById("imgBox");
    if(inputText.value.length>0){
   
    var qr_code="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputText.value;
    qrImg.src=qr_code;
    imgBox.classList.add("show-img");
    }
    else{
      imgBox.classList.remove("show-img");
      inputText.classList.add("error");
      setTimeout(()=>{
        inputText.classList.remove("error");
      })
    }


  }
}
