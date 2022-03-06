const Engineer = require('../lib/Engineer');
const engineer = new Engineer('andrea', '123456', 'zain.111@hotmail.co.uk', 'zainuabidin');

test('to confirm if we can retrieve engineer object values ', () => {
    expect(engineer.name).toBe('andrea');
    expect(engineer.id).toBe('123456');
    expect(engineer.email).toBe('zain.111@hotmail.co.uk');
    expect(engineer.github).toBe('zainuabidin');
});