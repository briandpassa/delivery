module.exports = {
  apps: [{
    name: 'ayampresident',
    script: './src/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-255-221-185.ap-southeast-1.compute.amazonaws.com',
      key: '~/.ssh/deliveryAyampresident.pem',
      ref: 'origin/master',
      repo: 'git@github.com:briandpassa/delivery.git',
      path: '/home/ubuntu/ayampresident',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
