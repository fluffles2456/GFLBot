module.exports = {
    name: "junya",
    description: "To roll pictures of junya.",

    execute(junyaMessage, args){
        const Discord = require ("discord.js");
        
        junyaNum = Math.floor(Math.random() * (38 - 1) + 1);

        switch(junyaNum)
        {
            case 1:
                junyaImage = "https://danbooru.donmai.us/data/sample/df/f4/__m4a1_m4_sopmod_ii_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_honyang__sample-dff40045b2e7dfe1dcc4ba56b983c4e9.jpg";
                break;

            case 2:
                junyaImage = "https://danbooru.donmai.us/data/sample/45/45/__m4a1_m4_sopmod_ii_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_dokomon__sample-454555801be4aacdcbfa7314313b6b85.jpg";
                break;

            case 3:
                junyaImage = "https://danbooru.donmai.us/data/sample/95/95/__m4_sopmod_ii_dinergate_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_dokomon__sample-9595f1e7dbad8fb2d024b150ed8538d9.jpg";
                break;

            case 4:
                junyaImage = "https://danbooru.donmai.us/data/sample/db/63/__m4_sopmod_ii_dinergate_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_obsi__sample-db6348ed9ad6793c92ab4295fc3f4572.jpg";
                break;

            case 5:
                junyaImage = "https://danbooru.donmai.us/data/sample/0e/be/__m4_sopmod_ii_dinergate_banana_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_yuutama2804__sample-0ebe31ae523e18116e5e7d73bf958722.jpg";
                break;
            
            case 6:
                junyaImage = "https://danbooru.donmai.us/data/sample/97/ad/__m4_sopmod_ii_kar98k_idw_micro_uzi_m4_sopmod_ii_jr_and_3_more_girls_frontline_drawn_by_ouga_user_ctzw2237__sample-97add5bdc77b3778f717d31afc835b13.jpg";
                break;

            case 7:
                junyaImage = "https://danbooru.donmai.us/data/sample/54/d2/__m4_sopmod_ii_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_ress__sample-54d2afbd86ec0550910cbc213531c214.jpg";
                break;
            
            case 8:
                junyaImage = "https://danbooru.donmai.us/data/sample/29/3d/__m4_sopmod_ii_ro635_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_ress__sample-293d47893029667174a3a5aaa13c0f81.jpg";
                break;

            case 9:
                junyaImage = "https://danbooru.donmai.us/data/sample/a1/82/__m4_sopmod_ii_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_honyang__sample-a18202f58d0db4a0d0c8424232e6fcfa.jpg";
                break;

            case 10:
                junyaImage = "https://danbooru.donmai.us/data/sample/f5/50/__m4_sopmod_ii_dinergate_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_denkouseka_akaiken__sample-f5504d2c122338438a59b3bc8dd8aec6.jpg";
                break;

            case 11:
                junyaImage = "https://danbooru.donmai.us/data/original/ef/5f/__m4_sopmod_ii_jr_adeptus_mechanicus_and_necron_girls_frontline_and_1_more_drawn_by_lutherniel__ef5f69dc08ec2f42cd0c21c4ae0fcc34.jpg";
                break;

            case 12:
                junyaImage = "https://danbooru.donmai.us/data/original/d5/0f/__m4a1_dinergate_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_kinubari_nerune__d50f58a3aa25168dec1b274ee681ea5b.png";
                break;

            case 13:
                junyaImage = "https://danbooru.donmai.us/data/sample/df/6f/__dinergate_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_rynzfrancis__sample-df6f7e362d735d39031638418ccfbd0f.jpg";
                break;

            case 14:
                junyaImage = "https://danbooru.donmai.us/data/sample/27/19/__banana_and_m4_sopmod_ii_jr_girls_frontline_and_1_more_drawn_by_tama_yu__sample-27195327169269c9f391aea1ab659118.jpg";
                break;

            case 15:
                junyaImage = "https://danbooru.donmai.us/data/sample/6d/0d/__dinergate_and_m4_sopmod_ii_jr_girls_frontline_and_2_more_drawn_by_exonessis__sample-6d0d68656a8bce8457c01a7350397c00.jpg";
                break;

            case 16:
                junyaImage = "https://danbooru.donmai.us/data/sample/28/19/__m4_sopmod_ii_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_lilycious__sample-2819b0a835c3e682d044434da9036313.jpg";    
                break;

            case 17:
                junyaImage = "https://danbooru.donmai.us/data/sample/b2/10/__st_ar_15_m4_sopmod_ii_ro635_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_dongdong_0206qwerty__sample-b210e41ab76e66405e346132201282f8.jpg";
                break;

            case 18:
                junyaImage = "https://danbooru.donmai.us/data/original/95/03/__m4_sopmod_ii_dinergate_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_dongdong_0206qwerty__950363dcfa98960ee0e1bd75c6b74413.png";
                break;

            case 19:
                junyaImage = "https://danbooru.donmai.us/data/sample/63/0f/__m4_sopmod_ii_banana_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_act_xadachit__sample-630f517b08989b36b4df717dbc228d77.jpg";
                break;

            case 20:
                junyaImage = "https://danbooru.donmai.us/data/sample/3b/e0/__m4_sopmod_ii_dinergate_ro635_banana_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_mmm_ji1945__sample-3be08efb1d74b8d50995d601d3952e58.jpg";
                break;

            case 21:
                junyaImage = "https://danbooru.donmai.us/data/sample/48/2b/__m4a1_dinergate_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_chika_keiin__sample-482b8c5490d51c5f95763ad15f6a0223.jpg";
                break;

            case 22:
                junyaImage = "https://danbooru.donmai.us/data/original/60/57/__dinergate_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_chika_keiin__6057d6177db0642774bea360af5c6ea7.jpg";
                break;

            case 23:
                junyaImage = "https://danbooru.donmai.us/data/sample/d6/ca/__m4_sopmod_ii_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_whitebc__sample-d6ca05b73cd36353be934f14edefc064.jpg";
                break;

            case 24:
                junyaImage = "https://danbooru.donmai.us/data/sample/0e/50/__m4_sopmod_ii_and_m4_sopmod_ii_jr_girls_frontline_drawn_by_citron80citron__sample-0e50da0aab722461c6d2ecbea138b1d6.jpg";
                break;

            case 25:
                junyaImage = "https://i.imgur.com/ZValPuL.jpg";
                break;

            case 26:
                junyaImage = "https://i.imgur.com/KyR2il0.jpg";
                break;

            case 27:
                junyaImage = "https://i.imgur.com/9uflA4j.jpg";
                break;

            case 28:
                junyaImage = "https://i.imgur.com/pnkqC3F.jpg";
                break;

            case 29:
                junyaImage = "https://i.imgur.com/CdI6c3K.jpg";
                break;

            case 30:
                junyaImage = "https://i.imgur.com/4XQerGZ.png";
                break;

            case 31:
                junyaImage = "https://i.imgur.com/Vzx5BJO.png";
                break;

            case 32:
                junyaImage = "https://i.imgur.com/2rLGQIf.jpg";
                break;

            case 33:
                junyaImage = "https://i.imgur.com/FlxhzPh.jpg";
                break;

            case 34:
                junyaImage = "https://i.imgur.com/omY54lp.jpg";
                break;

            case 35:
                junyaImage = "https://i.imgur.com/BCwSUR0.png";
                break;

            case 36:
                junyaImage = "https://i.imgur.com/FwelpBz.jpg";
                break;

            case 37:
                junyaImage = "https://i.imgur.com/ATdIbrN.png";
                break;

            case 38:
                junyaImage = "https://i.imgur.com/cTlcwdF.png";
                break;
        }

        const junyaEmbed = new Discord.MessageEmbed();      //create embeds
        junyaEmbed.setColor("#2f3136");
        junyaEmbed.setTitle(junyaMessage.member.user.tag);
        junyaEmbed.setImage(junyaImage);
        junyaMessage.channel.send(junyaEmbed);              //send embeds
    }
}