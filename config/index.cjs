/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx01e027c0df93c92c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4b45e689a02f8a67a59a5fafada88525',

  PROVINCE: '福建',
  CITY: '厦门',

  USERS: [
    {
      // 想要发送的人的名字
      name: '太早',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: ["oONpg6asbsqw7oeLwEdppYy1jU5E", "oONpg6bWmUl-aN03LZsFvetNGhkY"],
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'P40HrrBrYOv1uDiuVi4Z2gZ9pnbjjP_nhLGdRgyOp3c',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-30',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
//         {
//           type: '*生日', name: '宝贝', year: '2000', date: '05-30',
//         },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '美女宝贝', year: '2000', date: '04-27', 
        },
         {
          type: '*生日', name: '丘比龙', year: '2000', date: '08-27', 
        },
//         {
//           type: '节日', name: '认识', year: '2022', date: '09-08',
//         },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-29' },
        // 一周年纪念日
        { keyword: 'anniversary_day', date: '2023-10-29' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

