const request = require('supertest');
const app = require('../../app');
const connection = require('../../src/database/conection');

describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAD1212",
	        email: "danilo@gmail.com",
	        whatsapp: "51111111111",
	        city: "Franca",
	        uf: "SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    })
});