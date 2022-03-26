import { createRef } from 'react';

const state = {
  sections: 60,
  pages: 59,
  zoom: 75,
  paragraphs: [
{
  offset: 1,
  factor: 1.4,
  image: "/acadia_1.png",
  aspect: 1.5,
  text: "Covering most of Mount Desert Island and other coastal islands, Acadia features the tallest mountain on the Atlantic coast of the United States, granite peaks, ocean shoreline, woodlands, and lakes. There are freshwater, estuary, forest, and intertidal habitats.",
  nps_link: "https://www.nps.gov/acad/index.htm",
  states: [
  "Maine"
  ],
  header: "Acadia",
  uuid: "park_acadia",
  visitors: 3303393,
  world_heritage_site: false,
  location: "44.35,-68.21",
  acres: 49057.36,
  square_km: 198.5,
  date_established: "1919-02-26T06:00:00Z"
},
{
  offset: 2,
  factor: 1.4,
  image: "/american_somoa_1.png",
  aspect: 1.5,
  text: "The southernmost National Park is on three Samoan islands and protects coral reefs, rainforests, volcanic mountains, and white beaches. The area is also home to flying foxes, brown boobies, sea turtles, and 900 species of fish.",
  nps_link: "https://www.nps.gov/npsa/index.htm",
  states: [
  "American Samoa"
  ],
  header: "American Samoa",
  uuid: "park_american-samoa",
  visitors: 28892,
  world_heritage_site: false,
  location: "-14.25,-170.68",
  acres: 8256.67,
  square_km: 33.4,
  date_established: "1988-10-31T06:00:00Z"
},
{
  offset: 3,
  factor: 1.4,
  image: "/arches_1.png",
  aspect: 1.5,
  text: "This site features more than 2,000 natural sandstone arches, with some of the most popular arches in the park being Delicate Arch, Landscape Arch and Double Arch. Millions of years of erosion have created these structures located in a desert climate where the arid ground has life-sustaining biological soil crusts and potholes that serve as natural water-collecting basins. Other geologic formations include stone pinnacles, fins, and balancing rocks.",
  nps_link: "https://www.nps.gov/arch/index.htm",
  states: [
  "Utah"
  ],
  header: "Arches",
  uuid: "park_arches",
  visitors: 1585718,
  world_heritage_site: false,
  location: "38.68,-109.57",
  acres: 76678.98,
  square_km: 310.3,
  date_established: "1971-11-12T06:00:00Z"
},
{
  offset: 4,
  factor: 1.4,
  image: "/badlands_1.png",
  aspect: 1.5,
  text: "The Badlands are a collection of buttes, pinnacles, spires, and mixed-grass prairies. The White River Badlands contain the largest assemblage of known late Eocene and Oligocene mammal fossils. The wildlife includes bison, bighorn sheep, black-footed ferrets, and prairie dogs.",
  nps_link: "https://www.nps.gov/badl/index.htm",
  states: [
  "South Dakota"
  ],
  header: "Badlands",
  uuid: "park_badlands",
  visitors: 996263,
  world_heritage_site: false,
  location: "43.75,-102.5",
  acres: 242755.94,
  square_km: 982.4,
  date_established: "1978-11-10T06:00:00Z"
},
{
  offset: 5,
  factor: 1.4,
  image: "/big_bend_1.png",
  aspect: 1.5,
  text: "Named for the prominent bend in the Rio Grande along the U.S.–Mexico border, this park encompasses a large and remote part of the Chihuahuan Desert. Its main attraction is backcountry recreation in the arid Chisos Mountains and in canyons along the river. A wide variety of Cretaceous and Tertiary fossils as well as cultural artifacts of Native Americans also exist within its borders.",
  nps_link: "https://www.nps.gov/bibe/index.htm",
  states: [
  "Texas"
  ],
  header: "Big Bend",
  uuid: "park_big-bend",
  visitors: 388290,
  world_heritage_site: false,
  location: "29.25,-103.25",
  acres: 801163.21,
  square_km: 3242.2,
  date_established: "1944-06-12T05:00:00Z"
},
{
  offset: 6,
  factor: 1.4,
  image: "/biscayne_1.png",
  aspect: 1.5,
  text: "Located in Biscayne Bay, this park at the north end of the Florida Keys has four interrelated marine ecosystems: mangrove forest, the Bay, the Keys, and coral reefs. Threatened animals include the West Indian manatee, American crocodile, various sea turtles, and peregrine falcon.",
  nps_link: "https://www.nps.gov/bisc/index.htm",
  states: [
  "Florida"
  ],
  header: "Biscayne",
  uuid: "park_biscayne",
  visitors: 514709,
  world_heritage_site: false,
  location: "25.65,-80.08",
  acres: 172971.11,
  square_km: 700,
  date_established: "1980-06-28T05:00:00Z"
},
{
  offset: 7,
  factor: 1.4,
  image: "/black_canyon_of_the_gunnison_1.png",
  aspect: 1.5,
  text: "The park protects a quarter of the Gunnison River, which slices sheer canyon walls from dark Precambrian-era rock. The canyon features some of the steepest cliffs and oldest rock in North America, and is a popular site for river rafting and rock climbing. The deep, narrow canyon is composed of gneiss and schist which appears black when in shadow.",
  nps_link: "https://www.nps.gov/blca/index.htm",
  states: [
  "Colorado"
  ],
  header: "Black Canyon of the Gunnison",
  uuid: "park_black-canyon-of-the-gunnison",
  visitors: 238018,
  world_heritage_site: false,
  location: "38.57,-107.72",
  acres: 30749.75,
  square_km: 124.4,
  date_established: "1999-10-21T05:00:00Z"
},
{
  offset: 8,
  factor: 1.4,
  image: "/bryce_canyon_1.png",
  aspect: 1.5,
  text: "Bryce Canyon is a geological amphitheater on the Paunsaugunt Plateau with hundreds of tall, multicolored sandstone hoodoos formed by erosion. The region was originally settled by Native Americans and later by Mormon pioneers.",
  nps_link: "https://www.nps.gov/brca/index.htm",
  states: [
  "Utah"
  ],
  header: "Bryce Canyon",
  uuid: "park_bryce-canyon",
  visitors: 2365110,
  world_heritage_site: false,
  location: "37.57,-112.18",
  acres: 35835.08,
  square_km: 145,
  date_established: "1928-02-25T06:00:00Z"
},
{
  offset: 9,
  factor: 1.4,
  image: "/canyonlands_1.png",
  aspect: 1.5,
  text: "This landscape was eroded into a maze of canyons, buttes, and mesas by the combined efforts of the Colorado River, Green River, and their tributaries, which divide the park into three districts. The park also contains rock pinnacles and arches, as well as artifacts from Ancient Pueblo peoples.",
  nps_link: "https://www.nps.gov/cany/index.htm",
  states: [
  "Utah"
  ],
  header: "Canyonlands",
  uuid: "park_canyonlands",
  visitors: 776218,
  world_heritage_site: false,
  location: "38.2,-109.93",
  acres: 337597.83,
  square_km: 1366.2,
  date_established: "1964-09-12T05:00:00Z"
},
{
  offset: 10,
  factor: 1.4,
  image: "/capitol_reef_1.png",
  aspect: 1.5,
  text: "The park's Waterpocket Fold is a 100-mile (160 km) monocline that exhibits the earth's diverse geologic layers. Other natural features include monoliths, cliffs, and sandstone domes shaped like the United States Capitol.",
  nps_link: "https://www.nps.gov/care/index.htm",
  states: [
  "Utah"
  ],
  header: "Capitol Reef",
  uuid: "park_capitol-reef",
  visitors: 1064904,
  world_heritage_site: false,
  location: "38.2,-111.17",
  acres: 241904.26,
  square_km: 979,
  date_established: "1971-12-18T06:00:00Z"
},
{
  offset: 11,
  factor: 1.4,
  image: "/carlsbad_1.png",
  aspect: 1.5,
  text: "Carlsbad Caverns has 117 caves, the longest of which is over 120 miles (190 km) long. The Big Room is almost 4,000 feet (1,200 m) long, and the caves are home to over 400,000 Mexican free-tailed bats and sixteen other species. Above ground are the Chihuahuan Desert and Rattlesnake Springs.",
  nps_link: "https://www.nps.gov/cave/index.htm",
  states: [
  "New Mexico"
  ],
  header: "Carlsbad Caverns",
  uuid: "park_carlsbad-caverns",
  visitors: 466773,
  world_heritage_site: true,
  location: "32.17,-104.44",
  acres: 46766.45,
  square_km: 189.3,
  date_established: "1930-05-14T05:00:00Z"
},
{
  offset: 12,
  factor: 1.4,
  image: "/channel_islands_1.png",
  aspect: 1.5,
  text: "Five of the eight Channel Islands are protected, and half of the park's area is underwater. The islands have a unique Mediterranean ecosystem originally settled by the Chumash people. They are home to over 2,000 species of land plants and animals, and 145 are unique to them, including the island fox. Ferry services offer transportation to the islands from the mainland.",
  nps_link: "https://www.nps.gov/chis/index.htm",
  states: [
  "California"
  ],
  header: "Channel Islands",
  uuid: "park_channel-islands",
  visitors: 364807,
  world_heritage_site: false,
  location: "34.01,-119.42",
  acres: 249561,
  square_km: 1009.9,
  date_established: "1980-03-05T06:00:00Z"
},
{
  offset: 13,
  factor: 1.4,
  image: "/congaree_1.png",
  aspect: 1.5,
  text: "On the Congaree River, this park is the largest portion of old-growth floodplain forest left in North America. Some of the trees are the tallest in the eastern United States. An elevated walkway called the Boardwalk Loop guides visitors through the swamp.",
  nps_link: "https://www.nps.gov/cong/index.htm",
  states: [
  "South Carolina"
  ],
  header: "Congaree",
  uuid: "park_congaree",
  visitors: 143843,
  world_heritage_site: false,
  location: "33.78,-80.78",
  acres: 26275.82,
  square_km: 106.3,
  date_established: "2003-11-10T06:00:00Z"
},
{
  offset: 14,
  factor: 1.4,
  image: "/crater_lake_1.png",
  aspect: 1.5,
  text: "Crater Lake lies in the caldera of an ancient volcano called Mount Mazama that collapsed 7,700 years ago. It is the deepest lake in the United States and is noted for its vivid blue color and water clarity. There are two more recent volcanic islands in the lake, and, with no inlets or outlets, all water comes through precipitation.",
  nps_link: "https://www.nps.gov/crla/index.htm",
  states: [
  "Oregon"
  ],
  header: "Crater Lake",
  uuid: "park_crater-lake",
  visitors: 756344,
  world_heritage_site: false,
  location: "42.94,-122.1",
  acres: 183224.05,
  square_km: 741.5,
  date_established: "1902-05-22T05:00:00Z"
},
{
  offset: 15,
  factor: 1.4,
  image: "/cuyahoga_valley_1.png",
  aspect: 1.5,
  text: "This park along the Cuyahoga River has waterfalls, hills, trails, and exhibits on early rural living. The Ohio and Erie Canal Towpath Trail follows the Ohio and Erie Canal, where mules towed canal boats. The park has numerous historic homes, bridges, and structures, and also offers a scenic train ride.",
  nps_link: "https://www.nps.gov/cuva/index.htm",
  states: [
  "Ohio"
  ],
  header: "Cuyahoga Valley",
  uuid: "park_cuyahoga-valley",
  visitors: 2423390,
  world_heritage_site: false,
  location: "41.24,-81.55",
  acres: 32572.35,
  square_km: 131.8,
  date_established: "2000-10-11T05:00:00Z"
},
{
  offset: 16,
  factor: 1.4,
  image: "/death_valley_1.png",
  aspect: 1.5,
  text: "Death Valley is the hottest, lowest, and driest place in the United States. Daytime temperatures have topped 130 °F (54 °C) and it is home to Badwater Basin, the lowest elevation in North America. The park contains canyons, badlands, sand dunes, and mountain ranges, while more than 1000 species of plants grow in this geologic graben. Additional points of interest include salt flats, historic mines, and springs.",
  nps_link: "https://www.nps.gov/deva/index.htm",
  states: [
  "California",
  "Nevada"
  ],
  header: "Death Valley",
  uuid: "park_death-valley",
  visitors: 1296283,
  world_heritage_site: false,
  location: "36.24,-116.82",
  acres: 3373063.14,
  square_km: 13650.3,
  date_established: "1994-10-31T06:00:00Z"
},
{
  offset: 17,
  factor: 1.4,
  image: "/denali_1.png",
  aspect: 1.5,
  text: "Centered on Denali, the tallest mountain in North America, Denali is serviced by a single road leading to Wonder Lake. Denali and other peaks of the Alaska Range are covered with long glaciers and boreal forest. Wildlife includes grizzly bears, Dall sheep, caribou, and gray wolves.",
  nps_link: "https://www.nps.gov/dena/index.htm",
  states: [
  "Alaska"
  ],
  header: "Denali",
  uuid: "park_denali",
  visitors: 587412,
  world_heritage_site: false,
  location: "63.33,-150.5",
  acres: 4740911.16,
  square_km: 19185.8,
  date_established: "1917-02-26T06:00:00Z"
},
{
  offset: 18,
  factor: 1.4,
  image: "/dry_tortuga_1.png",
  aspect: 1.5,
  text: "The islands of the Dry Tortugas, at the westernmost end of the Florida Keys, are the site of Fort Jefferson, a Civil War-era fort that is the largest masonry structure in the Western Hemisphere. With most of the park being remote ocean, it is home to undisturbed coral reefs and shipwrecks and is only accessible by plane or boat.",
  nps_link: "https://www.nps.gov/drto/index.htm",
  states: [
  "Florida"
  ],
  header: "Dry Tortugas",
  uuid: "park_dry-tortugas",
  visitors: 73661,
  world_heritage_site: false,
  location: "24.63,-82.87",
  acres: 64701.22,
  square_km: 261.8,
  date_established: "1992-10-26T06:00:00Z"
},
{
  offset: 19,
  factor: 1.4,
  image: "/everglades_1.png",
  aspect: 1.5,
  text: "The Everglades are the largest tropical wilderness in the United States. This mangrove and tropical rainforest ecosystem and marine estuary is home to 36 protected species, including the Florida panther, American crocodile, and West Indian manatee. Some areas have been drained and developed; restoration projects aim to restore the ecology.",
  nps_link: "https://www.nps.gov/ever/index.htm",
  states: [
  "Florida"
  ],
  header: "Everglades",
  uuid: "park_everglades",
  visitors: 930907,
  world_heritage_site: true,
  location: "25.32,-80.93",
  acres: 1508968.1,
  square_km: 6106.6,
  date_established: "1934-05-30T05:00:00Z"
},
{
  offset: 20,
  factor: 1.4,
  image: "/gates_of_the_arctic_1.png",
  aspect: 1.5,
  text: "The country's northernmost park protects an expanse of pure wilderness in Alaska's Brooks Range and has no park facilities. The land is home to Alaska Natives who have relied on the land and caribou for 11,000 years.",
  nps_link: "https://www.nps.gov/gaar/index.htm",
  states: [
  "Alaska"
  ],
  header: "Gates of the Arctic",
  uuid: "park_gates-of-the-arctic",
  visitors: 10047,
  world_heritage_site: false,
  location: "67.78,-153.3",
  acres: 7523897.45,
  square_km: 30448.1,
  date_established: "1980-12-02T06:00:00Z"
},
{
  offset: 21,
  factor: 1.4,
  image: "/glacier_1.png",
  aspect: 1.5,
  text: "The U.S. half of Waterton-Glacier International Peace Park, this park includes 26 glaciers and 130 named lakes surrounded by Rocky Mountain peaks. There are historic hotels and a landmark road called the Going-to-the-Sun Road in this region of rapidly receding glaciers. The local mountains, formed by an overthrust, expose Paleozoic fossils including trilobites, mollusks, giant ferns and dinosaurs.",
  nps_link: "https://www.nps.gov/glac/index.htm",
  states: [
  "Montana"
  ],
  header: "Glacier",
  uuid: "park_glacier",
  visitors: 2946681,
  world_heritage_site: true,
  location: "48.8,-114",
  acres: 1013128.94,
  square_km: 4100,
  date_established: "1910-05-11T05:00:00Z"
},
{
  offset: 22,
  factor: 1.4,
  image: "/glacier_bay_1.png",
  aspect: 1.5,
  text: "Glacier Bay contains tidewater glaciers, mountains, fjords, and a temperate rainforest, and is home to large populations of grizzly bears, mountain goats, whales, seals, and eagles. When discovered in 1794 by George Vancouver, the entire bay was covered by ice, but the glaciers have since receded more than 65 miles (105 km).",
  nps_link: "https://www.nps.gov/glba/index.htm",
  states: [
  "Alaska"
  ],
  header: "Glacier Bay",
  uuid: "park_glacier-bay",
  visitors: 520171,
  world_heritage_site: true,
  location: "58.5,-137",
  acres: 3223383.43,
  square_km: 13044.6,
  date_established: "1980-12-02T06:00:00Z"
},
{
  offset: 23,
  factor: 1.4,
  image: "/grand_canyon_1.png",
  aspect: 1.5,
  text: "The Grand Canyon, carved by the mighty Colorado River, is 277 miles (446 km) long, up to 1 mile (1.6 km) deep, and up to 15 miles (24 km) wide. Millions of years of erosion have exposed the multicolored layers of the Colorado Plateau in mesas and canyon walls, visible from both the north and south rims, or from a number of trails that descend into the canyon itself.",
  nps_link: "https://www.nps.gov/grca/index.htm",
  states: [
  "Arizona"
  ],
  header: "Grand Canyon",
  uuid: "park_grand-canyon",
  visitors: 5969811,
  world_heritage_site: true,
  location: "36.06,-112.14",
  acres: 1201647.03,
  square_km: 4862.9,
  date_established: "1919-02-26T06:00:00Z"
},
{
  offset: 24,
  factor: 1.4,
  image: "/grand_teton_1.png",
  aspect: 1.5,
  text: "Grand Teton is the tallest mountain in the Teton Range. The park's historic Jackson Hole and reflective piedmont lakes teem with endemic wildlife, with a backdrop of craggy mountains that rise abruptly from the sage-covered valley.",
  nps_link: "https://www.nps.gov/grte/index.htm",
  states: [
  "Wyoming"
  ],
  header: "Grand Teton",
  uuid: "park_grand-teton",
  visitors: 3270076,
  world_heritage_site: false,
  location: "43.73,-110.8",
  acres: 310043.96,
  square_km: 1254.7,
  date_established: "1929-02-26T06:00:00Z"
},
{
  offset: 25,
  factor: 1.4,
  image: "/great_basin_1.png",
  aspect: 1.5,
  text: "Based around Nevada's second tallest mountain, Wheeler Peak, Great Basin National Park contains 5,000-year-old bristlecone pines, a rock glacier, and the limestone Lehman Caves. Due to its remote location, the park has some of the country's darkest night skies. Wildlife includes the Townsend's big-eared bat, pronghorn, and Bonneville cutthroat trout.",
  nps_link: "https://www.nps.gov/grba/index.htm",
  states: [
  "Nevada"
  ],
  header: "Great Basin",
  uuid: "park_great-basin",
  visitors: 144846,
  world_heritage_site: false,
  location: "38.98,-114.3",
  acres: 77180,
  square_km: 312.3,
  date_established: "1986-10-27T06:00:00Z"
},
{
  offset: 26,
  factor: 1.4,
  image: "/great_sand_dunes_1.png",
  aspect: 1.5,
  text: "The tallest sand dunes in North America, up to 750 feet (230 m) tall, were formed by deposits of the ancient Rio Grande in the San Luis Valley. Abutting a variety of grasslands, shrublands, and wetlands, the park also has alpine lakes, six 13,000-foot mountains, and old-growth forests.",
  nps_link: "https://www.nps.gov/grsa/index.htm",
  states: [
  "Colorado"
  ],
  header: "Great Sand Dunes",
  uuid: "park_great-sand-dunes",
  visitors: 388308,
  world_heritage_site: false,
  location: "37.73,-105.51",
  acres: 107341.87,
  square_km: 434.4,
  date_established: "2004-09-13T05:00:00Z"
},
{
  offset: 27,
  factor: 1.4,
  image: "/great_smoky_mountains_1.png",
  aspect: 1.5,
  text: "The Great Smoky Mountains, part of the Appalachian Mountains, span a wide range of elevations, making them home to over 400 vertebrate species, 100 tree species, and 5000 plant species. Hiking is the park's main attraction, with over 800 miles (1,300 km) of trails, including 70 miles (110 km) of the Appalachian Trail. Other activities include fishing, horseback riding, and touring nearly 80 historic structures.",
  nps_link: "https://www.nps.gov/grsm/index.htm",
  states: [
  "Tennessee",
  "North Carolina"
  ],
  header: "Great Smoky Mountains",
  uuid: "park_great-smoky-mountains",
  visitors: 11312786,
  world_heritage_site: true,
  location: "35.68,-83.53",
  acres: 522426.88,
  square_km: 2114.2,
  date_established: "1934-06-15T05:00:00Z"
},
{
  offset: 28,
  factor: 1.4,
  image: "/guadalupe_mountains_1.png",
  aspect: 1.5,
  text: "This park contains Guadalupe Peak, the highest point in Texas, as well as the scenic McKittrick Canyon filled with bigtooth maples, a corner of the arid Chihuahuan Desert, and a fossilized coral reef from the Permian era.",
  nps_link: "https://www.nps.gov/gumo/index.htm",
  states: [
  "Texas"
  ],
  header: "Guadalupe Mountains",
  uuid: "park_guadalupe-mountains",
  visitors: 181839,
  world_heritage_site: false,
  location: "31.92,-104.87",
  acres: 86367.1,
  square_km: 349.5,
  date_established: "1966-10-15T05:00:00Z"
},
{
  offset: 29,
  factor: 1.4,
  image: "/haleakala_1.png",
  aspect: 1.5,
  text: "The Haleakala volcano on Maui features a very large crater with numerous cinder cones, Hosmer's Grove of alien trees, the Kipahulu section's scenic pools of freshwater fish, and the native Hawaiian goose. It is home to the greatest number of endangered species within a U.S. National Park.",
  nps_link: "https://www.nps.gov/hale/index.htm",
  states: [
  "Hawaii"
  ],
  header: "Haleakala",
  uuid: "park_haleakala",
  visitors: 1263558,
  world_heritage_site: false,
  location: "20.72,-156.17",
  acres: 33264.62,
  square_km: 134.6,
  date_established: "1916-08-01T05:00:00Z"
},
{
  offset: 30,
  factor: 1.4,
  image: "/hawaii_volcanoes_1.png",
  aspect: 1.5,
  text: "This park on the Big Island protects the Kīlauea and Mauna Loa volcanoes, two of the world's most active geological features. Diverse ecosystems range from tropical forests at sea level to barren lava beds at more than 13,000 feet (4,000 m).",
  nps_link: "https://www.nps.gov/havo/index.htm",
  states: [
  "Hawaii"
  ],
  header: "Hawaii Volcanoes",
  uuid: "park_hawaii-volcanoes",
  visitors: 1887580,
  world_heritage_site: true,
  location: "19.38,-155.2",
  acres: 323431.38,
  square_km: 1308.9,
  date_established: "1916-08-01T05:00:00Z"
},
{
  offset: 31,
  factor: 1.4,
  image: "/hot_springs_1.png",
  aspect: 1.5,
  text: "Hot Springs was established by act of Congress as a federal reserve on April 20, 1832. As such it is the oldest park managed by the National Park Service. Congress changed the reserve's designation to National Park on March 4, 1921 after the National Park Service was established in 1916. Hot Springs is the smallest and only National Park in an urban area and is based around natural hot springs that flow out of the low lying Ouachita Mountains. The springs provide opportunities for relaxation in an historic setting; Bathhouse Row preserves numerous examples of 19th-century architecture.",
  nps_link: "https://www.nps.gov/hosp/index.htm",
  states: [
  "Arkansas"
  ],
  header: "Hot Springs",
  uuid: "park_hot-springs",
  visitors: 1544300,
  world_heritage_site: false,
  location: "34.51,-93.05",
  acres: 5549.1,
  square_km: 22.5,
  date_established: "1921-03-04T06:00:00Z"
},
{
  offset: 32,
  factor: 1.4,
  image: "/isle_royale_1.png",
  aspect: 1.5,
  text: "The largest island in Lake Superior is a place of isolation and wilderness. Along with its many shipwrecks, waterways, and hiking trails, the park also includes over 400 smaller islands within 4.5 miles (7.2 km) of its shores. There are only 20 mammal species on the entire island, though the relationship between its wolf and moose populations is especially unique.",
  nps_link: "https://www.nps.gov/isro/index.htm",
  states: [
  "Michigan"
  ],
  header: "Isle Royale",
  uuid: "park_isle-royale",
  visitors: 24966,
  world_heritage_site: false,
  location: "48.1,-88.55",
  acres: 571790.11,
  square_km: 2314,
  date_established: "1940-04-03T05:00:00Z"
},
{
  offset: 33,
  factor: 1.4,
  image: "/joshua_tree_1.png",
  aspect: 1.5,
  text: "Covering large areas of the Colorado and Mojave Deserts and the Little San Bernardino Mountains, this desert landscape is populated by vast stands of Joshua trees. Large changes in elevation reveal various contrasting environments including bleached sand dunes, dry lakes, rugged mountains, and maze-like clusters of monzogranite monoliths.",
  nps_link: "https://www.nps.gov/jotr/index.htm",
  states: [
  "California"
  ],
  header: "Joshua Tree",
  uuid: "park_joshua-tree",
  visitors: 2505286,
  world_heritage_site: false,
  location: "33.79,-115.9",
  acres: 790635.74,
  square_km: 3199.6,
  date_established: "1994-10-31T06:00:00Z"
},
{
  offset: 34,
  factor: 1.4,
  image: "/katmai_1.png",
  aspect: 1.5,
  text: "This park on the Alaska Peninsula protects the Valley of Ten Thousand Smokes, an ash flow formed by the 1912 eruption of Novarupta, as well as Mount Katmai. Over 2,000 grizzly bears come here each year to catch spawning salmon. Other wildlife includes caribou, wolves, moose, and wolverines.",
  nps_link: "https://www.nps.gov/katm/index.htm",
  states: [
  "Alaska"
  ],
  header: "Katmai",
  uuid: "park_katmai",
  visitors: 37818,
  world_heritage_site: false,
  location: "58.5,-155",
  acres: 3674529.33,
  square_km: 14870.3,
  date_established: "1980-12-02T06:00:00Z"
},
{
  offset: 35,
  factor: 1.4,
  image: "/kenai_fjords_1.png",
  aspect: 1.5,
  text: "Near Seward on the Kenai Peninsula, this park protects the Harding Icefield and at least 38 glaciers and fjords stemming from it. The only area accessible to the public by road is Exit Glacier; the rest must be viewed or reached from boat tours.",
  nps_link: "https://www.nps.gov/kefj/index.htm",
  states: [
  "Alaska"
  ],
  header: "Kenai Fjords",
  uuid: "park_kenai-fjords",
  visitors: 346534,
  world_heritage_site: false,
  location: "59.92,-149.65",
  acres: 669983.65,
  square_km: 2711.3,
  date_established: "1980-12-02T06:00:00Z"
},
{
  offset: 36,
  factor: 1.4,
  image: "/kings_canyon_1.png",
  aspect: 1.5,
  text: "Home to several giant sequoia groves and the General Grant Tree, the world's second largest measured tree, this park also features part of the Kings River, sculptor of the dramatic granite canyon that is its namesake, and the San Joaquin River, as well as Boyden Cave.",
  nps_link: "https://www.nps.gov/seki/index.htm",
  states: [
  "California"
  ],
  header: "Kings Canyon",
  uuid: "park_kings-canyon",
  visitors: 607479,
  world_heritage_site: false,
  location: "36.8,-118.55",
  acres: 461901.2,
  square_km: 1869.2,
  date_established: "1940-03-04T06:00:00Z"
},
{
  offset: 37,
  factor: 1.4,
  image: "/kobuk_valley_1.png",
  aspect: 1.5,
  text: "Kobuk Valley protects 61 miles (98 km) of the Kobuk River and three regions of sand dunes. Created by glaciers, the Great Kobuk, Little Kobuk, and Hunt River Sand Dunes can reach 100 feet (30 m) high and 100 °F (38 °C), and they are the largest dunes in the Arctic. Twice a year, half a million caribou migrate through the dunes and across river bluffs that expose well-preserved ice age fossils.",
  nps_link: "https://www.nps.gov/kova/index.htm",
  states: [
  "Alaska"
  ],
  header: "Kobuk Valley",
  uuid: "park_kobuk-valley",
  visitors: 15500,
  world_heritage_site: false,
  location: "67.55,-159.28",
  acres: 1750716.16,
  square_km: 7084.9,
  date_established: "1980-12-02T06:00:00Z"
},
{
  offset: 38,
  factor: 1.4,
  image: "/lake_clark_1.png",
  aspect: 1.5,
  text: "The region around Lake Clark features four active volcanoes, including Mount Redoubt, as well as an abundance of rivers, glaciers, and waterfalls. Temperate rainforests, a tundra plateau, and three mountain ranges complete the landscape.",
  nps_link: "https://www.nps.gov/lacl/index.htm",
  states: [
  "Alaska"
  ],
  header: "Lake Clark",
  uuid: "park_lake-clark",
  visitors: 21102,
  world_heritage_site: false,
  location: "60.97,-153.42",
  acres: 2619816.49,
  square_km: 10602,
  date_established: "1980-12-02T06:00:00Z"
},
{
  offset: 39,
  factor: 1.4,
  image: "/lassen_volcanic_1.png",
  aspect: 1.5,
  text: "Lassen Peak, the largest plug dome volcano in the world, is joined by all three other types of volcanoes in this park: shield, cinder dome, and composite. Though Lassen itself last erupted in 1915, most of the rest of the park is continuously active. Numerous hydrothermal features, including fumaroles, boiling pools, and bubbling mud pots, are heated by molten rock from beneath the peak.",
  nps_link: "https://www.nps.gov/lavo/index.htm",
  states: [
  "California"
  ],
  header: "Lassen Volcanic",
  uuid: "park_lassen-volcanic",
  visitors: 536068,
  world_heritage_site: false,
  location: "40.49,-121.51",
  acres: 106589.02,
  square_km: 431.4,
  date_established: "1916-08-09T05:00:00Z"
},
{
  offset: 40,
  factor: 1.4,
  image: "/mammoth_cave_1.png",
  aspect: 1.5,
  text: "With more than 400 miles (640 km) of passageways explored, Mammoth Cave is the world's longest known cave system. Subterranean wildlife includes eight bat species, Kentucky cave shrimp, Northern cavefish, and cave salamanders. Above ground, the park provides recreation on the Green River, 70 miles of hiking trails, and plenty of sinkholes and springs.",
  nps_link: "https://www.nps.gov/maca/index.htm",
  states: [
  "Kentucky"
  ],
  header: "Mammoth Cave",
  uuid: "park_mammoth-cave",
  visitors: 586514,
  world_heritage_site: true,
  location: "37.18,-86.1",
  acres: 52830.19,
  square_km: 213.8,
  date_established: "1941-07-01T05:00:00Z"
},
{
  offset: 41,
  factor: 1.4,
  image: "/mesa_verde_1.png",
  aspect: 1.5,
  text: "This area constitutes over 4,000 archaeological sites of the Ancestral Puebloan people, who lived here and elsewhere in the Four Corners region for at least 700 years. Cliff dwellings built in the 12th and 13th centuries include Cliff Palace, which has 150 rooms and 23 kivas, and the Balcony House, with its many passages and tunnels.",
  nps_link: "https://www.nps.gov/meve/index.htm",
  states: [
  "Colorado"
  ],
  header: "Mesa Verde",
  uuid: "park_mesa-verde",
  visitors: 583527,
  world_heritage_site: true,
  location: "37.18,-108.49",
  acres: 52485.17,
  square_km: 212.4,
  date_established: "1906-06-29T05:00:00Z"
},
{
  offset: 42,
  factor: 1.4,
  image: "/mount_rainier_1.png",
  aspect: 1.5,
  text: "Mount Rainier, an active stratovolcano, is the most prominent peak in the Cascades and is covered by 26 named glaciers including Carbon Glacier and Emmons Glacier, the largest in the contiguous United States. The mountain is popular for climbing, and more than half of the park is covered by subalpine and alpine forests and meadows seasonally in bloom with wildflowers. Paradise on the south slope is the snowiest place on Earth where snowfall is measured regularly. The Longmire visitor center is the start of the Wonderland Trail, which encircles the mountain.",
  nps_link: "https://www.nps.gov/mora/index.htm",
  states: [
  "Washington"
  ],
  header: "Mount Rainier",
  uuid: "park_mount-rainier",
  visitors: 1356913,
  world_heritage_site: false,
  location: "46.85,-121.75",
  acres: 236381.64,
  square_km: 956.6,
  date_established: "1899-03-02T06:00:00Z"
},
{
  offset: 43,
  factor: 1.4,
  image: "/north_cascades_1.png",
  aspect: 1.5,
  text: "This complex encompasses two units of the National Park itself as well as the Ross Lake and Lake Chelan National Recreation Areas. The highly glaciated mountains are spectacular examples of Cascade geology. Popular hiking and climbing areas include Cascade Pass, Mount Shuksan, Mount Triumph, and Eldorado Peak.",
  nps_link: "https://www.nps.gov/noca/index.htm",
  states: [
  "Washington"
  ],
  header: "North Cascades",
  uuid: "park_north-cascades",
  visitors: 28646,
  world_heritage_site: false,
  location: "48.7,-121.2",
  acres: 504780.94,
  square_km: 2042.8,
  date_established: "1968-10-02T05:00:00Z"
},
{
  offset: 44,
  factor: 1.4,
  image: "/olympic_1.png",
  aspect: 1.5,
  text: "Situated on the Olympic Peninsula, this park includes a wide range of ecosystems from Pacific shoreline to temperate rainforests to the alpine slopes of the Olympic Mountains, the tallest of which is Mount Olympus. The Hoh Rainforest and Quinault Rainforest are the wettest area in the contiguous United States, with the Hoh receiving an average of almost 12 ft (3.7 m) of rain every year.",
  nps_link: "https://www.nps.gov/olym/index.htm",
  states: [
  "Washington"
  ],
  header: "Olympic",
  uuid: "park_olympic",
  visitors: 3390221,
  world_heritage_site: true,
  location: "47.97,-123.5",
  acres: 922650.1,
  square_km: 3733.8,
  date_established: "1938-06-29T05:00:00Z"
},
{
  offset: 45,
  factor: 1.4,
  image: "/petrified_forest_1.png",
  aspect: 1.5,
  text: "This portion of the Chinle Formation has a large concentration of 225-million-year-old petrified wood. The surrounding Painted Desert features eroded cliffs of red-hued volcanic rock called bentonite. Dinosaur fossils and over 350 Native American sites are also protected in this park.",
  nps_link: "https://www.nps.gov/pefo/index.htm",
  states: [
  "Arizona"
  ],
  header: "Petrified Forest",
  uuid: "park_petrified-forest",
  visitors: 643274,
  world_heritage_site: false,
  location: "35.07,-109.78",
  acres: 221415.77,
  square_km: 896,
  date_established: "1962-12-09T06:00:00Z"
},
{
  offset: 46,
  factor: 1.4,
  image: "/pinnacles_1.png",
  aspect: 1.5,
  text: "Named for the eroded leftovers of a portion of an extinct volcano, the park's massive black and gold monoliths of andesite and rhyolite are a popular destination for rock climbers. Hikers have access to trails crossing the Coast Range wilderness. The park is home to the endangered California condor (Gymnogyps californianus) and one of the few locations in the world where these extremely rare birds can be seen in the wild. Pinnacles also supports a dense population of prairie falcons, and more than 13 species of bat which populate its talus caves.",
  nps_link: "https://www.nps.gov/pinn/index.htm",
  states: [
  "California"
  ],
  header: "Pinnacles",
  uuid: "park_pinnacles",
  visitors: 215555,
  world_heritage_site: false,
  location: "36.48,-121.16",
  acres: 26685.73,
  square_km: 108,
  date_established: "2013-01-10T06:00:00Z"
},
{
  offset: 47,
  factor: 1.4,
  image: "/redwood_1.png",
  aspect: 1.5,
  text: "This park and the co-managed state parks protect almost half of all remaining coastal redwoods, the tallest trees on earth. There are three large river systems in this very seismically active area, and 37 miles (60 km) of protected coastline reveal tide pools and seastacks. The prairie, estuary, coast, river, and forest ecosystems contain a wide variety of animal and plant species.",
  nps_link: "https://www.nps.gov/redw/index.htm",
  states: [
  "California"
  ],
  header: "Redwood",
  uuid: "park_redwood",
  visitors: 536297,
  world_heritage_site: true,
  location: "41.3,-124",
  acres: 138999.37,
  square_km: 562.5,
  date_established: "1968-10-02T05:00:00Z"
},
{
  offset: 48,
  factor: 1.4,
  image: "/rocky_mountain_1.png",
  aspect: 1.5,
  text: "Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra. Wildlife including mule deer, bighorn sheep, black bears, and cougars inhabit its igneous mountains and glacial valleys. Longs Peak, a classic Colorado fourteener, and the scenic Bear Lake are popular destinations, as well as the historic Trail Ridge Road, which reaches an elevation of more than 12,000 feet (3,700 m).",
  nps_link: "https://www.nps.gov/romo/index.htm",
  states: [
  "Colorado"
  ],
  header: "Rocky Mountain",
  uuid: "park_rocky-mountain",
  visitors: 4517585,
  world_heritage_site: false,
  location: "40.4,-105.58",
  acres: 265795.2,
  square_km: 1075.6,
  date_established: "1915-01-26T06:00:00Z"
},
{
  offset: 49,
  factor: 1.4,
  image: "/saguaro_1.png",
  aspect: 1.5,
  text: "Split into the separate Rincon Mountain and Tucson Mountain districts, this park is evidence that the dry Sonoran Desert is still home to a great variety of life spanning six biotic communities. Beyond the namesake giant saguaro cacti, there are barrel cacti, chollas, and prickly pears, as well as lesser long-nosed bats, spotted owls, and javelinas.",
  nps_link: "https://www.nps.gov/sagu/index.htm",
  states: [
  "Arizona"
  ],
  header: "Saguaro",
  uuid: "park_saguaro",
  visitors: 820426,
  world_heritage_site: false,
  location: "32.25,-110.5",
  acres: 91715.72,
  square_km: 371.2,
  date_established: "1994-10-14T05:00:00Z"
},
{
  offset: 50,
  factor: 1.4,
  image: "/sequoia_1.png",
  aspect: 1.5,
  text: "This park protects the Giant Forest, which boasts some of the world's largest trees, the General Sherman being the largest measured tree in the park. Other features include over 240 caves, a long segment of the Sierra Nevada including the tallest mountain in the contiguous United States, and Moro Rock, a large granite dome.",
  nps_link: "https://www.nps.gov/seki/index.htm",
  states: [
  "California"
  ],
  header: "Sequoia",
  uuid: "park_sequoia",
  visitors: 1254688,
  world_heritage_site: false,
  location: "36.43,-118.68",
  acres: 404062.63,
  square_km: 1635.2,
  date_established: "1890-09-25T05:00:00Z"
},
{
  offset: 51,
  factor: 1.4,
  image: "/shenandoah_1.png",
  aspect: 1.5,
  text: "Shenandoah's Blue Ridge Mountains are covered by hardwood forests that teem with a wide variety of wildlife. The Skyline Drive and Appalachian Trail run the entire length of this narrow park, along with more than 500 miles (800 km) of hiking trails passing scenic overlooks and cataracts of the Shenandoah River.",
  nps_link: "https://www.nps.gov/shen/index.htm",
  states: [
  "Virginia"
  ],
  header: "Shenandoah",
  uuid: "park_shenandoah",
  visitors: 1437341,
  world_heritage_site: false,
  location: "38.53,-78.35",
  acres: 199195.27,
  square_km: 806.1,
  date_established: "1935-12-26T06:00:00Z"
},
{
  offset: 52,
  factor: 1.4,
  image: "/theodore_roosevelt_1.png",
  aspect: 1.5,
  text: "This region that enticed and influenced President Theodore Roosevelt consists of a park of three units in the northern badlands. Besides Roosevelt's historic cabin, there are numerous scenic drives and backcountry hiking opportunities. Wildlife includes American bison, pronghorn, bighorn sheep, and wild horses.",
  nps_link: "https://www.nps.gov/thro/index.htm",
  states: [
  "North Dakota"
  ],
  header: "Theodore Roosevelt",
  uuid: "park_theodore-roosevelt",
  visitors: 753880,
  world_heritage_site: false,
  location: "46.97,-103.45",
  acres: 70446.89,
  square_km: 285.1,
  date_established: "1978-11-10T06:00:00Z"
},
{
  offset: 53,
  factor: 1.4,
  image: "/virgin_islands_1.png",
  aspect: 1.5,
  text: "This island park on Saint John preserves Taíno archaeological sites and the ruins of sugar plantations from Columbus's time, as well as all the natural environs. Surrounding the pristine beaches are mangrove forests, seagrass beds, and coral reefs.",
  nps_link: "https://www.nps.gov/viis/index.htm",
  states: [
  "US Virgin Islands"
  ],
  header: "Virgin Islands",
  uuid: "park_virgin-islands",
  visitors: 411343,
  world_heritage_site: false,
  location: "18.33,-64.73",
  acres: 14948.46,
  square_km: 60.5,
  date_established: "1956-08-02T05:00:00Z"
},
{
  offset: 54,
  factor: 1.4,
  image: "/voyageurs_1.png",
  aspect: 1.5,
  text: "This park protecting four lakes near the Canada–US border is a site for canoeing, kayaking, and fishing. The park also preserves a history populated by Ojibwe Native Americans, French fur traders called voyageurs, and gold miners. Formed by glaciers, the region features tall bluffs, rock gardens, islands, bays, and several historic buildings.",
  nps_link: "https://www.nps.gov/voya/index.htm",
  states: [
  "Minnesota"
  ],
  header: "Voyageurs",
  uuid: "park_voyageurs",
  visitors: 241912,
  world_heritage_site: false,
  location: "48.5,-92.88",
  acres: 218200.15,
  square_km: 883,
  date_established: "1971-01-08T06:00:00Z"
},
{
  offset: 55,
  factor: 1.4,
  image: "/wind_cave_1.png",
  aspect: 1.5,
  text: "Wind Cave is distinctive for its calcite fin formations called boxwork, a unique formation rarely found elsewhere, and needle-like growths called frostwork. The cave is one of the longest and most complex caves in the world. Above ground is a mixed-grass prairie with animals such as bison, black-footed ferrets, and prairie dogs, and ponderosa pine forests that are home to cougars and elk. The cave is culturally significant to the Lakota people as the site 'from which Wakan Tanka, the Great Mystery, sent the buffalo out into their hunting grounds.'",
  nps_link: "https://www.nps.gov/wica/index.htm",
  states: [
  "South Dakota"
  ],
  header: "Wind Cave",
  uuid: "park_wind-cave",
  visitors: 617377,
  world_heritage_site: false,
  location: "43.57,-103.48",
  acres: 33970.84,
  square_km: 137.5,
  date_established: "1903-01-09T06:00:00Z"
},
{
  offset: 56,
  factor: 1.4,
  image: "/wrangel-st_elias_1.png",
  aspect: 1.5,
  text: "An over 8 million acres (32,375 km2) plot of mountainous country—the largest National Park in the system—protects the convergence of the Alaska, Chugach, and Wrangell-Saint Elias Ranges, which include many of the continent's tallest mountains and volcanoes, including the 18,008-foot Mount Saint Elias. More than a quarter of the park is covered with glaciers, including the tidewater Hubbard Glacier, piedmont Malaspina Glacier, and valley Nabesna Glacier.",
  nps_link: "https://www.nps.gov/wrst/index.htm",
  states: [
  "Alaska"
  ],
  header: "Wrangell–St. Elias",
  uuid: "park_wrangell–st.-elias",
  visitors: 79047,
  world_heritage_site: true,
  location: "61,-142",
  acres: 8323146.48,
  square_km: 33682.6,
  date_established: "1980-12-02T06:00:00Z"
},
{
  offset: 57,
  factor: 1.4,
  image: "/yellowstone_1.png",
  aspect: 1.5,
  text: "Situated on the Yellowstone Caldera, the park has an expansive network of geothermal areas including boiling mud pots, vividly colored hot springs such as Grand Prismatic Spring, and regularly erupting geysers, the best-known being Old Faithful. The yellow-hued Grand Canyon of the Yellowstone River contains several high waterfalls, while four mountain ranges traverse the park. More than 60 mammal species including gray wolves, grizzly bears, black bears, lynxes, bison, and elk, make this park one of the best wildlife viewing spots in the country.",
  nps_link: "https://www.nps.gov/yell/index.htm",
  states: [
  "Wyoming",
  "Montana",
  "Idaho"
  ],
  header: "Yellowstone",
  uuid: "park_yellowstone",
  visitors: 4257177,
  world_heritage_site: true,
  location: "44.6,-110.5",
  acres: 2219790.71,
  square_km: 8983.2,
  date_established: "1872-03-01T06:00:00Z"
},
{
  offset: 58,
  factor: 1.4,
  image: "/yosemite_1.png",
  aspect: 1.5,
  text: "Yosemite features sheer granite cliffs, exceptionally tall waterfalls, and old-growth forests at a unique intersection of geology and hydrology. Half Dome and El Capitan rise from the park's centerpiece, the glacier-carved Yosemite Valley, and from its vertical walls drop Yosemite Falls, one of North America's tallest waterfalls at 2,425 feet (739 m) high. Three giant sequoia groves, along with a pristine wilderness in the heart of the Sierra Nevada, are home to a wide variety of rare plant and animal species.",
  nps_link: "https://www.nps.gov/yose/index.htm",
  states: [
  "California"
  ],
  header: "Yosemite",
  uuid: "park_yosemite",
  visitors: 5028868,
  world_heritage_site: true,
  location: "37.83,-119.5",
  acres: 761747.5,
  square_km: 3082.7,
  date_established: "1890-10-01T05:00:00Z"
},
{
  offset: 59,
  factor: 1.4,
  image: "/zion_1.png",
  aspect: 1.5,
  text: "Located at the junction of the Colorado Plateau, Great Basin, and Mojave Desert, this park contains sandstone features such as mesas, rock towers, and canyons, including the Virgin River Narrows. The various sandstone formations and the forks of the Virgin River create a wilderness divided into four ecosystems: desert, riparian, woodland, and coniferous forest.",
  nps_link: "https://www.nps.gov/zion/index.htm",
  states: [
  "Utah"
  ],
  header: "Zion",
  uuid: "park_zion",
  visitors: 4295127,
  world_heritage_site: false,
  location: "37.3,-113.05",
  acres: 147237.02,
  square_km: 595.8,
  date_established: "1919-11-19T06:00:00Z"
}
],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  top: createRef()
}

export default state;