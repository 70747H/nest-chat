export default () => ({
    port: parseInt(process.env.NODE_PORT, 10),
    origin: process.env.SERVER_ORIGIN,
    database: {
      type: process.env.DATABASE_TYPE,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: (process.env.TYPEORM_SYNC === 'true'),
      logging: (process.env.TYPEORM_LOGGING === 'true'),
      maxQueryExecutionTime: parseInt(process.env.TYPEORM_MAX_QUERY_EXECUTION_TIM, 10)
    }
  });