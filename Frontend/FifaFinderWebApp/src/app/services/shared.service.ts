import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:5001/";


  constructor(private http: HttpClient) { }

  getPostList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + 'post')
  }

  addPost(val: any) {
    return this.http.post(this.APIUrl + 'post' + '/' + val.UserID, val);
  }

  deletePost(val: any) {
    return this.http.delete(this.APIUrl + 'post' + '/' + val);
  }

  updatePost(val: any) {
    return this.http.put(this.APIUrl + 'post' + '/', val);
  }


}
