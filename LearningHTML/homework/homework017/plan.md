# 生命游戏

## 信息收集

### 原理/规则

- [Model Thinking:3.4 生命游戏 Game of Life](http://mooc.guokr.com/note/15029/)
- [細胞自動機 - Cellular Automata](http://www.atlas-zone.com/complex/alife/ca/index.html) 站内还有复杂性科学的内容
- [心得 生命遊戲（Game of life） - 看板 puzzle - 批踢踢實業坊](https://www.ptt.cc/bbs/puzzle/M.1249635651.A.21E.html)

### 案例

- [The irRegularGame of Life](http://www.newgrounds.com/portal/view/468517)
- [John Conway's Game of Life](https://bitstorm.org/gameoflife/)
- [Conway's Game of Life - Javascript/Canvas Implementation](http://pmav.eu/stuff/javascript-game-of-life-v3.1.1/?autoplay=0&trail=0&grid=1&colors=1&zoom=1&s=random)
- [LifeWiki](http://conwaylife.com/w/index.php?title=Main_Page)
- [生命游戏中英文对照表](http://tieba.baidu.com/p/3666424278)

### 分析

- [簡單需求的複雜作用 | 響笛 - Alfred's Stuff](http://alfredwei.blogspot.com/2011/07/blog-post_27.html)
- [Game of Life -- 黑客的玩具 - H4CK1N9](http://zhaidongplus.is-programmer.com/posts/6873.html)

## 设计步骤

### 生成规则：

黑色：活
白色：死

- 本身活：临近的 8 个棋子有 0,1,4-8 个活，则下一轮死
- 本身活：临近的 8 个棋子有 2 或 3 个活，则下一轮活
- 本身死：临近的 8 个棋子有 3 个活，则一轮活（新生）

### Ver1

1. 定义范围，生成一个 50*50 的网格，边框黑色，填充白色
2. 鼠标点击方格，相应的方格变成黑色
3. 两个按钮：
  - 清空：点击后，重新绘制网格
  - 生成：点击后，判断每个方格中心点像素的颜色，按生成规则执行计算，并在一份新文档中记录计算结果，全部计算完成后，用新文档的数据取代旧数据
4. 计数器：记录“生成”按钮的点击次数

cp4 点评：
- 一看就是新手，太执着于细节，都是结果，太含糊了，不够具体！
- 最核心的是数据结构和算法！如何记录、维护数据

### Ver2

1. 范围
  定义游戏范围，绘制横、纵框线
  刷新频率
2. 预设
  定义二维数组，赋初始值设为 0
  定义填色函数，值为0，则填充白色，值为1，则填充黑色
3. 初始值
  定义刷新频率
  用填色函数填色
4. 遍历
  i++ j++
  计算该点周围 8 个位置的值之和：count
  if 该点值为 0 且 count = 3，则赋值为1
  else 该点值为 1 且 count = 0/1/4/5/6/7/8，则赋值为0
  其他值不变
  跳出循环后，用填色函数填色
