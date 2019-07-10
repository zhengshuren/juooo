const proxy = require('http-proxy-middleware');
var bodyParser = require('body-parser');
// 所有http请求都会从这个中间件过
module.exports =function (app){
    app.use(bodyParser.json());
    let data = [
        {
            "username" : "admin",
            "password" : "123456"
        }
    ]
    app.post('/login', function(req, res) {
        console.log(req.body)
        let userinfo = req.body;
        let result = {
            code : 200,
        }
        for (let i = 0; i < data.length; i++) {
            if (userinfo.username === data[i].username && userinfo.password === data[i].password) {
                result.msg = "登录成功";
                result.data = userinfo.username;
                res.json(result); 
            }
            
        }
        console.log(req);
        result.msg = '登录失败！密码或账号错误'
        res.json(result);
    });

    app.post('/register', function(req, res) {
        console.log(req.body)
        let userinfo = req.body;
        let result = {
            code : 200,
        }
        for (let i = 0; i < data.length; i++) {
            if (userinfo.username === data[i].username) {
                result.msg = "用户名已存在，的注册失败";
                res.json(result); 
            }
        }
        result.data = userinfo.username;
        result.msg = '注册成功'
        res.json(result);
    });

    app.use(proxy('/apis',{
        // 需要代理的主机
        target: 'https://m.juooo.com',
        // 是否跨域
        changeOrigin: true,
        //代理完成将url复写
        pathRewrite:{
            "^/apis":""
        }
    }))

    // app.use(proxy('/api',{
    //     // 需要代理的主机
    //     target:"http://localhost:3001",
    //     secure: false,
    //     pathRewrite:{
    //         "^/api":""
    //     }
    // }))
}

// https://m.juooo.com