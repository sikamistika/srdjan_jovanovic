(function (){
    function Country(name, odds, continent){
        this.name = name,
        this.odds = odds,
        this.continent = continent,
        this.getCountry = function (){
            return this.name + ", " + this.odds + ", " + this.continent;
        }
    }
    var drzava = new Country("Srbija", "5", "EU");
    console.log(drzava.getCountry());
}) ();
    

(function (){
    function Person(name, surname, dateOfBirth){
        this.name = name,
        this.surname = surname,
        this.dateofbirth = dateOfBirth,
        this.getPerson = function (){
            return this.name + "," + this.surname + "," + this.dateOfBirth;
        }
    }
    var osoba = new Person("Srdjan", "Jovanovic", "03-04-1973");
    console.log(osoba.getPerson());
}) ();


(function() {
    function Player(Person, betAmount, Country){
        this.Person = Person,
        this.betAmount = betAmount,
        this.Country = Country,
        this.getPlayer = function () {
            return this.Person + ", " + this.betAmount + ", " + this.Country;
        }
    }
    
    var igrac = new Player(this.Person, "3", this.getCountry);
    console.log(igrac.getPlayer() );
}) ();

(function (){
    function Address(Country, city, postaCode, Street, Number){
    this.Country = Country,
    this.city = city,
    this.postaCode = postaCode,
    this.Street = Street,
    this.Number = Number,
    this.getAddress = function (){
        return this.Country + ", " + this.city + ", " + this.postaCode + ", " + this.Street + ", " + this.Number;
    }
        
    }
    var adresa = new Address(this.Country, "Pancevo", "26000", "Milosa Obrenovica", "47");
    console.log(adresa.getAddress());
}) ();


(function () {
    function BettingPlace (Address, postaCode, city, sumOfAllBets){
        this.Address = Address,
        this.postaCode = postaCode,
        this.city = city,
        this.sumOfAllBets = sumOfAllBets,
        this.getBettingPlace = function () {
            return this.Address + ", " + this.postaCode + ", " + this.city + ", " + this.sumOfAllBets;
        }
    }
    var suma = new BettingPlace("Milosa Obrenovica", "26000", "Pancevo", "100000");
    console.log(suma.getBettingPlace());
}) ();





