import { TrialService } from './trial.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {

  dataPayMethod:any;
  paymentMethod:any;
  dataPaymentIntent:any;
  paymentIntent:any;

  methodId:string;
  intentId:string;
  constructor(private trialService:TrialService) { }

  ngOnInit() {
   this.trialService.setClientSecret("sk_test_219vkVmPAsJHDtiwV9WxnMEz");
    this.dataPayMethod = {
      "data": {
          "type": "payment_method",
          "attributes": {
              "billing": {
                  "address": {
                      "city": "Test City",
                      "country": "PH",
                      "line1": "Test Line 1",
                      "line2": "Test Line 2",
                      "postal_code": "Test Postal Code",
                      "state": "Test State"
                  },
                  "email": "testemail@zoey.paymongo.net",
                  "name": "Test Name",
                  "phone": "1234"
              },
              "details": {
                  "card_number": "4120000000000007",
                  "exp_month": 1,
                  "exp_year": 24,
                  "cvc": "427"
              },
              "livemode": false,
              "type": "card",
              "metadata": {
                  "sample": "123"
              },
              "created_at": 1586097138,
              "updated_at": 1586097138
          }
      }
  };

  this.dataPaymentIntent = {"data":{"attributes":{"payment_method_allowed":["card"],"payment_method_options":{"card":{"request_three_d_secure":"automatic"}},"currency":"PHP","amount":10000}}};

  }

 

  createPaymentMethod(){
    this.trialService.createPaymentMethod(this.dataPayMethod).subscribe((success)=>{
      this.methodId = success.data.id;
     
      this.paymentMethod = JSON.stringify(success);
    },
    (err)=>{
      debugger;
    }
    );
  }
createPaymentIntent(){
  this.trialService.createPaymentIntent(this.dataPaymentIntent).subscribe((success)=>{
    this.intentId = success.data.id;
    this.paymentIntent = JSON.stringify(success);
  },
  (err)=>{
    debugger;
  }
  );
}

attach(){
  let data = {"data":{"attributes":{"payment_method":this.methodId,"client_key":"test"}}};
  this.trialService.attachPaymentIntent(this.intentId,data).subscribe((success)=>{
      debugger;
  },
  (err)=>{
    debugger;
  }
  );

}


}
