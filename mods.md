# 模组说明

这些都是服务端模组，对客户端没有任何强制要求

[Friends & Foes](/fnf.md)、[农夫乐事](/delight.md) 模组体量较大，移至单独页面介绍

添加了自定义方块和物品的模组移至 [其他服务端新物品](/custom.md) 介绍

## ~~铁砧与砂轮（不可用）~~

### ~~自定义样式重命名（不可用）~~

> [!CAUTION] 此部分暂时失效
> 由于此处功能涉及对原 MOD 的修改，更新至 1.21.11 过程中精力有限，暂未恢复

> 1Dot 修改实现

可以使用 MiniMessage 格式在铁砧中为物品名称更改颜色、装饰、字体等

你可以使用 [MiniMessage Viewer](https://webui.advntr.dev) 在线编辑

重命名操作所需经验等级现在永远是 `1`，无视且不增加附魔惩罚

| 标签                          | 示例                                                   | 描述                                                                                                                                                                                              |
| ----------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<named color>` `<hex color>` | `<dark_red>` `<#ff0000>`                               | 更改文本下一部分的颜色                                                                                                                                                                            |
| `<reset>`                     | `<reset>`                                              | 闭合所有当前打开的标签，重置颜色/装饰等                                                                                                                                                           |
| `<rainbow:[!][phase]>`        | `<rainbow>` `<rainbow:!>` `<rainbow:2>` `<rainbow:!2>` | `!` 反转彩虹方向，`phase` 移动彩虹起点                                                                                                                                                            |
| `<font:[key]>`                | `<font:alt>Example</font>`                             | 允许更改文本的字体                                                                                                                                                                                |
| `<[deocraion]>`               | `<bold>` `<underlined>` `<st>` `<obf>` `<i>` `<!i>`    | 修饰文本的下一部分。您可以使用!来反转修饰。查看下方的修饰表，了解所有可用的标签                                                                                                                   |
| `<pride[:flag]>`              | `Happy <pride>pride month</pride>!`                    | 用不同类型的旗帜为你的物品着色 pride, progress, trans, bi, pan, nb, lesbian, ace, agender, demisexual, genderqueer, genderfluid, intersex, aro, baker, philly, queer, gay, bigender or demigender |

| 装饰          | 别名    |
| ------------- | ------- |
| bold          | b       |
| italic        | em 或 i |
| underlined    | u       |
| strikethrough | st      |
| obfuscated    | obf     |

### ~~哪里贵了（不可用）~~

> [!CAUTION] 此部分暂时失效
> 由于此处功能涉及对原 MOD 的修改，更新至 1.21.11 过程中精力有限，暂未恢复

移除了铁砧的「过于昂贵！」，现在最高需要的经验等级永远是 `39` (Miku?

### ~~祛魔到书上（不可用）~~

> [!CAUTION] 此部分暂时失效
> 由于此处功能涉及对原 MOD 的修改，更新至 1.21.11 过程中精力有限，暂未恢复

你可以将附魔物品和书放入砂轮中，以将工具上的所有附魔转移至书上

![](https://media.forgecdn.net/attachments/289/283/2020-04-29_13.png)

### ~~分解附魔书（不可用）~~

> [!CAUTION] 此部分暂时失效
> 由于此处功能涉及对原 MOD 的修改，更新至 1.21.11 过程中精力有限，暂未恢复

将一本附魔书放入砂轮的上槽位，并将另一本空的或已经附魔的书放入砂轮的下槽位，则第一本书顶部的第一个附魔将被转移到另一本书上

> [!NOTE] 查看经验花费
>
> 使用砂轮转移附魔到书上时，请时刻关注左下角位于 GUI 遮罩后的聊天栏信息（模组经 1Dot 修改实现）
>
> 你也可以选择 [下载客户端模组](https://modrinth.com/mod/grind-enchantments/versions) 获得如上图更原生的 GUI 显示

### ~~附魔扩展（不可用）~~

> [!CAUTION] 此部分暂时失效
> 原 MOD 没有更新适配且无法兼容 1.21.11

三叉戟可以附上其他武器类型的附魔，如击退、抢夺、锋利等，但火焰附加、致密、破甲、风爆除外

## 告示牌与物品展示框

### 交互穿透

穿透：右键单击告示牌或物品展示框，即可访问它们后面的箱子、潜影盒、木桶等

通过潜行 + 右键点击与物品展示框正常交互

### ~~展示框涂蜡（不可用）~~

> [!CAUTION] 此部分暂时失效
> 原 MOD 没有更新适配且无法兼容 1.21.11

潜行 + 手持蜜脾右击为物品展示框涂蜡，使它不能被左右键破坏或更改

通过潜行 + 用斧头右击来去除物品框架上的蜡

### 告示牌预输入

破坏告示牌后，其文字、颜色和发光将保留，将标志放入合成面板即可重置

对着现有告示牌右键单击手中的告示牌，可将文本预复制到所持有的告示牌上

## 这是什么结构？

| 命令    | 描述                                                              |
| ------- | ----------------------------------------------------------------- |
| `/wits` | 输出当前你所在的结构 ID，你也可以方便地知道结构是哪个数据包引入的 |

## 东西放哪了？

| 命令              | 描述                   |
| ----------------- | ---------------------- |
| `/whereis [参数]` | 查找指定物品所在的容器 |

## 旁观模式

可以使用指令来请求在旁观模式下旁观他人，此时的飞行距离受限

| 命令              | 描述                   |
| ----------------- | ---------------------- |
| `/peek player <player>` | 请求旁观别人 |
| `/peek invite <player>` | 邀请别人旁观自己 |
| `/peek stop` | 停止旁观 |

## 亲亲

> 这不是玩家繁殖

在其他玩家身边快速切换潜行即可冒爱心，或者你也可以使用 `/kiss <player>`

## PVP 切换

希望不被其他玩家的攻击干扰时，可开启禁止 PVP，开启后别人不能打你，你也不能打别人
| 命令 | 描述 |
| ------------- | ------------------------------------------------------------ |
| `/pvp` | 启用或禁用你的 PVP 和被 PVP，冷却 10 秒（被玩家攻击时重新计时） |
| `/pvp status` | 显示你的当前状态 |

## 快速潜影盒 Quick Shulker

> [!NOTE] 要使用库存中右键开启的功能，客户端必须安装相同模组

允许你在库存中或手持时右键快速打开潜影盒、末影箱甚至工作台等工作方块 GUI

1.21.11 可用的版本可以在群文件找到

## 其他客户端模组适配

- Jade

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

## 伤害跳字

玩家或生物受到伤害时，会蹦出来伤害类型与伤害数字；治疗时也有飘字

## 双门

相邻的两个门现在可以通过单个压力板或单次右键同时打开

## 苦力怕防爆

苦力怕爆炸现在不再破坏方块

## 地毯 Carpet

假人相关暂时禁用，后续择时开启

| 已开启的选项            | 描述                                                |
| ----------------------- | --------------------------------------------------- |
| commandLog              | `/log tps等` 在 Tab 列表中监视服务器各状态          |
| flippinCactus           | 仙人掌扳手                                          |
| xpNoCooldown            | 经验吸收无冷却                                      |

## 玩家骑乘

右键玩家骑他头上，潜行以下来

## 备份与回档

每小时会创建整个世界的完整备份

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

## 横幅图案上限

移除了原版横幅图案数量的 6 层的限制，新的上限为 `16`

如果你需要制作超过 6 层的复杂旗帜，必须在客户端也安装这个 MOD [Limitless Banners](https://modrinth.com/mod/%22limitless%22-banners)

好像因为带了个引号没法正常访问，可以去 Modrinth 手动搜一下

## 完整列表参考

- Almanac
- Architectury
- Better Fabric Console
- Carpet
- Chat History
- Cloth Config
- Collective
- Comkiss
- Construction Wand
- Construction Wand Polymer
- Disable Portal Checks
- Double Doors
- Easy Auth
- Fabric API
- Fabric Language Kotlin
- Farmer's Delight
- Farmer's Delight Polymer Patch
- FConfigLib
- Ferrite Core
- Filament
- Floodgate
- Friends & Foes
- Friends & Foes - Beekeeper Hut
- Friends & Foes - Flowey Mooblooms
- Friends & Foes Patch
- Get It Together, Drops
- Geyser
- Gugle Carpet Addition
- Improved Signs
- InvView
- Jade
- Krypton
- Ksyxis
- Ledger
- Let Me Despawn
- Limitless Banners
- Lithium
- Log Webhook (1Dot 私有)
- NBT Copy
- No Creeper Grief
- Noisium
- Ouch
- Peek
- Player Ladder
- PolyChess
- PolyDecorations
- Polydex
- Polymer
- PVP Toggle
- Quick Shulker
- Resourceful Config
- ResourcefulLib
- Roughly Enough Items
- ScalableLux
- ServerCore
- Sessility
- Simply Slingshot
- Sivage
- Skin Restorer
- Skip Server Check
- Slumber
- Spark
- Squaremap
- Serverside Waystones (1Dot 修改)
- Structure Layout Optimizer
- Styled Chat
- Toms Mobs
- Toms Server Additions: Decorations & Furniture
- Very Many Players
- ViaBackwards
- ViaFabric
- Where Is It
- What Is This Structure
- Yet Another Config Lib
