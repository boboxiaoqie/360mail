-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2023-04-02 14:11:06
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `game`
--

-- --------------------------------------------------------

--
-- 表的结构 `goodslist`
--

CREATE TABLE `goodslist` (
  `pid` int(11) NOT NULL,
  `list` json DEFAULT NULL,
  `info` text CHARACTER SET utf8 COLLATE utf8_bin,
  `arguments` text,
  `judge` int(9) DEFAULT NULL,
  `shop` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `img` varchar(20) DEFAULT NULL,
  `icons` json DEFAULT NULL,
  `double11` tinyint(1) DEFAULT NULL,
  `schedule` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `goodslist`
--

INSERT INTO `goodslist` (`pid`, `list`, `info`, `arguments`, `judge`, `shop`, `img`, `icons`, `double11`, `schedule`) VALUES
(1001, '[{\"id\": 100101, \"img\": \"../img/1.webp\", \"price\": 349}]', '360云台摄像机8 Max', '[\"3K超清\",\"AI“芯”守护\"]', 349, '360商城', '', '{\"icon1\": [\"自营\"], \"icon2\": [\"放心购\"], \"icon3\": [\"新品\"], \"icon4\": [\"赠\", \"券\"]}', 0, NULL),
(1002, '[{\"id\": 100201, \"img\": \"../img/1.webp\", \"price\": 169}]', '360云台摄像机6C', '[\"300万高清全景\", \"双向通话\" ,\"微光全彩夜视\"]', 20000, '360商城', '', '{\"icon1\": [\"自营\"], \"icon2\": [\"放心购\"], \"icon3\": [\"秒杀\"], \"icon4\": [\"券3000-200\"]}', 1, NULL),
(1004, '[{\"id\": 100401, \"img\": \"../img/4.webp\", \"price\": 149}]', '360智能摄像机小水滴5C 2K高清版AC1P', '[\"300万高清像素\"]', 20000, '360商城 ', './img/chat.png', '{\"icon1\": [\"自营\"], \"icon2\": [\"放心购\"], \"icon3\": [\"满3900-700\"]}', 1, NULL),
(1005, '[{\"id\": 100501, \"img\": \"../img/5.webp\", \"price\": 269}, {\"id\": 100501, \"img\": \"../img/6.webp\", \"price\": 269}]', '360智能摄像机室外球机5C-无线畅联版AW4CA2', '[\"2K超清画质 \",\"双向云台旋转\"]', 550000, '360商城', './img/chat.png', '{\"icon1\": [\"新品\"], \"icon2\": [\"免邮\"], \"icon3\": [\"赠\"]}', 1, NULL),
(1011, '[{\"id\": 101101, \"img\": \"../img/7.webp\", \"price\": 2129}]', '360智能摄像机户外W4 Max', '[\"2.5K超清画质 \",\"智能全彩夜视\"]', 68, '360商城', './img/chat.png', NULL, 1, NULL),
(1012, '[{\"id\": 101201, \"img\": \"../img/8.webp\", \"price\": 299}]', '360可视门铃5C', '[\"2K超清画质 140°大广角\"]', 2000, '360商城', '', '{\"icon1\": [\"秒杀\"], \"icon2\": [\"免邮\"], \"icon3\": [\"新品\"], \"icon4\": [\"赠\"]}', 1, NULL),
(1013, '[{\"id\": 101301, \"img\": \"../img/10.webp\", \"price\": 649}, {\"id\": 101302, \"img\": \"../img/11.webp\", \"price\": 899}]', '360行车记录仪G900', '[\"4K超高清拍摄\", \"双核AI芯片 \",\"行车轨迹\"]', 200, '360商城', './img/chat.png', '{\"icon1\": null, \"icon2\": null, \"icon3\": [\"新品\"], \"icon4\": [\"赠\"]}', 1, NULL),
(1014, '[{\"id\": 101401, \"img\": \"../img/13.webp\", \"price\": 199}]', '360 汽车应急启动电源D6', '[\"9重安全防护\",\" 超强电量\",\" LED照明\"]', 2000, '360商城', './img/chat.png', '{\"icon1\": null, \"icon2\": null, \"icon3\": null, \"icon4\": [\"赠\", \"免邮\", \"满4987-50\"]}', 1, NULL),
(1015, '[{\"id\": 101501, \"img\": \"../img/14.webp\", \"price\": 2499}, {\"id\": 101502, \"img\": \"../img/15.webp\", \"price\": 5499}]', '360小章鱼拖地机器人 ', '[\"自动洗拖布并风干\",\"四块拖布边角拖得到\"]', 1000, '360商城', './img/chat.png', '{\"icon1\": [\"自营\"], \"icon2\": [\"放心购\"], \"icon3\": [\"新品\"], \"icon4\": [\"赠\"]}', 1, NULL),
(1016, '[{\"id\": 101601, \"img\": \"../img/16.webp\", \"price\": 1499}, {\"id\": 101602, \"img\": \"../img/17.webp\", \"price\": 1199}]', '360扫地机器人 S8 Plus集尘版', '[\"会自动倒垃圾的扫拖机器人\"]', 5520, '360商城', './img/chat.png', '{\"icon1\": [\"自营\"], \"icon2\": [\"放心购\"], \"icon3\": [\"新品\"], \"icon4\": [\"赠\", \"券\"]}', 1, NULL),
(1017, '[{\"id\": 101701, \"img\": \"../img/18.webp\", \"price\": 4199}, {\"id\": 101702, \"img\": \"../img/19.webp\", \"price\": 4499}]', '360 扫地机器人X95礼盒版', '[\"2650Pa大吸力\",\" 清扫省时高效\"]', 2520, '360商城', './img/chat.png', '{\"icon1\": [\"自营\"], \"icon2\": [\"放心购\"], \"icon3\": [\"新品\"], \"icon4\": [\"赠\", \"券\"]}', 1, NULL),
(1018, '[{\"id\": 101801, \"img\": \"../img/21.webp\", \"price\": 429}, {\"id\": 101802, \"img\": \"../img/22.webp\", \"price\": 4499}, {\"id\": 101803, \"img\": \"../img/23.webp\", \"price\": 4499}]', '360儿童手表10X（海盐蓝）', '[\"微信视频\",\"20米防水\",\"500万像素\",\"4G全网通\"]', 2520, '360商城', './img/chat.png', '{\"icon1\": [\"自营\"], \"icon2\": [\"放心购\"], \"icon3\": [\"新品\"], \"icon4\": [\"赠\", \"券\"]}', 1, NULL),
(1019, '[{\"id\": 101901, \"img\": \"../img/24.webp\", \"price\": 799}, {\"id\": 101901, \"img\": \"../img/25.webp\", \"price\": 799}]', '360 儿童手表M2 ', '[\"皮皮鲁安全特工队定制款\"]', 2520, '360商城', './img/chat.png', '{\"icon1\": [\"自营\"], \"icon2\": [\"放心购\"], \"icon3\": [\"新品\"], \"icon4\": [\"赠\", \"券\"]}', 1, NULL),
(1020, '[{\"id\": 102001, \"img\": \"../img/26.webp\", \"price\": 249}, {\"id\": 102002, \"img\": \"../img/27.webp\", \"price\": 2799}]', '360 WiFi6 路由器V6G', '[\"AX1800跑满千兆宽带\"]', 2520, '360商城', './img/chat.png', '{\"icon1\": [\"自营\"], \"icon2\": [\"放心购\"], \"icon3\": [\"新品\"], \"icon4\": [\"赠\", \"券\"]}', 1, NULL),
(1021, '[{\"id\": 102101, \"img\": \"../img/28.webp\", \"price\": 49}, {\"id\": 102101, \"img\": \"../img/29.webp\", \"price\": 49}]', '360 WiFi扩展器R2', '[\"小身材大本领 信号死角终结者\"]', 100000, '360商城', './img/chat.png', '{\"icon1\": [\"自营\"], \"icon2\": [\"放心购\"], \"icon3\": [\"新品\"], \"icon4\": [\"增\", \"券1400-200\"]}', 1, NULL),
(1022, '[{\"id\": 102201, \"img\": \"../img/30.webp\", \"price\": 399}, {\"id\": 102202, \"img\": \"../img/31.webp\", \"price\": 2499}]', '360 家庭防火墙路由器T6GS', '[\"支持Mesh组网\",\" 全千兆网口\"]', 200000, '360商城', './img/chat.png', '{\"icon1\": [\"自营\"], \"icon2\": [\"放心购\"], \"icon3\": [\"新品\"], \"icon4\": [\"增\", \"券1400-200\"]}', 1, NULL),
(1023, '[{\"id\": 102301, \"img\": \"../img/32.webp\", \"price\": 99}, {\"id\": 102302, \"img\": \"../img/32.webp\", \"price\": 3699}]', '360扫地机器人S8Plus一次性尘袋5片配件盒', '[\"高清视频 \",\"云端存储\"]', 102000, '360商城', './img/chat.png', '{\"icon1\": [\"自营\"], \"icon2\": [\"放心购\"], \"icon4\": [\"增\", \"券1400-200\", \"秒杀\"]}', 1, NULL),
(1024, '[{\"id\": 102401, \"img\": \"../img/34.webp\", \"price\": 99}, {\"id\": 102401, \"img\": \"../img/35.webp\", \"price\": 99}]', '【配件】360小章鱼拖地机器人拖布4片装', '[\"小章鱼拖地机器人配件\"]', 102000, '360商城', './img/chat.png', '{\"icon2\": [\"放心购\"], \"icon3\": [\"新品\"], \"icon4\": [\"增\", \"券1000-300\"]}', 1, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `shoppinglist`
--

CREATE TABLE `shoppinglist` (
  `pid` int(6) NOT NULL,
  `selected` tinyint(1) NOT NULL,
  `img` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `info` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `arguments` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `price` int(8) NOT NULL,
  `num` int(3) NOT NULL,
  `total` int(8) NOT NULL,
  `deleted` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `shoppinglist`
--

INSERT INTO `shoppinglist` (`pid`, `selected`, `img`, `info`, `arguments`, `price`, `num`, `total`, `deleted`) VALUES
(101901, 0, '../img/24.webp', '360 儿童手表M2 ', '皮皮鲁安全特工队定制款', 799, 3, 2397, 0),
(102102, 0, '../img/28.webp', '360 WiFi扩展器R2', '小身材大本领 信号死角终结者', 49, 1, 49, 0),
(102101, 0, '../img/28.webp', '360 WiFi扩展器R2', '小身材大本领 信号死角终结者', 49, 1, 49, 0);

-- --------------------------------------------------------

--
-- 表的结构 `t_goods`
--

CREATE TABLE `t_goods` (
  `id` int(11) NOT NULL,
  `src` varchar(30) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `name` varchar(20) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `short_info` varchar(50) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `info` varchar(200) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `price` double NOT NULL,
  `type` varchar(50) CHARACTER SET ascii COLLATE ascii_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `t_user`
--

CREATE TABLE `t_user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(20) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `last_name` varchar(20) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `email` varchar(30) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `password` varchar(41) CHARACTER SET ascii COLLATE ascii_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `t_user_goods`
--

CREATE TABLE `t_user_goods` (
  `gid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `selected` tinyint(4) NOT NULL COMMENT '商品在购物车中是否被选中',
  `num` int(11) NOT NULL COMMENT '商品在购物车中的数量',
  `total` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `pid` int(11) NOT NULL,
  `tel` char(11) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `email` varchar(40) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `password` varchar(50) CHARACTER SET armscii8 COLLATE armscii8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`pid`, `tel`, `email`, `password`) VALUES
(64, '15468945236', '1161616@qq.com', ''),
(24, '15468945236', '1161616@qq.com', ''),
(47, '15468945236', '1161616@qq.com', ''),
(21, '15468945236', '1161616@qq.com', ''),
(32, '15468945236', '1161616@qq.com', ''),
(19, '15468945236', '1161616@qq.com', ''),
(59, '15468945236', '1161616@qq.com', ''),
(57, '15468945236', '1161616@qq.com', ''),
(53, '15468945236', '1161616@qq.com', ''),
(67, '15468945236', '1161616@qq.com', ''),
(50, '15468945236', '1161616@qq.com', ''),
(49, '15468945236', '1161616@qq.com', ''),
(48, '15468945236', '1161616@qq.com', ''),
(62, '15468945236', '1161616@qq.com', ''),
(56, '15468945236', '1161616@qq.com', ''),
(55, '15468945236', '1161616@qq.com', ''),
(60, '15468945236', '1161616@qq.com', ''),
(61, '15468945236', '1161616@qq.com', ''),
(63, '15468945236', '1161616@qq.com', ''),
(69, '15468945236', '1161616@qq.com', ''),
(68, '15468945236', '1161616@qq.com', '');

--
-- 转储表的索引
--

--
-- 表的索引 `goodslist`
--
ALTER TABLE `goodslist`
  ADD PRIMARY KEY (`pid`) USING BTREE;

--
-- 表的索引 `shoppinglist`
--
ALTER TABLE `shoppinglist`
  ADD PRIMARY KEY (`pid`);

--
-- 表的索引 `t_goods`
--
ALTER TABLE `t_goods`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_7ef129872d58ef454937174f3f` (`name`);

--
-- 表的索引 `t_user`
--
ALTER TABLE `t_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_1d0b42896fa20240f9ffcc8012` (`email`);

--
-- 表的索引 `t_user_goods`
--
ALTER TABLE `t_user_goods`
  ADD PRIMARY KEY (`gid`,`uid`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`pid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `t_goods`
--
ALTER TABLE `t_goods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `t_user`
--
ALTER TABLE `t_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
