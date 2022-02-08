
$(document).ready(function () {
    init();  
});

document.oncontextmenu = function (event) {
  event.preventDefault();
};

var JinengData =[
  {
 "ID": 0,
 "技能": "凌人",
 "阶段": 0,
 "优先级": 2,
 "属性": ["攻击"]
 },
 {
 "ID": 1,
 "技能": "盗书",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "直伤"]
 },
 {
 "ID": 2,
 "技能": "战绝",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击"]
 },
 {
 "ID": 3,
 "技能": "乱击",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击"]
 },
 {
 "ID": 4,
 "技能": "天义",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "多刀"]
 },
 {
 "ID": 5,
 "技能": "义绝",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击"]
 },
 {
 "ID": 6,
 "技能": "连计",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "多刀"]
 },
 {
 "ID": 7,
 "技能": "枪舞",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "多刀"]
 },
 {
 "ID": 8,
 "技能": "雪恨",
 "阶段": 0,
 "优先级": 2,
 "属性": ["攻击", "直伤", "低血线"]
 },
 {
 "ID": 9,
 "技能": "奋钺",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "多刀"]
 },
 {
 "ID": 10,
 "技能": "酒池",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "多刀"]
 },
 {
 "ID": 11,
 "技能": "怃戎",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "控制", "直伤"]
 },
 {
 "ID": 12,
 "技能": "贪狈",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "控制"]
 },
 {
 "ID": 13,
 "技能": "蛮嗣",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击"]
 },
 {
 "ID": 14,
 "技能": "强袭",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "直伤", "高血线"]
 },
 {
 "ID": 15,
 "技能": "陷阵",
 "阶段": 0,
 "优先级": 2,
 "属性": ["攻击", "多刀"]
 },
 {
 "ID": 16,
 "技能": "散谣",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "直伤"]
 },
 {
 "ID": 17,
 "技能": "连环",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "过牌"]
 },
 {
 "ID": 18,
 "技能": "奋迅",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "距离"]
 },
 {
 "ID": 19,
 "技能": "弓骑",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "距离", "多刀", "控制"]
 },
 {
 "ID": 20,
 "技能": "制衡",
 "阶段": 0,
 "优先级": 2,
 "属性": ["过牌"]
 },
 {
 "ID": 21,
 "技能": "国色",
 "阶段": 0,
 "优先级": 2,
 "属性": ["控制", "过牌"]
 },
 {
 "ID": 22,
 "技能": "荐言",
 "阶段": 0,
 "优先级": 5,
 "属性": ["过牌", "辅助"]
 },
 {
 "ID": 23,
 "技能": "灭计",
 "阶段": 0,
 "优先级": 5,
 "属性": ["控制"]
 },
 {
 "ID": 24,
 "技能": "敏思",
 "阶段": 0,
 "优先级": 2,
 "属性": ["过牌"]
 },
 {
 "ID": 25,
 "技能": "督粮",
 "阶段": 0,
 "优先级": 5,
 "属性": ["控制"]
 },
 {
 "ID": 26,
 "技能": "过论",
 "阶段": 0,
 "优先级": 5,
 "属性": ["控制"]
 },
 {
 "ID": 27,
 "技能": "颂词",
 "阶段": 0,
 "优先级": 5,
 "属性": ["过牌", "控制"]
 },
 {
 "ID": 28,
 "技能": "慎行",
 "阶段": 0,
 "优先级": 5,
 "属性": ["过牌"]
 },
 {
 "ID": 29,
 "技能": "连诛",
 "阶段": 0,
 "优先级": 5,
 "属性": ["过牌", "控制"]
 },
 {
 "ID": 30,
 "技能": "攻心",
 "阶段": 0,
 "优先级": 5,
 "属性": ["控制"]
 },
 {
 "ID": 31,
 "技能": "机捷",
 "阶段": 0,
 "优先级": 5,
 "属性": ["过牌", "辅助"]
 },
 {
 "ID": 32,
 "技能": "掠命",
 "阶段": 0,
 "优先级": 5,
 "属性": ["控制"]
 },
 {
 "ID": 33,
 "技能": "苦肉",
 "阶段": 0,
 "优先级": 5,
 "属性": ["过牌", "高血线"]
 },
 {
 "ID": 34,
 "技能": "卜算",
 "阶段": 0,
 "优先级": 2,
 "属性": ["控制"]
 },
 {
 "ID": 35,
 "技能": "狂斧",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "多刀", "控制", "过牌"]
 },
 {
 "ID": 36,
 "技能": "怀异",
 "阶段": 0,
 "优先级": 5,
 "属性": ["过牌", "控制"]
 },
 {
 "ID": 37,
 "技能": "闪袭",
 "阶段": 0,
 "优先级": 5,
 "属性": ["控制"]
 },
 {
 "ID": 38,
 "技能": "奇策",
 "阶段": 0,
 "优先级": 5,
 "属性": ["控制", "攻击"]
 },
 {
 "ID": 39,
 "技能": "甘露",
 "阶段": 0,
 "优先级": 5,
 "属性": ["控制", "低血线"]
 },
 {
 "ID": 40,
 "技能": "定判",
 "阶段": 0,
 "优先级": 5,
 "属性": ["控制", "高血线"]
 },
 {
 "ID": 41,
 "技能": "奇袭",
 "阶段": 0,
 "优先级": 5,
 "属性": ["控制"]
 },
 {
 "ID": 42,
 "技能": "反间",
 "阶段": 0,
 "优先级": 5,
 "属性": ["控制", "直伤"]
 },
 {
 "ID": 43,
 "技能": "青囊",
 "阶段": 0,
 "优先级": 5,
 "属性": ["回复", "辅助"]
 },
 {
 "ID": 44,
 "技能": "去疾",
 "阶段": 0,
 "优先级": 5,
 "属性": ["回复", "辅助"]
 },
 {
 "ID": 45,
 "技能": "结姻",
 "阶段": 0,
 "优先级": 2,
 "属性": ["回复", "辅助"]
 },
 {
 "ID": 46,
 "技能": "安国",
 "阶段": 0,
 "优先级": 2,
 "属性": ["回复", "辅助"]
 },
 {
 "ID": 47,
 "技能": "立牧",
 "阶段": 0,
 "优先级": 5,
 "属性": ["回复"]
 },
 {
 "ID": 48,
 "技能": "明鉴",
 "阶段": 0,
 "优先级": 2,
 "属性": ["辅助"]
 },
 {
 "ID": 49,
 "技能": "密诏",
 "阶段": 0,
 "优先级": 2,
 "属性": ["辅助", "多刀"]
 },
 {
 "ID": 50,
 "技能": "仁德",
 "阶段": 0,
 "优先级": 5,
 "属性": ["辅助", "回复"]
 },
 {
 "ID": 51,
 "技能": "严教",
 "阶段": 0,
 "优先级": 5,
 "属性": ["辅助", "过牌"]
 },
 {
 "ID": 52,
 "技能": "明策",
 "阶段": 0,
 "优先级": 5,
 "属性": ["辅助", "多刀"]
 },
 {
 "ID": 53,
 "技能": "安恤",
 "阶段": 0,
 "优先级": 5,
 "属性": ["辅助", "过牌"]
 },
 {
 "ID": 54,
 "技能": "缔盟",
 "阶段": 0,
 "优先级": 2,
 "属性": ["控制", "辅助"]
 },
 {
 "ID": 55,
 "技能": "资援",
 "阶段": 0,
 "优先级": 5,
 "属性": ["辅助"]
 },
 {
 "ID": 56,
 "技能": "直谏",
 "阶段": 0,
 "优先级": 5,
 "属性": ["过牌", "辅助"]
 },
 {
 "ID": 57,
 "技能": "离间",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击"]
 },
 {
 "ID": 58,
 "技能": "谮毁",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击"]
 },
 {
 "ID": 59,
 "技能": "驱虎",
 "阶段": 0,
 "优先级": 5,
 "属性": ["攻击", "低血线"]
 },
 {
 "ID": 60,
 "技能": "镇骨",
 "阶段": 1,
 "优先级": 2,
 "属性": ["控制"]
 },
 {
 "ID": 61,
 "技能": "罪论",
 "阶段": 1,
 "优先级": 5,
 "属性": ["过牌", "控制"]
 },
 {
 "ID": 62,
 "技能": "默识",
 "阶段": 1,
 "优先级": 2,
 "属性": ["多刀", "攻击"]
 },
 {
 "ID": 63,
 "技能": "秉壹",
 "阶段": 1,
 "优先级": 5,
 "属性": ["过牌", "辅助"]
 },
 {
 "ID": 64,
 "技能": "直言",
 "阶段": 1,
 "优先级": 5,
 "属性": ["过牌"]
 },
 {
 "ID": 65,
 "技能": "精策",
 "阶段": 1,
 "优先级": 5,
 "属性": ["过牌", "低血线"]
 },
 {
 "ID": 66,
 "技能": "据守",
 "阶段": 1,
 "优先级": 5,
 "属性": ["过牌"]
 },
 {
 "ID": 67,
 "技能": "秘计",
 "阶段": 1,
 "优先级": 5,
 "属性": ["过牌", "低血线"]
 },
 {
 "ID": 68,
 "技能": "绝策",
 "阶段": 1,
 "优先级": 5,
 "属性": ["攻击"]
 },
 {
 "ID": 69,
 "技能": "闭月",
 "阶段": 1,
 "优先级": 5,
 "属性": ["过牌"]
 },
 {
 "ID": 70,
 "技能": "惠民",
 "阶段": 1,
 "优先级": 5,
 "属性": ["过牌"]
 },
 {
 "ID": 71,
 "技能": "郡兵",
 "阶段": 1,
 "优先级": 5,
 "属性": ["过牌"]
 },
 {
 "ID": 72,
 "技能": "困奋",
 "阶段": 1,
 "优先级": 5,
 "属性": ["过牌", "高血线"]
 },
 {
 "ID": 73,
 "技能": "屯江",
 "阶段": 1,
 "优先级": 5,
 "属性": ["过牌"]
 },
 {
 "ID": 74,
 "技能": "诱敌",
 "阶段": 1,
 "优先级": 5,
 "属性": ["控制", "过牌"]
 },
 {
 "ID": 75,
 "技能": "镇行",
 "阶段": 1,
 "优先级": 5,
 "属性": ["过牌"]
 },
 {
 "ID": 76,
 "技能": "伏间",
 "阶段": 1,
 "优先级": 5,
 "属性": []
 },
 {
 "ID": 77,
 "技能": "归心",
 "阶段": 2,
 "优先级": 5,
 "属性": ["控制"]
 },
 {
 "ID": 78,
 "技能": "酒诗",
 "阶段": 2,
 "优先级": 5,
 "属性": []
 },
 {
 "ID": 79,
 "技能": "遗计",
 "阶段": 2,
 "优先级": 5,
 "属性": ["过牌", "辅助"]
 },
 {
 "ID": 80,
 "技能": "放逐",
 "阶段": 2,
 "优先级": 2,
 "属性": ["控制"]
 },
 {
 "ID": 81,
 "技能": "节命",
 "阶段": 2,
 "优先级": 5,
 "属性": ["过牌", "辅助"]
 },
 {
 "ID": 82,
 "技能": "贲育",
 "阶段": 2,
 "优先级": 5,
 "属性": ["过牌"]
 },
 {
 "ID": 83,
 "技能": "称象",
 "阶段": 2,
 "优先级": 5,
 "属性": ["过牌"]
 },
 {
 "ID": 84,
 "技能": "筹策",
 "阶段": 2,
 "优先级": 5,
 "属性": ["控制", "辅助", "过牌"]
 },
 {
 "ID": 85,
 "技能": "恩怨",
 "阶段": 2,
 "优先级": 5,
 "属性": ["过牌"]
 },
 {
 "ID": 86,
 "技能": "反馈",
 "阶段": 2,
 "优先级": 5,
 "属性": ["阻爆"]
 },
 {
 "ID": 87,
 "技能": "刚烈",
 "阶段": 2,
 "优先级": 5,
 "属性": ["攻击", "阻爆"]
 },
 {
 "ID": 88,
 "技能": "恢拓",
 "阶段": 2,
 "优先级": 5,
 "属性": ["回复", "辅助", "过牌"]
 },
 {
 "ID": 89,
 "技能": "奸雄",
 "阶段": 2,
 "优先级": 5,
 "属性": ["过牌", "攻击"]
 },
 {
 "ID": 90,
 "技能": "忘隙",
 "阶段": 2,
 "优先级": 5,
 "属性": ["过牌", "辅助"]
 },
 {
 "ID": 91,
 "技能": "御策",
 "阶段": 2,
 "优先级": 5,
 "属性": ["回复"]
 },
 {
 "ID": 92,
 "技能": "智迟",
 "阶段": 2,
 "优先级": 5,
 "属性": ["阻爆"]
 },
 {
 "ID": 93,
 "技能": "智愚",
 "阶段": 2,
 "优先级": 5,
 "属性": ["过牌"]
 },
 {
 "ID": 94,
 "技能": "殚心",
 "阶段": 2,
 "优先级": 5,
 "属性": ["过牌"]
 },
 {
 "ID": 95,
 "技能": "邀名",
 "阶段": 2,
 "优先级": 5,
 "属性": ["过牌"]
 },
 {
 "ID": 96,
 "技能": "吉境",
 "阶段": 2,
 "优先级": 5,
 "属性": ["回复"]
 },        
];
var JinengList = JSON.parse(JSON.stringify(JinengData));

