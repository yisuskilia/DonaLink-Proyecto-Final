import request from "supertest"; import {describe,expect,test} from "@jest/globals"; import app from "../src/app.js";
describe("Módulo de autenticación",()=>{
test("GET / responde correctamente",async()=>{const r=await request(app).get("/");expect(r.statusCode).toBe(200);expect(r.body.message).toContain("DonaLink")});
test("registro sin datos rechaza",async()=>{const r=await request(app).post("/api/auth/register").send({});expect(r.statusCode).toBe(400)});
test("registro correcto",async()=>{const r=await request(app).post("/api/auth/register").send({name:"Usuario Test",email:"test1@donalink.local",password:"123456"});expect(r.statusCode).toBe(201)});
test("login incorrecto rechaza",async()=>{const r=await request(app).post("/api/auth/login").send({email:"test1@donalink.local",password:"incorrecta"});expect(r.statusCode).toBe(401)});
});
