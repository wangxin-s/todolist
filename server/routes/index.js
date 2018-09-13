var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var list=[
  {
    time:'2017-12-08 15:00:23',
    name:'李白',
    address:'上海数字产业园',
    title:'我也不知道写点啥',
    content:'“这一天”，指的是腊八节。作者在腊八节前夜创作此诗，带有记念的性质。记念往昔的岁月，记念苦难和温暖，记念一个人。令我感到欣慰的，首先是这首诗里有“苦”，却不贩卖苦，而用一种节日的幸福轻轻遮盖了苦，用亲情化解了苦。“所有的五谷都在这一天集合/在锅里，母亲把它们放在一起”，开句就很温馨，有难得的丰盛。接着意象一转，“像小时候，把我们姐弟七个/放在小小的炕上”，转睛于人了，运用诗歌里常见的比喻和通感。“七个出窑的瓷器/脸皴着，妈妈一个个洗干净/像洗这些五谷杂粮”，比喻和通感没有走得很远，借助某个关联，又回到“五谷”上。“只有这一天/四季是团聚的，冷和暖/在一个锅里沸腾”，这算是补叙。所谓“四季是团聚的”，首先是指四季出产的谷物，在腊八粥里团聚。围着腊八粥，亲人团聚。“只是少了黑豆”，这句出人意外。团聚而有缺憾，是一种谷物的事实，同时也是这首诗突然产生的奇特之处。第二节更出其不意，“弟弟代替黑豆种在地里”，真是离奇，诗歌可以如此朴素平静而又扎心地表达？弟弟“代替”黑豆，黑豆可以长出来，弟弟却“今年，还是不能回家”。弟弟死了，他的死以及与黑豆的关联，叫人难忘，并导致永远的缺憾，沉痛的记念。一首诗的感人力量，也由此延伸。'
  },
  {
    time: '2017-12-08 15:00:23',
    name: '李白',
    address: '上海东方有线电视塔',
    title: '随便写点啥',
    content:'所有的五谷都在这一天集合在锅里，母亲把它们放在一起像小时候，把我们姐弟七个放在小小的炕上，七个出窑的瓷器脸皴着，妈妈一个个洗干净像洗这些五谷杂粮，只有这一天四季是团聚的，冷和暖在一个锅里沸腾，只是少了黑豆弟弟代替黑豆种在地里今年，还是不能回家'
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/home/data.json',function(req,res){
  res.json({
    "status": "0000",
    "message": "登录成功",
    "data":list
  })
});

router.post('/home/add.json',function(req,res){
  if(req.body.i){
    list.splice(req.body.i,1,{
      name:req.body.name,
      title:req.body.title,
      time:req.body.time,
      content:req.body.content,
      doneDate:'',//完成时间
      address:req.body.address,
    })
  }else{
    list.push(
        {
          name:req.body.name,
          title:req.body.title,
          time:req.body.time,
          content:req.body.content,
          doneDate:'',//完成时间
          address:'上海数字产业园',
        }
    );
  }
  res.json({
    "status": "0000",
    "message": "添加成功",
    "data":list
  })
});

router.post('/home/delete.json',function(req,res){
  console.log(req.body);
  list.splice(req.body.index,1);
  res.json({
    "status": "0000",
    "message": "删除成功",
    "data":list
  })
});

/* 路由重定向 */
router.get('/*', function (req, res, next) {
  res.render('index', {});
});

module.exports = router;
