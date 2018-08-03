import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
const CIVICURL = "https://www.googleapis.com/civicinfo/v2";
const ELECTIONURL = CIVICURL + "elections";
const VOTERURL = CIVICURL + "voterinfo";
const APIKEY = "AIzaSyBrfCvcQtYQT4MQhuQ-m2HaGmYzxr49tVk";

@Injectable({
  providedIn: "root"
})
export class GoogCivicService {
  constructor(private http: HttpClient) {}
}
