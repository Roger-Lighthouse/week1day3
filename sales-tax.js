
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function p(item){
  console.log(item);

}

function getTaxRate(province){
  return salesTaxRates[province];
}

function sumSales(array5){
  var total=0;
  for(i=0;i<array5.length;i++){
    total+=array5[i];
  }
  return total;
}

function sumTax(array, taxRate){
  var total=0;
  for(i=0;i<array.length;i++){
    total+=(array[i]*taxRate);
  }
  return total;
}

function calculateSalesTax(salesData, taxRates) {
  results={};
  for(var i=0; i<salesData.length; i++){
      var co=salesData[i];
      taxRate=getTaxRate(co.province);
      totalSales5=sumSales(co.sales);
      totalTaxes5=sumTax(co.sales, taxRate);
      if(!results[co.name]){
        results[co.name]={totalSales: totalSales5, totalTaxes: totalTaxes5};
      }else{
        obj=results[co.name];
        obj.totalSales+=totalSales5;
        obj.totalTaxes+=totalTaxes5;
      }
  }
  return results;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/