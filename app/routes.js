// create a new express router
const express      = require('express'),
  router           = express.Router();

var   multer         = require('multer');
var   upload         = multer({ dest: 'uploads/' });

// export router
module.exports = router;


// show search page
router.get('/', (req, res) => {res.render('pages/home')});

// upload file
router.post('/upload', upload.single('upfile'),function(req,res,next){
  console.log(req.file);
  var output = req.file;

  // remove from json response not wanted elements, not pretty but it works
  delete output.filename;
  delete output.mimetype;
  delete output.encoding;
  delete output.fieldname;
  delete output.destination;
  delete output.path;
  res.json(output);
});
