# 模组和数据包说明

这些都是服务端模组，对客户端没有任何强制要求，你可以使用已经按自己的口味调配好的 1.21.11 客户端直接加入

[Friends & Foes](/fnf.md)、[农夫乐事](/delight.md) 模组体量较大，移至侧栏单独页面介绍；[Stellarity 末地](/stellarity.md)、[Incendium 下界](/incendium.md)、[Dungeons and Taverns](/dnt.md) 数据包体量过大，移至侧栏单独页面介绍

添加了自定义方块和物品的更多内容均移至侧栏 [其他服务端新物品](/custom.md) 介绍

## 世界生成

- [CliffTree](https://modrinth.com/datapack/clifftree) 对原版生物群系的内容调整，加入了一些新的群系和生物变种，大幅优化了无光影时的环境色彩等视觉体验
- [Hopo Better Mineshaft](https://modrinth.com/datapack/hopo-better-mineshaft) 各种类型的新的矿井
- [Hopo Better Underwater Ruins](https://modrinth.com/datapack/hopo-better-underwater-ruins) 新水下结构：小型遗迹、大型城市等
- [Pale Formations](https://modrinth.com/datapack/pale-formations) 苍白之园的新结构
- [Tidal Towns](https://modrinth.com/datapack/tidal-towns) 海上村庄

## 语音聊天

> [!NOTE] 要使用语音聊天功能的话，客户端必须安装 Simple Voice Chat 模组

服务器支持语音聊天功能，客户端需要安装 [Simple Voice Chat](https://modrinth.com/mod/simple-voice-chat) 模组

语音聊天会激活幽匿感测体，也会让监守者听见；潜行时说话则不会

<!--## ~~铁砧与砂轮（不可用）~~

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

三叉戟可以附上其他武器类型的附魔，如击退、抢夺、锋利等，但火焰附加、致密、破甲、风爆除外-->

## 地毯 Carpet

假人相关暂时禁用，后续择时开启

| 已开启的选项            | 描述                                                |
| ----------------------- | --------------------------------------------------- |
| commandLog              | `/log tps等` 在 Tab 列表中监视服务器各状态          |
| flippinCactus           | 仙人掌扳手                                          |
| xpNoCooldown            | 经验吸收无冷却                                      |

## 快速潜影盒

> [!NOTE] 要使用库存中右键开启的功能，客户端必须安装相同模组 Quick Shulker

允许你在库存中或手持时右键快速打开潜影盒、末影箱甚至工作台等工作方块 GUI

1.21.11 可用的版本可以在群文件找到，或自行在 MC Mod 下载

## 发射器

> Dispenspear 是一个由 1Dot 开发的模组！欢迎在 [Modrinth 页面](https://modrinth.com/mod/dispenspear) 上贡献 Like 或下载来支持我

发射器现在可以装入矛，具有突刺和收回动画过程，品质和附魔将影响其对生物的伤害，你可以将它作为陷阱或恶作剧玩具使用

发射器现在也可以像基岩版一样装入三叉戟进行投掷

## 这是什么结构？

| 命令    | 描述                                                              |
| ------- | ----------------------------------------------------------------- |
| `/wits` | 输出当前你所在的结构 ID，你也可以方便地知道结构是哪个数据包引入的 |

## 东西放哪了？

> [!NOTE] 快速查找手持物品
> 在客户端安装 [Where Is It (Unofficial Port) 模组](https://modrinth.com/mod/where-is-it-port) 可以使用 Y 键快速查找手持物品

| 命令              | 描述                   |
| ----------------- | ---------------------- |
| `/whereis [参数]` | 查找指定物品所在的容器，高亮显示 |

<!--## 睡眠

服务器 0 人在线时，将停止 Tick 流动，世界时间也不再变化-->

## 头

击杀其他玩家掉落玩家的头，使用 `/trigger give_own_head` 获得自己的头

`/trigger hat` 将手持的任意物品戴在头上

## 花与树叶

樱花树生长时会在周围地上长出粉红色花簇

樱花树林生物群系中，用骨粉施于草地上会生成粉红色花簇

橡树、白桦树和黑色橡树在生长过程中会产生枯叶堆

可以通过对除了凋灵玫瑰以外的花朵使用骨粉来获得对应花朵

## 伤害跳字

玩家或生物受到伤害时，会蹦出来伤害类型与伤害数字；治疗时也有飘字

## 玩家互动

### 亲亲

> 这不是玩家繁殖，没有生出来小玩家的风险

在其他玩家身边快速切换潜行即可冒爱心，或者你也可以使用 `/kiss <player>`

### 玩家骑乘

右键玩家骑他头上，潜行以下来

### 旁观模式

可以使用指令来请求在旁观模式下旁观他人，此时的飞行距离受限

| 命令              | 描述                   |
| ----------------- | ---------------------- |
| `/peek player <player>` | 请求旁观别人 |
| `/peek invite <player>` | 邀请别人旁观自己 |
| `/peek stop` | 停止旁观 |

## 告示牌与物品展示框

### 交互穿透

穿透：右键单击告示牌或物品展示框，即可访问它们后面的箱子、潜影盒、木桶等

通过潜行 + 右键点击与物品展示框正常交互

<!--### ~~展示框涂蜡（不可用）~~

> [!CAUTION] 此部分暂时失效
> 原 MOD 没有更新适配且无法兼容 1.21.11

潜行 + 手持蜜脾右击为物品展示框涂蜡，使它不能被左右键破坏或更改

通过潜行 + 用斧头右击来去除物品框架上的蜡-->

### 告示牌预输入

破坏告示牌后，其文字、颜色和发光将保留，将标志放入合成面板即可重置

对着现有告示牌右键单击手中的告示牌，可将文本预复制到所持有的告示牌上

## 小生活质量改进

### 可精准采集

- 强化深板岩
- 紫水晶母岩

### 双门

相邻的两个门现在可以通过单个压力板或单次右键同时打开

### 命名牌配方

提前体验 26.1 Snapshot 2 的命名牌配方！

现在命名牌可以用如下配方合成（纸 + 铜粒 / 铁粒 / 金粒）

![](https://cdn.modrinth.com/data/cached_images/eabd4a52425f61742637dc37bc34c7bfdeb44756.gif)

### 横幅图案上限

移除了原版横幅图案数量的 6 层的限制，新的上限为 `16`

如果你需要制作超过 6 层的复杂旗帜，必须在客户端也安装这个模组 [Limitless Banners](https://modrinth.com/mod/%22limitless%22-banners)

好像因为带了个引号没法正常访问，可以去 Modrinth 手动搜一下

### 苦力怕防爆

苦力怕爆炸现在不再破坏方块

### 部分客户端模组适配

- Jade
- Roughly Enough Items

### 其他

可沿着梯子向下悬空放置「绳梯」

下界传送门现在不限制任何大小和形状，你也可以使用哭泣的黑曜石构建传送门框架

附魔台可以使用雕纹书架增幅，与书架之间也可放置任何不完整方块

加入了被原版隐藏的四幅元素画

## 基础内容

### 皮肤恢复

| 命令                          | 描述                   |
| ----------------------------- | ---------------------- |
| `/skin set mojang <username>` | 使用指定正版玩家的皮肤 |
| `/skin set web "<url>"`         | 使用指定皮肤地址       |
| `/skin update`                | 刷新皮肤               |

### 格式化聊天

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

### 暂停界面对话框

Esc 暂停界面现在有一个 `「1Sekai」` 的新按钮，有此 Wiki 和在线地图的一些快速链接

### 备份与回档

每小时会创建整个世界的完整备份

有基于每个方块放置、更改和破坏的备份，可以进行单方块或一定范围的查询和热回档

但实体恢复存在问题，且暂时没有玩家库存备份

整体回滚会对所有人体验造成严重影响，不要依赖这些备份！

<!--## 完整列表参考

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
- [Dispenspear](https://modrinth.com/mod/dispenspear) (1Dot 写的)
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
- Nemos Blooming Blossom
- No Creeper Grief
- Noisium
- Ouch
- Peek
- Player Ladder
- PolyChess
- PolyDecorations
- Polydex
- Polymer
- Quick Shulker
- Resourceful Config
- ResourcefulLib
- Roughly Enough Items
- ScalableLux
- ServerCore
- Sessility
- Simple Voice Chat
- Simply Slingshot
- Sivage
- Skin Restorer
- Skip Server Check
- Slumber
- Spark
- Squaremap
- Serverside Waystones (1Dot 大修改)
- Structure Layout Optimizer
- Styled Chat
- Toms Mobs
- Toms Server Additions: Decorations & Furniture
- Very Many Players
- ViaBackwards
- ViaFabric
- Voice Chat Interaction
- Where Is It
- What Is This Structure
- X Backup
- Yet Another Config Lib
-->

<!--## 完整列表参考

- 1Sekai (1Dot 私有)
- ButterBee
- Chiseled Bookshelves Add Enchantment Power
- CliffTree
- Dungeons and Taverns
- Dungeons and Taverns Ancient City Overhaul
- Dungeons and Taverns Desert Temple Overhaul
- Dungeons and Taverns Jungle Temple Overhaul
- Dungeons and Taverns Nether Fortress Overhaul
- Dungeons and Taverns Ocean Monument Overhaul
- Dungeons and Taverns Pillager Outpost Overhaul
- Dungeons and Taverns Swamp Hut Overhaul
- Four New Paintings Are Placeable
- GM4 Rope Ladders
- GM4 Shapeless Portals
- Hat
- Hat Club
- Hopo Better Mineshaft
- Hopo Better Underwater Ruins
- Incendium
- Name Tag Crafting Backport
- Pale Formations
- Player Drops Head
- Silk Touch Budding Amethyst
- Silk Touch Reinforced Deepslate
- Stellarity
- Tidal
- Transparent Blocks In Enchant Area
-->