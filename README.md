# Gemspark Backend API

This project was generated with [`@vendure/create`](https://github.com/vendure-ecommerce/vendure/tree/master/packages/create).

Useful links:

- [Vendure docs](https://www.vendure.io/docs)
- [Vendure Discord community](https://www.vendure.io/community)
- [Vendure on GitHub](https://github.com/vendure-ecommerce/vendure)
- [Vendure plugin template](https://github.com/vendure-ecommerce/plugin-template)

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Docker (optional, for database setup)

# Vendure Server Project

Welcome to Gemspark backend graphql server powered by vendure ! This README provides a basic guide to get you started.



## Key Features

- **GraphQL**: Vendure uses GraphQL for its API, providing a powerful and efficient way to request and manipulate data.
  
- **Modular Architecture**: Vendure's modular design allows easy customization and extension to meet the unique needs of your e-commerce project.

- **Plugin System**: Extensive plugin support enables seamless integration of additional functionalities, from payment gateways to custom workflows.

- **Data Management**: Efficiently manage products, orders, customers, and other essential e-commerce data through a comprehensive set of GraphQL queries and mutations.

- **Authentication & Authorization**: Secure your API with built-in authentication and authorization mechanisms, ensuring data integrity and user privacy.


## Getting Started

To use Vendure API:

1. **Installation**: Set up a Vendure server by installing dependencies and configuring the necessary settings.

2. **Configuration**: Customize your e-commerce application by adjusting settings in the `vendure-config.ts` file.

3. **Data Setup**: Populate your store with products, categories, and other essential data to get started.

4. **GraphQL Queries & Mutations**: Interact with the API using GraphQL queries and mutations to retrieve and modify data.


## Directory structure

* `/src` contains the source code of your Vendure server. All your custom code and plugins should reside here.
* `/static` contains static (non-code) files such as assets (e.g. uploaded images) and email templates.

## Development

```
npm run dev
```

will start the Vendure server and [worker](https://www.vendure.io/docs/developer-guide/vendure-worker/) processes from
the `src` directory.

## Build

```
npm run build
```

will compile the TypeScript sources into the `/dist` directory.

## Production

For production, there are many possibilities which depend on your operational requirements as well as your production
hosting environment.

### Running directly

You can run the built files directly with the `start` script:

```
npm run start
```

You could also consider using a process manager like [pm2](https://pm2.keymetrics.io/) to run and manage
the server & worker processes.




## Plugins

In Vendure, your custom functionality will live in [plugins](https://www.vendure.io/docs/plugins/).
These should be located in the `./src/plugins` directory.

## Migrations

[Migrations](https://www.vendure.io/docs/developer-guide/migrations/) allow safe updates to the database schema. Migrations
will be required whenever you make changes to the `customFields` config or define new entities in a plugin.

The following npm scripts can be used to generate migrations:

```
npm run migration:generate [name]
```

The generated migration file will be found in the `./src/migrations/` directory, and should be committed to source control.
Next time you start the server, and outstanding migrations found in that directory will be run by the `runMigrations()`
function in the [index.ts file](./src/index.ts).

If, during initial development, you do not wish to manually generate a migration on each change to customFields etc, you
can set `dbConnectionOptions.synchronize` to `true`. This will cause the database schema to get automatically updated
on each start, removing the need for migration files. Note that this is **not** recommended once you have production
data that you cannot lose.

---

You can also run any pending migrations manually, without starting the server by running:

```
npm run migration:run
```

You can revert the most recently-applied migration with:

```
npm run migration:revert
```
