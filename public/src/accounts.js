function findAccountById(accounts, id) {
  const account = accounts.find((account) =>  account.id === id);
  return account;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  const id = account.id;
  let count = 0;

    books.forEach((book) => {
      let borrowsArr = book.borrows;
      const borrowed = borrowsArr.filter((borrow) => {
        if (borrow.id === id) {
          count ++;
        }
      });
    });
  
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  const id = account.id;

  return books.filter((book) => {
    return book.borrows.some((borrow) => {
      book.author = authors.find((author) => book.authorId === author.id);
      return borrow.id === id && !borrow.returned;
    });
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
