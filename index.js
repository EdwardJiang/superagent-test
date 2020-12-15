const superagent = require('superagent');
const proxyAgent = require('proxy-agent');

const url = 'http://baidu.com';
const myAgent = proxyAgent(url);
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36';
const agent = superagent.agent(myAgent);

console.log('agent', agent);
agent
  .get('https://api.uomg.com/api/rand.music')
  .query({ sort: '热歌榜', format: 'json' })
  .set('User-Agent', userAgent)
  .then((res) => {
    console.log('热歌榜', res.body);
    console.log('热歌榜agent', res.request.agent);
  })
  .catch(console.error);

agent
  .get('https://api.66mz8.com/api/music.163.php')
//   .query({ name: '我爱你' })
  .set('User-Agent', userAgent)
  .then((res) => {
    console.log('音乐搜索agent', res.request.agent);
  })
  .catch((err) => {
    console.error('音乐搜索err', err);
  });
