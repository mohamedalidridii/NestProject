import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
users = [
{ id: 1, username: 'Mohamed', email: 'mohamed@esprit.tn', status: 'active' },
{ id: 2, username: 'Sarra', email: 'sarra@esprit.tn', status: 'inactive' },
{ id: 3, username: 'Ali', email: 'ali@esprit.tn', status: 'inactive' },
{ id: 4, username: 'Eya', email: 'eya@esprit.tn', status: 'active' },
]
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('show')
  getShow(@Query('username') username:string) {
	if(username){
	return this.users.filter(u=>u.username=== username)
	}  
	return this.users;
  }
}
