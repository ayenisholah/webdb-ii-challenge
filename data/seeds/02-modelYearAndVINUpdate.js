
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'Toyota', model: 'Camry', year: 2007, VIN: randomString(17, '#aA')},
        {make: 'BMW', model: 'X6', year: 1985, VIN: randomString(17, '#aA')},
        {make: 'Tesla', model: '3', year: 2010, VIN: randomString(17, '#aA')},
      ]);
    });
};


function randomString(length, chars) {
  var mask = '';
  if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
  if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (chars.indexOf('#') > -1) mask += '0123456789';
  var result = '';
  for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
  return result;
}
