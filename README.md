


# Finance Tracker

Это приложение для учета финансов, созданное на React с использованием SCSS и Bootstrap. Проект разработан и выполнен мной, Иваном, с целью помочь пользователям отслеживать свои доходы и расходы, а также вести учет текущего баланса.

## Технологии

- **React**: Основная библиотека для создания пользовательского интерфейса.
- **SCSS**: Используется для создания кастомных и адаптивных стилей.
- **Bootstrap**: Включен для использования готовых компонентов и сетки.
- **Git**: Система контроля версий для управления разработкой проекта.

## Функциональность

- Добавление транзакций с указанием описания и суммы.
- Удаление транзакций.
- Автоматический расчет текущего баланса.
- Проверка на заполненность поля суммы при добавлении транзакции.
- Центрирование всех элементов на странице для лучшей визуальной презентации.

## Как запустить проект

### 1. Клонирование репозитория

Клонируйте этот репозиторий на ваш локальный компьютер:

```bash
git clone https://github.com/van4xx/finance-tracker.git
```

### 2. Установка зависимостей

Перейдите в директорию проекта и установите необходимые зависимости:

```bash
cd finance-tracker
npm install
```

### 3. Запуск проекта

Для запуска проекта используйте команду:

```bash
npm start
```

Приложение запустится на [http://localhost:3000](http://localhost:3000). Откройте этот адрес в вашем веб-браузере для просмотра приложения.

## Структура проекта

- **src/components**: Содержит все компоненты React, такие как:
  - `Balance.js`: Компонент для отображения текущего баланса.
  - `TransactionList.js`: Компонент для отображения списка транзакций.
  - `TransactionForm.js`: Компонент для добавления новых транзакций.
- **src/App.js**: Главный компонент приложения, объединяющий все остальные компоненты.
- **src/App.scss**: Основной файл стилей SCSS, включающий кастомные стили.
- **src/index.js**: Точка входа в приложение, где происходит рендеринг корневого компонента `App`.

## Дальнейшие планы

- Добавить возможность редактирования транзакций.
- Реализовать фильтры для отображения транзакций за определенный период.
- Улучшить дизайн и анимации для более приятного пользовательского опыта.

---

Этот проект является учебным и был выполнен мной с целью улучшить навыки разработки на React, а также изучить интеграцию с SCSS и использование системы контроля версий Git.


