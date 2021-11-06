module.exports = {
  'type': 'postgres',
  'entities': [process.env.ENTITY_PATH],
  'synchronize': true,
  'host': process.env.DATABASE_HOST,
  'port': process.env.DATABASE_PORT,
  'username': process.env.DATABASE_USER,
  'password': process.env.DATABASE_PASSWORD,
  'database': process.env.DATABASE_NAME,
}
