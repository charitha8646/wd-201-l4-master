let todoList = require("../todo.js");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
/* eslint-disable no-undef */
describe("Todo List Test Suite", () => {
  test("Should add a new todo", () => {
    add({
      title: "A test item",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(1);
  });
  test("Should mark a Todo as complete", () => {
    expect(all.length).toEqual(1);
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });
  test("Should return overdue items", () => {
   // expect(all.length).toEqual(1);
    expect(overdue().length).toEqual(0);   
    const today = new Date();
    const oneDay = 60 * 60 * 24 * 1000;
    add({
      title: "An overdue test item",
      completed: false,
      dueDate: new Date(today.getTime() - 2 * oneDay).toLocaleDateString(
        "en-CA"
      ),
    });
    expect(overdue().length).toBe(1);
    //expect(all.length).toEqual(2);

  });
  test("Should return due today items", () => {
    //expect(all.length).toEqual(2);
    expect(dueToday().length).toEqual(1);
    add({
      title: "Complete l4 milestone",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(dueToday().length).toBe(2);
   // expect(all.length).toBe(3);
    
  });
  test("Should return due later items", () => {
    //expect(all.length).toEqual(3);
    expect(dueLater().length).toEqual(0);
    const today = new Date();
    const oneDay = 60 * 60 * 24 * 1000;
    add({
      title: "Complete l5 milestone",
      completed: false,
      dueDate: new Date(today.getTime() + 2 * oneDay).toLocaleDateString(
        "en-CA"
      ),
    });
    
    expect(dueLater().length).toBe(1);
   // expect(all.length).toBe(4);

  });
});
