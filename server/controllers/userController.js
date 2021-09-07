const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')
const jwt = require('jsonwebtoken')

const generateJwt = (id,email,role) =>{
   return  jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn:'24h'})
}

class UserController{
    async registration(req,res,next){
        const {email,password,role} = req.body
        if(!email||!password){
            return next(ApiError.badRequest('Invalid email or password'))
        }
    const candidate = await User.findOne({where:{email}})
        if (candidate){
            return next(ApiError.badRequest('The user already exists'))
        }
        const hasPassword = await bcrypt.hash(password,5)
        const user = await  User.create ({email, role, password:hasPassword})
        const basket =await Basket.create({userId: user.id})
        const token  = generateJwt(user.id,user.email, user.role )
        return res.json({token})
    }
    async login(req,res,next){
        const {email,password} = req.body
        const user = await User.findOne({where:{email}})
        if(!user){
            return next(ApiError.internal('The user is not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal('The password is incorrect '))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    async check(req,res,next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        res.json({token})
    }
}

module.exports = new UserController()