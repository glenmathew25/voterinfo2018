/* tslint:disable:max-line-length quotemark */
export const TESTDATA = {
  expectedElections: {
    kind: "civicinfo#electionsQueryResponse",
    elections: [
      {
        id: "2000",
        name: "VIP Test Election",
        electionDay: "2021-06-06",
        ocdDivisionId: "ocd-division/country:us"
      },
      {
        id: "4481",
        name: "Ohio 12th Congressional District Special Election",
        electionDay: "2018-08-07",
        ocdDivisionId: "ocd-division/country:us/state:oh/cd:12"
      },
      {
        id: "4482",
        name: "Kansas Primary Election",
        electionDay: "2018-08-07",
        ocdDivisionId: "ocd-division/country:us/state:ks"
      }
    ]
  },
  expectVoterInfo: {
    kind: "civicinfo#voterInfoResponse",
    election: {
      id: "4485",
      name: "Washington Primary Election",
      electionDay: "2018-08-07",
      ocdDivisionId: "ocd-division/country:us/state:wa"
    },
    normalizedInput: {
      line1: "1521 2nd Avenue",
      city: "Seattle",
      state: "WA",
      zip: "98101"
    },
    pollingLocations: [
      {
        address: {
          locationName: "King County Administration Building",
          line1: "500 4th Avenue, Room 440",
          city: "Seattle",
          state: "WA",
          zip: "98104"
        },
        notes: "",
        pollingHours:
          "Open the following hours: Weekdays, July 18 - August 6, 8:30 a.m. - 4:30 p.m. Election day, August 7, 8:30 a.m. - 8 p.m.",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Bellevue Regional Library",
          line1: "1111 110th Avenue NE",
          city: "Bellevue",
          state: "WA",
          zip: "98004"
        },
        notes: "",
        pollingHours:
          "Open the following hours: Monday, August 6, 10 a.m. - 5 p.m. Election day, August 7, 9 a.m. - 8 p.m.",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "King County Elections Office",
          line1: "919 SW Grady Way",
          city: "Renton",
          state: "WA",
          zip: "98057"
        },
        notes: "",
        pollingHours:
          "Open the following hours: Weekdays, July 18 - August 6, 8:30 a.m. - 4:30 p.m. Election day, August 7, 8:30 a.m. - 8 p.m.",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      }
    ],
    earlyVoteSites: [
      {
        address: {
          locationName: "King County Administration Building",
          line1: "500 4th Avenue, Room 440",
          city: "Seattle",
          state: "WA",
          zip: "98104"
        },
        notes: "",
        pollingHours:
          "Open the following hours: Weekdays, July 18 - August 6, 8:30 a.m. - 4:30 p.m. Election day, August 7, 8:30 a.m. - 8 p.m.",
        name: "King County Administration Building Voter Service Center (VSPC)",
        voterServices: "VSPC",
        startDate: "2018-07-18",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Bellevue Regional Library",
          line1: "1111 110th Avenue NE",
          city: "Bellevue",
          state: "WA",
          zip: "98004"
        },
        notes: "",
        pollingHours:
          "Open the following hours: Monday, August 6, 10 a.m. - 5 p.m. Election day, August 7, 9 a.m. - 8 p.m.",
        name: "Bellevue Regional Library Voter Service Center (VSPC)",
        voterServices: "VSPC",
        startDate: "2018-08-06",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "King County Elections Office",
          line1: "919 SW Grady Way",
          city: "Renton",
          state: "WA",
          zip: "98057"
        },
        notes: "",
        pollingHours:
          "Open the following hours: Weekdays, July 18 - August 6, 8:30 a.m. - 4:30 p.m. Election day, August 7, 8:30 a.m. - 8 p.m.",
        name:
          "(Renton) King County Elections Office Voter Service Center (VSPC)",
        voterServices: "VSPC",
        startDate: "2018-07-18",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      }
    ],
    dropOffLocations: [
      {
        address: {
          locationName: "King County Administration Building",
          line1: "500 4th Avenue",
          city: "Seattle",
          state: "WA",
          zip: "98104"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "King County Administration Building",
        voterServices: "Drop off",
        startDate: "2018-07-18",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "South Lake Union",
          line1: "310 Terry Ave N",
          city: "Seattle",
          state: "WA",
          zip: "98109"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle) South Lake Union",
        voterServices: "Drop off",
        startDate: "2018-07-23",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Seattle Central College, Broadway-Edison Building",
          line1: "1701 Broadway",
          city: "Seattle",
          state: "WA",
          zip: "98122"
        },
        notes: "(northeast corner)",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Seattle Central College, Broadway-Edison Building",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Uwajimaya",
          line1: "619 6th Ave S",
          city: "Seattle",
          state: "WA",
          zip: "98104"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/International District) Uwajimaya",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Garfield Community Center",
          line1: "2323 E Cherry Street",
          city: "Seattle",
          state: "WA",
          zip: "98122"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/Central) Garfield Community Center",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Beacon Hill Library",
          line1: "2821 Beacon Ave S",
          city: "Seattle",
          state: "WA",
          zip: "98144"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/Beacon Hill) Beacon Hill Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Seattle Pacific University",
          line1: "310 West Bertona St",
          city: "Seattle",
          state: "WA",
          zip: "98119"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/Queen Anne) Seattle Pacific University",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Magnolia Park",
          line1: "1461 Magnolia Blvd W",
          city: "Seattle",
          state: "WA",
          zip: "98199"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/Magnolia) Magnolia Park",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "UW Campus - Schmitz Hall",
          line1: "1410 NE Campus Parkway",
          city: "Seattle",
          state: "WA",
          zip: "98195"
        },
        notes: "By North entrance on NE 41st St.",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/U District) UW Campus - Schmitz Hall",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Green Lake Community Center",
          line1: "7201 East Green Lake Drive N",
          city: "Seattle",
          state: "WA",
          zip: "98115"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/Green Lake) Green Lake Community Center",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Rainier Community Center",
          line1: "4600 38th Avenue South",
          city: "Seattle",
          state: "WA",
          zip: "98118"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/Columbia City) Rainier Community Center",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "High Point Library",
          line1: "3411 SW Raymond St",
          city: "Seattle",
          state: "WA",
          zip: "98126"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/62; open Election Day 8/7 until 8 PM",
        name: "(Seattle/West Seattle) High Point Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Ballard Branch Library",
          line1: "Corner of NW 57th Street and 22nd Avenue NW",
          city: "Seattle",
          state: "WA",
          zip: "98107"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/Ballard) Ballard Branch Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "North Seattle College",
          line1: "9600 College Way North",
          city: "Seattle",
          state: "WA",
          zip: "98103"
        },
        notes: "South visitor lot access from N 95th St",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/Northgate) North Seattle College",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "South Park Library",
          line1: "8604 8th Ave S",
          city: "Seattle",
          state: "WA",
          zip: "98108"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/South Park) South Park Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Mercer Island Community & Event Center",
          line1: "8236 SE 24th Street",
          city: "Mercer Island",
          state: "WA",
          zip: "98040"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Mercer Island Community & Event Center",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "NewHolly Neighborhood Campus",
          line1: "7054 32nd Ave S",
          city: "Seattle",
          state: "WA",
          zip: "98118"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/Beacon Hill) NewHolly Neighborhood Campus",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Bellevue Regional Library",
          line1: "1111 110th Avenue NE",
          city: "Bellevue",
          state: "WA",
          zip: "98004"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Bellevue Regional Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "White Center Library",
          line1: "1409 SW 107th St",
          city: "Seattle",
          state: "WA",
          zip: "98146"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/White Center) White Center Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Broadview Library",
          line1: "12755 Greenwood Ave N",
          city: "Seattle",
          state: "WA",
          zip: "98133"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/Broadview) Broadview Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Rainier Beach Community Center",
          line1: "8825 Rainier Ave S",
          city: "Seattle",
          state: "WA",
          zip: "98118"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/Rainier Valley) Rainier Beach Community Center",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Boulevard Park Library",
          line1: "12015 Roseberg Ave S",
          city: "Seattle",
          state: "WA",
          zip: "98168"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Burien) Boulevard Park Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Lake City Library",
          line1: "12501 28th Ave NE",
          city: "Seattle",
          state: "WA",
          zip: "98125"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/Lake City) Lake City Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Burien Town Square Park",
          line1: "480 SW 152nd Street",
          city: "Burien",
          state: "WA",
          zip: "98166"
        },
        notes: "Corner of 5th Avenue SW and SW 152nd Street",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Burien Town Square Park",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Crossroads Shopping Center",
          line1: "15600 NE 8th Street",
          city: "Bellevue",
          state: "WA",
          zip: "98008"
        },
        notes: "South Entrance, Near Dress Barn",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Bellevue) Crossroads Shopping Center",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Shoreline Library",
          line1: "345 NE 175th St",
          city: "Shoreline",
          state: "WA",
          zip: "98155"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Shoreline Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Kirkland City Hall",
          line1: "123 5th Avenue",
          city: "Kirkland",
          state: "WA",
          zip: "98033"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Kirkland City Hall",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Tukwila Community Center",
          line1: "12424 42nd Ave S",
          city: "Tukwila",
          state: "WA",
          zip: "98168"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Tukwila Community Center",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Newport Way Library",
          line1: "14250 SE Newport Way",
          city: "Bellevue",
          state: "WA",
          zip: "98006"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Bellevue) Newport Way Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Lake Forest Park City Hall",
          line1: "17425 Ballinger Way NE",
          city: "Lake Forest Park",
          state: "WA",
          zip: "98155"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Lake Forest Park City Hall",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Newcastle City Hall",
          line1: "12835 Newcastle Way",
          city: "Newcastle",
          state: "WA",
          zip: "98056"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Newcastle City Hall",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Skyway Library",
          line1: "12601 76th Ave S",
          city: "Seattle",
          state: "WA",
          zip: "98178"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Seattle/Skyway) Skyway Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Normandy Park Towne Center",
          line1: "19901 1st Ave South",
          city: "Normandy Park",
          state: "WA",
          zip: "98148"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Normandy Park Towne Center",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Redmond City Hall",
          line1: "15670 NE 85th Street",
          city: "Redmond",
          state: "WA",
          zip: "98052"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Redmond City Hall",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Valley View Library",
          line1: "17850 Military Rd S",
          city: "SeaTac",
          state: "WA",
          zip: "98188"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(SeaTac) Valley View Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Kenmore City Hall",
          line1: "18120 68th Ave NE",
          city: "Kenmore",
          state: "WA",
          zip: "98028"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Kenmore City Hall",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Sammamish City Hall",
          line1: "801 228th Ave SE",
          city: "Sammamish",
          state: "WA",
          zip: "98075"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Sammamish City Hall",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "King County Elections Office",
          line1: "919 SW Grady Way",
          city: "Renton",
          state: "WA",
          zip: "98057"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Renton) King County Elections Office",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Renton Public Health Center",
          line1: "3201 NE 7th Street",
          city: "Renton",
          state: "WA",
          zip: "98056"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Renton Public Health Center",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Kingsgate Library",
          line1: "12315 NE 143rd Street",
          city: "Kirkland",
          state: "WA",
          zip: "98034"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Kirkland) Kingsgate Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Vashon Library",
          line1: "17210 Vashon Hwy SW",
          city: "Vashon Island",
          state: "WA",
          zip: "98070"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Vashon Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Bothell City Hall",
          line1: "18415 101st Ave NE",
          city: "Bothell",
          state: "WA",
          zip: "98011"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Bothell City Hall",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Highline College",
          line1: "2400 S 240th Street",
          city: "Des Moines",
          state: "WA",
          zip: "98198"
        },
        notes: "entrance across from 27th Ave S",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Des Moines) Highline College",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Fairwood Library",
          line1: "17009 140th Ave SE",
          city: "Renton",
          state: "WA",
          zip: "98058"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Renton) Fairwood Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Issaquah City Hall",
          line1: "130 E Sunset Way",
          city: "Issaquah",
          state: "WA",
          zip: "98027"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Issaquah City Hall",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Regional Justice Center",
          line1: "401 4th Avenue N",
          city: "Kent",
          state: "WA",
          zip: "98032"
        },
        notes: "Near parking garage entrance.",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Kent) Regional Justice Center",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Kentridge High School",
          line1: "12430 SE 208th Street",
          city: "Kent",
          state: "WA",
          zip: "98031"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Kent) Kentridge High School",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Federal Way City Hall",
          line1: "33325 8th Avenue South",
          city: "Federal Way",
          state: "WA",
          zip: "98003"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Federal Way City Hall",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Woodinville Library",
          line1: "17105 Avondale Rd NE",
          city: "Woodinville",
          state: "WA",
          zip: "98072"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Woodinville Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Fall City Library",
          line1: "33415 SE 42nd Place",
          city: "Fall City",
          state: "WA",
          zip: "98024"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Fall City Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Auburn Library",
          line1: "1102 Auburn Way S",
          city: "Auburn",
          state: "WA",
          zip: "98002"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Auburn Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Snoqualmie Library",
          line1: "7824 Center Boulevard SE",
          city: "Snoqualmie ",
          state: "WA",
          zip: "98065"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Snoqualmie Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Algona-Pacific Library",
          line1: "255 Ellingson Rd",
          city: "Pacific",
          state: "WA",
          zip: "98047"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Pacific) Algona-Pacific Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Covington Library",
          line1: "27100 164th Ave SE",
          city: "Covington",
          state: "WA",
          zip: "98042"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Covington Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Hobart Food Market",
          line1: "20250 276th Ave SE",
          city: "Maple Valley",
          state: "WA",
          zip: "98038"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Hobart Food Market",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Tahoma School District Building",
          line1: "25720 Maple Valley-Black Diamond Road SE",
          city: "Maple Valley",
          state: "WA",
          zip: "98038"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Maple Valley) Tahoma School District Building",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "North Bend Library",
          line1: "115 East 4th St",
          city: "North Bend",
          state: "WA",
          zip: "98045"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "North Bend Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Muckleshoot Tribe - Philip Starr Building",
          line1: "39015 172nd Avenue SE",
          city: "Auburn",
          state: "WA",
          zip: "98092"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "(Auburn) Muckleshoot Tribe - Philip Starr Building",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Enumclaw Library",
          line1: "1700 1st St",
          city: "Enumclaw",
          state: "WA",
          zip: "98022"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Enumclaw Library",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        address: {
          locationName: "Duvall Police Department/Depot Park",
          line1: "26225 NE Burhen Way",
          city: "Duvall",
          state: "WA",
          zip: "98019"
        },
        notes: "",
        pollingHours:
          "Open 24 hours 7/18 to 8/6; open Election Day 8/7 until 8 PM",
        name: "Duvall Police Department/Depot Park",
        voterServices: "Drop off",
        startDate: "2018-07-19",
        endDate: "2018-08-07",
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      }
    ],
    contests: [
      {
        type: "referendum",
        special: "no",
        level: ["administrativeArea2"],
        district: {
          name: "Metropolitan King County",
          scope: "countywide"
        },
        ballotPlacement: "170001",
        referendumTitle: "Proposition No. 1",
        referendumSubtitle:
          "Regular Property Tax Levy Automated Fingerprint Identification System Services\n\n",
        referendumText:
          "BALLOT TITLE:\n\nThe King County council has passed Ordinance 18674 concerning this proposition for the automated fingerprint identification system (AFIS) levy.  This proposition would replace an expiring levy and fund continued operation of the regional AFIS Program to provide enhanced and accessible forensic fingerprint, palmprint and other technology and services to identify criminals and aid in the administration of justice.  It would authorize an additional property tax for six years beginning with a 2018 rate of $0.035 (3.5 cents) per $1,000 of assessed valuation for collection in 2019.  The 2019 levy amount would be the base for computing limitations under Chapter 84.55 RCW for collection in years 2020 through 2024.  Should this proposition be:\n\n[ ] Approved\n\n[ ] Rejected\n\n----------\n\n",
        referendumProStatement:
          "ARGUMENT FOR:\n\nRenew AFIS, An Essential Crime-Fighting Tool  For over 30 years the voter-approved Automated Fingerprint Identification System (AFIS) has been the preeminent crime-fighting tool for police in King County’s 39 cities and unincorporated area.  Using state of the art technology and highly trained, nationally accredited staff, the AFIS Program ensures all King County law enforcement officers can use fingerprints and palm prints to identify suspects and solve crimes.    Real Efficiency, Lower Cost  This levy renewal proposal is fiscally responsible. In preparing to ask voters to renew the levy, the AFIS Program reviewed its operations and found ways to eliminate 11 full time positions while still providing the same high-quality, professional service to King County law enforcement agencies. The new AFIS levy will collect $1.5 million less in 2019 than it did in 2018. The owner of a $600,000 home will pay only $21 in 2019 for this fundamental public safety tool.  Your yes vote will maintain, replace, or restore existing technology and operations for the next six years.  AFIS is an essential crime fighting tool and the AFIS Program has a proven track record of managing the public’s money well.  We ask you to vote yes on Proposition 1.\n\nFOR MORE INFORMATION:\n\nhttps://weiapplets.sos.wa.gov/myvoteOLVR/onlinevotersguide/Measures?electionid=70&countycode=KI\n\n----------\n\n",
        referendumConStatement:
          "ARGUMENT AGAINST:\n\nNo statement submitted.  Statements in favor of and in opposition to a ballot measure are submitted by committees appointed by the jurisdiction. No persons came forward to serve on the committee and to write a statement in opposition. If you would like to be involved with a committee in the future please contact the jurisdiction.\n\nFOR MORE INFORMATION:\n\nhttps://weiapplets.sos.wa.gov/myvoteOLVR/onlinevotersguide/Measures?electionid=70&countycode=KI",
        referendumBallotResponses: ["Approved", "Rejected"],
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        type: "primary",
        special: "no",
        office: "United States: U.S. Senator",
        district: {
          name: "United States",
          scope: "statewide"
        },
        ballotPlacement: "170005",
        candidates: [
          {
            name: "Thor Amundson",
            party: "(Prefers Independent Party)",
            phone: "360-866-4103",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=54142&electionId=70",
            email: "thoraamundson@gmail.com"
          },
          {
            name: "Dave Strider",
            party: "(Prefers Independent Party)",
            candidateUrl: "http://davestriderforussenate.com",
            phone: "253-238-1771",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=52983&electionId=70",
            email: "DAVESTRIDERFORUSSENATE@gmail.com"
          },
          {
            name: "Joey Gibson",
            party: "(Prefers Republican Party)",
            candidateUrl: "http://gibsonforfreedom.com",
            phone: "360-635-3081",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=52515&electionId=70",
            email: "GibsonForFreedomUSSenate@gmail.com"
          },
          {
            name: "Mike Luke",
            party: "(Prefers Libertarian Party)",
            candidateUrl: "http://www.luke4senate.com/",
            phone: "206-452-3995",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=50310&electionId=70",
            email: "luke4senate@frontier.com"
          },
          {
            name: "GoodSpaceGuy",
            party: "(Prefers Republican Party)",
            candidateUrl: "http://www.colonizespace.blogspot.com",
            phone: "206-601-8172",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=52376&electionId=70",
            email: "goodspaceguy42@yahoo.com"
          },
          {
            name: "Clint R. Tannehill",
            party: "(Prefers Democratic Party)",
            candidateUrl: "http://www.clinttannehill.com",
            phone: "206-588-6341",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=50384&electionId=70",
            email: "info@clinttannehill.com"
          },
          {
            name: "Maria Cantwell",
            party: "(Prefers Democratic Party)",
            candidateUrl: "http://www.cantwell.com",
            phone: "206-682-7328",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=53721&electionId=70",
            email: "maria@cantwell.com"
          },
          {
            name: "Susan Hutchison",
            party: "(Prefers Republican Party)",
            candidateUrl: "http://www.susan4senate.com",
            phone: "206-880-1820",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=54709&electionId=70",
            email: "info@susan4senate.com"
          },
          {
            name: "Brad Chase",
            party: "(Prefers FDFR Party)",
            candidateUrl: "http://www.screwbothparties.com",
            phone: "844-840-8800",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=53774&electionId=70",
            email: "info@screwbothparties.com"
          },
          {
            name: "Tim Owen",
            party: "(Prefers Republican Party)",
            phone: "425-407-3848",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=54210&electionId=70",
            email: "wmtimothyowen@gmail.com"
          },
          {
            name: "Matthew D. Heines",
            party: "(Prefers Republican Party)",
            phone: "425-444-9401",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=52427&electionId=70",
            email: "matthewheines@gmail.com"
          },
          {
            name: "Sam Wright",
            party: "(Prefers The Human Rights Party)",
            candidateUrl: "http://www.thehumanrightsparty.org",
            phone: "360-943-4424",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=50209&electionId=70",
            email: "samwright1522@comcast.net"
          },
          {
            name: "Art Coday",
            party: "(Prefers Republican Party)",
            candidateUrl: "http://www.artcoday.com",
            phone: "206-775-9746",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=53910&electionId=70",
            email: "codayforussenate@yahoo.com"
          },
          {
            name: "John Orlinski",
            party: "(Prefers Republican Party)",
            candidateUrl: "http://www.johnorlinski.com",
            phone: "425-226-5810",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=54379&electionId=70",
            email: "johnorlinski@outlook.com"
          },
          {
            name: "Charlie R Jackson",
            party: "(Prefers Independent Party)",
            candidateUrl: "http://scaryreality.com",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=50548&electionId=70",
            email: "19trilliondebt@gmail.com"
          },
          {
            name: "Keith Swank",
            party: "(Prefers Republican Party)",
            candidateUrl: "http://www.keithswankforsenate.com",
            phone: "360-872-8739",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=51514&electionId=70",
            email: "keith@keithswankforsenate.com"
          },
          {
            name: "Alex Tsimerman",
            party: "(Prefers StandupAmerica Party)",
            candidateUrl: "http://www.alexforamerica.com",
            phone: "206-324-6264",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=53381&electionId=70",
            email: "standup@alexforamerica.com"
          },
          {
            name: "RC Smith",
            party: "(Prefers Republican Party)",
            candidateUrl: "http://rcsmithforsenate.com",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=52210&electionId=70",
            email: "smith8c0@gmail.com"
          },
          {
            name: "Don L. Rivers",
            party: "(Prefers Democratic Party)",
            candidateUrl: "http://www.donlrivers.com",
            phone: "206-356-4621",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=51435&electionId=70",
            email: "DonLRivers@mail.com"
          },
          {
            name: "Jennifer Gigi Ferguson",
            party: "(Prefers Independent Party)",
            candidateUrl: "http://gigiforsenate.us",
            phone: "253-282-9591",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=53757&electionId=70",
            email: "GigiForSenate@gmail.com"
          },
          {
            name: "Steve Hoffman",
            party: "(Prefers Freedom Socialist Party)",
            candidateUrl: "http://votesocialism.com",
            phone: "206-722-2453",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=50073&electionId=70",
            email: "votesocialism@gmail.com"
          },
          {
            name: "George H. Kalberer",
            party: "(Prefers Democratic Party)",
            phone: "425-599-6055",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=54532&electionId=70",
            email: "kalberer.seattle@gmail.com"
          },
          {
            name: 'James Robert "Jimmie" Deal',
            party: "(Prefers Green Party)",
            candidateUrl: "http://www.jamesrobertdeal.org/Radio",
            phone: "425-774-6611",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=53599&electionId=70",
            email: "james@jamesdeal.com"
          },
          {
            name: 'Roque "Rocky" De La Fuente',
            party: "(Prefers Republican Party)",
            candidateUrl: "http://www.rocky101.com",
            phone: "858-239-9007",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=50444&electionId=70",
            email: "rocky@rocky101.com"
          },
          {
            name: "Jon Butler",
            party: "(Prefers Independent Party)",
            candidateUrl: "https://www.facebook.com/jon.butler.3194",
            phone: "253-961-4807",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=50648&electionId=70",
            email: "jn.butler1@gmail.com"
          },
          {
            name: "Dave Bryant",
            party: "(Prefers Republican Party)",
            candidateUrl: "http://bryantforussenate.com",
            phone: "253-987-5130",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=51560&electionId=70",
            email: "DaveBryant@BryantforUSSenate.com"
          },
          {
            name: "Mohammad Said",
            party: "(Prefers Democratic Party)",
            phone: "509-754-4689",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=51018&electionId=70",
            email: "drsaidusa@yahoo.com"
          },
          {
            name: "Matt Hawkins",
            party: "(Prefers Republican Party)",
            candidateUrl: "http://www.hawkinsforussenate.com",
            phone: "509-990-3509",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=53915&electionId=70",
            email: "Matt@HawkinsforUSSenate.com"
          },
          {
            name: "Glen R Stockwell",
            party: "(Prefers Republican Party)",
            phone: "509-540-6899",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=53350&electionId=70",
            email: "StockwellStocky@aol.com"
          }
        ],
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        type: "primary",
        special: "no",
        office: "Congressional District 7: U.S. Representative",
        level: ["country"],
        district: {
          name: "Congressional District 7",
          scope: "congressional"
        },
        ballotPlacement: "170010",
        candidates: [
          {
            name: "Craig Keller",
            party: "(Prefers Republican Party)",
            candidateUrl: "http://www.keller4america.us",
            phone: "206-932-2243",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=51418&electionId=70",
            email: "info@Keller4America.us"
          },
          {
            name: "Pramila Jayapal",
            party: "(Prefers Democratic Party)",
            candidateUrl: "http://www.pramilaforcongress.com",
            phone: "541-993-9185",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=51105&electionId=70",
            email: "pramila@pramilaforcongress.com"
          }
        ],
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        type: "primary",
        special: "no",
        office: "Legislative District 43: State Senator",
        district: {
          name: "Legislative District 43"
        },
        ballotPlacement: "170058",
        candidates: [
          {
            name: "Jamie Pedersen",
            party: "(Prefers Democratic Party)",
            candidateUrl: "http://peopleforpedersen.org",
            phone: "206-832-8174",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=50480&electionId=70",
            email: "jamie@peopleforpedersen.org"
          },
          {
            name: "Dan Harder",
            party: "(Prefers Republican Party)",
            candidateUrl: "http://www.voteharderforseattle.org",
            phone: "206-880-0265",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=54361&electionId=70",
            email: "dan@voteharderforseattle.org"
          }
        ],
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        type: "primary",
        special: "no",
        office: "Legislative District 43: State Representative Pos. 1",
        district: {
          name: "Legislative District 43"
        },
        ballotPlacement: "170059",
        candidates: [
          {
            name: "Nicole Macri",
            party: "(Prefers Democratic Party)",
            candidateUrl: "http://www.votenicole.org",
            phone: "206-486-0085",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=51507&electionId=70",
            email: "nicole@votenicole.org"
          },
          {
            name: "John Peeples",
            party: "(Prefers Republican Party)",
            candidateUrl: "http://www.johnpeeplesfor43ld.org",
            phone: "206-552-0872",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=52034&electionId=70",
            email: "john@johnpeeplesfor43ld.org"
          }
        ],
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        type: "primary",
        special: "no",
        office: "Legislative District 43: State Representative Pos. 2",
        district: {
          name: "Legislative District 43"
        },
        ballotPlacement: "170060",
        candidates: [
          {
            name: "Boris Joffe",
            party: "(Prefers Independent Party)",
            candidateUrl: "http://borisforoffice.com",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=54763&electionId=70",
            email: "Hello@BorisForOffice.com"
          },
          {
            name: "Frank Chopp",
            party: "(Prefers Democratic Party)",
            candidateUrl: "http://www.frankchopp.com",
            phone: "206-381-1220",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=51320&electionId=70",
            email: "frankchopp@comcast.net"
          },
          {
            name: "Claire Torstenbo",
            party: "(Prefers Republican Party)",
            candidateUrl: "http://claire4house43ld.com",
            phone: "206-880-1784",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=54771&electionId=70",
            email: "claire4house43@gmail.com"
          }
        ],
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      },
      {
        type: "general election",
        special: "no",
        office: "SEA 43-1776 PCO: Precinct Committee Officer - Democratic",
        district: {
          name: "SEA 43-1776 PCO"
        },
        ballotPlacement: "173304",
        candidates: [
          {
            name: "Ian Randall",
            party: "(States No Party Preference)",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=55094&electionId=70"
          },
          {
            name: "Cooper Moore",
            party: "(States No Party Preference)",
            photoUrl:
              "http://weiapplets.sos.wa.gov/MyVoteOLVR/OnlineVotersGuide/GetCandidateStatement?candidateId=55001&electionId=70"
          }
        ],
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      }
    ],
    state: [
      {
        name: "Washington",
        electionAdministrationBody: {
          name: "Office of the Secretary of State - Elections Div.",
          electionInfoUrl: "http://www.vote.wa.gov",
          electionRegistrationUrl:
            "https://wei.sos.wa.gov/agency/osos/en/voters/Pages/register_to_vote.aspx",
          electionRegistrationConfirmationUrl: "http://www.myvote.wa.gov",
          absenteeVotingInfoUrl:
            "https://wei.sos.wa.gov/agency/osos/en/voters/Pages/vote_by_mail.aspx",
          votingLocationFinderUrl:
            "https://wei.sos.wa.gov/agency/osos/en/voters/Pages/vote_by_mail.aspx",
          ballotInfoUrl: "http://www.myvote.wa.gov",
          electionRulesUrl: "http://www.sos.wa.gov/elections/voters.aspx",
          correspondenceAddress: {
            line1: "PO Box 40229",
            city: "Olympia",
            state: "WA",
            zip: "98504-0229"
          },
          physicalAddress: {
            line1: "520 Union Ave. SE",
            city: "Olympia",
            state: "WA",
            zip: "98501"
          },
          electionOfficials: [
            {
              name: "Kim Wyman",
              title: "Secretary of State",
              officePhoneNumber: "800-448-4881",
              faxNumber: "360-664-4619",
              emailAddress: "elections@sos.wa.gov"
            }
          ]
        },
        local_jurisdiction: {
          name: "King County",
          electionAdministrationBody: {
            name: "King County Elections",
            electionInfoUrl: "http://www.kingcounty.gov/elections",
            electionRegistrationUrl:
              "https://wei.sos.wa.gov/agency/osos/en/voters/Pages/register_to_vote.aspx",
            electionRegistrationConfirmationUrl: "http://www.myvote.wa.gov",
            absenteeVotingInfoUrl:
              "https://wei.sos.wa.gov/agency/osos/en/voters/Pages/vote_by_mail.aspx",
            votingLocationFinderUrl:
              "https://wei.sos.wa.gov/agency/osos/en/voters/Pages/vote_by_mail.aspx",
            ballotInfoUrl: "http://www.myvote.wa.gov",
            electionRulesUrl: "http://www.sos.wa.gov/elections/voters.aspx",
            correspondenceAddress: {
              line1: "919 S.W. Grady Way",
              city: "Renton",
              state: "WA",
              zip: "98057"
            },
            physicalAddress: {
              line1: "919 S.W. Grady Way",
              city: "Renton",
              state: "WA",
              zip: "98057"
            },
            electionOfficials: [
              {
                name: "Julie Wise",
                title: "King County Elections Director",
                officePhoneNumber: "206-296-8683",
                faxNumber: "206-296-0108",
                emailAddress: "elections@kingcounty.gov"
              }
            ]
          },
          sources: [
            {
              name: "Voting Information Project",
              official: true
            }
          ]
        },
        sources: [
          {
            name: "Voting Information Project",
            official: true
          }
        ]
      }
    ],
    mailOnly: true
  }
};
