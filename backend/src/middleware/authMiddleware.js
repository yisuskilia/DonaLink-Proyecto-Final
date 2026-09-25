import jwt from "jsonwebtoken";
export function authenticate(req,res,next){const h=req.headers.authorization;if(!h?.startsWith("Bearer "))return res.status(401).json({message:"Token requerido"});try{req.user=jwt.verify(h.substring(7),process.env.JWT_SECRET||"dev-secret");next()}catch{return res.status(401).json({message:"Token inválido o expirado"})}}
export function authorize(role){return(req,res,next)=>{if(req.user?.role!==role)return res.status(403).json({message:"No tienes permisos para esta acción"});next()}}
