import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  CivicElectionRequest,
  CivicElection,
  APIKEY,
  ELECTIONURL,
  CivicVoterInfo,
  VOTERURL,
  DEFAULTADDRESS
} from "../common/googcivic";

@Injectable({
  providedIn: "root"
})
export class GoogCivicService {
  defaultParam = new HttpParams().set("key", APIKEY);
  constructor(private http: HttpClient) {}
  getElections(): Observable<CivicElectionRequest> {
    return this.http.get<CivicElectionRequest>(ELECTIONURL, {
      params: this.defaultParam
    });
  }
  getVoterInfo(address: string = DEFAULTADDRESS): Observable<CivicVoterInfo> {
    const viParam = this.defaultParam.set("address", address);
    return this.http.get<CivicVoterInfo>(VOTERURL, { params: viParam });
  }
}
