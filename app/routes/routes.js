module.exports = function(app) {
    app.get('/', function(req, res) {
        
        // app(express) ./app/controller/controller.js function hello_world
    	app.app.controller.controller.hello_world(app, req, res);

    });
    
    //POST(insert)
    app.post('/api', function(req, res) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send({
            method: 'POST'
        });
        // var date = new Date();
        // var timeStamp = date.getTime();
        // var fileName = timeStamp + '_' + req.files.url_image.originalFilename;
        // var tempPath = req.files.url_image.path;
        // var newPath = './uploads/' + fileName;
        // fs.rename(tempPath, newPath, function(err){
        // 	if(err){
        // 		res.status(500).json({error: err});
        // 	} else {
        // 		var data = {
        // 			url_image: fileName,
        // 			title: req.body.title
        // 		}
        // 		db.open( function(err, mongoclient){
        // 			mongoclient.collection('postagens', function(err, collection){
        // 				collection.insert(data, function(err, records){
        // 					if(err){
        // 						res.json({status: 'fail'});
        // 					} else {
        // 						res.json({status: 'success'});
        // 					}
        // 					mongoclient.close();
        // 				});
        // 			});
        // 		});		
        // 	}
        // });
    });
    //GET(select)
    app.get('/api', function(req, res) {
        res.send({
            method: 'GET ALL'
        });
        // db.open( function(err, mongoclient){
        // 	mongoclient.collection('postagens', function(err, collection){
        // 		collection.find().toArray(function(err, results){
        // 			if(err){
        // 				res.json(err);
        // 			} else {
        // 				res.json(results);
        // 			}
        // 			mongoclient.close();
        // 		});
        // 	});
        // });
    });
    //GET by ID(select)
    app.get('/api/:id', function(req, res) {
        res.send({
            method: 'GET ONE'
        });
        // db.open( function(err, mongoclient){
        // 	mongoclient.collection('postagens', function(err, collection){
        // 		collection.find(objectId(req.params.id)).toArray(function(err, results){
        // 			if(err){
        // 				res.json(err);
        // 			} else {
        // 				res.status(200).json({status: 1});
        // 			}
        // 			mongoclient.close();
        // 		});
        // 	});
        // });
    });
    //PUT by ID(update)
    app.put('/api/:id', function(req, res) {
        res.send({
            method: 'PUT'
        });
        // db.open( function(err, mongoclient){
        // 	mongoclient.collection('postagens', function(err, collection){
        // 		collection.update(
        // 			{_id: objectId(req.params.id) },
        // 			{ $set: {title: req.body.title}},
        // 			{},
        // 			function(err, records){
        // 				if(err){
        // 				res.json(err);
        // 				} else {
        // 					res.json(records);
        // 				}
        // 				mongoclient.close();
        // 			}
        // 		);
        // 	});
        // });
    });
    //DELETE by ID(delete)
    app.delete('/api/:id', function(req, res) {
        res.send({
            method: 'DELETE'
        });
        // db.open( function(err, mongoclient){
        // 	mongoclient.collection('postagens', function(err, collection){
        // 		collection.remove( {_id: objectId(req.params.id) }, function(err, records) {
        // 			if(err){
        // 			res.json(err);
        // 			} else {
        // 				res.json(records);
        // 			}
        // 			mongoclient.close();
        // 		} );
        // 	});
        // });
    });
}