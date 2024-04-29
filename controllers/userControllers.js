const db = require('../database/db');


exports.getUsers = (req, res) => {

    const sql = `select * from users`
    try{
        db.query(sql, (err,result) => {
            res.status(200).json({
                message: 'success',
                data: result
            });
        })
    }catch(err){
        res.status(500).json({message: err.message});
    }
};


exports.addUsers = (req, res) => {
    const {nama, no_telp, alamat} = req.body;

    if(!nama || !no_telp || !alamat){
        res.status(400).json({message: 'tidak boleh ada yang kosong'});
    }

    const sql = `INSERT INTO users (nama, no_telp, alamat) VALUES ('${nama}', '${no_telp}', '${alamat}')`
    try{
        db.query(sql, (err,result) => {
            res.status(200).json({
                message: 'success',
                data: `${nama} Berhasil ditambahkan`
            });
        })
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

exports.deleteUsers = (req, res) => {
    const {id} = req.params;

    const sqlCheck = `SELECT * FROM users WHERE id = ${id}`;
    const sql = `DELETE FROM users WHERE id = ${id}`;

    try{
        db.query(sqlCheck, (err, result) => {
            if(!result.length){
                res.status(404).json({message: `user id ${id} tidak ditemukan`});
            }else{
                db.query(sql, (err, result) => {
                    res.status(200).json({message: `user id ${id} berhasil dihapus`});
                })
            }
        })
    }catch(err){
        res.status(500).json({message: err.message});
    }
}


exports.updateUsers = (req, res) => {
    const {id} = req.params;
    const {nama, no_telp, alamat} = req.body;

    const sqlCheck = `SELECT * FROM users WHERE id = ${id}`;
    const sql = `UPDATE users SET nama = '${nama}', no_telp = '${no_telp}', alamat = '${alamat}' WHERE id = ${id}`;

    try{
        db.query(sqlCheck, (err, result) => {
            if(result.length===0){
                res.status(404).json({message: `user id ${id} tidak ditemukan`});
            }else{
                db.query(sql, (err, result) => {
                    res.status(200).json({message: `user id ${id} berhasil diupdate`});
                })
            }
        })
    }catch(err){
        res.status(500).json({message: err.message});
    }


}




