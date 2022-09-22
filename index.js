const {VK} = require('vk-io')
const {HearManager} = require('@vk-io/hear')

const vk = new VK({
    token: 'vk1.a.9pBC_2IAoVGkTbpXEN1ifA_F74NXN49BcSSdO6KtcVdY-w2a9h74h7LOCQuyih1drcWj7wanR1wbapcOFG--Fh3K_uk9ejSFyJp5PREJ5mQbxtD-_i6ir9xaNQ2rSFdsgIl42_VNgef0wgq19ZJAjVEd9Wb5k3ch9gZ353wJ-C-95LRTOfsh48KkZ24YfHCq'
})
const bot = new HearManager()

vk.updates.on('message_new', msg => {
    if(msg.text === 'Кто такой Данияр?'){
        msg.send('Данияр черт.')
    } else if (msg.text === 'Привет'){
        msg.send('Привет, ' + msg.senderId)
    } else if (msg.text === 'Привет Лиггет'){
        msg.send('Привет, Данияр черт.')
    }
})

console.log('Bot is started')
vk.updates.start().catch(console.error)