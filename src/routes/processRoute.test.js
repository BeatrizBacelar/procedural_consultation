const request = require('supertest')
const server = require('../app')

test('acessa a rota /get_courts e deve retornar a lista de tribunais', async () => {
  const response = await request(server).get('/get_courts');
  expect(response.status).toEqual(200);
  expect(response.text).toContain("[\"TJSP\",\"TRF\"]");
});
