var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',

  // 仅 SQLite 适用
  storage: 'path/to/database.sqlite'
});