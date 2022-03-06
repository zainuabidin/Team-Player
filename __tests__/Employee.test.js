const Employee = require('../lib/Employee');
const employee = new Employee('zain', '5768098', 'xan.abdn@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('zain');
    expect(employee.id).toBe('5768098');
    expect(employee.email).toBe('xan.abdn@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('zain');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('5768098');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('xan.abdn@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});
