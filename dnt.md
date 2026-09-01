# 地牢与酒馆

![](https://cdn.modrinth.com/data/tpehi7ww/images/d3edc01465923590e4abc93a94b0c5879de2c2c5.png)

本页面所有内容由 1Dot 手动格式化自 [Dungeons and Taverns 的 Modrinth 页面](https://modrinth.com/datapack/dungeons-and-taverns)，提供了与资源包一致的简体中文本地化对照，希望能提供更方便的阅读和搜索体验。

这个数据包添加了类似原版的结构，这些结构应该与游戏的其他部分融为一体，感觉就像它们属于那里。从诸如看火塔和酒馆之类的环境附加物，到诸如恶地矿工前哨站和灾厄村民藏身处之类的地牢。

## 机制与系统

### 地图卷轴与酒馆制图师等级

在酒馆内与新手制图师交易一次后，制图师会转职为酒馆制图师。提升其职业等级可解锁不同稀有度的地图卷轴：

- **学徒**：解锁通往其他生物群系酒馆的地图卷轴（如热带草原酒馆提供沙漠酒馆卷轴，沙漠酒馆提供雪原酒馆卷轴等，形成环形网络）。
- **熟练工**：解锁常见结构地图卷轴（流浪者边防哨、城镇废墟、古迹废墟、海洋废墟、神殿塔、地下墓穴、洞室矿井、白桦木村庄、丛林村庄、沼泽村庄、废弃潮涌核心、红树林沼泽小屋、试炼地牢等）。
- **专家**：解锁稀有结构地图卷轴（亡灵地牢、流浪者要塞、苍白聚落、丛林遗迹、苦力怕地穴、女巫别墅、沙漠遗迹等）。
- **大师**：解锁史诗结构地图卷轴（灾厄庄园、灾厄村民藏身处、孤寂要塞、剧毒巢穴、暗域探险家地图/远古城市、三叉戟试炼神殿等）。

### 试炼刷怪笼与钥匙

DnT 大量使用 1.21 的试炼刷怪笼与宝库机制。通过挑战结构内的刷怪笼或击败区域头目，可以获得专属钥匙开启宝库获得稀有战利品与专属附魔书。

包含的钥匙类型：
- **主世界**：神殿钥匙、不详神殿钥匙、剧毒巢穴钥匙、剧毒巢穴头目钥匙、孤寂要塞钥匙、孤寂要塞头目钥匙、三叉戟试炼钥匙、三叉戟头目试炼钥匙、苦力怕地穴钥匙、洞室钥匙。
- **下界**：猪灵小村钥匙、猪灵边防哨钥匙、猪灵城堡钥匙、下界港口钥匙、下界监牢钥匙、禁锢钥匙、不详禁锢钥匙、头目禁锢钥匙。

### 探险推进路线

DnT 的下界与地表结构设计了环环相扣的探索链条：

- **下界骷髅线**：下界骷髅塔（开箱获下界港口卷轴）→ 下界港口（宝库获下界监牢卷轴）→ 下界监牢（高层宝库获禁锢之厅卷轴）→ 禁锢之厅（挑战远古恶魂头目，获取全套下界附魔与下界合金装备）。
- **猪灵线**：猪灵营地 / 猪灵殖民地（获猪灵小村卷轴）→ 猪灵小村（地下宝库获猪灵边防哨卷轴）→ 猪灵边防哨（秘密宝库获猪灵城堡卷轴）→ 猪灵城堡（角斗场夺取钥匙，开启镀金宝库）。
- **雪原线**：流浪者边防哨（获流浪者要塞卷轴）→ 流浪者要塞。

## 附魔

### 剧毒免疫 Antidote

| 属性         | 值                    |
| ------------ | --------------------- |
| **适用物品** | 胸甲                  |
| **来源**     | 剧毒巢穴 (Toxic Lair) |
| **不兼容**   | 保护类附魔            |
| **最大等级** | 1                     |

免疫中毒与凋零伤害并将其返还至胸甲的耐久度。

### 导电诅咒 Curse of Conductivity

| 属性         | 值         |
| ------------ | ---------- |
| **适用物品** | 任意金属物品 |
| **来源**     | 女巫别墅 (Witch Villa)，随机战利品 |
| **最大等级** | 1          |

雷暴时手持或穿戴有几率被闪电击中。

### 魂矢 Ghasted

| 属性         | 值                             |
| ------------ | ------------------------------ |
| **适用物品** | 弩                             |
| **来源**     | 禁锢之厅 (Sealing Halls)         |
| **不兼容**   | 穿透，多重射击，威力 (Might)，空中杀手 (Aerial's Bane)，引力 (Gravity) |
| **最大等级** | 3                              |

将发射出的箭矢转换为强化过的恶魂火球，落地会爆炸并生成火焰，注意：会破坏方块！等级越高，火球爆炸半径与击退越强，但会略微增加装填蓄力时间。

### 灾厄杀手 Illager's Bane

| 属性         | 值                       |
| ------------ | ------------------------ |
| **适用物品** | 剑，斧，三叉戟，重锤       |
| **来源**     | 灾厄庄园 (Illager Manor)，灾厄村民藏身处 (Illager Hideout) |
| **不兼容**   | 锋利，亡灵杀手，节肢杀手，空中杀手 |
| **最大等级** | 5                        |

对灾厄村民、恼鬼、女巫和劫掠兽造成额外伤害。

### 延展 Outreach

| 属性         | 值                      |
| ------------ | ----------------------- |
| **适用物品** | 胸甲                    |
| **来源**     | 沙漠遗迹 (Desert Ruins) |
| **最大等级** | 4                       |

提高方块交互距离。

### 光合作用 Photosynthesis

| 属性         | 值                      |
| ------------ | ----------------------- |
| **适用物品** | 任意带耐久物品           |
| **来源**     | 丛林遗迹 (Jungle Ruins) |
| **不兼容**   | 经验修补，无限          |
| **最大等级** | 1                       |

在阳光照射或亮度 ≥ 9 的方块光照下修补物品的耐久度。

### 旅行者 Traveler

| 属性         | 值                            |
| ------------ | ----------------------------- |
| **适用物品** | 靴子                          |
| **来源**     | 神殿 (Shrines)，神殿塔 (Shrine Towers)，地牢墓穴 (Graves) |
| **不兼容**   | 灵魂疾行                      |
| **最大等级** | 3                             |

提高玩家疾跑速度并可直接踏上整块高方块。疾跑时会缓慢消耗靴子耐久。

### 凋零侵染 Wither Coated

| 属性         | 值                                             |
| ------------ | ---------------------------------------------- |
| **适用物品** | 剑，斧，三叉戟，重锤                             |
| **来源**     | 下界港口 (Nether Port)，禁锢之厅 (Sealing Halls) |
| **不兼容**   | 火焰附加 (Fire Aspect)                         |
| **最大等级** | 3                                              |

攻击敌人时造成凋零效果。等级越高，凋零等级越高、持续时间越短，总伤害量相同但打得更快。

26.2 起总伤害从 10 砍到 **6**（3 颗心）。每次带附魔的攻击额外损耗 1 点耐久。

### 威力 Might

| 属性         | 值                      |
| ------------ | ----------------------- |
| **适用物品** | 弩                      |
| **来源**     | 孤寂要塞 (Lone Citadel) |
| **不兼容**   | 穿透，多重射击，魂矢，空中杀手，引力 |
| **最大等级** | 5                       |

弩可用的、相当于弓的力量附魔。每级增加弩箭伤害。

### 刺穿 Blowthrough

| 属性         | 值                    |
| ------------ | --------------------- |
| **适用物品** | 弓                    |
| **来源**     | 剧毒巢穴 (Toxic Lair) |
| **不兼容**   | 无限，三重射击        |
| **最大等级** | 4                     |

弓可用的、相当于弩的穿透附魔，允许箭穿透生物，每级增加 1 个穿透目标。

### 三重射击 Tri-shot

| 属性         | 值                    |
| ------------ | --------------------- |
| **适用物品** | 弓                    |
| **来源**     | 剧毒巢穴 (Toxic Lair) |
| **不兼容**   | 无限，刺穿            |
| **最大等级** | 1                     |

弓可用的、相当于弩的多重射击。每次拉弓消耗 1 支箭发射 3 支箭。

### 怨恨 Spiteful

| 属性         | 值                     |
| ------------ | ---------------------- |
| **适用物品** | 剑，斧，三叉戟，重锤   |
| **来源**     | 苍白聚落 (Pale Residence)，神殿 (Shrines)（稀有） |
| **最大等级** | 3                      |

当玩家生命值低于 2.5 颗心时，每级增加 +2 近战伤害。

被生物攻击时有 30%（每级 +15%）几率获得 1-3 秒的力量 I 效果。

### 空中杀手 Aerial's Bane

| 属性         | 值                     |
| ------------ | ---------------------- |
| **适用物品** | 剑，斧，三叉戟，重锤，弓，弩 |
| **来源**     | 孤寂要塞 (Lone Citadel)，禁锢之厅 (Sealing Halls)，~~末地城堡 (End Castle)~~ |
| **不兼容**   | 锋利，力量，威力等增伤附魔 |
| **最大等级** | 5                      |

对处于空中（滞空）的目标造成额外伤害。无论是因击退挑空、跳跃、下落中，还是飞行类生物（如旋风人、恼鬼、恶魂、凋灵等）均能生效。每级提升 +2 伤害。

### 水之护佑 Hydro Veil

| 属性         | 值                     |
| ------------ | ---------------------- |
| **适用物品** | 恶魂鞍具（快乐恶魂装备） |
| **来源**     | 下界监牢 (Nether Keep)，禁锢之厅 (Sealing Halls) |
| **最大等级** | 4                      |

专用于快乐恶魂的防护附魔。每级减少 20% 火焰与爆炸伤害（最高 80%），免疫着火与爆炸击退；在下界以外的维度时，每 4/3/2/1 秒为恶魂恢复半颗心生命值（无需下雨或云层高度即可持续回血）。

### 迅猛翱翔 Swift Soar

| 属性         | 值                     |
| ------------ | ---------------------- |
| **适用物品** | 恶魂鞍具（快乐恶魂装备） |
| **来源**     | 下界港口 (Nether Port)，下界监牢 (Nether Keep)，禁锢之厅 (Sealing Halls) |
| **最大等级** | 3                      |

专用于快乐恶魂的机动附魔。允许恶魂在玩家疾跑操作时进入极速飞行状态，1/2/3 级分别提升恶魂疾跑飞行速度 20% / 35% / 50%。

> [!TIP] 错误魔咒 Non-survival Enchantment
> 若在非生存或异常情况下获得了用于数据包内部函数调用的特殊附魔书，将被自动替换为节肢杀手，并解锁隐藏进度「为什么会在这里呢？」。

## 密藏图书管理员交易

将新手图书管理员带到对应结构内并升至学徒级别即可解锁专属交易（购买需消耗对应结构产物/钥匙）：

| 结构 | 专属附魔交易 | 所需兑换物品 |
| ----------------------------- | -------------------------------------- | -------------------------- |
| **沙漠遗迹 (Desert Ruins)** | 延展 (Outreach) | 沙漠遗迹战利品 |
| **丛林遗迹 (Jungle Ruins)** | 光合作用 (Photosynthesis) | 丛林遗迹战利品 |
| **灾厄村民藏身处 (Illager Hideout)** | 灾厄杀手 (Illager's Bane) | 藏身处战利品 |
| **灾厄庄园 (Illager Manor)** | 灾厄杀手 (Illager's Bane) | 庄园战利品 |
| **苍白聚落 (Pale Residence)** | 怨恨 (Spiteful) | 苍白聚落战利品 |
| **孤寂要塞 (Lone Citadel)** | 威力 (Might)、空中杀手 (Aerial's Bane)、气流爆发 (Wind Burst) | 孤寂要塞钥匙 |
| **剧毒巢穴 (Toxic Lair)** | 剧毒免疫 (Antidote)、刺穿 (Blowthrough)、三重射击 (Tri-shot) | 剧毒巢穴钥匙 |
| **神殿 / 神殿塔 (Shrines / Shrine Towers)** | 旅行者 (Traveler) | 神殿钥匙 |
| **裸露的要塞 (Bunker)** | 旅行者 (Traveler) | 要塞战利品 |
| **亡灵地牢 (Undead Crypt)** | 旅行者 (Traveler) | 亡灵地牢战利品 |
| **女巫别墅 (Witch Villa)** | 导电诅咒 (Curse of Conductivity) | 女巫别墅战利品 |
| **下界港口 (Nether Port)** | 迅猛翱翔 (Swift Soar) | 下界港口钥匙 |
| **下界监牢 (Nether Keep)** | 水之护佑 (Hydro Veil)、迅猛翱翔 (Swift Soar)、凋零侵染 (Wither Coated) | 下界监牢钥匙 |
| **猪灵城堡 (Piglin Donjon)** | 灵魂疾行 (Soul Speed) | 猪灵城堡钥匙 |
| **禁锢之厅 (Sealing Halls)** | 空中杀手 (Aerial's Bane)、魂矢 (Ghasted)、水之护佑 (Hydro Veil)、迅猛翱翔 (Swift Soar)、凋零侵染 (Wither Coated) | 禁锢钥匙 / 头目禁锢钥匙 |
| **远古城市** | 迅捷潜行 (Swift Sneak) | 远古城市战利品 |

## 头目与小头目

| 头目 | 出现结构 | 机制与掉落 |
| ----------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| **远古恶魂 (Ancient Ghast)** | 禁锢之厅 (Sealing Halls) | 拥有 300 点生命值。仅在头目试炼刷怪笼处于不祥状态时召唤。每 20 秒召唤小型恶魂随从（最多 7 只，随从 10 HP），火球造成 5 颗心高额伤害。击败掉落 7 个干瘪恶魂与**头目禁锢钥匙**。 |
| **寒冰旋风人头目 (Breeze Boss)** | 孤寂要塞 (Lone Citadel) | 直接命中风弹会给玩家施加**缓慢 III** 负面状态，机动性极高。掉落**孤寂要塞头目钥匙**。 |
| **洞穴蜘蛛头目 (Cave Spider Boss)** | 剧毒巢穴 (Toxic Lair) | 攻击附带强力的**剧毒 III** 效果，周围常伴有大量剧毒陷阱与沼泽怪。掉落**剧毒巢穴头目钥匙**。 |
| **远古守卫者头目 (Elder Guardian Boss)** | 三叉戟试炼神殿 (Trident Trial Monument) | 受到伤害时有 25% 几率即时分裂召唤小型守卫者助战。掉落**三叉戟头目试炼钥匙**与海晶石核心战利品。 |

## 原版结构大修

- [DnT Ancient City Overhaul](https://modrinth.com/datapack/dungeons-and-taverns-ancient-city-overhaul) 远古城市大修
- [DnT Desert Temple Overhaul](https://modrinth.com/datapack/dungeons-and-taverns-desert-temple-overhaul) 沙漠神殿大修
- [DnT Jungle Temple Overhaul](https://modrinth.com/datapack/dungeons-and-taverns-jungle-temple-overhaul) 丛林神庙大修
- [DnT Nether Fortress Overhaul](https://modrinth.com/datapack/dungeons-and-taverns-nether-fortress-overhaul) 下界要塞大修
- [DnT Ocean Monument Overhaul](https://modrinth.com/datapack/dungeons-and-taverns-ocean-monument-overhaul) 海洋神殿大修
- [DnT Pillager Outpost Overhaul](https://modrinth.com/datapack/dungeons-and-taverns-pillager-outpost-overhaul) 掠夺者前哨站大修
- [DnT Swamp Hut Overhaul](https://modrinth.com/datapack/dungeons-and-taverns-swamp-hut-overhaul) 女巫小屋大修

## 主世界结构

### 水井 Wells

为什么只有沙漠能拥有无用的水井？现在各个森林生物群系均会生成对应木种与石材风格的水井（桦木森林、黑森林、丛林、森林、热带草原、针叶林水井）。

![](https://cdn.modrinth.com/data/tpehi7ww/images/0f032349878692e3c5218dfab21180e0da499b76_350.webp)

### 丛林遗迹 Jungle Ruins

不喜欢小型的丛林神庙？也许可以寻找丛林遗迹。沼泽怪会在这里生成，你可以在这里找到光合作用附魔。

![](https://cdn.modrinth.com/data/tpehi7ww/images/1d3502e3f6267f51f31f3052d1d777dc545404e2_350.webp)

### 沼泽村庄 Swamp Villages

在沼泽中找到村庄……还有女巫？看来找到经验修补图书管理员不会那么容易。

![](https://cdn.modrinth.com/data/tpehi7ww/images/1ea33d4b7466cfd9f0636087384758fd2b25c7c7_350.webp)

### 剧毒巢穴 Toxic Lair

沼泽生物群系中的沼泽结构。地表区域有废墟和可疑的沙砾，但内部通向一个地下结构，包含一个洞穴蜘蛛头目和多个试炼刷怪笼/保险库以及不详保险库。你可以在这里找到剧毒免疫、刺穿/三重射击弓。

![](https://cdn.modrinth.com/data/tpehi7ww/images/23969057f32124591f61c69feec516320fcf6965_350.webp)

### 三叉戟试炼神殿 Trident Trial Monument

宏伟的海晶石结构，自然生成时不会有守卫者，但会从试炼刷怪笼中生成。击败远古守卫者头目后可以获得三叉戟、海洋之心和其他好东西。

![](https://cdn.modrinth.com/data/tpehi7ww/images/3e411b7bb17c947f4715407df9559f8918ffd51a_350.webp)

### 丛林村庄 Jungle Villages

现在丛林中会生成丛林村庄。

![](https://cdn.modrinth.com/data/tpehi7ww/images/4425a4ee3314d84b0bbe764d87f105a10fa132dc_350.webp)

### 神殿 Shrines 与 神殿塔 Shrine Towers

神殿通向 1-5 个主题战斗竞技场，每个神殿都遵循一个主题。铜灯泡的数量表示房间的数量。你可以在这里找到神殿钥匙、不详神殿钥匙和旅行者附魔。不详保险库仅在 5 级与 6 级神殿中出现。地表会生成高耸的神殿塔，塔顶设有宝库，可获得指向附近神殿的地图。

![](https://cdn.modrinth.com/data/tpehi7ww/images/64c4350272cc09de1a25bba15761d9aa4a9268ff_350.webp)

### 灾厄村民藏身处 Illager Hideout

一个稀有的地下地牢，里面充满了灾厄村民。对于寻求挑战的后期玩家来说是一个挑战。可在此获取灾厄杀手附魔。

![](https://cdn.modrinth.com/data/tpehi7ww/images/7d92bafda8ae0586a777a3fc4acc12e16c67f1ef_350.webp)

### 流浪者要塞 Stray Fort 与 流浪者边防哨 Stray Outlook

这个要塞生成在寒冷的生物群系中，被流浪者和守卫塔占据。地表可发现较小的流浪者边防哨，箱子中带有要塞地图卷轴。

![](https://cdn.modrinth.com/data/tpehi7ww/images/3bbba50a435ad7ed89ee55bcb822a247ad7aa8b1_350.webp)

### 酒馆 Taverns

酒馆是你可以找到床铺和出售这个数据包中一些地牢或废墟地图卷轴的商人的地方。你需要与商人交易一次，他们才能解锁地图交易。桦木酒馆外观已改成鱿鱼海岸风格。

![](https://cdn.modrinth.com/data/tpehi7ww/images/93dc2790ee15a172f5e7a9100790dedde9ea6b35_350.webp)

### 城镇废墟 Ruined Towns

城镇废墟是过去的遗迹，到处都是瓦砾，可疑的沙砾中主要是垃圾，但也许有一些陶片和其他宝藏。可能遇到僵尸骑手或骷髅骑士。

![](https://cdn.modrinth.com/data/tpehi7ww/images/947381c26c275d20f5d454232a6631d7b860077b_350.webp)

### 遗迹 Remnants

遗迹是稀有的环境废墟，与荒野废墟没有不同，但比林地府邸还要稀有 1.5 倍。共有 23 种：
- 废弃养蜂小屋、断桥（长度随机）、布帐篷、兔子基地、废弃经典村庄（1.14 前旧版村庄）、沙漠古迹废墟、森林铁匠铺、青蛙牧场、墓园、白桦木墓园、熔岩烤鸡站、矿工小屋、泥砖工坊、不详商店、废弃农场、废弃铁匠铺、废弃锯木厂、废弃学校、针叶林城堡、林地小屋、僵尸马场，以及大型/广型/巨型废墟。

![](https://cdn.modrinth.com/data/tpehi7ww/images/9a91bc406081d0b2c581a44494092409e7e92e88_350.webp)

### 裸露的要塞 Bunker

一个有点稀有的结构，类似于地表暴露的要塞，它们有更大的房间变化，没有末地传送门房间。不再生成在海平面下（减少水柱灌进去）。要塞上方会尽量再刷一个地堡。战利品改模仿原版要塞，坟墓已去掉。

![](https://cdn.modrinth.com/data/tpehi7ww/images/9b5e943cf03211d00ce7e5cfb4e073697c29e335_350.webp)

### 沙漠遗迹 Desert Ruins

沙漠遗迹是一个考古结构，周围生成自定义沙漠村庄，包含更多考古内容。你可以在这里获得延展。

![](https://cdn.modrinth.com/data/tpehi7ww/images/9ec05ef3ce0a90bd648ee9f6eaafda13dfd61408_350.webp)

### 亡灵地牢 Undead Crypts

另一个地下地牢，有很多骨头、头骨和其他东西，配备试炼刷怪笼与战利品。

![](https://cdn.modrinth.com/data/tpehi7ww/images/a84b93256dddb096694ccfd34738936ae74d2ca1_350.webp)

### 苦力怕地穴 Creeping Crypt

现在生成在**任意森林**，不再仅限针叶林。26.2 翻修：房间和走廊清理干净、地面可出可疑沙砾、新房间（部分来自 Minecraft Dungeons）、刷新更密（50×50 区块、间隔 25）、死路变成 1～4 个墓箱、钥匙掉率降低、蜘蛛更多、蜡烛大多不亮（方便自然刷怪）、部分箱子是陷阱箱。

![](https://cdn.modrinth.com/data/tpehi7ww/images/ad9884f56eb019873c793c52e9c114601244a83f_350.webp)

### 灾厄营地 Illager Camps 与 灾厄兵营 Illager Barracks

灾厄村民正在移动并在世界各地建立营地！这些小结构是你在旅行中可以互动的小挑战。你可以在这里找到灾厄村民结构地图。

营地现在 66% 仍是掠夺者前哨风格，**33% 会滚成灾厄兵营**。灾厄兵营是平原里稀有的大型灾厄建筑，箱子里主要是指向其它灾厄结构的地图，会预刷一些灾厄村民。

![](https://cdn.modrinth.com/data/tpehi7ww/images/3937be1a8289a32bbd780e87519a318d65d1e8f5_350.webp)

### 苦力怕家宅遗迹 Creeper Homestead Remnant

恶地里极稀有的遗迹，像掠夺者前哨那样持续刷苦力怕。不要指望常碰到。

### 看火塔 Firewatch Towers

它们是大气建筑，让世界感觉更加生动。你可以将它们用作小基地或只是找个地方过夜。桦木看火塔外观已改成鱿鱼海岸风格。

![](https://cdn.modrinth.com/data/tpehi7ww/images/c55944ee3b90dafe32c7a2e09617620bc844e8e8_350.webp)

### 红树林沼泽小屋 Mangrove Swamp Hut 与 女巫别墅 Witch Villa

女巫搬进了红树林沼泽，有 3 种不同的小屋风格。女巫别墅生成在沼泽生物群系和红树林沼泽中，这些结构充当女巫的林地府邸，有自己的实验和后院。

![](https://cdn.modrinth.com/data/tpehi7ww/images/da8d00e00d485cddb7c6b169353d9909da528019_350.webp)

![](https://cdn.modrinth.com/data/tpehi7ww/images/e9a0259483552bd24cb362c080bc226d0179c001_350.webp)

### 废弃潮涌核心 Conduit Ruin

一种教玩家如何建造潮涌核心的方式，在海晶石环中的箱子里有提示，同时也是一个考古遗址。

![](https://cdn.modrinth.com/data/tpehi7ww/images/f0c858562dd576e46e7453c05740db388ded2db2_350.webp)

### 地下房屋 Underground House

这只是一个泰拉瑞亚的参考。

![](https://cdn.modrinth.com/data/tpehi7ww/images/f2daf721dee07c2bf5f60826aeeda01dc849a5c0_350.webp)

### 洞室 Cave Chambers 与 试炼地牢 Trial Dungeon

地下生成的微型与中型地牢群，配备假洞穴生成系统与原版洞穴完美衔接：
- **洞室（Cave Chambers）**：包含 70 多种单间洞穴结构（如蘑菇农场、矿点、试炼怪房等）。
- **洞室矿井（Cave Chamber Colony）**：多个洞室相互连通组成的大型地下采矿遗迹。
- **试炼地牢（Trial Dungeon）**：中央为刷怪笼，周围环绕 4~8 个带试炼刷怪笼与宝库的房间，需使用**洞室钥匙**开启。

![](https://cdn.modrinth.com/data/tpehi7ww/images/b379c30b40de87102652f6548fe83d43c1939bce_350.webp)

![](https://cdn.modrinth.com/data/tpehi7ww/images/6707a793e0532760e0305bda777d97a87841a4f4_350.webp)

### 苍白聚落 Pale Residence

生成在苍白之园的阴森聚落，包含潜伏的怪物，可获取**怨恨**附魔。

### 荒野废墟 Wild Ruins

荒野废墟包括小营地、小屋和死亡的红石傀儡等，它们是环境性的，旨在让世界感觉更加生动。

![](https://cdn.modrinth.com/data/tpehi7ww/images/f5a7844f166925a55ad285c3d2a1c3963f2c01ac_350.webp)

### 灾厄庄园 Illager Manor

宏伟的灾厄村民结构，替换了 50% 的林地府邸，里面充满了唤魔者、卫道士、掠夺者和女巫，但也关押着铁傀儡、村民和悦灵。你可以在这里找到灾厄杀手。

![](https://cdn.modrinth.com/data/tpehi7ww/images/88b960cf4fc20d3789536b4d2760c551468b82ef_350.webp)

### 恶地矿工前哨站 Badlands Miner Outpost

这个独特的前哨站更多的是关于恶地的采矿作业。这是获得黄金和 TNT 的好方法。

![](https://cdn.modrinth.com/data/tpehi7ww/images/fa8e297e7b0250921b5c81fb344b30c69342d924_350.webp)

### 孤寂要塞 Lone Citadel

这可能是《地牢与酒馆》迄今为止最大的结构。重现了《我的世界：地下城》中的孤独堡垒，并将其带到原版。旋风人和流浪者在这里安家。击败寒冰旋风人头目可获得钥匙开启地下宝库，获取**威力**、**气流爆发**与**空中杀手**附魔。

![](https://cdn.modrinth.com/data/tpehi7ww/images/fdd1d51faa37fc24d2583a9a8348a2c296ebb5e2_350.webp)

## 下界结构

### 下界骷髅塔 Nether Skeleton Towers

下界内部生成在熔岩湖水位的塔式结构（分为绯红森林、下界要塞、灵魂沙峡谷、诡异森林骷髅塔四种群系变体），周围生成有战利品箱和一些较小的结构，由骷髅与凋灵骷髅守卫。你可以在这里找到下界港口或其它骷髅塔的地图卷轴。

![](https://cdn.modrinth.com/data/tpehi7ww/images/c1ff164f87997bfd8a5606fa6c1517a2ca07e931_350.webp)

### 猪灵营地 Piglin Camps 与 猪灵殖民地 Piglin Camp Colonies

生成于下界，作为较小的结构，包含猪灵、猪灵蛮兵和一个战利品箱。你可以在这里找到猪灵小村地图。

![](https://cdn.modrinth.com/data/tpehi7ww/images/048b4a06f670fb68af5071cc20a957e2ad06dc55_350.webp)

### 猪灵小村 Piglin Hamlet

下界的猪灵村庄，生成在熔岩湖水位。拥有庞大的地下部分（猪灵公寓、商店、马厩和岩浆怪试炼刷怪笼）。使用猪灵小村钥匙开启地下宝库可获得猪灵边防哨地图。

![](https://cdn.modrinth.com/data/tpehi7ww/images/4385ab6f0aaa5494a2ce78daa3c9550717ac336f_350.webp)

### 猪灵边防哨 Piglin Outstation

灵感来自《我的世界：传奇》与《我的世界：地下城》，包含一个由猪灵蛮兵守卫的秘密宝库。使用猪灵边防哨钥匙开启宝库可找到猪灵城堡地图。

![](https://cdn.modrinth.com/data/tpehi7ww/images/a2135e0e814549f1a7d9ea84c59e477a0f815b2a_350.webp)

### 猪灵城堡 Piglin Donjon

这个城堡是一个在绯红森林生物群系中稀有生成的巨型结构，包含各种堡垒遗迹的房间类型和装满黄金的集装箱。还要留意隐藏的保险库房间。顶部是获得猪灵城堡钥匙的角斗场。

![](https://cdn.modrinth.com/data/tpehi7ww/images/8bfbfce290261f31598eaf1de798306d5d67b999_350.webp)

### 下界港口 Nether Port

下界港口是生成在熔岩水位的中等大小结构，周围有黑石与绯红木板步道，围绕主要港口结构，包含烈焰人试炼刷怪笼与宝藏房间。使用下界港口钥匙开启宝库可获得下界监牢地图卷轴与迅猛翱翔附魔。

![](https://cdn.modrinth.com/data/tpehi7ww/images/22984905a1e5e41ef1bb07d77a1df18471448be3_350.webp)

### 下界监牢 Nether Keep

这个巨型结构是生成在下界内部的巨塔，包含 3 个烈焰人刷怪笼房间，每个都有自己的宝藏箱。桥梁上有试炼刷怪笼和竞技场，可以获得内部保险库的钥匙。顶部宝库必定产出指向禁锢之厅的地图卷轴，可获得水之护佑、迅猛翱翔与凋零侵染。

![](https://cdn.modrinth.com/data/tpehi7ww/images/96086c166b12883a39462eb9aac4780de50c410a_350.webp)

### 禁锢之厅 Sealing Halls

下界骷髅线的终极结构，对应猪灵城堡。拥有高难度试炼刷怪笼（不祥状态全员钻石/下界合金套）与缩小版恶魂刷怪笼。可挑战远古恶魂 Boss（300 HP，掉落 7 个干瘪恶魂与头目禁锢钥匙），开启黑曜石祭坛上的宝库，获取全套下界顶级附魔（空中杀手、魂矢、水之护佑、迅猛翱翔、凋零侵染）与下界合金装备。

![](https://cdn.modrinth.com/data/tpehi7ww/images/9e58da0a70bd3f4eb6fa4953ea74fd24a849d501_350.webp)

## 末地结构（本服未启用）

> [!NOTE] 无法获取
> 由于来源结构与 Stellarity 重复，以下结构及相关专属附魔（引力、蜡翅）已在 1Sekai 中移除。

- **末地城堡 End Castle**：曾经生成于外末地岛屿的巨型紫珀城堡，包含幻翼头目与潜影贝试炼刷怪笼，曾是引力与蜡翅的产出地。
- **末地灯塔 End Lighthouse**：生成于末地的高塔，原版可通过试炼刷怪笼获取可再生的潜影贝与潜影壳。
- **末地船舶 End Ship**：游弋在末地虚空边缘的孤单飞船，配有末地船舶宝库与鞘翅奖励。
