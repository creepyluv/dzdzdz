let arr = [
    {
      id: 1,
      name: "AZIZs_KABLUK",
      budget: 500000,
      tax: 12,
      expensesPerYear: [
        {
          for: "design",
          total: 60000,
        },
        {
          for: "material",
          total: 70000,
        },
        {
          for: "place",
          total: 120000,
        },
      ],
    },
    {
      id: 2,
      name: "KAMERON_CINEMA",
      budget: 600000,
      tax: 12,
      expensesPerYear: [
        {
          for: "camera",
          total: 90000,
        },
        {
          for: "actors",
          total: 140000,
        },
        {
          for: "electricity",
          total: 50000,
        },
      ],
    },
    {
      id: 3,
      name: "ISKANDARs_ZOO",
      budget: 450000,
      tax: 12,
      expensesPerYear: [
        {
          for: "animals",
          total: 100000,
        },
        {
          for: "cloune",
          total: 15000,
        },
        {
          for: "food",
          total: 70000,
        },
      ],
    },
    {
      id: 4,
      name: "AMINs_SOOOO",
      budget: 800000,
      tax: 12,
      expensesPerYear: [
        {
          for: "house",
          total: 200000,
        },
        {
          for: "cars",
          total: 150000,
        },
        {
          for: "family",
          total: 300000,
        },
      ],
    },
  ];
  
  let PlusArr = []
  let MinusArr = []
  
  for(let item of arr) {
      item.expensesPerMonth = 0 
      
  
      for(let itemTwo of item.expensesPerYear) {
        item.expensesPerMonth += itemTwo.total / 12
  
      }
     
     

      item.procent =  Math.round(item.expensesPerMonth * 100 / (item.budget / 12))
     
      if(item.procent < 70 ) {
        PlusArr.push(item)
      } else{
        MinusArr.push(item)
      }
          
      //item.total = item.budget - itemTwo.total

      //console.log(item.total);

  
  
  }
  


  for(var i = 0; i<PlusArr.length; i++)
  { 
      console.log("в плюсе " + PlusArr[i]["name"]);
  }


  
  for(var i = 0; i<MinusArr.length; i++)
  { 
      console.log("в минусе " + MinusArr[i]["name"]);
  }
