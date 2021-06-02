
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surnameOutput;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('lastNameOutput').innerText = initPerson.lastNameOutput;
    document.getElementById('genderOutput').innerText = initPerson.genderOutput;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYearOutput;
};

