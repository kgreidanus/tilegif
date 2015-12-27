var GIF_URLS = [
    "http://31.media.tumblr.com/37b83fc62c74feca10eabdd949db2e09/tumblr_mzq5d8uiFD1six59bo1_400.gif",
    "http://25.media.tumblr.com/761e32af86895cf7c1be483932bc5a71/tumblr_mvrw6iuSHS1rilp8po1_500.gif",
    "http://31.media.tumblr.com/cdad06a09d2a180fc1138d6cade190b7/tumblr_mvwfotFHgX1rilp8po1_500.gif",
    "http://25.media.tumblr.com/fb94197e2f8f47366b5ccf3309122fa6/tumblr_mzre7ufgqq1sso6sco1_500.gif",
    "http://31.media.tumblr.com/761037ef4d5f78adda24ca6dd0175eac/tumblr_mzdp4uLeBF1rilp8po1_500.gif",
    "http://31.media.tumblr.com/217415631a8b6aa999a100c2d0bc0cb7/tumblr_myyii2w2v01rilp8po1_500.gif",
    "http://31.media.tumblr.com/a31a91541758b95ea81907b7539f4ff9/tumblr_mryp2oe4UB1qfjvexo1_500.gif",
    "http://24.media.tumblr.com/5cfb4463a5b7484d7cdbdcb61271c495/tumblr_mpylwuRedl1qfjvexo1_500.gif",
    "http://25.media.tumblr.com/fc9b9d47fe285620b55b237834d63d08/tumblr_mlgbscgSMu1qfjvexo1_500.gif",
    "http://31.media.tumblr.com/bf994f4769819676dabae3452e5d126c/tumblr_mk8v5qxfZe1qfjvexo1_500.gif",
    "http://24.media.tumblr.com/5e911cb45795fee8d59f83d62cfcbbfc/tumblr_mfmk4lREqB1qfjvexo1_500.gif",
    "http://25.media.tumblr.com/tumblr_me70b6T4Nx1qfjvexo1_500.gif",
    "http://24.media.tumblr.com/tumblr_mdv6wykYMz1qfjvexo1_500.gif",
    "http://24.media.tumblr.com/tumblr_ma28naYTFd1qfjvexo1_500.gif",
    "http://24.media.tumblr.com/tumblr_m6q28aZ30c1qfjvexo1_500.gif",
    "http://31.media.tumblr.com/tumblr_m631bmEnX51qfjvexo1_500.gif",
    "http://25.media.tumblr.com/tumblr_m6eu89zSRs1rpmo4ho1_500.gif", //http://challenger23.com/post/50172533016/higher-higher-hard-to-believe-its-been-a
    "http://24.media.tumblr.com/tumblr_m8jk6nInJO1qzt4vjo1_r1_500.gif", //http://dvdp.tumblr.com/post/29122608238/120810
    "http://24.media.tumblr.com/e5c932db66ed421736780dfebbe35526/tumblr_mkpeswN0251qzt4vjo1_500.gif", //http://dvdp.tumblr.com/post/47063729566/130404-love-you-all
    "http://25.media.tumblr.com/05f77e427b084ca9c12e7988820db96f/tumblr_mjtrxqSygR1qzt4vjo1_500.gif", //http://dvdp.tumblr.com/post/45622098355/130317-so-i-had-unbelievable-strong-feelings-for
    "http://25.media.tumblr.com/aefa86d4b95da7575f624c2cf8a6c027/tumblr_mjehov9lbc1qzt4vjo1_500.gif", //http://dvdp.tumblr.com/post/44944654275/130309-few-words-0-i-lied-in-my-last-post
    "http://25.media.tumblr.com/tumblr_m80rq1nhi01qzt4vjo1_500.gif", //http://dvdp.tumblr.com/post/28403235902/120731
    "http://24.media.tumblr.com/tumblr_m0fn8ixvDc1qzt4vjo1_r2_500.gif", //http://dvdp.tumblr.com/post/18809736612/120305-xxl
    "http://25.media.tumblr.com/tumblr_lxuxdsMuKY1qzt4vjo1_r2_500.gif", //http://dvdp.tumblr.com/post/15902554993/120115
    "http://25.media.tumblr.com/tumblr_ltljrwYaPG1qzt4vjo1_500.gif", //http://dvdp.tumblr.com/post/11888038945/111025
    "http://31.media.tumblr.com/tumblr_lfiabnq4ec1qzt4vjo1_r1_500.gif", //http://dvdp.tumblr.com/post/2903000638/110124
    "http://25.media.tumblr.com/tumblr_lc8pjaHh731qzt4vjo1_500.gif", //http://dvdp.tumblr.com/post/1637287002
    "http://25.media.tumblr.com/tumblr_l99apcLI5U1qzt4vjo1_r1_500.gif", //http://dvdp.tumblr.com/post/1179162945
    "http://24.media.tumblr.com/tumblr_l6livgwj781qzt4vjo1_r1_500.gif", //http://dvdp.tumblr.com/post/899742508
    "http://25.media.tumblr.com/tumblr_kt0pplLYZc1qzt4vjo1_500.gif", //http://dvdp.tumblr.com/post/241884041
    "http://24.media.tumblr.com/dd6144cd30249268266d4b69398df2e3/tumblr_n02sq2Tfre1r2geqjo1_500.gif", //http://beesandbombs.tumblr.com/post/74749253172/this-is-a-gif-i-posted-a-few-weeks-ago-if-you

    "http://media0.giphy.com/media/QM1GAb2C8Sk2A/giphy.gif", //giphy urls are pretty easy to credit once I get that shit going on.
    "http://media.giphy.com/media/gFYVusNqdaYmY/giphy.gif",
    "http://media.giphy.com/media/ITWHqTA2TtOqA/giphy.gif",
    "http://media.giphy.com/media/TehKSdhlxdpZe/giphy.gif",
    "http://media.giphy.com/media/zLLxYQ2FcDzY4/giphy.gif",
    "http://media.giphy.com/media/qWCkak5AA3jby/giphy.gif",
    "http://media.giphy.com/media/8bWrTNocA2Fd6/giphy.gif",
    "http://media.giphy.com/media/HL7BKLutFYSxq/giphy.gif",
    "http://media.giphy.com/media/11wURdMYd6yQ6c/giphy.gif",
    "http://media.giphy.com/media/ItLceamnRtfUI/giphy.gif",
    "http://media0.giphy.com/media/yuuy8PX1PhSGQ/giphy.gif",
    "http://media.giphy.com/media/hB1vZDLxsoPW8/giphy.gif",
    "http://media.giphy.com/media/5WrX8KFK7kCFG/giphy.gif",
    "http://media.giphy.com/media/iIy2ZdWhYktHy/giphy.gif",
    "http://media0.giphy.com/media/XA5pD2lW6LpYI/giphy.gif",
    "http://media.giphy.com/media/tNXdZLxaH6JlS/giphy.gif",
    "http://panthema.net/2013/sound-of-sorting/thumb.gif",
    "http://media.rhizome.org/blog/9076/Rosa-Menkman-.gif",
    "http://31.media.tumblr.com/7626f1d9d83fff421552b59c479e8b29/tumblr_n04vrep56i1qep11bo1_250.gif", // haha i dont even know
    "http://24.media.tumblr.com/0013e762e69b4ee4ae637f46a6c726e5/tumblr_mjf8l3rJXy1qatmzjo4_500.gif", 
    "http://31.media.tumblr.com/8fab4b256c70a87d7f7c222614c67cf2/tumblr_my6kjn3LLI1s5jjtzo1_500.png", //totally transparent gif
    "http://24.media.tumblr.com/d22469d5bc1765ac139e6c5052fc3255/tumblr_mttju1EvbP1rafo29o1_400.gif",
    "http://31.media.tumblr.com/705dae9e2f10a48db26355a79bd6541b/tumblr_n05aqthiEW1rk1qp5o1_400.gif", //gnumblr, fucking watermark.
    "http://24.media.tumblr.com/0b39f419213c7f5b3f2817f0826f0bc0/tumblr_mz07m6doha1rk1qp5o1_500.gif", //gnumblr, fucking watermark.
    "http://31.media.tumblr.com/74e968585193ae6cac00640f4ff874b0/tumblr_n06sbmaE8l1rioxyio1_500.gif", 
    "http://i.minus.com/ibwFFM0DfsNhlk.gif", 
    "http://media.giphy.com/media/wHA2VXVfKLPgc/giphy.gif",
    "http://media.giphy.com/media/2qdNH3RSsKKRy/giphy.gif",
    "http://media.giphy.com/media/13MfvSYW7ijaQo/giphy.gif",
    "http://media.giphy.com/media/fD7C2jKqtWFDG/giphy.gif",
    "http://media.giphy.com/media/PM8HiUsnKV9Qc/giphy.gif",
    "http://media.giphy.com/media/ODy29v7YAJrck/giphy.gif",
    "http://media.giphy.com/media/zrzbSZ9P8S9YA/giphy.gif",
    "http://media.giphy.com/media/9JVKrIndpTTxK/giphy.gif",
    "http://24.media.tumblr.com/01e5f39da5fdd54f0d0f65b9da21c231/tumblr_n08wjlRJyY1r9mp00o1_500.gif",
    "http://31.media.tumblr.com/305ae1c68f6eab0f1b9d3023b2bbda20/tumblr_mzujezlInf1qfteu5o1_400.gif",
    "http://media3.giphy.com/media/GJmFqmlVHuTdu/giphy.gif",
    "https://24.media.tumblr.com/c382e4d3c96fe1674e14a4960360df72/tumblr_n0ma6iCbmj1six59bo1_400.gif",
    "http://www.ultraimg.com/images/nbZxB.gif",
    "https://24.media.tumblr.com/f78b3764eb32c28f7d861ec2ef1c5bc7/tumblr_n0ow01Kowv1rt67t1o1_400.gif",
    "http://24.media.tumblr.com/1b98d854ba80a7abcb191b40d3148e57/tumblr_mzd37mxNSs1rpixm5o1_r1_500.gif",
    "http://24.media.tumblr.com/d048a07cd885a076e8d21e7bbe77caae/tumblr_mzfuwgRFTP1rpixm5o1_400.gif",
    "https://31.media.tumblr.com/ac2642c9c339fca6d8d2b5d7392b1ff5/tumblr_inline_n1imeeVGHd1sqyght.gif",
    "https://24.media.tumblr.com/b8d8f03f808d758c1b09cbb1f16d8914/tumblr_n1d8boVT381qzhwpro1_500.gif",
    "https://31.media.tumblr.com/48c85fbca065c2dbfd80ef3897a7f996/tumblr_n1krt6ftzv1r2geqjo1_500.gif",
    "http://31.media.tumblr.com/318f2b781705db067f74b5768c8a5c35/tumblr_n04zwnemjx1qeeraqo1_500.gif",
    "https://24.media.tumblr.com/tumblr_m1raglJuJN1qg2p2fo1_500.gif",
    "https://31.media.tumblr.com/61c8d368e2a6e53ecf048b8bbc1ef60d/tumblr_mwyo98aufM1t3hbhyo1_r1_500.gif",
    "http://i.imgur.com/gxSiqCl.gif", // the more you know.
    "https://31.media.tumblr.com/da786ab167990e01e2289fa8734362dc/tumblr_n2c9umaCP71ra8ht7o1_400.gif",
    "https://31.media.tumblr.com/198a2c08e35ba97e6eca25187816fd2f/tumblr_n0hzyoJVMm1s4fz4bo1_500.gif",
    "http://i.imgur.com/joz3pKU.gif",
    "http://24.media.tumblr.com/1e99e6e8d166fe1e08e8bdbaf4ebb957/tumblr_n1suiuUxcB1rtbl5vo1_400.gif",
    "http://fc08.deviantart.net/fs71/f/2013/089/3/8/tileable_matrix_code_by_daschinia-d5zrwux.gif",
    "http://25.media.tumblr.com/tumblr_m9hjukpVet1qgyb21o1_500.gif",
    "http://i.imgur.com/AUXb2N9.gif",
    "http://31.media.tumblr.com/097eb333ccfde5bd5dbc7e7f4c32cb23/tumblr_n2bzlwPXAq1tq1bhgo1_400.gif",
    "https://31.media.tumblr.com/1e45c8e771ab9f5d1cfda15360d630f6/tumblr_n3dobmzSXX1trzml2o1_250.gif",
    "https://24.media.tumblr.com/9e5ca023ed40dc89709019e6079d977c/tumblr_n34d366ETO1s4fz4bo1_500.gif",
    "https://24.media.tumblr.com/b54ce91276b1215f6448fa6cd892a264/tumblr_n5tzkeCv9w1sv7laoo1_500.gif",
];

