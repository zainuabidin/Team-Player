const Engineer = require('../lib/Engineer');
const engineer = new Engineer('andrea', '123456', 'zain.111@hotmail.co.uk', 'zainuabidin');

test('to confirm if we can retrieve engineer object values ', () => {
    expect(engineer.name).toBe('andrea');
    expect(engineer.id).toBe('123456');
    expect(engineer.email).toBe('zain.111@hotmail.co.uk');
    expect(engineer.github).toBe('zainuabidin');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('andrea');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('123456');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('zain.111@hotmail.co.uk');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('zainuabidin');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});