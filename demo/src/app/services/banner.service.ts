import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../models/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private baseurl ="https://sheetdb.io/api/v1/kmwe9y8s2c9ea";

  constructor(private HTTP:HttpClient) { }
  getdata():Observable<Banner[]>{ 
    return this.HTTP.get<Banner[]>(this.baseurl);
  } 
}
