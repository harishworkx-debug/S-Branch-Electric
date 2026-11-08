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
    tagline: 'Complete electrical installation for Houston homes and commercial properties.',
    icon: 'Zap',
    cardImage:
      'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Electrician installing components inside a residential circuit breaker panel in Houston',
    heroAlt: 'Professional electrician using a drill on an indoor circuit breaker panel during an electrical installation',
    metaTitle: 'Electrical Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Need electrical installation in Houston, TX? S Branch Electric handles residential and commercial electrical installation. Call 832-484-0514.',
    h1: 'Electrical Installation in Houston, TX',
    intro: [
      'S Branch Electric provides comprehensive electrical installation services for residential and commercial properties throughout Houston, Texas. Whether you are building a new space, upgrading an aging system, or adding high-power appliances and dedicated circuits, master electrician Gustavo ("Gus") handles the work with meticulous care.',
      'From the initial phone call through completed testing, the work is performed with transparent communication, clean job sites, and strict adherence to the National Electrical Code (NEC) and City of Houston standards.',
    ],
    whatItIs: [
      'Electrical installation covers the process of fitting, routing, securing, and energizing electrical components in a building. This includes service panels, subpanels, wiring runs, outlets, switches, lighting fixtures, breakers, and dedicated high-draw appliance circuits.',
      'A proper installation follows strict NEC load calculations and local Houston permitting requirements. Every connection must be correctly sized to wire gauge, torqued to manufacturer specs, and grounded so the system operates safely under peak summer electrical load.',
    ],
    warningSigns: [
      'Installing high-power appliances (dryers, EV chargers, ranges) without a dedicated line',
      'Remodeling or expanding a room without additional electrical circuit capacity',
      'Frequent breaker trips caused by multiple modern devices sharing an old 15A circuit',
      'Adding outdoor kitchens, pool pumps, or workshops that exceed existing panel slots',
    ],
    processSteps: [
      {
        title: 'On-Site Load Calculation',
        body: 'We evaluate your main panel amperage, check available breaker space, and calculate expected amp-draw demand before starting.',
      },
      {
        title: 'Circuit Routing & Conduit Rough-In',
        body: 'We route code-compliant copper conductors through framing or mount weather-rated EMT/PVC conduit for clean, protected runs.',
      },
      {
        title: 'Precision Device & Breaker Terminations',
        body: 'Every breaker lug and receptacle terminal is torqued to exact inch-pound specifications, avoiding loose connections that cause arcing.',
      },
      {
        title: 'Polarity, Grounding & Voltage Verification',
        body: 'We test circuit balance, polarity, ground continuity, and GFCI/AFCI trip mechanisms before energizing and signing off.',
      },
    ],
    necCodeNote:
      'All installations comply with NEC Article 210 (Branch Circuits), Article 220 (Load Calculations), and City of Houston building codes.',
    relatedReview: {
      author: 'Ava Camara (Houston Client)',
      meta: '4 reviews · Costco Dryer & Surge Protection Installation',
      quote:
        'Mr. Gustavo/S Branch Electric came over and helped our family when our new electric clothes dryer from Costco wasn’t installed properly (it wasn’t grounded) and made a bad smell on its test run. He fit us in same day before the weekend, installed surge protection at our breaker box, and gave me peace of mind about our outlet in the laundry room. Thank you, Mr. Gustavo!',
    },
    commonNeeds: [
      {
        title: 'New Construction & Additions',
        body: 'Room additions, garage conversions, and accessory dwelling units needing complete electrical systems from the breaker panel to the final device.',
      },
      {
        title: 'High-Draw Appliance Hookups',
        body: 'Electric dryers, ranges, tankless water heaters, and EV chargers requiring dedicated 240V circuits and proper grounding.',
      },
      {
        title: 'Renovation & Remodel Rewiring',
        body: 'Kitchen and bathroom remodels requiring moved outlets, under-cabinet lighting, and upgraded GFCI protection.',
      },
    ],
    considerations: [
      'Permit and inspection requirements vary by project scope and jurisdiction within the Houston area.',
      'Older Houston homes built before 1970 may have wiring that needs evaluation before new installations are added.',
      'Dedicated circuits must be sized to appliance wattage with appropriate breaker protection.',
      'Surge protection at the panel helps protect newly installed equipment from Houston’s frequent storm-related power spikes.',
    ],
    servicesProvided: [
      'Residential whole-home electrical installation',
      'Commercial electrical installation and tenant build-outs',
      'Dedicated appliance circuits (dryers, ovens, water heaters)',
      'Lighting and ceiling fan fixture installation',
      'Whole-home surge protection installation',
      'Subpanel and circuit breaker additions',
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
        question: 'How do I know if my Houston home needs rewiring?',
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
    name: 'Residential Electrical Installation',
    shortName: 'Residential Installation',
    ctaLabel: 'Call for Residential Electrical Installation',
    tagline: 'Safe, code-compliant electrical installation for Houston homes and homeowners.',
    icon: 'Home',
    cardImage:
      'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Electrician examining a residential fuse box during a home electrical installation in Houston',
    heroAlt: 'An electrician carefully examines a residential fuse box indoors, ensuring electrical safety during a Houston home installation',
    metaTitle: 'Residential Electrical Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Residential electrical installation in Houston, TX for homes, additions, and upgrades. Call S Branch Electric at 832-484-0514.',
    h1: 'Residential Electrical Installation in Houston, TX',
    intro: [
      'S Branch Electric serves homeowners across Houston with trusted residential electrical installation services. From adding a single convenience outlet to completing whole-home wiring upgrades, master electrician Gustavo ("Gus") treats your home with the utmost care.',
      'Houston families deal with a wide range of electrical challenges, from older panels that cannot handle modern appliances to outdoor patios requiring weather-rated power. A direct phone call starts your project without corporate sales pressure.',
    ],
    whatItIs: [
      'Residential electrical installation encompasses all electrical components within single-family homes, townhouses, and residential condominiums. It covers the complete pathway from the exterior service entrance and meter can to the indoor breaker box, switches, lighting fixtures, and outlets.',
      'All residential work must strictly comply with the National Electrical Code (NEC) and City of Houston residential codes, which mandate AFCI arc-fault protection in living areas, GFCI shock protection in wet zones, and tamper-resistant receptacles for child safety.',
    ],
    warningSigns: [
      'Blown fuses or tripped breakers when running the microwave and toaster together',
      'Lack of grounded outlets for modern computers and home entertainment systems',
      'Dark living spaces needing recessed LED lighting and ceiling fan installations',
      'Adding high-demand appliances (EV chargers, hot tubs, saunas) that overload the current panel',
    ],
    processSteps: [
      {
        title: 'Direct In-Home Consultation',
        body: 'We listen to your specific needs, evaluate appliance wattages, and inspect your current breaker panel.',
      },
      {
        title: 'Safety Isolation & Precision Cutting',
        body: 'We de-energize the work area, lay drop cloths to protect your floors, and cut wall openings cleanly.',
      },
      {
        title: 'Heavy-Duty Copper Routing & Termination',
        body: 'We pull premium copper cable and make solid, secure terminations using tamper-resistant, commercial-grade devices.',
      },
      {
        title: 'Testing & Clean Worksite Handover',
        body: 'We test circuit voltage and trip mechanisms, vacuum up any drywall dust, and explain the new setup clearly.',
      },
    ],
    necCodeNote:
      'Complies with NEC Article 210.8 (GFCI Protection) and NEC Article 210.12 (AFCI Arc-Fault Protection in Living Areas).',
    relatedReview: {
      author: 'Aaron S (Spring Branch Homeowner)',
      meta: 'Verified Google Review · 9 months ago',
      quote:
        'Gus was fantastic to work with. I called him on a Saturday after I blew a fuse in my kitchen by running my air fryer and toaster at the same time, and he actually answered the phone... He showed up right on time Monday and was extremely professional and thorough. Gus took the time to check both appliances and explained that my air fryer was pulling about 1700 watts... solid guidance!',
    },
    commonNeeds: [
      {
        title: 'Panel & Breaker Upgrades',
        body: 'Upgrading older 100A or 150A panels to 200 amps to safely power multiple AC units, EV chargers, and modern home electronics.',
      },
      {
        title: 'Outlet & Switch Additions',
        body: 'Adding outlets for home offices, installing GFCI receptacles in kitchens and baths, and fitting dimmer or smart switches.',
      },
      {
        title: 'Lighting & Ceiling Fans',
        body: 'Installing energy-efficient recessed lighting, under-cabinet fixtures, chandeliers, and heavy fan-rated ceiling boxes.',
      },
    ],
    considerations: [
      'GFCI protection is mandatory in kitchens, bathrooms, garages, laundry rooms, and outdoor locations.',
      'AFCI protection is required for living rooms, bedrooms, and general living spaces.',
      'Ceiling fan boxes must be specifically rated for fan vibration and weight.',
      'Older Houston homes may require panel modernization before new dedicated circuits can be added.',
    ],
    servicesProvided: [
      'Whole-home residential electrical wiring',
      'Outlet, switch, and GFCI receptacle installation',
      'Recessed LED and chandelier fixture installation',
      'Ceiling fan installation on fan-rated boxes',
      'Dedicated circuits for dryers, ovens, and HVAC',
      'Whole-home surge protector installation',
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
    name: 'Commercial Electrical Installation',
    shortName: 'Commercial Installation',
    ctaLabel: 'Call for Commercial Electrical Installation',
    tagline: 'Reliable electrical installation for Houston retail, offices, and commercial facilities.',
    icon: 'Building2',
    cardImage:
      'https://images.pexels.com/photos/28265032/pexels-photo-28265032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/28265032/pexels-photo-28265032.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Complex network of electrical wiring and control panels in a commercial setting in Houston',
    heroAlt: 'Complex network of electrical wiring and control panels in an industrial commercial setting during installation',
    metaTitle: 'Commercial Electrical Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Commercial electrical installation in Houston, TX for offices, retail, and light commercial spaces. Call S Branch Electric at 832-484-0514.',
    h1: 'Commercial Electrical Installation in Houston, TX',
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
    shortName: 'Panel Installation',
    ctaLabel: 'Call for Panel Installation',
    tagline: 'New electrical panel installation and subpanel additions for Houston properties.',
    icon: 'LayoutGrid',
    cardImage:
      'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Organized circuit breaker panel with color-coded wiring during a Houston panel installation',
    heroAlt: 'Close-up of an organized circuit breaker panel featuring color-coded electrical wiring during installation',
    metaTitle: 'Electrical Panel Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Electrical panel installation in Houston, TX. New panel installation and subpanels for homes and businesses by S Branch Electric. Call 832-484-0514.',
    h1: 'Electrical Panel Installation in Houston, TX',
    intro: [
      'The electrical panel is the central heartbeat of your entire property, safely distributing power to every room and protecting conductors from overload. S Branch Electric installs new electrical main panels and subpanels for Houston homes and commercial buildings.',
      'A correctly installed breaker box protects your property from electrical fires and ensures reliable operation. Whether building new or replacing outdated equipment, calling Gustavo connects you directly with the master electrician doing the installation.',
    ],
    whatItIs: [
      'An electrical panel (breaker box or service distribution panel) receives electrical utility feed from the meter and distributes it through individual circuit breakers to branch circuits. The main breaker protects the entire structure from overcurrent.',
      'Panel installation requires mounting a NEMA-rated enclosure, connecting service entrance conductors, bonding the neutral bus to the grounding electrode system (ground rods), neatly organizing and terminating branch circuits, and labeling every breaker accurately.',
    ],
    warningSigns: [
      'Older fuse box or hazardous Federal Pacific / Zinsco breaker box in place',
      'Rust, moisture intrusion, or corrosion visible inside or outside the panel enclosure',
      'Breaker box running at 100% capacity with no physical space for new circuits',
      'Home addition, workshop, or pool installation requiring a dedicated subpanel',
    ],
    processSteps: [
      {
        title: 'Utility Coordination & Scheduled Disconnect',
        body: 'We coordinate with CenterPoint Energy to schedule safe temporary power disconnect at the utility meter.',
      },
      {
        title: 'Enclosure Mounting & Service Cable Connection',
        body: 'We securely mount the heavy-duty enclosure and terminate the main service entrance conductors with anti-oxidant compound.',
      },
      {
        title: 'Breaker Seating & Ground Bonding',
        body: 'We seat new branch breakers, land neutral and ground conductors, and bond the system to two 8-foot copper ground rods.',
      },
      {
        title: 'Circuit Labeling & Inspection Sign-Off',
        body: 'Every circuit is tested under load, clearly labeled on the directory door, and prepared for final city inspection sign-off.',
      },
    ],
    necCodeNote:
      'Installed in compliance with NEC Article 408 (Switchboards and Panelboards) and Article 250 (Grounding and Bonding).',
    relatedReview: {
      author: 'Norma Toledo (Houston Homeowner)',
      meta: '5 reviews · Winter Storm Recovery',
      quote:
        'Was affected by the winter storm and needed fixtures replaced new electrical box upgrade. Quick response best deal in town, come on a weekend, came highly recommend! Will be calling them again for any future work I may need!',
    },
    commonNeeds: [
      {
        title: 'New Construction Panels',
        body: 'Installing full main distribution panels for new homes, guest houses, and commercial buildings.',
      },
      {
        title: 'Subpanel Installations',
        body: 'Adding secondary breaker panels in garages, workshops, or additions when the main panel has no remaining breaker space.',
      },
      {
        title: 'Replacing Hazardous Older Panels',
        body: 'Removing obsolete Federal Pacific, Zinsco, or fuse boxes known for catastrophic breaker failure and fire hazards.',
      },
    ],
    considerations: [
      'Panel amperage must match service entrance capacity and calculated total building load.',
      'The panel enclosure must maintain a minimum 3-foot front clearance per NEC safety rules.',
      'All breaker brands must be listed and approved by the panel manufacturer (no mismatched breakers).',
      'Panel installations in Houston require permits, utility coordination, and inspection.',
    ],
    servicesProvided: [
      'New 200-amp main breaker panel installation',
      'Subpanel installation for garages, pools, and workshops',
      'Replacement of obsolete and hazardous breaker boxes',
      'Grounding electrode system and ground rod installation',
      'Panel surge protector installation',
      'Circuit breaker installation and panel labeling',
    ],
    faqs: [
      {
        question: 'How do I know if I need a new electrical panel in Houston?',
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
    name: 'Electrical Panel Upgrades',
    shortName: 'Panel Upgrades',
    ctaLabel: 'Call for Panel Upgrades',
    tagline: 'Upgrade your electrical panel to 200 amps for safety and capacity in Houston.',
    icon: 'ArrowUpCircle',
    cardImage:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Electrician working on a circuit breaker panel with colorful wires during a Houston panel upgrade',
    heroAlt: 'Hand of electrician working on a circuit breaker panel with colorful wires, ensuring safe electrical connections during a panel upgrade',
    metaTitle: 'Electrical Panel Upgrades in Houston, TX | S Branch Electric',
    metaDescription:
      'Electrical panel upgrades in Houston, TX. Increase capacity and safety with a 200-amp panel upgrade from S Branch Electric. Call 832-484-0514.',
    h1: 'Electrical Panel Upgrades in Houston, TX',
    intro: [
      'If your Houston home or business has an electrical panel that struggles to keep up with modern demands, S Branch Electric performs 200-amp electrical panel upgrades to increase capacity and elevate fire safety. An upgrade replaces your existing panel and service conductors with a modern, high-capacity system.',
      'Many Houston homes built between the 1950s and 1980s still have 100-amp or 125-amp panels designed for a time before computers, high-wattage air fryers, multiple AC units, and electric vehicles. A phone call to Gus will help determine whether a panel upgrade is right for your property.',
    ],
    whatItIs: [
      'An electrical panel upgrade is the replacement of an existing undersized service panel with a modern 200-amp (or 400-amp) panel. It typically involves upgrading the service entrance cables from the utility meter, replacing the meter can if required, installing a modern breaker box with surge suppression, and reconnecting all branch circuits.',
      'Upgrading gives your home ample capacity to run central air conditioning, electric vehicle chargers, modern kitchen suites, and swimming pool heaters simultaneously without overloading the electrical system.',
    ],
    warningSigns: [
      'Current home panel is only 100 or 125 amps while power demands continue to rise',
      'Breakers trip frequently when the central air conditioning or kitchen appliances kick on',
      'Adding a Level 2 EV charging station (40A-60A), hot tub, or whole-house generator',
      'Breaker box emits a faint buzzing sound or individual breakers feel warm to the touch',
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
        title: 'Modern 200A Panel & Breaker Installation',
        body: 'We mount a brand-new panel, seat AFCI/GFCI breakers, and neatly terminate all existing circuits with copper bonding.',
      },
      {
        title: 'Whole-Home Surge Protector Integration',
        body: 'We install a panel-mounted surge suppressor, test all circuit voltages under full load, and coordinate city inspection.',
      },
    ],
    necCodeNote:
      'Sized strictly to NEC Article 220 (Service Load Calculations) and City of Houston CenterPoint requirements.',
    relatedReview: {
      author: 'Edward Le (Panel Upgrade Client)',
      meta: '13 reviews · a year ago',
      quote:
        'Gus was a great electrician. He was punctual, clean, and his pricing was very competitive. I wish there were more honest electricians out there like him. Highly recommend for electrical panel replacement or upgrading!',
    },
    commonNeeds: [
      {
        title: '100-to-200-Amp Upgrades',
        body: 'The most popular home upgrade in Houston, doubling electrical capacity to support modern families and HVAC demands.',
      },
      {
        title: 'EV Charger & Appliance Capacity',
        body: 'Creating the 40A to 60A breaker space needed for Level 2 EV chargers, electric dryers, and tankless water heaters.',
      },
      {
        title: 'Insurance & Safety Compliance',
        body: 'Replacing hazardous Federal Pacific, Zinsco, or split-bus panels flagged during real estate transactions or home insurance renewals.',
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
      'Service entrance mast and meter base upgrades',
      'Breaker modernization to AFCI/GFCI standards',
      'Whole-home panel surge protector installation',
      'Dual grounding rod installation and bonding',
    ],
    faqs: [
      {
        question: 'How long does an electrical panel upgrade take in Houston?',
        answer:
          'A typical panel upgrade is completed in a single day. Power is safely shut off in the morning while work is performed, and power is restored the same afternoon once CenterPoint coordinates reconnect. Call 832-484-0514 to discuss your home.',
      },
      {
        question: 'Why should I upgrade from 100 amps to 200 amps?',
        answer:
          'A 100-amp service was designed for homes with fewer electrical devices. Today, central AC units, microwaves, EV chargers, computers, and appliances easily push 100-amp panels to their limit, leading to tripping breakers, voltage dips, and potential fire hazards.',
      },
      {
        question: 'Will I need a permit for a panel upgrade in Houston?',
        answer:
          'Yes. Electrical panel upgrades require a permit and inspection in the City of Houston. S Branch Electric manages the permitting, utility disconnect coordination, and inspection process.',
      },
    ],
  },
  {
    slug: 'circuit-breaker-installation',
    path: '/circuit-breaker-installation-houston-tx',
    name: 'Circuit Breaker Installation',
    shortName: 'Breaker Installation',
    ctaLabel: 'Call for Circuit Breaker Installation',
    tagline: 'Circuit breaker installation, replacement, and diagnostics in Houston.',
    icon: 'ShieldCheck',
    cardImage:
      'https://images.pexels.com/photos/27928760/pexels-photo-27928760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/27928760/pexels-photo-27928760.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Electrician adjusting a circuit breaker panel during a Houston breaker installation',
    heroAlt: 'Focused electrician adjusting circuit breaker panel during a breaker installation, technology and skill in action',
    metaTitle: 'Circuit Breaker Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Circuit breaker installation in Houston, TX. New breakers, replacements, and AFCI/GFCI diagnostics by S Branch Electric. Call 832-484-0514.',
    h1: 'Circuit Breaker Installation in Houston, TX',
    intro: [
      'Circuit breakers are your electrical system’s critical front-line defense, cutting power instantly when an overload or short circuit occurs. S Branch Electric installs, diagnoses, and replaces circuit breakers for Houston homes and commercial buildings.',
      'A circuit breaker that repeatedly trips, refuses to stay reset, or buzzes under load is signaling a real problem. Calling master electrician Gustavo at 832-484-0514 ensures the symptom is diagnosed and corrected safely.',
    ],
    whatItIs: [
      'A circuit breaker is an electromechanical switch designed to protect conductors from heat damage caused by overcurrent or short circuits. Unlike old fuses, circuit breakers can be reset after an event.',
      'Breaker installation involves selecting the exact manufacturer-listed breaker type (Square D, Eaton, Siemens), matching the amperage to the conductor wire gauge, seating it firmly on the panel busbar, torquing the lug screw, and testing the trip mechanism.',
    ],
    warningSigns: [
      'A breaker trips repeatedly and refuses to stay reset when turned back on',
      'Visible scorching, heat discoloration, or melted plastic on a breaker switch',
      'Buzzing, humming, or sizzling sounds coming from inside the breaker panel',
      'Adding a new dedicated appliance circuit requiring a new GFCI, AFCI, or dual-function breaker',
    ],
    processSteps: [
      {
        title: 'Thermal & Amp-Clamp Testing',
        body: 'We test live current draw using digital amp clamps to distinguish between circuit overload, a wiring short, or a failing breaker.',
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
        body: 'We torque terminal screws to exact specifications and test trip sensitivity to guarantee safe overcurrent protection.',
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
        title: 'Breaker Replacement',
        body: 'Replacing worn-out, weak, or physically damaged breakers that no longer hold their rated load.',
      },
      {
        title: 'AFCI & GFCI Breaker Upgrades',
        body: 'Installing panel-level ground-fault and arc-fault protection to bring existing branch circuits up to modern code.',
      },
      {
        title: 'Dedicated Appliance Breakers',
        body: 'Adding high-amperage 30A, 40A, or 50A double-pole breakers for dryers, air conditioners, and EV chargers.',
      },
    ],
    considerations: [
      'Breaker amperage must strictly match the wire gauge (15A for 14 AWG, 20A for 12 AWG, 30A for 10 AWG).',
      'Breakers must be UL-listed for your specific panel brand (never force mismatched breaker brands).',
      'A breaker that trips immediately upon reset typically indicates a direct short circuit, not a faulty breaker.',
      'GFCI and AFCI breakers provide whole-circuit protection directly from the panel enclosure.',
    ],
    servicesProvided: [
      'Standard 15A and 20A single-pole breaker installation',
      'Double-pole 240V breaker installation (30A–60A)',
      'GFCI and AFCI arc-fault breaker installation',
      'Dual-function breaker installation',
      'Breaker diagnostic testing and load assessment',
      'Buzzing and overheating breaker replacement',
    ],
    faqs: [
      {
        question: 'Why does my circuit breaker keep tripping in my Houston home?',
        answer:
          'A breaker trips to prevent electrical fires caused by circuit overload or short circuits. Frequent tripping usually means too many high-wattage devices are on one circuit, a device has a short, or the breaker has weakened from age. Call 832-484-0514 to diagnose the cause safely.',
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
    metaTitle: 'Outlet & Switch Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Outlet and switch installation in Houston, TX. GFCI outlets, grounded receptacles, dimmers, and smart switches by S Branch Electric. Call 832-484-0514.',
    h1: 'Outlet & Switch Installation in Houston, TX',
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
        question: 'Can you add an outlet anywhere in my Houston home?',
        answer:
          'In most cases, yes. Adding an outlet involves routing wiring through wall cavities from an existing circuit or the main panel to the new location. We verify that the circuit has adequate spare capacity before adding new receptacles.',
      },
      {
        question: 'Why should I replace my old two-prong outlets in Houston?',
        answer:
          'Two-prong outlets lack an equipment grounding conductor. Upgrading to grounded, GFCI-protected receptacles prevents electrical shock, protects expensive computers and smart TVs from voltage spikes, and meets current NEC safety codes.',
      },
      {
        question: 'Can you install smart switches in an older Houston home?',
        answer:
          'Most smart switches require a neutral wire inside the switch box. In older Houston homes built before 1980, switch boxes often only contain a switch loop without a neutral. We inspect your switch box and can pull a neutral conductor if needed.',
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
    metaTitle: 'Electrical Troubleshooting & Repairs in Houston, TX | S Branch Electric',
    metaDescription:
      'Electrical troubleshooting and repairs in Houston, TX. Diagnose power outages, tripping breakers, and faulty wiring with S Branch Electric. Call 832-484-0514.',
    h1: 'Electrical Troubleshooting & Repairs in Houston, TX',
    intro: [
      'When your power goes out, breakers trip without warning, or outlets stop working, S Branch Electric delivers rapid, accurate diagnostics and lasting repairs. Master electrician Gustavo uses professional diagnostic equipment to trace faults to their exact root cause.',
      'Electrical problems are not only frustrating—they can be serious fire hazards. Rather than applying temporary bandaids, we identify whether the issue is a loose neutral, an overloaded branch, or a failed breaker, and provide a clean, code-compliant fix.',
    ],
    whatItIs: [
      'Electrical troubleshooting is the systematic diagnostic procedure of identifying why an electrical circuit is malfunctioning. Using digital multimeters, circuit tracers, and thermal scanners, we evaluate voltage drops, ground fault resistance, and continuity throughout the circuit path.',
      'Once the root failure is pinpointed—whether a burned wire nut in an attic junction box, a tripped GFCI upstream, or a fatigued breaker stab—we execute a permanent repair to restore safe power.',
    ],
    warningSigns: [
      'Outlets in an entire room suddenly stop working while the breaker looks ON',
      'Lights flickering or dimming when the air conditioner or refrigerator kicks on',
      'GFCI outlet trips immediately upon reset without any appliances plugged in',
      'Burning electrical odor, buzzing sounds, or charred outlet faceplates',
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
      'Houston thunderstorms frequently cause water intrusion into outdoor meters and breaker panels.',
      'Older homes with backstabbed wire connections behind outlets are prone to sudden connection failure.',
      'A GFCI that will not reset is often protecting you from a real downstream ground fault.',
      'Repeatedly resetting a tripping breaker without fixing the root cause can melt wire insulation and cause a fire.',
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
        question: 'My circuit breaker keeps tripping. What should I do right now?',
        answer:
          'Stop resetting the breaker repeatedly and call 832-484-0514. A tripping breaker is doing its job by cutting power to an unsafe circuit. Repeatedly resetting it can ignite an electrical fire behind your drywall. Call Gus to diagnose what is happening.',
      },
      {
        question: 'Some outlets in my Houston home stopped working. Can you fix that?',
        answer:
          'Yes. Dead outlets are one of our most common troubleshooting service calls. The cause is often a tripped GFCI outlet upstream, a loose backstab connection behind a receptacle, or a damaged breaker. We locate and repair the connection promptly.',
      },
      {
        question: 'Do you diagnose flickering lights in Houston?',
        answer:
          'Yes. Flickering lights can indicate a loose neutral connection in your breaker panel, an overloaded branch circuit, or incompatible LED dimmers. We test the voltage and connections to eliminate the hazard.',
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const getServiceByPath = (path: string) => services.find((s) => s.path === path);
