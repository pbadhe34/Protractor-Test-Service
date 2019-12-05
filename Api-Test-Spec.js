"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var Request = require("request");
function jsonParser(value) {
    var stringData = JSON.stringify(value);
    var objectValue = JSON.parse(stringData);
    return objectValue['key'];
}
//Get method Test//
describe("API Get Request Processing in Protractor", function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    it("Get All Records test in protractor", function (done) {
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:8080/Customer-Service/customers/",
            "timeout": 1500,
        }, (error, response, body) => {
            if (error) {
                console.log(error.code === 'ETIMEDOUT');
                // Set to `true` if the timeout was a connection timeout, `false` or `undefined` otherwise.
                console.log(error.connect === true);
                return console.dir(error);
            }
            //console.dir(JSON.parse(body));
            var data = JSON.parse(body);
            console.log("The number of customer records are  " + data.length);
            console.log("\n\n\nResponse Code ****:" + response.statusCode);
            expect(response.statusCode).toBe(200);
            console.log("\nRead All customer records sucess");
            done();
        });
    });
    var custName;
    console.log("\nGetting the customer records");
    it("Get Request test in protractor", function (done) {
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:8080/Customer-Service/customers/1",
            "timeout": 1500,
        }, (error, response, body) => {
            if (error) {
                console.log(error.code === 'ETIMEDOUT');
                // Set to `true` if the timeout was a connection timeout, `false` or `undefined` otherwise.
                console.log(error.connect === true);
                return console.dir(error);
            }
            //console.dir(JSON.parse(body));
            var data = JSON.parse(body);
            console.log("The name of customer is " + data.firstName);
            custName = data.firstName;
            console.log("\n\n\nResponse Code ****:" + response.statusCode);
            expect(response.statusCode).toBe(200);
            console.log("\nRead the customer records sucess");
            done();
        });
    });
    it("Process Get Request in protractor", function () {
        console.log("The customer is " + custName);
    });
});
///Post Method Test// 
function Customer(custID, name, sirNName, roadName, place, stateName, code, residenceCountry) {
    this.id = custID;
    this.firstName = name;
    this.lastName = sirNName;
    this.city = place;
    this.state = stateName;
    this.zip = code;
    this.country = residenceCountry;
    this.street = roadName;
}
describe("Post API method in Protractor", function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    console.log("\nPosting new customer record");
    it("Post api request in protractor", function (done) {
        var obj = new Customer(8, "Mohan", "Bhargav", "Malviya Rd", "Kanpur", "UP", 34567, "USA");
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
            if (error) {
                return console.dir(error);
            }
            console.log("\n\nHeader ****:");
            console.log(response.headers);
            console.dir(response.body);
            var data = JSON.parse(body);
            console.log("\n\nNew Record added with id = :" + data.id);
            expect(response.statusCode).toBe(200);
            //call back for request done
            console.log("\nPost new customer record sucess");
            done();
        });
    });
});
//Put method Test//
describe("Put method test in Protractor", function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    console.log("\nUpdating the customer record");
    it("Put api Testing in protractor", function (done) {
        //Update Customer with id =1
        Request.put({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:8080/Customer-Service/customers/1",
            "body": JSON.stringify({
                "id": "1", "firstName": "Usha", "lastName": "Menon", "street": "New Shanti Street", "city": "Nashik", "state": "MH", "zip": "45", "country": "India"
            })
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            console.dir("Post Method Response : ******");
            console.dir(response.body);
            console.log("\n\nHeader ****:");
            console.log(response.headers);
            expect(response.statusCode).toBe(200);
            console.log("\nUpdate the customer record sucess");
            done();
        });
    });
});
//Delete method 
//Request.delete(options, callback)
describe("Delete method test in Protractor", function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    console.log("\nDeleting the customer record");
    it("Delete api Testing in protractor", function (done) {
        Request.del({
            "url": "http://localhost:8080/Customer-Service/customers/3",
            "timeout": 1000,
        }, (error, response, body) => {
            if (error) {
                console.log(error.code === 'ETIMEDOUT');
                // Set to `true` if the timeout was a connection timeout, `false` or `undefined` otherwise.
                console.log(error.connect === true);
                return console.dir(error);
            }
            console.log("\nDelete process started..");
            console.log("\n\n\nResponse Code ****:" + response.statusCode);
            console.log("\n\nDelete Response Headers ****:");
            console.log(response.headers);
            expect(response.statusCode).toBe(204);
            console.log("\nDeleting the customer record sucess");
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBpLVRlc3QtU3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFwaS1UZXN0LVNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQywyQ0FBa0Q7QUFFbkQsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWpDLFNBQVMsVUFBVSxDQUFDLEtBQVk7SUFFekIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBRSxDQUFDO0lBQzFDLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFTCxtQkFBbUI7QUFFbkIsUUFBUSxDQUFDLDBDQUEwQyxFQUFDO0lBQ2xELG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLENBQUMsMkJBQTJCO0lBRWpFLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBQyxVQUFTLElBQUk7UUFFbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNWLFNBQVMsRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtZQUNqRCxLQUFLLEVBQUUsbURBQW1EO1lBQzFELFNBQVMsRUFBRSxJQUFJO1NBSWQsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDM0IsSUFBRyxLQUFLLEVBQUU7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDO2dCQUMvQywyRkFBMkY7Z0JBQzNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBRTFCO1lBQ0QsZ0NBQWdDO1lBRWhDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxL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