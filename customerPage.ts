


import { browser, element, by } from 'protractor';

export class CustomerQuery {

  searchInput = element(by.model('search'))

  /*
    async openURL(): Promise<boolean> {
      await browser.get('http://localhost:8080/Customer-Service/');
      
    }
  */

  openURL(): any {
    browser.get('http://localhost:8080/Customer-Service/');
    var location = browser.getCurrentUrl()
    expect(browser.getCurrentUrl()).toMatch('/')

    location.then(function (url) {
      console.log('Browser url is ' + url)
      return true
    });
    return location
  }


  async setSearch(value: string): Promise<void> {
    console.log("searching for record with " + value);
    await this.searchInput.sendKeys(value);
    browser.sleep(3000)
  }

  // the output returns a native Promise<string>
  async getResult(): Promise<string> {
    console.log("getting the result");
    var list = element.all(by.repeater('cust in customers'))
    var res = "";


    list.then(function (data) {
      console.log("The list is " + data)
    })

    expect(list.count()).toBeGreaterThanOrEqual(1)

    expect(list.count()).not.toBeLessThan(1);


    list.then(function (arr) {
      //at least one record should be there for maching the search text
      console.log("Processing the result");
      console.log("The record found is " + arr[0].getText());
      res = arr[0].getText();

    });
    // expect(arr[0].getText()).toEqual('jj'); 

    return list.get(1);
  }
}
