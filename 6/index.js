const user1 = new User('Paul McCartney', 'paul', '1234');
const user2 = new User('George Harrison', 'george', '5678');
const user3 = new User('Ringo Starr', 'ringo', '8523');
const admin = new SuperUser('John Lennon', 'john', '0000', 'admin');

user1.showInfo(); // Name: Paul McCartney, Login: paul
admin.showInfo(); // Name: John Lennon, Login: john, Role: admin

console.log(`Всего обычных пользователей: ${User.getUserCount()}`); // Всего обычных пользователей: 3
console.log(`Всего супер-пользователей: ${SuperUser.getSuperUserCount()}`); // Всего супер-пользователей: 1

// Изменение свойств
user3.name = 'Ringo Star'; // Доступно для изменения
user1.password = 'Pa$$w0rd'; // Доступно для изменения

console.log(user3.name); // Ringo Star
// console.log(user2.password); // Ошибка: свойство password недоступно для чтения
// user2.login = 'geo'; // Ошибка: login доступен только для чтения