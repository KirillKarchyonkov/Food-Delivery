# 📋 Food-Delivery Backend - Подробный обзор проекта

## 🎯 Общее описание

Это **NestJS GraphQL сервис** для приложения доставки еды с интегрированной системой рецептов, управления заказами и доставки. Проект использует PostgreSQL для хранения данных и Prisma как ORM для работы с БД.

---

## 📚 Стек технологий

| Компонент | Версия | Назначение |
|-----------|--------|-----------|
| **NestJS** | 11.0.1 | Framework для построения scalable приложений |
| **GraphQL** | 16.12.0 | API с Apollo Driver |
| **PostgreSQL** | - | Реляционная база данных |
| **Prisma** | 7.3.0 | ORM для работы с БД |
| **JWT** | 11.0.2 | Аутентификация через токены |
| **Passport** | 11.0.5 | Стратегии аутентификации |
| **Argon2** | 0.44.0 | Хеширование паролей |
| **TypeScript** | Latest | Язык программирования |

---

## 🏗️ Архитектура проекта

### Структура папок

```
backend/
├── src/
│   ├── main.ts                    # Точка входа приложения
│   ├── app.module.ts              # Главный модуль (импортирует все)
│   ├── app.controller.ts          # REST контроллер (опционально)
│   ├── app.service.ts             # Основной сервис
│   ├── app.interface.ts           # Интерфейсы приложения
│   ├── config/                    # Конфигурационные файлы
│   │   ├── graphql.config.ts      # GraphQL конфигурация
│   │   └── jwt.config.ts          # JWT конфигурация
│   ├── auth/                      # Модуль аутентификации
│   │   ├── auth.module.ts         # Импорты и провайдеры
│   │   ├── auth.service.ts        # Логика регистрации/логина
│   │   ├── auth.resolver.ts       # GraphQL мутации
│   │   ├── auth.input.ts          # Input типы для GraphQL
│   │   ├── auth.interface.ts      # Интерфейсы для токенов
│   │   ├── decorators/            # Custom декораторы
│   │   │   ├── auth.decorator.ts  # @Auth() защита
│   │   │   └── current-user.decorator.ts  # @CurrentUser() получение юзера
│   │   ├── guards/                # Защиты (guards)
│   │   │   ├── auth.guard.ts      # JWT защита
│   │   │   └── admin.guard.ts     # Админ защита
│   │   └── strategies/
│   │       └── jwt.strategy.ts    # JWT Passport стратегия
│   ├── users/                     # Модуль управления пользователями
│   │   ├── users.module.ts
│   │   ├── users.service.ts       # Поиск и получение данных пользователей
│   │   ├── users.resolver.ts      # GraphQL queries
│   │   └── models/
│   │       └── user-profile.model.ts  # GraphQL модель профиля
│   ├── recipes/                   # Модуль рецептов
│   │   ├── recipes.module.ts
│   │   ├── recipes.service.ts     # (пока в разработке)
│   │   ├── recipes.resolver.ts    # GraphQL queries/mutations
│   │   └── ingredients/           # Подмодуль ингредиентов
│   │       ├── ingredients.module.ts
│   │       ├── ingredients.service.ts
│   │       └── ingredients.resolver.ts
│   ├── orders/                    # Модуль заказов
│   │   ├── orders.module.ts
│   │   ├── orders.service.ts      # (пока в разработке)
│   │   └── orders.resolver.ts     # GraphQL queries/mutations
│   ├── prisma/                    # Модуль для работы с БД
│   │   ├── prisma.module.ts       # Export PrismaService глобально
│   │   └── prisma.service.ts      # PrismaClient с подключением
│   └── utils/                     # Утилиты
│       └── is-dev.util.ts         # Проверка режима разработки
├── prisma/
│   ├── schema/                    # Prisma schema разбита на части
│   │   ├── schema.prisma          # Главный файл (подключает остальные)
│   │   ├── user.prisma            # Модели User, Profile, BodyMeasurement
│   │   ├── recipe.prisma          # Модели Recipe, Ingredient, RecipeIngredient
│   │   ├── order.prisma           # Модели Order, OrderItem, Courier
│   │   └── reactions.prisma       # Модели Comment, Like
│   ├── migrations/                # История миграций БД
│   │   ├── migration_lock.toml
│   │   ├── 20260126163809_create_user_table/
│   │   ├── 20260126165130_change_name_table/
│   │   ├── 20260128160503_create_all_tables/
│   │   ├── 20260128160940_update_table_atribute_names/
│   │   └── 20260128161035_update_table_atribute_names/
│   └── generated/                 # Автоматически сгенерированные типы Prisma
│       └── prisma/
│           ├── client.ts          # Prisma Client
│           ├── models/            # Типы для всех моделей
│           └── enums.ts           # TypeScript enums
├── test/                          # End-to-end тесты
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── package.json                   # Dependencies и scripts
├── tsconfig.json                  # TypeScript конфигурация
├── nest-cli.json                  # NestJS CLI конфигурация
└── eslint.config.mjs              # ESLint конфигурация
```

