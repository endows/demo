bodys = [
  'これやばい',
  'ゴール！！！！！',
  'これで３点目',
  '本田つよ',
  'よっしゃあああああああ',
  'これは勝ったでしょw',
  '相手GKすごかったわ',
  'オフサイドじゃね？',
  'よっしゃPK！！！！',
  '外すなよ・・・・',
  'バルス',
  'ピンチじゃん',
]

if (Meteor.isClient) {
  Meteor.startup(function(){
    setInterval(function(){
      var rand_id = Math.floor( Math.random()*100 % 5 ) + 1
      var body = bodys[Math.floor(Math.random()*bodys.length)];
      Posts.insert({user:rand_id,channel:'v53t4xMY24GgTg9Nt',body:body,createAt:Date.now()})
    },300)
  })
}