var wuJiangList=[
    {
      "ID": 0,
      "武将": "程昱",
      "技能": "贲育"
    },
    {
      "ID": 1,
      "武将": "管辂",
      "技能": "卜算"
    },
    {
      "ID": 2,
      "武将": "曹婴",
      "技能": ["凌人","伏间"]
    },
    {
      "ID": 3,
      "武将": "刘琦",
      "技能": "屯江"
    },
    {
      "ID": 4,
      "武将": "伊籍",
      "技能": "机捷"
    },
    {
      "ID": 5,
      "武将": "王荣",
      "技能": "敏思"
    },
    {
      "ID": 6,
      "武将": "神曹操",
      "技能": "归心"
    },
    {
      "ID": 7,
      "武将": "花鬘",
      "技能": "蛮嗣"
    },
    {
      "ID": 8,
      "武将": "皇甫嵩",
      "技能": "奋钺"
    },
    {
      "ID": 9,
      "武将": "王允",
      "技能": "连计"
    }
];

var myList =JSON.parse(JSON.stringify(JinengList));
var toDeleteList=[];
var rollbackList=[];
var sortMethod=1;

function init(){
  myList=JSON.parse(JSON.stringify(JinengList));
  buildHtmlTable('#huiheTable', 0);
  buildHtmlTable('#jieshuTable', 1);
  buildHtmlTable('#shoushangTable', 2);
}

