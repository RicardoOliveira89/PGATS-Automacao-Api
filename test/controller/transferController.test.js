const request = require("supertest");
const sinon = require("sinon");
const app = require("../../app");
const { expect } = require("chai");
const transferService = require("../../services/transferService");

describe("Transfer Controller", () => {
  describe("POST /Transfers", () => {
    it("Quando informo remetente e destinatários inexistentes devo receber 400", async () => {
      const resposta = await request(app).post("/transfers").send({
        from: "Patricia",
        to: "Bruno",
        amount: 100,
      });
      expect(resposta.status).to.equal(400);
      expect(resposta.body).to.have.property(
        "error",
        "Usuário remetente ou destinatário não encontrado"
      );
    });

    it("Usando Mocks: Quando informo remetente e destinatários inexistentes devo receber 400", async () => {
      const transferServiceMock = sinon.stub(transferService, "makeTransfer");
      transferServiceMock.throws(
        new Error("Usuário remetente ou destinatário não encontrado")
      );
      const resposta = await request(app).post("/transfers").send({
        from: "Patricia",
        to: "Bruno",
        amount: 100,
      });
      expect(resposta.status).to.equal(400);
      expect(resposta.body).to.have.property(
        "error",
        "Usuário remetente ou destinatário não encontrado"
      );
      sinon.restore();
    });
  });
});
