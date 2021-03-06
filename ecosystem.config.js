module.exports = {
  apps: [{
    name: 'ayampresident',
    script: 'index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-220-246-159.ap-southeast-1.compute.amazonaws.com',
      key: '~/.ssh/deliveryAyampresident.pem',
      ref: 'origin/master',
      repo: 'git@github.com:briandpassa/delivery.git',
      path: '/home/ubuntu/ayampresident',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