function sortJineng(){
  if(sortMethod==0){
    myList.sort(function(a,b){return b.ID -a.ID});
  }else {
    myList.sort(function(a,b){return a["技能"].localeCompare(b["技能"])});
  }
}

function deleteThis(jinengID){
  rollbackList.push(myList[jinengID].ID);
  console.log(jinengID);
  myList.splice(jinengID,1);
  
  buildHtmlTable('#huiheTable', 0);
  buildHtmlTable('#jieshuTable', 1);
  buildHtmlTable('#shoushangTable', 2);
}

function rollback(){
  if(rollbackList.length>0){
    myList.push(JinengList[rollbackList[rollbackList.length-1]]);
    rollbackList.splice(rollbackList.length-1,1);
    buildHtmlTable('#huiheTable', 0);
    buildHtmlTable('#jieshuTable', 1);
    buildHtmlTable('#shoushangTable', 2);
  }
}
function buildHtmlTable(selector,category) {
    
    $(selector).empty();
    sortJineng();
    var columns = addAllColumnHeaders(myList, selector);
    var headerTr$ = $('<tr/>');
    var headerText="";
    switch(category){
      case 0:
        headerText="回合";
        break;
      case 1:
        headerText="结束";
        break;
      case 2:
        headerText="受伤";
        break;
      
    }
    var cnt=0;
    var headerCell=$('<th/>',{html:headerText});
    headerTr$.append(headerCell);
    var tmp_div=$('<div>');
    $(selector).append(headerTr$);
    for (var i = 0; i < myList.length; i++) {
      var row$ = $('<tr/>');
      for (var colIndex = 1; colIndex < 2; colIndex++) {
        if(myList[i][columns[2]]!=category){
          continue;
        }
        var cell = $('<td/>',{class: "jinengCell"});
        var cellValue = myList[i][columns[colIndex]];
        if (cellValue == null) cellValue = "";
        //row$.append( $('<a />', { class:"jineng", href: "", title: myList[i][columns[4]], html: cellValue}));
        cell.append($('<a />',{class:"jineng", id:i, title: myList[i][columns[4]], onclick:"deleteThis(this.id)",oncontextmenu:"addFocusedJineng(this.id)", html:cellValue}));
        row$.append(cell);
        cnt++;
      }
      $(selector).append(row$);
    }
    headerCell.append('('+cnt+')');
  }

