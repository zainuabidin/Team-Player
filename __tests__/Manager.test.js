const Manager = require('../lib/Manager');
const manager = new Manager('zain', '123456', 'zain.111@hotmail.co.uk', '0121000000');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('zain');
    expect(manager.id).toBe('123456');
    expect(manager.email).toBe('zain.111@hotmail.co.uk');
    expect(manager.officeNumber).toBe('0121000000');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('zain');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('123456');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('zain.111@hotmail.co.uk');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('0121000000');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});