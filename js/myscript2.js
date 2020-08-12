function calculateAge(birthDate) {
    let now = new Date();
    let currentYear = now.getFullYear();
    let birthYear = birthDate.getFullYear(); 
    let age = currentYear - birthYear;
    if (now < new Date(birthDate.setFullYear(currentYear))) {
      age = age - 1;
    }
    return age;
}
console.log(calculateAge(new Date(2002, 5, 10)));



