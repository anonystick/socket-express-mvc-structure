
var that = module.exports = {
    homepage: async(req, res, next) => {
        
        res.sendFile(__basedir + '/index.html');
    },
    message: async(req, res, next) => {
        const { msg } = req.query;
        // const io = res.io;
        _io.emit('chat message', msg)
        return res.json({ code: 200, msg})
    }
}