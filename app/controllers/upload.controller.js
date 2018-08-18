
module.exports = {
  processUpload: processUpload
}



 /**
  * Process upload form
  */
 function processUpload(req, res) {
   	if (!req.files)
   		return res.status(400).send('No files were uploaded.');
    else {
      return res.json('file upload')
    }
  
}
