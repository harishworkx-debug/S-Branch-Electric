export interface ProjectCaseStudy {
  id: string;
  title: string;
  location: string;
  neighborhood: string;
  serviceSlug: string;
  serviceName: string;
  servicePath: string;
  clientName: string;
  clientMeta: string;
  clientQuote: string;
  problem: string;
  inspection: string;
  diagnosis: string;
  workPerformed: string[];
  outcome: string;
  tags: string[];
}

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: 'spring-branch-air-fryer-breaker-troubleshooting',
    title: 'Kitchen Circuit Breaker Troubleshooting & Surge Protection in Spring Branch',
    location: 'Houston, TX',
    neighborhood: 'Spring Branch (77055)',
    serviceSlug: 'electrical-troubleshooting',
    serviceName: 'Electrical Troubleshooting',
    servicePath: '/electrical-troubleshooting-houston-tx',
    clientName: 'Aaron S.',
    clientMeta: 'Spring Branch Resident · 6 reviews · Price: $1–200',
    clientQuote:
      'Gus was fantastic to work with. I called him on a Saturday after I blew a fuse in my kitchen by running my air fryer and toaster at the same time, and he actually answered the phone — which already impressed me. He showed up right on time Monday and was extremely professional and thorough. He clearly explained that my air fryer was pulling about 1700 watts, exceeding the 20-amp circuit. He also recommended a whole-house surge protector — no pressure, just solid guidance.',
    problem:
      'Homeowner blew a kitchen breaker on a Saturday morning while running a high-wattage air fryer and toaster oven on the same countertop circuit.',
    inspection:
      'Gustavo tested the kitchen branch circuits with a digital multimeter, inspected the electrical breaker box, verified wire gauge (12 AWG copper), and measured individual appliance draw under load.',
    diagnosis:
      'The air fryer pulled approximately 1,700 watts (~14.2 amps) and the toaster pulled ~900 watts (~7.5 amps). When operated together on the same 20-amp (2,400-watt continuous limit) circuit, total demand reached 21.7 amps, causing the thermal-magnetic breaker to trip safely as designed.',
    workPerformed: [
      'Tested breaker trip thresholds and verified no wire insulation damage inside outlet boxes',
      'Rebalanced countertop load distribution across separate kitchen small-appliance branch circuits',
      'Tightened bus bar lugs and checked torque settings inside the main breaker panel',
      'Provided clear operational advice and evaluated panel readiness for a whole-house surge protector upgrade',
    ],
    outcome:
      'Restored full kitchen power safely without nuisance tripping, and gave the homeowner transparent, pressure-free advice.',
    tags: ['Circuit Breakers', 'Troubleshooting', 'Kitchen Outlets', 'Surge Protection'],
  },
  {
    id: 'memorial-barrel-sauna-generator-interlock',
    title: 'Barrel Sauna 240V Dedicated Line & Whole-House Generator Interlock in Memorial',
    location: 'Houston, TX',
    neighborhood: 'Memorial (77024)',
    serviceSlug: 'electrical-panel-upgrades',
    serviceName: 'Electrical Panel Upgrades',
    servicePath: '/electrical-panel-upgrades-houston-tx',
    clientName: 'Melissa D. Zier',
    clientMeta: 'Memorial Homeowner · Local Guide · 25 reviews',
    clientQuote:
      'We are extremely pleased with the service provided by Gus Rivera at Spring Branch Electric. Gus has consistently demonstrated excellent communication, professionalism, and top-notch work. He helped us install the electrical needs for our barrel sauna and more recently handled updates to power our home with a whole-house generator. He walked us through every step and answered all our questions thoroughly.',
    problem:
      'Homeowner required high-voltage power for a newly installed outdoor barrel sauna, plus hurricane storm preparedness to backfeed critical household circuits using a portable generator.',
    inspection:
      'Master electrician Gustavo conducted an NEC Article 220 whole-home load calculation, inspected the existing 200A main service panel, and planned outdoor conduit trenching to the sauna location.',
    diagnosis:
      'The existing service panel had sufficient service capacity, but required a dedicated 50A 240V double-pole breaker and exterior weatherproof disconnect for the sauna heater, as well as a mechanical interlock kit and 50A exterior power inlet for the generator.',
    workPerformed: [
      'Installed dedicated 50A 240V circuit with liquid-tight flexible conduit and exterior safety disconnect at the sauna',
      'Installed a mechanical generator interlock kit directly on the main breaker panel faceplate',
      'Mounted a weatherproof 50A generator inlet box on the home exterior with safety bonding',
      'Performed full operational test with generator backfeed under simulated power outage conditions',
    ],
    outcome:
      'Sauna fully operational and safe; home is now storm-ready to power refrigerator, lights, and essential circuits during Gulf Coast outages.',
    tags: ['Sauna Wiring', 'Generator Interlock', 'Panel Upgrades', '240V Lines'],
  },
  {
    id: 'bellaire-post-flood-nema3r-panel-ev-charger',
    title: 'Elevated Weatherproof NEMA 3R Panel & Level 2 EV Charger in Bellaire',
    location: 'Bellaire, TX',
    neighborhood: 'Bellaire (77401)',
    serviceSlug: 'electrical-panel-installation',
    serviceName: 'Electrical Panel Installation',
    servicePath: '/electrical-panel-installation-houston-tx',
    clientName: 'Bellaire Property Owner',
    clientMeta: 'Residential Client · Verified Project',
    clientQuote:
      'Gus understood Bellaire’s strict municipal codes and drainage requirements right away. He elevated our exterior electrical equipment to meet flood mitigation guidelines and installed our Tesla EV charger cleanly in the garage.',
    problem:
      'Older home had a weathered exterior panel located close to grade with minor corrosion, and the owner purchased an electric vehicle requiring a 50A Level 2 charging station.',
    inspection:
      'Inspected the service mast, utility connection point, and exterior breaker enclosure for moisture ingress and flood elevation compliance.',
    diagnosis:
      'The existing exterior panel enclosure lacked modern weatherproof sealing and was positioned too low for local flood-risk standards. A replacement NEMA 3R enclosure elevated above base flood level with a dedicated 50A EV branch was needed.',
    workPerformed: [
      'Rebuilt weatherhead riser and elevated new 200A NEMA 3R outdoor enclosure to meet flood-resilience guidelines',
      'Drove dual 8-foot copper ground rods and bonded water piping per NEC 250',
      'Ran 6 AWG copper conduit run to garage and installed a dedicated NEMA 14-50 EV charging receptacle',
      'Secured municipal permit inspection and utility reconnection coordination',
    ],
    outcome:
      'Completely flood-resilient service panel with rapid overnight EV charging capability.',
    tags: ['Panel Replacement', 'EV Charger', 'Flood Mitigation', 'Weatherproof Panel'],
  },
  {
    id: 'katy-afci-breaker-nuisance-tripping-surge',
    title: 'AFCI Nuisance Trip Diagnostic & Surge Protection in Katy',
    location: 'Katy, TX',
    neighborhood: 'Cinco Ranch / Katy (77494)',
    serviceSlug: 'circuit-breaker-installation',
    serviceName: 'Circuit Breaker Installation',
    servicePath: '/circuit-breaker-installation-houston-tx',
    clientName: 'Christopher Highsmith',
    clientMeta: 'Katy Homeowner · Verified Project',
    clientQuote:
      'Gus was able to track down an elusive tripping problem that another company couldn’t figure out. He took the time to check the fixtures and fixed the pinched neutral. Installed a whole-house surge protector while he was here. Great communication from start to finish.',
    problem:
      'A bedroom AFCI circuit breaker was nuisance-tripping intermittently every evening, leaving the master bedroom without lighting.',
    inspection:
      'Gustavo utilized an advanced arc-fault circuit analyzer to test line impedance, neutral-to-ground isolation, and individual fixture junction boxes on the circuit.',
    diagnosis:
      'A ceiling recessed LED disc light screw had pinched a neutral conductor against the metal junction box housing, causing micro-arcing faults detected only by the AFCI breaker.',
    workPerformed: [
      'Disassembled affected recessed light, trimmed and re-spliced the pinched neutral wire, and reinsulated the connection',
      'Re-torqued the AFCI breaker and performed calibrated fault simulation tests',
      'Installed a Type 2 Whole-Home Surge Protective Device (SPD) inside the main panel to guard against grid voltage spikes',
    ],
    outcome:
      'Zero tripping incidents since repair; complete whole-house surge protection installed.',
    tags: ['AFCI Breakers', 'Arc Fault Diagnostics', 'Surge Protection', 'Recessed Lighting'],
  },
  {
    id: 'spring-storm-damage-weatherhead-mast-repair',
    title: 'Emergency Storm Weatherhead Mast Repair & Panel Heavy-Up in Spring',
    location: 'Spring, TX',
    neighborhood: 'Champion Forest / Spring (77379)',
    serviceSlug: 'electrical-troubleshooting',
    serviceName: 'Electrical Troubleshooting',
    servicePath: '/electrical-troubleshooting-houston-tx',
    clientName: 'Champion Forest Resident',
    clientMeta: 'Emergency Service Call · Post-Storm Recovery',
    clientQuote:
      'A heavy oak branch tore our service line clean off the roof during a thunderstorm. Gus responded immediately, coordinated with CenterPoint to de-energize the drop, and rebuilt the entire mast and meter socket by Sunday afternoon.',
    problem:
      'A storm-downed pine tree limb struck the overhead utility service drop, bending the conduit mast and pulling the meter can away from the exterior brick wall.',
    inspection:
      'Emergency on-site assessment of service entrance conductors, roof flashing, meter base structural integrity, and interior panel bus.',
    diagnosis:
      'Conduit was sheared at the roofline and meter socket lugs were compromised, requiring complete service mast replacement before CenterPoint Energy could legally restore power.',
    workPerformed: [
      'Coordinated with CenterPoint Energy for emergency utility drop disconnection',
      'Rebuilt heavy-gauge 2-inch rigid galvanized steel service mast with new roof penetration flashing',
      'Replaced meter socket and modernized main distribution panel to 200 amps',
      'Passed emergency city inspection and coordinated same-day power release',
    ],
    outcome:
      'Full electrical power restored safely within 24 hours of severe storm damage.',
    tags: ['Storm Damage', 'Emergency Service', 'Service Mast Repair', 'CenterPoint Coordination'],
  },
];

