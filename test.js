var fs = require('fs');
var PdfReader = require("pdfreader").PdfReader;


fs.readdir("./",function(err, files){
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file){
   	if (file.indexOf('.pdf') >=0) {
   		new PdfReader().parseFileItems(file, function(err, item){
      if (item && item.text){
            var pattann=/bootstrap/i;
        if (pattann.test(item.text)){
          if (fs.existsSync('./'+file)) {
             fs.rename('./'+file, './foo/'+file, function(err){
              console.log(err);
            });
        }
            return;
        }

      }
  })
    
}

//docx

}

);
   	});

    
   

