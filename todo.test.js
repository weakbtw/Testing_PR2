const assert = require('node:assert');
const { test, describe, it, beforeEach } = require('node:test');
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
describe('ЗАВДАННЯ 2: Фікстури та параметризація', () => {
    let todoList;

    // АНАЛОГ @pytest.fixture
    beforeEach(() => {
        todoList = new TodoList();
    });

    it('Тест з використанням аналога фікстури (чистий стан)', () => {
        todoList.addTask("Завдання з фікстури");
        assert.strictEqual(todoList.getTaskCount(), 1);
    });

    // АНАЛОГ @pytest.mark.parametrize
    const testCases = [
        { task: "Купити хліб", expectedCount: 1 },
        { task: "Зробити ТПЗ", expectedCount: 1 },
        { task: "   ", expectedCount: 0 }
    ];

    testCases.forEach(({ task, expectedCount }) => {
        it(`Параметризований тест: додавання "${task}"`, () => {
            todoList.addTask(task);
            assert.strictEqual(todoList.getTaskCount(), expectedCount);
        });
    });

// ==========================================
// ЗАВДАННЯ 3: Аналог with pytest.raises
// ==========================================
describe('ЗАВДАННЯ 3: Очікування помилки', () => {
    it('Повинно генерувати помилку при невірному індексі (аналог pytest.raises)', () => {
        const todoList = new TodoList();
        
        assert.throws(
            () => {
                todoList.getTask(99);
            },
            Error,
            "Очікувалась помилка 'Завдання не знайдено'"
        );
    });
});

// ==========================================
// ЗАВДАННЯ 4 та 5: Аналоги skip та xfail
// ==========================================
describe('ЗАВДАННЯ 4 та 5: Пропуск тестів та очікувані помилки', () => {

    // АНАЛОГ @pytest.mark.skip
    it('Пропущений тест (аналог pytest.mark.skip)', { skip: 'Функція ще не реалізована' }, () => {
        const todoList = new TodoList();
        todoList.addTask("Майбутнє завдання");
        assert.strictEqual(todoList.getTaskCount(), 999);
    });

    // АНАЛОГ @pytest.mark.xfail
    it('Очікувано невдалий тест (аналог pytest.mark.xfail)', { todo: 'Відомий дефект у логіці' }, () => {
        const todoList = new TodoList();
        todoList.addTask("Завдання з дефектом");
        assert.strictEqual(todoList.getTaskCount(), 0);
    });

});

// ==========================================
// ЗАВДАННЯ 6: Помилкові тести та звіт
// ==========================================
describe('ЗАВДАННЯ 6: Демонстрація звіту про помилку', () => {
    it('Цей тест навмисно падає для перевірки звіту', () => {
        const todoList = new TodoList();
        todoList.addTask("Реальне завдання");
        
        assert.strictEqual(todoList.getTaskCount(), 5, "Штучно створена помилка для звіту");
    });
});

});
