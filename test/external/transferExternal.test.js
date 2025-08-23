const request = require("supertest");
const { expect } = require("chai");

describe("Transfer Controller", () => {
  describe("POST /transfers", () => {
    it("Quando informoremetente e destinatario inexistentes recebe 400", async () => {
      const resposta = await request("http://localhost:3000")
        .post("/transfers")
        .send({
          form: "Sabrina",
          to: "Roberto",
          amount: 100,
        });
      expect(resposta.status).to.equal(400);
      expect(resposta.body).to.have.property(
        "error",
        "Usuário remetente ou destinatário não encontrado"
      );
    });
  });
});
