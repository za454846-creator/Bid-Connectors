/**
 * Locations for the project filters (State + City dropdowns): 50 US states + main cities.
 * Only used by the filters. SEO location pages come from STATES in data/projects.js.
 *
 * Format: [slug, English name, Arabic name, code, cities]
 * city = "English name" or ["English name", "Arabic name"]
 * City slugs are made from the English name ("New York City" -> "new-york-city").
 * Without an Arabic name, the English name is shown on Arabic pages.
 */

export const COUNTRIES = [
  {
    code: "us",
    en: "United States",
    ar: "الولايات المتحدة",
    regionLabel: { en: "State", ar: "ولاية" },
    regions: [
      ["alabama", "Alabama", "ألاباما", "AL", ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa"]],
      ["alaska", "Alaska", "ألاسكا", "AK", ["Anchorage", "Fairbanks", "Juneau"]],
      ["arizona", "Arizona", "أريزونا", "AZ", [["Phoenix", "فينيكس"], "Tucson", "Mesa", "Scottsdale", "Chandler"]],
      ["arkansas", "Arkansas", "أركنساس", "AR", ["Little Rock", "Fayetteville", "Fort Smith"]],
      ["california", "California", "كاليفورنيا", "CA", [["Los Angeles", "لوس أنجلوس"], ["San Diego", "سان دييغو"], "San Francisco", "San Jose", "Sacramento", "Fresno"]],
      ["colorado", "Colorado", "كولورادو", "CO", ["Denver", "Colorado Springs", "Aurora", "Fort Collins"]],
      ["connecticut", "Connecticut", "كونيتيكت", "CT", ["Hartford", "New Haven", "Stamford", "Bridgeport"]],
      ["delaware", "Delaware", "ديلاوير", "DE", ["Wilmington", "Dover", "Newark"]],
      ["florida", "Florida", "فلوريدا", "FL", [["Miami", "ميامي"], ["Tampa", "تامبا"], "Orlando", "Jacksonville", "Fort Lauderdale"]],
      ["georgia", "Georgia", "جورجيا", "GA", ["Atlanta", "Savannah", "Augusta", "Columbus"]],
      ["hawaii", "Hawaii", "هاواي", "HI", ["Honolulu", "Hilo", "Kailua"]],
      ["idaho", "Idaho", "أيداهو", "ID", ["Boise", "Meridian", "Idaho Falls"]],
      ["illinois", "Illinois", "إلينوي", "IL", ["Chicago", "Springfield", "Naperville", "Peoria"]],
      ["indiana", "Indiana", "إنديانا", "IN", ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"]],
      ["iowa", "Iowa", "آيوا", "IA", ["Des Moines", "Cedar Rapids", "Davenport"]],
      ["kansas", "Kansas", "كانساس", "KS", ["Wichita", "Overland Park", "Kansas City", "Topeka"]],
      ["kentucky", "Kentucky", "كنتاكي", "KY", ["Louisville", "Lexington", "Bowling Green"]],
      ["louisiana", "Louisiana", "لويزيانا", "LA", ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette"]],
      ["maine", "Maine", "مين", "ME", ["Portland", "Bangor", "Augusta"]],
      ["maryland", "Maryland", "ماريلاند", "MD", ["Baltimore", "Annapolis", "Frederick", "Rockville"]],
      ["massachusetts", "Massachusetts", "ماساتشوستس", "MA", ["Boston", "Worcester", "Springfield", "Cambridge"]],
      ["michigan", "Michigan", "ميشيغان", "MI", ["Detroit", "Grand Rapids", "Lansing", "Ann Arbor"]],
      ["minnesota", "Minnesota", "مينيسوتا", "MN", ["Minneapolis", "Saint Paul", "Rochester", "Duluth"]],
      ["mississippi", "Mississippi", "ميسيسيبي", "MS", ["Jackson", "Gulfport", "Hattiesburg"]],
      ["missouri", "Missouri", "ميزوري", "MO", ["Kansas City", "St. Louis", "Springfield", "Columbia"]],
      ["montana", "Montana", "مونتانا", "MT", ["Billings", "Missoula", "Bozeman", "Helena"]],
      ["nebraska", "Nebraska", "نبراسكا", "NE", ["Omaha", "Lincoln", "Grand Island"]],
      ["nevada", "Nevada", "نيفادا", "NV", ["Las Vegas", "Reno", "Henderson", "Carson City"]],
      ["new-hampshire", "New Hampshire", "نيوهامبشير", "NH", ["Manchester", "Nashua", "Concord"]],
      ["new-jersey", "New Jersey", "نيوجيرسي", "NJ", ["Newark", "Jersey City", "Trenton", "Paterson"]],
      ["new-mexico", "New Mexico", "نيومكسيكو", "NM", ["Albuquerque", "Santa Fe", "Las Cruces"]],
      ["new-york", "New York", "نيويورك", "NY", [["New York City", "مدينة نيويورك"], ["Buffalo", "بافالو"], "Rochester", "Albany", "Syracuse"]],
      ["north-carolina", "North Carolina", "كارولاينا الشمالية", "NC", ["Charlotte", "Raleigh", "Greensboro", "Durham"]],
      ["north-dakota", "North Dakota", "داكوتا الشمالية", "ND", ["Fargo", "Bismarck", "Grand Forks"]],
      ["ohio", "Ohio", "أوهايو", "OH", [["Columbus", "كولومبوس"], "Cleveland", "Cincinnati", "Toledo", "Akron"]],
      ["oklahoma", "Oklahoma", "أوكلاهوما", "OK", ["Oklahoma City", "Tulsa", "Norman"]],
      ["oregon", "Oregon", "أوريغون", "OR", ["Portland", "Salem", "Eugene", "Bend"]],
      ["pennsylvania", "Pennsylvania", "بنسلفانيا", "PA", ["Philadelphia", "Pittsburgh", "Harrisburg", "Allentown"]],
      ["rhode-island", "Rhode Island", "رود آيلاند", "RI", ["Providence", "Warwick", "Cranston"]],
      ["south-carolina", "South Carolina", "كارولاينا الجنوبية", "SC", ["Charleston", "Columbia", "Greenville"]],
      ["south-dakota", "South Dakota", "داكوتا الجنوبية", "SD", ["Sioux Falls", "Rapid City", "Pierre"]],
      ["tennessee", "Tennessee", "تينيسي", "TN", ["Nashville", "Memphis", "Knoxville", "Chattanooga"]],
      ["texas", "Texas", "تكساس", "TX", [["Dallas", "دالاس"], ["Houston", "هيوستن"], ["Austin", "أوستن"], "San Antonio", "Fort Worth", "El Paso"]],
      ["utah", "Utah", "يوتا", "UT", ["Salt Lake City", "Provo", "Ogden", "St. George"]],
      ["vermont", "Vermont", "فيرمونت", "VT", ["Burlington", "Montpelier", "Rutland"]],
      ["virginia", "Virginia", "فيرجينيا", "VA", ["Virginia Beach", "Richmond", "Norfolk", "Arlington"]],
      ["washington", "Washington", "واشنطن (ولاية)", "WA", ["Seattle", "Spokane", "Tacoma", "Bellevue"]],
      ["west-virginia", "West Virginia", "فيرجينيا الغربية", "WV", ["Charleston", "Huntington", "Morgantown"]],
      ["wisconsin", "Wisconsin", "ويسكونسن", "WI", ["Milwaukee", "Madison", "Green Bay"]],
      ["wyoming", "Wyoming", "وايومنغ", "WY", ["Cheyenne", "Casper", "Laramie"]],
    ],
  }
];
