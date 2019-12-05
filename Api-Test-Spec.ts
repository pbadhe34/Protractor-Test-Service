 import { browser, element, by } from "protractor";

var Request = require("request");

function jsonParser(value:string) {

       var stringData = JSON.stringify(value);
       var objectValue = JSON.parse(stringData );
       return objectValue['key'];  
    }

//Get method Test//

describe("API Get Request Processing in Protractor",function(){
  browser.ignoreSynchronization = true; // for non-angular websites

  it("Get All Records test in protractor",function(done){

    Request.get({
      "headers": { "content-type": "application/json" },
      "url": "http://localhost:8080/Customer-Service/customers/",
      "timeout": 1500,

      // proxy: 'http://server.com',

      }, (error, response, body) => {//ES6 arrow function
        if(error) {
           console.log(error.code === 'ETIMEDOUT');
    // Set to `true` if the timeout was a connection timeout, `false` or `undefined` otherwise.
    console.log(error.connect === true);
         return console.dir(error);
           
        }         
        //console.dir(JSON.parse(body));

        var data = JSON.parse(body);
        console.log("The number of customer records are  "+data.length);
         
        console.log("\n\n\nResponse Code ****:"+response.statusCode)
	   expect(response.statusCode).toBe(200) 
        console.log("\nRead All customer records sucess");        
        done();
    });
   });   


   var custName;


   console.log("\nGetting the customer records");        
  it("Get Request test in protractor",function(done){

    Request.get({
      "headers": { "content-type": "application/json" },
      "url": "http://localhost:8080/Customer-Service/customers/1",
      "timeout": 1500,

      // proxy: 'http://server.com',

      }, (error, response, body) => {//ES6 arrow function
        if(error) {
           console.log(error.code === 'ETIMEDOUT');
    // Set to `true` if the timeout was a connection timeout, `false` or `undefined` otherwise.
    console.log(error.connect === true);
         return console.dir(error);
           
        }         
        //console.dir(JSON.parse(body));

        var data = JSON.parse(body);
        console.log("The name of customer is "+data.firstName);
        custName = data.firstName       
        console.log("\n\n\nResponse Code ****:"+response.statusCode)
	   expect(response.statusCode).toBe(200) 
        console.log("\nRead the customer records sucess");        
        done();
    });
   });   
  

   it("Process Get Request in protractor",function(){
        
        console.log("The customer is "+custName);        
      
   });
});

///Post Method Test// 
 function Customer(custID,name,sirNName,roadName,place,stateName,code,residenceCountry)
 {
   this.id= custID
   this.firstName= name
   this.lastName=sirNName
   this.city=place
   this.state=stateName
   this.zip = code
   this.country=residenceCountry
   this.street=roadName
 }

describe("Post API method in Protractor",function(){
  browser.ignoreSynchronization = true; // for non-angular websites

   console.log("\nPosting new customer record");        
  it("Post api request in protractor",function(done){

    var obj=new Customer(8,"Mohan","Bhargav","Malviya Rd","Kanpur","UP",34567,"USA");

    Request.post({
      "headers": { "content-type": "application/json" },
      "url": "http://localhost:8080/Customer-Service/customers/",
  
    /*
      "body": JSON.stringify({
		"id":"4",
      "firstName":"Bana",
      "lastName":"More",
      "street":"MG Road",
        "city":"Pune",
      "state":"MH",
      "zip":"456789",
       "country":"India"
      })
    */
      

     "body": JSON.stringify(obj),


      }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }        


        console.log("\n\nHeader ****:")
        console.log(response.headers)

        console.dir(response.body);
        var data = JSON.parse(body);
        console.log("\n\nNew Record added with id = :"+data.id)
        expect(response.statusCode).toBe(200) 
         //call back for request done
        console.log("\nPost new customer record sucess");        
        done();
    });
  });
});
 
//Put method Test//

describe("Put method test in Protractor",function(){
  browser.ignoreSynchronization = true; // for non-angular websites
  console.log("\nUpdating the customer record");        
  it("Put api Testing in protractor",function(done){

//Update Customer with id =1
    Request.put({
      "headers": { "content-type": "application/json" },
      "url": "http://localhost:8080/Customer-Service/customers/1",
      "body": JSON.stringify({
        "id":"1","firstName":"Usha","lastName":"Menon","street":"New Shanti Street","city":"Nashik","state":"MH","zip":"45","country":"India"
      })

      }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir("Post Method Response : ******");
        console.dir(response.body);

        console.log("\n\nHeader ****:")
        console.log(response.headers)
        expect(response.statusCode).toBe(200)          
        console.log("\nUpdate the customer record sucess");        
        done();
    });
  });
});

//Delete method 

//Request.delete(options, callback)

describe("Delete method test in Protractor",function(){
  browser.ignoreSynchronization = true; // for non-angular websites

  console.log("\nDeleting the customer record");        
  it("Delete api Testing in protractor",function(done){
        
Request.del({       
      "url": "http://localhost:8080/Customer-Service/customers/3",
      "timeout": 1000,

      // proxy: 'http://server.com',

      }, (error, response, body) => {//ES6 arrow function
        if(error) {
           console.log(error.code === 'ETIMEDOUT');
    // Set to `true` if the timeout was a connection timeout, `false` or `undefined` otherwise.
    console.log(error.connect === true);
         return console.dir(error);           
        }  
  
        console.log("\nDelete process started..");      
         
        console.log("\n\n\nResponse Code ****:"+response.statusCode)
        console.log("\n\nDelete Response Headers ****:")
        console.log(response.headers)
	   expect(response.statusCode).toBe(204) 
        console.log("\nDeleting the customer record sucess");        
        
        done();
    });
  });
});
 


  
  
   
