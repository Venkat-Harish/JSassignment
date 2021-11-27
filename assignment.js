function person(FirstName ,LastName,Address){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.Address=Address
    }
    
    var p1 = new person("Venkat","Harish","Hyderabad");
    var p2 = new person("harshi","G","Banglore");
    var p3 = new person("Rahul","gupta","Patna");
    
    console.log(p1);
    console.log(p2);
    console.log(p3);