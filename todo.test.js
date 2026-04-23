const assert = require('node:assert');
const test = require('node:test');
const TodoList = require('./todo.js');

// ==========================================
// ЗАВДАННЯ 1: 2-3 тести з використанням простого «assert»
// ==========================================
const simpleList = new TodoList();

assert.strictEqual(simpleList.getTaskCount(), 0, "Помилка: Початковий список не порожній");

simpleList.addTask("Купити молоко");
assert.strictEqual(simpleList.getTaskCount(), 1, "Помилка: Завдання не додалося");


// ==========================================
// ЗАВДАННЯ 2: 2-3 тести структуровані (аналог unittest.TestCase)
// ==========================================
test('Тестування класу TodoList', async (t) => {
    
    await t.test('Повинно успішно додавати валідне завдання', () => {
        const todo = new TodoList();
        const result = todo.addTask("Вивчити тестування");
        
        assert.strictEqual(result, true);
        assert.strictEqual(todo.getTaskCount(), 1);
    });

    await t.test('Не повинно додавати порожнє завдання (валідація)', () => {
        const todo = new TodoList();
        const result = todo.addTask("   ");
        
        assert.strictEqual(result, false);
        assert.strictEqual(todo.getTaskCount(), 0);
    });

    await t.test('Повинно правильно видаляти завдання', () => {
        const todo = new TodoList();
        todo.addTask("Тестове завдання");
        const result = todo.deleteTask(0);
        
        assert.strictEqual(result, true);
        assert.strictEqual(todo.getTaskCount(), 0);
    });
});
