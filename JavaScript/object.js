const a = {
    "name":"Pranav",
    "city":"Hyderabad"
}
console.log(a);
console.log(a["city"]);
console.log(a.name);
a["name"]="Vivek"
console.log(a);
a.city = "Benguluru";
console.log(a)
a["lang"]="Telugu";
console.log(a)
a.year=2020;
console.log(a);
const {lang,year}=a;
console.log(lang);
console.log(year);