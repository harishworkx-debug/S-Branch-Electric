export interface LocalContextItem {
  title: string;
  body: string;
}

export interface HousingProfile {
  ageRange: string;
  commonPanels: string;
  keyChallenges: string;
  recommendedUpgrades: string;
}

export interface PopularServiceItem {
  name: string;
  reason: string;
}

export interface ServiceAreaReview {
  author: string;
  meta: string;
  quote: string;
}

export interface ServiceAreaPage {
  slug: string;
  path: string;
  city: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  heroImage: string;
  zipCodes: string[];
  neighborhoods: string[];
  intro: string[];
  localContext: LocalContextItem[];
  housingElectricalProfile: HousingProfile;
  popularServices: PopularServiceItem[];
  localReview?: ServiceAreaReview;
  faqs: { question: string; answer: string }[];
}

export const serviceAreas: ServiceAreaPage[] = [
  {
    slug: 'spring-branch-tx',
    path: '/electrical-services-spring-branch-tx',
    city: 'Spring Branch, Houston, TX',
    shortName: 'Spring Branch',
    metaTitle: 'Electrician in Spring Branch, Houston, TX | S Branch Electric',
    metaDescription:
      'Local Spring Branch electrician based at 1837 Huge Oaks St. 5.0 Google rating. Breaker repair, panel upgrades, aluminum wiring, and emergency electrical service. Call 832-484-0514.',
    h1: 'Licensed Electrician in Spring Branch, Houston, TX',
    tagline: 'Your neighborhood electrician based right here on Huge Oaks St in Spring Branch.',
    heroImage:
      'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    zipCodes: ['77055', '77080', '77043', '77024'],
    neighborhoods: [
      'Spring Branch East',
      'Spring Branch West',
      'Spring Branch Central',
      'Binglewood',
      'Timber Creek',
      'Campbell Woods',
      'Royal Oaks',
      'Spring Valley Village area',
    ],
    intro: [
      'S Branch Electric is based right here at 1837 Huge Oaks St in the heart of Spring Branch. When you call us, you are speaking directly to Gustavo ("Gus"), your neighborhood master electrician who knows the unique wiring challenges of Spring Branch homes inside and out.',
      'Spring Branch has a rich architectural heritage dominated by 1950s through 1970s mid-century ranch homes and bungalows. While these homes have wonderful character, their original electrical systems were built for a time before microwaves, EV chargers, computers, and multi-ton AC units.',
      'From replacing hazardous Federal Pacific and Zinsco breaker boxes to remediating aluminum branch wiring and adding dedicated kitchen circuits, we provide honest, punctual, code-compliant service across our home community.',
    ],
    localContext: [
      {
        title: 'Original 1950s–1970s Electrical Infrastructure',
        body: 'Many homes along Long Point, Gessner, and Bingle roads still contain original 60-amp to 100-amp panels that are heavily overloaded by modern family power consumption.',
      },
      {
        title: 'Aluminum Wiring in 1960s & 1970s Builds',
        body: 'Homes built between 1965 and 1973 in Spring Branch frequently have aluminum branch wiring, which requires specialized COPALUM or AlumiConn pigtailing to prevent loose, overheating connections.',
      },
      {
        title: 'Rapid Proximity & Emergency Availability',
        body: 'Because our headquarters and service vans are situated directly on Huge Oaks St, we can often arrive at Spring Branch service calls and urgent weekend outages faster than contractors coming from across the city.',
      },
    ],
    housingElectricalProfile: {
      ageRange: 'Primarily 1950s to 1975 ranch-style homes, with recent modern infill construction.',
      commonPanels: 'Federal Pacific Electric (FPE) Stab-Lok, Zinsco, Challenger, and older Square D 100A boxes.',
      keyChallenges:
        'Frequent breaker trips from high-draw kitchen appliances (air fryers, toaster ovens), ungrounded 2-prong outlets, and failing exterior service entrance cables.',
      recommendedUpgrades:
        '200-amp service entrance upgrade, whole-home surge protection at the panel, grounded GFCI outlets, and dedicated 20-amp kitchen circuits.',
    },
    popularServices: [
      {
        name: 'Federal Pacific & Zinsco Panel Replacement',
        reason: 'Eliminating fire-hazard obsolete breaker panels common in mid-century Spring Branch homes.',
      },
      {
        name: 'Kitchen & Laundry Dedicated Circuits',
        reason: 'Resolving blown fuses caused by running modern high-wattage air fryers, washers, and dryers.',
      },
      {
        name: 'Aluminum Wiring Safety Remediation',
        reason: 'Securing loose switch and outlet connections using approved code-compliant pigtailing.',
      },
      {
        name: 'Whole-Home Surge Protection',
        reason: 'Shielding appliances from Houston thunderstorm lightning spikes and utility grid surges.',
      },
    ],
    localReview: {
      author: 'Aaron S (Spring Branch Homeowner)',
      meta: '6 reviews · 9 photos · 9 months ago',
      quote:
        'Gus was fantastic to work with. I called him on a Saturday after I blew a fuse in my kitchen by running my air fryer and toaster at the same time, and he actually answered the phone — which already impressed me. He showed up right on time Monday and was extremely professional and thorough. He also inspected the breaker box and gave me helpful, practical advice, including recommending a whole-house surge protector... If you live in Spring Branch or the surrounding Houston neighborhoods and want an electrician who is knowledgeable, punctual, and easy to talk to, I would absolutely recommend Gus.',
    },
    faqs: [
      {
        question: 'How close is S Branch Electric to my Spring Branch home?',
        answer:
          'We are located directly at 1837 Huge Oaks St, Houston, TX 77055. Because we are based right here in Spring Branch, we are just minutes away from anywhere between I-10, Beltway 8, Highway 290, and Loop 610.',
      },
      {
        question: 'Why are circuit breakers constantly tripping in older Spring Branch homes?',
        answer:
          'Most older Spring Branch homes were built with 15-amp circuits shared across several rooms. Modern appliances like air fryers (often pulling 1,700 watts) or space heaters easily exceed the circuit capacity when run alongside other devices. We install dedicated 20-amp circuits to solve this safely.',
      },
      {
        question: 'Should I replace an old Federal Pacific or Zinsco breaker box in Spring Branch?',
        answer:
          'Yes, strongly recommended. Insurance companies and Houston safety inspectors frequently flag Federal Pacific (FPE) and Zinsco panels because their breakers often fail to trip during an overload, creating a serious fire hazard. We replace them with modern, code-compliant 200-amp panels.',
      },
      {
        question: 'Can you convert two-prong outlets in Spring Branch to grounded three-prong?',
        answer:
          'Yes. We can upgrade two-prong outlets to grounded three-prong or install GFCI-protected receptacles where running new ground wiring is impractical, making your home safe for modern electronics and appliances.',
      },
    ],
  },
  {
    slug: 'memorial-tx',
    path: '/electrical-services-memorial-tx',
    city: 'Memorial, Houston, TX',
    shortName: 'Memorial',
    metaTitle: 'Master Electrician in Memorial, Houston, TX | S Branch Electric',
    metaDescription:
      'High-end residential electrical services in Memorial, TX. Generator interlocks, panel upgrades, sauna wiring, and custom lighting. Call Gustavo at 832-484-0514.',
    h1: 'Premier Electrical Services in Memorial, Houston, TX',
    tagline: 'Expert electrical craftsmanship tailored to Memorial estate homes and custom renovations.',
    heroImage:
      'https://images.pexels.com/photos/4933643/pexels-photo-4933643.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    zipCodes: ['77024', '77079'],
    neighborhoods: [
      'Memorial Villages',
      'Bunker Hill Village',
      'Hedwig Village',
      'Piney Point Village',
      'Hunters Creek Village',
      'Frostwood',
      'Memorial Forest',
      'Nottingham Forest',
    ],
    intro: [
      'Directly adjacent to Spring Branch, the Memorial area features some of Houston’s most prestigious properties, ranging from mid-century architectural estates to custom new-construction residences.',
      'Memorial homes carry substantial electrical demands. High-capacity HVAC systems, custom indoor and architectural landscape lighting, outdoor kitchens, home saunas, and whole-house backup generators require meticulous electrical calculations and flawless execution.',
      'S Branch Electric brings master-level craftsmanship to Memorial homeowners who demand punctual arrival, spotless job sites, and strict adherence to village municipal codes.',
    ],
    localContext: [
      {
        title: 'Severe Storm Exposure & Generator Interlocks',
        body: 'Memorial’s mature oak and pine tree canopy often leads to downed power lines during Gulf Coast storms. We install safe generator interlock kits and manual transfer switches so you can power your home during outages.',
      },
      {
        title: 'Specialty High-Power Equipment Installations',
        body: 'From barrel saunas and steam showers to commercial-grade kitchen ranges and dual electric vehicle charging stations, Memorial residences require dedicated 50-amp to 60-amp circuits.',
      },
      {
        title: 'Memorial Village Code Strictness',
        body: 'Municipalities like Bunker Hill, Hedwig, and Piney Point have rigorous permitting and inspection criteria. We ensure all equipment and conduit runs comply with local village requirements.',
      },
    ],
    housingElectricalProfile: {
      ageRange: 'Established 1960s-1980s expansive ranch estates and modern 5,000+ sq ft custom new builds.',
      commonPanels: '150A to 200A panels in older builds, dual 200A (400A service) in luxury renovations.',
      keyChallenges:
        'Power outages from tree limbs during windstorms, heavy load from 3+ air conditioning condensers, and complex landscape lighting circuits.',
      recommendedUpgrades:
        'Whole-house generator interlock system, 400-amp heavy-up service upgrades, surge protection, and low-voltage outdoor LED transformers.',
    },
    popularServices: [
      {
        name: 'Whole-Home Generator Interlock Installation',
        reason: 'Enabling portable or standby generators to back up the entire electrical panel safely during hurricanes.',
      },
      {
        name: 'Luxury Barrel Sauna & Hot Tub Wiring',
        reason: 'Dedicated high-amperage subpanels and GFCI disconnects for wellness and spa installations.',
      },
      {
        name: 'Architectural & Landscape Lighting',
        reason: 'Highlighting estate facades, mature trees, and outdoor living patios with weather-rated fixtures.',
      },
      {
        name: 'Dual EV Charger Dedicated Circuits',
        reason: 'Level 2 240V charging for Tesla, Porsche, and luxury electric vehicles without tripping the main breaker.',
      },
    ],
    localReview: {
      author: 'Melissa D. Zier (Memorial Area Client)',
      meta: 'Local Guide · 25 reviews · 9 photos · 2 years ago',
      quote:
        'We are extremely pleased with the service provided by Gus Rivera at Spring Branch Electric. Gus has consistently demonstrated excellent communication, professionalism, and top-notch work. He helped us install the electrical needs for our barrel sauna and more recently handled the updates required to power our home with a whole-house generator. Gus is always punctual, polite, and even arrives early... We highly recommend Spring Branch Electric!',
    },
    faqs: [
      {
        question: 'Can you install a generator transfer switch or interlock in Memorial?',
        answer:
          'Yes. We specialize in generator interlock systems that allow you to plug your generator into an exterior power inlet box and safely power select circuits (or your whole home) through your main electrical panel without dangerous backfeeding.',
      },
      {
        question: 'Do you handle electrical wiring for outdoor saunas and spas in Memorial?',
        answer:
          'Yes. As featured in our client reviews, we install the complete 240V dedicated circuitry, weatherproof conduit, and emergency shutoff disconnects required for barrel saunas, hot tubs, and swim spas.',
      },
      {
        question: 'Can my existing Memorial panel support an electric vehicle charger?',
        answer:
          'We perform a load calculation on your main panel. If you have a 200A or 400A panel with available breaker space, we run a dedicated 50A/60A 240V line. If the panel is at full capacity, we can install a subpanel or upgrade the service.',
      },
    ],
  },
  {
    slug: 'bellaire-tx',
    path: '/electrical-services-bellaire-tx',
    city: 'Bellaire, TX',
    shortName: 'Bellaire',
    metaTitle: 'Licensed Electrician in Bellaire, TX | S Branch Electric',
    metaDescription:
      'Electrical installation and repairs in Bellaire, TX. Panel replacements, flood-conscious elevated wiring, and EV charger circuits. Call Gus at 832-484-0514.',
    h1: 'Dependable Electrical Services in Bellaire, TX',
    tagline: 'Code-compliant electrical upgrades and precision repairs for Bellaire homes and commercial shops.',
    heroImage:
      'https://images.pexels.com/photos/20500461/pexels-photo-20500461.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    zipCodes: ['77401', '77402'],
    neighborhoods: [
      'Southdale',
      'Broadacres',
      'Bellaire West',
      'Evergreen',
      'Braeburn Country Club area',
      'Bellaire Town Center',
    ],
    intro: [
      'Bellaire is a unique city within the Houston metropolitan area, renowned for its tight-knit community and continuous wave of high-end home construction alongside charming classic residences.',
      'Because of Bellaire’s topography and proximity to Brays Bayou, flood mitigation and electrical elevation are critical safety considerations. Weatherproof enclosures, elevated exterior disconnects, and heavy-duty GFCI protection are non-negotiable standards here.',
      'S Branch Electric provides prompt, code-compliant residential and commercial electrical solutions across Bellaire, from panel relocations to smart lighting and high-speed EV chargers.',
    ],
    localContext: [
      {
        title: 'Elevated Electrical & Moisture Protection',
        body: 'Post-Harvey Bellaire codes emphasize elevating electrical panels and outdoor receptacles above base flood elevation to ensure water cannot compromise energized wiring.',
      },
      {
        title: 'High Turnout of Rebuilds & Renovations',
        body: 'Bellaire’s teardown-and-rebuild trend requires comprehensive whole-home wiring, multi-subpanel configurations, and energy-efficient LED automation.',
      },
      {
        title: 'Independent City of Bellaire Permitting',
        body: 'Bellaire operates its own municipal permitting and inspection department distinct from Houston. We work cleanly within all Bellaire municipal guidelines.',
      },
    ],
    housingElectricalProfile: {
      ageRange: 'Transitioning from 1950s post-war cottages to modern elevated 2-story stucco and brick homes.',
      commonPanels: 'Upgraded 200A panels in newer builds, older 100A-125A panels in original cottages.',
      keyChallenges:
        'Ground water humidity causing exterior disconnect oxidation, ungrounded outlets in original homes, and panel space limits from pool and EV additions.',
      recommendedUpgrades:
        'Weatherproof corrosion-resistant panel enclosures, whole-house surge protection, and high-amperage dedicated circuits.',
    },
    popularServices: [
      {
        name: 'Elevated Service Panel Replacements',
        reason: 'Upgrading to 200-amp panels mounted safely above flood elevation with weather-tight seals.',
      },
      {
        name: 'Grounded Outlet & GFCI Modernization',
        reason: 'Replacing two-prong ungrounded receptacles in older Bellaire homes with tamper-resistant GFCIs.',
      },
      {
        name: 'Electric Vehicle Charger Installation',
        reason: 'Installing dedicated 240-volt charging stations for Bellaire commuters.',
      },
      {
        name: 'Recessed LED & Dimmer Upgrades',
        reason: 'Retrofitting home interiors with flicker-free, energy-saving dimmable LED lighting.',
      },
    ],
    faqs: [
      {
        question: 'Do you follow City of Bellaire electrical codes?',
        answer:
          'Yes. All work in Bellaire is performed strictly to the National Electrical Code (NEC) and the City of Bellaire building department guidelines.',
      },
      {
        question: 'Can you elevate an electrical panel or outdoor outlets in Bellaire?',
        answer:
          'Yes. Elevating panels, pool pumps, and outdoor outlets above potential water levels is an essential safeguard in flood-prone Houston areas.',
      },
      {
        question: 'Can you troubleshoot flickering LED lights in Bellaire homes?',
        answer:
          'Yes. Flickering lights often stem from incompatible dimmer switches, loose neutral connections, or voltage fluctuations. We test the circuit with professional meters and correct the underlying fault.',
      },
    ],
  },
  {
    slug: 'katy-tx',
    path: '/electrical-services-katy-tx',
    city: 'Katy, TX',
    shortName: 'Katy',
    metaTitle: 'Electrician in Katy, TX | Cinco Ranch & Greater Katy | S Branch Electric',
    metaDescription:
      'Reliable Katy electrician for Cinco Ranch, Elyson, and Grand Lakes. AFCI breaker troubleshooting, EV chargers, panel upgrades, and repairs. Call 832-484-0514.',
    h1: 'Expert Electrician Serving Katy & Cinco Ranch, TX',
    tagline: 'Fast troubleshooting, EV charger installation, and panel upgrades for Katy families and businesses.',
    heroImage:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    zipCodes: ['77449', '77450', '77493', '77494'],
    neighborhoods: [
      'Cinco Ranch',
      'Grand Lakes',
      'Elyson',
      'Cane Island',
      'Firethorne',
      'Falcon Point',
      'Nottingham Country',
      'Old Town Katy',
    ],
    intro: [
      'Katy has evolved into one of the most dynamic, rapidly expanding communities west of Houston. From established master-planned favorites like Cinco Ranch and Grand Lakes to newer communities like Elyson and Cane Island, Katy homes demand reliable, high-capacity electricity.',
      'In newer Katy subdivisions, homeowners frequently run into frustrating "nuisance tripping" with ultra-sensitive AFCI (Arc Fault Circuit Interrupter) breakers. In older Katy areas, aging 100A–150A panels struggle under the load of new air conditioning units, pools, and EV chargers.',
      'S Branch Electric provides fast, honest diagnostics and precision installations throughout Katy, ensuring your home electrical system operates safely and without interruption.',
    ],
    localContext: [
      {
        title: 'Nuisance AFCI Breaker Troubleshooting',
        body: 'Newer Katy homes with modern AFCI breakers often trip unexpectedly due to failing LED disc lights, appliance harmonics, or minor line noise. We isolate and fix these issues quickly.',
      },
      {
        title: 'High EV Adoption in Master-Planned Communities',
        body: 'With long commutes along the I-10 Energy Corridor and Westpark Tollway, Katy homeowners frequently require Level 2 240V Tesla, Rivian, and universal EV chargers installed in garages.',
      },
      {
        title: 'Backyard Pool & Outdoor Living Electrification',
        body: 'Katy backyards frequently feature custom swimming pools, outdoor kitchens, and covered patios requiring dedicated subpanels and GFCI weatherproofing.',
      },
    ],
    housingElectricalProfile: {
      ageRange: '1980s-1990s in Cinco Ranch/Nottingham Country, and 2005-2024 in Elyson and Cane Island.',
      commonPanels: 'Eaton, Siemens, and Square D Homeline 150A to 200A panels.',
      keyChallenges:
        'Sensitive AFCI breakers tripping repeatedly, overloaded breaker space in 150A panels, and ungrounded dryer or range hookups.',
      recommendedUpgrades:
        'AFCI breaker diagnostic replacement, 200-amp service upgrades, Level 2 EV charging circuits, and whole-house surge protection.',
    },
    popularServices: [
      {
        name: 'AFCI Breaker Diagnostic & Repair',
        reason: 'Locating and repairing the root cause of frequent bedroom, living room, and kitchen breaker trips.',
      },
      {
        name: 'EV Home Charging Station Installation',
        reason: 'Installing dedicated 240V 50A/60A lines for Tesla Wall Connectors and universal chargers.',
      },
      {
        name: 'Swimming Pool & Spa Electrical Wiring',
        reason: 'Wiring pumps, automated valve controllers, and salt cell chlorinators with GFCI protection.',
      },
      {
        name: 'Commercial Build-Outs & Tenant Electrical',
        reason: 'Serving Katy retail centers, restaurants, and medical clinics with 3-phase commercial wiring.',
      },
    ],
    localReview: {
      author: 'Christopher Highsmith (Katy Area Client)',
      meta: 'Local Guide · 90 reviews · 429 photos · a month ago',
      quote:
        'Gus is a good guy, very trustworthy. Quick troubleshooting on nuisance tripping of AFCI breakers and identified the issue as failing led disc lights. Fair price. He also did some swaps on outlets for us... He references the codes at every step. Also did some pool lighting and sourced the part for me which is always nice.',
    },
    faqs: [
      {
        question: 'Why do my bedroom or living room breakers keep tripping in my new Katy home?',
        answer:
          'Modern Katy homes use AFCI breakers designed to detect dangerous electrical arcing. However, faulty LED disc lights, cheap motorized appliances, or shared neutral wires can create "nuisance trips". We use specialized diagnostic meters to identify the exact cause and eliminate the tripping.',
      },
      {
        question: 'Do you install Tesla Wall Connectors and EV chargers in Katy?',
        answer:
          'Yes. We install Level 2 240-volt charging circuits for all EV brands in Katy. We calculate panel capacity, install the breaker, route the wiring through conduit, and test the charger output before sign-off.',
      },
      {
        question: 'Can you install pool lighting or fix pool pump electrical in Katy?',
        answer:
          'Yes. We troubleshoot pool equipment subpanels, replace underwater pool lights, and ensure all pool circuits have functioning GFCI protection per National Electrical Code Article 680.',
      },
    ],
  },
  {
    slug: 'cypress-tx',
    path: '/electrical-services-cypress-tx',
    city: 'Cypress, TX',
    shortName: 'Cypress',
    metaTitle: 'Licensed Electrician in Cypress, TX | Bridgeland & Towne Lake | S Branch Electric',
    metaDescription:
      'Cypress electrician serving Bridgeland, Towne Lake, and Coles Crossing. Tankless water heaters, panel upgrades, pool wiring, and EV circuits. Call 832-484-0514.',
    h1: 'Professional Electrical Services in Cypress, TX',
    tagline: 'High-power appliance circuits, panel installations, and reliable troubleshooting for Cypress homes.',
    heroImage:
      'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    zipCodes: ['77429', '77433'],
    neighborhoods: [
      'Bridgeland',
      'Towne Lake',
      'Coles Crossing',
      'Fairfield',
      'Blackhorse Ranch',
      'Cypress Creek Lakes',
      'Copperfield',
    ],
    intro: [
      'Cypress is one of the premier master-planned growth corridors northwest of Houston, known for expansive lakeside communities like Towne Lake and Bridgeland, as well as established master developments like Coles Crossing.',
      'Cypress homes frequently feature heavy electrical loads: multiple air conditioning units, whole-home electric tankless water heaters requiring upwards of 120 amps, heated swimming pools, outdoor covered kitchens, and dedicated home theater rooms.',
      'S Branch Electric provides Cypress homeowners with skilled, code-compliant electrical work, ensuring your panel has the capacity to support your modern lifestyle safely.',
    ],
    localContext: [
      {
        title: 'High-Amperage Electric Tankless Water Heaters',
        body: 'Many Cypress homeowners are converting to whole-house electric tankless water heaters, which require 3 to 4 dedicated double-pole breakers and substantial electrical capacity.',
      },
      {
        title: 'Outdoor Entertainment & Waterfront Patio Wiring',
        body: 'Cypress homes along Towne Lake and Bridgeland waterways feature elaborate covered patios, boat docks, and outdoor kitchens requiring weather-tight conduit and GFCI breakers.',
      },
      {
        title: 'Generator Readiness for Northwest Harris County Outages',
        body: 'High winds during Gulf storms frequently cause power cuts in northwest Harris County. We install manual interlock switches to keep Cypress families powered.',
      },
    ],
    housingElectricalProfile: {
      ageRange: 'Mix of established 1990s-2000s in Fairfield/Coles Crossing and 2010-2024 builds in Bridgeland.',
      commonPanels: '150A to 200A Square D, Siemens, and Eaton breaker panels.',
      keyChallenges:
        'Breaker boxes running out of physical slots for new additions (pool, EV, water heater), and storm-related power surge damage.',
      recommendedUpgrades:
        'Subpanel additions for outdoor living, 200A service upgrades, whole-house surge suppression, and dedicated 240V lines.',
    },
    popularServices: [
      {
        name: 'Electric Tankless Water Heater Circuits',
        reason: 'Running multi-circuit 240V high-amp connections directly from the main panel to the heater unit.',
      },
      {
        name: 'Outdoor Kitchen & Patio Power Drops',
        reason: 'Wiring ceiling fans, infrared heaters, mini-fridges, and weatherproof GFCI outlets for backyards.',
      },
      {
        name: 'Subpanel Installation for Garages & Pools',
        reason: 'Adding secondary breaker panels when the main breaker box is completely full.',
      },
      {
        name: 'Whole-Home Surge Protection',
        reason: 'Guarding high-end HVAC systems and smart appliances against sudden lightning and grid spikes.',
      },
    ],
    faqs: [
      {
        question: 'Can my Cypress home support an electric tankless water heater?',
        answer:
          'Whole-house electric tankless water heaters often require 80 to 120 amps of power (using 3 or 4 separate 30A/40A breakers). We inspect your main panel and perform a load calculation to verify if your current service can support it or if a subpanel/service upgrade is needed.',
      },
      {
        question: 'Do you wire covered patios and outdoor kitchens in Bridgeland and Towne Lake?',
        answer:
          'Yes. We install underground conduit, weatherproof boxes, fan-rated ceiling boxes, and GFCI-protected circuits for outdoor living spaces in Cypress.',
      },
      {
        question: 'How do you fix a breaker box with no available slots in Cypress?',
        answer:
          'If your breaker box has no open slots, we can install tandem breakers (if permitted by the panel manufacturer) or install a subpanel to safely expand your circuit capacity without having to replace your entire electrical box.',
      },
    ],
  },
  {
    slug: 'spring-tx',
    path: '/electrical-services-spring-tx',
    city: 'Spring, TX',
    shortName: 'Spring',
    metaTitle: 'Licensed Electrician in Spring, TX | Champion Forest & Klein | S Branch Electric',
    metaDescription:
      'Spring, TX electrical contractor for panel upgrades, home rewiring, EV chargers, and troubleshooting. 5.0 Google rating. Call Gustavo at 832-484-0514.',
    h1: 'Reliable Electrical Services in Spring, TX',
    tagline: 'Expert diagnostics, panel modernization, and safety upgrades across Spring and Klein.',
    heroImage:
      'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    zipCodes: ['77373', '77379', '77388', '77389'],
    neighborhoods: [
      'Gleannloch Farms',
      'Windrose',
      'Champion Forest',
      'Klein',
      'Spring Lakes',
      'Cypresswood',
      'Old Town Spring area',
    ],
    intro: [
      'Located north of Houston, Spring encompasses a diverse mix of historic character in Old Town Spring, stately wooded homes in Champion Forest, and modern golf-course communities like Gleannloch Farms and Windrose.',
      'Many established Spring homes built in the 1970s and 1980s still operate on original breaker panels that have reached the end of their design lifespan. Homeowners are modernizing with 200-amp upgrades, energy-efficient LED recessed lighting, and dedicated circuits for home workshops and electric vehicles.',
      'S Branch Electric delivers skilled, honest electrical service to Spring homeowners, prioritizing safety, upfront pricing, and clean, meticulous work.',
    ],
    localContext: [
      {
        title: 'Aging Panels in 1970s & 1980s Neighborhoods',
        body: 'Homes in Champion Forest and Cypresswood frequently have 30-to-40-year-old panels that experience breaker fatigue, busbar corrosion, and loose connections.',
      },
      {
        title: 'Detached Garages & Workshop Subpanels',
        body: 'Many Spring properties feature detached 2-car or 3-car garages where owners want dedicated 240V circuits for air compressors, welders, and power tools.',
      },
      {
        title: 'Heavy Tree Canopy & Weatherproofing Needs',
        body: 'Wooded lots in Spring expose service entrance masts to falling branches and wind damage during heavy Texas thunderstorms.',
      },
    ],
    housingElectricalProfile: {
      ageRange: '1970s-1980s brick traditional homes in Champion Forest and 2000s-present in Gleannloch Farms.',
      commonPanels: 'Older Westinghouse, GE, and Challenger panels in early builds; 200A Square D in newer areas.',
      keyChallenges:
        'Weak or buzzing breakers failing under heavy summer AC load, outdated two-prong wiring, and ungrounded circuits.',
      recommendedUpgrades:
        'Modern 200-amp panel replacement, detached garage subpanel additions, and whole-house surge suppression.',
    },
    popularServices: [
      {
        name: '200-Amp Main Service Panel Upgrade',
        reason: 'Replacing fatigued 100A-150A panels to safely handle multiple air conditioning units.',
      },
      {
        name: 'Detached Garage & Workshop Power Wiring',
        reason: 'Running underground subpanel feed lines for hobbyists, welders, and woodworkers.',
      },
      {
        name: 'Whole-Home Rewiring & Grounding',
        reason: 'Upgrading older ungrounded circuits to ensure fire safety and surge protection.',
      },
      {
        name: 'Outdoor Security & Flood Lighting',
        reason: 'Installing motion-activated LED security lights and dusk-to-dawn fixtures.',
      },
    ],
    faqs: [
      {
        question: 'Do you replace electrical service entrance masts damaged by storms in Spring?',
        answer:
          'Yes. If a falling tree branch damages the weatherhead or bends the service mast on your roof, we coordinate with CenterPoint Energy to disconnect power, replace the damaged mast and meter can, and restore safe power.',
      },
      {
        question: 'Can you install power to my detached garage or shed in Spring, TX?',
        answer:
          'Yes. We trench underground conduit from your main panel to the detached garage, install a dedicated subpanel, and wire lighting, outlets, and 240V equipment plugs.',
      },
      {
        question: 'How do I know if my Spring electrical panel is overloaded?',
        answer:
          'Common signs include breakers that feel hot to the touch, buzzing noises, lights that flicker when the AC kicks in, or needing to unplug one appliance to use another. We perform an on-site inspection and amp-draw test to verify.',
      },
    ],
  },
  {
    slug: 'houston-tx',
    path: '/electrical-services-houston-tx',
    city: 'Houston, TX',
    shortName: 'Houston',
    metaTitle: 'Electrical Installation & Repairs in Houston, TX | S Branch Electric',
    metaDescription:
      'Trusted electrical services in Houston, TX. 5.0 Google rating. Residential and commercial installation, 200A panel upgrades, and repairs. Call Gustavo at 832-484-0514.',
    h1: 'Professional Electrical Services in Houston, TX',
    tagline: 'Comprehensive residential and commercial electrical installation and repairs across Greater Houston.',
    heroImage:
      'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    zipCodes: ['77055', '77024', '77080', '77007', '77008', '77019', '77027', '77098'],
    neighborhoods: [
      'Spring Branch',
      'The Heights',
      'Memorial',
      'Montrose',
      'Rice Military',
      'River Oaks',
      'Midtown',
      'Oak Forest',
    ],
    intro: [
      'Houston is America’s fourth-largest city and one of the most electrically demanding regions in the country. Our intense summer heat drives continuous air conditioning usage, while severe Gulf Coast thunderstorms, hurricanes, and winter freezes put extreme stress on residential and commercial electrical systems.',
      'S Branch Electric is based in Houston and delivers dependable, code-compliant electrical work across the city. Whether you need an emergency breaker diagnosis, a 200-amp panel replacement, a commercial retail build-out, or dedicated equipment circuits, you work directly with experienced master electrician Gustavo ("Gus").',
      'We combine prompt communication, fair upfront pricing, and meticulous National Electrical Code compliance to protect your home and business.',
    ],
    localContext: [
      {
        title: 'Gulf Coast Climate & Grid Strain',
        body: 'Houston’s extreme heat index and lightning frequency create severe power surges. We install whole-home surge protection at the panel to safeguard high-end electronics and HVAC systems.',
      },
      {
        title: 'Historic Neighborhoods vs. New Commercial Build-Outs',
        body: 'From 1920s Heights bungalows with outdated knob-and-tube or cloth wiring to modern commercial tenant build-outs in Midtown and Galleria, we understand Houston’s diverse infrastructure.',
      },
      {
        title: 'Direct Electrician Contact — No Call Centers',
        body: 'Unlike large corporate franchises that send commission-based sales technicians, you speak directly with Gus for transparent quotes and expert execution.',
      },
    ],
    housingElectricalProfile: {
      ageRange: 'From historic 1920s-1940s bungalows to mid-century ranches and modern high-density townhomes.',
      commonPanels: 'Everything from ancient fuse boxes and Zinsco/FPE panels to modern 200A Square D and Eaton boxes.',
      keyChallenges:
        'Extreme summer air conditioning power draw, lightning surge damage, water intrusion in exterior meters, and ungrounded older wiring.',
      recommendedUpgrades:
        '200-amp main breaker panel modernization, whole-house surge suppression, generator interlock kits, and dedicated appliance circuits.',
    },
    popularServices: [
      {
        name: '200-Amp Service Panel Upgrades',
        reason: 'Modernizing aging 100-amp boxes to support multi-ton AC units, EV chargers, and modern life.',
      },
      {
        name: 'Emergency Breaker & Power Troubleshooting',
        reason: 'Diagnosing dead outlets, buzzing breaker boxes, and blown circuits promptly across Houston.',
      },
      {
        name: 'Whole-Home Surge Protection',
        reason: 'Protecting expensive appliances and smart electronics from Houston lightning and utility spikes.',
      },
      {
        name: 'Commercial Tenant Build-Outs & Lighting',
        reason: 'Equipping Houston offices, restaurants, and retail spaces with code-compliant commercial power.',
      },
    ],
    faqs: [
      {
        question: 'Does S Branch Electric serve both residential and commercial clients in Houston?',
        answer:
          'Yes. We handle residential homes, rental properties, and commercial facilities throughout Houston, from simple outlet repairs to full panel installations and 3-phase commercial circuits.',
      },
      {
        question: 'Can you help with emergency electrical issues or weekend outages in Houston?',
        answer:
          'Yes. S Branch Electric has responded to many weekend and urgent calls for Houston families dealing with dead circuits, blown appliance fuses, and buzzing panels. Call 832-484-0514 directly.',
      },
      {
        question: 'Do electrical installations require City of Houston permits?',
        answer:
          'Major electrical modifications, including panel upgrades, new subpanels, and new branch circuit installations, typically require a City of Houston permit and inspection. We perform all work strictly to current National Electrical Code (NEC) standards.',
      },
      {
        question: 'How do I schedule an electrical project with S Branch Electric in Houston?',
        answer:
          'Simply call 832-484-0514. You will speak directly with Gus to describe your project, get honest recommendations, and arrange a service visit that fits your schedule.',
      },
    ],
  },
];

export const getAreaBySlug = (slug: string) => serviceAreas.find((a) => a.slug === slug);
export const getAreaByPath = (path: string) => serviceAreas.find((a) => a.path === path);
