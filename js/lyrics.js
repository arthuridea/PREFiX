function getLyric() {
	var lyrics = lscache.get('lyrics') || [];
	if (! lyrics.length) {
		lyrics = lyrics_data;
	}
	var no = _.random(0, lyrics.length - 1);
	var lyric = '♪ ' + lyrics.splice(no, 1)[0];
	lscache.set('lyrics', lyrics);
	return lyric;
}

var lyrics_data = [
	'我唱着一首单纯的歌, 而你就是那一再重复的和弦. ',
	'我想了一整夜关于未来的情节. ',
	'我提着一个简简单单的行李, 要安静走出对你的狂恋. ',
	'让我想一想. ',
	'失去了语言, 失去了一字一句的空间. ',
	'该如何面对你温柔眼神, 当心中有了疑问. ',
	'真心退缩在黑暗角落. ',
	'该如何倾听你温柔声音, 它并不只属于我. ',
	'迎着微微的风像微微的你, 躲着凉凉的雨像凉凉的你. ',
	'会不会. ',
	'红的唇白的脸, 灰色的午夜. ',
	'我想今夜就这样吧. ',
	'冷的心热的泪, 空白的想念. ',
	'就像电影散场的时候, 刹那间遗忘的剧情. ',
	'改不掉依赖深夜的习惯. ',
	'阻挡不了滥用你给我的自由. ',
	'和你在一起. ',
	'夜已晚的很美丽, 天已亮的很分明. ',
	'我在你的回忆里, 是黄昏还是黎明. ',
	'没有人能够代替. ',
	'漫漫长夜. ',
	'就算全世界与我为敌. ',
	'我要让所有虚伪的人都看清自己. ',
	'我只是不愿意这样开口, 害怕你在电话线的那头泪流. ',
	'我的骄傲无可救药. ',
	'别对我小心翼翼, 别让我看清你. ',
	'越靠近越遥远, 感觉越安全越危险. ',
	'我要吃掉你的坏情绪, 吃掉你的坏脾气. ',
	'等待是白色的梦一般, 沉淀在咖啡杯最深处. ',
	'等待是白色的烟雾般, 飘散在记忆的最深处. ',
	'告诉我. ',
	'是什么在脑海挥之不去, 是什么在黑夜扑朔迷离. ',
	'再多的等待也只是空白, 再多的空白也不能将你掩埋. ',
	'也许是偶然我被你深深宠爱, 也许是偶然你将我遗忘. ',
	'失去了你, 美丽只是面具. ',
	'失去了你, 善变只是游戏. ',
	'失去你, 流浪只是逃避. ',
	'失去你, 爱情只是潮汐. ',
	'"你知道吗, 我其实很羡慕你. "',
	'我还是如此的清醒. ',
	'窗外的星空像你, 嬉笑不眠. ',
	'你目眩神迷说不知道, 只显得可笑. ',
	'你双手插口袋垫起脚, 一切看来美好. ',
	'遥远的距离都是因为太过聪明. ',
	'要猜着你的心, 要再一次确定, 混乱的思绪都是因为太想靠近你. ',
	'只是怕亲手将我的真心葬送. ',
	'在你心里我也许只是你欣赏的风景. ',
	'空荡的房间我播放着舞曲, 旋转这一秒的孤寂. ',
	'我的冬天, 就要来了. ',
	'不想和别人享用, 你每一个小动作. ',
	'透明的玻璃窗沾满小尘埃. ',
	'张开眼睛, 陌生人寄来一封信. ',
	'我在这里, 我在你昨天的梦里. ',
	'我的好, 我的坏, 钥匙还在口袋, 你一样都不带走. ',
	'Maybe I am a freak. ',
	'Please, save me. ',
	'你离开我, 就是旅行的意义. ',
	'我的玩具就是我自己. ',
	'深埋土里被剥夺的能力. ',
	'喜欢一个人孤独的时刻, 但不能喜欢太多. ',
	'我们轻轻的挥一挥手, 凝结照片的伤口. ',
	'花的姿态. ',
	'是我拒绝你已清醒的双眼, 是我召唤你眼底的错觉. ',
	'再一次让我尝尽犯错的甜美, 甜美瞬间. ',
	'是你带我经过纯洁的瞬间, 无悔无邪. ',
	'表面的和平. ',
	'我曾经凝视你, 你眼睛里的热情. ',
	'为了不让你伤心, 伤了我的心. ',
	'I had a cat. ',
	'脱掉我的羽毛背心, 赤裸拥抱你. ',
	'失败者的飞翔. ',
	'你的影子巨大, 像喧嚣的脏话. ',
	'手掌留住了风, 握不住一粒沙. ',
	'我的左手是猫, 右手是抚慰的力量. ',
	'太阳. ',
	'我热切地希望, 能在消失之前得到信仰. ',
	'曾经狂奔、舞蹈、贪婪地说话. ',
	'如果有一个世界混浊的不像话, 我会疯狂地爱上. ',
	'距离. ',
	'你眼中的孤寂, 是我在找寻的岛屿. ',
	'一首歌, 让你带回去. ',
	'每天都是一种练习. ',
	'快乐的气氛也许能暂时逃避, 却又让伤害更彻底. ',
	'一条发光的公路, 两边都是梧桐树. ',
	'你送给我的信, 大部份我都看不懂. ',
	'时间是荒废的心, 活着时不懂怜悯. ',
	'时间是死亡的河, 解剖后没有记忆. ',
	'时间是熟睡的脸, 说着梦的语言. ',
	'你带我走进漩涡, 没有出口. ',
	'柏拉图式的责任, 捆绑柏拉图式的温柔. ',
	'Peace and Revolution. ',
	'一颗一颗雨水都落在盒子里了. ',
	'失去的乐园, 暂停的欢笑, 沮丧的气球离天空越来越远. ',
	'从容的我遇见从容的你, 在一个慌张失措的年纪. ',
	'她会说, 谢谢你爱她, 像大海爱著浪花. ',
	'不完美的时候, 记得我在你左右. ',
	'白天伪装, 晚上卸下, 疲倦的心要藏在哪. '
];