var OVERLAY_URLS = [
    "http://25.media.tumblr.com/799ad51236017382cf9b663a2f0f852a/tumblr_mvmvniLjr51sn8q7mo1_250.png",
    "http://d2wss9bif9q3el.cloudfront.net/404/365/images/tumblr_m2ik37tAcJ1r5993eo1_400.gif",
    "http://www.catalystawareness.com/images/template/map_animation.gif",
    "http://dump.fm/avatars/20130709/1373352198412-dumpfm-fuzzyfresh-animated-fuzzy-spike-orb-sphere-hairy-furry-bounce-pink-small.gif",
    "http://25.media.tumblr.com/tumblr_m5fd4rzeOD1qk5qnco1_r1_500.gif",
    "http://24.media.tumblr.com/8e6be68bc57c10348575a8edd4f05b2d/tumblr_mkpbhxploJ1s5jjtzo1_500.png", //http://totallytransparent.tumblr.com/post/47057204377/transparent-yingyang-credit-where-credit-is-due
    "http://25.media.tumblr.com/89db3d1b7733df1464f53450843c3be4/tumblr_mon44oWVNb1s5jjtzo1_500.png", //http://totallytransparent.tumblr.com/post/53358009684/semi-transparent-quartz-made-by-totally
    "http://31.media.tumblr.com/475d327bc51ecffb71c72b904c4560a9/tumblr_mlmnylPn6l1s5jjtzo1_500.png", //http://totallytransparent.tumblr.com/post/48564938151/semi-transparent-fading-no-face-spirited-away
    "http://25.media.tumblr.com/204ed4bdadaf4945e034acdbe1c63bb2/tumblr_miqk9eeQrV1s5jjtzo1_500.png", //http://totallytransparent.tumblr.com/post/43905490329/slight-edit-on-one-made-by-bagou-grill-is-semi

    "http://25.media.tumblr.com/b93b52e9f704e89ea5721398ba762fc3/tumblr_mmlorl6uJk1s5jjtzo1_500.png", //http://totallytransparent.tumblr.com/post/73656808043/totallytransparent-transparent-salvador-dalis
    "http://24.media.tumblr.com/3c3ded128ce8179e6338012392de9021/tumblr_mzx1poQmV71s5jjtzo1_500.gif", //http://totallytransparent.tumblr.com/post/74401902373/transparent-kissing-gif-sort-of-semi
    "http://24.media.tumblr.com/e48fe0368f01d20e5b1dcc3b66e6a070/tumblr_mzhum4TSai1s5jjtzo1_500.gif", //http://totallytransparent.tumblr.com/post/73541531280/transparent-eye-gif-iris-matches-colour-of-your
    "http://31.media.tumblr.com/dd068196666b46e5a8fd3bd6c9eac3c0/tumblr_mz07y9yFah1s5jjtzo1_1280.png", //http://totallytransparent.tumblr.com/post/72491298811/semi-transparent-ice-cream-rose-matches-colour-of
    "http://24.media.tumblr.com/f2c3cb58e5df9b083bb4db24bf7f065a/tumblr_mney5aJkmu1s5jjtzo1_r1_500.gif", //http://totallytransparent.tumblr.com/post/71767033740/totallytransparent-transparent-fireworks-gif
    "http://25.media.tumblr.com/bd38c3f264f51c1043b6c20d64c20a26/tumblr_mxgcbshJ4H1s5jjtzo1_500.gif", //http://totallytransparent.tumblr.com/post/69294181178/transparent-water-gif-your-blogs-background-is
    "http://25.media.tumblr.com/16791f385d1f17007371db57f655a0fb/tumblr_mqnsgg4DG21s5jjtzo1_500.png", //http://totallytransparent.tumblr.com/post/66791599192/totallytransparent-transparent-tiger-wading
    "http://24.media.tumblr.com/85535e0b10eec06ec3a953735b42ca22/tumblr_mvebyknAzU1s5jjtzo1_500.png", //http://totallytransparent.tumblr.com/post/65475977299/semi-transparent-lips-match-colour-of-your-blog
    "http://25.media.tumblr.com/98ee332435883155967ec37571a96e89/tumblr_mtygnj0ELN1s5jjtzo1_500.gif", //http://totallytransparent.tumblr.com/post/62742418730/transparent-lipgloss-gif-lipgloss-matches-colour
    "http://25.media.tumblr.com/d6360c046a650cc74690ae742e1a9c97/tumblr_msvaa9dfPZ1s5jjtzo1_r1_500.gif", //http://totallytransparent.tumblr.com/post/60768502030/transparent-dandelion-gif-dandelion-matches
    "http://25.media.tumblr.com/888e68096bf9c50a9c1d16335ce54003/tumblr_mstvtvgioJ1s5jjtzo1_1280.png", //http://totallytransparent.tumblr.com/post/60695536443/semi-transparent-hair-matches-colour-of-your
    "http://31.media.tumblr.com/0dd2c6d14ce9eb15dca0ec7193669a88/tumblr_msd2dkG47M1s5jjtzo1_500.png", //http://totallytransparent.tumblr.com/post/59799200631/semi-transparent-roses-petals-match-colour-of
    "http://24.media.tumblr.com/e26e2f10a4399fa6402bef117ae6b3e6/tumblr_mpkl8sCbQs1s5jjtzo1_500.gif", //http://totallytransparent.tumblr.com/post/56912764887/totallytransparent-drawn-animated-by-totally
    "http://media.giphy.com/media/wR6ejCV1RlSTe/giphy.gif",
    "http://media.giphy.com/media/RanCH4FuWqimk/giphy.gif",
    "http://25.media.tumblr.com/95c5ad5b6c6a3c0333a9e9ff00276488/tumblr_muz1lvG6uQ1s5jjtzo1_500.gif",
    "http://media.giphy.com/media/7xvZMeEz4Im8U/giphy.gif",
    "http://media.giphy.com/media/sA1lSYEzcXiWA/giphy.gif",
    "http://media.giphy.com/media/57epfQ8l3YTTy/giphy.gif",
    "http://media.giphy.com/media/UMOStVUKWlqbS/giphy.gif",
    "http://media.giphy.com/media/6OvqkqF2Z1yUw/giphy.gif",
    "http://media.giphy.com/media/QIzeueJB0Pf7a/giphy.gif",
    "https://31.media.tumblr.com/b4de0649b73f74bc9e657adfd043477a/tumblr_n0wq4k2qSD1s5jjtzo1_500.png",
    "http://31.media.tumblr.com/f6708b8862d823c1b7ede488f1ddd017/tumblr_n1oep7wKEs1s5jjtzo1_500.gif",
    "http://25.media.tumblr.com/b5311c15b4d77aff53bc04a66ce41382/tumblr_n1gxibBinr1s5jjtzo1_r1_500.gif",
    "http://25.media.tumblr.com/cbd21fd6b98ecdea9c34ed36f7aaa6e7/tumblr_n0e04xDorI1s5jjtzo1_500.gif",
    "http://cdn.gifbay.com/2013/08/cool_transparent_gifs_2-76960.gif",
    "http://26.media.tumblr.com/tumblr_m3245olhHC1rrfi85o1_500.gif",
    "http://media.tumblr.com/4351cd80db936533cbe799a467fcfd8e/tumblr_inline_mq1npynqyv1qz4rgp.gif",
    "http://i.imgur.com/xuq29.gif",
    "https://24.media.tumblr.com/485c7bfa78e47e91f2b19e555c5c9319/tumblr_n3dk9uwjgz1rznvc3o1_500.gif",
    "http://i.imgur.com/gBUezpF.gif",
];
