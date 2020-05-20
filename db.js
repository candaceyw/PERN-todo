const Pool = require('pg').Pool;

// const pool = new Pool({
//   user: 'postgres',
//   password: 'Bokeh2470',
//   host: 'localhost',
//   port: 5432,
//   database: 'perntodo',
// });

const pool = new Pool({
  user: 'aubqetdxlwktks',
  password: 'de311c77cfcc78dc8a43430cb8d03e90adabc208c78b8850686082ed617a9a11',
  host: 'ec2-35-171-31-33.compute-1.amazonaws.com',
  port: 5432,
  database: 'dd0esb4ijk51mv',
});

module.exports = pool;
