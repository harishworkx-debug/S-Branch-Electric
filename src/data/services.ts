export interface ServiceProcessStep {
  title: string;
  body: string;
}

export interface ServiceReviewSnippet {
  author: string;
  meta: string;
  quote: string;
}

export interface ServicePage {
  slug: string;
  path: string;
  name: string;
  shortName: string;
  ctaLabel: string;
  tagline: string;
  icon: string;
  cardImage: string;
  heroImage: string;
  cardAlt: string;
  heroAlt: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  whatItIs: string[];
  commonNeeds: { title: string; body: string }[];
  considerations: string[];
  servicesProvided: string[];
  warningSigns: string[];
  processSteps: ServiceProcessStep[];
  necCodeNote: string;
  relatedReview?: ServiceReviewSnippet;
  faqs: { question: string; answer: string }[];
}

export const services: ServicePage[] = [
  {
    slug: 'electrical-installation',
    path: '/electrical-installation-houston-tx',
    name: 'Electrical Installation',
    shortName: 'Electrical Installation',
    ctaLabel: 'Call for Electrical Installation',
    tagline: 'Ground-up electrical systems, home additions, subpanels, and rough-in wiring for Houston builders and property owners.',
    icon: 'Zap',
    cardImage:
      'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Electrician installing components inside a commercial and residential building panel in Houston',
    heroAlt: 'Professional electrician using a drill on an electrical panel during a ground-up property installation',
    metaTitle: 'Electrical Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Professional electrical installation in Houston, TX. Ground-up new construction, home additions, builder rough-ins, and subpanels. Call Gus at 832-484-0514.',
    h1: 'Electrical Installation Services in Houston, TX',
    intro: [
      'S Branch Electric provides comprehensive, ground-up electrical installation for new construction, major home additions, detached workshops, and commercial properties throughout Greater Houston. Master electrician Gustavo ("Gus") manages the complete electrical scope from framing rough-ins to final municipal inspection sign-off.',
      'We partner directly with custom homebuilders, remodeling general contractors, and property owners to engineer reliable, code-compliant electrical distribution. Every project is executed with precision load calculations, robust copper conductors, and full adherence to City of Houston building codes and NEC standards.',
    ],
    whatItIs: [
      'New construction and property-wide electrical installation encompasses the entire infrastructure required to energize a new or fully renovated building. This includes the utility service mast, meter base, main distribution switchgear, subpanel placement, branch circuit conduit and Romex rough-in, grounding electrode system (ground rods), and device trim-out.',
      'Unlike simple appliance hookups, whole-property installations require formal NEC Article 220 load calculations, City of Houston permitting, rough-in framing inspections before insulation, and final mechanical inspections before power release by CenterPoint Energy.',
    ],
    warningSigns: [
      'Planning a home addition, garage conversion, or ADU without expanding total service amperage',
      'Unpermitted electrical work discovered during pre-purchase property inspections',
      'Commercial tenant build-out requiring new three-phase panels and dedicated equipment drops',
      'Subcontractors failing city rough-in inspections due to undersized conduit or improper box fill',
    ],
    processSteps: [
      {
        title: 'Architectural Blueprint & NEC Load Analysis',
        body: 'We review architectural plans, calculate continuous and non-continuous electrical loads, and specify panel ampacity and conduit routing.',
      },
      {
        title: 'City of Houston Permitting & Rough-In',
        body: 'We pull required municipal electrical permits, drill framing, pull heavy-gauge copper wiring, and secure all metal electrical rough boxes.',
      },
      {
        title: 'Service Entrance & Grounding Electrode System',
        body: 'We install the meter socket, utility riser mast, main distribution panel, and dual copper ground rods per NEC 250 grounding code.',
      },
      {
        title: 'Rough-In Inspection, Device Trim & Final Release',
        body: 'We coordinate with city inspectors, install architectural devices and luminaires, test all circuit balances, and secure permanent utility power release.',
      },
    ],
    necCodeNote:
      'All whole-property installations comply with NEC Article 210 (Branch Circuits), Article 220 (Load Calculations), Article 250 (Grounding), and City of Houston Building Standards.',
    relatedReview: {
      author: 'Melissa D. Zier (Houston Client)',
      meta: 'Local Guide · 25 reviews · 9 photos',
      quote:
        'We are extremely pleased with the service provided by Gus Rivera at Spring Branch Electric. Gus has consistently demonstrated excellent communication, professionalism, and top-notch work. He helped us install the electrical needs for our barrel sauna and more recently handled updates to power our home with a whole-house generator.',
    },
    commonNeeds: [
      {
        title: 'Ground-Up Residential Builds & Additions',
        body: 'Complete electrical rough-in and finish trim for new single-family builds, second-story additions, and master suite expansions.',
      },
      {
        title: 'Detached Garages, Workshops & ADUs',
        body: 'Trenching underground feeder cable to supply standalone subpanels for detached workshops, storage buildings, and guest houses.',
      },
      {
        title: 'Commercial Tenant Build-Outs',
        body: 'Three-phase electrical distribution, retail display power, dedicated POS circuits, and illuminated exit signage for Houston businesses.',
      },
    ],
    considerations: [
      'City of Houston permits and CenterPoint utility release must be coordinated in sequential inspection phases.',
      'Underground utility locating (Texas 811) is required before trenching outdoor feeder conduits to outbuildings.',
      'Proper wire sizing (THHN/copper) prevents voltage drop across long runs to detached garages and workshops.',
      'Surge protective devices (SPDs) are mandated by NEC Article 230.67 for all newly installed service entrances.',
    ],
    servicesProvided: [
      'New construction electrical rough-in and trim',
      'Residential room addition and ADU electrical wiring',
      'Commercial tenant build-out electrical systems',
      'Main service entrance and meter socket installation',
      'Detached garage and workshop subpanel feeds',
      'City of Houston permit management and inspection coordination',
    ],
    faqs: [
      {
        question: 'Do I need to call before starting an electrical installation in Houston?',
        answer:
          'Yes. Calling first lets us understand the scope of your project, discuss what you need installed, and confirm service availability for your specific Houston location. Call Gus directly at 832-484-0514.',
      },
      {
        question: 'Can S Branch Electric install dedicated circuits for appliances?',
        answer:
          'Yes. Dedicated circuits for electric dryers, ranges, air conditioners, and EV chargers are a common installation request. The circuit is sized to the appliance and protected with the correct breaker.',
      },
      {
        question: 'Does an electrical installation require a permit in Houston?',
        answer:
          'Many electrical installations in Houston require a permit and inspection. The specific requirement depends on the scope of the work. We discuss permit requirements upfront during your initial call.',
      },
    ],
  },
  {
    slug: 'electrical-wiring',
    path: '/electrical-wiring-houston-tx',
    name: 'Electrical Wiring',
    shortName: 'Electrical Wiring',
    ctaLabel: 'Call for Electrical Wiring',
    tagline: 'New wiring, whole-home rewiring, and wiring repairs for Houston properties.',
    icon: 'Cable',
    cardImage:
      'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Exposed electrical wiring in a wall during a residential wiring installation in Houston',
    heroAlt: 'Close-up of exposed electrical wiring in wall sockets ready for installation during a Houston wiring project',
    metaTitle: 'Electrical Wiring in Houston, TX | S Branch Electric',
    metaDescription:
      'Residential and commercial electrical wiring in Houston, TX. New wiring, rewiring, and aluminum wire remediation by S Branch Electric. Call 832-484-0514.',
    h1: 'Electrical Wiring in Houston, TX',
    intro: [
      'Proper electrical wiring is the critical backbone of any safe, dependable building. S Branch Electric provides new wiring installations, whole-home rewiring for historic Houston neighborhoods, and precision wiring repairs across the Greater Houston area.',
      'Many homes in Houston neighborhoods like Spring Branch, The Heights, and Memorial were built decades ago and still carry wiring that does not meet modern demands. A direct phone call connects you with Gus to evaluate your home’s wiring safely.',
    ],
    whatItIs: [
      'Electrical wiring is the network of insulated conductors that distributes electricity from the service entrance panel to every outlet, switch, luminaire, and appliance. Wiring must be correctly sized to the circuit amperage and routed to prevent mechanical damage and overheating.',
      'Common residential wiring uses non-metallic (NM-B Romex) copper cable, while commercial settings utilize individual THHN/THWN conductors in metallic conduit (EMT). S Branch Electric uses premium copper wiring and code-certified connectors exclusively.',
    ],
    warningSigns: [
      'Flickering or dimming lights when heavy appliances cycle on',
      'Warm wall switch plates, discolored outlets, or burning plastic odors',
      'Outdated 1960s–1970s aluminum wiring or deteriorating cloth insulation',
      'Ungrounded two-prong outlets that shock or cannot accept modern electronics',
    ],
    processSteps: [
      {
        title: 'Circuit Mapping & Diagnostics',
        body: 'We test circuit continuity, map branch runs, and inspect junction boxes to identify damaged, overloaded, or ungrounded wires.',
      },
      {
        title: 'Safe De-Energization & Removal',
        body: 'We de-energize the circuit at the panel and safely disconnect or remediate outdated wiring.',
      },
      {
        title: 'New Copper Conductor Routing',
        body: 'We pull new, correctly gauged NM-B copper cables through wall cavities, securing them to framing per NEC spacing rules.',
      },
      {
        title: 'Bonding, Grounding & Continuity Testing',
        body: 'All ground wires are bonded to metal boxes, devices are terminated, and full circuit integrity is verified under load.',
      },
    ],
    necCodeNote:
      'Compliant with NEC Article 300 (Wiring Methods) and Article 310 (Conductors for General Wiring).',
    relatedReview: {
      author: 'Christopher Highsmith (Houston Homeowner)',
      meta: 'Local Guide · 90 reviews · 429 photos',
      quote:
        'Gus is a good guy, very trustworthy. He talked me out of installing some deep outlets in a location where the box was too shallow to accommodate due to heat. He references the codes at every step. Also did some pool lighting and sourced the part for me which is always nice.',
    },
    commonNeeds: [
      {
        title: 'Whole-Home Rewiring',
        body: 'Replacing outdated cloth, knob-and-tube, or degraded wiring in older Houston homes to eliminate fire risks and support modern loads.',
      },
      {
        title: 'Dedicated Circuit Runs',
        body: 'Adding independent 20A or 30A wiring runs for home workshops, dedicated computer setups, and high-wattage kitchen appliances.',
      },
      {
        title: 'Storm & Rodent Damaged Wiring Repair',
        body: 'Locating and splicing or replacing conductors damaged by roof leaks, rodents, or physical trauma during severe weather.',
      },
    ],
    considerations: [
      'Houston homes built between 1965 and 1973 may have aluminum wiring that requires COPALUM or AlumiConn remediation.',
      'Wire gauge must match circuit breaker amperage (14 AWG for 15A, 12 AWG for 20A, 10 AWG for 30A).',
      'Wiring through attics and crawlspaces must be protected from physical damage and supported within 12 inches of each box.',
      'Major rewiring projects trigger the need to evaluate main panel capacity.',
    ],
    servicesProvided: [
      'New construction and remodel wiring',
      'Whole-home and partial rewiring',
      'Dedicated 120V and 240V circuit wiring',
      'Aluminum wiring pigtailing and remediation',
      'Damaged wiring fault location and repair',
      'Subpanel and disconnect wiring',
    ],
    faqs: [
      {
        question: "How do I know whether my home's electrical wiring needs an upgrade?",
        answer:
          'Common signs include frequently tripping breakers, flickering lights, discolored outlet faceplates, a burning smell near outlets or the breaker panel, or visibly frayed wiring. If your home was built before 1975 and has never been updated, a wiring evaluation is recommended.',
      },
      {
        question: 'Can you install wiring for a home addition in Houston?',
        answer:
          'Yes. Wiring for room additions, garage conversions, and accessory dwelling units (ADUs) is a core service. Call 832-484-0514 to discuss your addition and confirm scheduling.',
      },
      {
        question: 'Do you repair wiring damaged by storms?',
        answer:
          'Yes. Gulf Coast storms can cause water intrusion and roof leaks that short out attic wiring. We locate the faulted segment, replace the damaged conductors, and verify the circuit before energizing.',
      },
    ],
  },
  {
    slug: 'residential-electrical-installation',
    path: '/residential-electrical-installation-houston-tx',
    name: 'Residential Electrician & Home Electrical Upgrades',
    shortName: 'Residential Electrician',
    ctaLabel: 'Call Residential Electrician',
    tagline: 'Dedicated 240V lines, electric dryer hookups, sauna wiring, air fryer circuits, and living space upgrades for Houston homes.',
    icon: 'Home',
    cardImage:
      'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Electrician examining a residential circuit breaker box during home appliance circuit upgrade in Houston',
    heroAlt: 'An electrician carefully examines a residential fuse box indoors, ensuring electrical safety during a Houston home upgrade',
    metaTitle: 'Residential Electrician in Houston, TX | S Branch Electric',
    metaDescription:
      'Trusted residential electrician in Houston, TX for homeowner projects: dedicated 240V appliance circuits, dryer hookups, saunas, and repairs. Call 832-484-0514.',
    h1: 'Residential Electrician Serving Houston Homeowners',
    intro: [
      'S Branch Electric helps Houston homeowners power today’s modern high-wattage lifestyle without tripping breakers or risking electrical fires. Whether you purchased a high-draw appliance from Costco, are building an in-home barrel sauna, or need dedicated kitchen circuits for air fryers and microwaves, master electrician Gustavo ("Gus") handles the upgrade cleanly and safely.',
      'Unlike massive commercial contractors, Gus specializes in working respectfully inside occupied, finished homes. We run new dedicated copper branch circuits through attics and crawlspaces with minimal drywall disturbance, leaving your living spaces tidy and fully up to code.',
    ],
    whatItIs: [
      'A dedicated appliance circuit is an isolated electrical run originating directly at the main breaker box and terminating at a single dedicated receptacle or hardwired disconnect. By isolating heavy-draw appliances from general lighting and convenience outlets, dedicated lines prevent circuit overloads and nuisance tripping.',
      'Under NEC Article 210, high-demand devices—including electric clothes dryers (30A/240V), electric ranges (40A-50A), hot tubs and barrel saunas (30A-50A), Level 2 EV chargers (40A-50A), and microwave/air fryer kitchen stations—require individual dedicated circuits with correct gauge copper and specialized GFCI/AFCI protection.',
    ],
    warningSigns: [
      'Breakers tripping in the kitchen when running the air fryer and microwave or toaster simultaneously',
      'Newly purchased electric dryer from Costco or Home Depot missing proper 4-wire grounding or smelling hot',
      'Lights dimming visibly whenever a refrigerator compressor, sauna heater, or vacuum cleaner starts',
      'Using multiple extension cords or power strips to power high-wattage home office equipment or heaters',
    ],
    processSteps: [
      {
        title: 'Appliance Wattage & Panel Space Audit',
        body: 'We verify appliance nameplate voltage and amperage (e.g. 1700W air fryer or 30A 240V dryer) and inspect available panel breaker capacity.',
      },
      {
        title: 'Protected Clean Path Routing',
        body: 'We route heavy-gauge Romex (10/3, 8/3, or 6/3 copper) through attics, crawlspaces, or conduit without unnecessary drywall damage.',
      },
      {
        title: 'Dedicated Receptacle & Proper Equipment Grounding',
        body: 'We install commercial-grade 4-prong NEMA receptacles (e.g., 14-30R for dryers, 14-50R for EV) ensuring ground and neutral are completely separated.',
      },
      {
        title: 'Amp-Draw Load Testing & Clean Handover',
        body: 'We test live voltage under full appliance load, verify zero thermal hotspots, vacuum any drywall dust, and label the breaker clearly.',
      },
    ],
    necCodeNote:
      'Complies with NEC Article 210.8 (GFCI Protection), Article 210.12 (AFCI Arc-Fault Protection), and Article 250 (Separate Equipment Grounding conductors).',
    relatedReview: {
      author: 'Aaron S (Spring Branch Homeowner)',
      meta: 'Verified Google Review · 9 months ago',
      quote:
        'Gus was fantastic to work with. I called him on a Saturday after I blew a fuse in my kitchen by running my air fryer and toaster at the same time, and he actually answered the phone... He showed up right on time Monday and was extremely professional and thorough. Gus took the time to check both appliances and explained that my air fryer was pulling about 1700 watts... solid guidance!',
    },
    commonNeeds: [
      {
        title: 'Dedicated Kitchen Appliance Circuits',
        body: 'Adding isolated 20A branch lines so 1700W air fryers, espresso machines, and toaster ovens operate safely without tripping general kitchen breakers.',
      },
      {
        title: 'Electric Clothes Dryer 240V Hookups',
        body: 'Installing code-compliant 4-wire 30A 240V dryer lines with dedicated equipment grounding to replace unsafe ungrounded 3-prong hookups.',
      },
      {
        title: 'Sauna, Hot Tub & Specialty Circuit Wiring',
        body: 'Running exterior weather-rated feeds and GFCI disconnect boxes for outdoor saunas, swim spas, and patio kitchen appliances.',
      },
    ],
    considerations: [
      'Modern electrical codes require 4-wire connections (hot, hot, neutral, separate ground) for all 240V appliances.',
      'High-wattage appliances operating for 3+ hours continuously must be sized at 125% of rated load per NEC 210.19.',
      'Homes with older 100A panels may need a tandem breaker or panel sub-feed to accommodate high-amperage 240V loads.',
      'Surface wire raceways or clean attic fish paths keep drywall repair to an absolute minimum in furnished homes.',
    ],
    servicesProvided: [
      'Dedicated 20A 120V kitchen small appliance circuits',
      '240V 30A electric clothes dryer line installation',
      'Home sauna and hot tub dedicated electrical wiring',
      'Dedicated home office computer and server circuits',
      'Level 2 EV charging 240V 50A outlet installation',
      'Living space ceiling fan and recessed lighting upgrades',
    ],
    faqs: [
      {
        question: 'Do you install outlets and switches in Houston homes?',
        answer:
          'Yes. Outlet and switch installation is one of our most frequent residential requests. We install new outlets, replace ungrounded two-prong receptacles with grounded GFCIs, and fit smart switches and dimmers.',
      },
      {
        question: 'Can you install a ceiling fan where only a standard light fixture existed?',
        answer:
          'Yes, but the junction box must be replaced with a fan-rated support box to safely hold the weight and vibration of the fan per code. We handle the entire box replacement and fan mounting.',
      },
      {
        question: 'Do you work on older Houston homes?',
        answer:
          'Yes. A large portion of our work is in established neighborhoods like Spring Branch, Memorial, and The Heights. We specialize in evaluating older wiring, modernizing breaker boxes, and bringing older homes up to modern safety standards.',
      },
    ],
  },
  {
    slug: 'commercial-electrical-installation',
    path: '/commercial-electrical-installation-houston-tx',
    name: 'Commercial Electrician & Tenant Build-Outs',
    shortName: 'Commercial Electrician',
    ctaLabel: 'Call Commercial Electrician',
    tagline: 'Reliable electrical installation for Houston retail, offices, and commercial facilities.',
    icon: 'Building2',
    cardImage:
      'https://images.pexels.com/photos/28265032/pexels-photo-28265032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/28265032/pexels-photo-28265032.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Complex network of electrical wiring and control panels in a commercial setting in Houston',
    heroAlt: 'Complex network of electrical wiring and control panels in an industrial commercial setting during installation',
    metaTitle: 'Commercial Electrician in Houston, TX | S Branch Electric',
    metaDescription:
      'Commercial electrician in Houston, TX for offices, retail, and light commercial spaces. Call S Branch Electric at 832-484-0514.',
    h1: 'Commercial Electrician for Houston Businesses & Retail',
    intro: [
      'S Branch Electric provides commercial electrical installation and renovation services for businesses throughout Houston, Texas. From tenant build-outs in retail centers to dedicated 3-phase machinery circuits, commercial projects demand rigorous safety and code compliance.',
      'We understand that commercial downtime costs money. Master electrician Gustavo works efficiently, adheres strictly to project timelines, and ensures all installations pass city commercial inspections.',
    ],
    whatItIs: [
      'Commercial electrical installation involves high-voltage systems (120/208V, 277/480V 3-phase power), metallic conduit wiring (EMT and rigid pipe), heavy-duty commercial panels, disconnect switches, and specialized equipment connections for commercial occupancies.',
      'All commercial installations must comply with the commercial sections of the NEC and local Houston commercial fire and building codes, covering emergency egress illumination, illuminated exit signs, dedicated equipment disconnects, and continuous bonding.',
    ],
    warningSigns: [
      'Commercial tenant build-out requiring lighting, outlet, and equipment reconfiguration',
      'Installing commercial 3-phase equipment, kitchen cooktops, or refrigeration compressors',
      'Flickering commercial fluorescent fixtures needing energy-efficient LED conversion',
      'Missing or non-functional emergency exit signs failing annual fire marshal inspection',
    ],
    processSteps: [
      {
        title: 'Commercial Plan & Load Review',
        body: 'We review architectural plans, equipment spec sheets, and calculate phase balance across commercial distribution panels.',
      },
      {
        title: 'EMT Conduit Bending & Pipe Installation',
        body: 'We bend and run commercial metallic tubing (EMT) cleanly along structural ceilings and inside commercial stud walls.',
      },
      {
        title: 'Commercial Cable Pulling & Disconnect Terminations',
        body: 'We pull individual THHN/THWN conductors and install heavy-duty fused or non-fused disconnect switches near machinery.',
      },
      {
        title: 'Phase Rotation, Load Balance & Inspection Prep',
        body: 'We verify proper voltage phase rotation, test balanced amp draws across phases, and prepare for city inspection approval.',
      },
    ],
    necCodeNote:
      'Engineered in compliance with NEC Chapter 5 (Special Occupancies) and City of Houston commercial electrical amendments.',
    relatedReview: {
      author: 'Armand Abay (Commercial & Residential Client)',
      meta: 'Local Guide · 21 reviews · 6 months ago',
      quote:
        'We used SB Electric twice recently and was very satisfied with the quality and timeliness of Gustavo’s service. He is a skilled electrician, polite and communicated well with me. He provided set prices for the work. Skilled and dependable!',
    },
    commonNeeds: [
      {
        title: 'Tenant Build-Outs & Retail Remodels',
        body: 'Reconfiguring electrical panels, dedicated equipment plugs, and track/recessed lighting for incoming business tenants.',
      },
      {
        title: 'Heavy Equipment Hookups',
        body: 'Running dedicated 3-phase circuits and safety disconnect switches for commercial kitchen appliances, HVAC units, and shop machinery.',
      },
      {
        title: 'Commercial LED Retrofits & Signage',
        body: 'Upgrading warehouse and office lighting to high-output commercial LEDs and wiring illuminated exterior storefront signage.',
      },
    ],
    considerations: [
      'Commercial projects require separate commercial permitting and plan review pathways through the City of Houston.',
      'Three-phase 208V or 480V systems require specialized commercial tools, disconnects, and phase balancing.',
      'Emergency egress lighting and exit signage have specific battery-backup duration standards.',
      'Conduit wiring methods are mandatory in commercial ceilings and wall assemblies.',
    ],
    servicesProvided: [
      'Commercial conduit and wiring installation',
      'Retail and office LED lighting and exit signs',
      'Dedicated 3-phase machinery circuits',
      'Commercial main distribution panels and subpanels',
      'Isolated ground outlets for sensitive POS and IT servers',
      'Commercial troubleshooting and code violation corrections',
    ],
    faqs: [
      {
        question: 'Do you handle electrical installation for commercial spaces in Houston?',
        answer:
          'Yes. S Branch Electric works with retail shops, medical and dental offices, restaurants, warehouses, and light industrial facilities across Houston. Call 832-484-0514 to discuss your commercial project scope.',
      },
      {
        question: 'Can you install dedicated 3-phase circuits for commercial equipment?',
        answer:
          'Yes. Dedicated three-phase 208V or 480V circuits with safety disconnect switches are part of our commercial capabilities. We review your equipment nameplate specs and install the appropriate wiring and breakers.',
      },
      {
        question: 'Do you install commercial lighting and exit signs in Houston?',
        answer:
          'Yes. We install commercial overhead LED fixtures, display lighting, illuminated exit signs, and emergency backup battery packs required to pass City of Houston fire inspections.',
      },
    ],
  },
  {
    slug: 'electrical-panel-installation',
    path: '/electrical-panel-installation-houston-tx',
    name: 'Electrical Panel Installation',
    shortName: 'Electrical Panel Installation',
    ctaLabel: 'Call for Panel Installation',
    tagline: 'New electrical service panels, secondary subpanels, and distribution equipment for Houston properties.',
    icon: 'LayoutGrid',
    cardImage:
      'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Organized circuit breaker panel with color-coded wiring during a Houston panel replacement',
    heroAlt: 'Close-up of an organized circuit breaker panel featuring color-coded electrical wiring during panel replacement',
    metaTitle: 'Electrical Panel Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'New electrical panel installation and secondary subpanels in Houston, TX. New builds, garage additions, and workshop distribution. Call Gus at 832-484-0514.',
    h1: 'Electrical Panel Installation in Houston, TX',
    intro: [
      'Older Houston homes built between 1950 and 1985 frequently harbor obsolete, fire-hazard breaker panels that have lost their UL safety listing and cause insurance policy cancellations. S Branch Electric specializes in safe, permitted electrical panel replacements and secondary subpanel additions throughout Houston.',
      'If your home has a Federal Pacific Electric (FPE) Stab-Lok, Zinsco, or Challenger breaker box, master electrician Gustavo ("Gus") can safely replace the hazardous equipment with a modern, high-grade Square D, Siemens, or Eaton distribution center. We also install secondary subpanels for workshops, pool pumps, and garage conversions.',
    ],
    whatItIs: [
      'Electrical panel replacement involves removing an outdated, damaged, or fire-hazardous breaker box and replacing it with a brand-new, code-compliant panelboard. Unlike an amperage upgrade, panel replacement focuses on eliminating defective equipment, resolving burnt busbars, and bringing the home into full compliance with current insurance safety standards.',
      'Subpanel installation involves mounting a secondary breaker enclosure fed from your main distribution panel via a dedicated feeder breaker. Subpanels provide localized circuit control and extra breaker spaces for detached garages, guest suites, home workshops, or outdoor living setups.',
    ],
    warningSigns: [
      'Insurance carrier requiring panel replacement due to Federal Pacific (FPE) or Zinsco branding',
      'Breakers failing to trip during a short circuit, causing wiring insulation to melt or burn',
      'Corroded, oxidized, or physically damaged panel interior from roof or wall water intrusion',
      'Main panel is 100% full, with zero breaker spaces left to wire a garage workshop or pool',
    ],
    processSteps: [
      {
        title: 'Hazardous Panel Identification & Scope Verification',
        body: 'We inspect your current enclosure, verify whether busbar degradation or fire hazards (FPE/Zinsco) exist, and map out circuit routing.',
      },
      {
        title: 'Safe Utility Isolation & Box De-Energization',
        body: 'We coordinate with CenterPoint Energy to pull the utility meter, safely de-energizing the service entrance conductors before work begins.',
      },
      {
        title: 'New NEMA Panel Mounting & Circuit Transfer',
        body: 'We mount a modern galvanized steel enclosure, terminate service feeds with torque-limiting tools, and neatly land all branch circuits.',
      },
      {
        title: 'Grounding Electrode Verification & Clear Labeling',
        body: 'We drive dual 8-foot copper ground rods if missing, bond the neutral bus, label every breaker clearly, and arrange city inspection.',
      },
    ],
    necCodeNote:
      'Installed in compliance with NEC Article 408 (Panelboards), Article 250 (Grounding and Bonding), and local insurance safety underwriting criteria.',
    relatedReview: {
      author: 'Norma Toledo (Houston Homeowner)',
      meta: '5 reviews · Winter Storm Recovery',
      quote:
        'Was affected by the winter storm and needed fixtures replaced new electrical box upgrade. Quick response best deal in town, come on a weekend, came highly recommend! Will be calling them again for any future work I may need!',
    },
    commonNeeds: [
      {
        title: 'FPE & Zinsco Fire Hazard Replacement',
        body: 'Eliminating known fire-hazard panels that fail to trip under load and prevent home sales or insurance coverage.',
      },
      {
        title: 'Detached Garage & Workshop Subpanels',
        body: 'Running high-capacity 60A–100A subpanel feeds to power air compressors, welders, and power tools in detached buildings.',
      },
      {
        title: 'Water Damaged & Corroded Panel Swaps',
        body: 'Replacing rusty, compromised exterior or garage breaker boxes with weather-tight NEMA 3R outdoor enclosures.',
      },
    ],
    considerations: [
      'Most Texas insurance companies will not write homeowners policies on homes with Federal Pacific Stab-Lok or Zinsco panels.',
      'A subpanel requires separated neutral and ground busbars (no neutral-to-ground bonding in subpanels).',
      'All newly installed main panels must include an exterior emergency service disconnect switch per NEC 230.85.',
      'Grounding electrode conductors must be bonded to the cold water line and dual supplemental ground rods.',
    ],
    servicesProvided: [
      'Federal Pacific Electric (FPE) panel replacement',
      'Zinsco and Challenger breaker box replacement',
      'Secondary subpanel installation for workshops & garages',
      'Exterior NEMA 3R weatherproof panel replacement',
      'Ground rod and bonding electrode system installation',
      'Insurance compliance certification and city permitting',
    ],
    faqs: [
      {
        question: 'How do I know if my electrical panel needs replacing?',
        answer:
          'Common reasons include adding high-load appliances (EV chargers, hot tubs, AC units), an obsolete panel brand (Federal Pacific or Zinsco), physical rust or burn marks, or a panel that has zero space for new circuits. Call Gus at 832-484-0514 to inspect your setup.',
      },
      {
        question: 'Does installing a new panel require a permit in Houston?',
        answer:
          'Yes. Replacing or installing a main electrical panel requires a permit from the City of Houston or local municipality and coordination with CenterPoint Energy to disconnect and reconnect power. We handle this process from start to finish.',
      },
      {
        question: 'Can you install a subpanel in my garage or workshop?',
        answer:
          'Yes. Subpanels are an excellent solution when you need additional circuit capacity for a garage, addition, or pool equipment, provided your main service entrance has adequate capacity.',
      },
    ],
  },
  {
    slug: 'electrical-panel-upgrades',
    path: '/electrical-panel-upgrades-houston-tx',
    name: 'Electrical Panel Upgrades & Heavy-Ups',
    shortName: 'Electrical Panel Upgrade',
    ctaLabel: 'Call for Panel Upgrade',
    tagline: 'Service amperage heavy-ups and manual generator interlock kits to power modern Houston life and hurricane resilience.',
    icon: 'ArrowUpCircle',
    cardImage:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Electrician working on a circuit breaker panel with colorful wires during a Houston 200A panel upgrade',
    heroAlt: 'Hand of electrician working on a circuit breaker panel with colorful wires, ensuring safe electrical connections during a panel upgrade',
    metaTitle: 'Electrical Panel Upgrade in Houston, TX | S Branch Electric',
    metaDescription:
      'Electrical panel upgrade in Houston, TX. Upgrade from 100A to 200A, replace hazardous Zinsco/FPE panels, and install generator interlocks. Call 832-484-0514.',
    h1: 'Electrical Panel Upgrades & 200A Heavy-Ups in Houston, TX',
    intro: [
      'If your Houston home has an electrical panel that struggles to keep up with modern living, S Branch Electric performs comprehensive 200-amp and 400-amp service heavy-ups. We also install manual generator interlock kits, allowing you to power your entire home during Houston’s frequent hurricane and storm outages safely without dangerous backfeeding.',
      'Many Houston homes built between 1950 and 1985 still run on 100-amp or 125-amp service drops designed for an era before central heat pumps, Level 2 EV chargers, and multiple AC compressors. Calling master electrician Gustavo Rivera connects you directly with the technician who will upgrade your service entrance and meter can.',
    ],
    whatItIs: [
      'A 200-amp electrical panel upgrade (service heavy-up) is the replacement of an undersized 60A, 100A, or 125A service with a modern 200-amp utility entrance. This involves upsizing the exterior service mast, pulling 4/0 aluminum or 2/0 copper entrance conductors, installing a new meter base, and fitting a modern 40-slot breaker enclosure.',
      'A manual generator interlock kit is a code-mandated mechanical safety device fitted directly to your main breaker panel. It locks out the utility main switch before allowing a portable generator breaker to engage, safely feeding power to critical home circuits without backfeeding power lines or endangering utility lineworkers.',
    ],
    warningSigns: [
      'Current home service is only 100 or 125 amps while adding EV chargers, heat pumps, or pool heaters',
      'Breakers trip frequently when central air conditioning and kitchen appliances run simultaneously',
      'Desire for storm backup power using a portable generator without paying $15,000+ for whole-home standby units',
      'Breaker box emits a faint buzzing sound or individual breakers feel warm to the touch during summer heat',
    ],
    processSteps: [
      {
        title: 'NEC Article 220 Load Calculation',
        body: 'We calculate total square footage and connected electrical loads to determine exact amperage requirements.',
      },
      {
        title: 'Service Entrance & Meter Can Upgrade',
        body: 'We upsize the exterior service mast, weatherhead, and entrance conductors to handle 200-amp continuous current.',
      },
      {
        title: 'Modern 200A Panel & Interlock Installation',
        body: 'We mount a brand-new panel, seat AFCI/GFCI breakers, install the mechanical generator interlock slider, and run an outdoor 30A/50A generator inlet box.',
      },
      {
        title: 'Whole-Home Surge Protection & CenterPoint Inspection',
        body: 'We install a Type 2 panel-mounted surge protector, test all circuit voltages under full load, and coordinate city inspection sign-off.',
      },
    ],
    necCodeNote:
      'Sized strictly to NEC Article 220 (Service Load Calculations), NEC 702 (Optional Standby Systems), and CenterPoint Energy Service Standards.',
    relatedReview: {
      author: 'Lety Lopez (Houston Homeowner)',
      meta: 'Local Guide · 11 reviews · a year ago',
      quote:
        'Great job at explaining how it works, fast and friendly service, Interlock system installation, fault replacement breaker. Highly recommend Gustavo for electrical upgrades!',
    },
    commonNeeds: [
      {
        title: '100-to-200-Amp Heavy-Ups',
        body: 'The most essential upgrade for Houston homes, doubling power capacity to support modern high-efficiency HVAC and EV charging.',
      },
      {
        title: 'Manual Generator Interlock Systems',
        body: 'Cost-effective, NEC-compliant generator backup that powers AC, refrigeration, and lights through an exterior power inlet box.',
      },
      {
        title: 'Whole-Home Surge Suppression',
        body: 'Type 2 surge protective devices installed directly at the panel bus to guard delicate electronics against lightning and grid switching surges.',
      },
    ],
    considerations: [
      'Load calculations must be performed to determine whether 200-amp or 400-amp service is required.',
      'The service entrance conductors between the weatherhead and the meter may need upsizing.',
      'Grounding must be brought to current code by driving two 8-foot copper-clad grounding rods.',
      'A City of Houston permit and CenterPoint utility release are required for the upgrade.',
    ],
    servicesProvided: [
      '100-amp to 200-amp panel upgrades',
      '400-amp service heavy-ups for luxury homes',
      'Generator interlock kit and exterior inlet box installation',
      'Service entrance mast and meter base upgrades',
      'Breaker modernization to AFCI/GFCI standards',
      'Whole-home panel surge protector installation',
    ],
    faqs: [
      {
        question: 'When should a homeowner upgrade an electrical panel?',
        answer:
          'A homeowner should upgrade an electrical panel when moving to a modern 200-amp service, when adding high-amperage appliances like level 2 EV chargers or whole-house HVAC, when breakers trip regularly from standard simultaneous loads, or when the existing panel is outdated (such as 60-amp to 100-amp fuse boxes or Zinsco/Federal Pacific panels).',
      },
      {
        question: 'Do I need a whole-house surge protector?',
        answer:
          'Yes. Whole-house surge protection installed directly inside your breaker panel shields high-value home electronics, HVAC compressors, smart appliances, and EV chargers from Houston grid spikes and lightning surges. Gus regularly recommends this as a proactive, high-value upgrade.',
      },
      {
        question: 'What is the difference between a generator interlock and a transfer switch?',
        answer:
          'A mechanical interlock kit installs directly on your existing breaker panel and prevents the main utility breaker and the generator breaker from being turned on at the same time. It is significantly less expensive than a separate transfer switch and allows you the flexibility to power any circuit in your home (up to your generator’s wattage capacity) by simply toggling breakers.',
      },
      {
        question: 'How long does an electrical panel upgrade take in Houston?',
        answer:
          'A typical panel upgrade is completed in a single day. Power is safely shut off in the morning while work is performed, and power is restored the same afternoon once CenterPoint coordinates reconnect. Call 832-484-0514 to discuss your home.',
      },
    ],
  },
  {
    slug: 'circuit-breaker-installation',
    path: '/circuit-breaker-installation-houston-tx',
    name: 'Circuit Breaker Installation & Replacement',
    shortName: 'Circuit Breaker Installation',
    ctaLabel: 'Call for Breaker Installation',
    tagline: 'Circuit breaker installation, physical replacements, and dedicated appliance breakers in Houston panels.',
    icon: 'ShieldCheck',
    cardImage:
      'https://images.pexels.com/photos/27928760/pexels-photo-27928760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/27928760/pexels-photo-27928760.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Electrician adjusting a circuit breaker panel during a Houston breaker diagnosis and replacement',
    heroAlt: 'Focused electrician adjusting circuit breaker panel during a breaker installation, technology and skill in action',
    metaTitle: 'Circuit Breaker Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Circuit breaker installation and replacement in Houston, TX. New breaker seating, dedicated appliance lines, and AFCI/GFCI upgrades. Call 832-484-0514.',
    h1: 'Circuit Breaker Installation & Replacement in Houston, TX',
    intro: [
      'A circuit breaker that repeatedly trips, refuses to stay reset, or buzzes under load is your electrical system’s critical distress signal. S Branch Electric provides fast, precise circuit breaker diagnostics and replacements for residential and commercial panels across Houston.',
      'Instead of blindly swapping breakers or guessing, master electrician Gustavo Rivera uses precision digital amp-clamp meters and thermal infrared scanning to diagnose whether the issue is a failing breaker mechanism, an overloaded circuit, or a dangerous concealed short in your walls.',
    ],
    whatItIs: [
      'Circuit breaker replacement involves diagnosing and replacing individual faulty or obsolete branch breakers inside an existing panel. Breakers wear out over decades of heat cycling, internal spring fatigue, and arc damage from repeated tripping events.',
      'We supply and install genuine, manufacturer-listed breakers (Square D QO & Homeline, Eaton BR & CH, Siemens, GE) matching the exact busbar stab specifications of your panel. We also upgrade standard thermal-magnetic breakers to modern AFCI (Arc-Fault) and GFCI (Ground-Fault) combination breakers per latest NEC guidelines.',
    ],
    warningSigns: [
      'A circuit breaker trips immediately upon resetting, indicating a direct short circuit',
      'The breaker handle feels loose, springy, or will not stay in the "ON" position',
      'Audible buzzing, humming, or sizzling sounds emanating from the breaker enclosure',
      'Single room or washing machine circuit has lost power while other rooms remain energized',
    ],
    processSteps: [
      {
        title: 'Thermal & Amp-Clamp Diagnostic Testing',
        body: 'We test live current draw using digital amp clamps to distinguish between circuit overload, a wiring short, or internal breaker fatigue.',
      },
      {
        title: 'Busbar Inspection & Cleaning',
        body: 'We inspect the panel busbar stabs for pitting, corrosion, or arcing burns before seating a new breaker.',
      },
      {
        title: 'Manufacturer-Listed Breaker Seating',
        body: 'We seat a certified, manufacturer-compatible breaker (standard, AFCI, GFCI, or dual-function) firmly into place.',
      },
      {
        title: 'Torque-Controlled Lug Fastening',
        body: 'We torque terminal screws to exact inch-pound specifications and test trip sensitivity to guarantee safe overcurrent protection.',
      },
    ],
    necCodeNote:
      'Installed per NEC Article 240 (Overcurrent Protection) matching conductor gauge (14 AWG for 15A, 12 AWG for 20A, 10 AWG for 30A).',
    relatedReview: {
      author: 'DeMarcus Sparks (Houston Client)',
      meta: 'Local Guide · 18 reviews · 8 months ago',
      quote:
        'Gustavo not only fixed the issue with our breaker to give us back power in the washing room, but also saved us money. I will be referring him to other potential clients. Thanks again Gustavo!!!',
    },
    commonNeeds: [
      {
        title: 'Faulty & Buzzing Breaker Swaps',
        body: 'Replacing worn-out, weak, or physically damaged breakers that hum under load or trip under minimal appliance draw.',
      },
      {
        title: 'AFCI & GFCI Breaker Upgrades',
        body: 'Installing panel-level ground-fault and arc-fault protection to bring existing branch circuits up to modern life-safety codes.',
      },
      {
        title: 'Laundry Room & Dedicated Breaker Repairs',
        body: 'Diagnosing dedicated dryer and washer circuits that trip and restoring clean 120V/240V power quickly.',
      },
    ],
    considerations: [
      'Breaker amperage must strictly match the wire gauge (15A for 14 AWG, 20A for 12 AWG, 30A for 10 AWG).',
      'Breakers must be UL-listed for your specific panel brand (never force mismatched breaker brands).',
      'A breaker that trips immediately upon reset typically indicates a direct short circuit, not a faulty breaker.',
      'GFCI and AFCI breakers provide whole-circuit protection directly from the panel enclosure.',
    ],
    servicesProvided: [
      'Standard 15A and 20A single-pole breaker replacement',
      'Double-pole 240V breaker replacement (30A–60A)',
      'GFCI and AFCI arc-fault breaker installation and testing',
      'Dual-function breaker retrofits',
      'Breaker diagnostic testing and load assessment',
      'Buzzing and overheating breaker emergency replacement',
    ],
    faqs: [
      {
        question: 'Why does my circuit breaker keep tripping?',
        answer:
          'A breaker trips to prevent electrical fires caused by circuit overload or short circuits. Frequent tripping usually means too many high-wattage devices are on one circuit, a device has an internal fault, or the breaker has weakened from age. Call 832-484-0514 to diagnose the cause safely.',
      },
      {
        question: 'When should I replace an electrical breaker?',
        answer:
          'You should replace an electrical breaker if it feels hot to the touch, smells burnt, shows signs of charring, buzzes or hums loudly under normal load, fails to reset, or trips immediately even when all appliances on that circuit are unplugged. Breakers are mechanical safety devices with a finite lifespan and should be replaced by a licensed electrician.',
      },
      {
        question: 'Can you install a GFCI or AFCI breaker in my existing panel?',
        answer:
          'Yes. If your panel brand supports modern AFCI or GFCI breakers, we can install them directly in the panel. This provides comprehensive ground-fault or arc-fault protection for every outlet and switch on that circuit.',
      },
      {
        question: 'Is it dangerous to repeatedly reset a tripping breaker?',
        answer:
          'Yes. If a breaker trips repeatedly, resetting it over and over forces current through a faulted wire or overloaded circuit, which can melt wire insulation and ignite an electrical fire behind your walls. Stop resetting it and call for diagnosis.',
      },
    ],
  },
  {
    slug: 'lighting-installation',
    path: '/lighting-installation-houston-tx',
    name: 'Lighting Installation',
    shortName: 'Lighting Installation',
    ctaLabel: 'Call for Lighting Installation',
    tagline: 'Indoor, outdoor, and landscape lighting installation across Houston.',
    icon: 'Lightbulb',
    cardImage:
      'https://images.pexels.com/photos/4933643/pexels-photo-4933643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Modern suburban home at dusk beautifully lit with exterior lighting in Houston',
    heroAlt: 'Person screwing a light bulb into a new fashionable lamp during a lighting installation renovation',
    metaTitle: 'Lighting Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Lighting installation in Houston, TX. Recessed LED lighting, chandeliers, outdoor, and landscape lighting by S Branch Electric. Call 832-484-0514.',
    h1: 'Lighting Installation in Houston, TX',
    intro: [
      'S Branch Electric installs indoor and outdoor lighting for homes and commercial businesses throughout Houston. From elegant recessed LED can lights to exterior security fixtures and ceiling fans, proper installation ensures stunning aesthetics and complete electrical safety.',
      'Quality lighting transforms a space, improves energy efficiency, and elevates home security. Master electrician Gustavo installs all fixtures with proper junction box support, code-compliant wiring, and clean, professional craftsmanship.',
    ],
    whatItIs: [
      'Lighting installation is the process of mounting, wiring, and controlling indoor and outdoor illumination fixtures. It includes installing junction boxes rated for the fixture’s weight, routing circuit conductors, connecting compatible dimmer controls, and leveling the fixture.',
      'Different applications require specific equipment: recessed lighting in insulated ceilings demands IC-rated airtight housings, ceiling fans require fan-rated dynamic support boxes, and outdoor fixtures require wet-location ratings with weatherproof gaskets.',
    ],
    warningSigns: [
      'Dark, shadowed living rooms or kitchens lacking modern recessed LED lighting',
      'Old ceiling fan wobbling dangerously on a standard, unrated light fixture box',
      'Outdated fluorescent tubes in garages, kitchens, or laundry rooms that hum and buzz',
      'Inadequate exterior lighting creating dark walkways and security vulnerabilities',
    ],
    processSteps: [
      {
        title: 'Laser Alignment & Layout Planning',
        body: 'We measure ceiling joists and laser-align fixture positions for symmetrical, glare-free illumination.',
      },
      {
        title: 'Ceiling Box & IC-Rated Housing Installation',
        body: 'We install heavy-duty fan-rated support boxes or IC-rated airtight LED housings into ceiling framing.',
      },
      {
        title: 'Dimmer-Compatible Driver & Switch Wiring',
        body: 'We pull dedicated switch legs and connect LED-rated dimmer controls to eliminate buzzing and flickering.',
      },
      {
        title: 'Fixture Mounting, Leveling & Light Angle Testing',
        body: 'We mount the fixture securely, level all components, and test color temperature and dimming range.',
      },
    ],
    necCodeNote:
      'Complies with NEC Article 410 (Luminaires, Lampholders, and Lamps) and NEC Article 314 (Boxes and Fittings).',
    relatedReview: {
      author: 'Doug Gbosi (Houston Client)',
      meta: 'Local Guide · 41 reviews · 22 photos · 3 years ago',
      quote:
        'Used S Branch Electric to relocate a power outlet, and install additional outdoor lights. On time, exceptional quality, and affordable. Highly recommended for lighting and electrical work!',
    },
    commonNeeds: [
      {
        title: 'Recessed LED Can Lighting',
        body: 'Sleek, energy-efficient recessed lights that brighten kitchens, living rooms, and hallways with warm, dimmable light.',
      },
      {
        title: 'Outdoor & Landscape Lighting',
        body: 'Weatherproof security floodlights, architectural facade illumination, and low-voltage pathway lights for Houston properties.',
      },
      {
        title: 'Ceiling Fans with Lights',
        body: 'Mounting heavy ceiling fans on fan-rated junction boxes to ensure safe, wobble-free airflow essential for Houston summers.',
      },
    ],
    considerations: [
      'Exterior fixtures must be rated for wet or damp locations and protected by GFCI breakers.',
      'Recessed ceiling lights in contact with attic insulation must be IC-rated (Insulation Contact).',
      'Ceiling fan support boxes must be tested and rated for the dynamic motion and weight of the fan.',
      'Modern LED fixtures require LED-compatible dimmers to prevent flickering and premature driver failure.',
    ],
    servicesProvided: [
      'Recessed LED downlight installation',
      'Chandelier and pendant fixture hanging',
      'Ceiling fan installation on fan-rated boxes',
      'Under-cabinet kitchen LED lighting',
      'Outdoor security floodlights and motion sensors',
      'Landscape pathway and accent lighting',
    ],
    faqs: [
      {
        question: 'Can you install outdoor lighting at my Houston home?',
        answer:
          'Yes. We install outdoor security floodlights, patio sconces, and landscape pathway lighting. All outdoor lighting uses wet-location-rated fixtures and is installed with weatherproof conduit and GFCI protection. Call 832-484-0514.',
      },
      {
        question: 'Do you install recessed LED lights in Houston homes?',
        answer:
          'Yes. Recessed LED can lighting is one of our most popular home upgrades. We lay out the spacing symmetrically, cut precise openings, wire LED-compatible dimmers, and leave your room clean and brightly lit.',
      },
      {
        question: 'Can you replace an old light fixture with a ceiling fan?',
        answer:
          'Yes, but the existing ceiling box must be inspected first. Standard light fixture boxes cannot safely support the weight and vibration of a ceiling fan. If needed, we replace the box with a fan-rated brace box secured to the ceiling joists.',
      },
    ],
  },
  {
    slug: 'outlet-installation',
    path: '/outlet-installation-houston-tx',
    name: 'Outlet & Switch Installation',
    shortName: 'Outlet & Switch Installation',
    ctaLabel: 'Call for Outlet Installation',
    tagline: 'Grounded outlet, GFCI receptacle, and smart switch installation across Houston.',
    icon: 'PlugZap',
    cardImage:
      'https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Gloved hands using a drill to install a power outlet on a wall in Houston',
    heroAlt: 'Gloved hands using a drill to install a power outlet on a wall, focusing on precision and safety during installation',
    metaTitle: 'Electrical Outlet Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Electrical outlet installation in Houston, TX. GFCI outlets, grounded receptacles, dedicated 240V lines, and smart switches. Call 832-484-0514.',
    h1: 'Electrical Outlet Installation & GFCI Upgrades in Houston, TX',
    intro: [
      'S Branch Electric installs, replaces, and relocates electrical outlets, receptacles, and switches for Houston homes and commercial spaces. Whether you need additional outlets for a home office, GFCI shock protection in a kitchen, or smart dimmer switches, proper installation ensures reliable safety.',
      'Outlets and switches are the most frequently used parts of your electrical system. Loose receptacles, ungrounded two-prong outlets, and worn switch contacts create hazardous arcing. Gus installs commercial-grade, tamper-resistant devices that last.',
    ],
    whatItIs: [
      'Outlet and switch installation is the work of mounting an electrical box into drywall or framing, routing cable, securing conductors to terminal screws, and verifying polarity, ground continuity, and trip mechanisms.',
      'Modern electrical codes require GFCI (Ground Fault Circuit Interrupter) outlets in kitchens, bathrooms, garages, and outdoors. Tamper-resistant (TR) shutters are mandatory in homes to prevent child accidents, and smart switches often require dedicated neutral wire connections.',
    ],
    warningSigns: [
      'Two-prong ungrounded outlets that cannot safely accept three-prong modern cords',
      'Non-GFCI outlets located near kitchen sinks, bathrooms, laundry rooms, or outdoors',
      'Loose receptacles where plugs fall out easily or spark upon insertion',
      'Needing multiple extension cords because existing outlets are too few or in the wrong place',
    ],
    processSteps: [
      {
        title: 'Circuit Capacity Verification',
        body: 'We check the existing branch circuit load to ensure adding new outlets will not cause circuit overload.',
      },
      {
        title: 'Box Mounting & Cable Routing',
        body: 'We cut precise wall openings and install sturdy retro-fit or new-work boxes, stripping wire ends cleanly.',
      },
      {
        title: 'Side-Screw Fastening (No Backstabs)',
        body: 'We wrap conductors clockwise around heavy-duty side screws to ensure a permanent, arc-free mechanical connection.',
      },
      {
        title: 'Polarity, Ground & GFCI Trip Testing',
        body: 'We use professional 3-prong circuit analyzers to verify correct hot/neutral polarity and instant ground-fault trip speed.',
      },
    ],
    necCodeNote:
      'Installed in compliance with NEC Article 406 (Receptacles) requiring tamper-resistant (TR) devices.',
    relatedReview: {
      author: 'V B (Houston Client)',
      meta: '4 reviews · 10 months ago',
      quote:
        'Gustavo was friendly, efficient, and he provided high quality service for our lighting and outlet installation. Thank you Gus!',
    },
    commonNeeds: [
      {
        title: 'GFCI Receptacle Upgrades',
        body: 'Installing ground-fault circuit interrupters near sinks, countertops, and exterior patios to protect against shock.',
      },
      {
        title: 'Adding Dedicated Receptacles',
        body: 'Running new 120V lines for wall-mounted TVs, home offices, and kitchen appliances to eliminate extension cords.',
      },
      {
        title: 'Smart Switches & Dimmer Controls',
        body: 'Upgrading old toggle switches to smooth dimmers, timer switches, and smart home automation controls.',
      },
    ],
    considerations: [
      'GFCI protection is mandatory in all wet or damp locations per current Houston building code.',
      'Two-prong ungrounded receptacles should be upgraded to grounded, GFCI-protected circuits.',
      'Smart switches require a dedicated neutral wire inside the switch box.',
      'Plugs must be tamper-resistant (TR) in all residential living areas per NEC Article 406.12.',
    ],
    servicesProvided: [
      'Standard 15A and 20A tamper-resistant outlet installation',
      'GFCI outlet installation and replacement',
      'Two-prong to grounded three-prong conversions',
      'Dedicated 240V appliance outlets (dryers, ovens, EV chargers)',
      'Dimmer switch and 3-way switch installation',
      'Smart switch and timer installation',
    ],
    faqs: [
      {
        question: 'Why are my electrical outlets not working?',
        answer:
          'Outlets typically stop working due to a tripped GFCI receptacle (which may be located upstream in another bathroom or garage on the same circuit), a tripped breaker, loose wire connections behind the outlet, or a burnt back-stab terminal. S Branch Electric uses professional multimeters and circuit tracers to pinpoint the failure and repair the circuit safely.',
      },
      {
        question: 'Why should I replace my old two-prong outlets in Houston?',
        answer:
          'Two-prong outlets lack an equipment grounding conductor. Upgrading to grounded, GFCI-protected receptacles prevents electrical shock, protects expensive computers and smart TVs from voltage spikes, and meets current NEC safety codes.',
      },
      {
        question: 'Can you add an outlet anywhere in my Houston home?',
        answer:
          'In most cases, yes. Adding an outlet involves routing wiring through wall cavities from an existing circuit or the main panel to the new location. We verify that the circuit has adequate spare capacity before adding new receptacles.',
      },
    ],
  },
  {
    slug: 'electrical-troubleshooting',
    path: '/electrical-troubleshooting-houston-tx',
    name: 'Electrical Troubleshooting & Repairs',
    shortName: 'Troubleshooting & Repairs',
    ctaLabel: 'Call for Electrical Troubleshooting',
    tagline: 'Fast, accurate diagnostics and permanent electrical repairs across Houston.',
    icon: 'Wrench',
    cardImage:
      'https://images.pexels.com/photos/6349399/pexels-photo-6349399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Digital multimeter with electrical tools and circuit breakers used for Houston electrical troubleshooting',
    heroAlt: 'Electrician using a multimeter to diagnose and fix wiring in a control panel during an electrical troubleshooting service call',
    metaTitle: 'Electrical Troubleshooting in Houston, TX | S Branch Electric',
    metaDescription:
      'Electrical troubleshooting in Houston, TX. Diagnose tripping breakers, sudden power outages, flickering lights, and wiring faults. Call 832-484-0514.',
    h1: 'Electrical Troubleshooting & Diagnostics in Houston, TX',
    intro: [
      'Electrical problems can affect your home’s safety, comfort, and everyday operation. From frequently tripping circuit breakers to outlets that suddenly stop working, accurately identifying the root cause is critical before attempting any repairs.',
      'S Branch Electric provides professional electrical troubleshooting services for homeowners and businesses in Houston, TX. Master electrician Gustavo ("Gus") uses commercial-grade diagnostic equipment to systematically identify electrical issues, determine the safest repair solution, and explain the recommended work clearly before proceeding.',
    ],
    whatItIs: [
      'Electrical troubleshooting is the systematic diagnostic procedure of identifying why an electrical circuit is malfunctioning. Using digital multimeters, circuit tracers, and thermal scanners, we evaluate voltage drops, ground fault resistance, and neutral continuity throughout the entire circuit path.',
      'Our troubleshooting process starts by listening to the problem, inspecting the relevant components, pinpointing possible causes—whether a burned wire nut in an attic junction box, a tripped GFCI upstream, or a fatigued breaker stab—and executing a permanent, code-compliant repair.',
    ],
    warningSigns: [
      'Circuit breakers that trip repeatedly or fuses that blow frequently',
      'Outlets or switches that suddenly lose power or stop working',
      'Flickering or inconsistent lighting when heavy appliances start up',
      'Burning electrical odor, unusual heat, buzzing sounds, or sparks from panels or outlets',
      'Electrical circuits that intermittently cut off or show voltage drop',
      'Unusual electrical behavior requiring prompt professional inspection',
    ],
    processSteps: [
      {
        title: 'Systematic Circuit Tracing',
        body: 'We trace the circuit from the service panel through every junction box and device to isolate the fault.',
      },
      {
        title: 'Digital Multimeter Diagnostic Testing',
        body: 'We measure voltage drop, line-to-ground resistance, and neutral continuity under simulated load.',
      },
      {
        title: 'Pinpointing Failed Splices or Devices',
        body: 'We open junction boxes to find failed backstabs, burned wire connectors, or oxidized aluminum splices.',
      },
      {
        title: 'Permanent Code-Compliant Repair',
        body: 'We replace the defective component with commercial-grade parts, re-torque all connections, and re-test.',
      },
    ],
    necCodeNote:
      'Diagnostic protocols prioritize immediate elimination of arcing faults and compliance with NEC safety guidelines.',
    relatedReview: {
      author: 'Marc Barnhill (Houston Homeowner)',
      meta: '3 reviews · Emergency Repair · 3 months ago',
      quote:
        'Came out within an hour of me contacting him and repaired quickly. I will definitely use them again. Outstanding service and quick and quality repair!',
    },
    commonNeeds: [
      {
        title: 'Tripping Circuit Breakers',
        body: 'Determining whether repeated tripping is caused by an overloaded circuit, a short circuit in the wiring, or a worn-out breaker mechanism.',
      },
      {
        title: 'Dead Outlets & Dark Rooms',
        body: 'Restoring power to dead receptacle strings caused by tripped GFCIs, broken neutral wires, or failed backstabbed connections.',
      },
      {
        title: 'Flickering & Dimming Lights',
        body: 'Diagnosing loose neutral connections, voltage fluctuations, or faulty dimmer switches before they cause heat damage.',
      },
    ],
    considerations: [
      'Safety Warning: Never open, probe, or attempt to work on an energized electrical panel or live service conductors yourself.',
      'Repeated breaker trips, burning smells, heat around faceplates, or sparking should never be ignored—shut off the circuit and seek qualified help.',
      'Houston thunderstorms frequently cause water intrusion into outdoor meters and breaker panels.',
      'Older homes with backstabbed wire connections behind outlets are prone to sudden connection failure.',
      'A GFCI that will not reset is often protecting you from a real downstream ground fault.',
      'Repeatedly resetting a tripping breaker without fixing the root cause can melt wire insulation and ignite a fire.',
    ],
    servicesProvided: [
      'Tripping breaker and blown fuse diagnosis',
      'Dead outlet and non-working circuit repair',
      'Flickering and dimming light troubleshooting',
      'GFCI and AFCI nuisance trip diagnostics',
      'Loose neutral and voltage imbalance repair',
      'Emergency weekend and after-hours repair',
    ],
    faqs: [
      {
        question: 'Why does my circuit breaker keep tripping?',
        answer:
          'A circuit breaker trips primarily for three reasons: a circuit overload (drawing more amps than the circuit rating), a short circuit (hot wire touching neutral or ground), or a ground fault. If a breaker trips immediately after resetting, stop forcing it and call Gustavo at S Branch Electric for safe diagnostics.',
      },
      {
        question: 'What causes lights to flicker in a house?',
        answer:
          'Lights flicker due to sudden voltage drops when large appliances (like an air conditioner or dryer) kick on, loose neutral or ground wiring in the panel, corroded service entrance connections from the utility, or incompatible LED dimmer switches. Persistent or room-wide flickering is a fire hazard requiring immediate professional troubleshooting.',
      },
      {
        question: 'Why are my electrical outlets not working?',
        answer:
          'Dead outlets are one of our most common troubleshooting service calls. The cause is often a tripped GFCI outlet upstream, a loose backstab connection behind a receptacle, or a damaged breaker. S Branch Electric tests and isolates the issue to safely restore power.',
      },
    ],
  },
  {
    slug: 'electrical-repair',
    path: '/electrical-repair-houston-tx',
    name: 'Electrical Repair',
    shortName: 'Electrical Repair',
    ctaLabel: 'Call for Electrical Repair',
    tagline: 'Fast, code-compliant residential and light commercial electrical repairs across Houston.',
    icon: 'Wrench',
    cardImage:
      'https://images.pexels.com/photos/6349399/pexels-photo-6349399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Master electrician repairing damaged electrical wiring and components in Houston home',
    heroAlt: 'Professional electrician repairing circuit wiring inside a residential breaker panel in Houston',
    metaTitle: 'Electrical Repair in Houston, TX | S Branch Electric',
    metaDescription:
      'Professional electrical repair in Houston, TX. Emergency circuit repairs, dead outlets, breaker fixes, and wiring repairs by S Branch Electric. Call 832-484-0514.',
    h1: 'Electrical Repair Services in Houston, TX',
    intro: [
      'When electrical components fail, breakers refuse to reset, or outlets buzz and spark, S Branch Electric provides fast, dependable electrical repairs throughout Greater Houston. Master electrician Gustavo ("Gus") Rivera diagnoses and repairs faults quickly to restore safe power.',
      'We treat electrical safety with extreme care. Whether addressing storm-damaged equipment, burned wire connections, or faulty switches, every repair adheres strictly to City of Houston building codes and NEC safety requirements.',
    ],
    whatItIs: [
      'Electrical repair involves repairing or replacing compromised components within your property’s electrical system. This includes fixing loose neutral splices, replacing damaged breakers, rebuilding corroded service drops, repairing short circuits, and restoring lost power to branch circuits.',
      'Unlike temporary DIY fixes, professional electrical repair identifies the underlying root cause of the breakdown to prevent recurring faults or hidden electrical fire hazards.',
    ],
    warningSigns: [
      'Frequent circuit breaker tripping or blown fuses under everyday household use',
      'Charred, discolored, or warm outlet faceplates and switch covers',
      'Persistent burning plastic odor near electrical panels or receptacles',
      'Buzzing, sizzling, or crackling sounds coming from behind walls or switches',
    ],
    processSteps: [
      {
        title: 'Safe Electrical Isolation & Inspection',
        body: 'We de-energize the affected circuit, verify zero voltage with calibrated multimeters, and inspect all connections.',
      },
      {
        title: 'Root-Cause Diagnostic Analysis',
        body: 'We test wire continuity, line resistance, and neutral stability to pinpoint the exact failure point.',
      },
      {
        title: 'Commercial-Grade Component Repair',
        body: 'We replace damaged breakers, wiring segments, or devices using high-grade copper materials and proper torque.',
      },
      {
        title: 'Full Circuit Load Testing & Verification',
        body: 'We re-energize, test voltage under active load, verify ground-fault protection, and ensure code compliance.',
      },
    ],
    necCodeNote:
      'All repairs comply with NEC Article 110 (Requirements for Electrical Installations) and Article 250 (Grounding and Bonding).',
    relatedReview: {
      author: 'Marc Barnhill (Houston Homeowner)',
      meta: '3 reviews · Emergency Repair · Verified Client',
      quote:
        'Came out within an hour of me contacting him and repaired quickly. I will definitely use them again. Outstanding service and quick and quality repair!',
    },
    commonNeeds: [
      {
        title: 'Emergency Breaker & Fuse Repair',
        body: 'Repairing or replacing breakers that buzz, fail to reset, or trip under normal appliance loads.',
      },
      {
        title: 'Dead Outlet & Switch Fixes',
        body: 'Restoring power to non-working receptacles caused by broken neutrals or failed backstabbed connections.',
      },
      {
        title: 'Storm & Surge Damage Repair',
        body: 'Fixing weatherheads, exterior disconnects, and service masts damaged by fallen tree branches or grid surges.',
      },
    ],
    considerations: [
      'Never attempt to work inside an energized electrical panel or repair live conductors yourself.',
      'A repeatedly tripping breaker is a warning sign of an active hazard—stop resetting it and call for repair.',
      'Loose wiring connections generate micro-arcing that can exceed 3,000°F and ignite wall framing.',
    ],
    servicesProvided: [
      'Emergency electrical diagnostics and repairs',
      'Circuit breaker and fuse box repairs',
      'Dead outlet, switch, and GFCI receptacle repairs',
      'Loose neutral and ground fault remediation',
      'Appliance circuit and dedicated line repairs',
      'Storm damage service entrance repairs',
    ],
    faqs: [
      {
        question: 'Do you offer emergency electrical repair in Houston?',
        answer:
          'Yes. Gustavo frequently assists Houston homeowners with urgent repairs, including blown appliance circuits, dead panels, and sparking equipment. Call 832-484-0514 directly for immediate assistance.',
      },
      {
        question: 'What is the most common residential electrical repair?',
        answer:
          'The most common repairs are tripped GFCI outlets, loose backstab wire connections behind receptacles, and fatigued circuit breakers that trip prematurely.',
      },
      {
        question: 'Is it dangerous to wait on repairing an electrical problem?',
        answer:
          'Yes. Electrical faults rarely resolve on their own. Loose connections and overloaded circuits generate intense heat behind walls, significantly increasing electrical fire risk.',
      },
    ],
  },
  {
    slug: 'electrical-panel-replacement',
    path: '/electrical-panel-replacement-houston-tx',
    name: 'Electrical Panel Replacement',
    shortName: 'Panel Replacement',
    ctaLabel: 'Call for Panel Replacement',
    tagline: 'Replace outdated Federal Pacific, Zinsco, and corroded breaker boxes in Houston homes.',
    icon: 'LayoutGrid',
    cardImage:
      'https://images.pexels.com/photos/27928760/pexels-photo-27928760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/27928760/pexels-photo-27928760.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Electrician replacing a residential breaker box with modern circuit breakers in Houston',
    heroAlt: 'Close-up of new circuit breaker box installation replacing an obsolete panel in Houston',
    metaTitle: 'Electrical Panel Replacement in Houston, TX | S Branch Electric',
    metaDescription:
      'Safe electrical panel replacement in Houston, TX. Replace outdated Federal Pacific, Zinsco, and rusted breaker boxes. Licensed Master Electrician. Call 832-484-0514.',
    h1: 'Electrical Panel Replacement Services in Houston, TX',
    intro: [
      'Your electrical panel is the central nervous system of your home. If your breaker box is outdated, rusted from Gulf Coast humidity, or manufactured by recalled brands like Federal Pacific Electric (FPE) or Zinsco, replacing it is vital for household safety.',
      'S Branch Electric specializes in safe, code-compliant electrical panel replacements across Houston. Master electrician Gustavo Rivera completes panel replacements cleanly, coordinating permits and utility reconnects for a smooth, single-day transition.',
    ],
    whatItIs: [
      'An electrical panel replacement is a modernized swap of your existing breaker enclosure. We replace obsolete bus bars, damaged main breakers, and aging branch circuit breakers with a brand-new, modern enclosure equipped with plug-on neutral bars and Type 2 whole-house surge protection.',
      'Unlike a heavy-up amperage upgrade (which expands incoming utility service to 200A or 400A), a panel replacement updates the hardware and safety technology while maintaining appropriate service capacity.',
    ],
    warningSigns: [
      'Panel manufactured by Federal Pacific Electric (Stab-Lok), Zinsco, or Challenger',
      'Visible rust, water stains, or corrosion inside or outside the breaker enclosure',
      'Breakers that feel hot to the touch or emit a faint ozone/burning plastic smell',
      'Breakers that fail to trip during short circuits or refuse to reset after tripping',
    ],
    processSteps: [
      {
        title: 'Safety Evaluation & Circuit Mapping',
        body: 'We audit your current panel, identify all branch circuits, and verify neutral and ground separation.',
      },
      {
        title: 'City Permitting & Power Disconnect',
        body: 'We pull required municipal permits and coordinate safe utility power disconnection with CenterPoint Energy.',
      },
      {
        title: 'New Enclosure & Breaker Installation',
        body: 'We install a heavy-gauge modern enclosure, new bus bars, commercial-grade breakers, and surge protection.',
      },
      {
        title: 'Grounding Upgrade & Power Release',
        body: 'We install dual 8-foot copper ground rods to meet NEC 250, pass city inspection, and restore utility power.',
      },
    ],
    necCodeNote:
      'Panel replacements meet NEC Article 230 (Services), Article 250 (Grounding), and NEC 230.67 surge protection mandates.',
    relatedReview: {
      author: 'Norma Toledo (Houston Client)',
      meta: 'Storm Recovery · Panel Replacement · 5.0 Stars',
      quote:
        'Great communication, was quick to show up for emergency repair and took care of replacing our storm-damaged panel with quality work. Highly recommended Gus and S Branch Electric!',
    },
    commonNeeds: [
      {
        title: 'FPE & Zinsco Hazard Replacement',
        body: 'Replacing hazardous obsolete breaker boxes known to fail under overload conditions and drop insurance coverage.',
      },
      {
        title: 'Corroded Outdoor Enclosure Swaps',
        body: 'Replacing weather-beaten, rusted exterior breaker boxes with NEMA 3R outdoor weatherproof enclosures.',
      },
      {
        title: 'Full Panel Slot Exhaustion',
        body: 'Replacing crowded 20-circuit panels with spacious 40-circuit or 42-circuit panels to allow for future upgrades.',
      },
    ],
    considerations: [
      'Insurance companies frequently deny coverage or charge penalties for homes with active Federal Pacific or Zinsco panels.',
      'A typical residential panel replacement is completed in a single working day with power restored by afternoon.',
      'City of Houston permits and utility disconnect coordination are required for legal, safe panel replacement.',
    ],
    servicesProvided: [
      'Federal Pacific Electric (FPE) panel replacement',
      'Zinsco and Challenger breaker box replacement',
      'Rusted exterior NEMA 3R weatherproof panel replacement',
      'Whole-house surge protector integration',
      'Dual copper ground rod bonding system installation',
      'City permitting and CenterPoint disconnect coordination',
    ],
    faqs: [
      {
        question: 'Why should I replace a Federal Pacific or Zinsco panel?',
        answer:
          'Independent testing shows that Federal Pacific Stab-Lok and Zinsco breakers fail to trip in up to 25% of overload conditions. Instead of cutting power, they can jam and ignite electrical fires. Most Texas insurance underwriters require their replacement.',
      },
      {
        question: 'How long will my power be off during a panel replacement?',
        answer:
          'Power is typically shut off around 8:00 AM while our team replaces the equipment. Power is safely inspected and restored the same afternoon.',
      },
      {
        question: 'How much does it cost to replace an electrical panel in Houston?',
        answer:
          'Costs typically range from $1,800 to $3,500 depending on panel size, enclosure type (indoor vs outdoor NEMA 3R), circuit count, and municipal permit fees. Call Gus at 832-484-0514 for an honest, upfront quote.',
      },
    ],
  },
  {
    slug: 'surge-protector-installation',
    path: '/surge-protector-installation-houston-tx',
    name: 'Whole-House Surge Protector Installation',
    shortName: 'Surge Protection',
    ctaLabel: 'Call for Surge Protection',
    tagline: 'Shield HVAC systems, smart appliances, and electronics from Houston grid surges and lightning.',
    icon: 'ShieldCheck',
    cardImage:
      'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Type 2 whole-house surge protective device installed inside Houston electrical breaker panel',
    heroAlt: 'Electrician installing a whole home surge protector into an electrical panel in Houston',
    metaTitle: 'Whole-House Surge Protector Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Whole-house surge protector installation in Houston, TX. Protect AC units, smart appliances, and EV chargers from lightning and grid spikes. Call 832-484-0514.',
    h1: 'Whole-House Surge Protector Installation in Houston, TX',
    intro: [
      'Houston leads the nation in convective lightning strikes and power grid fluctuations. While plug-in power strips protect only the small gadgets plugged directly into them, a Type 2 Whole-House Surge Protective Device (SPD) shields your entire home’s electrical infrastructure.',
      'S Branch Electric installs commercial-grade whole-house surge protectors directly inside your main electrical panel. Master electrician Gustavo Rivera ensures your expensive HVAC systems, inverter compressors, EV chargers, and smart appliances are safe from damaging voltage spikes.',
    ],
    whatItIs: [
      'A whole-house surge protector is a hardwired device connected directly to your main electrical panel on a dedicated double-pole breaker. When an incoming transient voltage spike arrives from lightning, utility switching, or major appliances cycling off, the SPD diverts the excess electrical energy safely to ground in less than a nanosecond.',
      'Starting with the 2020 National Electrical Code (NEC Article 230.67), whole-home surge protection is now mandatory on all new residential electrical services and panel upgrades.',
    ],
    warningSigns: [
      'Frequent power grid flickers or CenterPoint substation switching events in your neighborhood',
      'Electronic appliances or smart TVs experiencing glitching, rebooting, or shortened lifespans',
      'Recent installation of high-value equipment like central AC units, heat pumps, or Level 2 EV chargers',
      'Existing electrical panel lacks hardwired Type 2 surge protective devices',
    ],
    processSteps: [
      {
        title: 'Panel Assessment & Grounding Audit',
        body: 'We test your panel bus, verify spare breaker capacity, and inspect ground rod resistance to ensure effective surge dissipation.',
      },
      {
        title: 'Type 2 Commercial SPD Selection',
        body: 'We specify a heavy-duty Type 2 surge protective device rated for 50kA to 100kA surge current capacity per phase.',
      },
      {
        title: 'Direct Bus Bar & Neutral Installation',
        body: 'We mount the SPD with minimal lead length directly adjacent to the main breaker for instantaneous surge suppression.',
      },
      {
        title: 'Diagnostic LED Verification & Testing',
        body: 'We verify active operational status indicators and test phase-to-neutral and neutral-to-ground clamping performance.',
      },
    ],
    necCodeNote:
      'All installations comply with NEC Article 230.67 (Surge Protection for Dwelling Units) and UL 1449 4th Edition safety standards.',
    relatedReview: {
      author: 'Aaron S. (Spring Branch Homeowner)',
      meta: '6 reviews · Spring Branch Resident · Price: $1–200',
      quote:
        'Gus was fantastic to work with. He inspected our breaker box and gave me helpful, practical advice, including recommending a whole-house surge protector as a smart future upgrade — no pressure, just solid guidance.',
    },
    commonNeeds: [
      {
        title: 'HVAC & Inverter Compressor Protection',
        body: 'Protecting expensive variable-speed air conditioning compressors from grid voltage spikes during summer storms.',
      },
      {
        title: 'Smart Appliance & Home Network Defense',
        body: 'Guarding smart refrigerators, induction cooktops, home theaters, and computers from continuous micro-surges.',
      },
      {
        title: 'EV Charging Station Safeguards',
        body: 'Preventing grid transients from damaging high-voltage onboard electric vehicle battery management chargers.',
      },
    ],
    considerations: [
      'Standard power strips provide zero protection for hardwired appliances like AC units, ovens, water heaters, and washers.',
      'Roughly 80% of electrical surges originate internally inside your home whenever large motors cycle on and off.',
      'Effective surge protection requires a low-resistance grounding electrode system (dual ground rods).',
    ],
    servicesProvided: [
      'Type 2 whole-house surge protective device installation',
      'Main distribution panel SPD retrofits',
      'Grounding electrode resistance testing and bonding',
      'Dedicated double-pole breaker surge feed installation',
      'Subpanel surge suppression integration',
      'Post-lightning strike electrical diagnostic evaluations',
    ],
    faqs: [
      {
        question: 'Do I still need power strips if I have a whole-house surge protector?',
        answer:
          'Yes. Best practice in electrical engineering is "tiered protection." The whole-house SPD stops massive incoming grid spikes at the panel, while point-of-use surge strips absorb small localized micro-surges at sensitive computer equipment.',
      },
      {
        question: 'How long does a whole-house surge protector last?',
        answer:
          'Most quality Type 2 surge protectors last 5 to 10 years depending on local lightning frequency. They feature external diagnostic LEDs that indicate when internal metal-oxide varistors (MOVs) are active and functioning.',
      },
      {
        question: 'How much does whole-house surge protector installation cost in Houston?',
        answer:
          'A complete professional installation by a Master Electrician typically costs between $350 and $650 including the commercial-grade SPD unit, dedicated breaker, and installation labor.',
      },
    ],
  },
  {
    slug: 'generator-interlock-installation',
    path: '/generator-interlock-installation-houston-tx',
    name: 'Generator Interlock Kit Installation',
    shortName: 'Generator Interlock',
    ctaLabel: 'Call for Generator Interlock',
    tagline: 'Safe, affordable hurricane backup power for your entire Houston home using your portable generator.',
    icon: 'Zap',
    cardImage:
      'https://images.pexels.com/photos/27928760/pexels-photo-27928760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/27928760/pexels-photo-27928760.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Mechanical generator interlock kit installed on electrical panel with safety slider',
    heroAlt: 'Electrician installing a generator interlock and 50A exterior power inlet in Houston',
    metaTitle: 'Generator Interlock Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Generator interlock kit installation in Houston, TX. Safe, code-compliant storm backup power for your home. Exterior 30A/50A inlet boxes. Call 832-484-0514.',
    h1: 'Generator Interlock Kit Installation in Houston, TX',
    intro: [
      'When hurricanes, tropical storms, and grid freezes strike Houston, having reliable backup power is essential. A mechanical generator interlock kit is the safest, most flexible, and most affordable way to power your home using a portable generator.',
      'S Branch Electric installs custom-machined generator interlock kits and exterior weatherproof power inlet boxes. Master electrician Gustavo Rivera ensures your home is hurricane-ready, code-compliant, and completely safe from dangerous electrical backfeeding.',
    ],
    whatItIs: [
      'A generator interlock is a precision-machined mechanical safety bracket installed directly onto your electrical panel faceplate. A sliding steel plate physically prevents the generator breaker from being turned ON unless the main utility breaker is first switched OFF.',
      'Unlike restrictive transfer switches that limit you to 6 or 8 hardwired circuits, an interlock kit energizes your entire panel. This allows you the flexibility to power any circuit in your home—refrigerator, lights, internet, TV, or well pump—simply by flipping breakers.',
    ],
    warningSigns: [
      'Relying on dangerous extension cords snaked through open windows during power outages',
      'Houston hurricane season approaching without a safe emergency power connection',
      'Desire to power household lights, fans, and appliances without purchasing an expensive whole-house standby generator',
      'Existing electrical panel lacks safe mechanical interlock safety devices',
    ],
    processSteps: [
      {
        title: 'Panel Assessment & Wattage Planning',
        body: 'We inspect your breaker panel brand, identify a top-right or top-left breaker slot, and calculate generator wattage limits.',
      },
      {
        title: 'Exterior Power Inlet Box Mounting',
        body: 'We install a heavy-duty NEMA 3R weatherproof 30A or 50A power inlet box on your exterior wall near your generator staging area.',
      },
      {
        title: 'Conduit & Backfeed Breaker Wiring',
        body: 'We pull heavy-gauge copper conductors through protective conduit to a dedicated double-pole backfeed breaker in your panel.',
      },
      {
        title: 'Interlock Bracket Fitment & Safety Test',
        body: 'We secure the custom interlock plate, test the physical mechanical lockout mechanism, and simulate a complete generator transfer.',
      },
    ],
    necCodeNote:
      'All generator interlock systems strictly satisfy NEC Article 702 (Optional Standby Systems) to prevent utility backfeeding.',
    relatedReview: {
      author: 'Melissa D. Zier (Memorial Client)',
      meta: 'Local Guide · 25 reviews · Verified Homeowner',
      quote:
        'Gus Rivera at Spring Branch Electric has consistently demonstrated excellent communication, professionalism, and top-notch work. He handled updates to power our home with a whole-house generator and walked us through every step thoroughly.',
    },
    commonNeeds: [
      {
        title: 'Hurricane & Freeze Emergency Readiness',
        body: 'Keeping refrigerators running, lights on, and phones charged during extended Houston hurricane power outages.',
      },
      {
        title: 'Portable Dual-Fuel Generator Hookups',
        body: 'Connecting 7,500W to 13,000W gas or propane portable generators cleanly without indoor extension cord trip hazards.',
      },
      {
        title: 'Affordable Alternative to Transfer Switches',
        body: 'Achieving whole-panel power flexibility at a fraction of the cost of a traditional 8-circuit transfer switch.',
      },
    ],
    considerations: [
      'Backfeeding a panel without an interlock kit is illegal and can electrocute utility line workers restoring power.',
      'Portable generators must always run outdoors at least 15 to 20 feet away from windows to prevent carbon monoxide poisoning.',
      'Sizing the inlet box (30-amp vs 50-amp) depends on your generator’s running and starting peak wattage.',
    ],
    servicesProvided: [
      'Mechanical generator interlock kit installation',
      'Exterior 30A and 50A weatherproof generator inlet boxes',
      'Dedicated generator backfeed breaker installation',
      'Heavy-gauge copper generator feeder wiring',
      'Panel surge protection integration for storm safety',
      'Operational walkthrough and generator power-up demonstration',
    ],
    faqs: [
      {
        question: 'Why is an interlock kit better than a transfer switch?',
        answer:
          'A transfer switch only lets you power the 6 to 10 specific circuits wired into its box. A generator interlock kit gives you access to every single circuit in your main panel. You can easily switch power between rooms as needed, and it costs hundreds of dollars less.',
      },
      {
        question: 'What size generator inlet box do I need: 30-amp or 50-amp?',
        answer:
          'Generators up to 7,500 running watts typically use a 30-amp inlet (NEMA L14-30). Generators above 8,000 watts usually use a 50-amp inlet (CS6375 or NEMA 14-50). We help you match the inlet to your generator.',
      },
      {
        question: 'Can a portable generator run my central air conditioning with an interlock?',
        answer:
          'A large portable generator (9,000W to 12,000W+) can often run a 3-ton to 4-ton central AC if a "Soft Start" kit is installed on the AC compressor to reduce inrush starting amps. Otherwise, smaller portable generators run window units, refrigerators, and lights easily.',
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const getServiceByPath = (path: string) => services.find((s) => s.path === path);
