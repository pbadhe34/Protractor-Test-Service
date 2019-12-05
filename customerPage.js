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
const protractor_1 = require("protractor");
class CustomerQuery {
    constructor() {
        this.searchInput = protractor_1.element(protractor_1.by.model('search'));
    }
    /*
      async openURL(): Promise<boolean> {
        await browser.get('http://localhost:8080/Customer-Service/');
        
      }
    */
    openURL() {
        protractor_1.browser.get('http://localhost:8080/Customer-Service/');
        var location = protractor_1.browser.getCurrentUrl();
        expect(protractor_1.browser.getCurrentUrl()).toMatch('/');
        location.then(function (url) {
            console.log('Browser url is ' + url);
            return true;
        });
        return location;
    }
    setSearch(value) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("searching for record with " + value);
            yield this.searchInput.sendKeys(value);
            protractor_1.browser.sleep(3000);
        });
    }
    // the output returns a native Promise<string>
    getResult() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("getting the result");
            var list = protractor_1.element.all(protractor_1.by.repeater('cust in customers'));
            var res = "";
            list.then(function (data) {
                console.log("The list is " + data);
            });
            expect(list.count()).toBeGreaterThanOrEqual(1);
            expect(list.count()).not.toBeLessThan(1);
            list.then(function (arr) {
                //at least one record should be there for maching the search text
                console.log("Processing the result");
                console.log("The record found is " + arr[0].getText());
                res = arr[0].getText();
            });
            // expect(arr[0].getText()).toEqual('jj'); 
            return list.get(1);
        });
    }
}
exports.CustomerQuery = CustomerQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VzdG9tZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsMkNBQWtEO0FBRWxELE1BQWEsYUFBYTtJQUExQjtRQUVFLGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUF1RDNDLENBQUM7SUFyREM7Ozs7O01BS0U7SUFFRixPQUFPO1FBQ0wsb0JBQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUN2RCxJQUFJLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRTVDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLENBQUE7WUFDcEMsT0FBTyxJQUFJLENBQUE7UUFDYixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sUUFBUSxDQUFBO0lBQ2pCLENBQUM7SUFHSyxTQUFTLENBQUMsS0FBYTs7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNsRCxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JCLENBQUM7S0FBQTtJQUVELDhDQUE4QztJQUN4QyxTQUFTOztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxJQUFJLElBQUksR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtZQUN4RCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFHYixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUE7WUFDcEMsQ0FBQyxDQUFDLENBQUE7WUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFFOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFHekMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQ3JCLGlFQUFpRTtnQkFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RCxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRXpCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsMkNBQTJDO1lBRTNDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDO0tBQUE7Q0FDRjtBQXpERCxzQ0F5REMifQ==