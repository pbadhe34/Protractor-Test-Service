// local import of the exported AngularPage class
import { CustomerQuery } from './customerPage';

 
describe('test the customer page for search record', () => {
  it('should be aletast one record fpund matching in the result', async () => {
    const query = new CustomerQuery ();

    await query.openURL();//The eqiulavalent code is next
    
     /*
    var promiseCheckURL = query.openURL();

     promiseCheckURL.then(function(result){
         console.log("The page open result is "+result);
      });
   */

    
    await query.setSearch('Usha');
   

    const resultPromise = query.getResult()
    resultPromise.then(function(data){

      console.log("The query result is "+data[0])
    })
    
    //expect(await query.getResult()).toEqual('Hello');
  });
});
