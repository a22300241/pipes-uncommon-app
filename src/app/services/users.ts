import { computed, inject, Injectable, OnInit, signal } from '@angular/core';
import { User, UsersResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { combineLatest, delay } from 'rxjs';
interface State{
  users:User[];
  loading:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class Users implements OnInit {
  private http=inject(HttpClient);
  #state=signal<State>({
    loading:true,
    users:[]
  });
  public users=computed(()=>this.#state().users);
  public loading=computed(()=>this.#state().loading);
  ngOnInit(): void {
    this.http.get<UsersResponse>('https://reqres.in/api/users>')
    .pipe(delay(1500))
    .subscribe(res=>{
      this.#state.set({
        loading:false,
        users:res.data
      })
    })
  }

}
