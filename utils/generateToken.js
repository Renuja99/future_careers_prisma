import jwt from 'jsonwebtoken'

const generateToken = (id) =>{

    return jwt.sign({id}, 'secret123',{
        expiresIn: '3000s',
    })
}

export default generateToken