---

## 🗄️ База данных - Подробное описание

### 1. **Users & Profile** (user.prisma)

#### User
```prisma
model User {
    id        String @id @default(cuid())  // Уникальный ID (CUID формат)
    email     String @unique               // Email (уникален)
    password  String                       // Хеш пароля (Argon2)
    role      Role @default(USER)          // Роль: USER или ADMIN
    
    // Связи
    profile           Profile?              // 1-к-1 профиль
    measurements      BodyMeasurement?      // 1-к-1 физические параметры
    recipes           Recipe[]              // 1-ко-многим рецепты (автор)
    comments          Comment[]             // 1-ко-многим комментарии
    likes             Like[]                // 1-ко-многим лайки
    orders            Order[]               // 1-ко-многим заказы
    
    createdAt DateTime @default(now())      // Дата создания
    updatedAt DateTime @updatedAt           // Дата обновления
}
```

**Enum Role:**
- `USER` — обычный пользователь
- `ADMIN` — администратор системы

#### Profile
```prisma
model Profile {
    id       String @id @default(cuid())
    fullName String                        // Полное имя
    gender   Gender?                       // Пол: MALE, FEMALE
    age      Int?                          // Возраст
    bio      String?                       // Биография
    sites    String[] @default([])         // Массив ссылок на соцсети
    
    user     User @relation(fields: [userId], references: [id])
    userId   String @unique               // Внешний ключ
    
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}
```

#### BodyMeasurement
```prisma
model BodyMeasurement {
    id          String @id @default(cuid())
    
    // Основные параметры
    heightCm     Int?                       // Рост в см
    weightKg     Int?                       // Текущий вес в кг
    goalWeightKg Int?                       // Желаемый вес в кг
    
    // Объемы тела
    chestCm     Int?                       // Объем груди
    waistCm     Int?                       // Объем талии
    thighCm     Int?                       // Объем бедер
    armCm       Int?                       // Объем руки
    
    // Цели и активность
    activityLevel    ActivityLevel?         // Уровень активности
    natritionGoal    NutritionGoal?         // Цель по питанию
    
    user   User @relation(fields: [userId], references: [id])
    userId String @unique
    
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}
```

**Enum ActivityLevel:**
- `SEDENTARY` — малоподвижный образ жизни
- `LIGHT` — легкая активность (спорт 1-3 дня в неделю)
- `MODERATE` — умеренная активность (3-5 дней)
- `ACTIVE` — активный образ жизни (6-7 дней)
- `VERY_ACTIVE` — очень активный (спорт дважды в день)

**Enum NutritionGoal:**
- `WEIGHT_LOSS` — похудение
- `MAINTAINANCE` — поддержание веса
- `MUSCLE_GAIN` — набор мышечной массы

---

### 2. **Recipes & Ingredients** (recipe.prisma)

#### Recipe
```prisma
model Recipe {
    id          String @id @default(cuid())
    title       String                     // Название рецепта
    description String                     // Описание и способ приготовления
    calories    Int                        // Калорийность на порцию
    cookingTime Int @map("cooking_time")  // Время готовки в минутах
    difficulty  Difficulty                 // Сложность
    
    // Связи
    author      User @relation(fields: [authorId], references: [id])
    authorId    String @map("author_id")   // ID автора (пользователь)
    
    recipeIngredients RecipeIngredient[]    // Ингредиенты рецепта
    recipeSteps       RecipeStep[]          // Пошаговые инструкции
    comments          Comment[]             // Комментарии пользователей
    likes             Like[]                // Лайки
    
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}
```

**Enum Difficulty:**
- `EASY` — легко (новичку)
- `MEDIUM` — средне (опытному готовящему)
- `HARD` — сложно (требует умений)

#### Ingredient
```prisma
model Ingredient {
    id          String @id @default(cuid())
    name        String                     // Название ингредиента (например "яйцо")
    defaultUnit Unit                       // Единица измерения по умолчанию
    
    recipes RecipeIngredient[]             // Связь с рецептами
    
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}
```

