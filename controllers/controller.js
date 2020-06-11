/* eslint-disable no-unused-vars */
const Games = require('../models/Games')




module.exports={

    getallgames:(req,res)=>{
        Games.find().then((game)=>{
            return res.status(200).json(game)
        }).catch((err)=>err)
        },
    
    getsinglegame: (req,res)=>{
        Games.findOne({name:req.body.name}).then((game)=>{
          if(game){res.status(200).json({confirmation:'success',game})}
          else{return res.status(404).json({confirmation:'fail',message:'Game Not Found'})}
        }).catch((err)=>
          res.json({confirmation:'fail',message:'server error'})
        )
    },
    
    
    
    creategame: (req,res)=>{
        
        Games.findOne({name:req.body.name}).then((game)=>{
            if(game){
            return res.status(400).json({confirmation:'fail', message:'Game Already exists'})
            }
            
            let newGame = new Games()
            
            newGame.name = req.body.name;
            newGame.description = req.body.description;
            newGame.released = req.body.released;
            newGame.playtime = req.body.playtime;
            newGame.secret = req.body.secret;
            newGame.timestamp = req.body.timestamp
            

            newGame.save().then(game=>{
                return res.status(201).json({message:'Game Created', game})
            })
            .catch((err)=> res.json({confirmation:'fail', message:'Game not saved to database'}))
        }).catch((err)=>res.status(500).json({confirmation:'fail',message:'Server Error'}))
        },
    
        entergame:(req,res)=>{
        Games.findOne({name:req.body.name}).then((game)=>{
        if(!game){
            return res.status(400).json({confirmation:'fail', message:'Game doesnt exists'})
        } else{
            const matchSecret = game.secret === req.body.secret
            if(!matchSecret){
                res.redirect(`/api/v1/games/noentry`)
        }else{
            return res.status(200).json({message:'Welcome'})
        }
        }

    })
        },
        noentry:(req,res)=>{
            return res.status(200).json({message:'You will have to enter the correct secret to enter'})
        },

        enter:(req,res)=>{
            Games.findOne({name:req.body.name}).then((game)=>{
                const gamename = req.body.name
                return res.status(200).json({message:`Welcome:/n You have entered the correct secret for ${gamename} `}) 
            })
        },
        
        updategame:(req, res) => {
    
        Games.findOne({name:req.body.name}).then((game)=>{
        if(game){
            const matchSecret = game.secret === req.body.secret
        if(!matchSecret){
          return res.status(404).json({message:'Incorrect Input'})
        }else{
            const updatedGame = req.body
            game.name = updatedGame.name ? updatedGame.name : game.name
            game.description = updatedGame.description ? updatedGame.description : game.description
            return res.json({ message: 'Game Updated', game });
        }
      }
    })},
    
deletegame:(req,res)=>{
    const id = req.params.id
    Games.findByIdAndDelete(id).then((game)=>{
      if(game){
      return res.status(200).json({message:'Game Deleted'})}
      else{
        return res.status(404).json({message:'No game to delete'})
      }
    }).catch(err=>res.status(404).json({message:'Server Error'}))
  }

}