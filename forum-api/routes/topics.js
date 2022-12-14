var express = require('express');
var router = express.Router();
const Topics=require('../shcemas/topics.schema')
/* GET users listing. */
router.get('/',async function(req, res, next) {
    const {section}=req.body
    const topics=await Topics.find(
        {section})
  res.send(topics);
});
router.post('/',async function(req,res,next){
    const { title,
        text,
        section,
        member,}=req.body
    const newTopic=await Topics.create({
        title,
        text,
        section,
        member,
        createAt:new Date()
    })
    res.send(newTopic)
})

router.put('/',async function(req,res,next){
    const { title,
        text,_id}=req.body
    const newTopic=await Topics.findByIdAndUpdate(_id,{
        title,
        text
    },{new:true})
    res.send(newTopic)
})

router.delete('/',async function(req,res,next){
    const {_id}=req.body
    const newTopic=await Topics.findByIdAndUpdate(_id,{
        isVisible:false,
    },{new:true})
    res.send(newTopic)
})

module.exports = router;