#### RecipeIngredient
```prisma
model RecipeIngredient {
    id        String @id @default(cuid())
    
    // Данные ингредиента в контексте рецепта
    name      String                      // Название в рецепте (например "яйца куриные")
    iconUrl   String @map("icon_url")     // Ссылка на картинку ингредиента
    content   String                      // Описание (например "яйца сырые")
    quantity  Decimal                     // Количество (например 2)
    unit      Unit                        // Единица измерения
    price     Decimal                     // Цена ингредиента
    
    // Связи
    recipe    Recipe @relation(fields: [recipeId], references: [id])
    recipeId  String @map("recipe_id")
    
    ingredient   Ingredient @relation(fields: [ingredientId], references: [id])
    ingredientId String @map("ingredient_id")
    
    orderItems   OrderItem[]               // Используется в заказах
    
    // Уникальность
    @@unique([recipeId, ingredientId])    // Один ингредиент один раз в рецепте
    
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}
```

#### RecipeStep
```prisma
model RecipeStep {
    id          String @id @default(cuid())
    
    order       Int                        // Номер шага (1, 2, 3...)
    title       String                     // Название шага
    description String                     // Описание действия
    
    recipe      Recipe @relation(fields: [recipeId], references: [id])
    recipeId    String @map("recipe_id")
    
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}
```

**Enum Unit:**
```
GRAM, KILOGRAM,           // Вес
LITER, MILLILITER,        // Объем жидкости
CUP, TABLESPOON, TEASPOON, // Объемные меры
PIECE, CLOVES             // Штуки
```

---

### 3. **Orders & Delivery** (order.prisma)

#### Order
```prisma
model Order {
    id      String @id @default(cuid())
    orderId String @unique @map("order_id")  // Публичный ID заказа (например для отслеживания)
    status OrderStatus @default(PENDING)     // (Примечание: возможно опечатка - status)
    
    user    User @relation(fields: [userId], references: [id])
    userId  String @map("user_id")
    
    // orderItems связаны через RecipeIngredient
    
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}
```

**Enum OrderStatus:**
- `PENDING` — заказ ожидает обработки
- `PROCESSING` — готовится
- `COMPLETED` — завершен
- `CANCELLED` — отменен

#### OrderItem
```prisma
model OrderItem {
    id      String @id @default(cuid())
    
    quantity Int? @default(1)              // Количество ингредиента в заказе
    
    recipeIngredient   RecipeIngredient @relation(fields: [recipeIngredientId], references: [id])
    recipeIngredientId String @map("recipe_ingredient_id")
    
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}
```

#### Courier
```prisma
model Courier {
    id          String @id @default(cuid())
    name        String                     // Имя курьера
    phoneNumber String @unique             // Номер телефона (уникален)
    
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}
```

---

### 4. **Comments & Likes** (reactions.prisma)

#### Comment
```prisma
model Comment {
    id      String @id @default(cuid())
    content String                         // Текст комментария
    
    recipe  Recipe @relation(fields: [recipeId], references: [id])
    recipeId String @map("recipe_id")
    
    author  User @relation(fields: [authorId], references: [id])
    authorId String @map("author_id")      // Автор комментария
    
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}
```

#### Like
```prisma
model Like {
    id      String @id @default(cuid())
    content String                         // (Возможно хранит дополнительную информацию)
    
    recipe  Recipe @relation(fields: [recipeId], references: [id])
    recipeId String @map("recipe_id")
    
    author  User @relation(fields: [userId], references: [id])
    userId  String @map("author_id")       // Пользователь, поставивший лайк
    
    // Уникальность: один пользователь может лайкнуть рецепт только один раз
    @@unique([recipeId, userId])
    
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}
```

---

## 🔐 Система аутентификации

### Процесс регистрации (Register)

1. **Входные данные:** email, password
2. **Валидация:** 
   - Проверка уникальности email (case-insensitive)
   - Если email уже зарегистрирован → `BadRequestException`
3. **Хеширование:** пароль кодируется с помощью Argon2
4. **Создание:** запись в БД с role = USER
5. **Генерация токенов:**
   - **AccessToken**: JWT на 1 час
   - **RefreshToken**: JWT на 3 дня (сохраняется в httpOnly cookie)
6. **Ответ:** User объект + accessToken

```typescript
// Пример из auth.service.ts
async register(input: AuthInput) {
    const email = input.email.toLocaleLowerCase();
    const existingUser = await this.prisma.user.findFirst({
        where: { email: { equals: email, mode: 'insensitive' } }
    });
    
    if (existingUser) {
        throw new BadRequestException('Пользователь уже существует');
    }
    
    const user = await this.prisma.user.create({
        data: {
            email: email,
            password: await hash(input.password),  // Argon2
        }
    });
    
    const tokens = this.generateTokens({ id: user.id, role: user.role });
    return { user, ...tokens };
}
```

