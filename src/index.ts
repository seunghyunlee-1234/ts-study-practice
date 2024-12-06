import { input } from './input';
import User from './User';
import fs from 'node:fs';
import path from 'node:path';

const app = async () => {
 
const choice = await input('Are you logging in(1), or signing up(0)?')

if (choice === '1'){ 
    const email = await input('What is your email?: ')
    const username = await input('What is your username: ')
    const password = await input('What is your password: ')
    fs.appendFileSync('data/UsersInfo',`email: ${email}\n username: ${username}\n password: ${password}\n`)
}else (choice === '0');{
    const email = await input('What is your email?:')
    const password = await input('What is your password?:')
    const users = fs.readFileSync('data/users.txt', "utf-8")
    console.log(email)
    console.log(password)
    console.log(users)
    const splitUsers = users.split('\n')
    console.log(splitUsers)
};
  };
  app();