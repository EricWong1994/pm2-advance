module.exports = {
  apps: [{
    // cwd: '/data/learn-pm2/demo2/project1',
    cwd: '/Users/wangshihao/github/forks/pm2-advance/demo2/project1',
    name: 'pro-one',
    script: 'app.js',
    watch: ['.']
  },
  {
    cwd: '/Users/wangshihao/github/forks/pm2-advance/demo2/project2',
    name: 'pro-two',
    script: 'app.js',
    watch: ['.']
  }
  ]
}