### Процесс логина (Login)

1. **Входные данные:** email, password
2. **Поиск:** пользователь по email
3. **Проверка пароля:** Argon2 verify
4. **Генерация токенов:** AccessToken (1ч) + RefreshToken (3д)
5. **Сохранение:** RefreshToken в cookie
6. **Ответ:** User объект + accessToken

### JWT Стратегия

```typescript
// strategies/jwt.strategy.ts
// Passport автоматически проверяет JWT в Authorization header
// Декодирует токен и добавляет payload (id, role) в request.user
```

### Защиты (Guards)

**AuthGuard:** Требует валидный JWT токен в Authorization header
```
Authorization: Bearer <accessToken>
```

**AdminGuard:** Требует роль ADMIN

---

## 📡 GraphQL API структура

### Конфигурация (config/graphql.config.ts)

```typescript
export const getCraftGraphQConfig = (configService: ConfigService): ApolloDriverConfig => ({
    autoSchemaFile: true,           // Генерирует schema.graphql из resolvers
    playground: true,               // Доступ к GraphQL Playground
    context: ({ req, res }) => ({ req, res }),  // Express контекст в resolvers
    sortSchema: true,               // Сортировка для красивого вывода
});
```

### Доступные мутации (пока)

#### auth.resolver.ts

```graphql
mutation Login($data: AuthInput!) {
    login(data: $data) {
        user { id email role }
        accessToken
    }
}

mutation Register($data: AuthInput!) {
    register(data: $data) {
        user { id email role }
        accessToken
    }
}
```

---

## 🛠️ Модули и их роли

### 1. **AuthModule** (auth/auth.module.ts)

**Провайдеры:**
- `AuthService` — логика регистрации/логина
- `AuthResolver` — GraphQL мутации
- `JwtStrategy` — проверка JWT
- `UsersService` — помощь для поиска пользователей

**Импорты:**
- `PrismaModule` — доступ к БД
- `PassportModule` — Passport интеграция
- `JwtModule` — JWT операции

**Ответственность:** Аутентификация пользователей, выдача токенов

---

### 2. **UsersModule** (users/users.module.ts)

**Сервис: UsersService**
```typescript
findAll()           // Все пользователи
findById(id)        // По ID + профиль + измерения
findByEmail(email)  // По email (case-insensitive)
```

**Ответственность:** CRUD пользователей, профилей

---

### 3. **RecipesModule** (recipes/recipes.module.ts)

**Подмодули:**
- `IngredientsModule` — управление справочником ингредиентов

**Статус:** В разработке

**Планы:**
- Создание рецептов
- Редактирование (только автор)
- Удаление (только автор или админ)
- Поиск по названию, сложности, времени
- Фильтрация по калорийности, целям питания

---

### 4. **OrdersModule** (orders/orders.module.ts)

**Статус:** Структура создана, логика в разработке

**Планы:**
- Создание заказа
- Отслеживание статуса
- История заказов пользователя
- Расчет стоимости
- Интеграция с курьерами

---

### 5. **PrismaModule** (prisma/prisma.module.ts)

**Провайдер:** `PrismaService`

**Роль:** Глобальное управление подключением к БД

```typescript
class PrismaService extends PrismaClient {
    onModuleInit() {
        // Подключение при старте
        await this.$connect();
    }
    
    onModuleDestroy() {
        // Отключение при завершении
        await this.$disconnect();
    }
}
```

---

## 🚀 Запуск проекта

### Переменные окружения (.env)

```env
DATABASE_URL=postgresql://user:password@localhost:5432/food_delivery
JWT_SECRET=ваш-секретный-ключ
JWT_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES_IN=3d
PORT=3000
MODE=development
```

### Миграции БД

```bash
# Создать новую миграцию (если изменили schema.prisma)
npx prisma migrate dev --name описание_изменения

# Применить миграции на production
npx prisma migrate deploy

# Просмотр схемы в UI
npx prisma studio
```

### npm Scripts

```bash
npm run start:dev        # Разработка с автоперезагрузкой
npm run build           # Компиляция в dist/
npm run start:prod      # Production mode
npm run lint            # ESLint + автофикс
npm test                # Jest unit тесты
npm test:e2e            # End-to-end тесты
npm run format          # Prettier форматирование
```

---

## 📊 Диаграмма связей таблиц

