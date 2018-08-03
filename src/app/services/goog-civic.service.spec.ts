import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {
  CivicElectionRequest,
  CivicElection,
  APIKEY,
  ELECTIONURL,
  CivicVoterInfo,
  VOTERURL,
  DEFAULTADDRESS
} from "../common/googcivic";
import { GoogCivicService } from "./goog-civic.service";
import { TESTDATA } from "./testdata";
describe("GoogCivicService", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let googService: GoogCivicService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GoogCivicService]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    googService = TestBed.get(GoogCivicService);
  });

  it("should be created", inject(
    [GoogCivicService],
    (service: GoogCivicService) => {
      expect(service).toBeTruthy();
    }
  ));
  describe("#getElections", () => {
    let expectedElections: CivicElectionRequest;
    beforeEach(() => {
      googService = TestBed.get(GoogCivicService);
      expectedElections = TESTDATA.expectedElections;
    }); // before each #getElections
    it("should return expected Elections (called once)", () => {
      googService
        .getElections()
        .subscribe(
          elects =>
            expect(elects).toEqual(
              expectedElections,
              "should return expected elections"
            ),
          fail
        );
      const req = httpTestingController.expectOne(
        r => r.method === "GET" && r.url === ELECTIONURL
      );
      expect(req.request.params.get("key")).toEqual(APIKEY);
      req.flush(expectedElections);
    });
    it("elections should return a 404 error if thrown", () => {
      const emsg = "deliberate 404 error";
      googService.getElections().subscribe(
        data => fail("should have failed with the 404 error"),
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(404, "status");
          expect(error.error).toEqual(emsg, "message");
        }
      );
      // Respond with mock error
      const req = httpTestingController.expectOne(
        r => r.method === "GET" && r.url === ELECTIONURL
      );
      req.flush(emsg, { status: 404, statusText: "Not Found" });
    });
  }); // describe #getElections
  describe("#getVoterInfo", () => {
    let expectedVoterInfo: CivicVoterInfo;
    beforeEach(() => {
      googService = TestBed.get(GoogCivicService);
      expectedVoterInfo = TESTDATA.expectVoterInfo;
    }); // before each
    it("should return expected VoterInfo (called once)", () => {
      googService
        .getVoterInfo()
        .subscribe(
          vi =>
            expect(vi).toEqual(
              expectedVoterInfo,
              "should return expected Voter Info"
            ),
          fail
        );
      const req = httpTestingController.expectOne(
        r => r.method === "GET" && r.url === VOTERURL
      );
      expect(req.request.params.get("key")).toEqual(APIKEY);
      expect(req.request.params.get("address")).toEqual(DEFAULTADDRESS);
    });
  }); // describe #getVoterInfo
});
