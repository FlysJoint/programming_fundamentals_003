const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("check if title exists in catalogue", () => {
      expect(catalogueService.checkBookByTitle("The Origin of Species")).toBe(true);
      expect(catalogueService.checkBookByTitle("Great Expectations")).not.toBe(false); // I know it's not pretty, I'm just seeing it work
      expect(catalogueService.checkBookByTitle("Wolf Hall")).toBe(true);
    });
    test("check if title doesn't exist in catalogue", () => {
      expect(catalogueService.checkBookByTitle("The Chronicles of Narnia")).toBe(false);
      expect(catalogueService.checkBookByTitle("Mein Kampf")).not.toBe(true);
      expect(catalogueService.checkBookByTitle("Don Quixote")).toBe(false);
    });
  });

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("count books starting with letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
      expect(catalogueService.countBooksByFirstLetter("T")).toEqual(5);
      expect(catalogueService.countBooksByFirstLetter("2")).not.toBe(0);
    });
    test("count books starting with letter", () => {
      expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
      expect(catalogueService.countBooksByFirstLetter("Q")).not.toBeGreaterThan(0);
      expect(catalogueService.countBooksByFirstLetter("Z")).toBe(0);
    });
    test("count books starting with letter in lowercase", () => {
      expect(catalogueService.countBooksByFirstLetter("w")).not.toBe(0);
      expect(catalogueService.countBooksByFirstLetter("t")).toBeGreaterThan(0);
      expect(catalogueService.countBooksByFirstLetter("g")).toBeGreaterThan(0);
    });
  });

  describe("catalogueService.getQuantity", () => {
    test("count how many of a title are in the catalogue", () => {
      expect(catalogueService.getQuantity("The Origin of Species")).toBe(50);
      expect(catalogueService.getQuantity("Great Expectations")).toEqual(1);
      expect(catalogueService.getQuantity("Wolf Hall")).not.toBeLessThanOrEqual(32);
    });
    test("count how many of a title are in the catalogue", () => {
      expect(catalogueService.getQuantity("The Chronicles of Narnia")).toBe(0);
      expect(catalogueService.getQuantity("Mein Kampf")).not.toBeGreaterThan(0);
      expect(catalogueService.getQuantity("Don Quixote")).toBe(0);
    });
  });

  describe("catalogueService.getBooksByAuthor", () => {
    test("get all the books by a particular author", () => {
      expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
  {title: 'A Tale of Two Cities', author: 'Charles Dickens', quantity:3},
  {title: 'Oliver Twist', author: 'Charles Dickens', quantity:7},
  {title: 'Great Expectations', author: 'Charles Dickens', quantity:1}
]);
      expect(catalogueService.getBooksByAuthor("Hilary Mantel")).toEqual([
  {title: 'Wolf Hall', author: 'Hilary Mantel', quantity:33},
  {title: 'Bring Up The Bodies', author: 'Hilary Mantel', quantity:31},
  {title: 'A Place of Greater Safety', author: 'Hilary Mantel', quantity:11},
  {title: 'Giving Up the Ghost', author: 'Hilary Mantel', quantity:8},
  {title: 'The Assassination of Margaret Thatcher', author: 'Hilary Mantel', quantity:43}
]);
      expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual([
  { title: "2666", author: "Robert Bolaño", quantity: 17 },
  { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
]);
    });
    test("get all the books by a particular author", () => {
      expect(catalogueService.getBooksByAuthor("Charlotte Bronte")).toEqual([]);
      expect(catalogueService.getBooksByAuthor("Emily Bronte")).toEqual([]);
      expect(catalogueService.getBooksByAuthor("Anne Bronte")).toEqual([]);
    });
  });

  describe("catalogueService.checkQuantity", () => {
    test("check if a title has quantity over an amount", () => {
      expect(catalogueService.checkQuantity("Between the Assassinations", 6)).toBe(true);
      expect(catalogueService.checkQuantity("The Yellow Wallpaper", 10)).toBe(true);
      expect(catalogueService.checkQuantity("Wolf Hall", 24)).toBe(true);
    });
    test("check if a title has quantity over an amount", () => {
      expect(catalogueService.checkQuantity("Dracula", 2)).toBe(false);
      expect(catalogueService.checkQuantity("Great Expectations", 27)).toBe(false);
      expect(catalogueService.checkQuantity("Wolf Hall", 154)).toBe(false);
    });
  });

});