```
                    ┌─────────────────────────┐
                    │        User             │
                    ├─────────────────────────┤
                    │ id (CUID)               │
                    │ email (UNIQUE)          │
                    │ password (Argon2 hash)  │
                    │ role (ENUM)             │
                    └──────────┬──────────────┘
                               │
                ┌──────────────┼──────────────┐
                │              │              │
        ┌───────▼────────┐ ┌──▼───────────┐ ┌──▼──────────────────┐
        │   Profile      │ │ BodyMeasure  │ │ recipes (author)     │
        │ (1-к-1)        │ │ (1-к-1)      │ │ comments (author)    │
        └────────────────┘ └──────────────┘ │ likes (author)       │
                                             │ orders (user)        │
                                             └──────────────────────┘

    ┌─────────────────┐         ┌──────────────────┐
    │  Ingredient     │         │  Recipe          │
    │ (справочник)    │◄───────►│ (рецепт)         │
    └─────────────────┘         └────────┬─────────┘
              │                          │
              │                  RecipeIngredient
              │                  (M-to-M связь)
              │                          │
              │                          ├─► RecipeStep
              │                          ├─► Comment
              │                          └─► Like
              │
              └─► OrderItem ◄─── Order (заказ)
                              └─── User
```

---

## 🔍 Примеры запросов GraphQL

### Регистрация

```graphql
mutation {
  register(data: {
    email: "user@example.com"
    password: "password123"
  }) {
    user {
      id
      email
      role
    }
    accessToken
  }
}
```

### Логин

```graphql
mutation {
  login(data: {
    email: "user@example.com"
    password: "password123"
  }) {
    user {
      id
      email
    }
    accessToken
  }
}
```

---

## 🎓 Архитектурные паттерны

### 1. **Dependency Injection (DI)**
NestJS использует встроенный IoC контейнер для управления зависимостями:
```typescript
constructor(private prisma: PrismaService, private jwt: JwtService) {}
```

### 2. **Repository Pattern (частично)**
Prisma Service выступает как repository для доступа к данным.

### 3. **Service Layer**
Вся бизнес-логика находится в сервисах, separating concerns от resolvers.

### 4. **Guard Pattern**
Используются NestJS Guards для защиты routes/mutations.

### 5. **Strategy Pattern**
Passport strategies (JWT) для разных типов аутентификации.

---

## 📝 Чек-лист текущего состояния

### ✅ Реализовано:
- [x] Структура БД полностью спроектирована
- [x] Миграции БД созданы и применены
- [x] Система регистрации пользователей
- [x] Система логина с JWT
- [x] Хеширование паролей (Argon2)
- [x] GraphQL конфигурация
- [x] Prisma интеграция с PostgreSQL
- [x] Модульная архитектура

### 🔄 В разработке:
- [ ] CRUD операции для рецептов
- [ ] CRUD операции для заказов
- [ ] Полная GraphQL Schema для всех типов
- [ ] Фильтрация и поиск рецептов
- [ ] Реализация Decorators (@Auth, @CurrentUser)
- [ ] Unit тесты для всех сервисов

### ❌ TODO:
- [ ] Upload картинок рецептов (S3 или другое хранилище)
- [ ] История заказов с пагинацией
- [ ] Система рейтингов для рецептов
- [ ] Email верификация при регистрации
- [ ] Reset пароля
- [ ] Интеграция с платежной системой
- [ ] Уведомления о заказе (WebSocket или Email)
- [ ] Логирование (Winston, Pino)
- [ ] API документация (Swagger)

---

## 💡 Логика приложения

### Основной workflow:

1. **Пользователь регистрируется** → система создает User запись с role=USER
2. **Заполняет профиль** → data в Profile + BodyMeasurement таблицах
3. **Просматривает рецепты** → система показывает recipes подходящие по его целям питания
4. **Создает заказ** → выбирает ингредиенты из рецептов → OrderItem записи
5. **Отслеживает заказ** → видит статус (PENDING → PROCESSING → COMPLETED)
6. **Может оставлять комментарии и лайки** → Comments и Likes таблицы
7. **Администратор** → может управлять справочниками и контентом

---

## 📚 Дополнительные ресурсы

- [NestJS Documentation](https://docs.nestjs.com/)
- [GraphQL with Apollo](https://www.apollographql.com/)
- [Prisma ORM](https://www.prisma.io/docs/)
- [JWT Best Practices](https://tools.ietf.org/html/rfc7519)

---

**Версия:** 1.0.0  
**Дата обновления:** 3 февраля 2026  
**Автор проекта:** Кирилл Карчёнков
