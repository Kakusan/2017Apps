module.exports = {
  apps : [
    {
      name      : "apps18",
      script    : "bin/www",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    }
  ]
}
