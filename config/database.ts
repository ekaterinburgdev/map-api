export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', ''),
      user: env('POSTGRES_USER', ''),
      password: env('POSTGRES_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
