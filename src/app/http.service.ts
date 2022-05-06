import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {DataService}from './global.service'


@Injectable()

export class httpService{
URL="http://localhost:3000/employees"
constructor(public http:HttpClient,public da:DataService){}

addform(data:any){
    return this.http.post(this.URL,data)
}


}