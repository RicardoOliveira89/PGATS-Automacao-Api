const users = require("./userService").users;
const transfers = require("./transferService").transfers;

function makeTransfer(from, to, amount) {
  const sender = users.find((user) => user.username === from);
  const recipient = users.find((user) => user.username === to);

  if (!sender || !recipient) {
    throw new Error("Usuário remetente ou destinatário não encontrado");
  }

  const isFavorite = sender.favorites.includes(to);
  if (!isFavorite && amount >= 5000) {
    throw new Error(
      "Transferências acima de R$ 5.000,00 só podem ser realizadas para favorecidos"
    );
  }
}

function getAllTransfers() {
  return transfers;
}

module.exports = { makeTransfer, getAllTransfers };
