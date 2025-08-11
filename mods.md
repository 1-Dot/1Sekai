# 模组说明

这些都是服务端模组，对客户端没有任何要求

## 传送路石

### 路石

允许你进行长距离传送，跨维度时消耗 1 级经验

图标和名称均可以在右键打开的 GUI 中配置

> [!NOTE] 可见性
>
> 路石默认是私有、待发现的，对于公用设施和地点的路石，你必须在路石界面右下角 Access Settings 中开启 Global，除非你不想让其他玩家直接看到和使用

合成配方如下：

![](https://cdn.modrinth.com/data/cached_images/a8f6c01c75fb2b6a29669334740e01099a8adbed.png)

其中石砖墙 + 石砖可以被以下方块组合替换，也影响放置后的外观：

- 深板岩砖 + 深板岩砖墙
- 凝灰岩砖 + 凝灰岩砖墙
- 泥砖 + 泥砖墙
- 树脂砖 + 树脂砖墙
- 下界砖 + 下界砖墙
- 红色下界砖 + 红色下界砖墙
- 末地石砖 + 末地石砖墙
- 砂岩 + 砂岩墙
- 红砂岩 + 红砂岩墙
- 海晶石 + 海晶石墙

由于模组作者遗漏，磨制黑石砖墙、红砖墙、苔石砖墙虽然叫「砖墙」但是不能用

### 便携路石

随时随地在手上就可以打开传送菜单，合成配方如下：

![](https://cdn.modrinth.com/data/cached_images/a46a47cd011454c9ad4d22dc3fb188bbdddf615c.png)

## 铁砧与砂轮

### 哪里贵了

移除了铁砧的「过于昂贵！」，现在最高需要的经验等级永远是 39

### 祛魔到书上

你可以将附魔物品和书放入砂轮中，以将工具上的所有附魔转移至书上

![](https://media.forgecdn.net/attachments/289/283/2020-04-29_13.png)

### 分解附魔书

将一本附魔书放入砂轮的上槽位，并将另一本空的或已经附魔的书放入砂轮的下槽位，则第一本书顶部的第一个附魔将被转移到另一本书上

> [!NOTE] 查看经验花费
>
> 使用砂轮转移附魔到书上时，请时刻关注左下角位于 GUI 遮罩后的聊天栏信息（模组经 1Dot 修改实现）
>
> 你也可以选择[下载客户端模组](https://modrinth.com/mod/grind-enchantments/versions)获得如上图更原生的 GUI 显示

## PVP 切换

希望不被其他玩家的攻击干扰时，可开启禁止 PVP，开启后别人不能打你，你也不能打别人
| 命令 | 描述 |
| ------------- | ------------------------------------------------------------ |
| `/pvp` | 启用或禁用你的 PVP 和被 PVP，冷却 10 秒（被玩家攻击时重新计时） |
| `/pvp status` | 显示你的当前状态 |

## 快速潜影盒 Quick Shulker

> [!NOTE] 要使用以下功能，客户端必须安装相同模组

允许你在库存中或手持时右键快速打开潜影盒、末影箱甚至工作台等工作方块 GUI

1.21.7、1.21.8 可用的版本可以在群文件找到

## 其他客户端模组适配

- Jade

- Roughly Enough Items

## 格式化聊天

你可以在聊天中直接发送链接、使用部分 Markdown 语法、以及使用以下内联字段来快速发送一些内容

| 字段       | 发送               |
| ---------- | ------------------ |
| \:shrug:   | ¯\\\_(ツ)\_/¯      |
| \:table:   | (╯°□°）╯︵ ┻━┻     |
| \:sword:   | 🗡                  |
| \:bow:     | 🏹                 |
| \:trident: | 🔱                 |
| \:rod:     | 🎣                 |
| \:potion:  | 🧪                 |
| \:shears:  | ✂                  |
| \:bucket:  | 🪣                 |
| \:bell:    | 🔔                 |
| \:item:    | 当前手持物品的信息 |
| \:pos:     | 当前坐标           |

## 双门

相邻的两个门现在可以通过单个压力板或单次右键同时打开

## 生物行为

苦力怕爆炸现在不再破坏方块

## 地毯 Carpet

| 已开启的选项  | 描述                                                |
| ------------- | --------------------------------------------------- |
| commandPlayer | `/player <username> spawn\|kill\|attack等` 控制假人 |
| commandLog    | `/log tps等` 在 Tab 列表中监视服务器各状态          |
| flippinCactus | 仙人掌扳手                                          |
| xpNoCooldown  | 经验吸收无冷却                                      |

## 玩家骑乘

右键玩家骑他头上，潜行以下来

## 备份与回档

每小时会创建整个世界的完整备份，目前会保留至少 7 天

有基于每个方块放置、更改和破坏的备份，可以进行单方块或一定范围的查询和热回档

但实体恢复存在问题，且暂时没有玩家库存备份

整体回滚会对所有人体验造成严重影响，不要依赖这些备份！

## 皮肤恢复

| 命令                          | 描述                   |
| ----------------------------- | ---------------------- |
| `/skin set mojang <username>` | 使用指定正版玩家的皮肤 |
| `/skin set web <url>`         | 使用指定皮肤地址       |
| `/skin update`                | 刷新皮肤               |

## 睡眠

服务器 0 人在线时，将停止 Tick 流动，世界时间也不再变化

## 完整列表参考

- Advanced Backups
- Almanac
- Architectury
- Carpet
- Concurrent Chunk Management Engine
- Chat History
- Cloth Config
- Collective
- Disable Portal Checks
- Double Doors
- Easy Auth
- Enchantments Unbound
- Fabric Api
- Fabric Language Kotlin
- FConfigLib
- Ferrite Core
- Floodgate
- Get It Together, Drops
- Geyser
- Grind Enchantments (1Dot 修改)
- InvView
- Jade
- Jukebox Custom Disc Fix
- Ksyxis
- Ledger
- Let Me Despawn
- Lithium
- Log Webhook (1Dot 私有)
- Modern Netty
- No Creeper Grief
- Noisium
- Player Ladder
- PVP Toggle
- Quick Shulker
- Resourceful Config
- Roughly Enough Items
- ScalableLux
- ServerCore
- Sessility
- Skin Restorer
- Skip Server Check
- Slumber
- Spark
- Squaremap
- Serverside Waystones
- Structure Layout Optimizer
- Styled Chat
- Very Many Players
- ViaBackwards
- ViaFabric