function addFocusedJineng(id){
  
}

function addAllColumnHeaders(myList, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');
  
    for (var i = 0; i < myList.length; i++) {

      var rowHash = myList[i];
      
      for (var key in rowHash) {
        if(key){
        if ($.inArray(key, columnSet) == -1) {
          columnSet.push(key); 
          if(key=="技能"){
            //headerTr$.append($('<th/>').html(key));
          }
        }
    }
      }
    }
    $(selector).append(headerTr$);
  
    return columnSet;
}


function updateToDeleteDisplay(){
  var dis="未拥有技能:";
  for (var i = 0; i<toDeleteList.length;i++){
      dis+=" ";
      dis+=toDeleteList[i];
  }
  document.getElementById("jinengLackDisplay").textContent=dis;
}

function getJinengbyWujiang(code) {
  return wuJiangList.filter(
      function(wuJiangList){ return wuJiangList["武将"] == code }
  );
}

function deleteWujiang(){
  var e =document.getElementById("wujiangToDelete");
  var res=getJinengbyWujiang(e.value);
  if(res.length>0){
    for (var i =0;i<res.length;i++){
        for (var j=0;j<res[i]["技能"].length;j++){
          var index = toDeleteList.indexOf(res[i]["技能"][j]); 
          index === -1 ? toDeleteList.push(res[i]["技能"][j]) : console.log("object already exists")
        }
    } 
      updateToDeleteDisplay();
  }else{
      alert("武将不存在！");
  }
}

function queryList() {
    updateToDeleteDisplay();
    var seDiscountTempMsg=wuJiangList;
    var add_options;
    for(var i=0;i<seDiscountTempMsg.length;i++) {
        add_options += '<option value="' + seDiscountTempMsg[i]["武将"] + '">'+ seDiscountTempMsg[i]["武将"] + '</option>';
    }
    $("datalist#batch_list").append(add_options);
}

function resetJinengPool(){
  JinengList = JSON.parse(JSON.stringify(JinengData))
  toDeleteList=[];
  updateToDeleteDisplay();
}

function submitJinengPool(){
  if(toDeleteList.length>0){
    for (var i=JinengList.length-1;i>=0;i--){
     
      if (toDeleteList.indexOf(JinengList[i]['技能'])!= -1){
        console.log(JinengList[i]['技能'])
        JinengList.splice(i,1);
      }
    }
    
  }
  init();
}