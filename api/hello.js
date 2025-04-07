export default function handler(req, res) {
  const currentTime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
  
  res.status(200).json({
    message: '你好，这是一个 Vercel Serverless 函数!',
    time: currentTime,
    env: process.env.VERCEL ? '生产环境' : '开发环境'
  });
}