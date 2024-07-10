/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc228b1d27838a767',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '5001d466d37c798672327b130a3fc80e',

  PROVINCE: '广东',
  CITY: '肇庆',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'orOzb6I-Ktt0ks209Kx1kHeaNUcY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '4u4R32XfoRJSmbBAx352XAq4yvC9hpyRxXs7zHOYcB4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {type: '*生日', name: '小猪咪的', year: '2005', date: '08-18',},
        {type: '生日', name: '你的大猪头的', year: '2003', date: '02-22', },
        {type: '节日', name: '相识纪念日', year: '2023', date: '11-04',},
        {type: '节日', name: '在一起的纪念日', year: '2023', date: '12-01',},
      ],
      FESTIVALS_LIMIT:0
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-12-01' },
       { keyword: 'birthday_message', date: '2024-09-21' },
      ],
     {note_en.DATA},
     {note_ch.DATA},
    },
  ],
  


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '4u4R32XfoRJSmbBAx352XAq4yvC9hpyRxXs7zHOYcB4',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'orOzb6I-Ktt0ks209Kx1kHeaNUcY',
    }
  ],

}

module.exports = USER_CONFIG

