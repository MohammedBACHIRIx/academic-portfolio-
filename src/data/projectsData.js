export const projectsData = [
  {
    id: 'mg-farm',
    title: 'MG-FARM Project',
    description: 'Development of microgrid designs for isolated agricultural farms, integrating renewable energy sources to ensure sustainable and independent power generation.',
    details: {
      problem: 'Isolated agricultural communities in North Africa suffer from unreliable grid connectivity and high fuel costs for diesel generators, limiting farming yield and sustainability.',
      approach: 'Designed an optimal renewable microgrid integrating 25 kWp photovoltaic systems with advanced battery energy storage. We utilized Homer Pro for optimal sizing and developed hybrid AC/DC structures in MATLAB/Simulink.',
      findings: 'The optimized system reduced reliance on fossil fuels by 85% while maintaining a 99.9% power supply probability under fluctuating solar irradiance conditions.',
      impact: 'Provides a scalable, low-cost blueprint for rural electrification in developing nations, directly contributing to sustainable agricultural modernization.',
      role: 'Lead Researcher – Conducted system sizing, implemented control strategies, and performed experimental hardware validation.'
    },
    image: '/mg_farm.png',
    tech: ['Microgrids', 'Renewable Energy', 'System Design', 'Homer Pro'],
    link: 'https://doi.org/10.1016/j.rineng.2026.109238'
  },
  {
    id: 'fuzzy-logic-ems',
    title: 'Fuzzy Logic EMS for Microgrids',
    description: 'Research and implementation of fuzzy logic controllers to intelligently manage energy flow within hybrid AC and DC microgrids, improving efficiency and reliability.',
    details: {
      problem: 'Traditional PI/PID controllers struggle to handle the severe non-linearities and unpredictable power fluctuations inherent in renewable energy sources like wind and solar.',
      approach: 'Developed an intelligent Energy Management System (EMS) utilizing Fuzzy Logic Control (FLC). The controller dynamically evaluates battery state-of-charge (SoC), load demand, and generation to route power optimally.',
      findings: 'The FLC approach outperformed traditional PID control by reducing DC bus voltage settling time by 40% and eliminating dangerous overshoot during sudden load steps.',
      impact: 'Extends battery lifespan through optimized charge/discharge cycles and dramatically increases the resilience of sensitive DC microgrid components against power surges.',
      role: 'Algorithm Designer – Authored the fuzzy rule base, simulated the control loop in Simulink, and verified dynamic response parameters.'
    },
    image: '/fuzzy_ems.png',
    tech: ['Fuzzy Logic', 'Energy Management', 'Control Systems', 'Simulink'],
    link: 'https://doi.org/10.1007/978-981-96-0644-3_26'
  },
  {
    id: 'hil-simulation',
    title: 'Low-Cost HIL for Power Converters',
    description: 'System identification and Hardware-in-the-Loop (HIL) implementation for synchronous buck and boost converters, enabling robust, low-cost experimental validation.',
    details: {
      problem: 'Commercial Hardware-in-the-Loop (HIL) testing systems are prohibitively expensive for many academic labs, creating a barrier to safely testing advanced power electronics algorithms.',
      approach: 'Derived continuous-time and discrete-time mathematical models (white-box and black-box) for synchronous converters, embedding them onto a low-cost TMS320F28069M microcontroller to act as a real-time hardware simulator.',
      findings: 'Achieved an execution step time of 10 µs. The simulated hardware perfectly tracked the physical hardware dynamics, validated via Normalized Root Mean Square Error (NRMSE).',
      impact: 'Democratizes power electronics research by providing a safe, sub-$100 testing environment for complex control strategies before physical deployment.',
      role: 'Hardware Engineer – Derived state-space models, programmed the C2000 MCU, and conducted the comparative hardware validation.'
    },
    image: '/hil_converter.png',
    tech: ['HIL Simulation', 'Power Electronics', 'Modeling', 'TMS320F28069M'],
    link: 'https://doi.org/10.1088/1755-1315/1598/1/012041'
  }
];
