
<!-- <script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/x-mathjax-config"> MathJax.Hub.Config({ tex2jax: {inlineMath: [['$', '$']]}, messageStyle: "none" });</script> -->
# Лабораторная работа 4

- Выполнил: Кузьмин Артемий Андреевич
- Проверил: Наумова Надежда Александровна

## Цель работы

Познакомиться с подходами к проведению нагрузочного и стресс тестирования программного ПО.

## Задание

С помощью программного пакета Apache JMeter провести нагрузочное и стресс-тестирование веб-приложения в соответствии с вариантом задания.

В ходе нагрузочного тестирования необходимо протестировать 3 конфигурации аппаратного обеспечения и выбрать среди них наиболее дешёвую, удовлетворяющую требованиям по максимальному времени отклика приложения при заданной нагрузке (в соответствии с вариантом).

В ходе стресс-тестирования необходимо определить, при какой нагрузке выбранная на предыдущем шаге конфигурация перестаёт удовлетворять требованиям по максимальному времени отклика. Для этого необходимо построить график зависимости времени отклика приложения от нагрузки.

### Параметры тестируемого приложения

- URL первой конфигурации ($ 4400) - <http://stload.se.ifmo.ru:8080?token=518477805&user=-1355099300&config=1>;
- URL второй конфигурации ($ 7200) - <http://stload.se.ifmo.ru:8080?token=518477805&user=-1355099300&config=2>;
- URL третьей конфигурации ($ 9300) - <http://stload.se.ifmo.ru:8080?token=518477805&user=-1355099300&config=3>;
- Максимальное количество параллельных пользователей - 8;
- Средняя нагрузка, формируемая одним пользователем - 40 запросов в минуту;
- Максимально допустимое время обработки запроса - 870 мс.

<div style="page-break-after: always;"></div>

## Ход работы

### Нагрузочное тестирование

Настроим тест план в jmeter. Сначала настроим Thread Group

![Load Test. Thread group](./res/Load%20Test.%20Thread%20group.png)

Настроим http запросы. Первая конфигурация

![Load Test. Config 1](./res/Load%20Test.%20Config%201.png)

Вторая конфигурация

![Load Test. Config 2](./res/Load%20Test.%20Config%202.png)

Третья конфигурация

![Load Test. Config 3](./res/Load%20Test.%20Config%203.png)

Добавим Constant Throughput Timer и Duration Assertion

Так как нам нужно имитировать нагрузку в 40 запросов в минуту от одного пользователя, значение таймера поставим 320 (8 пользователей умножить на 40 запросов). Таким образом общая нагрузка от всех потоков составит $\frac{40 \  запр. \ в \ мин. \ от \ пользователя}{60 \ с.} \cdot 8 \ пользователей = 5\frac{1}{3}$ запроса в секунду

![Load Test. Constant Throughput Timer](./res/Load%20Test.%20Constant%20Throughput%20Timer.png)

![Load Test. Duration Assertion](./res/Load%20Test.%20Duration%20Assertion.png)

<div style="page-break-after: always;"></div>

#### Результаты тестов

##### Конфигурация 1

Сводная таблица

![Load Test. Results](./res/Load%20Test.%20Config%201.%20Results.png)

Зависимость времени отклика от времени

![Load Test. Config 1. Response over time](./res/Load%20Test.%20Config%201.%20Response%20over%20time.png)

Количество запросов в секунду

![Load Test. Config 1. Hits per second](./res/Load%20Test.%20Config%201.%20Hits%20per%20second.png)

Конфигурации 1 не подходит по времени отклика, подробный отчет доступен в папке [jmeter-load-1](./docs/jmeter-load-1/)

<div style="page-break-after: always;"></div>

##### Конфигурация 2

Сводная таблица

![Load Test. Results](./res/Load%20Test.%20Config%202.%20Results.png)

Зависимость времени отклика от времени

![Load Test. Config 2. Response over time](./res/Load%20Test.%20Config%202.%20Response%20over%20time.png)

Количество запросов в секунду

![Load Test. Config 2. Hits per second](./res/Load%20Test.%20Config%202.%20Hits%20per%20second.png)

Конфигурации 2 не подходит по времени отклика, подробный отчет доступен в папке [jmeter-load-2](./docs/jmeter-load-2/)

<div style="page-break-after: always;"></div>

##### Конфигурация 3

Сводная таблица

![Load Test. Results](./res/Load%20Test.%20Config%203.%20Results.png)

Зависимость времени отклика от времени

![Load Test. Config 3. Response over time](./res/Load%20Test.%20Config%203.%20Response%20over%20time.png)

Количество запросов в секунду

![Load Test. Config 3. Hits per second](./res/Load%20Test.%20Config%203.%20Hits%20per%20second.png)

Конфигурации 3 подходит по времени отклика, но 2 запроса из 8000 не прошли проверку. Так как эта конфигурация показала наилучший результат, выберем ее. Подробный отчет доступен в папке [jmeter-load-3](./docs/jmeter-load-3/)

<div style="page-break-after: always;"></div>

### Стресс тестирование

Добавим еще одну Thread Group для стресс теста. Сначала сделаем так, что тест выполняется до первой ошибки 503. Для этого ставим loop count infinity и высокий ramp up, чтобы видеть, как меняется пропускная способность со временем

![Stress Test. Thread Group](./res/Stress%20Test.%20Thread%20Group.png)

Теперь добавим post processor, который позволит воспринимать код 500 как успех

![Stress Test. Post Processor](./res/Stress%20Test.%20Post%20Processor.png)

Конфигурация запроса аналогична прошлому этапу

<div style="page-break-after: always;"></div>

Результат теста

![Stress Test. Results](./res/Stress%20Test.%20Results.png)

Изменение времени отклика со временем

![Stress Test. Response time over time](./res/Stress%20Test.%20Response%20time%20over%20time.png)

Количество запросов в секунду

![Stress Test. Hits per second](./res/Stress%20Test.%20Hits%20per%20second.png)

По этому графику видно, что в течение нескольких минут поддерживалась пропускная способность 30 запросов в секунду, а потом сервер вернул 503

<div style="page-break-after: always;"></div>

Соотношение потоков ко времени отклика

![Stress Test. Users to response time](./res/Stress%20Test.%20Users%20to%20response%20time.png)

По графику можно заметить, что 503 появилась примерно при трехстах одновременных пользователях

По итогу теста имеем пиковые показатели производительности системы, после которых она перестает функционировать:

- 30 запросов в секунду
- 300 пользователей одновременно

<div style="page-break-after: always;"></div>

## Листинг

Исходный код доступен на [github](https://github.com/SolidSn4ke/st-lab4)

## Вывод

В ходе работы я познакомился с подходами к проведению нагрузочного и стресс тестирований, а также научился работать с jmeter
