# Brain games

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.

Игры:
- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.
- Определение четного числа.
- Определение наибольшего общего делителя.
- Определение простого числа.

## Установка

Требуется установленный [Node.js](https://nodejs.org/) на компьютере.

Команды для установки игр:
```
$ make install
$ make publish
$ npm link
```

## Запуск игр

- `$ brain-even` - определение четного числа
- `$ brain-calc` - калькулятор
- `$ brain-gcd` - определение наибольшего общего делителя
- `$ brain-prime` - определение простого числа
- `$ brain-progression` - прогрессия

## Пример игры

```
$ brain-progression
Welcome to the Brain Game!
What number is missing in this progression?
May I have your name? Roman
Hello, Roman!
Question: 14 .. 18 20 22 24 26 28
Your answer: 16 # Пользователь вводит ответ
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10 # Пользователь вводит ответ
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24 # Пользователь вводит ответ
Correct!
Congratulations, Roman!
```

## Badges

### Hexlet tests and linter status:
![Actions Status](https://github.com/alexxanderlee/frontend-project-lvl1/workflows/hexlet-check/badge.svg)

### CodeClimate Maintainability status:
[![Maintainability](https://api.codeclimate.com/v1/badges/bfcf6209ed1a6e7a919b/maintainability)](https://codeclimate.com/github/alexxanderlee/frontend-project-lvl1/maintainability)

### Eslint status:
![Eslint status](https://github.com/alexxanderlee/frontend-project-lvl1/workflows/eslint/badge.svg)
