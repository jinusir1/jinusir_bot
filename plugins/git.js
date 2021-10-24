const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.ibb.co/St28Zqw/20211024-122129.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.png, caption: `*husni_v2*
 
      
  
        *Owner number       _http://wa.me/919567749726_*


        *Whatsapp group     _https://chat.whatsapp.com/FO3JyZPm1ma3vHyEQjaToY_*



        *Github link        _https://github.com/husniser/husni_v2_*
        
        
       *Owner instagram id   _https://instagram.com/_husni__jr_?utm_medium=copy_link*
 

       *Audio commads-1     _https://github.com/husniser/husni_v2/tree/master/upload_*
 
 
       *Audio commads-2     _https://github.com/husniser/husni_v2/tree/master/uploads_*
  
  
      *Sticker commads      _https://github.com/husniser/husni_v2/tree/master/stickers_*
`}) 

})); 
