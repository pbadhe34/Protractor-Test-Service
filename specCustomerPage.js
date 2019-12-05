"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// local import of the exported AngularPage class
const customerPage_1 = require("./customerPage");
describe('test the customer page for search record', () => {
    it('should be aletast one record fpund matching in the result', () => __awaiter(void 0, void 0, void 0, function* () {
        const query = new customerPage_1.CustomerQuery();
        yield query.openURL(); //The eqiulavalent code is next
        /*
       var promiseCheckURL = query.openURL();
   
        promiseCheckURL.then(function(result){
            console.log("The page open result is "+result);
         });
      */
        yield query.setSearch('Usha');
        const resultPromise = query.getResult();
        resultPromise.then(function (data) {
            console.log("The query result is " + data[0]);
        });
        //expect(await query.getResult()).toEqual('Hello');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY0N1c3RvbWVyUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWNDdXN0b21lclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpREFBaUQ7QUFDakQsaURBQStDO0FBRy9DLFFBQVEsQ0FBQywwQ0FBMEMsRUFBRSxHQUFHLEVBQUU7SUFDeEQsRUFBRSxDQUFDLDJEQUEyRCxFQUFFLEdBQVMsRUFBRTtRQUN6RSxNQUFNLEtBQUssR0FBRyxJQUFJLDRCQUFhLEVBQUcsQ0FBQztRQUVuQyxNQUFNLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLCtCQUErQjtRQUVwRDs7Ozs7O1FBTUE7UUFHRCxNQUFNLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHOUIsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3ZDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDN0MsQ0FBQyxDQUFDLENBQUE7UUFFRixtREFBbUQ7SUFDckQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=