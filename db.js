const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'ljiauntjmzcrzd',
  password: '038c08a2487aa69afafe88add625c9d19e52ee51ad25b40166834b8304cf6a0f',
  host: 'ec2-23-20-129-146.compute-1.amazonaws.com',
  port: 5432,
  database: 'd56kns9fiu3fri',
});

module.exports = pool;
