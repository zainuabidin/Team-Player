const Intern = require('../lib/Intern');
const intern = new Intern('zain', '123456', 'zain.111@hotmail.co.uk', 'MatthewBolton');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('zain');
    expect(intern.id).toBe('123456');
    expect(intern.email).toBe('zain.111@hotmail.co.uk');
    expect(intern.school).toBe('MatthewBolton');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('zain');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('123456');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('zain.111@hotmail.co.uk');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('MatthewBolton');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});